import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Modal from 'react-modal';
import './MainTemplate.scss';   
import MainList from '../../components/Lists/MainList/MainList';
import MainCard from '../../components/Cards/MainCard/MainCard';
import SchoolCard from '../../components/Cards/SchoolCard/SchoolCard';
import SchoolList from '../../components/Lists/SchoolList/SchoolList';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
            else{
                const codeData = school.schoolData[0].code;
                const typeData = school.schoolData[0].type;
                await school.getSchoolMeal(codeData, typeData);
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
            return <MainCard mealData={data} key={i}/>
        });
        const schoolList = store.meal.schoolData.map((data, i) => {
            return <SchoolCard schoolData={data} school={this.props.store.meal} closeModal={this.closeModal} key={i}/>
        })
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
                <div className="mealList--month">
                    <IoIosArrowBack size="1em" onClick={() => {
                        if(store.meal.howMonth === 1){
                            return;
                        }
                        store.meal.howMonth -= 1;
                        console.log(store.meal.howMonth);
                        if(store.meal.importing===true){
                            this.gettingSchool();
                        }
                        this.setState({
                            importing: false
                        })
                    }}
                    className="mealList--month--arrowBack"
                    >
                    </IoIosArrowBack>
                    <p>{store.meal.howMonth}월</p>
                    <IoIosArrowForward size="1em" onClick={() => {
                        if(store.meal.howMonth * 1 >= 12){
                            return;
                        }
                        store.meal.howMonth += 1;
                        console.log(store.meal.howMonth);
                        if(store.meal.importing===true){
                            this.gettingSchool();
                        }
                        this.setState({
                            importing: false
                        })
                    }}
                    className="mealList--month--arrowForward"
                    >
                    </IoIosArrowForward>
                </div>
                <div className="mealList--mainList">
                    <MainList
                        mealList={mealList}
                    />
                </div>
            </div>
        );
    }
}

export default Main;