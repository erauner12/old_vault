---
zet: 202201141206
date: 2022-01-14
aliases:
- 
---

Related → [Medallia](Medallia.md) 
# sre-triggers

## Setup new scratchy pod for your branch

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


## Make changes to SRE-Triggers remotely

https://medallia.slack.com/archives/D02DS7N04M6/p1639068056005000

So if you need to change scratchy and deploy new version, you need to do this:  

1.  Push change to `prodsvc-12380` branch
2.  Trigger a build [here](https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/SRE%20triggers%20-%20triggers/job/PRODSVC-12380/)
3.  Update the image version in this yaml file and apply it `kubectl apply -f scratchy-deployment.yaml --context den`
4.  [[Connect to the pod]] and run `./init_dev.sh` in the prov-ng’s home directory
```
kubectl exec -i -t $(kubectl get pods --context den -n sre-provisioning | grep scratchy-prodsvc-12380 | awk '{print $1}') --context den -n sre-provisioning -- /bin/bash
```
6.  Start scratchy `scratchy -c $HOME/config -e mec-configuration -i SRECONFIG-14`






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
