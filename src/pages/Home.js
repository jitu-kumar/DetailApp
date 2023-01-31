import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import './home.css'
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
const Home = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState([])
    const[singleData, setSingledata] = useState([])
    console.log(data?.products?.id)
    console.log(data)

    const [state, dispatch] = useStateValue();

    const likeUnlike = () => {
        setToggle(true);
    };
    const addToBasket = (id) => {
        console.log("products",data.products[id])
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:data.products[id]

        })
        // dispatch(data.products[id])
        // setSingledata(data.products[id])


    }
    useEffect(() => {
        async function getAllData() {
            try {
                const datas = await axios.get("https://dummyjson.com/products")
                // console.log(students.data);
                setData(datas.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getAllData();
    }, [])
    return (
        <>
            <div className="main-container">
                    {data?.products?.map((data, index) => {
                        return (
                            <>
                            <div className="card-container">

                                <div className="image">
                                    <img height="210px" width="200px" src={data.thumbnail} alt="" />
                                </div>
                                <div className="container">
                                    <Link to='/detail' style={{ 'textDecorationLine': 'none', 'textTransform': 'none' }}>
                                        <div className="title">
                                            <span>{data.title}</span>
                                        </div>
                                    </Link>
                                    <div className="category">
                                        <span>{data.category}</span>
                                    </div>
                                    <div className="money">
                                        <span>${data.price}</span>
                                    </div>
                                    <div className="des">
                                        <p>{data.description.slice(0,30)}....</p>
                                        <div className="btn">

                                            <button onClick={()=>addToBasket(index)}>Add to cart</button>
                                            <span><Rating name='half-rating' defaultValue={data.rating} precision={0.5} /></span>
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
          
                 </div>
        </>
    )
}

export default Home
