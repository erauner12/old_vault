# <%tp.file.title%>

## Quarterly Review
```dataview
table eternal-month as "Month"
from #⌛/monthly  and -"templates"
where this.file.link
sort date asc
```

## Journal Entries

```dataview
table without ID file.link, status, summary as "Summary___________________"
from #🌱/🖊 or #🌞/🖊 or #🌲/🖊
where contains(quarter, this.file.link)
sort timestamp asc
```




## Metadata
status:: #🌲/🌤
type:: #⌛/quarterly

Quarter:: [[{{date:YYYY}}-Q{{date:Q}}]]
Year:: [[{{date:YYYY}}]]
Eternal Quarter:: Quarter {{date:Q}}