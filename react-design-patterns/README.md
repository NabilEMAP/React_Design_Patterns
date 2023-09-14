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

Special hooks that we define ourselves and that usually combine the functionality of one or more existing hooks like "useState" or "useEffect".
```javascript
const useProducts = () => {
    const [products, setProducts] = useState([]);

    //... load the products

    return products;
}
```
Our components want to have access to products from the server. We could either create the product state and load the products inside the component itself or create our own custom useProducts hook that encapsulates this functionality.

```javascript
const products = useProducts();
```
Custom hooks do have to start with the word "use". They are used for sharing complex behavior between multiple components (much like with HOC's and container components).