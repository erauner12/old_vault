---
zet: 202204131025
date: 2022-04-13
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# SREBot Redesign



## Get Alert Manager

https://medallia.slack.com/archives/D02JV6KRTQF/p1649863348607999




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
context:: #👔/❓
status:: #🌱/❓