import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './styles.scss'

const Loading = () => {
    return (
        <div className='loading-contaienr'>
             <Spin size="large" />
             <h1>Loading...</h1>
        </div>
    );
};

Loading.propTypes = {
    
};

export default Loading;