
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp,
  Play,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockCourses, mockUser } from '@/lib/data';

const StudentDashboard = () => {
  const enrolledCourses = mockCourses.filter(course => 
    mockUser.enrolledCourses?.includes(course.id)
  );

  const completedCourses = 1; // Mock data
  const totalHoursLearned = 85; // Mock data
  const certificatesEarned = 1; // Mock data

  const recentActivity = [
    {
      id: 1,
      type: 'course_progress',
      course: 'Complete React Development Bootcamp',
      description: 'Completed module: React Fundamentals',
      time: '2 hours ago',
      progress: 75
    },
    {
      id: 2,
      type: 'certificate',
      course: 'Python for Data Science Masterclass',
      description: 'Earned certificate of completion',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'enrollment',
      course: 'Complete React Development Bootcamp',
      description: 'Enrolled in new course',
      time: '3 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {mockUser.name}!</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
              <p className="text-xs text-muted-foreground">
                Active learning paths
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedCourses}</div>
              <p className="text-xs text-muted-foreground">
                Courses finished
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalHoursLearned}</div>
              <p className="text-xs text-muted-foreground">
                Total time invested
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{certificatesEarned}</div>
              <p className="text-xs text-muted-foreground">
                Achievements earned
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          by {course.instructor}
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <Badge variant="secondary">{course.level}</Badge>
                          <div className="flex gap-2">
                            <Link to={`/course/${course.id}`}>
                              <Button variant="outline" size="sm">
                                View Course
                              </Button>
                            </Link>
                            <Button size="sm">
                              <Play className="w-4 h-4 mr-1" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Browse More Courses */}
              <Card className="border-dashed border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Explore More Courses</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover new skills and advance your career
                  </p>
                  <Link to="/courses">
                    <Button>Browse Courses</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">12</div>
                    <p className="text-muted-foreground">days in a row</p>
                    <div className="mt-4 flex justify-center gap-1">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded flex items-center justify-center text-xs ${
                            i < 5 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Goal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Study Time Goal</span>
                      <span className="font-medium">8h / 10h</span>
                    </div>
                    <Progress value={80} />
                    <p className="text-sm text-muted-foreground">
                      Great job! You're 80% towards your weekly goal.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="flex items-center gap-4">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={course.id === '1' ? 75 : 45} className="flex-1" />
                            <span className="text-sm text-muted-foreground">
                              {course.id === '1' ? '75%' : '45%'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {activity.type === 'course_progress' && <TrendingUp className="w-5 h-5 text-primary" />}
                        {activity.type === 'certificate' && <Trophy className="w-5 h-5 text-yellow-500" />}
                        {activity.type === 'enrollment' && <BookOpen className="w-5 h-5 text-blue-500" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{activity.course}</h4>
                        <p className="text-muted-foreground">{activity.description}</p>
                        <p className="text-sm text-muted-foreground mt-1">{activity.time}</p>
                        {activity.progress && (
                          <div className="mt-2">
                            <Progress value={activity.progress} className="h-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
