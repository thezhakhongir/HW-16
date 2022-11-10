import React, { Component } from "react";
import ExpensesForm from "../expenses_form/ExpensesForm";
import cls from './NewExpenses.module.css'

class NewExpenses extends Component {
  render() {
    return (
      <>
        <div className={cls.new_expense}>
          <ExpensesForm />
        </div>
      </>
    );
  }
}

export default NewExpenses;
