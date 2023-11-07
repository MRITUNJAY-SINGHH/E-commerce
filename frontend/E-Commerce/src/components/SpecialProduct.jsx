import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
   return (
      <>
         <div className='col-5 mt-4'>
            <div className='special-product-card'>
               <div className='d-flex  justify-content-between'>
                  <div>
                     <img src='images/watch.jpg' alt='watch' />
                  </div>
                  <div className='special-product-content'>
                     <h5 className='brand'>Havels</h5>
                     <h6 className='title'>
                        Samsung Galaxy Note10 Mobile Phone: Slim....
                     </h6>
                     <ReactStars
                        count={5}
                        value={5}
                        size={24}
                        edit={false}
                        activeColor='#ffd700'
                     />
                     <p className='price'>
                        <span className='p-red'>&#8377;59000.00</span>&nbsp;
                        <strike>&nbsp;18000.00</strike>
                     </p>
                     <div className='discount-till'>
                        <p>
                           <b>5Days</b>
                        </p>
                        <div className='d-flex gap-10 '>
                           <span className='badge rounded-xxl p-3'>1</span>
                           <span className='badge rounded-xxl p-3'>1</span>
                           <span className='badge rounded-xxl p-3 '>1</span>
                        </div>
                        <div className='prod-count my-3'>
                           <p>Products 5</p>
                           <div className='progress'>
                              <div
                                 className='progress-bar'
                                 role='progressbar'
                                 style={{ width: '25%' }}
                                 aria-valuenow='25'
                                 aria-valuemin='0'
                                 aria-valuemax='100'
                              ></div>
                           </div>
                        </div>
                        <Link className='button'>Add to Cart</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SpecialProduct;
