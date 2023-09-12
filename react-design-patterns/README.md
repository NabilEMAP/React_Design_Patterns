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

ControlledOnboardingFlow.js
```javascript
import React, { useState } from 'react';

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {
    const goToNext = stepData => {
        onNext(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}
```

App.js
```javascript
import { useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
	</>
);
const StepTwo = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={() => goToNext({ age: /*100*/ 50 })}>Next</button>
	</>
);
const StepThree = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<p>Congratulations! You qualify for our senior discount!</p>
		<button onClick={() => goToNext({})}>Next</button>
	</>
);
const StepFour = ({ goToNext }) => (
	<>
		<h1>Step 4</h1>
		<button onClick={() => goToNext({ hairColor: 'Black' })}>Next</button>
	</>
);

function App() {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const onNext = stepData => {
		setOnboardingData({ ...onboardingData, ...stepData });
		setCurrentIndex(currentIndex + 1);
	}
	
	return (
		<ControlledOnboardingFlow 
			currentIndex={currentIndex} 
			onNext={onNext}
		>
			<StepOne />
			<StepTwo />
			{onboardingData.age >= 62 && <StepThree />}
			<StepFour />
		</ControlledOnboardingFlow>
	);
}

export default App;
```