---
zet: 202201121709
date: 2022-01-12
aliases:
- 
---

Related → [[Medallia]] - [[PROV-NG]]
# ArgoCD

## COLO
- https://argo-workflow.sc4.medallia.com/workflows/sre-provisioning/mec-provisioning-default-sretest06fra1-cx56t?tab=workflow


## Cloud

- https://argocd.hnd1.medallia.com/applications



## Changes

### Execute Argo Locally

https://medallia.slack.com/archives/D02DS7N04M6/p1635843877005200


**Make sure your local looks like this:**
- update requirements.txt in `provisioning-ng`
- `touch /Users/erauner/git/sre-triggers/triggers/dryrun/dryrun.yaml`
```yaml
storage: false
slack: true
metrics: true
```

- `_generic.yaml_`
	- +`issues_source: file`
	- +`#kubeconfig: den`
	- +`kubeconfig: "/Users/erauner/.kube/medallia-kubeconfig"`
	- +`key: den`
- `kubectl config use-context den`
- Need to build scratchy/sbx every time sre-triggers changes
	- `cd ~/git/sre-triggers`
	- `go build -v -buildmode=plugin -o ./lib/sbxmig.1.0.0.so platforms/sbxmig/*.go`
	- `go build -o ./bin/linux/scratchy cmd/scratchy/*`

- add your jira yaml to:
```
├── issues
│  ├── SRECONFIG
│  │  └── sbxmig-configuration.yaml
```

- create `sbxmig-configuration.yaml`
```yaml
issues:
  - key: TEST-1
    id: 1
    status: Approved
    summary: Test MEC migration
    assignee:
      name: erauner
      email: erauner@medallia.com
    disable_safety_checks: false
    mark_completed_on_success: true
    custom_fields:
      task: SBXMIG Configuration DC Migration Run
      logo: sretestmig06ger,sretestmig09ger
      workflow_id: 111111111
```
- sometimes make `disable_safety_checks: true`
- ensure `_generic.yaml` has the latest image from jenkins
	- `sbxmig:`
		- `name: virtual-docker.martifactory.io/medallia/provisioning-ng:202202081003-PRODSVC-12469-50b4ecd`
- `sshuttle -Dr ssh1-den 10.192.0.0/12 192.168.0.0/16 --pidfile=/tmp/multitenant-den.pid`
- cd ``
- `cd /var/provision`
	- `scratchy -d -e sbxmig-configuration -i TEST-1`


**If I need to run some changes in ArgoCD I do this:**
1. Commit and push all `prov-ng` changes
2. Run this [jenkins](https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/Provisioning%20NG%20image%20(Py%20Code)/job/PRODSVC-12380/) job: 
3. Copy new docker image tag from jenkins job’s log
4. Update the tag in `_generic.yaml`
```
images:
  mec:
    name: virtual-docker.martifactory.io/medallia/provisioning-ng:202110070208-PRODSVC-12380-ab1d796
```
5. Run scratchy `bin/linux/scratchy -d -e mec-configuration -i TEST-1`

## Execute Argo Remotely

1. Make changes to prov-ng image
2. Push to your branch
3. Run [this job](<https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/Provisioning%20NG%20image%20(Py%20Code)/>) to update docker image
	1. grab the new image name from the jenkins job
4. login to (branch specific or master)scratchy pod
- master dev environment
```
kubectl exec -i -t $(kubectl get pods --context den -n sre-provisioning | grep scratchy | awk '{print $1}') --context den -n sre-provisioning -- /bin/bash
```
- branch specific dev environment
```
kubectl exec -i -t $(kubectl get pods --context den -n sre-provisioning | grep scratchy-prodsvc-12380 | awk '{print $1}') --context den -n sre-provisioning -- /bin/bash
```
1. `su - prov-ng`
2. vi `config/_generic.yaml`
	1. paste the new image name changes to `images:` -> `mec` -> `name`

## Deploy per branch Scratchy

So if you need to change scratchy and deploy new version, you need to do this:  
-  Add name of branch to `Branch Sources -> Behaviors -> Filter by name (with regular expression)`
	- `(delivery|master|SREPROVNG-100-groovy-template|PRODSVC-12380|PRODSVC-12469)`
- Push change to `prodsvc-12380` branch
-  Trigger a build [here](https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/SRE%20triggers%20-%20triggers/)
-  Update the image version in this yaml file and apply it `kubectl apply -f scratchy-deployment.yaml --context den`
- `su - prov-ng 
-  Connect to the pod and run `./init_dev.sh` 
-  Start scratchy `scratchy -c $HOME/config -e mec-configuration -i SRECONFIG-14`

Reach here the pod here: `kubectl exec -i -t $(kubectl get pods --context den -n sre-provisioning | grep scratchy-prodsvc-12380 | awk '{print $1}') --context den -n sre-provisioning -- /bin/bash`

### scratchy deployment yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prov-ng-scratchy-prodsvc-12380
  namespace: sre-provisioning
  labels:
    app: prov-ng-scratchy-prodsvc-12380
spec:
  replicas: 1
  selector:
    matchLabels:
      app: prov-ng-scratchy-prodsvc-12380
  template:
    metadata:
      labels:
        app: prov-ng-scratchy-prodsvc-12380
    spec:
      nodeSelector:
        node-role.kubernetes.io : slave
      volumes:
        - name: secrets-keys
          secret:
            secretName: provisioning-ng-secrets-keys
        - name: workdir
          persistentVolumeClaim:
            claimName: provisioning-ng-workdir-nfs
      containers:
        - name: prov-ng-scratchy
          image: virtual-docker.martifactory.io/medallia/sre-triggers:2.9.1-71d22d9-PRODSVC-12380
          command: [ "sleep" ]
          args: [ "infinity" ]
          imagePullPolicy: IfNotPresent
          volumeMounts:
            - mountPath: /var/provision/secrets/keys/
              name: secrets-keys
            - mountPath: /var/provision/workdir/
              name: workdir
          env:
            - name: PROV_NG_ENVIRONMENT
              value: "dev"

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
status:: #🌱/🗺
context:: #👔/❓
