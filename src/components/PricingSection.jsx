"use client";

import React from 'react';
import { PricingSection as PricingSectionComponent } from '@/components/ui/pricing';

const PLANS = [
	{
		id: 'basic',
		name: 'Basic',
		info: 'For individuals starting therapy',
		price: {
			individual: 999,
			package: Math.round(999 * 12 * (1 - 0.15)),
		},
		features: [
			{ text: '1 therapy session per month' },
			{ text: 'Access to Malayali therapists' },
			{ text: 'Basic mental health resources' },
			{
				text: 'Email support',
				tooltip: 'Get support via email within 24 hours',
			},
			{
				text: 'Session recordings',
				tooltip: 'Access to your session recordings for 30 days',
			},
			{
				text: 'Progress tracking',
				tooltip: 'Basic progress tracking and insights',
			},
		],
		btn: {
			text: 'Start Basic Plan',
			href: '/booking',
		},
	},
	{
		highlighted: true,
		id: 'pro',
		name: 'Professional',
		info: 'For regular therapy needs',
		price: {
			individual: 2499,
			package: Math.round(2499 * 12 * (1 - 0.15)),
		},
		features: [
			{ text: '4 therapy sessions per month' },
			{ text: 'Priority access to top therapists' },
			{ text: 'Comprehensive mental health resources' },
			{
				text: 'Unlimited session recordings',
				tooltip: 'Access to all your session recordings',
			},
			{ text: 'Crisis support hotline' },
			{ text: 'Priority support', tooltip: 'Get 24/7 chat support' },
			{
				text: 'Advanced progress tracking',
				tooltip: 'Detailed progress reports and insights',
			},
			{ text: 'Family therapy sessions' },
		],
		btn: {
			text: 'Get Professional Plan',
			href: '/booking',
		},
	},
	{
		name: 'Premium',
		info: 'For comprehensive mental wellness',
		price: {
			individual: 4999,
			package: Math.round(4999 * 12 * (1 - 0.15)),
		},
		features: [
			{ text: 'Unlimited therapy sessions' },
			{ text: 'Exclusive access to senior therapists' },
			{ text: 'Premium mental health resources' },
			{ text: 'Unlimited session recordings' },
			{
				text: 'Advanced crisis support',
				tooltip: '24/7 crisis intervention and support',
			},
			{ text: 'Dedicated care coordinator' },
			{
				text: 'Comprehensive assessments',
				tooltip: 'Detailed psychological assessments and reports',
			},
			{ text: 'Group therapy sessions' },
			{ text: 'Couples and family therapy' },
			{ text: 'Meditation and wellness programs' },
		],
		btn: {
			text: 'Contact for Premium',
			href: '/contact',
		},
	},
];

export default function PricingSection() {
	return (
		<section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-20">
			<div className="w-full max-w-7xl px-4">
				<PricingSectionComponent
					plans={PLANS}
					heading="Choose Your Wellness Journey"
					description="Flexible therapy plans designed to support your mental health journey. Start with what works for you and scale as you grow."
				/>
			</div>
		</section>
	);
} 