import React,{useState} from "react";

import "./ExpenseForm.css";


function ExpenseForm({addExpense}){


const [title,setTitle]=useState("");

const [amount,setAmount]=useState("");



const submitHandler=(e)=>{

e.preventDefault();


if(!title || !amount)
return;


addExpense({

id:Date.now(),

title,

amount

});


setTitle("");

setAmount("");

};



return(

<form 
className="expense-form"
onSubmit={submitHandler}
>


<h2>
Add Insurance Expense
</h2>


<input

type="text"

placeholder="Expense name"

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>


<input

type="number"

placeholder="Amount"

value={amount}

onChange={(e)=>setAmount(e.target.value)}

/>


<button>

Add Expense

</button>


</form>

);


}


export default ExpenseForm;
