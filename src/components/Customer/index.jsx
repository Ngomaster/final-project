import React from 'react';
import PropTypes from 'prop-types';
import "./index.css"
import { Link } from 'react-router-dom';

function Customer(props) {
    return (
        <div>
            <header>
                <p className='text_head'><b>Customers</b></p>
            </header>
            <main className='main'>
                <div>
                    <ul id='item_menu_products'>
                        <Link to="/admin/addCus"><li className='text_product'><em className="fa fa-pause"></em>Danh sách chờ</li></Link>
                        <li className='text_product_1'><em className="fa fa-times-circle"></em>Ngưng hoạt động</li>
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
                                <th>Tên khách hàng</th>
                                <th>Đơn hàng</th>
                                <th>Số lượng</th>
                                <th>Giá tiền</th>
                                <th>Danh mục</th>
                                <th>Giảm giá</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" id=""/></td>
                                <td>Trần Đình Bảo</td>
                                <td>Bàn ăn gỗ Theresa</td>
                                <td>2</td>
                                <td>2.000.000</td>
                                <td>Bàn ăn</td>
                                <td>5%</td>
                                <td><em className="fa fa-trash"></em><em className="fa fa-refresh"></em></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id=""/></td>
                                <td>Trần Đình Bảo</td>
                                <td>Bàn ăn gỗ Theresa</td>
                                <td>2</td>
                                <td>2.000.000</td>
                                <td>Bàn ăn</td>
                                <td>5%</td>
                                <td><em className="fa fa-trash"></em><em className="fa fa-refresh"></em></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Customer;