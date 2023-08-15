import { useState } from 'react'
import { Image, Col, InputNumber, Row, Slider, Space } from 'antd';
import './App.css';
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
      <div className='container'>
        <img className='logo' src='logo.png' />
        <div>
          <img className='cloud1' src='cloud1.png' />
          <img className='cloud2' src='cloud3.png' />
          <img className='cloud3' src='cloud2.png' />
        </div>
        <div className='content'>
          <p className='caption'>FOOT</p>
          <h1 className='title'>How often do you eat animal-based products?</h1>
          <h2 className='sub_title'> (beef, pork, chicken, fish, eggs, dairy products)</h2>
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
                step={0.1}
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
          {/* <button className='add_details' onClick={togglePopup}>ADD DETAILS TO IMPROVE ACCURACY</button> */}
          {/* {isPopupOpen && (
            <div className="popup">
              <div className="popup-content">
                <CloseCircleOutlined onClick={togglePopup} style={{ float: "right" }} />
                  <Row>
                    <Col span={4}>
                      <h2>Beef</h2>
                    </Col>
                    <Col span={12}>
                      <Slider
                        min={0}
                        max={20}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={20}
                        style={{
                          margin: '0 16px',
                        }}
                        value={inputValue}
                        onChange={onChange}
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
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={20}
                        style={{
                          margin: '0 16px',
                        }}
                        value={inputValue}
                        onChange={onChange}
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
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={20}
                        style={{
                          margin: '0 16px',
                        }}
                        value={inputValue}
                        onChange={onChange}
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
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={20}
                        style={{
                          margin: '0 16px',
                        }}
                        value={inputValue}
                        onChange={onChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={4}style={{paddingRight:'20px'}}>
                      <h2>eggs,dairy</h2>
                    </Col>
                    <Col span={12}>
                      <Slider
                        min={0}
                        max={20}
                        onChange={onChange}
                        style={{marginLeft: '25px'}}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={20}
                        style={{
                          margin: '0 16px',
                        }}
                        value={inputValue}
                        onChange={onChange}
                      />
                    </Col>
                  </Row>
                </div>
            </div>
          )} */}
        </div>
        <img className='houseImg' src="FoodCategoryDesktop.png" alt="" />
      </div>
    </>
  )
}

export default App
