---
zet: <% tp.date.now("YYYYMMDDHHmm") %>
date: <% tp.date.now("YYYY-MM-DD") %>
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → [[{{fromTitle}}]]

# {{newTitle}}

{{content}}


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