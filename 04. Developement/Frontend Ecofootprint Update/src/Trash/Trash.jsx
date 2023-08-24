import './Trash.css';
import { useState, useEffect } from 'react'
import {Link } from 'react-router-dom';
import { Col, Row, Slider,InputNumber } from 'antd';
import cloud1 from './assets/cloud/cloud1.png'
import cloud2 from './assets/cloud/cloud2.png'
import cloud3 from './assets/cloud/cloud3.png'
import Heading from '../Heading/Heading';
import trashTablet from './assets/HousingTrashTablet.png'
import { RightCircleOutlined ,  LeftCircleOutlined  } from '@ant-design/icons'
import axios from 'axios';
function Trash(){
    const [trash, setTrash] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/api/activity/category/4');
            setTrash(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
      // State variables for slider values
  const [sliderValues, setSliderValues] = useState({});

  // Handler for slider changes
  const handleSliderChange = (product, value) => {
    setSliderValues(prevValues => ({
      ...prevValues,
      [product]: value,
    }));
  };
  useEffect(() => {
    const initialSliderValues = {};
    trash.forEach(e => {
      initialSliderValues[e.name] = 0;
    });
    setSliderValues(initialSliderValues);
  }, [trash]);
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
                    <Link to='/house'><LeftCircleOutlined className='leftIcon'/></Link>
                    <Link to='/result'><RightCircleOutlined className='rightIcon'/></Link>
                    <p className='caption2'>TRASH</p>
                    <h1 className='title2'>How much trash do you generate in a day?</h1>
                    {trash.map((e)=>
                        <Row style={{marginTop:'10px'}}>

                            <Col span={4}><h2>{e.name.toUpperCase()}</h2></Col>

                            <Col span={15}>
                            <Slider
                            min={0}
                            max={e.maxvolumn}
                            step={1}
                            value={sliderValues[e.name] || 0} 
                            onChange={(value) => handleSliderChange(e.name, value)} 
                            />
                            </Col>
                            <Col span={4}>
                            <InputNumber
                            min={0}
                            max={20}
                            style={{
                                margin: '0 16px',
}}
                            value={sliderValues[e.name]+' '+e.unit || 0} 
                            onChange={(value) => handleSliderChange(e.name, value)} 
                            />
                            </Col>

                        </Row>
                    )}
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
