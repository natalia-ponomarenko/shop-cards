import './App.css';
import React from 'react';
import { Card } from './components/Card';
import firstItem from './images/1.png';
import secondItem from './images/2.png';
import thirdItem from './images/3.jpg';

function App() {
  return (
    <div className="container">
      <Card
        price="200 грн"
        image={firstItem}
        name="Шампунь"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio deleniti veniam voluptatum facilis consequuntur unde? Dolorem animi vel quia, soluta eum ipsa dolorum excepturi?"
      />
      <Card
        price="300 грн"
        image={secondItem}
        name="Шампунь"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio deleniti veniam voluptatum facilis consequuntur unde? Dolorem animi vel quia, soluta eum ipsa dolorum excepturi?"
      />
      <Card
        price="400 грн"
        image={thirdItem}
        name="Шампунь"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio deleniti veniam voluptatum facilis consequuntur unde? Dolorem animi vel quia, soluta eum ipsa dolorum excepturi?"
      />
    </div>
  );
}

export default App;
