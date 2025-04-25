import './App.css';
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
        <MyComponent title = {'hello react1'}>
            CHILD WORKING
        </MyComponent >
        <MyComponent title = {'hello react2'}>
        {/*empty children = optional member*/}
        </MyComponent>
        <MyComponent title = {'hello react3'}/>
    </>
  )
}

export default App;
