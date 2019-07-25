import React from 'react';
import './SchoolCard.scss';

const SchoolCard = ({ schoolData, school }) => {

    const sendingSchoolCode = async() => {
        const schoolCode = schoolData.code;
        console.log(schoolCode);
        await school.getSchoolMeal(schoolCode);
    }

    return (
        <button className="SchoolCard" onClick={sendingSchoolCode}>
            <p className="SchoolCard--contents">학교이름: {schoolData.name}</p>
            <p className="SchoolCard--contents">학교타입: {schoolData.type}</p>
            <p className="SchoolCard--contents">학교주소: {schoolData.address}</p>
        </button>
    );
};

export default SchoolCard;