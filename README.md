## Table of Contents
0. [About](##AboutTravall)
1. [Motivation](##Motivation)
2. [ScreenShots](##ScreenShots)
3. [Tech/framework](##Tech/framework)
4. [Functionality]( ##Functionality)
5. [Installation](##Installation)
6. [Credits]( ##Credits)
7. [Contact]( ##Contact)


## About Travall App
Travall is a collaborative application to help you stay organized with others about your upcoming travel plans.  Creating a Travall will allow you to invite others to your upcoming trip as well as display your transportation details and all activities you would like to do while on the trip.  Travall will keep you and your loved ones organized and up-to-date about your next upcoming travall plans.

## Motivation
Travall was created to have one centralized location to plan trips with loved ones.  Life is busy but by logging into the Travall app, you are instantly informed about who is coming, when they are coming, and what they would like to do once they arrive. Upgrades/ new features will continue to be added to better help you stay organized and informed about upcoming plans!

## ScreenShots

## Tech/framework used
<b>Built with</b>
- [HTML]( https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [SCSS]( https://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)
- [CSS]( https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)
- [Bootstrap](https://getbootstrap.com/)
- [Angular](https://angular.io/)
- [Angular Material]( https://material.angular.io/)



## Functionality
**General functionality:**
- Authenticate users via JWT (login/register pages + logout button in nav to remove)
- Authenticated admin with JWT (login + logout button in nav to remove)
- Guards on protected routes(authguard/ adminguard)
- Routes utilized in nav
- Delete - (Admin) – Admin Portal – Delete functionality for any user/ travall
- Create, Read – (User) – Add Travall – Create functionality for any signed in user to create a Travall and begin utilizing more functionality
- Create, Read, Delete – (User) – Add Member – CRD functionality to add a current user of Travall to your crew members
- Create, Read, Update, Delete – (User) – Add Transportation/ Add Activity – CRUD functionality for any signed in user to add items to the transportation or activity components
- Read – Any – About section to learn more about Travall
- Utilized DB Associations to allow users to do CRUD on different travalls and each contain different data and store it appropriately in the DB and call it appropriately on the front-end.
- Connected to 3rd party API – google maps rendering on Travall page to checkout the area you will be visiting

## Installation
A step by step process to get started

Clone repo

```
git clone (link)
```

Install `npm` packages

```
npm install
```
Start client 
```
ng serve -o
```

## Credits
@comellen
@abigailelewis
@j2134

## Contact
### Product Change request?
### Report a problem or bug?
Email the team at abigailelewis57@gmail.com. Thank you.
