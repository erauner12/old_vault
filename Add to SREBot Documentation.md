---
zet: 202204131017
date: 2022-04-13
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# Add to SREBOt Documentation

## Call an incident
```
!incident sev3 various express nodes in error due to district one Errors
```
- https://medallia.slack.com/archives/C8XCPL3UN/p1649701079949019


## Update Issue
```
!eeq followup Disk alerts on the node-us1/us2/us3 , if not should be created
```
- https://medallia.slack.com/archives/C03B1FQNKGS/p1649703909435999

## Close out issue
```
!eeq resolve
```
- https://medallia.slack.com/archives/C03B1FQNKGS/p1649704071600369





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