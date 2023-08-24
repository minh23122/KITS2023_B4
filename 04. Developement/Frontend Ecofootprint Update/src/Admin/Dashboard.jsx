import React from 'react';
import { Row, Col, Card } from 'antd';

const Dashboard = () => {
  const userData = 100; 
  const categoryData = 15;
  const articleData = 300;

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="User Account" bordered style={{backgroundColor:'#b9ffd3'}}>
            <p style={{ fontSize: '24px' }}>{userData}</p>
            <p style={{ fontSize: '18px' }}>Total number of users</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Category Count" bordered style={{backgroundColor:'#adcbf3'}}>
            <p style={{ fontSize: '24px' }}>{categoryData}</p>
            <p style={{ fontSize: '18px' }}>Total number of Category</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Article Count" bordered style={{backgroundColor:'#fde1c3'}}>
            <p style={{ fontSize: '24px' }}>{articleData}</p>
            <p style={{ fontSize: '18px' }}>Total number of Article</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
