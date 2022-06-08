import {INCREMENT,DECREMENT,INCBYVAL} from './../Actions/types';

const CounterReducer = (state = {count:0}, action={
    type:INCBYVAL,
    value:3
}) =>{
    switch(action.type){
        case INCREMENT:return {...state,count:state.count + 1};
        case DECREMENT:return  {...state,count:state.count - 1}
        case INCBYVAL:return  {...state,count:state.count + 3}

         default:
             return state;       
    
    }

  
}

export default CounterReducer;