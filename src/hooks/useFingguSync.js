import { useState } from 'react';

const useFingguSync = () => {
    const [syncState, setSyncState] = useState(null);

    const syncCode = async (code, version) => {
        const response = await fetch('/api/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, version })
        });
        const data = await response.json();
        setSyncState(data);
    };

    return { syncState, syncCode };
};

export default useFingguSync;