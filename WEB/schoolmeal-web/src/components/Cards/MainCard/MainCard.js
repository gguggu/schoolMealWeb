import React from 'react';
import './MainCard.scss';

const MainCard = ({ mealData }) => {
    return (
        <div className="MainCard">
            <p className="MainCard--mealDate">{mealData.date}</p>
            {
                (() => {
                    if(!mealData.breakfast.length && !mealData.lunch.length && !mealData.dinner.length){
                        return <p className="MainCard--noMeal">이날은 급식이 없어요!</p>
                    }
                    else{
                        return (
                            <div className="MainCard--mealContent">
                                <div className="MainCard--mealContent--mealBreakfast">
                                    <p className="MainCard--mealContent--mealBreakfast--time">아침</p>
                                    <p className="MainCard--mealContent--mealBreakfast--contents">{mealData.breakfast}</p>
                                </div>

                                <div className="MainCard--mealContent--mealLunch">
                                    <p className="MainCard--mealContent--mealBreakfast--time">점심</p>
                                    <p className="MainCard--mealContent--mealLunch--contents">{mealData.lunch}</p>
                                </div>

                                <div className="MainCard--mealContent--mealDinner">
                                    <p className="MainCard--mealContent--mealBreakfast--time">저녁</p>
                                    <p className="MainCard--mealContent--mealDinner--contents">{mealData.dinner}</p>
                                </div>
                            </div>
                        )
                    }
                })()
            }
        </div>
    );
};

export default MainCard;