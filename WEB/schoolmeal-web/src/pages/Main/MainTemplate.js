import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Modal from 'react-modal';
import './MainTemplate.scss';   
import MainList from '../../components/Lists/MainList/MainList';
import MainCard from '../../components/Cards/MainCard/MainCard';
import SchoolCard from '../../components/Cards/SchoolCard/SchoolCard';
import SchoolList from '../../components/Lists/SchoolList/SchoolList';

const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');

@inject('store')
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            schoolName: "",
            importing: false,
            modalIsOpen: false
        };
    }

    inputingSchool = (e) => {
        console.log(e.target.value);
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
            else{
                const data = school.schoolData[0].code;
                console.log(data);
                await school.getSchoolMeal(data);
                this.setState({
                    importing: true
                })
            }
        }
    }
     
    closeModal = () => {
    this.setState({
        modalIsOpen: false
    });
    }

    render() {
        const { store } = this.props;
        const mealList = store.meal.meals.map((data, i) => {
            console.log(data);
            return <MainCard mealData={data} key={i}/>
        });
        const schoolList = store.meal.schoolData.map((data, i) => {
            console.log(data);
            return <SchoolCard schoolData={data} school={this.props.store.meal} key={i}/>
        })
        console.log(mealList);
        return (
            <div className="mealList">
                <input type="text" className="mealList--searchBox" onChange={(e) => this.inputingSchool(e)}/>
                <button onClick={() => this.gettingSchool()} className="mealList--search"><p>Search</p></button>
                <Modal
                     isOpen={this.state.modalIsOpen}
                     onRequestClose={this.closeModal}
                     style={customStyles}
                >
                    <SchoolList 
                        schoolList={schoolList}
                    />
                </Modal>
                <MainList
                    mealList={mealList}
                />
            </div>
        );
    }
}

export default Main;