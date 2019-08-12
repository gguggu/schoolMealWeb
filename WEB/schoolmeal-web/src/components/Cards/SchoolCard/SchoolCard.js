import React from 'react';
import './SchoolCard.scss';

const SchoolCard = ({ schoolData, school, closeModal }) => {
    
    const sendingSchoolCode = async() => {
        const schoolCode = schoolData.code;
        const schoolType = schoolData.type;
        console.log(schoolCode, schoolType);
        await school.putNowSchoolData(schoolCode, schoolType);
        await school.getSchoolMeal(schoolCode, schoolType);
        closeModal();
    }

    return (
        <button className="SchoolCard" onClick={() => {
            sendingSchoolCode();
        }}>
            <p className="SchoolCard--contents">학교이름: {schoolData.name}&nbsp;</p>
            {
                (() => {
                    if(schoolData.type === 'elementary'){return <p className="SchoolCard--contents">학교유형: 초등학교&nbsp;</p>}
                    else if(schoolData.type === 'middle'){return <p className="SchoolCard--contents">학교유형: 중학교&nbsp;</p>}
                    else if(schoolData.type === 'high'){return <p className="SchoolCard--contents">학교유형: 고등학교&nbsp;</p>}
                    else if(schoolData.type === 'special'){return <p className="SchoolCard--contents">학교유형: 특수학교&nbsp;</p>}
                    else{return <p className="SchoolCard--contents">학교유형: X&nbsp;</p>}
                })()
            }
            <p className="SchoolCard--contents">학교주소: {schoolData.address}&nbsp;</p>
        </button>
    );
};

export default SchoolCard;