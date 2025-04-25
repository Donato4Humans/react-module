import './App.css';
import {coursesTitleArray} from "./data/coursesList.ts";
import MyComponent from "./components/MyComponent.tsx";

function App() {

  return (
    <>
        {
            coursesTitleArray.map((courseTitle, index) => <MyComponent key={index} courseTitle={courseTitle}/>)
        }
    </>
  )
}

export default App;