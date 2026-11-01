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
    
    async getCity(cityId){
        try{
            const name = await City.findOne({
                where:{
                    id:cityId
                }
            })

            console.log(name.name);
        }catch(error){
            console.log("Something went wrong")
        }
    }


    async updateCity(cityId , updateName1 , updateName2){
        await City.update({
            name : updateName1,
            country:updateName2
        },{
            where:{
                id:cityId
            }
        })
    }
}

module.exports = CityRepository;

