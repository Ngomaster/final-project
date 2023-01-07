import React from 'react';
import PropTypes from 'prop-types';
import "./index.css"
import { Link } from 'react-router-dom';

function Product(props) {
    return (
        <div>
            <header>
                <p className='text_head'><b>Product</b></p>
            </header>
            <main className='main'>
                <div>
                    <ul id='item_menu_products'>
                        <Link to='/addProducts'><li className='text_product'><em className="fa fa-plus"></em>Tạo sản phẩm mới</li></Link>
                        <li className='text_product_1'><em className="fa fa-trash"></em>Xóa tất cả sản phẩm</li>
                    </ul>
                    <span className='line_products'>______________________________________________________________________________________________________________________________________________________________________________________________</span>
                    <div className='search'>
                        <label htmlFor=""><b>Tìm kiếm:</b></label>
                        <input type="search" name="" id="inp_search" />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" id=""/></th>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ảnh</th>
                                <th>Số lượng</th>
                                <th>Tình trạng</th>
                                <th>Giá tiền</th>
                                <th>Danh mục</th>
                                <th>Giảm giá</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" id=""/></td>
                                <td>71309005</td>
                                <td>Bàn ăn gỗ</td>
                                <td><img id='img_products' src="https://bachma.vn/wp-content/uploads/2020/08/ban-an-mogen.jpg" alt="" /></td>
                                <td>20</td>
                                <td>Còn hàng</td>
                                <td>5m</td>
                                <td>Bàn ăn</td>
                                <td>5%</td>
                                <td><em className="fa fa-trash"></em><Link to="/editproducts"><em className="fa fa-refresh"></em></Link></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id=""/></td>
                                <td>71309005</td>
                                <td>Bàn ăn gỗ</td>
                                <td><img id='img_products' src="https://bachma.vn/wp-content/uploads/2020/08/ban-an-mogen.jpg" alt="" /></td>
                                <td>20</td>
                                <td>Còn hàng</td>
                                <td>5m</td>
                                <td>Bàn ăn</td>
                                <td>5%</td>
                                <td><em className="fa fa-trash"></em><Link to="/editproducts"><em className="fa fa-refresh"></em></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Product;

