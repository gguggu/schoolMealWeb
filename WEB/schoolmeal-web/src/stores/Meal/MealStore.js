import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import MealRepository from './MealRepository';

@autobind
class MealStore {
    @observable meals=[];
    @observable schoolData=[];
    @observable modalIsOpen=false;
    @observable importing=false;

    @action async getSchoolMeal(code, type) {
        try {
            const data = await MealRepository.getSchoolMeal(code, type);
            this.meals = data.data.menu;
        } catch (err) {
            console.log(err);
        }
    }

    @action async getSchoolName(name) {
        try {
            const data = await MealRepository.getSchoolName(name);
            this.schoolData = data.data.school_infos;
            this.modalIsOpen=false;
            console.log(data);
            console.log(this.schoolData);
        } catch (err) {
            console.log(err);
        }
    }
}   

export default MealStore;