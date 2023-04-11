import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import {Todo} from "./Todo";

export const Todos = () => {

 

	return (
		<div className="todos">
			<p id="todos-title">Tareas agendadas</p>
		
				<Todo  todo = "Hola"/>
			
		</div>
	);
};
