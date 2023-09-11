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

UncontrolledForm.js
```javascript
import React from 'react';

export const UncontrolledForm = () => {
	const nameInput = React.createRef();
	const ageInput = React.createRef();
	const hairColorInput = React.createRef();

	const handleSubmit = e => {
		console.log(nameInput.current.value);
		console.log(ageInput.current.value);
		console.log(hairColorInput.current.value);
		e.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name="name" type="text" placeholder="Name" ref={nameInput} />
			<input name="age" type="number" placeholder="Age" ref={ageInput} />
			<input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput} />
			<input type="submit" value="Submit" />
		</form>
	);
}
```

App.js
```javascript
import { UncontrolledForm } from "./UncontrolledForm";

function App() {
	return (
		<UncontrolledForm />
	);
}

export default App;
```