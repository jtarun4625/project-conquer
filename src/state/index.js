import { createGlobalState } from 'react-hooks-global-state';

const initialState = { uid: "" };
const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export {setGlobalState,useGlobalState}