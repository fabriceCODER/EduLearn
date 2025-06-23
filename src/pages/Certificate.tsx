
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Share2, Award, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockCourses, mockUser } from '@/lib/data';

const Certificate = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = mockCourses.find(c => c.id === courseId);
  const completionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-yellow-500" />
            <h1 className="text-3xl font-bold">Certificate of Completion</h1>
          </div>
          <p className="text-muted-foreground">
            Congratulations on completing your course!
          </p>
        </div>

        {/* Certificate */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-primary/20">
            <CardContent className="p-0">
              {/* Certificate Border Design */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-lg"></div>
                <div className="relative bg-white dark:bg-gray-800 p-12 rounded-lg border-2 border-primary/30">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-edu-gradient flex items-center justify-center">
                        <span className="text-white font-bold text-lg">E</span>
                      </div>
                      <span className="text-3xl font-bold bg-edu-gradient bg-clip-text text-transparent">
                        EduLearn
                      </span>
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-gray-800 dark:text-white mb-2">
                      Certificate of Completion
                    </h2>
                    <div className="w-24 h-1 bg-edu-gradient mx-auto"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      This is to certify that
                    </p>
                    
                    <div className="py-4">
                      <h3 className="text-4xl font-serif font-bold text-gray-800 dark:text-white border-b-2 border-primary/30 pb-2 inline-block">
                        {mockUser.name}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      has successfully completed the course
                    </p>
                    
                    <div className="py-4">
                      <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        "{course.title}"
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        instructed by {course.instructor}
                      </p>
                    </div>
                    
                    <div className="flex justify-center items-center gap-8 pt-6">
                      <div className="text-center">
                        <div className="flex items-center gap-2 justify-center mb-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="font-semibold">Completion Date</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{completionDate}</p>
                      </div>
                      
                      <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                      
                      <div className="text-center">
                        <div className="flex items-center gap-2 justify-center mb-2">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="font-semibold">Course Duration</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{course.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Signature Section */}
                  <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="w-32 h-px bg-gray-400 mb-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Instructor Signature</p>
                      <p className="text-sm font-medium">{course.instructor}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Certificate ID: EDU{course.id}2024</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-32 h-px bg-gray-400 mb-2"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Platform</p>
                      <p className="text-sm font-medium">EduLearn</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Certificate
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share Certificate
            </Button>
          </div>
          
          <div className="pt-4">
            <Link to="/student-dashboard">
              <Button variant="ghost">Back to Dashboard</Button>
            </Link>
          </div>
        </div>

        {/* Verification Info */}
        <Card className="max-w-2xl mx-auto mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Certificate Verification</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This certificate can be verified using the certificate ID: <strong>EDU{course.id}2024</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              Visit our verification portal to confirm the authenticity of this certificate.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Certificate;
