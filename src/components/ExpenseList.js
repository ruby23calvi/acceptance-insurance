import React from "react";

import "./ExpenseList.css";


function ExpenseList({ expenses }) {


return (

<section className="expense-list">


<h2>
Insurance Expenses
</h2>


{
expenses.length === 0 ?

<p>
No insurance expenses added yet.
</p>


:

expenses.map((expense)=>(


<div 
className="expense-item"
key={expense.id}
>


<h3>
{expense.title}
</h3>


<p>
Amount: ${expense.amount}
</p>


</div>


))


}


</section>

);


}


export default ExpenseList;
