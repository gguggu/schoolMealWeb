import React from 'react';
import './MainList.scss';
import moment from 'moment';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { now } from 'moment';

const MainList = ({ mealList }) => {
    const [card, setCard] = React.useState(1);
    console.log(mealList);
    return (
        <div className="MainList">
            <div className="MainList--month">
                <p>{moment().locale('ko').format('M')}월</p>
            </div>
            <div className="MainList--main">
                <IoIosArrowBack size="1em" onClick={() => {
                    if(card === 1){
                        return;
                    }
                    setCard(card-1);
                }}
                className="MainList--main--arrowBack"
                >
                </IoIosArrowBack>
                <div className="MainList--main--mainContents">
                    {mealList.slice((card - 1) * 1, (card - 1) * 1 + 1)}
                </div>
                <IoIosArrowForward size="1em" onClick={() => {
                    if(card * 1 >= mealList.length){
                        return;
                    }
                    setCard(card + 1);
                }}
                className="MainList--main--arrowForward"
                >
                </IoIosArrowForward>
            </div>
        </div>
    );
};

export default MainList;