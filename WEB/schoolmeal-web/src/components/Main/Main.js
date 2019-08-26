import React from 'react';
import './Main.scss';
import MainList from '../../components/Lists/MainList/MainList';
import Modal from 'react-modal';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';
import SchoolList from '../Lists/SchoolList/SchoolList';
import Loader from '../Loader/Loader';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height: '50em',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F25E5E',
    borderRadius: '10px',
    boxShadow: '0 0 15px #424242',
    border: '0',
    outline: '0',
  }
};

const Main = ({ inputingSchool, gettingSchool, closeModal, gettingMonthMeal, mealList, schoolList, store, modalIsOpen }) => {
  return (
    <div className="mealList">
      <p className="mealList--title">급식!소식!</p>
    <div className="mealList--inputElement">
        <input type="text" className="mealList--inputElement--searchBox" placeholder="학교 이름을 입력하세요." onChange={inputingSchool}/>
        <GoSearch onClick={gettingSchool} size="2em" className="mealList--inputElement--search"/>
    </div>
    <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         style={customStyles}
    >
     {
        store.meal.isLoad === true ? (
          <SchoolList 
            schoolList={schoolList}
          />
        ) : (
          <Loader/>
        )
     }
    </Modal>
    <div className="mealList--body">
      <div className="mealList--body--month">
        {
          mealList.length !== 0 ? (
            <>
            <IoIosArrowBack onClick={() => {
                if(store.meal.howMonth === 1){
                    return;
                }
                store.meal.howMonth -= 1;
                console.log(store.meal.howMonth);
                if(store.meal.importing===true){
                  gettingMonthMeal();
                }
            }}
            className="mealList--body--month--arrowBack"
            >
            </IoIosArrowBack>
            <p>{store.meal.howMonth}월</p>
            <IoIosArrowForward onClick={() => {
                if(store.meal.howMonth * 1 >= 12){
                    return;
                }
                store.meal.howMonth += 1;
                console.log(store.meal.howMonth);
                if(store.meal.importing===true){
                  gettingMonthMeal();
                }
            }}
            className="mealList--body--month--arrowForward"
            >
            </IoIosArrowForward>
            </>
          ) : (
            <></>
          )
        }
      </div>
      <div className="mealList--body--mainList">
          <MainList
              mealList={mealList}
          />
      </div>
    </div>
</div>
  );
};

export default Main;