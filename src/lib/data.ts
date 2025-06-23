
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  instructorBio: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  thumbnail: string;
  videoPreview: string;
  features: string[];
  curriculum: {
    module: string;
    lessons: string[];
  }[];
  enrolled: number;
  certificateIncluded: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor';
  enrolledCourses?: string[];
  createdCourses?: string[];
}

export interface Discussion {
  id: string;
  courseId: string;
  title: string;
  author: string;
  authorAvatar: string;
  content: string;
  replies: number;
  lastActivity: string;
  pinned?: boolean;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete React Development Bootcamp',
    description: 'Master React from basics to advanced concepts including hooks, context, and modern patterns. Build real-world applications and deploy them to production.',
    instructor: 'Sarah Johnson',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    instructorBio: 'Senior React Developer at Google with 8+ years of experience. Passionate about teaching and building scalable web applications.',
    price: 99,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 2847,
    duration: '40 hours',
    level: 'Intermediate',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop',
    videoPreview: 'https://example.com/preview1.mp4',
    features: [
      'Lifetime access',
      'Certificate of completion',
      'Source code included',
      '30-day money back guarantee'
    ],
    curriculum: [
      {
        module: 'React Fundamentals',
        lessons: ['Introduction to React', 'JSX and Components', 'Props and State', 'Event Handling']
      },
      {
        module: 'Advanced React',
        lessons: ['Hooks in Detail', 'Context API', 'Custom Hooks', 'Performance Optimization']
      },
      {
        module: 'Real World Projects',
        lessons: ['Todo App', 'E-commerce Dashboard', 'Social Media App', 'Deployment']
      }
    ],
    enrolled: 15420,
    certificateIncluded: true
  },
  {
    id: '2',
    title: 'Python for Data Science Masterclass',
    description: 'Learn Python programming and data science libraries including Pandas, NumPy, and Matplotlib. Perfect for beginners and career switchers.',
    instructor: 'Dr. Michael Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    instructorBio: 'PhD in Computer Science, Data Scientist at Microsoft. Author of 3 Python programming books.',
    price: 79,
    originalPrice: 149,
    rating: 4.9,
    reviewCount: 1923,
    duration: '35 hours',
    level: 'Beginner',
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=240&fit=crop',
    videoPreview: 'https://example.com/preview2.mp4',
    features: [
      'Interactive Jupyter notebooks',
      'Real datasets for practice',
      'Career guidance',
      'Community support'
    ],
    curriculum: [
      {
        module: 'Python Basics',
        lessons: ['Variables and Data Types', 'Control Structures', 'Functions', 'Object-Oriented Programming']
      },
      {
        module: 'Data Science Libraries',
        lessons: ['NumPy Fundamentals', 'Pandas for Data Analysis', 'Matplotlib Visualization', 'Seaborn Advanced Plots']
      }
    ],
    enrolled: 8934,
    certificateIncluded: true
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    description: 'Create beautiful and functional user interfaces. Learn design principles, prototyping, and user research methodologies.',
    instructor: 'Emma Rodriguez',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    instructorBio: 'Lead UX Designer at Adobe. 10+ years in digital design. Mentor at Design Academy.',
    price: 89,
    rating: 4.7,
    reviewCount: 1456,
    duration: '25 hours',
    level: 'Beginner',
    category: 'Design',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop',
    videoPreview: 'https://example.com/preview3.mp4',
    features: [
      'Design templates included',
      'Figma and Adobe XD tutorials',
      'Portfolio review',
      'Industry insights'
    ],
    curriculum: [
      {
        module: 'Design Principles',
        lessons: ['Color Theory', 'Typography', 'Layout and Composition', 'Visual Hierarchy']
      },
      {
        module: 'User Experience',
        lessons: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
      }
    ],
    enrolled: 5672,
    certificateIncluded: true
  },
  {
    id: '4',
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into JavaScript internals, async programming, and modern ES6+ features. Perfect for experienced developers.',
    instructor: 'Alex Thompson',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    instructorBio: 'Senior JavaScript Engineer at Netflix. Open source contributor and tech speaker.',
    price: 119,
    originalPrice: 229,
    rating: 4.9,
    reviewCount: 892,
    duration: '30 hours',
    level: 'Advanced',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=240&fit=crop',
    videoPreview: 'https://example.com/preview4.mp4',
    features: [
      'Advanced coding challenges',
      'Performance optimization tips',
      'Real-world case studies',
      'Expert code reviews'
    ],
    curriculum: [
      {
        module: 'JavaScript Internals',
        lessons: ['Execution Context', 'Closures', 'Prototypes', 'Event Loop']
      },
      {
        module: 'Async Programming',
        lessons: ['Promises', 'Async/Await', 'Error Handling', 'Generators']
      }
    ],
    enrolled: 3421,
    certificateIncluded: true
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
  role: 'student',
  enrolledCourses: ['1', '2']
};

export const mockDiscussions: Discussion[] = [
  {
    id: '1',
    courseId: '1',
    title: 'Best practices for React component structure?',
    author: 'Jane Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    content: 'I\'m wondering about the best ways to organize React components in a large application...',
    replies: 12,
    lastActivity: '2 hours ago',
    pinned: true
  },
  {
    id: '2',
    courseId: '1',
    title: 'Error with useEffect cleanup function',
    author: 'Mike Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Getting an error when trying to cleanup my useEffect. Here\'s my code...',
    replies: 5,
    lastActivity: '1 day ago'
  }
];

export const categories = [
  'All Categories',
  'Web Development',
  'Data Science',
  'Design',
  'Mobile Development',
  'DevOps',
  'Marketing',
  'Business'
];

export const levels = [
  'All Levels',
  'Beginner',
  'Intermediate',
  'Advanced'
];
