import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import MealRepository from './MealRepository';

@autobind
class MealStore {
    @observable meals=[];
    @observable schoolData=[];

    @action async getSchoolMeal(code) {
        try {
            const data = await MealRepository.getSchoolMeal(code);
            this.meals = data.data.menu;
        } catch (err) {
            console.log(err);
        }
    }

    @action async getSchoolName(name) {
        try {
            const data = await MealRepository.getSchoolName(name);
            this.schoolData = data.data.school_infos;
            console.log(data);
            console.log(this.schoolData);
        } catch (err) {
            console.log(err);
        }
    }
}   

export default MealStore;