# Communicating with Child Components

**_Instructions_**: This project contains a parent component (app/parent.component.ts) and a child component
(app/child.component.ts). The child component has a "Click Me" button and a counter property that is
constantly updated by a timer. Add an output property to the child component and bind to it from the parent
so that the `currentCounter` property is updated to the current value of the child's `counter` property when
the "Click Me" button is pressed on the child component. You will see a congratulations message when you
succed. To do this:

1. Add an output property to the child component.
2. In the buttonClicked method on the child component, emit an event using the output property with the
   current value of `counter`.
3. On the `<child>` element in the parent component's template, bind to the output property and call a
   handler function on the parent controller, passing in the value emitted from the child.
4. In the handler function you created in step 3, set the `currentCounter` property to the value received
   from the child component.
