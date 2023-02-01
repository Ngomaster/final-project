import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import TableProduct from "./tableProduct";
import productApis from "../../apis/Products/ProductsAPI";
import { logDOM } from "@testing-library/react";
import { string } from "yup";

function Product(props) {
	const search = (rows = [], searchValue = "") =>
		rows.filter((row) =>
			Object.values(row).some((value) =>
				string(value)
					.toLowerCase()
					.includes(string(searchValue).toLowerCase())
			)
		);

	const [products, setProducts] = useState([]);
	const getProductData = async () => {
		try {
			const response = await productApis.getProducts();
			return setProducts(response.data);
		} catch (error) {}
	};
	useEffect(() => {
		getProductData();
	}, []);
	let deleteByID = (id) => {
		products.map((item) => {
			if (item.id === id) {
				console.log(item);
			}
		});
	};
	return (
		<div className="col-12">
			<div className="container-fluid">
				<div className="row">
					<header className="col-12">
						<p className="text_head">
							<b>Product</b>
						</p>
					</header>
					<main className="main">
						<div className="col-12 text-center">
							<ul id="item_menu_products" className="mb-5">
								<Link to="/admin/addProducts">
									<li className="text_product">
										<em className="fa fa-plus"></em>Tạo sản phẩm mới
									</li>
								</Link>
								<li className="text_product_1">
									<em className="fa fa-trash"></em>Xóa tất cả sản phẩm
								</li>
							</ul>

							<div className="search mb-4">
								<label htmlFor="search">
									<b>Tìm kiếm:</b>
								</label>
								<input
									type="text"
									name=""
									id="inp_search"
									onChange={search}
								/>
							</div>

							<table class="table col-11">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Tên sản phẩm</th>
										<th scope="col">Ảnh</th>
										<th scope="col">Số lượng</th>
										<th scope="col">Tình trạng</th>
										<th scope="col">Giá tiền</th>
										<th scope="col">Danh mục</th>
										<th scope="col">Giảm giá</th>
										<th scope="col">Chức năng</th>
									</tr>
								</thead>
								<tbody>
									{products.map((item) => {
										return (
											<TableProduct
												todo={item}
												deleteByID={deleteByID}
											/>
										);
									})}
								</tbody>
							</table>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default Product;
