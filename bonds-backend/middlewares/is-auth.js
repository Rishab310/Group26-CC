const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secretKey');
        const email = decodedToken?.email;
        if (!decodedToken || !req.body.email || req.body.email !== email) {
            const error = new Error("Not Authenticated");
            throw error;
        } else {
            console.log('authenticated')
            next();
        }
        
    } catch (err) {
        err.statusCode = 401;
        throw err;
    }
}