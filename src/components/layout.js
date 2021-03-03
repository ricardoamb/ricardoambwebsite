import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => (
    <main>
        <Header />
        {children}
    </main>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
