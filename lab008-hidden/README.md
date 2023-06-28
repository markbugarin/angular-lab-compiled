# Hiding Elements with [HIdden]

**_Instructions_**: The events displayed on the events-list component have expand and collapse
buttons. When the buttons are clicked the event's `hidden` property is toggled on or off. Hide
the event details when the buttons are clicked by binding the `event.hidden` expression to the hidden
property of the div that surrounds the event details (date, time and location). Also hide
the Collapse/Expand buttons as necessary so that only the appropriate button is displayed
based on the current state. To do this:

1. Bind an expression to the div that surrounds the date, time and location so that it is hidden
   when the event's hidden property is true.

2. Bind an expression to the hidden property of the spans that surround the collapse and expand
   buttons so that only one is visible at a time.
