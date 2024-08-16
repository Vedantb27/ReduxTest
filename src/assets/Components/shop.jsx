import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { actionCreators } from '../../state';

const Shop = () => {
  const dispatch = useDispatch(); // Get dispatch function
  const actions = bindActionCreators(actionCreators, dispatch); 

  return (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex flex-col items-center gap-4">
        {/* <button
          className="bg-green-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition-transform transform hover:scale-105"
          onClick={() => dispatch(actionCreators.depositMoney(100))} // Use dispatch
        >
          Increase Balance +
        </button>
        <button
          className="bg-red-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform transform hover:scale-105"
          onClick={() => dispatch(actionCreators.withdrawMoney(100))} // Use dispatch
        >
          Decrease Balance -
        </button> */}
         <button
          className="bg-green-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition-transform transform hover:scale-105"
          onClick={() => actions.depositMoney(100)} // Use dispatch
        >
          Increase Balance +
        </button>
        <button
          className="bg-red-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform transform hover:scale-105"
          onClick={() => actions.withdrawMoney(100)}  // Use dispatch
        >
          Decrease Balance -
        </button>
      </div>
    </div>
  );
};

export default Shop;
