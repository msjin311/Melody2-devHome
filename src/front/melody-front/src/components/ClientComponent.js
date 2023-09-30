import React, { useState, useEffect } from 'react';

const ClientComponent = () => {
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/some-endpoint');
                const data = await response.text(); // Use text() method for plain text response
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>API Response:</h2>
            <p>{apiData}</p>
        </div>
    );
};

export default ClientComponent;
