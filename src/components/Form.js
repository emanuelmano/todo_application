import React from "react";

const Form = ({ setInputText, todos, setTodos, inputT, setStatus }) => {
	// JS code and Functions
	const inputTextHandler = (e) => {
		console.log(e.target.value)
		setInputText(e.target.value)
	}
	const submitTodoHanler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputT, completed: false, id: Math.floor(Math.random() * 100) }
		]);
		setInputText("");
	};
	const statusHandler = (e) => {
		setStatus(e.target.value)
	}
	return (
		<form>
			
			<input value={inputT} onChange={inputTextHandler} type="text" className="todo-input" />
			{/* sekogas koga ovoj input ke se menuva, inputTextHandler ke se izvrshuva */}
			<button onClick={submitTodoHanler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>

	)
}

export default Form;