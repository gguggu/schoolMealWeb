import axios from 'axios';

class MealRepository {
    async getSchoolMeal(schoolCode, schoolType, month) {
        try {
            return await axios.get(`https://schoolmenukr.ml/api/${schoolType}/${schoolCode}?month=${month}&allergy=hidden`).then(res=>{
                return res;
            })
        } catch (err) {
            return err;
        }
    }

    async getSchoolName(name) {
        try {
            return await axios.get(`https://schoolmenukr.ml/code/api?q=${name}`).then(res=>{
                return res;
            })
        } catch (err) {
            return err;
        }
    }
}

export default new MealRepository();