const { createStore } = require('redux');

const initialstate = {
    age : 25
}

reducer = ( state=initialstate,action )=>{

    const mystate = {...state};
    switch(action.type)
    {
        case 'add':
            {
                mystate.age += action.payload;
            }
    }
      return mystate;
}

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(`store.getState().age`);
})
console.log(`Initial state : ${store.getState().age}`);
store.dispatch({type:'add',payload:5});
//store.unsubscribe();

