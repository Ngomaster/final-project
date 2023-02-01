import React from 'react';
import { Link } from 'react-router-dom';

import "./index.css"

function Order(props) {
    return (
        <div>
            <header>
                <p className='text_head'><b>Orders</b></p>
            </header>
            <main className='main'>
                <div>
                <ul id='item_menu_order'>
                <Link to="/admin/addOrder"><li className='text_product'><em className="fa fa-pause"></em>Danh sách chờ</li></Link>
                        <li className='text_order_1'><em className="fa fa-trash"></em>Xóa tất cả đơn hàng</li>
                    </ul>
                    <span className='line_order'>______________________________________________________________________________________________________________________________________________________________________________________________</span>
                    <div className='search'>
                        <label htmlFor=""><b>Tìm kiếm:</b></label>
                        <input type="search" name="" id="inp_search" />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" id=""/></th>
                            <th>Khách hàng</th>
                            <th>Đơn hàng</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                            <th>Tình trạng</th>
                            <th>Giảm giá</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" id=""/></td>
                            <td>Trần Đình Bảo</td>
                            <td> Bàn ăn gỗ Theresa</td>
                            <td>2</td>
                            <td>5.000.000</td>
                            <td>Hoàn thành</td>
                            <td>20%</td>
                            <td><em className="fa fa-trash"></em><em className="fa fa-refresh"></em></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" id=""/></td>
                            <td>Hồ Hữu Tuấn</td>
                            <td> Bàn ăn gỗ Theresa</td>
                            <td>2</td>
                            <td>6.123.456</td>
                            <td>Chưa hoàn thành</td>
                            <td>20%</td>
                            <td><em className="fa fa-trash"></em><em className="fa fa-refresh"></em></td>
                        </tr>
                    </tbody>
                
                </table>
            </main>
        </div>
    );
}

export default Order;