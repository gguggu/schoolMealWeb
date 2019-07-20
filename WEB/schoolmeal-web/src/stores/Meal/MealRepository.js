import axios from 'axios';

class MealRepository {
    async getSchoolMeal(){
        try {
            return await axios.get(`https://schoolmenukr.ml/api/high/D100000282`).then(res=>{
                console.log(res);
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export default new MealRepository();