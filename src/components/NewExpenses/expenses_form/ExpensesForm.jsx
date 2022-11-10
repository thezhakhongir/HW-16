import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../../../store/todo-context";
import cls from "./ExpensesForm.module.css";

const defaultValues = {
  enteredTitle: "",
  enteredDate: "",
  enteredAmount: "",
};

class ExpensesForm extends Component {
  static contextType = TodoContext;
  constructor(props) {
    super();
    this.onSaveExpenseData = props.onSaveExpenseData;
    this.state = {
      userInput: defaultValues,
      expenseDate: {},
    };
  }
  submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      title: this.state.userInput.enteredTitle,
      amount: this.state.userInput.enteredAmount,
      date: new Date(this.state.userInput.enteredDate),
      id: uuidv4(),
    };

    this.context.onAddExpense(expenseData);
    this.setState({ userInput: defaultValues });
  }

  changeValuesHadler = (key) => {
    return (event) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          userInput: { ...this.state.userInput, [key]: event.target.value },
        };
      });
    };
  };
  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)}>
        <div className={cls.new_expense__controls}>
          <div className={cls.new_expense__control}>
            <label>Title</label>
            <input
              type="text"
              value={this.state.userInput.enteredTitle}
              onChange={this.changeValuesHadler("enteredTitle")}
            />
          </div>
          <div className={cls.new_expense__control}>
            <label>Amount</label>
            <input
              type="number"
              value={this.state.userInput.enteredAmount}
              onChange={this.changeValuesHadler("enteredAmount")}
            />
          </div>
          <div className={cls.new_expense__control}>
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={this.state.userInput.enteredDate}
              onChange={this.changeValuesHadler("enteredDate")}
            />
          </div>
        </div>
        <div className={cls.new_expense__actions}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpensesForm;
