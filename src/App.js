import React from "react";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibileTodoList from "./containers/VisibileTodoList";
import './App.css'
const App = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <div className="container">
                <AddTodo />
                {/* //todolist- components */}
                <VisibileTodoList />
                <Footer />
            </div>
        </div>
    );
}
export default App