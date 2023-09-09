const { city } = require("../models/index");
// this will be responsible for any data source

class CityRepository {
    async createCity({name}){
      try{
        const City = await city.createCity({
          name:name 
          // you can use single name also
        });
        return City;
      }catch(error){
        console.log("there is something is wrong in repository");
        throw{error};

      }
    };
    async deleteCity(cityId){
      try{
        await city.destroy({
          where:{
            id:cityId
          }
        })
      }catch(error){
        console.log("there is something problem in the repository");
        throw{error};
      }
    };
    async updateCity(cityId , data){
      try {
        const City = await city.update(data ,{
          where:{
                id: cityId
          }
        })
        return City;
      } catch (error) {
        console.log("there is something issue in the repository");
        throw{error};
      }
    };
    async getCity(cityId){
      try {
        const City = await city.findByPk(cityId);
        return City;
      } catch (error) {
        console.log("there is somethig issue in the repository");
        throw{error};
      }
      
    }
}
module.exports = CityRepository;
