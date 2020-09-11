import React, { createContext, useReducer } from 'react'
import APPReducer from './AppReducer';
import { ApplicationState } from './../API/FetchAPI';
import {DifficultyLevel, Category} from './../API/FetchAPI';

const initialState = {
categoryQuiz : Category.GK,
levelQuiz: DifficultyLevel.EASY,
updateCategory: (val: any) => {},
updateLevel: (val: any) => {}
};

// create the Global Context
export const GlobalContext = createContext(initialState);

interface StateProviderProps {
    children: any;
}

//create a provider for global context    

//export const GlobalProvider = ({ children }) => {
export const GlobalProvider = (props: StateProviderProps) => {
    const [state, dispatch] = useReducer(APPReducer, initialState)

        //action
        

        function updateLevel(val: any){
            console.log("val =", val)
            dispatch({
                type: 'level', 
                payload: val
            })
        }

        function updateCategory(val: any){
            dispatch({
                type: 'category', 
                payload: val
            })
        }
    return (
        <GlobalContext.Provider value={          
                { 
                    categoryQuiz: state.categoryQuiz, 
                    levelQuiz: state.levelQuiz,
                    updateCategory, 
                    updateLevel,
                }            
        }>
            {props.children}
            </GlobalContext.Provider>
    )
}







