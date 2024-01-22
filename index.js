const express = require('express');
const dbConnect = require('./config/dbConnect');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');
const { notfound, errorHandlingApi } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRouter');
const ProductCategoryRouter = require('./routes/ProductCategoryRouter');
const blogCategoryRouter = require('./routes/blogCategoryRouter');
const brandRouter = require('./routes/brandRouter');
const couponRouter = require('./routes/couponRouter');
const colorRoute = require('./routes/colorRoute');
const enquiryRoute = require('./routes/enqRouter');
const morgan = require('morgan');
const app = express();

dbConnect(); // Connect to the database
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', ProductCategoryRouter);
app.use('/api/blogcategory', blogCategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRoute);
app.use('/api/enquiry', enquiryRoute);

app.use(notfound);
app.use(errorHandlingApi);

app.listen(PORT, () => {
   console.log(`Server is Running at Port ${PORT}`);
});
