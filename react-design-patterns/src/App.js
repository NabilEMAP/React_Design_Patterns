import { SplitScreen } from './SplitScreen';
const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'red' }}>{name}</h1>
}
const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{message}</h1>
}
function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent name="Nabil"/>
      <RightHandComponent message="Hello world!"/>
    </SplitScreen>
  );
}
export default App;