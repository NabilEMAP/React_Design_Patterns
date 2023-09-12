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

## 3. Controlled and Uncontrolled Components
- What are higher-order components?

Components that returns another component instead of JSX. So as everyone should know, most components in React simply return some sort of JSX, which represents the DOM elements that that component wants to be rendered in its place. However, with higher-order components return a component which then returns JSX. So basically what we're doing here is adding an extra step inside of it. You want to think about them as sort of component factories. Functions that you can call to create new components.

Why would we want to actually create these higher-order components? Well, one thing that higher-order components are used for is sharing behavior between several of our components and this is actually a lot like what we saw with our container components. How we were able to wrap different types of components in the same container and have them behave somewhat similarly. So higher-order components allow us to do something similar to that, as you'll see. Another thing that they're used for is to add extra functionality to an existing component of ours. So if we have an existing component that someone else built, what we can do is use higher-order components to add new functionality to that component.