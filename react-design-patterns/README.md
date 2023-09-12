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

What are the benefits of using a controlled onboarding flow?
- It ensures the steps are in proper order, tracks data, and is an easy way to reset the onboarding process. So some benefits of using a controlled onboarding flow include: 1) Ensuring that all steps in the onboarding process are completed in the correct order 2) Allowing you to track the data collected from the user at each step and 3) Providing an easy way to reset the onboarding process if necessary.

What is the main difference between a controlled and uncontrolled onboarding flow?
- A controlled onboarding flow provides more control. A controlled onboarding flow allows the app component to have more control over what is displayed, while an uncontrolled onboarding flow does not.

What are the differences between a controlled and uncontrolled form in React?
- A controlled form keeps track of values for inputs using a useState hook while an uncontrolled form does not. Additionally, each input in a controlled form has an onChange handler that updates the corresponding state variable when the user changes the value in the input.

What is the central problem with an uncontrolled modal?
- None of the other components can control it.

How does the controlled onboarding flow affect users?
- The controlled onboarding flow gives users much more flexibility over what their onboarding flow looks like and how it changes as they go on.

What is the main difference between controlled and uncontrolled components?
- Uncontrolled components are those where the component itself keeps track of its own internal state, while controlled components are those where the state is passed through as props from a parent component. Controlled components tend to be more reusable and easier to test.

What are the three input types in the uncontrolled form?
- text, number, and submit. You use these for different purposes such as name, age, and hair color. The submit button sends the form data to the server.