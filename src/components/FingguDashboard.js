import React from 'react';
import FingguDeploymentTracker from './FingguDeploymentTracker';

const FingguDashboard = () => {
    return (
        <div className='finggu-dashboard'>
            <h1>Deployment Dashboard</h1>
            <FingguDeploymentTracker />
        </div>
    );
};

export default FingguDashboard;