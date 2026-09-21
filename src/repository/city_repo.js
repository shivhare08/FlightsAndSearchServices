//Here we do make changes in the table or model

const { City } = require('../models/index')


class CityRepository{
    async createCity({name , country}){
        try{
            const city = await City.create({
                name : name,
                country : country
            })
            return city;
        }catch(error){
            //console.log(error);
            throw {error}
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
        } catch (error) {
            throw {error}
        }
    }
}

module.exports = CityRepository;

