# Hiding Elements with ngIf

**_Instructions_**: Some of the events displayed in the events-list component are online only, meaning they
have an online url, but do not have a physical location. Some events have neither. Unfortunately the "Online Only"
message is displaying for all events. Use ngIf to show the "Online Only" message only for those events that have an
online url but no location. Also, hide the location and onlineUrl elements completely if an event does not have this
data. To do this:

1. Add the appropriate ngIf directives and expressions to the correct elements
