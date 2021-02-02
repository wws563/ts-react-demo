import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from './views/App';
import "./assets/css/game.css";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
