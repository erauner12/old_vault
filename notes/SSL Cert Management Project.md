---
zet: 202205180954
date: 2022-05-18
aliases:
- 
---

# SSL Cert Management Project


https://jira.medallia.com/browse/PRODSVC-13327





Improve design/quality/support of the SSL Certs Management system

-   Review cert-manager installation in ALL DCs.
-   Define a workflow for all the users that we have today.

As an SRE, we should cover at least the following happy path:

1.  Have a central repository of all the certificates that we manage
2.  Use letsencrypt for internal traffic and SSL.Com (discuss digicert) for external traffic.
3.  Issue certs for public traffic only once and automatically sync them to the rest of the cert-managers in the different DCs. experiment with kubed [https://appscode.com/products/kubed/0.9.0/guides/config-syncer/inter-cluster/](https://appscode.com/products/kubed/0.9.0/guides/config-syncer/inter-cluster/ "Follow link") 
4.  Sync certs between namespaces in the same cluster using kubed: [https://cert-manager.io/v1.5-docs/faq/kubed/#serving-a-wildcard-to-ingress-resources-in-different-namespaces-default-ssl-certificate](https://cert-manager.io/v1.5-docs/faq/kubed/#serving-a-wildcard-to-ingress-resources-in-different-namespaces-default-ssl-certificate "Follow link")
5.  For applications not using k8s ingress, we need to enforce the usage of CPX or review with NS what do we do with Netscaler / HAProxy. [https://haproxy-ingress.github.io/docs/getting-started/](https://haproxy-ingress.github.io/docs/getting-started/ "Follow link")
6.  For applications not using K8s, we need to define a process to issue, rotate and monitor the certificates. Check DB alternatives to store this data. If it's internal, we can always provide a cert using letsencrypt, if it's public we can use a workflow for the user to request a new/updated certificate.
7.  If we implement a workflow, we can even store the URL where the certificate is going to be used, and then monitor it with something like [https://github.com/mogensen/cert-checker,](https://github.com/mogensen/cert-checker, "Follow link") using a gitops mechanism. This could also work for native K8s workloads using ArgoCD, and express instances with a minimum change in the provisioning process. 
8.  For the applications that are using a CDN, we can review the alternative of updating the cert using the CDN API, like akamai or fastly.
