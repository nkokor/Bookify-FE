import "../../css/Products.css"; 

function ProductCard({product}) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.coverImage}></img>
      <div className='details-div'>
        <div className="details-button">
          <p>VIEW DETAILS</p>
        </div>
      </div>
      <div className="product-info">
      </div>
    </div>
  )
}

export default ProductCard