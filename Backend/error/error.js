
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message); // Inherit the message from the parent Error class
        this.statusCode = statusCode; // Set the statusCode for the error
    }
}

// Error handling middleware
export const errorMiddleware = (err, req, res, next) => {
    // Ensure err.message and err.statusCode are set correctly
    err.message = err.message || "Internal Server Error!";
    err.statusCode = err.statusCode || 500;  // Use lowercase "statusCode"
    
    // Send the error response with a valid status code
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
