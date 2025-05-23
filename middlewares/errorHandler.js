const notfound = (req, res, next) => {
   const error = new Error(`Not found: ${req.originalUrl}`);
   res.status(404);
   next(error);
};

const errorHandlingApi = (error, req, res, next) => {
   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
   res.status(statusCode);
   res.json({
      message: error?.message,
      stack: error?.stack,
   });
};

module.exports = { errorHandlingApi, notfound };
