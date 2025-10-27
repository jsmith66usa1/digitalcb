
import { useRef, useEffect, useCallback } from 'react';
import type { Point, DrawingHistoryItem, DrawingMode, CurriculumContent, Session, Topic } from '../types';

// Constants
const CHALKBOARD_COLOR = '#2c5234';
const CHALK_COLOR = '#fceb9e';
const CHALK_THICKNESS = 4;
const ERASER_THICKNESS = 30;
const TEXT_FONT_SIZE = 24;
const HEADER_FONT_SIZE = 36;
const SUBHEADER_FONT_SIZE = 30;
const LIST_ITEM_FONT_SIZE = 26;
const GRID_SPACING = 50;

export const useChalkboard = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    mode: DrawingMode,
    isGridActive: boolean,
    curriculumContent: CurriculumContent | null
) => {
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const isDrawingRef = useRef<boolean>(false);
    const lastPositionRef = useRef<Point>({ x: 0, y: 0 });
    const drawingHistoryRef = useRef<DrawingHistoryItem[]>([]);
    const currentPathRef = useRef<Point[]>([]);
    const textToDrawRef = useRef<{ text: string; action: (x: number, y: number) => void } | null>(null);

    const drawChalkText = useCallback((ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string, fontSize: number) => {
        ctx.save();
        ctx.font = `300 ${fontSize}px 'Inter', sans-serif`;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 1;
        ctx.shadowColor = color;

        const numStrokes = 3; // To create a chalk-like effect
        for (let i = 0; i < numStrokes; i++) {
            const offsetX = (Math.random() - 0.5) * 2;
            const offsetY = (Math.random() - 0.5) * 2;
            ctx.fillText(text, x + offsetX, y + offsetY);
        }
        ctx.restore();
    }, []);

    const redrawAll = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx) return;
        
        ctx.fillStyle = CHALKBOARD_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (isGridActive) {
            drawGrid(ctx, canvas.width, canvas.height);
        }

        drawingHistoryRef.current.forEach(item => {
            if (item.type === 'path') {
                drawSavedPath(ctx, item.path, item.color, item.thickness);
            } else if (item.type === 'text') {
                drawChalkText(ctx, item.text, item.x, item.y, item.color, item.fontSize);
            }
        });

        if (curriculumContent) {
            drawCurriculum(ctx, curriculumContent);
        }
    }, [canvasRef, isGridActive, curriculumContent, drawChalkText]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        ctxRef.current = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                redrawAll();
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [redrawAll, canvasRef]);
    
    useEffect(() => {
        redrawAll();
    }, [isGridActive, curriculumContent, redrawAll]);

    const getEventCoordinates = (e: MouseEvent | TouchEvent): Point => {
        if (e instanceof MouseEvent) {
            return { x: e.clientX, y: e.clientY };
        }
        if (e.touches && e.touches.length > 0) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        return { x: 0, y: 0 };
    };

    const startDrawing = useCallback((e: MouseEvent | TouchEvent) => {
        if (mode === 'text') return;
        isDrawingRef.current = true;
        const pos = getEventCoordinates(e);
        lastPositionRef.current = pos;
        currentPathRef.current = [pos];
    }, [mode]);

    const draw = useCallback((e: MouseEvent | TouchEvent) => {
        if (!isDrawingRef.current) return;
        e.preventDefault();
        
        const ctx = ctxRef.current;
        if (!ctx) return;

        const pos = getEventCoordinates(e);
        const lastPos = lastPositionRef.current;
        
        const color = mode === 'erase' ? CHALKBOARD_COLOR : CHALK_COLOR;
        const thickness = mode === 'erase' ? ERASER_THICKNESS : CHALK_THICKNESS;

        drawLivePath(ctx, lastPos.x, lastPos.y, pos.x, pos.y, color, thickness);
        currentPathRef.current.push(pos);
        lastPositionRef.current = pos;
    }, [mode]);

    const stopDrawing = useCallback(() => {
        if (!isDrawingRef.current) return;
        isDrawingRef.current = false;
        
        if (currentPathRef.current.length > 1) {
            drawingHistoryRef.current.push({
                type: 'path',
                path: currentPathRef.current,
                color: mode === 'erase' ? CHALKBOARD_COLOR : CHALK_COLOR,
                thickness: mode === 'erase' ? ERASER_THICKNESS : CHALK_THICKNESS,
            });
        }
        currentPathRef.current = [];
    }, [mode]);

    const handleCanvasClick = useCallback((e: MouseEvent) => {
        if (mode === 'text' && textToDrawRef.current) {
            const pos = getEventCoordinates(e);
            textToDrawRef.current.action(pos.x, pos.y);
            textToDrawRef.current = null;
        }
    }, [mode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);

        canvas.addEventListener('click', handleCanvasClick);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);

            canvas.removeEventListener('touchstart', startDrawing);
            canvas.removeEventListener('touchmove', draw);
            canvas.removeEventListener('touchend', stopDrawing);
            canvas.removeEventListener('touchcancel', stopDrawing);

            canvas.removeEventListener('click', handleCanvasClick);
        };
    }, [startDrawing, draw, stopDrawing, handleCanvasClick, canvasRef]);
    
    const addTextToCanvas = useCallback((text: string) => {
        textToDrawRef.current = {
            text,
            action: (x, y) => {
                drawingHistoryRef.current.push({
                    type: 'text',
                    text: text,
                    x: x,
                    y: y,
                    color: CHALK_COLOR,
                    fontSize: TEXT_FONT_SIZE,
                });
                redrawAll();
            }
        };
    }, [redrawAll]);

    const clearDrawing = useCallback(() => {
        drawingHistoryRef.current = [];
        redrawAll();
    }, [redrawAll]);

    const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let x = 0; x <= width; x += GRID_SPACING) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = 0; y <= height; y += GRID_SPACING) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        ctx.restore();
    };
    
    const drawSavedPath = (ctx: CanvasRenderingContext2D, path: Point[], color: string, thickness: number) => {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 1.5;
        ctx.shadowColor = color;

        if (path.length > 1) {
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for (let i = 1; i < path.length; i++) {
                ctx.lineTo(path[i].x, path[i].y);
            }
            ctx.stroke();
        }
        ctx.restore();
    };
    
    const drawLivePath = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string, thickness: number) => {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    };

    const drawCurriculum = (ctx: CanvasRenderingContext2D, content: CurriculumContent) => {
        const startX = 50;
        let startY = 100;
        const sectionLineHeight = LIST_ITEM_FONT_SIZE + 10;
        const subHeaderLineHeight = SUBHEADER_FONT_SIZE + 15;
        const headerLineHeight = HEADER_FONT_SIZE + 15;

        drawChalkText(ctx, content.title, startX, startY, CHALK_COLOR, HEADER_FONT_SIZE);
        startY += headerLineHeight + 20;

        if (content.type === 'session') {
            const sessionData = content.content as Session;
            drawChalkText(ctx, "Topics:", startX, startY, '#94a3b8', SUBHEADER_FONT_SIZE);
            startY += subHeaderLineHeight;
            sessionData.topics.forEach(topic => {
                drawChalkText(ctx, "• " + topic.name, startX + 20, startY, CHALK_COLOR, LIST_ITEM_FONT_SIZE);
                startY += sectionLineHeight;
            });
            startY += 20;
            drawChalkText(ctx, "Skills:", startX, startY, '#94a3b8', SUBHEADER_FONT_SIZE);
            startY += subHeaderLineHeight;
            sessionData.skills.forEach(skill => {
                drawChalkText(ctx, "• " + skill, startX + 20, startY, CHALK_COLOR, LIST_ITEM_FONT_SIZE);
                startY += sectionLineHeight;
            });
        } else if (content.type === 'examples') {
            const topicData = content.content as Topic;
            topicData.examples.forEach(example => {
                drawChalkText(ctx, example, startX, startY, CHALK_COLOR, LIST_ITEM_FONT_SIZE);
                startY += sectionLineHeight;
            });
        } else if (content.type === 'exercises') {
            const topicData = content.content as Topic;
            topicData.exercises.forEach(exercise => {
                drawChalkText(ctx, exercise, startX, startY, CHALK_COLOR, LIST_ITEM_FONT_SIZE);
                startY += sectionLineHeight;
            });
        }
    };
    
    return { clearDrawing, addTextToCanvas, drawingHistoryRef };
};
