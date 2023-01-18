---
zet: 202201141204
date: 2022-01-14
aliases:
- 
---

Related → [[Medallia]]
# sre-python-lib


## sre-python-lib (medallia_sre)

1. Run the [jenkins](https://jenkins.eng.medallia.com/controller1/job/sre/job/SRE%20Python%20Library/) job of the respective branch
2. copy the normalized name: `0.7.5+20220114174100.prodsvc.12380.512d3bd`
3. update `requirements.txt` on your branch
4. Run this [jenkins](https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/Provisioning%20NG%20image%20(Py%20Code)/job/PRODSVC-12380/) job to update prov-ng
	1. or this [jenkins folder](<https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/Provisioning%20NG%20image%20(Py%20Code)/>) for what branch it is
5. Update `_generic.yaml` locally or on scratchy pod with updated `prov-ng`



# References


# Incoming Links
```dataview
list
where contains(this.file.inlinks, file.link) 
      and !contains(this.file.outlinks, file.link)
	  and !contains(file.name,"_")
```
# Metadata
context:: #👔/❓
status:: #🌲/⚙
