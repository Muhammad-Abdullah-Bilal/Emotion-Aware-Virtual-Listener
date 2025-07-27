import React, { useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

function MicButton({ isRecording, setIsRecording, onTranscriptUpdate }) {
    const handleMicClick = () => {
        if (!isRecording) {
            // Start recording (mock implementation)
            setIsRecording(true);
            // Simulate transcription after 3 seconds
            setTimeout(() => {
                onTranscriptUpdate("I had a long day, I'm just tired of everything.");
                setIsRecording(false);
            }, 3000);
        } else {
            setIsRecording(false);
        }
    };

    useEffect(() => {
        // Cleanup for recording (if needed)
        return () => {
            // Stop any ongoing recording
        };
    }, []);

    return (
        <div className="flex justify-center mb-6">
            <button
                onClick={handleMicClick}
                className={`p-4 rounded-full ${
                    isRecording ? 'bg-red-500' : 'bg-blue-500'
                } text-white hover:${
                    isRecording ? 'bg-red-600' : 'bg-blue-600'
                } transition-colors duration-200 flex items-center justify-center`}
            >
                {isRecording ? (
                    <MicOff className="w-6 h-6" />
                ) : (
                    <Mic className="w-6 h-6" />
                )}
            </button>
        </div>
    );
}

export default MicButton;