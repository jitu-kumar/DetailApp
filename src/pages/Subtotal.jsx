import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
console.log(getBasketTotal)
const Subtotal = () => {
  const [{basket}, dispatch] = useStateValue();
  console.log("basket",basket)

  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value)=>(
        <>
        <p>
            Subtotal ({basket.length} items):<strong>{value}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox" /> This order containes a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}/>
      <div className='checkout-btn'>

      <button >Proceed to cart</button>
      </div>
    </div>
  )
}

export default Subtotal
