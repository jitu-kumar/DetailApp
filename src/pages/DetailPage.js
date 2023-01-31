import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import './home.css'
import { Rating } from '@mui/material';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


const DetailPage = () => {
  const [{basket}, dispatch] = useStateValue();
  const [toggle, setToggle] = useState(true);

  const likeUnlike = () => {
    setToggle(!toggle);
  };
  return (
    <div className='checkout'>
      <div className="checkout-left">
        <div className="main-detail-container">
          {basket.map((value, index)=>{
            return(
              <>
              
          <div className="card-detail-container">
            <div className="image">
              <img height="210px" width="200px" src={value.thumbnail} alt="" />
            </div>
            <div className="container">
              <div className="title">
                <span>{value.title}</span>
              </div>
              <div className="category">
                <span>{value.category}</span>
              </div>
              <div className="money">
                <span>${value.price}</span>
              </div>
              <div className="des">
                <p>{value.description.slice(0,30)}...</p>
                <div className="btn">
                  <button>Add to cart</button>
                  <span><Rating name='half-rating' defaultValue={2.5} precision={0.5} /></span>
                  {toggle === true ? (
                    <span onClick={() => likeUnlike()}>
                      <ThumbUpOffAltIcon />
                    </span>
                  ) : (
                    <span onClick={() => likeUnlike()}>
                      <ThumbUpAltIcon />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
              </>
            )
          })}
          
          <div className='checkout-detail'>

        <Subtotal />
          </div>
        </div>


      </div>
    </div>
  )
}

export default DetailPage
