import Color from '../components/Color';
import Meta from '../components/Meta';

const CompareProduct = () => {
   return (
      <>
         <Meta title={'Compare'} />
         <div className='compare-product-wrapper background-color py-5'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-3'>
                     <div className='compare-product-card position-relative'>
                        <img
                           src='images/cross.svg'
                           alt='cross'
                           className='position-absolute cross img-fluid'
                        />
                        <div className='product-card-images'>
                           <img src='images/watch.jpg' alt='watch' />
                        </div>
                        <div className='compare-product-details'>
                           <h5 className='title'>Havells Electric Iron</h5>
                           <h6 className='price mb-3 mt-3'>₹ 1,999.00</h6>
                           <div>
                              <div className='product-details'>
                                 <h6>Brand:</h6>
                                 <p className='mb-0'>Havells</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Type:</h6>
                                 <p className='mb-0'>Electric Iron</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Model:</h6>
                                 <p className='mb-0'>X1234</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Availability:</h6>
                                 <p className='mb-0'>In Stock</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Color:</h6>
                                 <Color />
                              </div>
                              <div className='product-details'>
                                 <h6>Size:</h6>
                                 <div className='d-flex gap-15'>
                                    <p className='mb-0'>S</p>
                                    <p className='mb-0'>M</p>
                                    <p className='mb-0'>L</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-3'>
                     <div className='compare-product-card position-relative'>
                        <img
                           src='images/cross.svg'
                           alt='cross'
                           className='position-absolute cross img-fluid'
                        />
                        <div className='product-card-images'>
                           <img src='images/watch.jpg' alt='watch' />
                        </div>
                        <div className='compare-product-details'>
                           <h5 className='title'>Havells Electric Iron</h5>
                           <h6 className='price mb-3 mt-3'>₹ 1,999.00</h6>
                           <div>
                              <div className='product-details'>
                                 <h6>Brand:</h6>
                                 <p className='mb-0'>Havells</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Type:</h6>
                                 <p className='mb-0'>Electric Iron</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Model:</h6>
                                 <p className='mb-0'>X1234</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Availability:</h6>
                                 <p className='mb-0'>In Stock</p>
                              </div>
                              <div className='product-details'>
                                 <h6>Color:</h6>
                                 <Color />
                              </div>
                              <div className='product-details'>
                                 <h6>Size:</h6>
                                 <div className='d-flex gap-15'>
                                    <p className='mb-0'>S</p>
                                    <p className='mb-0'>M</p>
                                    <p className='mb-0'>L</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CompareProduct;
