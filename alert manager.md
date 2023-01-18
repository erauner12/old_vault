---
zet: 202202081517
date: 2022-02-08
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# alert manager

- disable all the fes and bes
- 



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