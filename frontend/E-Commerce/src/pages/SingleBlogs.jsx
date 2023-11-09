import React from 'react';
import Meta from '../components/Meta';

const SingleBlogs = () => {
   return (
      <>
         <Meta title={'Single-Blogs'} />
         <div className='blog-wrapper white-shadow  py-5'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='single-blog-card'>
                        <div className='card-img'>
                           <h4 className='title'>
                              A Beautiful Sunday Morning Renaissance
                           </h4>
                           <img
                              src='images/blog-1.jpg'
                              alt='blog'
                              className='img-fluid my-4 w-100'
                           />

                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quo iste consequuntur earum totam doloremque
                              cumque?
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleBlogs;
