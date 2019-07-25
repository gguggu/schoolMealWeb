import React from 'react';

const MainList = ({ mealList }) => {
    console.log(mealList);
    return (
        <div>
            {mealList}
        </div>
    );
};

export default MainList;