'use client';

import { useEffect, useRef } from 'react';

export default function VideoTest() {
  const videoRef = useRef(null);

  useEffect(() => {
    console.log('Video ref:', videoRef.current);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video play failed:', e));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-3xl mb-8">Simple Video Test</h1>
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-96 h-64 border border-white"
          onLoadStart={() => console.log('Video loading...')}
          onCanPlay={() => console.log('Video can play')}
          onPlay={() => console.log('Video started playing')}
          onError={(e) => console.log('Video error:', e)}
        >
          <source src="/bubbles.mp4" type="video/mp4" />
        </video>
        
        <div className="mt-4">
          <button 
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play().catch(e => console.log('Manual play failed:', e));
              }
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-4"
          >
            Play
          </button>
          <button 
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.pause();
              }
            }}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Pause
          </button>
        </div>
        
        <div className="mt-4">
          <a href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
} 