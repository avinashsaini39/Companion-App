// import React from 'react';

// const DashboardAdmin = () => (
//   <div>
//     <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//     <p>Welcome to the admin dashboard. Here is your content.</p>
//   </div>
// );

// export default DashboardAdmin;




import React from 'react';
import { Card, Tabs, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
// import ManagerDashboard from './ManagerTab';
import UserDashboard from './UserTab';

const { TabPane } = Tabs;

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage
    window.location.reload(); // Optionally redirect to the login page
  };

  return (
    <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
      <Card
        style={{
          width: '100%',
          maxWidth: '1200px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
        bodyStyle={{ padding: '24px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0 }}>Dashboard</h2>
          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Manage Managers" key="1">
            {/* <ManagerDashboard /> */}
          </TabPane>
          <TabPane tab="Manage Users" key="2">
            <UserDashboard />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Dashboard;

