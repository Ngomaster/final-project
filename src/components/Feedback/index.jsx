import React from 'react';
import './index.css'

function Feedback(props) {

    return (
        <div>
            <header>
                <p className='text_head'><b>Feedbacks</b></p>
            </header>
            <main className='main'>    
                    <div className='item_feedback'>
                        <div className='item_feedback_1'>
                            <div className='icon_ava'>
                                <img id='img_ava' src="https://cdnimg.vietnamplus.vn/uploaded/qfsqy/2022_12_19/ttxvn_messi1.jpg" alt="" />
                            </div>
                            <div>
                                <h3>Bảo Trần</h3>
                                <em className='fa fa-star'></em> <em className='fa fa-star'></em> <em className='fa fa-star'></em> <em className='fa fa-star'></em> <em className='fa fa-star'></em>
                                <p className='text_feedback'>10 điểmmmmm và hơn thế nữa</p>
                            </div>
                        </div>
                        <div className='item_feedback_2'>
                            <div className='icon_ava'>
                                <img id='img_ava' src="https://cdnimg.vietnamplus.vn/uploaded/qfsqy/2022_12_19/ttxvn_messi1.jpg" alt="" />
                            </div>
                            <div>
                                <h3>Bảo Trần</h3>
                                <em className='fa fa-star'></em> <em className='fa fa-star'></em> <em className='fa fa-star'></em> <em className='fa fa-star'></em> <em className='fa fa-star'></em>
                                <p className='text_feedback'>10 điểmmmmm</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    );
}

export default Feedback;