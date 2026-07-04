import React, { useEffect, useState } from 'react';

const FingguDeploymentTracker = () => {
    const [deployments, setDeployments] = useState([]);

    useEffect(() => {
        const fetchDeployments = async () => {
            const response = await fetch('/api/deployments');
            const data = await response.json();
            setDeployments(data);
        };
        fetchDeployments();
    }, []);

    return (
        <div className='finggu-deployment-tracker'>
            <h2>Current Deployments</h2>
            <ul>
                {deployments.map(deployment => (
                    <li key={deployment.version}>{deployment.code} - Version: {deployment.version}</li>
                ))}
            </ul>
        </div>
    );
};

export default FingguDeploymentTracker;