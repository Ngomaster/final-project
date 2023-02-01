import React from 'react';
import './index.css'

function Revenue(props) {
    return (
        <div>
            <header>
                <p className='text_head'><b>Revenue</b></p>
            </header>
            <main>
                <div className='item_profit'>
                    <div className='icon_profit'>
                        <h3 className='text_h3_profit'>Lợi nhuận</h3>
                    </div>
                    <div>
                        <h4 className='title_h4_dash'>THỰC TẾ : 98.000.000đ</h4>
                        <h5 className='text_0'>Dự kiến : 100.000.000đ</h5>
                    </div>
                </div>
                <div className='item_revenue'>
                    <div className='icon_profit'>
                        <h3 className='text_h3_profit'>Doanh thu</h3>
                    </div>
                    <div>
                        <h4 className='title_h4_dash'>THỰC TẾ : 98.000.000đ</h4>
                        <h5 className='text_0'>Dự kiến : 100.000.000đ</h5>
                    </div>
                </div>
                <div className='item_cost'>
                    <div className='icon_profit'>
                        <h3 className='text_h3_cost'>Chi phí</h3>
                    </div>
                    <div>
                        <h4 className='title_h4_dash'>VỐN : 98.000.000đ</h4>
                        <h5 className='text_0'>tổng chi phí : 50.000.000đ</h5>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Revenue;