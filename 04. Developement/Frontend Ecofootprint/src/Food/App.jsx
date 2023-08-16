import { useState } from 'react'
import { Image, Col, InputNumber, Row, Slider, Space} from 'antd'; 
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Cloud1 from './assets/cloud1.png'
import Cloud2 from './assets/cloud2.png'
import FoodImg from './assets/FoodCategoryDesktop.png'
// import Test1 from '../Test1/App'
// import Test2 from '../Test2/App'
import Heading from '../Heading/Heading';
function App() {
  const [beefInputValue, setBeefInputValue] = useState(1);
  const beef = (beefValue) => {
    setBeefInputValue(beefValue);
  };
  const [porkInputValue, setPorkInputValue] = useState(1);
  const Pork = (porkValue) => {
    setPorkInputValue(porkValue);
  };
  const [poultryInputValue, setPoultryInputValue] = useState(1);
  const Poultry = (poultryValue) => {
    setPoultryInputValue(poultryValue);
  };
  const [fishInputValue, setFishInputValue] = useState(1);
  const Fish = (fishValue) => {
    setFishInputValue(fishValue);
  };
  const [eggsInputValue, setEggsInputValue] = useState(1);
  const Eggs = (eggsValue) => {
    setEggsInputValue(eggsValue);
  };
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
          <p className='caption'>FOOT</p>
          <h1 className='title'>How often do you eat animal-based products?</h1>
          <h2 className='sub_title'> (beef, pork, chicken, fish, eggs, dairy products)</h2>
          <Row>
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
          </Row>
          <Row>
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
          </Row>
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
      {/* <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/test1" style={{ padding: 5 }}>
          Test1
          </Link>
          <Link to="/test2" style={{ padding: 5 }}>
          Test2
          </Link>
      </nav>
      <Routes>
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2/>} />
      </Routes>
    </Router> */}
    </>
  )
}

export default App
