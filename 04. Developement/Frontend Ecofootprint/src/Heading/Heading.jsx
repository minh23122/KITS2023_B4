import React from 'react';
import './Heading.css'; // Đường dẫn tới file CSS cho styling
import Logo from '../Home/assets/logo.png'
import IconUser from '../Home/assets/userIcon.png'

function Heading() {
  return (
    <div className="heading-container">
        <img className='logo' src={Logo} />
        <img className='user-icon' src={IconUser}/>
      {/* <UserOutlined className="user-icon" /> */}
    </div>
  );
}

export default Heading;