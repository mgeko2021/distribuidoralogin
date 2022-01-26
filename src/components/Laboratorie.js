import { useSelector } from "react-redux";
import Information from "./HomePage/Information"
import NavigationBar from "./HomePage/NavigationBar";
import ProductsLab from "./Laboratorie/ProductsLab";
import "../Styles/Laboratorie.css"
import { useEffect, useState } from "react";
import Autocomplete from "./Laboratorie/AutoComplete";
// import Autocomplete from "./Laboratorie/AutoComplete";
import img from "./bg-main.jpg"
import Footer from "./Footer";

const Laboratorie = () => {
    const[currentPage, setCurrentPage] = useState(1) 
    const[postsPerPage, setPostsPerPage] = useState(12) 
  
    const[pageNumberLimit, setPageNumberLimit] = useState(9) 
    const[maxpageNumberLimit, setmaxpageNumberLimit] = useState(9) 
    const[minpageNumberLimit, setminpageNumberLimit] = useState(0)
    


    useEffect(()=> {
        if (window.screen.width  < 991) {
          setPageNumberLimit(3)
          setmaxpageNumberLimit(3)
        }
    },[])


    const laboratorie = useSelector(store=> store.dataLaboratorie.array)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = laboratorie.slice(indexOfFirstPost, indexOfLastPost)
    const listRenderLaboratorie = currentPosts.map((productsLab, index) => <ProductsLab key={index} laboratorie={productsLab}/>)


    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(laboratorie.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    const handeclick = (event)=> {
        setCurrentPage(Number(event.target.id));
      }
  
    const renderPageNumbers = pageNumbers.map(number => {
      if(number < maxpageNumberLimit+1 && number > minpageNumberLimit){
        return (
        <li key={number} id={number}
            onClick={handeclick}
            className={currentPage == number ? "active" :null}
            >
            {number}
          </li>
        )
      } 
    })
  
    const handleNextbtn  = ()=> {
      setCurrentPage(currentPage +1)
  
      if(currentPage+1> maxpageNumberLimit){
        setmaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit)
        setminpageNumberLimit(minpageNumberLimit + pageNumberLimit)
      }
    }
  
    const handlePrevbtn  = ()=> {
      setCurrentPage(currentPage -1)
  
      if((currentPage-1)% pageNumberLimit==0){
        setmaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit)
        setminpageNumberLimit(minpageNumberLimit - pageNumberLimit)
      }
    }
  
    let pageIncrementBtn = null;
    if(pageNumbers.length > maxpageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip;</li>
    }
  
    let pageDrecrementBtn = null;
    if(minpageNumberLimit>=1) {
      pageDrecrementBtn = <li onClick={handlePrevbtn}> &hellip;</li>
    }

    return (
        <div className="Laboratorie  ">
          <div className="BannerImg  pb-4" style={{backgroundImage:`url(${img})`}}>
            <Information/>
            <NavigationBar/>
          </div>  
          <div className="DisLaboratorie row col-11  col-xl-8 mx-auto p-0 mt-4">
            <Autocomplete laboratorie={laboratorie}/>
            <div className="RenderList col-11 col-sm-9  col-lg-9 col-xl-10">
              <div className="ListLaboratorie">
                {listRenderLaboratorie}
              </div>
              <div className="RenderPageNumbers">
                <ul className="pageNumbers" style={{color:"black"}}>
                  <li>
                    <button onClick={handlePrevbtn} disabled={currentPage == pageNumbers[0]? true:false}>Prev</button>
                  </li>
                    {pageDrecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                  <li>
                    <button onClick={handleNextbtn} disabled={currentPage == pageNumbers[pageNumbers.length - 1]? true:false}>Next</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    );
}
 


export default Laboratorie;