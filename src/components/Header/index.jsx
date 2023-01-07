import React from 'react';
import PropTypes from 'prop-types';
import "./index.css"
import { Link } from 'react-router-dom';



function Head(props) {
    return (
        <div className='container_head'>
            <div className='Log_out'>
                <Link to="/login"><em className="fa fa-sign-out"></em></Link>
            </div>
        </div>
    );
}

export default Head;