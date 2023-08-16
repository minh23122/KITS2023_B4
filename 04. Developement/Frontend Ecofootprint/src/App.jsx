import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/App'
import Food from './Food/App'
import House from './House/House'
import DistanceTravelled from './Car/DistanceTravelled'
import Fuel from './Car/Fuel'
import Trash from './Trash/Trash';
import Test1 from './Test1/App';
import Test2 from './Test2/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/house" element={<House />} />
        <Route path="/travelled" element={<DistanceTravelled />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </Router>
  );
}

export default App;