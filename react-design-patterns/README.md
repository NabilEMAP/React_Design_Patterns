# React Design Patterns
[Learning with Shaun Wassell](https://www.linkedin.com/learning/react-design-patterns/take-your-react-skills-to-the-next-level?contextUrn=urn%3Ali%3AlyndaLearningPath%3A5b32b6d5498e4ef39c04c55c&resume=false&u=93921834)

## Introduction
- Taking your React Skills to the next level
- What you should know
- What are design patterns?

## 1. Layout Components
- What are layout components?
- Split-screen components
- Split-screen components improvements
- Lists and items
- Creating different list types
- Modal components

## 2. Container Components
- What are container components?
- Server instructions
- CurrentUserLoader component
- UserLoader component
- ResourceLoader component
- DataSource component
- Loading data from localStorage

What is the data type of the user variable in the CurrentUserLoader component?
- An object. The user variable in the CurrentUserLoader component is an object.

What does the resourceLoader component do?
- You can load various types of resources from a server with the resourceLoader component. The resourceloader component allows you to load different types of resources from a server. You can specify the resource URL and the resource name, and the component will fetch the data and pass it to the child component.

What are container components?
- React components that take care of all of the data loading and other data management for their child components. Container components are React components that take care of all of the data loading and other data management for their child components. This allows child components to share logic and makes it so they don't need to know where their data is coming from or how to manage it.

What is the purpose of the server.js file?
- It sends back data to components. The server.js file is just a simple express server that will send back some data to your components. This is intended to simulate a real-world, full stack React app.

What is the purpose of the getDataFunction prop in the DataSource component?
- It passes data to child components with getDataFunction. getDataFunction prop returns data to be passed to child components.

What does the data source component do?
- It allows you to load data from local storage instead of from a server. The data source component allows you to load data from local storage instead of from a server. You can define a function to get the data from local storage, and then pass that onto the data source component. The data source component will then automatically load the data into the text component via a prop called message.
