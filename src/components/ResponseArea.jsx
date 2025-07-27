import React from 'react';

function ResponseArea({ response }) {
    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Listener Response</h2>
            <div className="bg-blue-100 p-4 rounded-lg min-h-[100px] text-gray-800">
                {response || 'Waiting for your input...'}
            </div>
        </div>
    );
}

export default ResponseArea;