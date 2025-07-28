"use client";

import React from 'react';
import { Contact2 } from '@/components/ui/contact-2';

export default function ContactSection() {
	return (
		<section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-20">
			<div className="w-full max-w-7xl px-4">
				<Contact2 
					title="Get in Touch"
					description="Ready to start your mental wellness journey? We're here to support you every step of the way. Contact us for questions, bookings, or to learn more about our services. Get help from a Koott expert to find the right therapist for your situation."
					phone="+91 98765 43210"
					email="hello@koott.com"
					web={{ label: "koott.com", url: "https://koott.com" }}
				/>
			</div>
		</section>
	);
} 