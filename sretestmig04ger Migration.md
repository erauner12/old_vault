---
date: 2021-12-16
aliases:
  - 
---


Currently migrating: https://sretestingtools.slack.com/archives/C016DBSEVGC/p1639684450003000

- [x] Going to use this to run the migration: https://jira-dev-vx.medallia.com/browse/SRECONFIG-16


Process to use scratchy 12380 branch:

## Scratchy Migration Process

local
```bash
kubectl exec -i -t $(kubectl get pods --context den -n sre-provisioning | grep scratchy-prodsvc-12380 | awk '{print $1}') --context den -n sre-provisioning -- /bin/bash
```

1.  Push change to `prodsvc-12380` branch
2.  Trigger a build [here](https://jenkins.eng.medallia.com/controller1/job/sre/job/workflow/job/SRE%20triggers%20-%20triggers/job/PRODSVC-12380/)
3.  Update the image version in this yaml (see below) file and apply it `kubectl apply -f scratchy-deployment.yaml --context den`
4.  Connect to the pod and run `./init_dev.sh` in the prov-ng’s home directory
5.  Start scratchy `scratchy -c $HOME/config -e mec-configuration -i SRECONFIG-14`


## How to setup scratchy

Here is Master scratchy for reference:
https://github.medallia.com/Atlas/deployment-infra/blob/master/apps/sre-triggers/den/scratchy-deployment.yaml

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




status:: #🌲/👔
tags: 
attendees::
___

context:: #👔/❓
