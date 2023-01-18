# How do you get highlights from web surfing into obsidian?

I guess there are many ways to achieve this. I would want to just be able to surf without any dedicated reseraching and to just be able to remember and keep the things I found interesting.
I just tried getting my highlights from safari’s new quick note function on the new iPadOS Beta into Obsidian and it did not work well. I think the new quick note function where Safari remembers what you highlighted if you ever visit the page again is really powerful but I do not want it be stuck just to Safari. 
What is your workflow for this?

[permalink](http://reddit.com/r/ObsidianMD/comments/oertq7/how_do_you_get_highlights_from_web_surfing_into/)
by *modimusmaximus* (↑ 31/ ↓ 0)

## Comments

- You can use https://web.hypothes.is/ for highlights and annotations. I'm trying to make an application which collects highlights from services like hypothesis, pocket and Kindle as notes in obsidian which I can backlink in my notes. Here'a the repo https://github.com/Boot-Error/highlight_butler 
It's very infant atm, started hacking it together since yesterday, there's lot of work to do... ⏤ by *BootError99* (↑ 14/ ↓ 0)
	- Hypothesis is the way to go, there is an Templater script to get annotations either by date or by specific link. [https://forum.obsidian.md/t/retrieve-annotations-for-hypothes-is-via-templater-plugin-hypothes-idian/17225](https://forum.obsidian.md/t/retrieve-annotations-for-hypothes-is-via-templater-plugin-hypothes-idian/17225)

&#x200B;

Super easy, runs like a charm. You can tweak the output template by adjusting the script a bit (unfortunately still a noob in regards to coding, so one might be able to do a lot with it)

There is already an Sync your Kindle Highlights plugin, though it doesnt have the link back function. I will follow your project on git, seems super interesting. ⏤ by *oldandgreat* (↑ 6/ ↓ 0)
		- Thanks for this information! ⏤ by *Paradoxone* (↑ 2/ ↓ 0)
	- Hypothesis would be so much more useful if it had native support beyond Chrome. ⏤ by *wingtcoach* (↑ 3/ ↓ 0)
		- Right? Chrome is like a virus, I wouldn't install even if paid to.

Hypothesis does offer a bookmarklet, not sure how this works with the whole thing, but it is an alternative, since what they offer is legit cool. ⏤ by *fuck_your_diploma* (↑ 6/ ↓ 0)
			- I've used the Firefox unofficial addon. Something a out cookies causes it to logout. Maybe you could try it and let me know if you get the same problem? ⏤ by *Much-Rate-6563* (↑ 2/ ↓ 0)
				- Ha, that’s a new one. Great alternative for Firefox users, thanks ⏤ by *fuck_your_diploma* (↑ 2/ ↓ 0)
	- Thank you for your suggestion and also for your work on the application. It sounds really promising. ⏤ by *modimusmaximus* (↑ 2/ ↓ 0)
- The chrome plugin memex sounds perfect for your needs - https://getmemex.com/ ⏤ by *Emergency_Milk2433* (↑ 7/ ↓ 0)
	- Thank you. I have heard of that one. Did you have good experiences with it and do you know if it also work on the iPad? ⏤ by *modimusmaximus* (↑ 3/ ↓ 0)
		- I briefly tried it but didn't really use it much and felt it didn't fit my workflows too well but I can see its usefulness for some people, no experience using it on iPad sorry. Check out Santi Youngers video on it - https://www.youtube.com/watch?v=-gLzZgGugXU ⏤ by *Emergency_Milk2433* (↑ 2/ ↓ 0)
		- While Memex allows for annotation and note-taking, its a pain to extract annotations and send them through obsidian. ⏤ by *Practical-Smell-7679* (↑ 2/ ↓ 0)
- Since I use Firefox, I highlight with Textmarker and export the highlights as TXT. Then I use the TXT as MD plugin and just process everything. You can make a script to convert from TXT to MD, but I find it quite annoying, so I just use that plugin and get to work. ⏤ by *Admirable_D4D3* (↑ 3/ ↓ 0)
- I'm somewhat archaic but I'm a long time Evernote user to archive web/highlights, so what I do is either embed the evernote note on Obsidian or create a link there that opens the related note into Evernote itself.

Downside is that I miss connections, but I do manually recreate these on Obsidian to have a fluid graph, and these notes are often  the ones linking back to Evernote where I can see the highlights etc.

I'm surrounded by evernote/mendeley/obsidian triad, a real mess if you ask me, but oh well, it works ⏤ by *fuck_your_diploma* (↑ 2/ ↓ 0)
- I use Greenshot to capture region then copy to clipboard to paste. If I need to annotate, I choose edit after capturing, make notes then save to clipboard to paste into Obsidian ⏤ by *froztymug* (↑ 2/ ↓ 0)
- Here's what I do:
I put it into readwise. If it's still useful after cloze then I'll copy and paste only a reference and keywords into a note.

I don't use hypothesis anymore. If it's not worth reading again, then it's not worth keeping. ⏤ by *Much-Rate-6563* (↑ 2/ ↓ 0)
- I use MarkDownload on Chrome, and on my phone, I use a series of Drafts actions and Shortcuts that basically require a single tap. If I know for sure that I just want to store something quick and review later, it's a single tap with no other intervention.   


If I want to tag it or leave a comment on my note, there's a different action for that too. ⏤ by *EttVenter* (↑ 1/ ↓ 0)
	- Does the highlight then go into your Drafts-app? Or have you made it copy itself from Drafts to Obsidian? I have never used Drafts before but that usage does sound great. ⏤ by *modimusmaximus* (↑ 1/ ↓ 0)
		- They do go to the Drafts app, but you could skip that step and execute it straight from shortcuts. 

Seriously - Drafts is an incredibly powerful app. There's a million uses for it outside of this. I probably use it 30 times a day. ⏤ by *EttVenter* (↑ 1/ ↓ 0)
	- This sounds interesting. Can you share the shortcut with me? ⏤ by *RougeCrown* (↑ 1/ ↓ 0)
		- I'm on iOS 15 Beta, so I don't think my shortcuts will work for you, but here's a link:

https://www.icloud.com/shortcuts/cc34ab0d5ec24a82b413da17868e45a3

That's the one I use for my Reddit client - Apollo. If that doesn't work - the shortcut is really straight forward. When I share a link from Apollo, Apollo spits two things out - Title and URL. So I grab those, throw them on a text document with all my MD formatting, and then the shortcut creates a Draft with that content, all in the background. ⏤ by *EttVenter* (↑ 1/ ↓ 0)
			- This worked for me on an old iPad pro running ios 14.6. Thanks! ⏤ by *pathisdestination* (↑ 2/ ↓ 0)
- The solutions mentioned in comments here already are great for live web pages.

Does anyone know to highlight/annotate local HTML files? Like the ones saved using chrome extensions such as SingleFile/SavePageWe? ⏤ by *swapripper* (↑ 1/ ↓ 0)
	- I found a solution using Highlight+Note app in Firefox. 

But I’m interested in highlighting/annotating local HTML files on iPad. ⏤ by *swapripper* (↑ 1/ ↓ 0)
		- How does your solution with Highlight and the Note app look like? ⏤ by *modimusmaximus* (↑ 2/ ↓ 0)
			- * Download HTML file
* Load in Zotero
* Open html file in Firefox(default browser) From Zotero
* Annotate/Highlight. Save as -> save at the default Zotero location showed by prompt.
* Next time you load same webpage from Zotero using FF, your highlights will be retrained 


I know it’s convoluted af but I honestly gave up trying after I found this works fine. 

Now I want to replicate something likes this on iPad. Hope someone knows a better way. 

I’ve heard Liquidtext free version allows you to highlight/annotate html files. But I haven’t tried it as my iPad is still on the way in mail. 

Basically I’m looking to switch over studying my HTML files from PC to iPad. ⏤ by *swapripper* (↑ 1/ ↓ 0)
				- Okay, thank you for explaining! It is indeed a bit convoluted, but if it works... Do your highlights then go to Obsidian? It would be nice to have some context with the HTML-files like you have. I always just thought about extracting only my highlights. ⏤ by *modimusmaximus* (↑ 1/ ↓ 0)
	- Note that you can use the annotation editor integrated in SingleFile. It may not meet your needs though. ⏤ by *check_ca* (↑ 1/ ↓ 0)
- I've posted it to the Obsidian forum, but I think it helps you. It exports sentences you want on an article into Obsidian at one click.

https://forum.obsidian.md/t/copy-and-paste-all-sentences-i-want-in-a-web-article-at-once-on-obsidian/30022?u=washington ⏤ by *keisuke_w* (↑ 1/ ↓ 0)