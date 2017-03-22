import React from 'react';

const HeaderItem = (props) => {
    const { headerKey, headerValue } = props;
    return (
        <tr>
            <td>{headerKey} </td>
            <td>{headerValue} </td>
        </tr>
    );
};

export default HeaderItem;
