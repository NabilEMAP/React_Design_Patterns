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

## 3. Controlled and Uncontrolled Components
- Controlled vs. uncontrolled components
- Uncontrolled forms
- Controlled forms
- Controlled modals
- Uncontrolled boarding flows
- Collecting onboarding data
- Controlled onboarding flows

## 4. Higher-Order Components
- What are higher-order components?
- Printing props with HOC's
- Loading data with HOC's
- Modifying data with HOC's
- Creating forms with HOC's
- High-order component improvements

## 5. Custom Hooks Patterns
- What are custom Hooks?
- useCurrentUser Hook
- useUser Hook
- useResource Hook
- useDataSource Hook

What are custom hooks?
- Custom hooks basically result when, instead of just using the basic hooks that React provides, such as useState and useEffect, you actually combine these hooks into your own new hooks.

What does the useCurrentUser hook allow a component to do?
- The useCurrentUser hook allows a component to load the current user from the server so that they have access to that information.

What is the useUser hook?
- The useUser hook is a custom hook that allows you to load any user from the server by their ID. This makes the UserInfo component more flexible, as you can now pass in any user ID and load that user's information. 

What does the useDataSource custom hook do?
- The useDataSourcecustom hook allows you to load data from a server or from local storage. You can specify the URL of the resource you want to load, and it will return an asynchronous function that will fetch the data for you.

What does the useResource custom hook do?
- The useResource custom hook allows you to quickly and easily load any server-side resource inside any component. This means you can easily load data from your database into our React components without writing a lot of code.