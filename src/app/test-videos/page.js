export default function TestVideos() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-white text-3xl mb-8">Video Test Page</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-white text-xl mb-4">Bubbles Video</h2>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full max-w-md border border-white"
          >
            <source src="/bubbles.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Car Video</h2>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full max-w-md border border-white"
          >
            <source src="/car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Girl Video</h2>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full max-w-md border border-white"
          >
            <source src="/girl.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="mt-8">
        <a href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </a>
      </div>
    </div>
  )
} 