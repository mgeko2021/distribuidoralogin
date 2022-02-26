import React from 'react';

const LaboratoryRender = ({laboratory, laboratoryValue}) => {
    return (
        <option value={laboratory}>{laboratory}</option>
    );
};

export default LaboratoryRender;