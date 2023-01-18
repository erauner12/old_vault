---
zet: 202201131307
date: 2022-01-13
aliases:
- 
date created: Thursday, January 13th 2022, 1:07:00 pm
date modified: Thursday, January 13th 2022, 1:14:21 pm
---

Related → [[@ Arjan Codes]]

# Code Reviews

## Not the Purpose of Code Review

- The purpose is not to show how great you are
- 
- The purpose is not to destroy developers
	- superior to the developer
		- just makes people feel bad

## Purpose of Code Review

- You are trying to ensure your code has a certain quality

- You want to help a developer around their learning process
	- When a developer becomes better, he will make better contributions to code
	- Becoming a better version of yourself
- Good for security, especially in the backend

- Make sure the code represents what the requirements are what was requested initially
	- if the developer misinterpreted what was needed

-  Helps you understand which parts of the code have been changed
	- What side effects could come from this change that are not immediately apparent


## How to get more out of code review

### As a reviewee
- Do not make your commits too large
	- not going to be detailed enough for the granularity of change that you are making
		- Things will get missed

- Automate what you can in terms of fixing things like linting
	- tests
		- test edge cases that you expect

- Make sure there is a document that describes things that cannot be covered by automatic tools
	- folder structures
	- comments
	- variable naming conventions

### As a reviewer
- Don't just provide line by line feedback
	- "variable name does not make sense"
	- "remove this function call"

- Also important to give feedback about the overall design of things
	- if things are setup well
	- or your code will degrade more easily

- How you should give feedback
	- Writing good feedback is difficult
		- The goal is to be constructive
		- Leave ego behind
		- be as transparent and direct as possible
		- Focus on solutions

Explain why, so that moving forward they will have an understanding of what not to do again

Sometimes you can learn more yourself from giving code reviews than giving them
- How to approach
- insightful to understand how others think and go about things

How to look at this from the user's point of view
- What does this mean to the user

## Questions

Code review takes too long with juniors, when to stop a code review?
- Code does not have to be 100% perfect
- Do it right from the start to save you time in the future


Who should be in charge of a code review?
- Don't think it should be hierarchical
	- more like a peer review
	- Everyone should be checking and balancing each other
	- Promotes more constructive feedback

Why cohesion is important, all they care about is getting the particular feature to work
- junior developers have limited view of the codebase
- not going to think about the bigger picture
- not just about getting the code to work in this specific instance
	- making it easy to contribute to in the future
		- make changes easier

==If the overarching design of a code base that you have walked into that is flawed in overall design, but it works.==
- ==Should you continue to contribute to it the same way that others have in previous pull requests for consistency? How do you go about fundamentally changing the design==
-  Answer ArjanCodes: If you want to make a big design change, really make sure that you plan it well and that you have a clear view of okay, these are the steps that we need to take and this is what I'm wanting to Plan time for it in your sprints to to actually do it and not saying oh we're just going to do that in between and it's going to kind of solve itself that just doesn't work in my opinion.
- Answer from Commenter: @Dr1nk182 I ran into this issue where I suggested to move from a functional form to an OOP form, eventually the team agreed, but it took a lot of negotiating had to detail the pros and cons


Are you intentional about how you split up/rebase your commits before you push your code up to be reviewed? 
- Assigning the tasks to everyone
- help eachother establishing what a task entails
- every sub step is a commit
- Do them in order without breaking the codebase
- Mistakes happen though


How do you balance re-inventing the wheel for leaning purposes and using pre-built libraries?
- production code is not the place for this
- side projects
- sometimes you play with a library and realize your can use this library

## Tips

- rely on existing libraires
- Be as practical as you can
- Before you have to implement something complicated yourself
	- ask yourself if something has already been built that you can leverage
- If you have the capacity, ask for two reviewers to agree on the code
- 90% of code out there is really bad

Often times we are blocking ourselves in terms of learning new things


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
status:: #🌲/📝