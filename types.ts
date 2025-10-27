
export interface Topic {
    name: string;
    examples: string[];
    exercises: string[];
}

export interface Session {
    session: string;
    topics: Topic[];
    skills: string[];
}

export type DrawingMode = 'draw' | 'erase' | 'text' | 'text-placed';

export interface Point {
    x: number;
    y: number;
}

export interface Path {
    type: 'path';
    path: Point[];
    color: string;
    thickness: number;
}

export interface Text {
    type: 'text';
    text: string;
    x: number;
    y: number;
    color: string;
    fontSize: number;
}

export type DrawingHistoryItem = Path | Text;

export interface CurriculumContent {
    type: 'session' | 'examples' | 'exercises';
    title: string;
    content: Session | Topic;
}

export interface MessageBoxState {
    isVisible: boolean;
    message: string;
    onOk: () => void;
}
