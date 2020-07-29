import React from 'react';
import './SchoolCard.scss';
import  PropTypes  from 'prop-types';

const SchoolCard = ({ schoolData, sendSchoolCode }) => {
    const { address, name, type } = schoolData;

    return (
        <div className="SchoolCard" onClick={() => sendSchoolCode(schoolData)}>
            <div className="SchoolCard--contents">학교이름: {name}</div>
            {
                (() => {
                    if(type === 'elementary'){return <div className="SchoolCard--contents">학교유형: 초등학교</div>}
                    else if(type === 'middle'){return <div className="SchoolCard--contents">학교유형: 중학교</div>}
                    else if(type === 'high'){return <div className="SchoolCard--contents">학교유형: 고등학교</div>}
                    else if(type === 'special'){return <div className="SchoolCard--contents">학교유형: 특수학교</div>}
                })()
            }
            <div className="SchoolCard--contents">학교주소: {address}</div>
        </div>
    );
};

SchoolCard.propTypes = {
    schoolData: PropTypes.object.isRequired,
    sendSchoolCode: PropTypes.func.isRequired
};

export default SchoolCard;