
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, User, Star } from 'lucide-react';
import { Course } from '@/lib/data';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white">
            {course.level}
          </Badge>
          {course.originalPrice && (
            <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
              Save {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="px-2 py-1 bg-edu-blue-50 text-edu-blue-700 rounded-md text-xs font-medium">
              {course.category}
            </span>
          </div>
          
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <img
              src={course.instructorAvatar}
              alt={course.instructor}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm text-muted-foreground">{course.instructor}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{course.enrolled.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
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
            <span className="text-sm font-medium">{course.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({course.reviewCount.toLocaleString()})
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${course.price}</span>
              {course.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${course.originalPrice}
                </span>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
