import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Star, User, BookOpen, Award } from 'lucide-react';
import { mockCourses } from '@/lib/data';

const team = Array.from(
  new Map(mockCourses.map(c => [c.instructor, {
    name: c.instructor,
    avatar: c.instructorAvatar,
    bio: c.instructorBio
  }])).values()
);

const stats = [
  { label: 'Students', value: '50K+' },
  { label: 'Courses', value: '1K+' },
  { label: 'Instructors', value: '200+' },
  { label: 'Success Rate', value: '95%' },
];

const AboutUs = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <Navbar />
    <div className="container mx-auto px-4 py-12 flex-1">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduLearn</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Empowering learners worldwide with high-quality online courses. Our mission is to make education accessible, engaging, and effective for everyone.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
        {stats.map(stat => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="mb-16">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              We believe in lifelong learning and strive to provide the best resources for personal and professional growth.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Expert-led courses across diverse fields</li>
              <li>Personalized dashboards for students and instructors</li>
              <li>Verified certificates upon completion</li>
              <li>Community-driven discussions and support</li>
              <li>Modern, accessible, and mobile-friendly design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map(member => (
            <Card key={member.name} className="flex flex-col items-center text-center p-6">
              <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <CardTitle className="mb-1 text-lg">{member.name}</CardTitle>
              <CardDescription className="mb-2">Instructor</CardDescription>
              <CardContent className="p-0 text-muted-foreground text-sm">{member.bio}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutUs; 