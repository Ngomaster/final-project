import React from 'react';
import { Link } from 'react-router-dom';


function AddOrder(props) {
    return (
        <div>
            <form action="">
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
                <Link id='Save_cus' to="/order">Save</Link>
                <Link id='Cancel_cus' to="/order">Cancel</Link>
            </form>
        </div>
    );
}

export default AddOrder;