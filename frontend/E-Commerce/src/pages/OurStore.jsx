import React, { useState, useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';

const OurStore = () => {
   const [grid, setGrid] = useState(4);

   return (
      <>
         <Meta title='Our Store' />
         <BreadCrumb title='Our Store' />
         <div className='store-wrapper background-color py-5'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-3'>
                     <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Shop By Categories</h3>
                        <div>
                           <ul className='ps-0'>
                              <li>Watch</li>
                              <li>Tv</li>
                              <li>Camera</li>
                              <li>Laptop</li>
                           </ul>
                        </div>
                     </div>
                     <div className='filter-card  mb-3'>
                        <h3 className='filter-title'>Filter By</h3>
                        <div>
                           <h5 className='sub-title'>Availability</h5>
                           <div className='form-check'>
                              <input
                                 type='checkbox'
                                 className='form-check-input'
                                 value='checkbox'
                                 id='checkbox'
                              />
                              <label
                                 htmlFor='checkbox'
                                 className='form-check-label'
                              >
                                 In Stock {1}
                              </label>
                           </div>
                           <div className='form-check'>
                              <input
                                 type='checkbox'
                                 className='form-check-input'
                                 value='checkbox'
                                 id='out'
                              />
                              <label htmlFor='out' className='form-check-label'>
                                 Out Of Stock {0}
                              </label>
                           </div>
                           <h5 className='sub-title'>Price</h5>
                           <div className='d-flex align-items-center gap-15'>
                              <div className='form-floating mb-3'>
                                 <input
                                    type='email'
                                    className='form-control'
                                    id='floatingInput'
                                    placeholder='From'
                                 />
                                 <label htmlFor='floatingInput'>From</label>
                              </div>
                              <div className='form-floating mb-3'>
                                 <input
                                    type='email'
                                    className='form-control'
                                    id='floatingInput1'
                                    placeholder='To'
                                 />
                                 <label htmlFor='floatingInput1'>To</label>
                              </div>
                           </div>
                           <h5 className='sub-title'>Color</h5>
                           <div>
                              <div className='d-flex flex-wrap'>
                                 <Color />
                              </div>
                           </div>
                           <h5 className='sub-title'>Size</h5>
                           <div>
                              {' '}
                              <input
                                 type='checkbox'
                                 className='form-check-input'
                                 value='checkbox'
                                 id='size'
                              />
                              <label
                                 htmlFor='size'
                                 className='form-check-label'
                              >
                                 S(2)
                              </label>
                           </div>
                           <div>
                              {' '}
                              <input
                                 type='checkbox'
                                 className='form-check-input'
                                 value='checkbox'
                                 id='size1'
                              />
                              <label
                                 htmlFor='size'
                                 className='form-check-label'
                              >
                                 M(2)
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className='filter-card mb-3'>
                        <h3 className='filter-title'> Products Tags</h3>
                        <div>
                           <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Headphones
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Laptops
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Smartphones
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Smartwatch
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Gaming Console
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Tablet
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Accessories
                              </span>
                              <span className='badge bg-secondary rounded-3 py-3 px-3 '>
                                 Speaker
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Products</h3>
                        <div>
                           <div className='random-products d-flex align-items-center'>
                              <div className='w-50'>
                                 <img
                                    src='images/watch.jpg'
                                    className='img-fluid'
                                    alt='watch'
                                 />
                              </div>
                              <div className='w-50'>
                                 <h6>Headphones</h6>
                                 <p className='m-0'>₹50000</p>
                                 <ReactStars
                                    count={5}
                                    value={5}
                                    size={24}
                                    edit={false}
                                    activeColor='#ffd700'
                                 />
                              </div>
                           </div>
                           <div className='random-products d-flex align-items-center'>
                              <div className='w-50'>
                                 <img
                                    src='images/watch.jpg'
                                    className='img-fluid'
                                    alt='watch'
                                 />
                              </div>
                              <div className='w-50'>
                                 <h6>Headphones</h6>
                                 <p className='m-0'>₹50000</p>
                                 <ReactStars
                                    count={5}
                                    value={5}
                                    size={24}
                                    edit={false}
                                    activeColor='#ffd700'
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-9'>
                     <div className='filter-sort-grid mb-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                           <div className='d-flex align-items-center gap-10'>
                              <p className='mb-0 d-block'>Sort by:</p>
                              <select
                                 name=''
                                 className='form-control form-select'
                              >
                                 <option value='manual'>Features</option>
                                 <option
                                    value='best-selling'
                                    selected='selected'
                                 >
                                    Best Selling
                                 </option>

                                 <option value='priceHighToLow'>
                                    Price: High to Low
                                 </option>
                                 <option value='priceLowToHigh'>
                                    Price: Low to High
                                 </option>
                                 <option value='alphabetAZ'>
                                    Alphabet: A-Z
                                 </option>
                                 <option value='alphabetZA'>
                                    Alphabet: Z-A
                                 </option>
                                 <option value='dateNewToOld'>
                                    Date: New to Old
                                 </option>
                                 <option value='dateOldToNew'>
                                    Date: Old to New
                                 </option>
                              </select>
                           </div>
                           <div className='d-flex align-items-center gap-10'>
                              <p className='total-products mb-0'>21 Products</p>
                              <div className='d-flex align-items-center gap-10 grid'>
                                 <img
                                    onClick={() => {
                                       setGrid(3);
                                    }}
                                    src='images/gr4.svg'
                                    className='d img-fluid'
                                    alt='grid'
                                 />
                                 <img
                                    onClick={() => {
                                       setGrid(4);
                                    }}
                                    src='images/gr3.svg'
                                    className='d-block img-fluid'
                                    alt='grid'
                                 />
                                 <img
                                    onClick={() => {
                                       setGrid(6);
                                    }}
                                    src='images/gr2.svg'
                                    className='d-block img-fluid'
                                    alt='grid'
                                 />
                                 <img
                                    onClick={() => {
                                       setGrid(12);
                                    }}
                                    src='images/gr.svg'
                                    className='d-block img-fluid'
                                    alt='grid'
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='products-list pb-5'>
                        <div className='d-flex gap-10 flex-wrap justify-content-between'>
                           <ProductCard grid={grid} />
                           <ProductCard grid={grid} />
                           <ProductCard grid={grid} />
                           <ProductCard grid={grid} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default OurStore;
