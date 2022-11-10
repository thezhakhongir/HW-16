import React, { Component } from "react";
import { TodoContext } from "../../../store/todo-context";
import Cart from "../../UI/cart/Cart";
import ExpenseDate from "../expenses_data/ExpenseDate";
import cls from "./ExpensesItem.module.css";
import moment from "moment";

class ExpensesItem extends Component {
  static contextType = TodoContext;
  constructor(props) {
    super(props);
    this.state = {
      date: props.expenseDate,
      title: props.expenseTitle,
      price: props.expensePrice,
      editValid: true,
    };
  }

  editChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeHandler() {
    this.setState({ editValid: !this.state.editValid });
  }

  editDataHandler() {
    this.context.editHandler(
      this.props.id,
      this.state.title,
      this.state.price,
      this.state.date
    );
    this.setState({ editValid: !this.state.editValid });
  }

  render() {
    const { editValid } = this.state;
    const newDate = moment(new Date(this.state.date)).format("YYYY-MM-DD");
    console.log(newDate);
    return (
      <Cart className={cls.expense_item}>
        {editValid ? (
          <>
            <ExpenseDate date={this.props.expenseDate} />
            <div className={cls.expense_item__description}>
              <h2>{this.props.expenseTitle}</h2>
              <div className={cls.expense_item__price}>
                ${this.props.expensePrice}
              </div>
              <button
                className={cls.expenses_edit_btn}
                onClick={this.changeHandler.bind(this)}
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <label htmlFor="">
              <input
                type="text"
                value={this.state.title}
                name="title"
                onChange={this.editChangeHandler.bind(this)}
              />
              <input
                type="number"
                value={this.state.price}
                name="price"
                onChange={this.editChangeHandler.bind(this)}
              />
              <input
                type="date"
                value={newDate}
                //   value={this.state.date}
                name="date"
                onChange={this.editChangeHandler.bind(this)}
              />
            </label>
            <button
              className={cls.expenses_save_btn}
              onClick={this.editDataHandler.bind(this)}
            >
              Save
            </button>
          </>
        )}
      </Cart>
    );
  }
}

export default ExpensesItem;
