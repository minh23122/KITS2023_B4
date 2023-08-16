import { useState } from 'react'
import { CloseCircleOutlined  } from '@ant-design/icons'
import './App.css'
import Anhchinh from './assets/HousingRenewableResourcesDesktop.png'
import cloud from './assets/cloud1.png'
import logo from './assets/logo.png'
function App() {
  const [isPopupOpenLogin, setIsPopupOpenLogin] = useState(false);
  const [isPopupOpenRegister, setIsPopupOpenRegister] = useState(false);
  const turnOnRegister= ()=>{
    setIsPopupOpenLogin(!isPopupOpenLogin)
    setIsPopupOpenRegister(!isPopupOpenRegister)
  }

  const togglePopup = () => {
    setIsPopupOpenLogin(!isPopupOpenLogin);
    setIsPopupOpenRegister(false)
  };
  return (
    <>
      <div className='container'>
        <img className='logo' src={logo}/>
        <button className='btnLogin' onClick={togglePopup}>Login</button>
        <img className='cloud1' src={cloud}/>
        <img className='cloud2' src={cloud}/>
        <div className='content'>
          <p className='caption animated-text'>What is your</p>
          <h1 className='title animated-text'>Ecological Footprint?</h1>
          <h2 className='sub_title animated-text'> How many planets do we need if everybody lives like you?</h2>
        </div>
        {isPopupOpenLogin && (
          <div className="popup">
            <div className="popup-content">
              <CloseCircleOutlined onClick={togglePopup} style={{float:"right"}}/>
              <h2 style={{textAlign: "center"}}>Login Account</h2>
              <form style={{paddingRight: "18px"}}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
                <button className='register' onClick={turnOnRegister} >Register</button>
              </form>
            </div>
          </div>
        )}
        <img className='houseImg' src={Anhchinh} alt="" />
        {isPopupOpenRegister && (
          <div className="popup">
            <div className="popup-content">
              <CloseCircleOutlined onClick={togglePopup} style={{float:"right"}}/>
              <h2 style={{textAlign: "center"}}>Register Account</h2>
              <form style={{paddingRight: "18px"}}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repassword" />
                <input type="text" placeholder="Phone number" />
                <input type="text" placeholder="Address" />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App;
