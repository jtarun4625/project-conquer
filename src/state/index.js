import { createGlobalState } from 'react-hooks-global-state';

const initialState = { uid: "",idToken:"", emailId:"" };
const { setGlobalState, useGlobalState } = createGlobalState(initialState);

function setState(data,val){
    setGlobalState(data,val);
}

export {setState,useGlobalState}