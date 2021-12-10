import { useState } from "react"
import "../../Styles/Products/ProductsList.css"

function ProductslList({infoBanner}) {
    const[currentPage, setCurrentPage] = useState(1) 
    const[postsPerPage] = useState(10)


    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = infoBanner.slice(indexOfFirstPost, indexOfLastPost)
    const listProductsSlice = currentPosts.map(BannerIn => <div className="NameProduct" key={BannerIn} Bannerid={BannerIn}></div>)

    return (
        <div className="ProductsList">
            {listProductsSlice}
        </div>
    );
}

export default ProductslList;