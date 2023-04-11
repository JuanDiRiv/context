import { useState} from 'react';


export const NuevoTodo = () => {

	return (
		<div>
			<p>Agregar Tarea</p>
			<input
				type="text"
				placeholder="Nombre de la tarea"
				
			/>
			<button>Agregar</button>
		</div>
	);
};
