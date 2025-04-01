import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MasterLayer = (props) => {
    return (
        <Fragment>
            <Navbar/>
            {
                props.children
            }
            {/* <Footer/> */}
        </Fragment>
    );
};

export default MasterLayer;