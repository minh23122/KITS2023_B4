import { useState } from 'react'
import { Image, Col, InputNumber, Row, Slider, Space } from 'antd';
import './App.css';
import cloud1 from './assets/cloud/cloud1.png'
import cloud2 from './assets/cloud/cloud2.png'
import cloud3 from './assets/cloud/cloud3.png'
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
      <div className='container1'>
        <img className='logo1' src='logo.png' />
        <div>
          <img className='cld1' src={cloud1} />
          <img className='cld2' src={cloud3} />
          <img className='cld3' src={cloud2} />
        </div>
        <div className='content1'>
          <p className='caption1'>FOOT</p>
          <h1 className='title1'>How often do you eat animal-based products?</h1>
          <h2 className='sub_title1'> (beef, pork, chicken, fish, eggs, dairy products)</h2>
          <Row>
            <Col span={4}>
              <h2>Beef</h2>
            </Col>
            <Col span={12}>
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
            <Col span={12}>
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
            <Col span={12}>
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
            <Col span={12}>
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
            <Col span={12}>
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
                  textAlign:'center',
                }}
                value={eggsInputValue}
                onChange={Eggs}
              />
            </Col>
          </Row>
        </div>
        <img className='FoodImage' src="FoodCategoryDesktop.png" alt="" />
      </div>
    </>
  )
}

export default App
