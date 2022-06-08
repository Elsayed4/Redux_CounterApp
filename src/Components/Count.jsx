import React, { useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {actionIcrement,actionDecrement,incrementByValue} from './../Redux/Actions/counterAction';
function Count() {
  const [count,setCount] = useState(0);
  
  const dispatch = useDispatch();

  const countState = useSelector(state => state.count);
  console.log(countState);

  const handleIncrement = () =>{
    // setCount(count + 1);
    dispatch(actionIcrement())
  }

  const handleDecrement = () =>{
    // setCount(count - 1);
    dispatch(actionDecrement())
  }
  
  const handleIncrementByValue = (vl) => {
    dispatch(incrementByValue(vl))
  }
  return (
    <div className="Count">
        <p>{countState}</p>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={()=> handleIncrementByValue(3)}>IncrementByValue</button>
    </div>
  );
}

export default Count;
