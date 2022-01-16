import React from 'react';

const Header = ({name ,  group, option}) => {
    return (
        <header className="page_header">
            <div className="page_header_me">
                <span className="page_header_text">{name} {group} </span>
                <span className="page_header_text"> {option}</span>
            </div>
        </header>
    );
};

export default Header;