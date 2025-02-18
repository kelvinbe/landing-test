
# Project Name
Landing Page Test

## Overview

Landing test is more of  an application show casing building app using styled components and react context as well as api calls using react and vite

## Functionality

- Fetching data from a REST API endpoint.
- Display UI following designs of figma .
- Display posts, display users, display specific posts.


## Design Decisions

- **REST API** - My descision in using REST API is mainly based on the fact that they are better to use when it comes to performing simple data fetching. Being resource oriented also makes using REST API a good choice while ethcing data from apis. I achived this by using the fetch method and getting the response with my data ready to use and manipulate to give desired out come.

- **Atomic Design Structure** - I decided to use the atomic design structure since it creates a very good blue print on how to view component building. It allows the creation of reusable compoents by breaking them down into smaller chunks which are the Atoms and Building them up to Molecules which are made up of atoms and finally to organisms which are fully fledged components. It makes design work fairly easy since coming up with an idea and breaking it down iss fast and reliable in the long run.

- **Responsiveness** - Often a very important part of building any application is the view that the user will most likely use a mobile device to acces the site. Hence the use of styled components to handle the responsiveness was very helpful.

- **State Management** - To handle the state management i moved to use the react context state management which prevented having to pass down props. Preventing prop drilling.


## Implementation Decisions


- **Routing**: I moved to use React Router V6 to aid with navigating from one page to another.


## Project Set Up Guideline

To set up the project locall follow the folloing steps:
1. Clone the project using `git clone git@github.com:kelvinbe/landing-test.git`
2. Cd into project using `cd landing-test`
3. Install requires dependencies by running `npm install`
4. Start the project by running `npm run dev`

## Deployed Version Link

## Here is a link to the deployed version of the web application 

[landing-test](https://landing-test-10.netlify.app/)
