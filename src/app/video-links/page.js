export default function VideoLinks() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-white text-3xl mb-8">Video File Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-white text-xl mb-2">Direct Video Links:</h2>
          <div className="space-y-2">
            <a 
              href="/bubbles.mp4" 
              target="_blank" 
              className="block text-blue-400 hover:text-blue-300"
            >
              Bubbles Video (4.7MB)
            </a>
            <a 
              href="/girl.mp4" 
              target="_blank" 
              className="block text-blue-400 hover:text-blue-300"
            >
              Girl Video (11MB)
            </a>
            <a 
              href="/car.mp4" 
              target="_blank" 
              className="block text-blue-400 hover:text-blue-300"
            >
              Car Video (125MB)
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-white text-xl mb-4">Video Elements:</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white mb-2">Bubbles Video:</h3>
              <video
                controls
                className="w-64 h-48 border border-white"
              >
                <source src="/bubbles.mp4" type="video/mp4" />
                Bubbles video not supported
              </video>
            </div>
            
            <div>
              <h3 className="text-white mb-2">Girl Video:</h3>
              <video
                controls
                className="w-64 h-48 border border-white"
              >
                <source src="/girl.mp4" type="video/mp4" />
                Girl video not supported
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </a>
      </div>
    </div>
  );
} 