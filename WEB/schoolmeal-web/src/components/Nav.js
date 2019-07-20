import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">메인</Link>
            <Link to="login">로그인</Link>
        </div>
    );
};

export default Nav;