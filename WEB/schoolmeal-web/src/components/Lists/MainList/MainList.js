import React from 'react';
import './MainList.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MainList = ({ mealList }) => {
    const [card, setCard] = React.useState(1);
    console.log(mealList);
    return (
        <div className="MainList">
            {/* <div className="MainList--month">
                <IoIosArrowBack size="10px" onClick={() => {
                    if(howMonth === 1){
                        return;
                    }
                    howMonth -= 1;
                    console.log(howMonth);
                }}
                className="MainList--month--arrowBack"
                >
                </IoIosArrowBack>
                <p>{howMonth}월</p>
                <IoIosArrowForward size="10px" onClick={() => {
                    if(howMonth * 1 >= 12){
                        return;
                    }
                    howMonth += 1;
                    console.log(howMonth);
                }}
                className="MainList--month--arrowForward"
                >
                </IoIosArrowForward>
            </div> */}
            <div className="MainList--main">
                <div className="MainList--main--leftContents">
                    {
                        card === 1
                        ? (console.log('아무것도 아님!'))
                        : (mealList[card-2])
                    }
                </div>
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
                    {mealList.slice((card - 1), (card - 1) + 1)}
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
                <div className="MainList--main--rightContents">
                    {mealList[card]}
                </div>
            </div>
        </div>
    );
};

export default MainList;