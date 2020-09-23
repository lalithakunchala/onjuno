import {FETCH} from './actionTypes';

const fetch = (res)=>{
    return{
        type: FETCH,
        payload:res
    }
    
}