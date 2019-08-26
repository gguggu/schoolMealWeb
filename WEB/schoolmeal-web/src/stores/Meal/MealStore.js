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
    @observable isLoad=false; //false가 로딩 true가 로딩아님

    @action async getSchoolMeal(code, type) {
        try {
            const data = await MealRepository.getSchoolMeal(code, type, this.howMonth);
            console.log(data.data.menu);
            if(data.data.menu){
                this.isLoad = true;
                this.meals = data.data.menu;
            }
        } catch (err) {
            console.log(err);
        }
    }

    @action async getSchoolName(name) {
        try {
            const data = await MealRepository.getSchoolName(name);
            if(data.data.school_infos){
                this.schoolData = data.data.school_infos;
                this.isLoad=true;
                this.importing=true;
            }
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