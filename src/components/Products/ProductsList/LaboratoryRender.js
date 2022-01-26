import React from 'react';

const LaboratoryRender = ({laboratory}) => {
    return (
        <option value={laboratory}>{laboratory}</option>
    );
};

export default LaboratoryRender;