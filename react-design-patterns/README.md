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

**Uncontrolled Components** are components that 'keeps' track of their own states and release data only when some event occurs. This would be in the case of a form when the user hits the Submit button in an uncontrolled form, that would be the only time we actually know what values the inputs of that form contain. 

**Controlled Components** on the otherhand are basically components that do 'not' keep track of their own state. Simply said components where their parent is the one that takes care of keeping track of the state and that state is then usually passed through to a controlled component as a prop of some sort (that is, when we use the useState Hook with text inputs).

```javascript
const MyComponent = ({onSubmit}) => {
    const [someState, setSomeState] = useState(...); //useState hook
    
    return ...;

<MyComponent onSubmit={data => ...} />
// Uncontrolled Components
}
```

For Uncontrolled Components, more often than not, the component itself again is going to be one that 'keeps' track of its own state. Component has its own useState hook and the only prop that it's getting past is this onSubmit prop which the parent component would pass a function to get the values of that component its state when the submit event is triggered.

```javascript
const MyComponent = ({ data, changeData, onSubmit }) => {
    return ...;
}

<MyComponent
    data={...}
    changeData={...}
    onSubmit={() => ...} />
>
// Controlled Components
```

With Controlled Components, on the other hand, we see that our component no longer has that useState hook. In other words, the state of that component is passed through as a prop. And ofcourse there is other kinds of functions that this component is going to use, aswell. This makes our components more reusable and and it also makes them a lot easier to test since we can just set up a component with the exact state we want, instead of having to create the component manually, make some changes and then trigger some event to find out what's going on inside of it.