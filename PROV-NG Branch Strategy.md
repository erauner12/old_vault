---
zet: 202202231014
date: 2022-02-23
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → 
# PROV-NG Branch Strategy


## Python Code
https://medallia.slack.com/archives/C02L9JDEZKK/p1645605975174349

Hi guys - as there seems to be some confusion about prod fixes/branching here’s the ‘recommended way’ for the python step code  

1.  create a new branch from your `delivery*` branch (`fix-branch` )
2.  implement fixes
3.  test fixes - either locally or adding the `fix-branch` to the list of ‘to-be-built’ branches in the Jenkins job configuration
4.  create PR from `fix-branch` to `delivery*`
5.  approve/merge
6.  build on Jenkins, push to prod (by following the `sre-triggers` process - [@kamil](https://medallia.slack.com/team/U0116EB6WF8) ?)
7.  create PR from `delivery*` to `master` (so all fixes are also in `master` and branches are not diverging too much)

In general, never branch out from `master` or merge `master` to `delivery*` as a part of a production fix - this should be done as often as possible but in coordination with other teams (check/ask what changes are there) and while keeping in mind that the changes might break something and require testing on your side


## Go Code
https://medallia.slack.com/archives/C02L9JDEZKK/p1645606841506309

1.  new branch from `delivery`
2.  implement fix
3.  test changes locally and ideally also with `go test -v ./test/*.go`
4.  create PR from your branch to `delivery`
5.  resolve conversation/approve/merge
6.  build on Jenkins delivery pipeline
7.  create PR from `delivery` to `master` (so all fixes are also in `master` and branches are not diverging too much)
8.  create new branch in deployment-infra repo and update image tags in `apps/sre-triggers/[DC]/`
9.  create PR from new branch in deployment-infra to master
10.  approve/merge (argocd will deploy automatically after merge)


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