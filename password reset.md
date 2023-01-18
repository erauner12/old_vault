---
zet: 202202181949
date: 2022-02-18
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# password reset

There is AD password
- [reset LDAP Password](https://passreset.medallia.com)
	- This is OKTA/AD password for most everything else
- [Medallia - Settings](https://medallia.okta.com/enduser/settings)
	- Then click the key logo top right of status bar to change password on mac itself



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
status:: #🌱/❓