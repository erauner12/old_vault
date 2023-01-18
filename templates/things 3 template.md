---
zet: <% tp.date.now("YYYYMMDDHHmm") %>
date: <% tp.date.now("YYYY-MM-DD") %>
aliases:
- 
---

Related → <%tp.file.cursor(2)%>
# <%tp.file.title%>

<%tp.file.cursor(1)%>



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
status:: #🌱/✅