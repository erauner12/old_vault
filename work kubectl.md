---
zet: 202201131108
date: 2022-01-13
aliases:
- 
date created: Thursday, January 13th 2022, 11:08:47 am
date modified: Thursday, January 13th 2022, 11:15:43 am
---

Related → [[Kubernetes]]

# Work Kubectl

## Update Kubectl Config

- get the latest environment
```bash
kubectl krew upgrade medallia
kubectl medallia config setup
export KUBECONFIG=${HOME}/.kube/medallia-kubeconfig
```

- check after to verify it is there
```
kubectl ctx $dc
```

## OCI - Get Db Secret Password

- base64 decode
```
./kubectl get secret -n <<namespace>> <<service_name>> -o jsonpath='{.data.password}' | base64 --decode
```

- overwrite the existing secret file
```
./kubectl create secret generic <<service_name>> -n <<namespace>> --from-literal=username=<<username>> --from-literal=password=<<new_password>> --dry-run=client -o yaml | /kubectl apply -f -
```

- then this is also needed to actually change the password in the db
```
ALTER USER <<username>> WITH PASSWORD ‘<<password>>’;
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
context:: #👔/❓
status:: #🌲/⚙
