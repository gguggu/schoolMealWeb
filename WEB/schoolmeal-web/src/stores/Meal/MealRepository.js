import axios from 'axios';

class MealRepository {
    async getSchoolMeal(schoolCode, schoolType, month) {
        try {
            return await axios.get(`https://schoolmenukr.ml/api/${schoolType}/${schoolCode}?month=${month}&hideAllergy=true`).then(res=>{
                return res;
            })
        } catch (err) {
            return err;
        }
    }

    async getSchoolName(name) {
        try {
            return await axios.get(`https://code.schoolmenukr.ml/api?q=${name}`).then(res=>{
                console.log(res);
                return res;
            })
        } catch (err) {
            return err;
        }
    }
}

export default new MealRepository();