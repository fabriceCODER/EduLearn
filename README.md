# EduLearn

A modern, professional online learning platform built with React, TypeScript, shadcn-ui, Tailwind CSS, and Supabase. EduLearn empowers learners and instructors with a robust, scalable, and beautiful web application for online education.

## Features

- 🧑‍🏫 **Expert-Led Courses**: Browse and enroll in a wide variety of courses taught by industry professionals.
- 📈 **Student & Instructor Dashboards**: Personalized dashboards for students and instructors to track progress, manage courses, and view analytics.
- 🏆 **Certificates**: Earn verified certificates upon course completion.
- 💬 **Community Discussions**: Engage with other learners and instructors through course-specific discussion forums.
- 🔒 **Authentication**: Secure sign up, login, and password reset powered by Supabase Auth.
- 🎨 **Responsive UI**: Beautiful, accessible, and responsive design using shadcn-ui and Tailwind CSS.
- 🌗 **Dark Mode**: Seamless light/dark theme switching.
- 📱 **Mobile Friendly**: Optimized for all devices.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [shadcn-ui](https://ui.shadcn.com/) (UI components)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [Supabase](https://supabase.com/) (auth & database)
- [React Router](https://reactrouter.com/) (routing)
- [Radix UI](https://www.radix-ui.com/) (accessible primitives)
- [Framer Motion](https://www.framer.com/motion/) (animations)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Configure your Supabase credentials in `src/integrations/supabase/client.ts` if you wish to use your own project.

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:8080](http://localhost:8080).

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## Folder Structure

```
next-learn-universe/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── contexts/          # React context providers (e.g., Auth)
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # Supabase client and types
│   ├── lib/               # Utilities and mock data
│   ├── pages/             # Main app pages (Course, Dashboard, etc.)
│   └── App.tsx            # App entry point
├── supabase/              # Supabase config and migrations
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.ts     # Tailwind CSS config
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes, improvements, or new features. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
