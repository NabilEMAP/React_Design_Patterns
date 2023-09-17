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

## 6. Functional Programming and React
- What is functional programming?
- Recursive components
- Partially applied components

App.js
```javascript
import { DangerButton, BigSuccessButton, Button } from "./partiallyApply";

function App() {
	return (
		<>
			<DangerButton text="Danger Button"/>
			<BigSuccessButton text="Big Success Button"/>
		</>
	);
}

export default App;
```

partiallyApply.js
```javascript
export const partiallyApply = (Component, partialProps) => {
    return props => {
        return <Component {...partialProps} {...props} />
    };
}

export const Button = ({ size, color, text, ...props }) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: color,
        }}{...props}>
            {text}
        </button>
    )
}

export const DangerButton = partiallyApply(Button, { color: 'red' });
export const BigSuccessButton = partiallyApply(Button, { color: 'green', size: 'large' });
```

And we see that now we have the exact same thing, except we're using higher order components to achieve this instead of explicitly creating new components like we did in our composition.js.

