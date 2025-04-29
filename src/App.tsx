import './App.css';
import CommentsComponent from "./components/comments-component/CommentsComponent.tsx";
import PostsComponent from "./components/posts-component/PostsComponent.tsx";
import TodosComponent from "./components/todos-component/TodosComponent.tsx";

const App = () => {
  return (
    <>
        <TodosComponent/>
        <PostsComponent/>
        <CommentsComponent/>
    </>
  );
};

export default App;