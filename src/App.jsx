import React, { useState } from 'react';
import MicButton from './components/MicButton';
import TranscriptDisplay from './components/TranscriptDisplay';
import ResponseArea from './components/ResponseArea';

function App() {
    const [transcript, setTranscript] = useState('');
    const [response, setResponse] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    const handleTranscriptUpdate = (newTranscript) => {
        setTranscript(newTranscript);
        // Simulate emotion detection and response (replace with actual API calls)
        setResponse("It sounds like you're feeling overwhelmed. I'm here to listen if you want to share more.");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Emotion-Aware Virtual Listener
                </h1>
                <MicButton 
                    isRecording={isRecording} 
                    setIsRecording={setIsRecording}
                    onTranscriptUpdate={handleTranscriptUpdate}
                />
                <TranscriptDisplay transcript={transcript} />
                <ResponseArea response={response} />
            </div>
        </div>
    );
}

export default App;