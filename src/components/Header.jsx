import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <header>
        <nav className="nav-wrapper light-blue darken-3">
            <a className="brand-logo center" href="#!">{title}</a>
        </nav>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
