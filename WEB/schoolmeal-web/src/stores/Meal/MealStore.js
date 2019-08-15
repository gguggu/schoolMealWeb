import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import MealRepository from './MealRepository';
import moment from 'moment';

@autobind
class MealStore {
    @observable meals=[];
    @observable schoolData=[];
    @observable nowSchoolData={};
    @observable importing=false;
    @observable howMonth=parseInt(moment().locale('ko').format('M'));

    @action async getSchoolMeal(code, type) {
        try {
            const data = await MealRepository.getSchoolMeal(code, type, this.howMonth);
            this.meals = data.data.menu;
        } catch (err) {
            console.log(err);
        }
    }

    @action async getSchoolName(name) {
        try {
            const data = await MealRepository.getSchoolName(name);
            this.schoolData = data.data.school_infos;
            this.importing=true;
            console.log(data);
            console.log(this.schoolData);
        } catch (err) {
            console.log(err);
        }
    }

    @action putNowSchoolData(code, type) {
        this.nowSchoolData={
            code: code,
            type: type
            // address: '',
            // name: '',
        }
    }
}   

export default MealStore;