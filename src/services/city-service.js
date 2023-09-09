const {CityRepository} = require('../repository/index')
class cityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }
    async createCity(data){
        try {
            const City = await this.CityRepository.createCity(data)
                 return City;
            
        } catch (error) {
            console.log("there is error in the service layer")
            throw{error}
        }
    };
    async deleteCity(){
        try {
            const response = await this.CityRepository.responseCity(data)
            return response;

            
        } catch (error) {
            console.log("there is error in the service layer")
            throw{error}
        }
    };
    async updateCity(){
        try {
            const City = await this.CityRepository.updateCity(cityId , data)
            return City
        } catch (error) {
            console.log("there is error in the service layer")
            throw{error}
        }
    };
    async getCity(){
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("there is error in the service layer")
            throw{error}
        }
    };
}
module.exports = cityService
