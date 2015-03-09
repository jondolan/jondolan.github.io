---
layout: post
title:  "\"Spaceflight Now\" Launch Schedule Calendar"
date:   2015-02-17
categories: projects
tags: space
---

Over my "Feburary break", one of the projects I decided to work on was a script that parses <a href = "http://spaceflightnow.com/" target="_blank">SpaceFlight Now's</a> <a href = "http://spaceflightnow.com/launch-schedule/" target="_blank">launch schedule</a> into a <a href="#googlecal">Google Calendar</a>....more...

<a href = "http://spaceflightnow.com/" target="_blank">SpaceFlight Now</a> does a great job keeping the list of launches from around the world organized on one, updated page.

I decided to write this in "PHP: Hypertext Preprocessor" (simply, PHP) and you can check out the code <a href = "https://github.com/jondolan/spaceflightnowcal" target="_blank">here</a>. I think 99% of people would choose python for this task, but I'm far more familiar with PHP, so that's the route I took.

This project involved learning more about Google's APIs in order to upload the events to Google Calendar. I found the API documentation to be a little fragmented and at times outdated, but overall it was helpful. It could just be that I'm not use to working with other people's code!

**Creating an algorithm to parse through data is not easy, especially other people's data.** SpaceFlight Now has some variation in how they display their data from launch to launch (things like "March 25/26" as a date due to timezone differences). There is nothing wrong with that - obviously their website is designed for people to view, not to be parsed for data. Plus, if they change their formatting slightly in the future, that could break my code completely! Regardless, this project was a fun challenge. And now I have a calendar with all the upcoming spaceflights on my phone!

The script is run nightly by my <a href = "http://www.raspberrypi.org/help/what-is-a-raspberry-pi/" target="_blank">Raspberry Pi</a> in order to keep the calendar up to date with the launches on the website. It works in two parts. First, it parses through all the webpage data, finds all the launches and their specific date and time, and then puts it all into a list (called an array). From there, the script polls for a list of events from the calendar, matches events in the two lists by title, compares the information in the matched events, and if any differences are found it updates the calendar event to reflect the changes. If no pre-existing calendar event with that title is found, then it creates a new event.

&nbsp;

Check it out! (use the button in the bottom right to add it to your own calendar)

<iframe id ="googlecal" src="https://www.google.com/calendar/embed?mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=822qkodeiei5781qv56kaa0ep4%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FNew_York" style=" border:solid 1px #777 " width="98%" height="400" frameborder="0" scrolling="no"></iframe>

Other versions for use outside of Google Calendar: <a href = "https://www.google.com/calendar/feeds/822qkodeiei5781qv56kaa0ep4%40group.calendar.google.com/public/basic" target="_blank">XML</a>, <a href = "https://www.google.com/calendar/ical/822qkodeiei5781qv56kaa0ep4%40group.calendar.google.com/public/basic.ics" target"_blank">ICAL</a>, <a href = "https://www.google.com/calendar/embed?src=822qkodeiei5781qv56kaa0ep4%40group.calendar.google.com&ctz=America/New_York" target="_blank">HTML</a>

&nbsp;

Thanks SpaceFlight Now for such a great resource!