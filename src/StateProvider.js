//Setup Data Layer
// We need this to track the basket
import React, { createContext, useContext, useReducer } from "react";

// The creation of data layer
export const StateContext = createContext();

//Build a provider(we give the access to the data layer we created)
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}> 
        {children}
    </StateContext.Provider>
);

// this is how we use it inside the component
export const useStateValue = () => useContext(StateContext);