# Accessibility first
After having built many a frontend application where accessibility has been an afterthought or not a consideration at all, I wanted to build an application thinking about accessibility first. My approach has been to apply this principle to one of the the most common web applications: a store.

[The shoe store ](https://jontore.github.io/accessibility-patterns/)
([how to enable the screen reader in your computer](https://www.codecademy.com/articles/how-to-setup-screen-reader))

This was the first time I've been playing around with screen readers, and I'm impressed by how well they work. Especially on mobile, they work very intuitivly and have good  patterns for how to interact and access information. When doing user testing with experienced screen reader users, I saw how well these tools can be used. I'm in awe of how fluent these users are in their interactions, and how fast they get things done.

## HTML
What I've heard before is that sticking with good HTML practice goes a long way when it comes to accessibility. Starting this project I was surprised how well it actually works. Screen readers basically parse the html and use the semantic element to describe the content, and as we all know good html should describe the content as accurately as possible. A title should be in a heading element, it should express how impartant it is. It is the most important heading as opposed to a secondary heading, or a subtitle for a section. The navigation should be in a navigation element, a list should be a list element. You know what I'm getting at.

One thing I found makes a big difference for screen readers is that a table should be a table. Due to the styling challenges with table elements, we sometimes build "table" like structures with other DOM elements. But if you do not use a table element for the table, the screen reader won't for instance say what the column the value belongs to. In the store example changing the cart table to a properly formatted table makes a much bigger difference for screen readers than it does for users with regular vision. I encourge you to test [this example with a screen reader to see what the difference for a screen reader can be](https://jsbin.com/jozihuq/edit?html,css,output). For forms it is especially necessary that number fields are numbers. Mark which fileds are required, as this is something the screen reader uses to instruct the user as to what type of information they have to insert. 

## No hidden buttons
When asking one of my test users what the most common and annoying problem with applications was, he said "hidden buttons." Testing out the applications I use in my everyday life with a screen reader, I now understand what he means. An example is my utility providers web application. It has a slide in menu that is not visible unless you click on the settings button. However it is visible for the screen reader. This is because the html elements are there but they are hidden. 
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

In this case the menu is moved out of view by setting the right position minus the width of the actual menu. This means that for me a seeing user I can't see it since it is outside the browsers right edge, but the screen reader picks it up. So for a user who "sees" the application through a screen reader this looks like a menu they can interact with, when it reality they cannot do so unless they press the open menu button.

## Describe 
A application that is technically well built for accessibilty can still be unusable or hard to use for a user that uses voice over. Good instructions and well written as well as consistent content is key. Since we cannot use design to emphasize or group you have to do this through wording. In my shoe store for instance, I realised that it was not the image alt that was the most important description. The product description was much more important, that is to say describing if this was something that was actually useful for me.

## WAI-ARIA
Sometimes it is neceassary to add custom attributes for accessiblity. For the web application these are the WAI-Aria attributes.

The first rule of WAI-ARIA is to try to avoid using it in the first place. If it can be achieved with good describing HTML do that instead. However, WAI-Aria is necessary in many cases. In the shoe store I found a few places where the user experince was improved with WAI-ARIA attributes. The first case was form errors. When a user either is missing required information or that the information somehow is wrong, we tell the user this by adding an error field. This is usually a text description underneath the input field with the issue. For a screen reader this is not something that is read out immediately and alerting as it is for a seeing user, unless you add a ```role="alert"``` attribute to the container. In the case of the checkout flow in the shoe store, as soon as the user presses next, and this part of the form gets validated, a seeing user will see the error description popping up, and for a screen reader user it will read out the information inside the alert container. For a form with multiple input fields I found that the best pattern to use is to group the error messages with a title.

As an example, if the user leaves a required field empty, like firstname and lastname, the screen reader will read out 
"Oops you missed some information or something is wrong. A firstname is required. A lastname is required."

By grouping the errors on top they are also easier to find, including  instructions to what you need to do in one place.

For form fields I've also used ``` aria-required``` so the screen reader knows which fields are required, and  ``` aria-describeby``` with the id to the matching error instructions. This means that when the user changes focus to an input field with an error the screen reader will not only read what type of input field it is, but also the error message itself. For instance a zipcode that is an invalid number this will read out as "Zipcode, Needs to be a valid number, required, stepper."

## Multi steps form
A bit of a no brainer here is that you need to indicate that this is a process with multiple steps, and on what step the user is. It should also be clear for the user how to navigate to the next part of the form. 

## Keep focus
Most screen reader users use the keyboard to navigate your application, or on a mobile phone taps. That's why it is important to make forms and interactive elements easy to tap through. All good applications should do this, since there is nothing more frustrating than when you can't tap to the next input field when you're filling out information - or even worse, when it skips a field and jumps to an unexpected element.

All in all, I'm a bit surprised that with good rules everyone can create applications that are accessible. 


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
