---
zet: 202201191540
date: 2022-01-19
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# netscaler loadbalancer notes

## Summary
- legacy
- near future

- LBAAS = load balancing as a service
- DAAS = dns as a service
- Contour
	- public cloud

- check a tenant's config
```bash
ssh netscaler sh run | grep <tenant name>
```


- check to see if a specific lb and what the health is
```bash
> sh lb vserver [sretestpkgmig-fe1.medallia.ca](http://sretestpkgmig-fe1.medallia.ca/)  
[sretestpkgmig-fe1.medallia.ca](http://sretestpkgmig-fe1.medallia.ca/) (0.0.0.0:0) - HTTP Type: ADDRESS  
State: DOWN  
Last state change was at Fri Oct 15 16:51:45 2021  
Time since last state change: 0 days, 02:09:02.600  
Effective State: UP  ARP:DISABLED  
Client Idle Timeout: 180 sec  
Down state flush: DISABLED  
Disable Primary Vserver On Down : DISABLED  
Appflow logging: ENABLED  
Port Rewrite : DISABLED  
No. of Bound Services :  2 (Total)   0 (Active)  
Configured Method: LEASTCONNECTION BackupMethod: ROUNDROBIN  
Mode: IP  
Persistence: NONE  
Backup: maintenance-page  
Vserver IP and Port insertion: OFF  
Push: DISABLED Push VServer:  
Push Multi Clients: NO  
Push Label Rule: none  
L2Conn: OFF  
Skip Persistency: None  
Listen Policy: NONE  
IcmpResponse: PASSIVE  
RHIstate: PASSIVE  
New Service Startup Request Rate: 0 PER_SECOND, Increment Interval: 0  
Mac mode Retain Vlan: DISABLED  
DBS_LB: DISABLED  
Process Local: DISABLED  
Traffic Domain: 0  
TROFS Persistence honored: ENABLED  
Retain Connections on Cluster: NO1) sretestpkgmig-fe1 (10.229.4.66: 9100) - HTTP State: DOWN Weight: 1  
2) sretestpkgmig-fe1-crossdc (10.197.9.162: 9100) - HTTP State: DOWN Weight: 11) CSPolicy: [sretestpkgmig-fe1.medallia.ca](http://sretestpkgmig-fe1.medallia.ca/) CSVserver: 1default-https-10_239_120_130 Priority: 1030 Hits: 31  
2) CSPolicy: [sretestpkgmig-fe1.yul1.medallia.ca](http://sretestpkgmig-fe1.yul1.medallia.ca/) CSVserver: 1default-https-10_239_120_130 Priority: 1030 Hits: 0  
 Done
 ```

- check specific container name
```bash
> sh run | grep container_10_229_4_66
add server container_10_229_4_66 10.229.4.66
add service sretestpkgmig-fe1 container_10_229_4_66 HTTP 9100 -gslb NONE -maxClient 0 -maxReq 0 -cip ENABLED X-Forwarded-For -usip NO -useproxyport YES -sp OFF -cltTimeout 180 -svrTimeout 360 -CKA YES -TCPB YES -CMP NO -downStateFlush DISABLED
```

- Check health of a specific container
```bash
> sh server container_10_229_4_66
	Name:   container_10_229_4_66      State:ENABLED
	IPAddress:     10.229.4.66

1)	sretestpkgmig-fe1 (10.229.4.66:9100) - HTTP
	State: DOWN
	Last state change was at Fri Oct 15 16:17:44 2021
	Time since last state change: 0 days, 02:46:44.250
	Server Name: container_10_229_4_66
	Server ID : None 	Monitor Threshold : 0
	Max Conn: 0	Max Req: 0	Max Bandwidth: 0 kbits
	Use Source IP: NO
	Client Keepalive(CKA): YES
	Monitoring Owner: 0
	Access Down Service: NO
	TCP Buffering(TCPB): YES
	HTTP Compression(CMP): NO
	Idle timeout: Client: 180 sec	Server: 360 sec
	Client IP: ENABLED X-Forwarded-For
	Cacheable: NO
	SC: OFF
	SP: OFF
	Down state flush: DISABLED
	Monitor Connection Close : NONE
	Appflow logging: ENABLED
	Process Local: DISABLED
	Traffic Domain: 0
 Done
 ```


- Here is everything I had to remove and create to get this tenant's fe1 node effectively pointed to the target dc
```bash
rm lb vserver sretestpkgmig-fe1.medallia.com HTTP 0.0.0.0 0 -persistenceType NONE -cltTimeout 180 -downStateFlush DISABLED -backupVServer maintenance-page

rm cs policy sretestpkgmig-fe1.medallia.com -rule "REQ.HTTP.HEADER Host == \'sretestpkgmig-fe1.medallia.com\'"
rm cs policy sretestpkgmig-fe1.yul1.medallia.com -rule "REQ.HTTP.HEADER Host == \'sretestpkgmig-fe1.yul1.medallia.com\'"

unbind lb vserver sretestpkgmig.medallia.com sretestpkgmig-fe1-crossdc
unbind lb vserver sretestpkgmig.medallia.com sretestpkgmig-fe1
unbind lb vserver sretestpkgmig-fe1.medallia.com sretestpkgmig-fe1
unbind lb vserver sretestpkgmig-fe1.medallia.com sretestpkgmig-fe1-crossdc


unbind cs vserver 1default-https-10_239_120_130 -policyName sretestpkgmig-fe1.medallia.com -targetLBVserver sretestpkgmig-fe1.medallia.com -priority 1030
unbind cs vserver 1default-https-10_239_120_130 -policyName sretestpkgmig-fe1.yul1.medallia.com -targetLBVserver sretestpkgmig-fe1.medallia.com -priority 1030

unbind cs vserver 1default-http-10_239_120_130 -policyName sretestpkgmig-fe1.medallia.com -targetLBVserver sretestpkgmig-fe1.medallia.com -priority 1030
unbind cs vserver 1default-http-10_239_120_130 -policyName sretestpkgmig-fe1.yul1.medallia.com -targetLBVserver sretestpkgmig-fe1.medallia.com -priority 1030

------------------------------------------------------------------------------------------------------




add lb vserver sretestpkgmig.medallia.ca HTTP 0.0.0.0 0 -persistenceType NONE -cltTimeout 180 -downStateFlush DISABLED -backupVServer maintenance-page
add lb vserver sretestpkgmig-fe1.medallia.ca HTTP 0.0.0.0 0 -persistenceType NONE -cltTimeout 180 -downStateFlush DISABLED -backupVServer maintenance-page



add cs policy sretestpkgmig-fe1.medallia.ca -rule "REQ.HTTP.HEADER Host == \'sretestpkgmig-fe1.medallia.ca\'"
add cs policy sretestpkgmig-fe1.yul1.medallia.ca -rule "REQ.HTTP.HEADER Host == \'sretestpkgmig-fe1.yul1.medallia.ca\'"



bind lb vserver sretestpkgmig.medallia.ca sretestpkgmig-fe1-crossdc
bind lb vserver sretestpkgmig.medallia.ca sretestpkgmig-fe1

bind lb vserver sretestpkgmig-fe1.medallia.ca sretestpkgmig-fe1
bind lb vserver sretestpkgmig-fe1.medallia.ca sretestpkgmig-fe1-crossdc


bind cs vserver 1default-https-10_239_120_130 -policyName sretestpkgmig-fe1.medallia.ca -targetLBVserver sretestpkgmig-fe1.medallia.ca -priority 1030
bind cs vserver 1default-https-10_239_120_130 -policyName sretestpkgmig-fe1.yul1.medallia.ca -targetLBVserver sretestpkgmig-fe1.medallia.ca -priority 1030

bind cs vserver 1default-http-10_239_120_130 -policyName sretestpkgmig-fe1.medallia.ca -targetLBVserver sretestpkgmig-fe1.medallia.ca -priority 1030
bind cs vserver 1default-http-10_239_120_130 -policyName sretestpkgmig-fe1.yul1.medallia.ca -targetLBVserver sretestpkgmig-fe1.medallia.ca -priority 1030
```




---




# References


# Incoming Links
```dataview
list
where contains(this.file.inlinks, file.link) 
      and !contains(this.file.outlinks, file.link)
	  and !contains(file.name,"_")
```
# Metadata

context:: #👔/❓
status:: #🌲/⚙