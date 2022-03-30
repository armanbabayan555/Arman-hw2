const NotFoundError = require('../errors/not-found.error');
const repository = require('./repository');

let cityData;

module.exports = {

    async getCityByZipCode(zipCode) {
        try {
            cityData = await repository.getCityDataByZipCode(zipCode);
            return cityData;
        }
        catch { throw new NotFoundError('No cities found!'); }

    }
}