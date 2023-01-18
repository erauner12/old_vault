---
zet: 202204201854
date: 2022-04-20
aliases:
- 
---
Last modified:: `= this.file.mtime`

Related → <% tp.file.cursor(2) %>
# pip

```
pip3 install no_you_talk_to_the_hand --no-cache-dir
```
- pip should re-installl the binary from the code you changed if you use this


always use `python -m` to use pip so you use that version of python's pip. unlike `pip install <whatever>`
```
python -m pip install --upgrade pip
```
or
```
python3 -m pip install --upgrade pip
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

things:: 
context:: #👔/❓
status:: #🌱/❓