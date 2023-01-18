---
zet: 202201121452
date: 2022-01-12
aliases:
- 
---

Related → <% tp.file.cursor(2) %>
# How to use s3


ls it first
```
[12:51:57][medallia@den-prod-dep01:~]$ aws --endpoint=http://s3.den.medallia.com --profile=provisioning-ng-dev-data s3 ls s3://provisioning-ng-dev-data/mec/sretest01sea1.vars.yaml

2020-11-26 01:38:47       1604 sretest01sea1.vars.yaml
```

copy to stdout:
```
aws s3 cp --profile=atlas-config-secrets-pure --endpoint=http://s3.yul1.medallia.ca/ s3://atlas-config-secrets/express-yul1.medallia.ca/s3-cache-access-key -
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
status:: #🌲/⚙
context:: #👔/❓