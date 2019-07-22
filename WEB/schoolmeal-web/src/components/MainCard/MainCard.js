import React from 'react';
import './MainCard.scss';

const MainCard = ({ mealDate, mealBreakfast, mealLunch, mealDinner }) => {
    console.log(mealDate);
    
    return (
        <div className="MainCard">
            <p className="MainCard--mealDate">{mealDate}</p>
            <div className="MainCard--mealBreakfast">
                <p>아침</p>
                <p className="MainCard--mealBreakfast--contents">{mealBreakfast}</p>
            </div>

            <div className="MainCard--mealLunch">
                <p>점심</p>
                <p className="MainCard--mealLunch--contents">{mealLunch}</p>
            </div>

            <div className="MainCard--mealDinner">
                <p>저녁</p>
                <p className="MainCard--mealDinner--contents">{mealDinner}</p>
            </div>
        </div>
    );
};

export default MainCard;