# Adding Style with ngStyle

**_Instructions_**: Some of the events displayed in the events-list component are online only (`event.format='Online'`),
others are in-person only (`event.format='InPerson'`). Some events have neither, but there are no events that have both.
Use ngStyle to make the event title (`<h2>`) green if the event.format='InPerson', or red if the event.format='Online'.
If the event.format is neither "InPerson" or "Online", then make the title grey (#aaa). To do this:

1. You can either use an inline ngStyle expression or bind ngStyle to a function. It may be better to use a function since
   the expression may get long.

