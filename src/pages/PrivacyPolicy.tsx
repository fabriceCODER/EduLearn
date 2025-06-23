import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <Navbar />
    <div className="container mx-auto px-4 py-12 flex-1">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Your privacy is important to us. Read our privacy policy to learn how we handle your data and protect your information.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal information (name, email, etc.) provided during registration</li>
            <li>Course progress and activity data</li>
            <li>Usage data (device, browser, IP address)</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our services</li>
            <li>To communicate important updates</li>
            <li>To personalize your learning experience</li>
            <li>To ensure platform security</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, update, or delete your personal data</li>
            <li>Request a copy of your data</li>
            <li>Contact us for privacy-related questions: <a href="mailto:support@edulearn.com" className="text-blue-500 underline">support@edulearn.com</a></li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy; 