import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import { BsArrowLeft } from 'react-icons/bs';

const SingleBlogs = () => {
   return (
      <>
         <Meta title={'Single-Blogs'} />
         <div className='blog-wrapper white-shadow  py-5'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='single-blog-card'>
                        <h4 className='title py-2'>
                           A Beautiful Sunday Morning Renaissance
                        </h4>
                        <img
                           src='images/blog-3.webp'
                           alt='blog'
                           className='img-fluid my-4 w-100'
                        />

                        <p className='mb-0 py-1'>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quo iste consequuntur earum totam doloremque
                           cumque?
                        </p>
                        <Link
                           to='/blogs'
                           className='d-inline-flex align-items-center gap-10 py-2'
                        >
                           <BsArrowLeft className='fs-5' /> Go Back to Blogs
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleBlogs;
