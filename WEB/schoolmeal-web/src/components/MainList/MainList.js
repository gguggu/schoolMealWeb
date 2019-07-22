import React from 'react';

const MainList = ({ mealList }) => {
    console.log(mealList);
    return (
        <div>
            {mealList}
            hello mainlist
        </div>
    );
};

export default MainList;