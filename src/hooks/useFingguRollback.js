import { useState } from 'react';

const useFingguRollback = () => {
    const [rollbackState, setRollbackState] = useState(null);

    const rollbackCode = async (version) => {
        const response = await fetch('/api/rollback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ version })
        });
        const data = await response.json();
        setRollbackState(data);
    };

    return { rollbackState, rollbackCode };
};

export default useFingguRollback;