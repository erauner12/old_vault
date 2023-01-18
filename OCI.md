---
zet: 202201111417
date: 2022-02-08
aliases:
- 
---

Related → [[Medallia]] - [[How to use s3]]
# OCI
## References

https://pacific.medallia.com/display/MDBS/OCI+Repos%2C+Tools+and+Documentation

## Training

#task 
- [ ] [Feb 28, 2022 free OCI certs](things:///show?id=CrNQb2patFhmPbkqb8Y9QC) OCI

## Setup

slack: https://medallia.slack.com/archives/C020NGPQYUC/p1641935398047700

file: `~/.aws/config `
```
[profile oci-hnd1]
region = ap-tokyo-1
endpoint = [https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com](https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com/)
endpoint-url = [https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com](https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com/)
```


file: `~/.aws/credentials`
```
[oci-hnd1]
aws_access_key_id = 02c6f6c65c4132ed35508438584f4940a8cdd5ec
aws_secret_access_key = ZU4au1BpbigxvYmA+CRDDHq2oG6KFFsYqR92ePZtuAc=
```

testing :  
```
aws --profile oci-hnd1 --endpoint https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com s3 ls s3://atlas-fake-secret-hnd1

2022-01-11 18:02:19   13235676 avieje (1)
```

## Login

[OCI Login](https://www.oracle.com/cloud/sign-in.html?accountname=medalliacloud)
- https://cloud.oracle.com/?region=us-phoenix-1
- https://idcs-d913759db0464e4785bbdba0145a9e02.identity.oraclecloud.com/ui/v1/myconsole?root=my-info&my-info=my_access


## Config

secret:

| key | secret                                       |
| --- | -------------------------------------------- |
| a1  | ZU4au1BpbigxvYmA+CRDDHq2oG6KFFsYqR92ePZtuAc= |

### S3 endpoints
```
oci-jed1: https://axbnxpaibr78.compat.objectstorage.me-jeddah-1.oraclecloud.com

oci-phx1: https://axbnxpaibr78.compat.objectstorage.us-phoenix-1.oraclecloud.com

oci-dev4: https://axbnxpaibr78.compat.objectstorage.us-phoenix-1.oraclecloud.com

oci-hnd1: https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com
```

### aws credentials:
- to get credentials, you need to get customer key in top right of OCI landing page
```
[oci-phx1]
aws_access_key_id = xxxxx
aws_secret_access_key = xxxx
[oci-jed1]
aws_access_key_id = xxxxxx
aws_secret_access_key = xxxxxx
```


## S3 Actions

- first export the ca_bundle in your session
```
export REQUESTS_CA_BUNDLE='/Library/Application Support/Netskope/STAgent/download/nscacert.pem'
```

- https://github.medallia.com/medallia/provisioning-ng/pull/73#discussion_r550309
- https://github.medallia.com/medallia/provisioning-ng/pull/73#discussion_r550299
- https://github.medallia.com/medallia/provisioning-ng/pull/73#discussion_r550306
- https://github.medallia.com/medallia/provisioning-ng/pull/73#discussion_r550305
- https://github.medallia.com/medallia/provisioning-ng/pull/73#discussion_r550300
### List S3 Bucket

- jed1
```
aws --region me-jeddah-1 --profile oci-jed1 --endpoint https://axbnxpaibr78.compat.objectstorage.me-jeddah-1.oraclecloud.com s3 ls s3://atlas-fake-secret-jed1/sandbox-jed1.medallia.com/
```
- hnd1
```
aws --region ap-tokyo-1 --profile oci-hnd1 --endpoint https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com s3 ls s3://atlas-fake-secret-hnd1/sandbox-hnd1.medallia.com/
```

### See contents of bucet

```
aws --region ap-tokyo-1 --profile oci-hnd1 --endpoint https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com s3 cp s3://atlas-fake-secret-hnd1/openldap-hnd1.medallia.com/openldap-backup_endpoint -
```

### Copy S3 Buckets
- copy from local

```
aws --region ap-tokyo-1 --profile oci-hnd1 --endpoint https://axbnxpaibr78.compat.objectstorage.ap-tokyo-1.oraclecloud.com s3 cp openldap-backup_endpoint openldap-backup_secret_key s3://atlas-fake-secret-hnd1/openldap-hnd1.medallia.com/
```

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
