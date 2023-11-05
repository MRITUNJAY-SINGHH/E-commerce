import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
const ProductCard = () => {
   return (
      <div className='col-3'>
         <div className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
               <Link>
                  <img src='images/wish.svg' alt='wishlist' />
               </Link>
            </div>
            <div className='product-img'>
               <img src='images/watch.jpg' alt='product-img' />
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
   );
};

export default ProductCard;
