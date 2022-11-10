import { Component } from "react";
import "./App.css";
import Expenses from "./components/Expenses/expenses/Expenses";
import NewExpenses from "./components/NewExpenses/new_expenses/NewExpenses";
import { TodoContext } from "./store/todo-context";

class App extends Component {
  static contextType = TodoContext;

  render() {
    return (
      <>
        <NewExpenses />
        <Expenses />
      </>
    );
  }
}

export default App;
