import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";


function Dashboard(props) {
    const data = [
        {
          name: "Tháng 1",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Tháng 2",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Tháng 3",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Tháng 4",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Tháng 5",
          uv: 1890,
          pv: 4800,
          amt: 2181
        },
        {
          name: "Tháng 6",
          uv: 2390,
          pv: 3800,
          amt: 2500
        }
      ];

    return (
        <div>
            <header>
                <p className='text_head'><b>Dashboard</b></p>
            </header>
            <main className='main_dash'>
                <div className='container_items'>
                    <div className='item_left'>
                        <Link to="/customer">
                        <div className='item_customer'>
                            <div className='icon_cus'>
                                <em className="fa fa-address-book"></em>
                            </div>
                            <div>
                                <h4>TỔNG KHÁCH HÀNG</h4>
                                <h5 className='text_0'>1072 khách hàng</h5>
                                <p className='line'>-------------------------------</p>
                                <p className='text_1'>Tổng số khách hàng được quản lý.</p>
                            </div>
                        </div>
                        </Link>
                        <Link to="/order">
                        <div className='item_order'>
                            <div className='icon_order'>
                                <em className="fa fa-shopping-bag"></em>
                            </div>
                            <div>
                                <h4>TỔNG ĐƠN HÀNG</h4>
                                <h5 className='text_0'>800 Đơn hàng</h5>
                                <p className='line'>-------------------------------</p>
                                <p className='text_1'>Tổng số hóa đơn bán hàng.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='item_right'>
                        <Link to="/products">
                        <div className='item_products'>
                            <div className='icon_pro'>
                                <em className="fa fa-database"></em>
                            </div>
                            <div>
                                <h4>TỔNG SẢN PHẨM</h4>
                                <h5 className='text_0'>5000 Sản phẩm</h5>
                                <p className='line'>-------------------------------</p>
                                <p className='text_1'>Tổng số sản phẩm được quản lý.</p>
                            </div>
                        </div>
                        </Link>
                        <Link to="/feedback">
                        <div className='item_warning'>
                            <div className='icon_warning'>
                                <em className="fa fa-comments"></em>
                            </div>
                            <div>
                                <h4>ĐÁNH GIÁ</h4>
                                <h5 className='text_0'>2 Đánh giá</h5>
                                <p className='line'>-------------------------------</p>
                                <p className='text_1'>Các đánh giá của khách hàng.</p>
                            </div>
                        </div>                
                        </Link>
                    </div>
                    <div className='table_order'>
                        <h3 className='text_table_order'>TÌNH TRẠNG ĐƠN HÀNG</h3>
                        <p id='line'>_________________________________________________________________________________________________________________________________________</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID đơn hàng</th>
                                    <th>Tên khách hàng</th>
                                    <th>Tổng tiền</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#AL3947</td>
                                    <td>Hồ Hữu Tuấn</td>
                                    <td>20.000.000 đ</td>
                                    <td>Chờ xử lý</td>
                                </tr>
                                <tr>
                                    <td>#AL3947</td>
                                    <td>Trần Đình Bảo</td>
                                    <td>500.000 đ</td>
                                    <td>Chờ xử lý</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='chart_dash'>
                    <h3 className='text_chart_dash'>Thống kê 6 tháng doanh thu</h3>
                    <span className='under_line'> </span>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;