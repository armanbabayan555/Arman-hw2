const axios = require('axios');

let axiosGetResult;

module.exports = {

    async getCityDataByZipCode(zipCode) {
        axiosGetResult = await axios.get("https://api.zippopotam.us/us/" + zipCode);
        const axiosGetResultData = axiosGetResult.data;

        const country = axiosGetResultData['country'];
        const placeName = axiosGetResultData['places'][0]['place name'];
        const stateAbbreviation = axiosGetResultData['places'][0]['state abbreviation'];

        const finalResult = placeName + "," + stateAbbreviation + "," + country;

        return finalResult;
    }
}
