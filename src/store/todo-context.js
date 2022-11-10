import React, { Component, createContext } from "react";
import Modal from "../components/UI/modal/Modal";
import ReactDOM from "react-dom";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const chartDataPoints = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

export const TodoContext = createContext({
  expenses: [],
});

export default class TodoContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      expenses: expenses,
      dataPoints: chartDataPoints,
      selectedYear: "All",
      isError: null,
    };
  }

  addExpenseHandler(expenses) {
    console.log(expenses.date.toString());
    if (
      expenses.date.toString() === "Invalid Date" ||
      expenses.amount.trim().length === 0 ||
      expenses.title.trim().length === 0
    ) {
      this.setState({
        isError: {
          title: "Input Valid",
          message: "Please enter tasks",
          type: "error",
        },
      });
    } else {
      this.setState({ expenses: [...this.state.expenses, expenses] });
    }
  }

  closeExpensesHandler() {
    this.setState({ isError: null });
  }

  selectChangeHandler({ target: { value } }) {
    this.setState({ selectedYear: value });
  }

  getCurrentExpenses() {
    if (this.state.selectedYear === "All") {
      return this.state.expenses;
    }
    return this.state.expenses.filter(
      (expense) =>
        expense.date.getFullYear().toString() ===
        this.state.selectedYear.toString()
    );
  }

  editExpensesDataHandler(id, text, price, date) {
    let newArr = this.state.expenses.map((expense) => {
      if (expense.id === id) {
        return { ...expense, title: text, amount: price, date: new Date(date) };
      }
      return expense;
    });
    this.setState({ expenses: newArr });
  }

  render() {
    const { isError } = this.state;
    return (
      <TodoContext.Provider
        value={{
          setState: this.setState.bind(this),
          expenses: this.state.expenses,
          onAddExpense: this.addExpenseHandler.bind(this),
          dataPoints: this.state.dataPoints,
          currentExpenses: this.getCurrentExpenses.bind(this),
          selectedYear: this.state.selectedYear,
          selectChange: this.selectChangeHandler.bind(this),
          editHandler: this.editExpensesDataHandler.bind(this),
        }}
      >
        {isError &&
          ReactDOM.createPortal(
            <Modal
              {...isError}
              toggle={this.closeExpensesHandler.bind(this)}
            />,
            document.getElementById("modal")
          )}
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
