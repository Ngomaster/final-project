import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./index.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import productApis from '../../apis/Products/ProductsAPI';

function AddProducts(props) {
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            id: Date.now(),
            name: '',
            image: '',
            quantity: '',
            status: '',
            price: '',
            category: '',
            discount: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Không được bỏ trống!'),
            image: Yup.string().required('Không được bỏ trống!'),
            quantity: Yup.number().required('Không được bỏ trống!'),
            status: Yup.string().required('Không được bỏ trống!'),
            price: Yup.string().required('Không được bỏ trống!'),
            category: Yup.string().required('Không được bỏ trống!'),
            discount: Yup.string().required('Không được bỏ trống!'),
        }),
        
        onSubmit: (values) =>{
            console.log(values);
            let path = "/admin/products"
            navigate(path);
            const postProductData = async () => {
                try {
                    const reponse = await productApis.postProducts(values)
                    return reponse.data
                } catch(error){}
            }
            postProductData();
        },
    })
    
     
    return (
        <div>
            <form id='form_add' onSubmit={formik.handleSubmit}>
                <label htmlFor="">Tên sản phẩm :</label>
                <br />
                <input
                 type="text"
                 name="name"
                 value={formik.values.name} onChange={formik.handleChange}/>
                 {formik.errors.name && formik.touched.name && (<p>{formik.errors.name}</p>)}

                <br />
                <label htmlFor="">Ảnh :</label>
                <br />
                <input
                 type="text"
                 name="image"
                 value={formik.values.image} onChange={formik.handleChange}/>
                 {formik.errors.image && formik.touched.image && (<p>{formik.errors.image}</p>)}

                <br />
                <label htmlFor="">Số lượng :</label>
                <br />
                <input
                 type="text"
                 name="quantity"
                 value={formik.values.quantity} onChange={formik.handleChange}/>
                 {formik.errors.quantity && formik.touched.quantity && (<p>{formik.errors.quantity}</p>)}

                <br />
                <label htmlFor="">Tình trạng :</label>
                <br />
                <select name="status" id="" value={formik.values.status} onChange={formik.handleChange}>
                    <option value="còn hàng">còn hàng</option>
                    <option value="hết hàng">hết hàng</option>
                </select>
                 {formik.errors.status && formik.touched.status && (<p>{formik.errors.status}</p>)}

                <br />
                <label htmlFor="">Giá tiền :</label>
                <br />
                <input
                 type="text"
                 name="price"
                 value={formik.values.price} onChange={formik.handleChange}/>
                 {formik.errors.price && formik.touched.price && (<p>{formik.errors.price}</p>)}

                <br />
                <label htmlFor="">Danh mục :</label>
                <br />
                <input 
                 type="text" 
                 name="category"
                 value={formik.values.category} onChange={formik.handleChange}/>
                 {formik.errors.category && formik.touched.category && (<p>{formik.errors.category}</p>)}

                <br /> 
                <label htmlFor="">Giảm giá :</label>
                <br />
                <input 
                 type="text"
                 name="discount"
                 value={formik.values.discount} onChange={formik.handleChange}/>
                 {formik.errors.discount && formik.touched.discount && (<p>{formik.errors.discount}</p>)}

                <br /> <br />
                <input type="submit" id='Save_cus' value="Save" />
                <Link to='/admin/products'><input type="button" id='Cancel_cus' value="Cancel" /></Link>
            </form>
        </div>
    );
}

export default AddProducts;