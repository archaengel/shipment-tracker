import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Affix, Layout as AntdLayout } from 'antd';
import { Shipments, Shipment, AppHeader } from './sections';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const Layout = styled(AntdLayout)`
  min-height: 100vh;
`;

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Affix offsetTop={0}>
            <AppHeader />
          </Affix>
          <Route exact path="/">
            <Redirect to="/shipments" />
          </Route>
          <Route exact path="/shipments/:id?">
            <Shipments />
          </Route>
          <Route exact path="/shipment/:id">
            <Shipment />
          </Route>
        </Router>
      </Layout>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
