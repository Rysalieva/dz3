
import React from 'react';
import MainPage from "./pages/mainpage/MainPage";
import AboutPage from "./pages/about/AboutPage";
import TodosPage from "./pages/todospage/TodosPage";

function App() {
  return (
    <div>
        <AboutPage/>
        <MainPage/>
        <TodosPage/>
    </div>
  );
}

export default App;
