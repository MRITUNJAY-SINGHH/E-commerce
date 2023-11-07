import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
   let location = useLocation();
   const { grid } = props;
   return (
      <>
         <div
            className={`${
               location.pathname === '/store' ? `gr-${grid}` : 'col-3'
            }`}
         >
            <div className='product-card position-relative'>
               <div className='wishlist-icon position-absolute'>
                  <Link>
                     <img src='images/wish.svg' alt='wishlist' />
                  </Link>
               </div>
               <div className='product-img'>
                  <img
                     src='https://lojaqueroquero.vtexassets.com/arquivos/ids/3351057/ns_193401_1.jpg?v=1781716126'
                     alt='product-img'
                  />
               </div>
               <div className='product-details'>
                  <h6 className='brand'>Havels</h6>
                  <h5>Multi-Colored Headphones - Pack of 10 for Students</h5>
                  <ReactStars
                     count={5}
                     value={5}
                     size={24}
                     edit={false}
                     activeColor='#ffd700'
                  />
                  <p
                     className={`description ${
                        grid == 12 ? 'd-block' : 'd-none'
                     }`}
                  >
                     Motorola smartphones are known for their durability and
                     long battery life. They offer a pure Android experience
                     with minimal bloatware. The build quality is excellent, and
                     they come in a variety of models to suit different user
                     needs and budgets.
                  </p>
                  <p className='price'>&#8377;10000</p>
               </div>
               <div className='action-bar position-absolute'>
                  <div className='d-flex flex-column gap-15'>
                     <Link>
                        <img src='images/prodcompare.svg' alt='compare' />
                     </Link>
                     <Link>
                        <img src='images/view.svg' alt='view' />
                     </Link>
                     <Link>
                        <img src='images/add-cart.svg' alt='add-cart' />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductCard;
