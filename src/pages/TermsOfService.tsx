import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TermsOfService = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <Navbar />
    <div className="container mx-auto px-4 py-12 flex-1">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Please review our terms of service to understand your rights and responsibilities when using EduLearn.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          By accessing or using EduLearn, you agree to be bound by these terms. If you do not agree, please do not use our platform.
        </CardContent>
      </Card>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>User Responsibilities</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information during registration</li>
            <li>Respect intellectual property and copyright laws</li>
            <li>Do not share your account credentials</li>
            <li>Use the platform for lawful purposes only</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Modifications & Termination</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          EduLearn reserves the right to modify these terms or terminate accounts for violations. We will notify users of significant changes.
        </CardContent>
      </Card>
    </div>
    <Footer />
  </div>
);

export default TermsOfService; 