import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function AddOrder(props) {
	return (
		<div>
			<form action="" className="form_add_order">
				<label htmlFor="">Tên khách hàng :</label>
				<br />
				<input type="text" name="" id="" />
				<br />
				<label htmlFor="">Đơn hàng :</label>
				<br />
				<input type="text" name="" id="" />
				<br />
				<label htmlFor="">Số lượng :</label>
				<br />
				<input type="text" name="" id="" />
				<br />
				<label htmlFor="">Giá tiền :</label>
				<br />
				<input type="text" name="" id="" />
				<br />
				<label htmlFor="">Danh mục :</label>
				<br />
				<input type="text" name="" id="" />
				<br />
				<label htmlFor="">Giảm giá :</label>
				<br />
				<input type="text" name="" id="" />
				<br /> <br />
				<input type="button" id="Save_cus" value="Save" />
				<Link to="/admin/order">
					<input type="button" id="Cancel_cus" value="Cancel" />
				</Link>
			</form>
		</div>
	);
}

export default AddOrder;
