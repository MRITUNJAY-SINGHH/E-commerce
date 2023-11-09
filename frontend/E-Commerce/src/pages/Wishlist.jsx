import Meta from '../components/Meta';

const Wishlist = () => {
   return (
      <>
         <Meta title={'Wishlist'} />
         <div className='wishlist-wrapper background-color py-5'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-3'>
                     <div className='wishlist-card position-relative'>
                        <img
                           src='images/cross.svg'
                           alt='cross'
                           className='cross img-fluid position-absolute'
                        />
                        <div className='wishlist-img-card'>
                           <img
                              src='images/watch.jpg'
                              alt='watch'
                              className='img-fluid w-100'
                           />
                        </div>
                        <div className='px-3 py-3'>
                           <h5 className='title'>Smartwatch</h5>
                           <h6 className='price'>₹5000</h6>
                        </div>
                     </div>
                  </div>
                  <div className='col-3'>
                     <div className='wishlist-card position-relative'>
                        <img
                           src='images/cross.svg'
                           alt='cross'
                           className='cross img-fluid position-absolute'
                        />
                        <div className='wishlist-img-card'>
                           <img
                              src='images/watch.jpg'
                              alt='watch'
                              className='img-fluid w-100'
                           />
                        </div>
                        <div className='px-3 py-3'>
                           <h5 className='title'>Smartwatch</h5>
                           <h6 className='price'>₹5000</h6>
                        </div>
                     </div>
                  </div>
                  <div className='col-3'>
                     <div className='wishlist-card position-relative'>
                        <img
                           src='images/cross.svg'
                           alt='cross'
                           className='cross img-fluid position-absolute'
                        />
                        <div className='wishlist-img-card'>
                           <img
                              src='images/watch.jpg'
                              alt='watch'
                              className='img-fluid w-100'
                           />
                        </div>
                        <div className='px-3 py-3'>
                           <h5 className='title'>Smartwatch</h5>
                           <h6 className='price'>₹5000</h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Wishlist;
