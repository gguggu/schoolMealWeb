import React from 'react';
import './MainList.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import moment from 'moment';

const MainList = ({ mealList }) => {
    const today = parseInt(moment().format('D'));
    const [card, setCard] = React.useState(today);
    return (
        <div className="MainList">
            {
                mealList.length !== 0 ?
                (
                    <div className="MainList--main">
                        <div className="MainList--main--leftContents">
                            {
                                card === 1
                                ? (<></>)
                                : (mealList[card-2])
                            }
                        </div>
                        <IoIosArrowBack onClick={() => {
                            if(card === 1){
                                return;
                            }
                            setCard(card-1);
                        }}
                        className="MainList--main--arrowBack"
                        >
                        </IoIosArrowBack>
                        <div className="MainList--main--mainContents">
                            {mealList.slice((card - 1), (card - 1) + 1)}
                        </div>
                        <IoIosArrowForward onClick={() => {
                            if(card * 1 >= mealList.length){
                                return;
                            }
                            setCard(card + 1);
                        }}
                        className="MainList--main--arrowForward"
                        >
                        </IoIosArrowForward>
                        <div className="MainList--main--rightContents">
                            {mealList[card]}
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default MainList;