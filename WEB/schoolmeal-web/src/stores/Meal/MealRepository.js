import axios from 'axios';

class MealRepository {
    async getSchoolMeal(schoolCode) {
        try {
            return await axios.get(`https://schoolmenukr.ml/api/high/${schoolCode}`).then(res=>{
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