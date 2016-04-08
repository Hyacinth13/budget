import React, {Component} from 'react';
import $ from 'jquery';

class ExpenseForm extends Component {
 constructor(props) {
   super(props);
 }
 addExpense(e){
   e.preventDefault();
   $.ajax({
     url: '/expenses',
     type: 'POST',
     dataType: 'JSON',
     data: { name: this.refs.name.value }
   }).done( expense => {
     this.props.addExpense(expense);
     this.refs.name.value = null;
   }).fail( msg => {
     console.log(msg);
   })
 }
 render() {
   return(
     <div className='center'>
       <form onSubmit={ (e) => this.addExpense(e)}>
         <input type='text' placeholder='Name' ref='name' />
         <input type='text' placeholder='Cost' ref='cost' />
         <button className='btn' type='submit'>Add Expense</button>
       </form>
     </div>
    );
   }
}

export default ExpenseForm;