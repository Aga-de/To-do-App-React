import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
    icon: PropTypes.node,
}

export default Icon;