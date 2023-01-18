---
zet: 202204131455
date: 2022-04-13
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# JIRA Design


PROJECT = PRODSVC
f
actual project = EPIC
- `Q1FY22 - Workloads Migration Project`
- `Q2FY22 - SREBot`

label = `mecsre`

component
- not sure yet


I made a new epic to contain jiras related to SREBot:  

-   [https://jira.medallia.com/browse/PRODSVC-13243](https://jira.medallia.com/browse/PRODSVC-13243)

And I made a team to hold documentation related SRE MEC  

-   [https://pacific.medallia.com/display/SREMEC/SRE+MEC](https://pacific.medallia.com/display/SREMEC/SRE+MEC)





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