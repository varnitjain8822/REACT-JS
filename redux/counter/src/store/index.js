import {createStore} from 'redux';

const initialval = {
  count: 0
}

const counterreducer = (store = initialval, action) => {
  switch(action.type){
    case 'INCREMENT':   
      return {count: store.count + 1};  
    case 'DECREMENT':           
      return {count: store.count - 1};  
    default: 
      return store;  
  }
};

const counterstore = createStore(counterreducer); 

export default counterstore;