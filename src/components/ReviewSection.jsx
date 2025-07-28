"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Amazing experience! The Malayali therapist understood my cultural background perfectly. The comfort level was incredible and I felt truly understood.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Priya Menon",
    role: "Marketing Manager",
  },
  {
    text: "Professional and caring therapy sessions helped me overcome my anxiety. The cultural sensitivity made all the difference in my healing journey.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Rajesh Kumar",
    role: "Software Engineer",
  },
  {
    text: "Finally found therapists who speak my language. The comfort level is incredible and the sessions have been life-changing. Best decision ever!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Anjali Nair",
    role: "Teacher",
  },
  {
    text: "Excellent platform for mental wellness. The booking process was smooth and the sessions were very helpful. Highly recommend Koott!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Suresh Pillai",
    role: "Business Analyst",
  },
  {
    text: "Cultural sensitivity makes all the difference. My therapist truly understands my background and challenges. The support has been incredible.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Meera Thomas",
    role: "Healthcare Worker",
  },
  {
    text: "Professional, caring, and culturally aware. The best mental health platform I've ever used. The therapists are exceptional.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Vikram Singh",
    role: "Project Manager",
  },
  {
    text: "The online therapy experience was seamless and effective. Being able to connect with Malayali therapists from home is a game-changer.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Lakshmi Devi",
    role: "Student",
  },
  {
    text: "Outstanding support and understanding. The therapists here truly care about your mental well-being and cultural background.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Arun Nair",
    role: "Designer",
  },
  {
    text: "This platform has transformed my approach to mental health. The cultural understanding and professional care are unmatched.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    name: "Divya Rajan",
    role: "Entrepreneur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function ReviewSection() {
  	return (
		<section className="bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="container z-10 mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg bg-white/80 backdrop-blur-sm">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-gray-900">
            What our <span className="text-blue-600">clients say</span>
          </h2>
          <p className="text-center mt-5 opacity-75 text-gray-600">
            Real experiences from people who found healing and support through our platform.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
} 