---
date: 2022-01-06
aliases:
  - 
---

# Making changes to sre-python-lib


## Production Changes
Depends on the nature of change(s):  
-   standard/development change - create branch from `master` make changes, create PR to `master`
-   hotfix for production create branch from `delivery` make changes, create PR to `delivery` and `master`

but for regular production changes. I believe anything which goes to production should come from delivery branch. Standard releases are typically created by merging master to delivery - like this one:  
[https://github.medallia.com/medallia/sre-python-lib/pull/43](https://github.medallia.com/medallia/sre-python-lib/pull/43)


## branch specific changes:

[https://jenkins.eng.medallia.com/controller1/job/sre/job/SRE Python Library/](https://jenkins.eng.medallia.com/controller1/job/sre/job/SRE%20Python%20Library/)

[[@ Larry Hartsook]]
> The changes I made to Blitzen.py were merged to master. I’m guessing I need to cherry-pick them to the PRODSVC-12380 branch. The build for that branch will run automatically at that point, when it’s done I guess I’d extract the tag from the log file. E.g., in the last run on that branch, the tag was `0.7.5+20220106132538.prodsvc.12380.9180654`

Example jenkins job:
[https://jenkins.eng.medallia.com/controller1/job/sre/job/SRE Python Library/job/PRODSVC-12380/30/console](https://jenkins.eng.medallia.com/controller1/job/sre/job/SRE%20Python%20Library/job/PRODSVC-12380/30/console)

> After the build finished, I updated `requirements.txt` and the correct lib versions got pulled in. Just pushed those updates on the PRODSVC-12469a branch in provisioning-ng


# Metadata

tags:  
status:: #🌲/👔
context:: #👔/❓
