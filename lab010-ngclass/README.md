# Adding Style with ngClass

**_Instructions_**: Some of the events displayed in the events-list component are online only (`event.format='Online'`),
others are in-person only (`event.format='InPerson'`). Some events have neither, but there are no events that have both.
Use ngClass to add the `in-person` class to the event title (`<h2>`) if the event.format='InPerson', or the `online` class
if the event.format='Online'. If the event.format is neither "InPerson" or "Online", then apply the class `tbd`. To do this:

1. You can either use an inline ngClass expression or bind ngClass to a function. It may be better to use a function since
   the expression may get long.
