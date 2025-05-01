import './App.css';
import PaginationComponent from "./components/pagination/PaginationComponent.tsx";
import UsersComponent from "./components/users/UsersComponent.tsx";

const App = () => {
  return (
    <>
        APP-MAIN
        <UsersComponent/>
        <PaginationComponent/>
    </>
  );
};

export default App;