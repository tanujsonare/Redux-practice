export const addMoney = (amount)=> {
    return (dispatch) =>{
        dispatch({
            type: 'deposit',
            payload: amount 
        })
    }
}

export const deductMoney = (amount)=> {
    return (dispatch) =>{
        dispatch({
            type: 'withdraw',
            payload: amount 
        })
    }
}