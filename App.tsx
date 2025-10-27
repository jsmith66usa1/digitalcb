import React, { useState, useRef, useEffect, useCallback } from 'react';
import { availableCurriculums } from './constants/curriculum';
import type { CurriculumContent, Session, Topic, DrawingMode, MessageBoxState } from './types';
import { Controls } from './components/Controls';
import { MessageBox } from './components/MessageBox';
import { useChalkboard } from './hooks/useChalkboard';

// Helper to get curriculum from URL parameter or return a default
const getInitialCurriculumData = () => {
    const params = new URLSearchParams(window.location.search);
    const curriculumKey = params.get('curriculum') as keyof typeof availableCurriculums;
    // Default to 'algebra' if the key from the URL is invalid or not present
    if (curriculumKey && availableCurriculums[curriculumKey]) {
        return availableCurriculums[curriculumKey].data;
    }
    return availableCurriculums.algebra.data;
};


const App: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mode, setMode] = useState<DrawingMode>('draw');
    const [isGridActive, setIsGridActive] = useState<boolean>(false);
    const [curriculumContent, setCurriculumContent] = useState<CurriculumContent | null>(null);
    const [messageBoxState, setMessageBoxState] = useState<MessageBoxState>({ isVisible: false, message: '', onOk: () => {} });
    
    // Load curriculum based on URL param ONCE on initial render.
    const [curriculumData] = useState<Session[]>(getInitialCurriculumData());

    const { clearDrawing, addTextToCanvas } = useChalkboard(canvasRef, mode, isGridActive, curriculumContent);

    const [selectedSessionIndex, setSelectedSessionIndex] = useState<string>('0');
    const [selectedTopicValue, setSelectedTopicValue] = useState<string>('0-0');

    const showMessageBox = useCallback((message: string, onOk?: () => void) => {
        setMessageBoxState({
            isVisible: true,
            message,
            onOk: () => {
                if (onOk) onOk();
                setMessageBoxState({ isVisible: false, message: '', onOk: () => {} });
            },
        });
    }, []);

    const handleSessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sessionIndex = e.target.value;
        setSelectedSessionIndex(sessionIndex);
        setSelectedTopicValue(`${sessionIndex}-0`); 

        if (sessionIndex !== '0') {
            const sessionData = curriculumData[parseInt(sessionIndex, 10) - 1];
            setCurriculumContent({
                type: 'session',
                title: sessionData.session,
                content: sessionData,
            });
        } else {
            setCurriculumContent(null);
        }
    };

    const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const topicValue = e.target.value;
        setSelectedTopicValue(topicValue);
        const [sessionIndexStr, topicIndexStr] = topicValue.split('-');
        const sessionIndex = parseInt(sessionIndexStr, 10);
        const topicIndex = parseInt(topicIndexStr, 10);

        if (sessionIndex > 0 && !isNaN(topicIndex)) {
            const topicData = curriculumData[sessionIndex - 1].topics[topicIndex];
            setCurriculumContent({
                type: 'examples',
                title: `${topicData.name} - Examples`,
                content: topicData,
            });
        }
    };
    
    const handleShowExercises = () => {
        const [sessionIndexStr, topicIndexStr] = selectedTopicValue.split('-');
        const sessionIndex = parseInt(sessionIndexStr, 10);
        const topicIndex = parseInt(topicIndexStr, 10);

        if (sessionIndex > 0 && topicIndex > -1 && !isNaN(topicIndex)) {
            const topicData = curriculumData[sessionIndex - 1].topics[topicIndex];
            if (topicData.exercises.length > 0) {
                setCurriculumContent({
                    type: 'exercises',
                    title: `${topicData.name} - Exercises`,
                    content: topicData,
                });
            } else {
                showMessageBox('This topic does not have any exercises.');
            }
        } else {
            showMessageBox('Please select a session and a topic first.');
        }
    };

    const handleDrawText = (text: string) => {
        if (!text.trim()) {
            showMessageBox('Please enter some text to draw.');
            return;
        }
        setMode('text');
        addTextToCanvas(text);
        showMessageBox('Click or tap on the chalkboard to place your text.');
    };
    
    const handleClear = () => {
        showMessageBox('Are you sure you want to clear your drawings and text? The curriculum will remain.', () => {
            clearDrawing();
        });
    };
    
    useEffect(() => {
        if (mode === 'text-placed') {
            setMode('draw');
        }
    }, [mode]);

    return (
        <div className="h-screen w-screen overflow-hidden relative bg-[#1a202c]">
            <canvas
                id="chalkboard-canvas"
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full bg-[#2c5234] cursor-crosshair"
            />
            <Controls
                curriculum={curriculumData}
                selectedSessionIndex={selectedSessionIndex}
                selectedTopicValue={selectedTopicValue}
                onSessionChange={handleSessionChange}
                onTopicChange={handleTopicChange}
                onShowExercises={handleShowExercises}
                isGridActive={isGridActive}
                onToggleGrid={() => setIsGridActive(prev => !prev)}
                activeMode={mode}
                onSetMode={setMode}
                onDrawText={handleDrawText}
                onClear={handleClear}
            />
            <MessageBox
                isVisible={messageBoxState.isVisible}
                message={messageBoxState.message}
                onOk={messageBoxState.onOk}
            />
        </div>
    );
};

export default App;