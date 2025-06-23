import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Have questions or need support? Reach out to us and we'll get back to you as soon as possible.
          </p>
          <p className="text-muted-foreground mb-2">
            Or email us directly at <a href="mailto:support@edulearn.com" className="text-blue-500 underline">support@edulearn.com</a>
          </p>
        </div>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-green-600 font-medium text-center py-8">Thank you for contacting us! We'll respond soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <Input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help you?" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 