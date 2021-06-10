import './App.css';
import { Card } from './components/Card/Card';
import firstItem from './images/1.png';
import secondItem from './images/2.png';
import thirdItem from './images/3.jpg';

function App() {
  return (
    <div className="container">
      <Card price="200 грн" image={firstItem}/>
      <Card price="300 грн" image={secondItem}/>
      <Card price="400 грн" image={thirdItem}/>
    </div>
  );
}

export default App;
