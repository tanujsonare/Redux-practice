import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawalMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='mt-5'>
        <h3>Deposite/withdrawal Money</h3>
      {/* Without using bindActionCreators */}
      {/* <button className="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.withdrawalMoney(100))}}>-</button>
      Update balance
      <button className="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button> */}

      {/* with the use of bindActionCreators */}
      <button className="btn btn-primary mx-3" onClick={()=>{withdrawalMoney(100)}}>-</button>
      Update balance
      <button className="btn btn-primary mx-3" onClick={()=>{depositeMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
