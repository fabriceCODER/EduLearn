import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Browse our Courses page, select a course, and click the Enroll button. You'll need to create an account or log in.'
  },
  {
    question: 'How do I get my certificate?',
    answer: 'After completing all course requirements, your certificate will be available for download on your dashboard.'
  },
  {
    question: 'Can I access courses on mobile?',
    answer: 'Yes! EduLearn is fully responsive and works on all devices.'
  },
  {
    question: 'How do I contact support?',
    answer: 'Use the contact form on our Contact page or email support@edulearn.com.'
  }
];

const HelpCenter = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <Navbar />
    <div className="container mx-auto px-4 py-12 flex-1">
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Find answers to frequently asked questions or contact our support team for assistance.
        </p>
      </div>
      <div className="grid gap-8 max-w-2xl mx-auto mb-12">
        {faqs.map((faq, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{faq.question}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{faq.answer}</CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <p className="mb-4 text-muted-foreground">Didn't find what you're looking for?</p>
        <Button asChild>
          <a href="/contact">Contact Support</a>
        </Button>
      </div>
    </div>
    <Footer />
  </div>
);

export default HelpCenter; 