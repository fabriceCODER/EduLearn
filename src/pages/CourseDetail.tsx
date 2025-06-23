
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Clock, 
  User, 
  CheckCircle, 
  Play, 
  Download,
  BookOpen,
  Award,
  Globe,
  Smartphone
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockCourses } from '@/lib/data';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(c => c.id === id);

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

  const features = [
    { icon: Clock, text: `${course.duration} of video content` },
    { icon: Download, text: 'Downloadable resources' },
    { icon: Globe, text: 'Access on web and mobile' },
    { icon: Award, text: 'Certificate of completion' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="mb-2">{course.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.description}</p>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-300">({course.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{course.enrolled.toLocaleString()} students</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-300">Created by</p>
                  <p className="font-medium text-lg">{course.instructor}</p>
                </div>
              </div>
            </div>
            
            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="lg"
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    <Play className="w-6 h-6 text-white fill-white" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full mb-4" size="lg">
                    Enroll Now
                  </Button>
                  
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <feature.icon className="w-4 h-4 text-muted-foreground" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What you'll learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Course Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {course.description} This comprehensive course is designed to take you from beginner to advanced level, 
                        providing you with practical skills and real-world projects that you can add to your portfolio. 
                        You'll learn industry best practices and modern techniques that are currently being used by 
                        top companies worldwide.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="curriculum" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Content</CardTitle>
                      <p className="text-muted-foreground">
                        {course.curriculum.length} modules • {course.duration} total length
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {course.curriculum.map((module, index) => (
                          <AccordionItem key={index} value={`module-${index}`}>
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>{module.module}</span>
                                <Badge variant="secondary">{module.lessons.length} lessons</Badge>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pl-6">
                                {module.lessons.map((lesson, lessonIndex) => (
                                  <div key={lessonIndex} className="flex items-center gap-2 py-1">
                                    <Play className="w-3 h-3 text-muted-foreground" />
                                    <span className="text-sm">{lesson}</span>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={course.instructorAvatar}
                          alt={course.instructor}
                          className="w-20 h-20 rounded-full"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{course.instructor}</h3>
                          <p className="text-muted-foreground mb-4">{course.instructorBio}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>4.9 Instructor Rating</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>50,000+ Students</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Course Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Skill Level</span>
                    <Badge>{course.level}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certificate</span>
                    <span>{course.certificateIncluded ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span>{course.category}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Student Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold">{course.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {course.reviewCount.toLocaleString()} reviews
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
