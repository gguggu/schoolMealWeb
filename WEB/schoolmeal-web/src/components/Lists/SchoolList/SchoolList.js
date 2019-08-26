import React from 'react';
import './SchoolList.scss';
import { PropTypes } from 'mobx-react';

const SchoolList = ({ schoolList }) => {
    console.log(schoolList);
    return (
        <div className="SchoolList">
            {schoolList}
        </div>
    );
};

// SchoolList.propTypes = {
//     schoolList: PropTypes.array
// }

export default SchoolList;