# {Education App}

Here is a [link to my deployed back end](https://monument-app.herokuapp.com/).
Here is a [link to my back end repository](https://github.com/itbeauregard/final-back-end).

## Technologies Used

This application's back end was created with Rails on a SQL database. The front end uses a ReactJS framework with Material-UI components.

![Screenshot of Education App](https://i.imgur.com/UMkosgl.png)

## User Stories & Wireframes

For this project, I offered my coding skills to a friend who was interested in making an educational app that was based in his knowledge as a Black and Africana Studies educator. We were discussing how there's currently a lot of excitement about taking down confederate monuments in the US in social justice circles. While these statues are idols of white supremacy, tearing them down does not undo the centuries of racism that is sewn into the fabric of our country. We wanted to build an app that was location-based, which would encourage users (perhaps students of his) to visit monuments in the local neighborhood while sharing larger concepts of systemic racism. A reach goal was also to connect the app to local groups organizing around racial justice to share their events. I set user story goals that ended up being more ambitious that I thought they were:

* As a product owner, I'd like to have 5-6 questions for each quest.
* As a user, I'd like to navigate through the tree of locations/quests/questions.
* As a user, I'd like to check my location, relative to the monument, so I know where to go.
* As a product owner, I'd like for the final questions to be location-based.
* As a user, I'd like to check for events in my local area to get involved with racial justice efforts near me.
* As a user, I'd like to check my profile to judge my progress on certain quests.

I did not realize that getting started with React would be such a slow process. I spent probably a total of 20 hours just researching and experimenting to get to the place where I could do a basic login exchange with my back end. I had originally conceived of this project as a way to incorporate a Google Maps API. As I lost more and more time to hitting learning hurdles with React, I had to scale back my original concept. I ultimately stuck to the idea of an educational app, but had to hold back from scaling into realms where I didn't know how to code.

You can see my [wireframes](https://imgur.com/a/2XIvb) here.

## My approach to developing this app

The process of getting started on this project was remarkably difficult. Having no template for a React front end, I spent many hours perusing the internet for a tutorial that didn't lock me in to a rigid set-up. I spent several hours trying to start with React Native but the amount of time it took to initialize everything was very disconcerting. Native has a great feature of being able to serve your code locally on your smartphone, however, it requires that your phone and computer to be on the same wireless network and my wifi was never reliable. After several 15-minute, occasionally successful attempts to connect the phone and laptop, I decided that the amazingness of the technology was not worth the time cost. I eventually came to understand that I wanted a Rails-friendly React template. I googled away for a basic starter for a login page.

I found a [Medium blog post](https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede), written by a fellow named Saurabh Mhatre, that offered a decent template for getting started with a Material UI style framework. I started by pretty much copy-pasting the code from this website then refactoring it to work with my back end. This template uses the axios module to request CRUD actions from the back end. Since axios' request style is so similar to what I've used in previous projects to make AJAX requests, it was fairly easy to dive into using. Once I got the sign in and sign up functions working, I felt immensely more confident in my ability to work with React.

Once I got the login actions working I started chaining out components. I started writing the code for components before I really understood how the changing of views worked in this template. Basically, the App.js stores the state of the page and toggles between the login page and the 'uploadscreen', which stores the container component for any other page displayed on the app.

This project ultimately became an exercise in modularity. I definitely could have taken the code apart even more. Right now, it's messy but I can still understand it. Something that might have benefitted me early on would have been writing out a tree of containers and components for my app.

Because I started out on a Material-UI-based template, I spent the whole project build somewhat tied to Material's components. This led me to simultaneously designing user experience while also writing logic. While it pleased me to have an always presentable app, the development process was somewhat tedious as a result.

I mentioned above that at a certain point I had to pare down my app features. What I settled on was basically making a quiz app. To remain in my comfort zone, I added an administrative view for adding, updating, deleting, and viewing the questions. This view is accessed by signing in with a `username` of `admin` and a `password` of `admin`.

# Unsolved Problems

1. Finish the create, update, and delete actions for the administrative table.
2. Seed the database with more locations, quests, questions, and answers.
3. Add Google Maps API to final questions and develop location feature.
4. Add a Profile component that links through the Drawer tab, which display a user's progress, offers ability to change password, and displays a user's name
5. Add events table that is updateable by admin, which displays local events relevant to racial justice.
6. Add content that reflects the original mission of this project.
