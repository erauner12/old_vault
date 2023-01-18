---
zet: 202202070952
date: 2022-02-07
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → 
# create all dc records

## fra1 
- .eu

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.180.130"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb.fra1
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.180.131"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb-api.fra1
```


## sc4
- .com




```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "199.102.178.130"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb.sc4
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "199.102.178.142"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb-api.sc4
```


## sea1
- .com




```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.243.130"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb.sea1
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.243.61"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb-api.sea1
```

## den 
- .com


```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "199.102.177.130"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb.den
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "199.102.177.142"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb-api.den
```

## ger
- .eu




```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.250.130"}' -X POST https://daas.medallia.com/zones/medallia.eu/records/lb.ger
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.250.131"}' -X POST https://daas.medallia.com/zones/medallia.eu/records/lb-api.ger
```


## can
- .ca




```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.178.130"}' -X POST https://daas.medallia.com/zones/medallia.ca/records/lb.can
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.178.142"}' -X POST https://daas.medallia.com/zones/medallia.ca/records/lb-api.can
```

## lon
- .eu




```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "199.102.176.251"}' -X POST https://daas.medallia.com/zones/medallia.eu/records/lb.lon
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "199.102.176.142"}' -X POST https://daas.medallia.com/zones/medallia.eu/records/lb-api.lon
```

## yul1
- .ca



```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.254.130"}' -X POST https://daas.medallia.com/zones/medallia.ca/records/lb.yul1
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.254.142"}' -X POST https://daas.medallia.com/zones/medallia.ca/records/lb-api.yul1
```


## syd1
 - .au




 ```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.247.130"}' -X POST https://daas.medallia.com/zones/medallia.com.au/records/lb.syd1
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.247.131"}' -X POST https://daas.medallia.com/zones/medallia.com.au/records/lb-api.syd1
```


## sin1
- .com


```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.176.130"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb.sin1
```

```
curl -H "Authorization: bearer $DAAS_TOKEN" -H "Content-Type: application/json" -d '{"record_type": "A", "record_value": "147.75.176.131"}' -X POST https://daas.medallia.com/zones/medallia.com/records/lb-api.sin1
```
# References


# Incoming Links
```dataview
list
where contains(this.file.inlinks, file.link) 
      and !contains(this.file.outlinks, file.link)
	  and !contains(file.name,"_")
```
# Metadata

context:: #📥/❓
status:: #🌱/❓