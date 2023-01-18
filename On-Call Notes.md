---
zet: 202204121147
date: 2022-04-12
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# On-Call Notes


[Severity](https://medallia.slack.com/archives/D023SNY7TQX/p1649781840262139)
```
Importan Cliente (sev1)
Prod (sev2)
customer facing DEMO (sev2)
SBX (sev4)
Internal testing (sev5)
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

things:: 
context:: #👔/❓
status:: #🌱/❓