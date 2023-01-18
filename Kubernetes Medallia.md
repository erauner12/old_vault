---
zet: 202201181524
date: 2022-01-18
aliases:
- 
---

Related → [[Kubernetes]]
# Kubernetes Medallia

It’ll always be `kubernetes-dashboard.$DC.medallia.$TLD`

https://pacific.medallia.com/pages/viewpage.action?spaceKey=CE&title=Kubernetes+Dashboard



## DC
AMS1
https://kubernetes-dashboard.ams1.medallia.eu/

CAN
https://kubernetes-dashboard.can.medallia.ca/

DEN	
https://kubernetes-dashboard.den.medallia.com/

GER	
https://kubernetes-dashboard.ger.medallia.eu/

LON	
https://kubernetes-dashboard.lon.medallia.eu/

SC4	
https://kubernetes-dashboard.sc4.medallia.com/

SEA1	
https://kubernetes-dashboard.sea1.medallia.com/

SIN1	
https://kubernetes-dashboard.sin1.medallia.com/

SYD1	
https://kubernetes-dashboard.syd1.medallia.com.au/

YUL1
https://kubernetes-dashboard.yul1.medallia.ca/

## Find Secrets

https://medallia.slack.com/archives/C022XV98JH4/p1642373768044300?thread_ts=1642094336.043500&cid=C022XV98JH4

You can also use the Kubernetes dashboard, find the pod/service you want to know the secret of and then click on the **eye** icon to reveal the secret value.. Or you can click on `secrets` in the left hand control panel and view all secrets grouped (as long as you’ve set your namespace at the top of the page)


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