
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  MessageCircle, 
  Plus, 
  Pin, 
  ThumbsUp, 
  Reply,
  Search,
  Filter
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mockCourses, mockDiscussions } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

const Discussion = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: ''
  });
  const { toast } = useToast();

  const course = mockCourses.find(c => c.id === courseId);
  const discussions = mockDiscussions.filter(d => d.courseId === courseId);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Discussion Created!",
      description: "Your discussion post has been created successfully.",
    });
    setIsCreateDialogOpen(false);
    setNewPost({ title: '', content: '' });
  };

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
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link to="/courses" className="hover:text-primary">Courses</Link>
            <span>/</span>
            <Link to={`/course/${course.id}`} className="hover:text-primary">{course.title}</Link>
            <span>/</span>
            <span>Discussion</span>
          </div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Course Discussion</h1>
              <p className="text-muted-foreground">{course.title}</p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Discussion
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start a New Discussion</DialogTitle>
                  <DialogDescription>
                    Ask a question or start a discussion with your fellow students.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      placeholder="Enter discussion title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      placeholder="Write your discussion content..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Create Discussion</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search discussions..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Course Info Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-2">by {course.instructor}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{course.enrolled.toLocaleString()} students</span>
                  <span>{discussions.length} discussions</span>
                </div>
              </div>
              <div className="text-right">
                <Link to={`/course/${course.id}`}>
                  <Button variant="outline">View Course</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Discussion List */}
        <div className="space-y-4">
          {discussions.length > 0 ? (
            discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={discussion.authorAvatar}
                      alt={discussion.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{discussion.title}</h3>
                          {discussion.pinned && (
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <Pin className="w-3 h-3" />
                              Pinned
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{discussion.lastActivity}</span>
                      </div>
                      <p className="text-muted-foreground mb-3 line-clamp-2">{discussion.content}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>by {discussion.author}</span>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Reply className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">No discussions yet</h3>
                <p className="text-muted-foreground mb-4">
                  Be the first to start a discussion in this course!
                </p>
                <Button onClick={() => setIsCreateDialogOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Discussion;
