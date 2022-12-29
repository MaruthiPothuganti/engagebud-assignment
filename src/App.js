import "./App.css";
import { Background } from "./Components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative h-screen">
      <Background />
      <Routes>{/* <Route path='/' component={}/> */}</Routes>
    </div>
  );
}

export default App;
