import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IoMdGitCompare } from 'react-icons/io';
import '../index.css';

const Header = () => {
   return (
      <>
         {/* <header className='header-top-strip py-3'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-6'>
                     <p className='text-end text-white mb-0'>
                        Free Shipping over 500 &#8377; & Free Return
                     </p>
                  </div>
                  <div className='col-6'>
                     <p className='text-end text-white mb-0'>
                        Hotline{' '}
                        <a className='text-white' href='tel:+91'>
                           +91 7847454754
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </header> */}
         <div className='header-upper py-3'>
            <div className='container-xxl'>
               <div className='row align-items-center'>
                  <div className='col-2'>
                     <h3>
                        <Link className='text-white name' to='/'>
                           Mritunjay
                           {/* <img src={logo} alt='Logo' className='logo_img' /> */}
                        </Link>
                     </h3>
                  </div>
                  <div className='col-5'>
                     <div className='input-group'>
                        <input
                           type='text'
                           className='form-control py-2'
                           placeholder='Search for products, brands and categories'
                           aria-label='Search for products, brands and categories'
                           aria-describedby='basic-addon2'
                        />
                        <span
                           className='input-group-text cursor-pointer'
                           id='basic-addon2'
                        >
                           <FaSearch className='fs-5' />
                        </span>
                     </div>
                  </div>
                  <div className='col-5'>
                     <div className='headers-upper-links d-flex justify-content-between align-items-center'>
                        <div>
                           <Link className='d-flex align-items-center gap-10 text-white'>
                              {/* <img src='/images/compare.svg' alt='' /> */}
                              <IoMdGitCompare
                                 className='text-white fs-5'
                                 size={28}
                              />
                              <p className='mb-0'>
                                 Compare <br /> Products
                              </p>
                           </Link>
                        </div>
                        <div>
                           <Link className='d-flex align-items-center gap-10 text-white'>
                              <img
                                 src='/images/wishlist.svg'
                                 alt='wishlist-icon'
                              />

                              <p className='mb-0'>
                                 Favorite
                                 <br /> Wishlists
                              </p>
                           </Link>
                        </div>
                        <div>
                           <Link className='d-flex align-items-center gap-10 text-white'>
                              <img src='/images/user.svg' alt='user-icon' />

                              <p className='mb-0'>
                                 Log in <br /> My Account
                              </p>
                           </Link>
                        </div>
                        <div>
                           <Link className='d-flex align-items-center gap-10 text-white'>
                              <img src='/images/cart.svg' alt='cart-icon' />
                              <div className='d-flex flex-column gap-10'>
                                 <span className='badge text-dark bg-white'>
                                    0
                                 </span>
                                 <p className='mb-0'>&#8377; 500</p>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='header-bottom py-3'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='menu-bottom d-flex align-items-center gap-15'>
                        <div>
                           <div className='dropdown'>
                              <button
                                 className='btn btn-secondary bg-transparent dropdown-toggle border-0 d-flex align-items-center gap-10'
                                 type='button'
                                 id='dropdownMenuButton1'
                                 data-bs-toggle='dropdown'
                                 aria-expanded='false'
                              >
                                 <img src='images/menu.svg' alt='logo' />
                                 <span>Explore Our Store</span>
                              </button>
                              <ul
                                 className='dropdown-menu'
                                 aria-labelledby='dropdownMenuButton1'
                              >
                                 <li>
                                    <Link
                                       className='dropdown-item text-white'
                                       to='#'
                                    >
                                       Electronics
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className='dropdown-item text-white'
                                       to='#'
                                    >
                                       Fashion
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className='dropdown-item text-white'
                                       to='#'
                                    >
                                       Home & Kitchen
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className='dropdown-item text-white'
                                       to='#'
                                    >
                                       Books
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       className='dropdown-item text-white'
                                       to='#'
                                    >
                                       Sports & Fitness
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className='menu-links'>
                           <div className='d-flex align-items-center gap-15'>
                              <NavLink className='text-white' to='/'>
                                 Home
                              </NavLink>
                              <NavLink className='text-white' to='/'>
                                 Our Store
                              </NavLink>
                              <NavLink className='text-white' to='/'>
                                 Blogs
                              </NavLink>
                              <NavLink className='text-white' to='/contact'>
                                 Contact
                              </NavLink>
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

export default Header;
