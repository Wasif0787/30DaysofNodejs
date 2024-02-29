function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(err.statusCode).json({
        error: {
            message: err.message
        }
    })
}

module.exports = errorHandler