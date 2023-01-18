---
zet: 202202071202
date: 2022-02-07
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# medallia alerting

https://alertmanager.fra1.medallia.eu/#/alerts





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