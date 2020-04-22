import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout as AntdLayout } from 'antd';
import { Shipments } from './sections';
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
          <Route exact path="/">
            <Shipments />
          </Route>
        </Router>
      </Layout>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
