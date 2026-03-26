import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../components/theme/ThemeContext';
import { createPageUrl } from '@/utils';

const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const GROUND_Y = 280;
const OBSTACLE_SPEED = 6;

export default function NotFound() {
  const { isDark, colors } = useTheme();
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle'); // idle, playing, gameover
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const playerRef = useRef({ y: GROUND_Y, velocity: 0, isJumping: false });
  const obstaclesRef = useRef([]);
  const frameRef = useRef(0);
  const animationRef = useRef(null);

  const jump = useCallback(() => {
    if (gameState === 'idle') {
      setGameState('playing');
      setScore(0);
      playerRef.current = { y: GROUND_Y, velocity: 0, isJumping: false };
      obstaclesRef.current = [];
    }
    
    if (gameState === 'gameover') {
      setGameState('playing');
      setScore(0);
      playerRef.current = { y: GROUND_Y, velocity: 0, isJumping: false };
      obstaclesRef.current = [];
    }

    if (!playerRef.current.isJumping && gameState === 'playing') {
      playerRef.current.velocity = JUMP_FORCE;
      playerRef.current.isJumping = true;
    }
  }, [gameState]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const gameLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw ground
      ctx.fillStyle = isDark ? '#374151' : '#E5E7EB';
      ctx.fillRect(0, GROUND_Y + 40, width, 2);

      // Draw ground pattern
      ctx.strokeStyle = isDark ? '#4B5563' : '#D1D5DB';
      for (let i = frameRef.current % 20; i < width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, GROUND_Y + 44);
        ctx.lineTo(i + 10, GROUND_Y + 44);
        ctx.stroke();
      }

      if (gameState === 'playing') {
        // Update player
        playerRef.current.velocity += GRAVITY;
        playerRef.current.y += playerRef.current.velocity;

        if (playerRef.current.y >= GROUND_Y) {
          playerRef.current.y = GROUND_Y;
          playerRef.current.velocity = 0;
          playerRef.current.isJumping = false;
        }

        // Spawn obstacles
        if (frameRef.current % 100 === 0) {
          obstaclesRef.current.push({
            x: width,
            width: 20 + Math.random() * 20,
            height: 30 + Math.random() * 30
          });
        }

        // Update obstacles
        obstaclesRef.current = obstaclesRef.current.filter(obs => {
          obs.x -= OBSTACLE_SPEED;
          return obs.x > -50;
        });

        // Check collisions
        const playerBox = {
          x: 50,
          y: playerRef.current.y,
          width: 30,
          height: 40
        };

        for (const obs of obstaclesRef.current) {
          const obsBox = {
            x: obs.x,
            y: GROUND_Y + 40 - obs.height,
            width: obs.width,
            height: obs.height
          };

          if (
            playerBox.x < obsBox.x + obsBox.width &&
            playerBox.x + playerBox.width > obsBox.x &&
            playerBox.y < obsBox.y + obsBox.height &&
            playerBox.y + playerBox.height > obsBox.y
          ) {
            setGameState('gameover');
            setHighScore(prev => Math.max(prev, score));
          }
        }

        // Update score
        if (frameRef.current % 10 === 0) {
          setScore(prev => prev + 1);
        }

        frameRef.current++;
      }

      // Draw player (simple character)
      const py = playerRef.current.y;
      ctx.fillStyle = colors.secondary;
      
      // Body
      ctx.beginPath();
      ctx.roundRect(50, py, 30, 35, 5);
      ctx.fill();
      
      // Head
      ctx.beginPath();
      ctx.arc(65, py - 8, 12, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(61, py - 10, 3, 0, Math.PI * 2);
      ctx.arc(69, py - 10, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = isDark ? '#1F2937' : '#374151';
      ctx.beginPath();
      ctx.arc(62, py - 10, 1.5, 0, Math.PI * 2);
      ctx.arc(70, py - 10, 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Legs (animated)
      ctx.fillStyle = colors.secondary;
      if (playerRef.current.isJumping) {
        ctx.fillRect(52, py + 35, 10, 8);
        ctx.fillRect(68, py + 35, 10, 8);
      } else {
        const legOffset = Math.sin(frameRef.current * 0.3) * 3;
        ctx.fillRect(52, py + 35 + legOffset, 10, 8);
        ctx.fillRect(68, py + 35 - legOffset, 10, 8);
      }

      // Draw obstacles (cacti-like)
      ctx.fillStyle = isDark ? '#EF4444' : '#DC2626';
      for (const obs of obstaclesRef.current) {
        ctx.beginPath();
        ctx.roundRect(obs.x, GROUND_Y + 40 - obs.height, obs.width, obs.height, 3);
        ctx.fill();
        
        // Spikes
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const sx = obs.x + obs.width / 2 + (i - 1) * 8;
          ctx.moveTo(sx, GROUND_Y + 40 - obs.height - 5);
          ctx.lineTo(sx - 3, GROUND_Y + 40 - obs.height);
          ctx.lineTo(sx + 3, GROUND_Y + 40 - obs.height);
        }
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameState, isDark, colors, score]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${
      isDark ? 'bg-gray-950' : 'bg-white'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 
          className="text-8xl font-bold mb-4"
          style={{ color: colors.secondary }}
        >
          404
        </h1>
        <h2 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          You seem lost. Jump your way back home!
        </h2>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Press Space or tap to jump over obstacles
        </p>
      </motion.div>

      {/* Game Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className={`relative rounded-2xl overflow-hidden ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}
        onClick={jump}
      >
        <canvas
          ref={canvasRef}
          width={600}
          height={350}
          className="cursor-pointer"
          style={{ maxWidth: '100%' }}
        />

        {/* Score Display */}
        <div className="absolute top-4 right-4 text-right">
          <div 
            className="text-3xl font-bold"
            style={{ color: colors.secondary }}
          >
            {score}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            High: {highScore}
          </div>
        </div>

        {/* Game Over Overlay */}
        {gameState === 'gameover' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/50"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Game Over!</h3>
            <p className="text-white/80 mb-4">Score: {score}</p>
            <Button
              onClick={jump}
              variant="outline"
              className="bg-white text-gray-900"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Play Again
            </Button>
          </motion.div>
        )}

        {/* Start Overlay */}
        {gameState === 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/30"
          >
            <p className="text-white text-lg font-medium mb-4">
              Tap or Press Space to Start
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Link to={createPageUrl('Home')}>
          <Button
            size="lg"
            className="rounded-full text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
            }}
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}