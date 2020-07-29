import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import MainCard from '../components/Cards/MainCard/MainCard';
import SchoolCard from '../components/Cards/SchoolCard/SchoolCard';
import Main from '../components/Main/Main';
import Swal from 'sweetalert2';

const MainTemplate = ({ store }) => {
  const { meals, schoolData, processedSchoolData, getSchoolMeal, 
    getSchoolName, setMonth, month, isLoad } = store.meal;

  const [schoolName, setSchoolName] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [doubleEv, setDoubleEv] = useState(false);

  const inputSchool = (e) => {
    let name = e.target.value;
    setSchoolName(name);
  }

  const getSchool = async() => {
    if(doubleEv === false){
      setDoubleEv(true);
      const name = schoolName;
      await getSchoolName(name).then(async res => {
        if(res.length){
          if(res.length > 1){
            setModalIsOpen(true);
          }
          else if(res.length === 1) {
            await getSchoolMeal(res[0]);
            setModalIsOpen(false);
          }
        } else {
          Swal.fire('검색한 학교가 없어요!');
        }
        setDoubleEv(false);
      }).catch(err => {
        Swal.fire('검색중에 에러가 발생했어요!');
        setDoubleEv(false);
      });
    }
  }

  const sendSchoolCode = async (schoolData) => {
    await getSchoolMeal(schoolData);
    closeModal();
  }

  const clickMonth = async (type) => {
    if(month === 1 && type === 'back') return;

    if(month === 12 && type === 'forward') return;
    
    if(type === 'back') setMonth(false);

    if(type === 'forward') setMonth(true);

    await getSchoolMeal(processedSchoolData);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const setMealDivided = (meals) => {
    const { breakfast, lunch, dinner, date } = meals;

    const newBreakfast = mapMeals(breakfast);
    const newLunch = mapMeals(lunch);
    const newDinner = mapMeals(dinner);

    const newMeals = {
      breakfast: newBreakfast,
      lunch: newLunch,
      dinner: newDinner,
      date: date
    }

    return newMeals;
  }

  const mapMeals = (meals) => {
    let mappedMeals = [];

    for(let meal of meals){
      const newMeal = meal.concat(' ');
      mappedMeals.push(newMeal);
    }

    return mappedMeals;
  }

  const mealList = meals.map((data, i) => {
    const mealData = setMealDivided(data);
    return <MainCard mealData={mealData} key={i}/>
  });

  const schoolList = schoolData.map((data, i) => {
    return <SchoolCard schoolData={data} sendSchoolCode={sendSchoolCode} key={i}/>
  });

  return (
    <Main
      inputSchool={inputSchool}
      getSchool={getSchool}
      closeModal={closeModal}
      mealList={mealList}
      schoolList={schoolList}
      modalIsOpen={modalIsOpen}
      clickMonth={clickMonth}
      month={month}
      isLoad={isLoad}
    />
  );
};

MainTemplate.propTypes = {
    store: PropTypes.object.isRequired
};

export default inject('store')(observer(MainTemplate));