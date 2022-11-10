import React, { Component } from "react";
import { TodoContext } from "../../../store/todo-context";
import cls from "./ExpensesFilter.module.css";

class ExpensesFilter extends Component {
  static contextType = TodoContext;
  render() {
    return (
      <div className={cls.expenses_filter}>
        <div className={cls.expenses_filter__control}>
          <label htmlFor="">Filter by year</label>
          <select
            value={this.context.selectedYear}
            onChange={this.context.selectChange}
          >
            <option value="All">Select All</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ExpensesFilter;
