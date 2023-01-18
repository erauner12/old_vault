---
zet: 202202231201
date: 2022-02-23
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# Jenkins - Automate pushing changes

[Things](things:///show?query=Jenkins%20-%20Automate%20pushing%20changes)


## Problem
it would be awesome, but we need to check if it aligns with Kamil and Michal’s models

-   standard/development change - create branch from `master` make changes, create PR to `master`
-   hotfix for production create branch from `delivery` make changes, create PR to `delivery` and `master`


## Process

one provisioning ng change  
-   master, build image
-   delivery, build image
-   create PR to sre-triggers
-   master, build image
-   delivery, build image
-   deployment-infra, create PR add newly built images


## Git
- ideally we want to deploy to dev the latest master, and the prod the latest tag

## Trigger
- Would be manual at first


## Options
- no input required, just ensure that your changes of provisioning-ng are in master and delivery.  
-   could choose if you want to do just one or both
-   for den or sc4 or both


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