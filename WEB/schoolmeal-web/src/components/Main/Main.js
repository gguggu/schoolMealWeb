import React from 'react';
import './Main.scss';
import MainList from '../../components/Lists/MainList/MainList';
import Modal from 'react-modal';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';

const customStyles = {
  content : {
    width: '500px',
    height: '800px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fafafa',
    borderRadius: '3px',
    boxShadow: '0 0 15px #424242',
    border: '0',
    outline: '0',
    padding: '0'
  }
};

const Main = ({ inputSchool, getSchool, closeModal,
  mealList, schoolList, modalIsOpen, clickMonth, month, isLoad }) => {
  return (
    <div className="mealList">
      <div className="mealList--head">
        <p className="mealList--head--title">급식!소식!</p>
        <div className="mealList--head--inputElement">
            <input type="text" className="mealList--head--inputElement--searchBox"
              placeholder="학교 이름을 입력하세요." onKeyUp={e => {
                if(e.keyCode === 13)
                  getSchool();
              }} onChange={inputSchool}/>
            <GoSearch onClick={getSchool} size="2em" className="mealList--head--inputElement--search"/>
        </div>
      </div>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
      >
      {
          isLoad === true ? (
            <div className="mealList-SchoolList">
              {schoolList}
            </div>
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
                <IoIosArrowBack onClick={() => clickMonth('back')}
                  className="mealList--body--month--arrowBack"/>
                  <div>{month}월</div>
                <IoIosArrowForward onClick={() => clickMonth('forward')}
                  className="mealList--body--month--arrowForward"/>
              </>
            ) : (
              <></>
            )
          }
        </div>
        <div className="mealList--body--mainList">
            <MainList mealList={mealList}/>
        </div>
    </div>
</div>
  );
};

Main.propTypes = {
  inputSchool: PropTypes.func.isRequired,
  getSchool: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  mealList: PropTypes.array.isRequired,
  schoolList: PropTypes.array.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  clickMonth: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  isLoad: PropTypes.bool.isRequired
};

export default Main;