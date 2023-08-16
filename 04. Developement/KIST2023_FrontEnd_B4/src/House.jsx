import './House.css';
import { useState } from 'react'
import { Image, Col, InputNumber, Row, Slider, Space } from 'antd';
import House3 from './assets/housingMember/HousingMemberAreaHouseHugeDesktop.png'
import House2 from './assets/housingMember/HousingMemberAreaHouseLargeDesktop.png'
import House1 from './assets/housingMember/HousingMemberAreaHouseTinyDesktop.png'
import Man1 from './assets/man/Man1.png'
import Man2 from './assets/man/Man2.png'
import Man3 from './assets/man/Man3.png'
import Man4 from './assets/man/Man4.png'
import Man5 from './assets/man/Man5.png'
import Man6 from './assets/man/Man6.png'
import Man7 from './assets/man/Man7.png'
import Man8 from './assets/man/Man8.png'
import Man9 from './assets/man/Man9.png'
import Man10 from './assets/man/Man10.png'
import cloud1 from './assets/cloud/cloud1.png'
import cloud2 from './assets/cloud/cloud2.png'
import cloud3 from './assets/cloud/cloud3.png'
function House(){
    const [peopleInputValue, setPeopleInputValue] = useState(1);
    const people = (peopleValue) => {
        setPeopleInputValue(peopleValue);
    };
    const [sizeInputValue, setSizeInputValue] = useState(1);
    const size = (sizeValue) => {
        setSizeInputValue(sizeValue);
    };
    const manImages = [
        Man1, Man2, Man3, Man4, Man5,
        Man6, Man7, Man8, Man9, Man10
    ];
    const backgroundImage = sizeInputValue < 100
        ? `url(${House1})`
        : sizeInputValue < 500
            ? `url(${House2})`
            : `url(${House3})`;
    return(
        <>
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
                        <Row >
                            <Col span={4}>
                                <h2>JUST ME</h2>
                            </Col>
                            <Col span={16}>
                                <Slider
                                    min={1}
                                    max={10}
                                    onChange={people}
                                    value={typeof peopleInputValue === 'number' ? peopleInputValue : 0}
                                />
                            </Col>
                            <Col span={4}>
                                <h2>10+</h2>
                            </Col>
                        </Row>
                    <h1>{peopleInputValue}</h1>
                    <h1 className='title2'>What is the size of your home?</h1>
                    <Row>
                        <Col span={4}>
                            <h2>TINY</h2>
                        </Col>
                        <Col span={16}>
                            <Slider
                                min={5}
                                max={1200}
                                onChange={size}
                                value={typeof sizeInputValue === 'number' ? sizeInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2>HUGE</h2>
                        </Col>
                    </Row>
                    <h1>{sizeInputValue} m2</h1>
                </div>
                <div className='houseMenberImg' style={{
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover', // Để hình ảnh nền hiển thị đầy đủ trong phần tử
                    backgroundPosition: 'center', // Căn giữa hình ảnh nền
                    width: '100%', // Đảm bảo phần tử chiếm hết chiều rộng
                    height: '70%', // Đặt chiều cao của phần tử
                    display: 'flex', // Sử dụng flexbox
                    flexDirection: 'column', // Xếp hình ảnh và nội dung ở dưới theo cột
                    alignItems: 'center', // Căn giữa theo chiều ngang
                    justifyContent: 'flex-end', // Đặt nội dung ở dưới
                    }}>
                    <img className='Man' src={manImages[peopleInputValue - 1]} alt="" />
                </div>
            </div>
        </>
    )
}
export default House;