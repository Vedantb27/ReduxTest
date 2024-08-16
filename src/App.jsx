import './App.css';
import Navbar from './assets/Components/Navbar'; // Default import
import Shop from './assets/Components/shop';
import { useSelector } from 'react-redux';

function App() {
  const amount = useSelector(state => state.amount)
  return (
    <>
      <Navbar />
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Your Balance: {amount}</h2>
      <Shop />
     
    </>
  );
}

export default App;
