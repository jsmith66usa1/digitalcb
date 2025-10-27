import React, { useState } from 'react';
import type { Session, DrawingMode } from '../types';

interface ControlsProps {
    curriculum: Session[];
    selectedSessionIndex: string;
    selectedTopicValue: string;
    onSessionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onTopicChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onShowExercises: () => void;
    isGridActive: boolean;
    onToggleGrid: () => void;
    activeMode: DrawingMode;
    onSetMode: (mode: DrawingMode) => void;
    onDrawText: (text: string) => void;
    onClear: () => void;
}

const ControlButton: React.FC<{ onClick: () => void; isActive?: boolean; children: React.ReactNode, className?: string }> = ({ onClick, isActive = false, children, className = '' }) => {
    const baseClasses = 'px-3 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200 ease-in-out shadow-md border border-solid border-white/20 text-white text-sm';
    const activeClasses = 'bg-white/35 border-white/80 -translate-y-0.5';
    const inactiveClasses = 'bg-white/15 hover:bg-white/25 hover:-translate-y-px';

    return (
        <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`}>
            {children}
        </button>
    );
};

export const Controls: React.FC<ControlsProps> = ({
    curriculum,
    selectedSessionIndex,
    selectedTopicValue,
    onSessionChange,
    onTopicChange,
    onShowExercises,
    isGridActive,
    onToggleGrid,
    activeMode,
    onSetMode,
    onDrawText,
    onClear
}) => {
    const [textInput, setTextInput] = useState('');

    const handleDrawTextClick = () => {
        onDrawText(textInput);
        // Do not clear input here, user might want to place the same text multiple times.
    };
    
    const selectedSession = curriculum[parseInt(selectedSessionIndex, 10) - 1];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10 w-[95%] max-w-5xl flex flex-wrap gap-2.5 p-2.5 bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-lg justify-center items-center">
            <div className="flex flex-col sm:flex-row gap-2.5 items-center w-full sm:w-auto">
                {/* Curriculum Controls */}
                <select 
                    id="session-select" 
                    value={selectedSessionIndex}
                    onChange={onSessionChange}
                    className="px-3 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200 ease-in-out shadow-md border border-solid border-white/20 text-white bg-white/10 hover:bg-white/20 text-sm w-full sm:w-auto"
                >
                    <option value="0">Select a session...</option>
                    {curriculum.map((item, index) => (
                        <option key={index} value={index + 1}>{item.session}</option>
                    ))}
                </select>
                <select 
                    id="topic-select" 
                    value={selectedTopicValue}
                    onChange={onTopicChange}
                    disabled={selectedSessionIndex === '0'}
                    className="px-3 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200 ease-in-out shadow-md border border-solid border-white/20 text-white bg-white/10 hover:bg-white/20 text-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <option value={`${selectedSessionIndex}-0`}>Select a topic...</option>
                    {selectedSession && selectedSession.topics.map((topic, topicIndex) => (
                        <option key={topicIndex} value={`${selectedSessionIndex}-${topicIndex}`}>
                            {topic.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 items-center w-full sm:w-auto">
                <ControlButton onClick={onShowExercises}>Show Exercises</ControlButton>
                {/* Drawing Tools */}
                <div className="flex-grow flex gap-2.5 items-center min-w-[280px]">
                    <input 
                        type="text" 
                        id="textInput" 
                        placeholder="Enter text..." 
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        className="bg-white/10 border border-solid border-white/20 text-white px-3 py-2 rounded-lg font-medium flex-grow text-sm placeholder:text-gray-300"
                    />
                    <ControlButton onClick={handleDrawTextClick} isActive={activeMode === 'text'}>Draw Text</ControlButton>
                </div>
                <ControlButton onClick={() => onSetMode('draw')} isActive={activeMode === 'draw'}>Chalk</ControlButton>
                <ControlButton onClick={() => onSetMode('erase')} isActive={activeMode === 'erase'}>Eraser</ControlButton>
                <ControlButton onClick={onToggleGrid} isActive={isGridActive}>Grid</ControlButton>
                <ControlButton onClick={onClear} className="bg-red-500/50 hover:bg-red-500/70">Clear</button>
            </div>
        </div>
    );
};