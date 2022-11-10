import React, { Component } from "react";
import Chart from "../../../Chart/chart/Chart";
import { TodoContext } from "../../../store/todo-context";

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

export default class ExpensesChart extends Component {
  static contextType = TodoContext;

  render() {
    const item = this.context.currentExpenses();
    for (const key of item) {
      const expensesMonthIndex = key?.date.getMonth();
      console.log(expensesMonthIndex);
      chartDataPoints[expensesMonthIndex].value += key.amount;
    }
    return (
      <>
        <Chart dataPoints={chartDataPoints} />
      </>
    );
  }
}
