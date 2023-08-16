import './DistanceTravelled.css';
import { useState } from 'react'
import { Image, Col, InputNumber, Row, Slider, Space } from 'antd';
import cloud1 from '../assets/cloud/cloud1.png'
import cloud2 from '../assets/cloud/cloud2.png'
import cloud3 from '../assets/cloud/cloud3.png'
import travelled from '../assets/travelled/TransportationDistanceTravelledTablet.png'
function DistanceTravelled(){
    return(<>
        <div className='container2'>
            <img className='logo2' src='logo.png' />
            <div>
                <img className='cld1' src={cloud1} />
                <img className='cld2' src={cloud3} />
                <img className='cld3' src={cloud2} />
            </div>
            <div className='content2'>
                <p className='caption2'>HOUSING</p>
                <h1 className='title2'>How many people live in your household?</h1>
            </div>
            <div className='houseMenberImg' style={{
                backgroundImage: `url(${travelled})`,
                backgroundSize: 'cover', // Để hình ảnh nền hiển thị đầy đủ trong phần tử
                backgroundPosition: 'center', // Căn giữa hình ảnh nền
                width: '100%', // Đảm bảo phần tử chiếm hết chiều rộng
                height: '50%', // Đặt chiều cao của phần tử
                display: 'flex', // Sử dụng flexbox
                flexDirection: 'column', // Xếp hình ảnh và nội dung ở dưới theo cột
                alignItems: 'center', // Căn giữa theo chiều ngang
                justifyContent: 'flex-end', // Đặt nội dung ở dưới
            }}>

            </div>
        </div>
    </>)
}

export default DistanceTravelled;