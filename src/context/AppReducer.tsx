import { StateAction } from  './../API/FetchAPI';


export default (state: any, action: StateAction): any => {
    switch (action.type){
        
       case 'level':
           
           return{
               ...state,
               levelQuiz: action.payload
                
           }
       case 'category':
           
            return{
               ...state,                   
               categoryQuiz: action.payload
           } 
        default:
            return state;
    }
}