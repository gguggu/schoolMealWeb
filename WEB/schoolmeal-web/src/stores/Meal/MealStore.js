import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import MealRepository from './MealRepository';

@autobind
class MealStore {
    @observable meals=[];

    @action async getSchoolMeal(){
        try {
            const data = await MealRepository.getSchoolMeal();
            console.log(data);
            this.meals = data;
            console.log(this.meals);
        } catch (err) {
            console.log(err);
        }
    }
}

export default MealStore;