import { autobind } from 'core-decorators';
import { action, observable } from 'mobx';
import MealRepository from './MealRepository';
import moment from 'moment';

@autobind
class MealStore {
    @observable meals=[];
    @observable schoolData=[];
    @observable processedSchoolData={};
    @observable importing=false;
    @observable month=parseInt(moment().locale('ko').format('M'));
    @observable isLoad=false; //false가 로딩 true가 로딩아님

    @action async getSchoolMeal(schoolInfo) {
        try {
            const { code, type } = schoolInfo;

            this.setProcessedSchoolData(schoolInfo);
            const data = await MealRepository.getSchoolMeal(code, type, this.month);
            if(data.data.menu){
                this.isLoad = true;
                this.meals = data.data.menu;
            }
        } catch (err) {
            return new Promise((resolve, reject) => {
                reject(err);
            })
        }
    }

    @action async getSchoolName(name) {
        try {
            const data = await MealRepository.getSchoolName(name);
            const schoolInfo = data.data.school_infos;
            this.schoolData=[];
            if(schoolInfo){
                for(let info of schoolInfo){
                    const { address, code, name } = info;
                    const type = this.handleTypeStr(name);

                    const newSchoolData = {
                        address,
                        code,
                        name,
                        type
                    };

                    this.schoolData.push(newSchoolData);
                }
                this.isLoad=true;
                this.importing=true;
            }
            return new Promise((resolve, reject) => {
                this.importing=false;
                resolve(this.schoolData);
            });
        } catch (err) {
            return new Promise((resolve, reject) => {
                reject(err);
            });
        }
    }

    @action setProcessedSchoolData(data) {
        this.processedSchoolData = data;
    }

    @action handleTypeStr(name) {
        if(name.indexOf('초등학교') !== -1)
            return 'elementary';
        if(name.indexOf('중학교') !== -1)
            return 'middle';
        if(name.indexOf('고등학교') !== -1)
            return 'high';

        return 'special';
    }

    @action setMonth(isPlus){
        if(isPlus)
            this.month++;
        else
            this.month--;
    }
}   

export default MealStore;