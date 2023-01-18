---
zet: 202201071129
date: 2022-01-07
aliases:
- 
---

# DNS Record Layout



## Internal

- [x] `A Record`  point to new lb
```python
internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti', 'record_type': 'A', 'record_value': '10.175.120.130'}
```

- [x] `A Record` internal (point to new dc)
```python

internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti-setup', 'record_type': 'CNAME', 'record_value': 'hilti.medallia.eu'}
internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti-be', 'record_type': 'CNAME', 'record_value': 'hilti.medallia.eu'}
internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti-fe1', 'record_type': 'CNAME', 'record_value': 'hilti.medallia.eu'}
internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti-fe2', 'record_type': 'CNAME', 'record_value': 'hilti.medallia.eu'}
internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti-fe3', 'record_type': 'CNAME', 'record_value': 'hilti.medallia.eu'}
```

- [ ] `CNAME Record` - api internal (point to new `dc`)

```python
internal_zones_records_create{'dc': 'ger', 'zone_name': 'medallia.eu', 'record_name': 'hilti.api', 'record_type': 'CNAME', 'record_value': 'bnpparibas.api.medallia'
```


## External

- [x] `A Record` - point to new LB
```python
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti', 'record_type': 'A', 'record_value': '147.75.250.130'})
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti.api', 'record_type': 'A', 'record_value': '147.75.250.131'})
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti-setup', 'record_type': 'A', 'record_value': '147.75.250.130'})
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti-be', 'record_type': 'A', 'record_value': '147.75.250.130'})
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti-fe1', 'record_type': 'A', 'record_value': '147.75.250.130'})
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti-fe2', 'record_type': 'A', 'record_value': '147.75.250.130'})
client zones_records_create({'zone_name': 'medallia.eu', 'record_name': 'hilti-fe3', 'record_type': 'A', 'record_value': '147.75.250.130'})
```


- [ ] `CNAME Record` - firstAPI external (point to new `dc`)
```python
client zones_records_create({'zone_name': 'medallia.com', 'record_name': 'hilti.apis', 'record_type': 'CNAME', 'record_value': 'apis.ger.medallia.com'})
```

- [ ] `CNAME Record` - second API external (point to new `dc`)
```python
client zones_records_create({'zone_name': 'medallia.com', 'record_name': 'hilti-hilti.apis', 'record_type': 'CNAME', 'record_value': 'apis.ger.medallia.com'})
```




## Validate 
### external

```bash
2022-01-07 14:16:46,081 DEBUG dns_mixin external sretestmig04ger-setup.medallia.eu A record resolves to ['147.75.180.130']
2022-01-07 14:16:46,220 DEBUG dns_mixin external sretestmig04ger-be.medallia.eu A record resolves to ['147.75.180.130']
2022-01-07 14:16:46,320 DEBUG dns_mixin external sretestmig04ger-fe1.medallia.eu A record resolves to ['147.75.180.130']
2022-01-07 14:16:46,410 DEBUG dns_mixin external sretestmig04ger-fe2.medallia.eu A record resolves to ['147.75.180.130']
2022-01-07 14:16:46,500 DEBUG dns_mixin external sretestmig04ger-fe3.medallia.eu A record resolves to ['147.75.180.130']
2022-01-07 14:16:46,631 DEBUG dns_mixin external sretestmig04ger.medallia.eu A record resolves to ['147.75.180.130']
```

#### API
##### A Record
```bash
2022-01-07 14:19:13,798 DEBUG dns_mixin external sretestmig04ger.api.medallia.eu A record resolves to ['147.75.180.131']

```

##### CNAME Record apis - First
```bash
2022-01-07 14:19:13,859 DEBUG dns_mixin external sretestmig04ger.apis.medallia.com CNAME record resolves to ['apis.fra1.medallia.com']
```

##### CNAME Record - Second
```bash
2022-01-07 14:19:13,918 DEBUG dns_mixin external sretestmig04ger-sretestmig04ger.apis.medallia.com CNAME record resolves to ['apis.fra1.medallia.com']
```


### internal 
#### API
##### CNAME 
```python
2022-01-07 14:21:40,105 DEBUG remote Command dig @10.255.255.255 sretestmig04ger.api.medallia.eu A +short on host ssh1.fra1.medallia.eu completed successfully.
  stdout: 147.75.180.131
```


# Metadata

status:: #🌲/👔
tags: [<% tp.file.cursor(2) %>]


context:: #👔/❓
