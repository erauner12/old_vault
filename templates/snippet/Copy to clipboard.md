<%* 
const title = tp.file.title;
const uri = 'obsidian://open?vault=Vault&file=' + encodeURI(title);

const fullstring = '[' + title + ']' + '(' + uri + ')'
navigator.clipboard.writeText(fullstring);
%>