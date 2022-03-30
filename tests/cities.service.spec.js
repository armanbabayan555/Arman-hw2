const rewire = require("rewire");
const citiesService = rewire('../cities/service');
const citiesRepository = require('../cities/repository');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;
const faker = require('faker');
const sinon = require('sinon');

describe("Test for getCityByZipCode function", function () {

    it("Normal case", function () {
        expect(citiesService.getCityByZipCode(00210)).to.eventually.be.equal('Portsmouth,NH,United States');
        const stubbeedCitiesRepository = sinon.stub(citiesRepository, "getCityDataByZipCode")
            .withArgs("00210")
            .returns('Portsmouth,NH,United States');

        citiesService.__set__("citiesRepository", stubbeedCitiesRepository);
    })
    it("Error case", function () {
        const fakeZip = faker.address.zipCode();
         expect(citiesService.getCityByZipCode(fakeZip)).to.eventually.be.rejectedWith('No cities found!');
    })

})