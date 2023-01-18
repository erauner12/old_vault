---
zet: 202203151016
date: 2022-03-15
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# Training

[Internal Team Training - Reporting Data Platform - Pacific](https://pacific.medallia.com/pages/viewpage.action?spaceKey=DP&title=Internal+Team+Training)



# References


# Incoming Links
```dataview
list
where contains(this.file.inlinks, file.link) 
      and !contains(this.file.outlinks, file.link)
	  and !contains(file.name,"_")
```
# Metadata

things:: 
context:: #📥/❓
status:: #🌱/❓