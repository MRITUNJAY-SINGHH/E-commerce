import { Link } from 'react-router-dom';

const BlogCard = () => {
   return (
      <div className='col-3'>
         <div className='blog-card'>
            <div className='card-img'>
               <img src='images/blog-1.jpg' alt='blog' className='img-fluid' />
            </div>
            <div className='blog-content'>
               <p className='date'>September 30, 2022</p>
               <h5 className='title'>Introducing Our New Fall Collection</h5>
               <p className='description'>
                  Check out our latest fall collection! With a variety of new
                  styles and colors, there's something for everyone.
               </p>
               <Link className='button' to='#'>
                  Read More
               </Link>
            </div>
         </div>
      </div>
   );
};

export default BlogCard;
