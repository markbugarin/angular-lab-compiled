# Creating a Data-bound Component

**_Instructions_**: This project already has an app component and is all bootstrapped. Add a new
component to display a list of upcoming events using the html and data below. Then load that
component from the inline template in the app component (app/app.component.ts). To do this,
you will need to:

1. Create the component

   You can use either an inline template or a separate template file. The html (without
   data-bindings) for the template is **_below_**.

2. Add a property on the component to hold the data.

   The data for the component is also **_below_**.

3. Add the necessary data-bindings (using interpolation) to your component's template

4. Add the component to the app module (app/app.module.ts)

5. Load the component from the app component's template (app/app.component.ts)

**_When you're done, be sure to run the Plunk and you should see a congratulations message._**

####_Here is the starting html for the template:_####
```
<div>
  <h1>Congratulations!</h1>
  <h4>You got your component to display!</h4>
  <hr>
  <h5>How does your event look below?</h5>

  <div style="margin-top:30px">
    Event:
  </div>
  <div>
    Date:
  </div>
  <div>
    Time:
  </div>
  <div>
    Address:
    </div>
</div>
```

####_Here is the data:_####
```
{
	name: 'ngConf 2025',
	date: '3/1/2025',
	time: '8am',
	location: {
		address: '123 Main St',
		city: 'Salt Lake City, UT',
		country: 'USA'
	}
}
```

