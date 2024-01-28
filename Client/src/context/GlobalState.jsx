import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
const initialState={
    transactions: [],
    error:null,
    loading:true
}
    export const GlobalContext = createContext(initialState);
    export const GlobalProvider=({children})=>{
        const[state,dispatch]=useReducer(AppReducer,initialState);

        async function getTransactions(){
            try{
                const res= await axios.get('/api/v1/transactions');

                dispatch({
                    type:'GET_TRANSACTIONS',
                    payload:res.data.data
                })
            }
            catch(err){
                dispatch({
                    type:'TRANSACTION_ERROR',
                    payload:err.response.data.error
                })
            }
        }
        function deleteTransaction(id){
            dispatch({
                type:'DELETE_TRANSACTION',
                payload:id
            });
        }
        function addTransaction(id){
            dispatch({
                type:'ADD_TRANSACTION',
                payload:id
            });
        }
        return(<GlobalContext.Provider value={{
            transactions : state.transactions,
            error:state.error,
            loading:state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>);
    }
