import React from 'react';

function TranscriptDisplay({ transcript }) {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Words</h2>
            <div className="bg-gray-100 p-4 rounded-lg min-h-[100px] text-gray-800">
                {transcript || 'Speak to see your transcript here...'}
            </div>
        </div>
    );
}

export default TranscriptDisplay;