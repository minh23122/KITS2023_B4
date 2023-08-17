import './Trash.css';
import { useState } from 'react'
import { Col, Row, Slider } from 'antd';
import cloud1 from './assets/cloud/cloud1.png'
import cloud2 from './assets/cloud/cloud2.png'
import cloud3 from './assets/cloud/cloud3.png'
import Heading from '../Heading/Heading';
import trashTablet from './assets/HousingTrashTablet.png'
function Trash(){
    const [papperInputValue, setPapperInputValue] = useState(1);
    const papper = (papperValue) => {
        setPapperInputValue(papperValue);
    };
    const [plasticInputValue, setPlasticInputValue] = useState(4);
    const plastic = (plasticValue) => {
        setPlasticInputValue(plasticValue);
    };
    const [organicInputValue, setOrganicInputValue] = useState(6);
    const organic = (organicValue) => {
        setOrganicInputValue(organicValue);
    };
    const [glassInputValue, setGlassInputValue] = useState(1);
    const glass = (glassValue) => {
        setGlassInputValue(glassValue);
    };
    return(
        <>
            <div className='container4'>
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
                    <h1 className='title2'>How much trash do you generate in a day?</h1>
                    <Row>
                        <Col span={4}>
                            <h2>PAPER</h2>
                        </Col>
                        <Col span={1}>
                            <h2 className='value_kms'>0</h2>
                        </Col>
                        <Col span={15}>
                            <Slider
                                min={0}
                                max={20}
                                step={0.1}
                                onChange={papper}
                                value={typeof papperInputValue === 'number' ? papperInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_kms'>20</h2>
                        </Col>
                    </Row>
                    <h1 className='title_kms'>{papperInputValue} kg</h1>
                    <Row>
                        <Col span={4}>
                            <h2>PLASTIC</h2>
                        </Col>
                       
                        <Col span={1}>
                            <h2 className='value_kms'>0</h2>
                        </Col>
                        <Col span={15}>
                            <Slider
                                min={0}
                                max={20}
                                step={0.1}
                                onChange={plastic}
                                value={typeof plasticInputValue === 'number' ? plasticInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_kms'>20</h2>
                        </Col>
                    </Row>
                    <h1 className='title_kms'>{plasticInputValue} kg</h1>
                    <Row>
                        <Col span={4}>
                            <h2>GLASS</h2>
                        </Col>

                        <Col span={1}>
                            <h2 className='value_kms'>0</h2>
                        </Col>
                        <Col span={15}>
                            <Slider
                                min={0}
                                max={20}
                                step={0.1}
                                onChange={glass}
                                value={typeof glassInputValue === 'number' ? glassInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_kms'>20</h2>
                        </Col>
                    </Row>
                    <h1 className='title_kms'>{glassInputValue} kg</h1>
                    <Row>
                        <Col span={4}>
                            <h2>ORGANIC</h2>
                        </Col>

                        <Col span={1}>
                            <h2 className='value_kms'>0</h2>
                        </Col>
                        <Col span={15}>
                            <Slider
                                min={0}
                                max={20}
                                step={0.1}
                                onChange={organic}
                                value={typeof organicInputValue === 'number' ? organicInputValue : 0}
                            />
                        </Col>
                        <Col span={4}>
                            <h2 className='value_kms'>20</h2>
                        </Col>
                    </Row>
                    <h1 className='title_kms'>{organicInputValue} kg</h1>
                </div>
                <div className='houseMenberImg' style={{
                    backgroundImage: `url(${trashTablet})`,
                    backgroundSize: 'cover', // Để hình ảnh nền hiển thị đầy đủ trong phần tử
                    backgroundPosition: 'center', // Căn giữa hình ảnh nền
                    width: '100%', // Đảm bảo phần tử chiếm hết chiều rộng
                    height: '100%', // Đặt chiều cao của phần tử
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
export default Trash;