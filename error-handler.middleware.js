const NotFoundError = require('./errors/not-found.error');
const UnauthorizedError = require('./errors/unauthorized.error');

module.exports = (err, req, res, next) => {

    if (err instanceof NotFoundError) {
        return res.status(404).send(err.message);
    }

    if (err instanceof UnauthorizedError) {
        return res.status(401).send(err.message);
    }

    res.status(500).send('Some momkeys are deployed to look at your problem.');
    next(err);
}