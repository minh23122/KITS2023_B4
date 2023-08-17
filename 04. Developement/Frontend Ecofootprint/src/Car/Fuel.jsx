import './Fuel.css';
import { useState } from 'react'
import { Col, Row, Slider } from 'antd';
import cloud1 from './assets/cloud/cloud1.png'
import cloud2 from './assets/cloud/cloud2.png'
import cloud3 from './assets/cloud/cloud3.png'
import logo from './assets/logo.png'
import carr from './assets/car.png'
import motorbike from './assets/motorbike.png'
import travelled from './assets/travelled/TransportationFuelTablet.png'
import Heading from '../Heading/Heading';
function Fuel(){
    const [carInputValue, setCarInputValue] = useState(1);
    const car = (carValue) => {
        setCarInputValue(carValue);
    };
    const [motoInputValue, setMotoInputValue] = useState(1);
    const moto = (motoValue) => {
        setMotoInputValue(motoValue);
    };
    return(
        <>
            <div className='container3'>
                <div>
                    <Heading />
                </div>  
                <div>
                    <img className='cld1' src={cloud1} />
                    <img className='cld2' src={cloud3} />
                    <img className='cld3' src={cloud2} />
                </div>
                <div className='content2'>
                    <p className='caption2'>TRANSPORTATION</p>
                    <h1 className='title2'>What is the average fuel economy of the vehicles you use most often?</h1>
                    <Row>
                        <Col span={4}>
                            <img src={carr} style={{ width: '40px' }} />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_fuel'>INEFFICIENT</h2>
                        </Col>
                        <Col span={12}>
                            <Slider
                                min={2}
                                max={24}
                                step={1}
                                onChange={car}
                                value={typeof carInputValue === 'number' ? carInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_fuel'>EFFICIENT OR ELECTRIC</h2>
                        </Col>
                    </Row>
                    <h1 className='value_liters'>{carInputValue} liters / 100 kms</h1>
                    <Row>
                        <Col span={4}>
                            <img src={motorbike} style={{ width: '40px' }} />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_fuel'>INEFFICIENT</h2>
                        </Col>
                        <Col span={12}>
                            <Slider
                                min={2}
                                max={24}
                                step={1}
                                onChange={moto}
                                value={typeof motoInputValue === 'number' ? motoInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_fuel'>EFFICIENT OR ELECTRIC</h2>
                        </Col>
                    </Row>
                    <h1 className='value_liters'>{motoInputValue} liters / 100 kms</h1>
                </div>
                <div className='houseMenberImg' style={{
                    backgroundImage: `url(${travelled})`,
                    backgroundSize: 'cover', // Để hình ảnh nền hiển thị đầy đủ trong phần tử
                    backgroundPosition: 'center', // Căn giữa hình ảnh nền
                    width: '100%', // Đảm bảo phần tử chiếm hết chiều rộng
                    height: '72%', // Đặt chiều cao của phần tử
                    display: 'flex', // Sử dụng flexbox
                    flexDirection: 'column', // Xếp hình ảnh và nội dung ở dưới theo cột
                    alignItems: 'center', // Căn giữa theo chiều ngang
                    justifyContent: 'flex-end', // Đặt nội dung ở dưới
                }}>
                </div>
            </div>
        </>
    )
}
export default Fuel;