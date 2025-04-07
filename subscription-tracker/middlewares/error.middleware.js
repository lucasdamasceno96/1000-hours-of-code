const errorMiddleware = (err, req, res, next) => {
    try {
        let errorResponse = { ...err, message: err.message };

        if (err.name === 'ValidationError') {
            errorResponse.statusCode = 400;
            errorResponse.message = Object.values(err.errors).map((value) => value.message).join(', ');
        }
        if (err.name === 'CastError') {
            errorResponse.statusCode = 400;
            errorResponse.message = `Invalid ${err.path}: ${err.value}`;
        }
        if (err.code === 11000) {
            errorResponse.statusCode = 400;
            errorResponse.message = `Duplicate field value entered`;
        }
        if (err.name === 'JsonWebTokenError') {
            errorResponse.statusCode = 401;
            errorResponse.message = 'Invalid token. Please log in again';
        }
        if (err.name === 'TokenExpiredError') {
            errorResponse.statusCode = 401;
            errorResponse.message = 'Your token has expired. Please log in again';
        }

        res.status(errorResponse.statusCode || 500).json({
            status: 'error',
            message: errorResponse.message || 'Internal Server Error',
        });
    } catch (catchError) {
        console.error('Erro no middleware de erro:', catchError);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

export default errorMiddleware;
