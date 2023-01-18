---
zet: 202202221141
date: 2022-02-22
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → [[Helm]]
# Using Helm to deploy express


	https://github.medallia.com/Atlas/cloud-deployment/tree/express-helm

https://github.medallia.com/Atlas/cloud-deployment/pull/4011
- https://medallia.slack.com/archives/D029VA3J80H/p1645541420226709


![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [2 hours ago](https://medallia.slack.com/archives/D029VA3J80H/p1645546301317719?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Sure I will take a look! I have not used helm outside of passing into spinnaker but I suspect it will be similar

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [2 hours ago](https://medallia.slack.com/archives/D029VA3J80H/p1645546345289209?thread_ts=1645541420.226709&cid=D029VA3J80H)  

out of curiosity, what challenges did we face with deployingn via kustomize

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645546452814299?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Also, would helm deployment be somehow be similarly managed by argo or no?Edit: Ah I see, that it would based on some of the annotations. Nice (edited) 

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645546877908009?thread_ts=1645541420.226709&cid=D029VA3J80H)  

thanks!  
yes, the plan is to use argocd to deploy - [https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d7714da27ca99/metadata/phx1/sre_express_sretest05phx1_prod.yaml](https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d7714da27ca99/metadata/phx1/sre_express_sretest05phx1_prod.yaml)  
there were several issues with kustomize  

-   there is no ‘ignore if not present’ for any transformers … so we couldn’t model the provisioning/upgrade dependencies (as there needs to be a node without a dependency)
-   not possible to change structure of the manifests (e.g. add a new one for extra frontent node or an ingress for a new tenant)
-   there is no way how you can define values (e.g. express version) at one place and propagate these to all places where needed (commandline in container and image tag)
-   it’s necessary to generate overly complex transformation ‘recipe’ for each express instance … like [https://github.medallia.com/Atlas/cloud-deployment/blob/master/apps/express/overlays/jed1/newmetrics/express-transformer.yaml](https://github.medallia.com/Atlas/cloud-deployment/blob/master/apps/express/overlays/jed1/newmetrics/express-transformer.yaml)

(edited)

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645547019036519?thread_ts=1645541420.226709&cid=D029VA3J80H)  

so though kustomize is likely a great tool for “standard” kubernetes deployments where you can model manifests to be easily ‘kustomizable’ it fails for a legacy behemoth like express is where you can’t go a standard way

![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d@2x.png)1
![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645547683695949?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Do you have example pipeline showing a test of this being deployed?

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645547926689649?thread_ts=1645541420.226709&cid=D029VA3J80H)  

this is a pipeline for kustomize based deployment [https://argo-workflow.den.medallia.com/workflows/sre-provisioning/mec-provisioning-oci-sretest05phx1-ndr4m?tab=workflow](https://argo-workflow.den.medallia.com/workflows/sre-provisioning/mec-provisioning-oci-sretest05phx1-ndr4m?tab=workflow)  
the helm rewrite is not yet integrated (what’s in git was created manually) (edited) 

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548130995929?thread_ts=1645541420.226709&cid=D029VA3J80H)  

this is the helm created instance in argocd [https://argocd.phx1.medallia.com/applications/sretest05phx1](https://argocd.phx1.medallia.com/applications/sretest05phx1)

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548170354429?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Nice!

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548182649849?thread_ts=1645541420.226709&cid=D029VA3J80H)  

So you are just executing helm locally atm?

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548306262719?thread_ts=1645541420.226709&cid=D029VA3J80H)  

sorry - I likely misunderstood what do you mean by “pipeline”  
I’m running helm locally only for debugging purposes (to render templates)  
[https://argocd.phx1.medallia.com/applications/sretest05phx1](https://argocd.phx1.medallia.com/applications/sretest05phx1) was deployed (almost) standard way - by creating an argo application from [https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d7714da27ca99/metadata/phx1/sre_express_sretest05phx1_prod.yaml](https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d7714da27ca99/metadata/phx1/sre_express_sretest05phx1_prod.yaml)

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548337885959?thread_ts=1645541420.226709&cid=D029VA3J80H)  

argocd then executed helm, rendered templates and deployed all resulting artifacts

![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d@2x.png)1

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548417739929?thread_ts=1645541420.226709&cid=D029VA3J80H)  

so it was basically `kubectl create -f sre_express_sretest05phx1_prod.yaml` and then argocd kicked in

![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d@2x.png)1

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548427490519?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Ok, that makes sense. I think I understand workflow better now

![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d@2x.png)1

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [1 hour ago](https://medallia.slack.com/archives/D029VA3J80H/p1645548923046389?thread_ts=1645541420.226709&cid=D029VA3J80H)  

just pasting this here to get back to easily:  
[https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d77[…]27ca99/apps/express/overlays/phx1/sretest05phx1/values.yaml](https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d7714da27ca99/apps/express/overlays/phx1/sretest05phx1/values.yaml)

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [15 minutes ago](https://medallia.slack.com/archives/D029VA3J80H/p1645550928735909?thread_ts=1645541420.226709&cid=D029VA3J80H)  

So just for my understanding, future state deployment process (post provision). Assuming changes to these [overlays values files](https://github.medallia.com/Atlas/cloud-deployment/blob/efb6605d5d934392c4d75af26e3d7714da27ca99/apps/express/overlays/phx1/sretest05phx1/values.yaml) will be controlled by prov-ng based on what is in TR. Right?Before the deployment occurs. (edited) 

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [13 minutes ago](https://medallia.slack.com/archives/D029VA3J80H/p1645551008230259?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Sorry I don't have a great understanding of the prod current deployment process and how it works currently. I've used the prod deployer extensively but have not had exposure to the weekly deployment process yetUnless of course, we will only be using this for initially provisioning to begin with? (edited) 

![](https://ca.slack-edge.com/T87LKMR54-U021S7XRYCE-b8fe0a763a6f-48)

[Evan Rauner](https://app.slack.com/team/U021S7XRYCE)  [4 minutes ago](https://medallia.slack.com/archives/D029VA3J80H/p1645551556876619?thread_ts=1645541420.226709&cid=D029VA3J80H)  

Also, are we planning on eventually adding additional logic in these helm templates to account for deploying our colo dc specific tenants? Was not sure of the scope

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [4 minutes ago](https://medallia.slack.com/archives/D029VA3J80H/p1645551582836239?thread_ts=1645541420.226709&cid=D029VA3J80H)  

the assumption is that prov-ng will create only values.yaml amd the application manifest, whatever is in helm_0.0.1 is static and controlled/released outside of provisioning

![:+1:](https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d@2x.png)1

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [2 minutes ago](https://medallia.slack.com/archives/D029VA3J80H/p1645551676297199?thread_ts=1645541420.226709&cid=D029VA3J80H)  

ideally all 'standard' operations (new commit hash, express version, tenant , additional node, memory adjustments) should be doable by changing values.yaml only

![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [1 minute ago](https://medallia.slack.com/archives/D029VA3J80H/p1645551732118249?thread_ts=1645541420.226709&cid=D029VA3J80H)  

plus restarts and taking a node down temporarily


![](https://ca.slack-edge.com/T87LKMR54-U010UH5BCAV-0b6615981fcf-48)

[mhalva](https://app.slack.com/team/U010UH5BCAV)![:spiral_calendar_pad:](https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f5d3-fe0f%402x.png)  [< 1 minute ago](https://medallia.slack.com/archives/D029VA3J80H/p1645551906895039?thread_ts=1645541420.226709&cid=D029VA3J80H)  

it should be extensible to colos in the future and also with ignite/xdp clusterlet(s) in the near future

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
context:: #📥/👔
status:: #🌱/⚙