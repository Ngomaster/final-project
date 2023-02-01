import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { useState } from "react";

function TableProduct(props) {
	let deleteByID = (id) => {
		// mangTodo.map((item) => {
		// 	if (item.id === id) {
		// 		console.log(item);
		// 	}
		// });
		// const [data, setData] = useState([]);
	};
	return (
		<>
			<tr>
				<th className="align-middle" scope="row">
					{props.todo.name}
				</th>
				<td class="align-middle">
					<img
						className="img-fluid"
						src={props.todo.image}
						alt=""
						srcset=""
					/>
				</td>
				<td className="align-middle">{props.todo.quantity}</td>
				<td className="align-middle">{props.todo.status}</td>
				<td className="align-middle">{props.todo.price}</td>
				<td className="align-middle">{props.todo.category}</td>
				<td className="align-middle">{props.todo.discount}</td>
				<td className="align-middle">
					<button className="btn btn-success">Edit</button>
					<button
						onClick={() => {
							props.deleteByID(props.todo.id);
						}}
						className="btn btn-danger  ml-3"
					>
						Del
					</button>
				</td>
			</tr>
		</>
	);
}

export default TableProduct;
