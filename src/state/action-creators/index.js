export const depositeMoney = (amount)=> {
    return (dispatch) =>{
        dispatch({
            type: 'deposit',
            payload: amount 
        })
    }
}

export const withdrawalMoney = (amount)=> {
    return (dispatch) =>{
        dispatch({
            type: 'withdrawal',
            payload: amount 
        })
    }
}