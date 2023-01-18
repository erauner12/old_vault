---
zet: 202201241205
date: 2022-01-24
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# reset configuration express cluster quick
d

```bash
dep-simple-node-config sretest03fra1-be express-e678.176 3f65b97d3028811f05ab07933543c1a68c789e51
stop sretest03fra1-be
kubectl delete pod/sretest03fra1-be --grace-period 0 --force -n tenant-120688-prod --context fra1
start sretest03fra1-be

dep-simple-node-config sretest03fra1-fe1 express-e678.176 3f65b97d3028811f05ab07933543c1a68c789e51
stop sretest03fra1-fe1
kubectl delete pod/sretest03fra1-fe1 --grace-period 0 --force -n tenant-120688-prod --context fra1
start sretest03fra1-fe1

dep-simple-node-config sretest03fra1-fe2 express-e678.176 3f65b97d3028811f05ab07933543c1a68c789e51
stop sretest03fra1-fe2
kubectl delete pod/sretest03fra1-fe2 --grace-period 0 --force -n tenant-120688-prod --context fra1
start sretest03fra1-fe2

dep-simple-node-config sretest03fra1-fe3 express-e678.176 3f65b97d3028811f05ab07933543c1a68c789e51
stop sretest03fra1-fe3
kubectl delete pod/sretest03fra1-fe3 --grace-period 0 --force -n tenant-120688-prod --context fra1
start sretest03fra1-fe3


maintexit sretest03fra1-fe1
maintexit sretest03fra1-fe2
maintexit sretest03fra1-fe3
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

context:: #👔/❓
status:: #🌱/❓