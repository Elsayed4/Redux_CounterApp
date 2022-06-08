import {INCREMENT,DECREMENT,INCBYVAL} from './types';

export const actionIcrement = () =>{
    return{
        type:INCREMENT
    }
}

export const actionDecrement = () =>{
    return{
        type:DECREMENT
    }
}

export const incrementByValue = (vl) =>{
    return{
        type:INCBYVAL,
        value:vl
    }
}
