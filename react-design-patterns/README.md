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

ControlledForm.js
```javascript
import { useState, useEffect } from 'react';

export const ControlledForm = () => {
	const [nameInputError, setNameInputError] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState();
	const [hairColor, setHairColor] = useState('');

	useEffect(() => {
		if (name.length < 2) {
			setNameInputError('Name must be two or more characters');
		} else {
			setNameInputError('');
		}
	}, [name])

	return (
		<form>
			{nameInputError && <p>{nameInputError}</p>}
			<input
				name="name"
				type="text"
				placeholder="Name"
				value={name}
				onChange={e => setName(e.target.value)} />
			<input
				name="age"
				type="number"
				placeholder="Age"
				value={age}
				onChange={e => setAge(Number(e.target.value))} />
			<input
				name="hairColor"
				type="text"
				placeholder="Hair Color"
				value={hairColor}
				onChange={e => setHairColor(e.target.value)} />
			<button>Submit</button>
		</form>
	)
}
```

App.js
```javascript
import { ControlledForm } from "./ControlledForm";

function App() {
	return (
		<ControlledForm />
	);
}

export default App;
```