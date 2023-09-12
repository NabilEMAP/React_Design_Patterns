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

UncontrolledOnboardingFlow.js
```javascript
import React, {useState} from 'react';

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex(currentIndex+1);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goToNext});
    }

    return currentChild;
}
```

App.js
```javascript
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={goToNext}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={goToNext}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<button onClick={goToNext}>Next</button>
	</>
);

function App() {
	return (
		<UncontrolledOnboardingFlow>
			<StepOne />
			<StepTwo />
			<StepThree />
		</UncontrolledOnboardingFlow>
	);
}

export default App;
```