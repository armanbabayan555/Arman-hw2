const rewire = require("rewire");
const repository = rewire('../cities/repository');
const axios = require('axios');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

describe("Testing the 'getCityDataByZipCode(zipCode)' function.", function () {

    it("City data is correct.", function () {
        const axiosStub = sinon.stub(axios, "get")
            .withArgs("https://api.zippopotam.us/us/00210")
            .resolves(Promise.resolve({
                data:
                    '{"post code":"00210","country":"United States","country abbreviation":"US","places":[{"place name":"Portsmouth","longitude":"-71.0132","state":"New Hampshire","state abbreviation":"NH","latitude":"43.0059"}]}'
            }));

        repository.__set__("axiosGetResult", axiosStub);
         return expect(repository.getCityDataByZipCode("00210").should.eventually.be.equal('Portsmouth,NH,United States'));
    })


    it("Called only once", function () {
         return expect(sinon.assert.calledOnce(axios.get));
    })

});