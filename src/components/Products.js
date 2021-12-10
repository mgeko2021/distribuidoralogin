import React, { useState } from 'react';
import  '../Styles/Products.css';
import Information from './HomePage/Information';
import NavigationBar from './HomePage/NavigationBar';
import Telefares from './HomePage/Telefares';
import ProductslList from './Products/ProductslList';

function Products() {

    const[infoBanner, setInfoBanner] = useState([1,2,3,4,5,6,7,8,9,10])
    const[currentPage, setCurrentPage] = useState(1) 
    const[postsPerPage] = useState(10)

    
    const pageNumber = []

    for (let i = 1; i < infoBanner.length; i++) {
        pageNumber.push(i)  
    }  
  
    const handeclick = (event)=> {
        setCurrentPage(Number(event.target.id));
    }
  
    const renderPageNumbers = pageNumber.map(number => {
        return (
          <button key={number} id={number} 
              onClick={handeclick}
              className={currentPage == number ? "active" :null}
              >
              {number}
          </button>
        )
    })

    return (
        <div className="Products">
            <Information/>
            <NavigationBar/>
            <ProductslList infoBanner={infoBanner}/>
            {renderPageNumbers}
            <Telefares/>
        </div>
    );
}

export default Products;