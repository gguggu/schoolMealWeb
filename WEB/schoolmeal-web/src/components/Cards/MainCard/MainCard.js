import React from 'react';
import './MainCard.scss';

const MainCard = ({ mealData }) => {
    return (
        <div className="MainCard">
            <p className="MainCard--mealDate">{mealData.date}</p>
            <div className="MainCard--mealBreakfast">
                <p className="MainCard--mealBreakfast--time">아침</p>
                <p className="MainCard--mealBreakfast--contents">{mealData.breakfast}</p>
            </div>

            <div className="MainCard--mealLunch">
                <p className="MainCard--mealBreakfast--time">점심</p>
                <p className="MainCard--mealLunch--contents">{mealData.lunch}</p>
            </div>

            <div className="MainCard--mealDinner">
                <p className="MainCard--mealBreakfast--time">저녁</p>
                <p className="MainCard--mealDinner--contents">{mealData.dinner}</p>
            </div>
        </div>
    );
};

export default MainCard;