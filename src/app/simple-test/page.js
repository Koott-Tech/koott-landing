export default function SimpleTest() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-3xl mb-8">Simple Video Test</h1>
        
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-96 h-64 border border-white"
        >
          <source src="/bubbles.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="mt-8">
          <a href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
} 