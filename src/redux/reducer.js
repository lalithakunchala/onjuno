import {FETCH} from './actionTypes' 

const initStore = {
    
  };
  
  const reducer = (state = initStore, {type,payload}) => {
    console.log("reducer called");
    switch (type) {
      
        case FETCH:
        console.log("reducer register request called");
        return {
          ...state
          
        };

      default:
        console.log("reducer default called");
        return state;
    }
  };
 

  export default reducer;