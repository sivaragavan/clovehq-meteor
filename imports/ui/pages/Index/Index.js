import React from 'react';
import { Button } from 'react-bootstrap';

import './Index.scss';

const Index = () => (
  <div className="Index">
    <img
      src="/180.png"
      alt="Clove"
    />
    <h1>Clove</h1>
    <p>Audio Stack for Apps</p>
    <div>
      <Button href="http://console.clovehq.com/start">Get Started</Button>
      <Button href="http://clovehq.com/docs">Read the Docs</Button>
    </div>
    <footer>
      <p>Need help? <a href="mailto:contact@clovehq.com">drop us a note</a>.</p>
    </footer>
  </div>
);

export default Index;
