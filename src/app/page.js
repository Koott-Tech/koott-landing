'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getPublicVideoUrl, videoFiles } from '@/lib/videoUtils';
import DisplayCards from '@/components/ui/display-cards';
import ReviewSection from '@/components/ReviewSection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  const videoRef = useRef(null);
  const textSectionRef = useRef(null);
  const [videoUrls, setVideoUrls] = useState([]);
  const currentVideoIndex = useRef(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  const heroTexts = [
    "We got the #1 Malayali Psychologists for you!",
    "Experience therapy in your own language and culture!"
  ];

  const colors = ['#10B981', '#3B82F6', '#8B5CF6', '#EF4444', '#F59E0B', '#EC4899'];

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // After fade-out animation completes, hide the loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 500ms for fade-out animation
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Color animation for loading screen
  useEffect(() => {
    if (!isLoading) return;
    
    const colorTimer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500); // Change color every 500ms

    return () => clearInterval(colorTimer);
  }, [isLoading, colors.length]);

  // Scroll animation for text section
  useEffect(() => {
    if (!textSectionRef.current) return;

    const text = textSectionRef.current;
    const words = text.querySelectorAll('.word');
    
    // Set initial state - all words grey
    gsap.set(words, { color: '#6B7280' }); // grey-500

    // Create scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 90%", // Start when section is 90% in viewport
        end: "top 10%",   // End when section top reaches 10% of viewport (before leaving)
        scrub: 0.5,       // Smoother scrubbing
        onUpdate: (self) => {
          const progress = self.progress;
          const totalWords = words.length;
          
          words.forEach((word, index) => {
            const wordProgress = (index / totalWords);
            if (progress >= wordProgress) {
              gsap.to(word, {
                color: '#000000', // black
                duration: 0.2,
                ease: "power2.out"
              });
            }
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Load video URLs from Supabase
  useEffect(() => {
    const loadVideoUrls = () => {
      const urls = videoFiles.map(file => getPublicVideoUrl(file)).filter(url => url);
      setVideoUrls(urls);
    };
    
    loadVideoUrls();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoUrls.length === 0) return;

    const playNextVideo = () => {
      const nextIndex = (currentVideoIndex.current + 1) % videoUrls.length;
      
      // Update current video directly
      video.src = videoUrls[nextIndex];
      video.load();
      video.play().catch(e => console.log('Video play failed:', e));
      
      currentVideoIndex.current = nextIndex;
    };

    video.addEventListener('ended', playNextVideo);
    
    // Start with first video
    if (videoUrls.length > 0) {
      video.src = videoUrls[0];
      video.load();
      video.play().catch(e => console.log('Video play failed:', e));
    }

    return () => {
      video.removeEventListener('ended', playNextVideo);
    };
  }, [videoUrls]);

  // Text animation effect - word by word fade-in-up
  useEffect(() => {
    const typeText = async () => {
      const currentText = heroTexts[currentTextIndex];
      setIsTyping(true);
      setDisplayedWords([]);
      
      const words = currentText.split(' ');
      
      for (let i = 0; i < words.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 200)); // 200ms delay between words
        setDisplayedWords(prev => [...prev, { word: words[i], id: i }]);
      }
      
      setIsTyping(false);
      
      // Wait 2 seconds before starting next text
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
      }, 2000);
    };

    typeText();
  }, [currentTextIndex]);

  return (
    <main className="min-h-screen">
      {/* Loading Screen */}
      {isLoading && (
        <div 
          className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
            isFadingOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h1 
            className="text-8xl font-bold mb-4 transition-colors duration-500"
            style={{ color: colors[colorIndex] }}
          >
            Koott
          </h1>
          <p 
            className="text-lg transition-colors duration-500"
            style={{ color: colors[colorIndex] }}
          >
            Mental Wellness Platform
          </p>
        </div>
      )}

      {/* Sequential Video Background */}
      <section className="h-screen w-full relative overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
        </video>

        {/* Company Name */}
        <div className="absolute top-8 left-8 z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-[15px] px-6 py-4 shadow-2xl shadow-black/50">
            <h1 className="text-white font-bold text-xl">Koott</h1>
          </div>
        </div>

                {/* Glassy Navbar */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-[15px] px-8 py-4 shadow-2xl shadow-black/50">
            <div className="flex items-center space-x-8">
              <a 
                href="/booking" 
                className="text-black font-bold hover:text-gray-800 transition-colors"
              >
                Book
              </a>
              <a 
                href="/about" 
                className="text-black font-bold hover:text-gray-800 transition-colors"
              >
                About
          </a>
          <a
                href="/contact" 
                className="text-black font-bold hover:text-gray-800 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="absolute top-8 right-8 z-10">
          <a 
            href="/booking" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-[15px] shadow-2xl shadow-black/50 transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Hero Text - Left */}
        <div className="absolute top-1/3 left-8 z-10">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
            Hey, How are you?
          </h1>
          <p className="text-white text-2xl md:text-4xl font-semibold">
            {displayedWords.map((wordObj, index) => (
              <span
                key={wordObj.id}
                className="inline-block animate-fadeInUp mr-2"
                style={{
                  animationDelay: `${wordObj.id * 200}ms`,
                  animationDuration: '0.3s',
                  animationFillMode: 'both'
                }}
              >
                {wordObj.word}
              </span>
            ))}
          </p>
        </div>

        {/* Glassy Div - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-[15px] px-8 py-6 shadow-2xl shadow-black/50">
            <div className="text-center">
              <h3 className="text-white font-bold text-xl mb-4">
                Regional Language Based Therapy
              </h3>
              <p className="text-white text-sm mb-6 max-w-xs">
                Connect with therapists who speak your regional language for better understanding and comfort.
              </p>
              <a 
                href="/booking" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-colors inline-block"
              >
                Find Therapist
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* About Our Platform Section */}
      <section className="h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl" ref={textSectionRef}>
            <p className="text-4xl md:text-6xl font-bold leading-tight">
              {(() => {
                const text = "Koott is a revolutionary online mental wellness platform connecting you with the finest Malayali psychologists. We believe that mental health support should be accessible.";
                return text.split(' ').map((word, index) => (
                  <span key={index} className="word inline-block mr-2">
                    {word}
                  </span>
                ));
              })()}
            </p>
          </div>
        </div>
      </section>



      {/* Gallery Section - Success Stories */}
      <section className="h-screen w-full bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {/* First set of cards */}
            <div className="flex space-x-4 px-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Couples therapy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-full"></div>
                  <h3 className="text-2xl font-bold mb-2">Couples Therapy</h3>
                  <p className="text-white/90">Strengthen your relationship with expert guidance</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Individual counseling session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Individual Therapy</h3>
                  <p className="text-white/90">Personal growth and self-discovery journey</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Student therapy and counseling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Child Therapy</h3>
                  <p className="text-white/90">Nurturing young minds with care and expertise</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Family therapy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Grief Counseling</h3>
                  <p className="text-white/90">Healing through loss with compassionate support</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Group therapy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Depression Treatment</h3>
                  <p className="text-white/90">Professional help for overcoming depression</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Mental health counseling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Anxiety Therapy</h3>
                  <p className="text-white/90">Find peace and calm in your daily life</p>
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-4">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Couples therapy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-full"></div>
                  <h3 className="text-2xl font-bold mb-2">Couples Therapy</h3>
                  <p className="text-white/90">Strengthen your relationship with expert guidance</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Individual counseling session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Individual Therapy</h3>
                  <p className="text-white/90">Personal growth and self-discovery journey</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Student therapy and counseling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Child Therapy</h3>
                  <p className="text-white/90">Nurturing young minds with care and expertise</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Family therapy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Grief Counseling</h3>
                  <p className="text-white/90">Healing through loss with compassionate support</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Group therapy session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Depression Treatment</h3>
                  <p className="text-white/90">Professional help for overcoming depression</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-[28rem] h-[80vh]">
                <img 
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Mental health counseling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="h-0.5 bg-white mb-3 w-[calc(100%-1.5rem)]"></div>
                  <h3 className="text-2xl font-bold mb-2">Anxiety Therapy</h3>
                  <p className="text-white/90">Find peace and calm in your daily life</p>
                </div>
              </div>
            </div>
          </div>
    </div>
      </section>

      {/* Fourth Section - Display Cards */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center py-20">
        <div className="w-full max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-green-600">Koott</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our comprehensive mental wellness platform designed specifically for the Malayali community.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <DisplayCards />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Review Section */}
      <ReviewSection />

      {/* Sixth Section - FAQ Section */}
      <FAQSection />
      
      {/* Seventh Section - Pricing Section */}
      <PricingSection />
      
      {/* Eighth Section - Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection />
    </main>
  )
}
