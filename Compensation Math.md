---
zet: 202204041547
date: 2022-04-04
aliases:
- 
---
Last modified:: `= this.file.mtime`


Related → 
# Compensation Math


2021

```python
current_salary = 131000
raise_percentage_list = [0.05, 0.06, 0.07, 0.08, 0.09, 0.10]


for i in raise_percentage_list:
    new_salary = current_salary + (current_salary * i)
    
    with_bonus = new_salary + (new_salary * .05)
    print(f" {i} - {new_salary:.0f} - {with_bonus:.0f}")
```


```
0.05 - 137550 - 144428
0.06 - 138860 - 145803
0.07 - 140170 - 147178
0.08 - 141480 - 148554
0.09 - 142790 - 149930
0.1 - 144100 - 151305
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