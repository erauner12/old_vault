---
aliases:
  - 
---

# <%tp.file.title%>

## Monthly Review

```dataview
table eternal-month as "month"
from #⌛/weekly  and -"templates"
where this.file.link
sort date asc
```

## Review
[[Goals]]

## Journal Entries

```dataview
table without ID file.link, status, summary as "Summary___________________"
from #🌱/🖊 or #🌞/🖊 or #🌲/🖊
where contains(monthly, this.file.link)
sort timestamp asc
```

- Focus:: 
- Try New:: 

---
## Metadata
status:: #🌲/🌤
type:: #⌛/monthly 

Month:: [[{{date:YYYY-MM}}]]  
Quarter:: [[{{date:YYYY}}-Q{{date:Q}}]]
Eternal Month:: {{date:MMMM}}
Eternal Quarter:: Quarter {{date:Q}}