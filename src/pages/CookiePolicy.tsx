import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CookiePolicy = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <Navbar />
    <div className="container mx-auto px-4 py-12 flex-1">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how we use cookies to enhance your experience on EduLearn. Read our cookie policy for more details.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>What Are Cookies?</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Cookies are small text files stored on your device to help us improve your experience and analyze site usage.
        </CardContent>
      </Card>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>How We Use Cookies</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>Remember your preferences and login state</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Personalize content and recommendations</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Your Choices</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>You can disable cookies in your browser settings</li>
            <li>Some features may not work properly if cookies are disabled</li>
            <li>Contact us for questions: <a href="mailto:support@edulearn.com" className="text-blue-500 underline">support@edulearn.com</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <Footer />
  </div>
);

export default CookiePolicy; 