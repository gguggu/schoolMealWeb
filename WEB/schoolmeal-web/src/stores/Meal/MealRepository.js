import axios from 'axios';

class MealRepository {
    async getSchoolMeal(){
        try {
            axios.get(`https://schoolmenukr.ml/api`)
        } catch (err) {
            console.log(err);
        }
    }
}

export default new MealRepository();