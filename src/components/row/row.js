import React from "react";
import PropTypes from 'prop-types';

const Row = ({leftItem, rightItem}) =>{
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftItem}
            </div>
            <div className="col-md-6">
                {rightItem}
            </div>
        </div>
    );
}

Row.prototype = {
    leftItem: PropTypes.node,
    rightItem: PropTypes.node

};
export default Row;