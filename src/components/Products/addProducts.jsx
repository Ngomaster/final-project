import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

function AddProducts(props) {
    return (
        <div>
            <form action="">
                <label htmlFor="">Mã sản phẩm :</label>
                <br /> 
                <input type="text" name="" id="" />
                <br />
                <label htmlFor="">Tên sản phẩm :</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <label htmlFor="">Ảnh :</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <label htmlFor="">Số lượng :</label>
                <br />
                <input type="text" name="" id="" />
                <br />
                <label htmlFor="">Tình trạng :</label>
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
                <Link id='Save_cus' to="/products">Save</Link>
                <Link id='Cancel_cus' to="/products">Cancel</Link>
            </form>
        </div>
    );
}

export default AddProducts;