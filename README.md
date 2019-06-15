# Accessibility first
After having built many frontend application where accessibility has been an after thought or not concidered at all. I wanted to build an application thinkig about accessibility first, my approach has been to apply this approach to one of the the most common web applications, a store.

[The shoe store ](https://jontore.github.io/accessibility-patterns/)
([how to enable the screen reader in your computer](https://www.codecademy.com/articles/how-to-setup-screen-reader))

First of all this was the first time I've been playing around with screen readers, and I'm impressed how well they work. Aspecially on mobile, it works very intuitivly and have good  patterns for how to interact and access information. When doing user testing with experienced screen readers users, I've saw how well these tools can be used. I'm in awe how fluent these users are in their interactions, and have fast they get things done.

## HTML
What I've heard before is that sticking with good HTML practice goes a long way when it comes to accessibility. And starting this project I was surprised how well it works. Screen readers basically parses the html and uses the semantic element to describe the content, and as we all know good html should describe the content as good as possible. A title should be in a heading element, it should express how impartant it is. It is the most important heading or is a secondary heading, or is it a sub title for a section. The navigation should be in a navigation element, a list should be list. You know get what I'm getting at.

One thing I found makes a big difference for screen readers is a table should be a table. Due to the styling challenges with table elements, we sometimes build "table" like structures with other DOM elements. But if you do not use a table element for the table, the screen reader won't for instance say what the column the value belongs to. In the store example changing the cart table to a properly formatted table makes a much bigger difference for screen readers then it does for a normal seeing users. I encourge you to test [this example with a screen reader to see what the difference for a screen reader can be](https://jsbin.com/jozihuq/edit?html,css,output). For forms it is aspecially necesasry that number fields are numbers, and mark which fileds are required. As this is something the screen reader to instruct the user to what type of information they have to insert. 

## No hidden buttons
When asking one of my test users what was the most common and annoying problem with applications. He said "hidden buttons", and testing out the applications I use in my everyday life with a screen readers, I now understand what he means. An example is my utility providers web application, it has a slide in menu that is not visible unless you click on the settings button. However it is visible for the screen reader. This is because the html elemes are there but they are hidden. 
```
.navbar-side {
    display: block!important;
    position: fixed;
    z-index: 1030;
    background-color: #fff;
    top: 0;
    right: -240px
}
```

In this case the menu is moved out of view by setting the right position minus the width of the actual menu. This means that for me a seeing user I can't see it since it is outside the browsers right edge, but the screen reader picks it up. So for a user that "sees" the application through a screen reader this looks like a menu they can interact with. When it reality they can not unless they press the open menu button.

## Describe 
A application that is technically well built for accessibilty can still be unusable or hard to use for a user that uses voice over. Good instructions and well written and consistent content is key, since we can not use design to emphasize or group you have to do this through wording. In my shoe store for instance, I realised that it was not the image alt that was the most important description. The product description was much more important and describing if this was something that was actually useful for me.

## WAI-ARIA
Sometimes it is neceassary to add custom attributes for accessiblity, for the web application these are the WAI-Aria attributes.

The first rule of WAI-ARIA is to try to avoid it, if it can be achived with good describing HTML do that. But they are necessary in many cases. In the shoe store I found a few places where the user experince what improved with WAI-ARIA attributes. The first case was form errors; when a user either is missing required information or that the information some how is wrong, we tell the user this by adding a error field. This is usually a text description underneath the input field with the issue. For a screen reader this is not something that is read out immidialty and alerting as it is for a seeing user, unless you add a ```role="alert"``` atribute to the container. In the case of the checkout flow in the shoe store, as soon as the user presses next and this part of the form gets validated a seeing user will see the error description popping up, and for a screen reader user it will read out the information inside the alert container. For a form with multiple input fields I found that the best pattern to use is to group the error messages with a title.

For instance if the user leaves  a required field empty, like firstname and lastname, the screen reader will read out 
"Oops you missed some information or something is wrong. A firstname is required. A lastname is required".

By grouping the errors on top it is also easier to find, and find instructions to what you need to do in one place.

For form fields I've also used ``` aria-required``` so the screen reader knows which fields are required, and  ``` aria-describeby``` with the id to the matching error instructions. This means that when the user changes focus to an input field with an error the screen reader will read what type of input fields it is but also the error message. For instance a zipcode that is an invalid number this will read out as "Zipcode, Needs to be a valid number, required, stepper".

## Multi steps form
A bit of a no brainer here is that you need to indicate that this is a process with multiple steps, and on what step the user is. It should also be clear for the user how to navigate to the next part of the form. 

## Keep focus
Most screen reader users uses the keyboard to navigate your application, or on a mobile phone taps. Thats why it is important to make forms and interactive elements easy to tab through. This is what I think, what all good applications should do, there is nothing more frustrating where you can't tab to the next input field when you're filling out information, or even worse it skips a field and jumps to an unexpected element. 

All in all, I'm a bit surprised that with good rules everyone can create applications that is accessible. 


### Resources
https://developer.mozilla.org/en-US/docs/Learn/Accessibility


# Development 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
