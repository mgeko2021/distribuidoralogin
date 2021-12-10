/* eslint-disable */
import "../../Styles/HomePageStyle/Banner.css"
import React, { useEffect, useState } from 'react';
import BannerInfo from "./BannerInfo";
import data from "../../data/items.json"
import {useDispatch, useSelector} from 'react-redux'
import {getProductsAction} from '../../redux/negociemosDucks'


const Banner = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        const dataNoObs = data.filter(data=> {return data.PRECIO_MIN_1 != 1 && data.PRECIO_MIN_1 != null && !isNaN(data.PRECIO_MIN_1)})
        dispatch(getProductsAction(dataNoObs)) 
    },[])

    const infoBanner = useSelector(store=> store.dataProducts.array)

    console.log(infoBanner.length,"info")
    // console.log(dataNoObs.length,"data")

    const[currentPage] = useState(Math.floor(Math.random()*(infoBanner.length? infoBanner.length-5 :infoBanner.length))) 
    let[indexOfFirstPost,setIndexOfFirstPost] = useState(currentPage)
    let[indexOfLastPost,setIndexOfLastPost] = useState(currentPage+1)


    const pageNumber = []

    const currentPosts = infoBanner.slice(indexOfFirstPost, indexOfLastPost)
    const listBannerSlice = currentPosts.map(item => <BannerInfo key={item.ID_ITEM} item={item}/>)


    for (let i = currentPage; i < currentPage+5; i++) {
        pageNumber.push(i)  
    }
    
    const handeclick = (event)=> {
        setIndexOfFirstPost(Number(event.target.id));
        setIndexOfLastPost(Number(event.target.id)+1);
    }

    const renderPageNumbers = pageNumber.map(number => {
        return (
            <button key={number} id={number} 
                onClick={handeclick}
                className={indexOfFirstPost == number ? "active" :null}
                >
            </button>
        )
    })

    return (
        <div className="Banner row col-sm-12 col-md-10  col-xl-6 mx-auto p-0">
            {listBannerSlice}
            <ul className="pageNumbersBanner">
                {renderPageNumbers}
            </ul>
        </div>
    );
    };

export default Banner;