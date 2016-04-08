import React, {Component} from 'react';
import $ from 'jquery';

class Expense extends Component {
	constructor(props){
		super(props);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.updateExpense = this.updateExpense.bind(this);
		this.deleteExpense = this.deleteExpense.bind(this);
	}
	toggle.Edit(){
		this.setState({ edit: !this.state.edit });
	}
	updateExpense(){
		$.ajax({
			url: `/expense/${this.props._id}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { name: this.refs.name.value, description: this.refs.description.value }
		}).done( expense => {
			this.toggleEdit();
			this.props.refresh();
		}).fail( msg => {
			console.log( msg);
		});
	}
	deleteExpense(){
		$.ajax({
			url: `/expense/${this.props._id}`,
			type:'DELETE',
			dataType: 'JSON',
		}).done ( expense => {
			this.props.refresh();
		}).fail( msg => {
			console.log(msg);
		});
	}
	edit(){
		return(
			<div className='col s12 m3'>
				<div className='expense blue'>
					<div className='expense-content white-text'>
						<input required={true} type='text' ref='name' placeholder='name' defaultValue={this.props.name} />
						<textarea ref='description'>{this.props.description}</textarea>
							<div className='expense-action'>
								<button className='btn' onClick={this.toggleEdit}>Cancel</button>
								<button classname='btn' onClick={this.toggleUpdateExpense>Update</button>
							</div>
					</div>
				</div>
			</div>);
	}
	expense(){
    return(<div className='col s2 m3'>
             <div className='expense blue'>
               <div className='expense-content white-text'>
                 <span className='expense-title' onClick={this.toggleEdit}>{this.props.name}</span>
                 <p>{this.props.description || "Click expense name to add description"}</p>
               </div>
               <div className='expense-action'>
                 <button className='btn' onClick={this.deleteExpense}>Delete</button>
               </div>
            </div>
        </div>);
 }
	render() {
	if (this.state.edit)
		return this.edit();
	else
		return this.expense; 
	}
}
export default Expense