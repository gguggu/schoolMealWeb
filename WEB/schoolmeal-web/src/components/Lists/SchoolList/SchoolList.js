import React from 'react';
import './SchoolList.scss';

const SchoolList = ({ schoolList }) => {
    console.log(schoolList);
    return (
        <div className="SchoolList">
            {schoolList}
        </div>
    );
};

export default SchoolList;