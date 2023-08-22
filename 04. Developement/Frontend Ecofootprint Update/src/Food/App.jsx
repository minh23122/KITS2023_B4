import { useState } from 'react'
import { useEffect } from 'react';
import { Col, InputNumber, Row, Slider} from 'antd'; 
import './App.css';
import { Link } from 'react-router-dom';
import Cloud1 from './assets/cloud1.png'
import Cloud2 from './assets/cloud2.png'
import FoodImg from './assets/FoodCategoryDesktop.png'
import Heading from '../Heading/Heading';
import { RightCircleOutlined  } from '@ant-design/icons'
import axios from 'axios';
function App() {
  const [activity, setActivity]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/activity/category/1');
        setActivity(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); 
  // const [beefInputValue, setBeefInputValue] = useState(1);
  // const beef = (beefValue) => {
  //   setBeefInputValue(beefValue);
  // };
  // const [porkInputValue, setPorkInputValue] = useState(1);
  // const Pork = (porkValue) => {
  //   setPorkInputValue(porkValue);
  // };
  // const [poultryInputValue, setPoultryInputValue] = useState(1);
  // const Poultry = (poultryValue) => {
  //   setPoultryInputValue(poultryValue);
  // };
  // const [fishInputValue, setFishInputValue] = useState(1);
  // const Fish = (fishValue) => {
  //   setFishInputValue(fishValue);
  // };
  // const [eggsInputValue, setEggsInputValue] = useState(1);
  // const Eggs = (eggsValue) => {
  //   setEggsInputValue(eggsValue);
  // };
  return (
    <>
      <div className='container5'>
      <div>
        <Heading />
      </div>        
        <div>
          <img className='cloud1' src={Cloud1} />
          <img className='cloud2' src={Cloud2} />
        </div>
        <div className='content'>
          <Link to='/travelled'><RightCircleOutlined className='rightIcon'/></Link>
          <p className='caption'>FOOT</p>
          <h1 className='title'>How often do you eat animal-based products?</h1>
          <h2 className='sub_title'>{activity.map((a)=>a.name+" ")}</h2>
          {/* <Row>
            <Col span={4}>
              <h2>Beef</h2>
            </Col>
            <Col span={16}>
              <Slider
                min={0}
                max={20}
                step={0.1}
                onChange={beef}
                value={typeof beefInputValue === 'number' ? beefInputValue : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={20}
                style={{
                  margin: '0 16px',
                }}
                value={beefInputValue}
                onChange={beef}
              />
            </Col>
          </Row> */}
          {/* <Row>
            <Col span={4}>
              <h2>Pork</h2>
            </Col>
            <Col span={16}>
              <Slider
                min={0}
                max={20}
                step={0.1}
                onChange={Pork}
                value={typeof porkInputValue === 'number' ? porkInputValue : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={20}
                style={{
                  margin: '0 16px',
                }}
                value={porkInputValue}
                onChange={Pork}
              />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <h2>Poultry</h2>
            </Col>
            <Col span={16}>
              <Slider
                min={0}
                max={20}
                step={0.1}
                onChange={Poultry}
                value={typeof poultryInputValue === 'number' ? poultryInputValue : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={20}
                style={{
                  margin: '0 16px',
                }}
                value={poultryInputValue}
                onChange={Poultry}
              />
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <h2>Fish</h2>
            </Col>
            <Col span={16}>
              <Slider
                min={0}
                max={20}
                step={0.1}
                onChange={Fish}
                value={typeof fishInputValue === 'number' ? fishInputValue : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={20}
                style={{
                  margin: '0 16px',
                }}
                value={fishInputValue}
                onChange={Fish}
              />
            </Col>
          </Row>
          <Row>
            <Col span={4} style={{ paddingRight: '20px' }}>
              <h2>Eggs,Dairy</h2>
            </Col>
            <Col span={16}>
              <Slider
                min={0}
                max={20}
                step={1}
                onChange={Eggs}
                value={typeof eggsInputValue === 'number' ? eggsInputValue : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={20}
                style={{
                  margin: '0 16px',
                }}
                value={eggsInputValue}
                onChange={Eggs}
              />
            </Col>
          </Row> */}
          {activity.map((e)=>
          <Row>
            <Col span={4}><h2>{e.name.toUpperCase()}</h2></Col>
            <Col span={15}>
            <Slider
                min={0}
                max={e.maxvolumn}
                step={0.1}
                // value={typeof beefInputValue === 'number' ? beefInputValue : 0}
              />
            </Col>
          </Row>
          )}
        </div>
        <div className='houseImg' style={{
                    backgroundImage: `url(${FoodImg})`,
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

export default App
