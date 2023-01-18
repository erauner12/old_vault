---
date: <% tp.date.now("YYYY-MM-DD") %>
---
# 📆 <%tp.file.title%> <svg viewBox="0 0 3760 100"> <title>Timeline 2022</title> <g class='bars'> <rect fill='#0066FF' x='0' width='310' height='25'></rect> <rect fill='#3366AA' x='320' width='280' height='25'></rect> <rect fill='#99AA33' x='610' width='310' height='25'></rect> <rect fill='#99EE33' x='930' width='300' height='25'></rect> <rect fill='green' x='1240' width='310' height='25'></rect> <rect fill='yellow' x='1560' width='300' height='25'></rect> <rect fill='gold' x='1870' width='310' height='25'></rect> <rect fill='cyan' x='2190' width='310' height='25'></rect> <rect fill='orange' x='2510' width='300' height='25'></rect> <rect fill='red' x='2820' width='310' height='25'></rect> <rect fill='brown' x='3140' width='300' height='25'></rect> <rect fill='white' x='3450' width='310' height='25'></rect> </g> <g class='labels' style="font-size:50px;" text-anchor="middle"> <text fill='#747474' x='0' y='80' text-anchor="start">January</text> <text fill='#747474' x='320' y='80' text-anchor="start">February</text> <text fill='#747474' x='610' y='80' text-anchor="start">March</text> <text fill='#747474' x='930' y='80' text-anchor="start">April</text> <text fill='#747474' x='1240' y='80' text-anchor="start">May</text> <text fill='#747474' x='1560' y='80' text-anchor="start">June</text> <text fill='#747474' x='1870' y='80' text-anchor="start">July</text> <text fill='#747474' x='2190' y='80' text-anchor="start">August</text> <text fill='#747474' x='2510' y='80' text-anchor="start">September</text> <text fill='#747474' x='2820' y='80' text-anchor="start">October</text> <text fill='#747474' x='3140' y='80' text-anchor="start">November</text> <text fill='#747474' x='3450' y='80' text-anchor="start">December</text> </g> <g> <circle cx="{{date:DDD}}0" cy="14" r="15" stroke="black" fill="white" /> </g> </svg>

## Daily Questions

```button
name Life tracker
type link
action obsidian://open?vault=knowledge&file=utility%2FLife%20Tracker
```
Sleep well? #dq/sleep:0
Did you grow mentally? #dq/growth:0
Be a good friend? #dq/friend:0
Learn something? #dq/learn:0
Create something? #dq/create:0
Exercise? #dq/exercise:0
Did you feel productive? #dq/productive:0


Feeling Today:: 
- **use emotion picker**

Journal Entry:: 
- **short journal entry to give context to the day**

Change:: 
- **How do you want change yourself today? Or how did you change yourself today?**

Grateful For:: 
- **What are you grateful or?**

Need To Improve:: 
- **What could you improve on today?**

### How can I be better today?

-   Yesterday I completed `=[[{{yesterday}}]].habits-completed` of my habits
-   I wanted to improve: `=[[{{yesterday}}]].need-to-improve`


## Logbook

##  Notes
```dataviewjs
// default dateformat in case it’s forgotten in front matter

const allFolder = '""'
const dailyFolder = '!"periodic"'
const dailyJournal = '!"journal"'
const templates = '!"templates"'
const attachments = '!"attachments"'
const readwise = '!"Readwise"'


const conditions = [allFolder, dailyFolder, dailyJournal, templates, attachments, readwise]
const filterCondition = conditions.join(' and ')

const readwiseFilterCondition = "#🌲/books or #🌞/books or #🌱/books or #🌲/articles or #🌞/articles or #🌱/articles or #🌲/podcasts or #🌞/podcasts or #🌱/podcasts"

var dateformatWithTime = "hh:mm a";
var dateformat = "YYYY-MM-DD";
if (dv.current().dateformat) { dateformat = dv.current().dateformat; }

dv.table(["File","", "", "Date Created___", "Last Modified__"],
  dv.pages(readwiseFilterCondition)
  .where(p => !p.file.name.charAt(0).includes("_") && p.file.mday.equals(dv.current().file.day) || p.file.cday.equals(dv.current().file.day))
  .sort(p => p.file.mtime, 'desc')
  .map(p => [
    p.file.link,
    p.status,
    p.context,
    moment(p.file.ctime.toString()).format(dateformat),
    moment(p.file.mtime.toString()).format(dateformatWithTime),
  ])
)
dv.table(["File","", "", "Date Created___", "Last Modified__"],
  dv.pages(filterCondition)
  .where(p => !p.file.name.charAt(0).includes("_") && p.file.mday.equals(dv.current().file.day) || p.file.cday.equals(dv.current().file.day))
  .sort(p => p.file.mtime, 'desc')
  .map(p => [
    p.file.link,
    p.status,
    p.context,
    moment(p.file.ctime.toString()).format(dateformat),
    moment(p.file.mtime.toString()).format(dateformatWithTime),
  ])
)
```
## Journal

```dataviewjs
// default dateformat in case it’s forgotten in front matter

const dailyJournal = '"journal"'
const templates = '!"templates"'

const conditions = [dailyJournal, templates]
const filterCondition = conditions.join(' and ')


var dateformatWithTime = "hh:mm a";
var dateformat = "YYYY-MM-DD";
if (dv.current().dateformat) { dateformat = dv.current().dateformat; }

dv.table(["File", "Date Created___", "Last Modified__"],
  dv.pages(filterCondition)
  .where(p => p.file.cday.equals(dv.current().file.day))
  .sort(p => p.file.mtime, 'desc')
  .map(p => [
    p.file.link,
    moment(p.file.ctime.toString()).format(dateformat),
    moment(p.file.mtime.toString()).format(dateformatWithTime),
  ])
);
```

# Metadata

Eternal Weekday:: {{date:dddd}}
Eternal Month:: {{date:MMMM}}
type:: #⌛/daily
status:: #🌲/🌤 