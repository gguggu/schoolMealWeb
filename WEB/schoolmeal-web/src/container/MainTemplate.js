import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Modal from 'react-modal';
import MainCard from '../components/Cards/MainCard/MainCard';
import SchoolCard from '../components/Cards/SchoolCard/SchoolCard';
import Main from '../components/Main/Main';
import Swal from 'sweetalert2'

Modal.setAppElement('#root');

@inject('store')
class MainTemplate extends Component {
    constructor(props){
        super(props);
        this.state={
            schoolName: "",
            importing: false,
            modalIsOpen: false,
        };
    }
    
    inputingSchool = (e) => {
        let name = e.target.value;
        this.setState({
            schoolName: name
        })
    }

    gettingSchool = async() => {
        const name = this.state.schoolName;
        const school = this.props.store.meal;
        await school.getSchoolName(name);
        if(school.schoolData.length){
            if(school.schoolData.length > 1){
                this.setState({
                    modalIsOpen: true
                })
            }
            else if(school.schoolData.length === 1) {
                const codeData = school.schoolData[0].code;
                const typeData = school.schoolData[0].type;
                await school.getSchoolMeal(codeData, typeData);
                await school.putNowSchoolData(codeData, typeData);
                this.setState({
                    modalIsOpen: false
                })
            }
        } else {
            Swal.fire('검색한 학교가 없어요!');
        }
    }

    gettingMonthMeal = async() => {
        const meal = this.props.store.meal;
        const code = meal.nowSchoolData.code;
        const type = meal.nowSchoolData.type;

        await meal.getSchoolMeal(code, type);
        this.setState({
            modalIsOpen: false
        })
    }
     
    closeModal = () => {
    this.setState({
        modalIsOpen: false
    });
    }

    render() {
        const { store } = this.props;
        const mealList = store.meal.meals.map((data, i) => {
            return <MainCard mealData={data} key={i}/>
        });
        const schoolList = store.meal.schoolData.map((data, i) => {
            return <SchoolCard schoolData={data} school={this.props.store.meal} closeModal={this.closeModal} key={i}/>
        })
        return (
           <Main
            inputingSchool={this.inputingSchool}
            gettingSchool={this.gettingSchool}
            closeModal={this.closeModal}
            gettingMonthMeal={this.gettingMonthMeal}
            mealList={mealList}
            schoolList={schoolList}
            store={store}
            modalIsOpen={this.state.modalIsOpen}
           />
        );
    }
}

export default MainTemplate;