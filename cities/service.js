const NotFoundError = require('../errors/not-found.error');
const repository = require('./repository');

module.exports = {

    async getCityByZipCode(zipCode) {
        try {
            const cityData = await repository.getCityDataByZipCode(zipCode);
            return cityData;
        }
        catch { throw new NotFoundError('No cities found!'); }

    }
}