import React from 'react';
import './MainCard.scss';
import PropTypes from 'prop-types';

const MainCard = ({ mealData }) => {
    const { date, breakfast, lunch, dinner } = mealData;
    
    return (
        <div className="MainCard">
            <p className="MainCard--mealDate">{date}</p>
            {
                (() => {
                    if(!breakfast.length && !lunch.length && !dinner.length){
                        return <p className="MainCard--noMeal">이날은 급식이 없어요!</p>
                    }
                    else{
                        return (
                            <div className="MainCard--mealContent">
                                <div className="MainCard--mealContent--mealBreakfast">
                                    <p className="MainCard--mealContent--mealBreakfast--time">아침</p>
                                    <p className="MainCard--mealContent--mealBreakfast--contents">{breakfast}</p>
                                </div>

                                <div className="MainCard--mealContent--mealLunch">
                                    <p className="MainCard--mealContent--mealBreakfast--time">점심</p>
                                    <p className="MainCard--mealContent--mealLunch--contents">{lunch}</p>
                                </div>

                                <div className="MainCard--mealContent--mealDinner">
                                    <p className="MainCard--mealContent--mealBreakfast--time">저녁</p>
                                    <p className="MainCard--mealContent--mealDinner--contents">{dinner}</p>
                                </div>
                            </div>
                        )
                    }
                })()
            }
        </div>
    );
};

MainCard.propTypes = {
    mealData: PropTypes.object.isRequired
};

export default MainCard;