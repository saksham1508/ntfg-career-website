# 🚀 NextTechFusionGadgets Career Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, full-stack career website built with Next.js 14, TypeScript, and MongoDB. This platform allows users to browse job opportunities, apply for positions, and manage their applications with a beautiful, responsive interface.

## 🌟 Live Demo

🔗 **Repository**: [https://github.com/saksham1508/ntfg-career-website](https://github.com/saksham1508/ntfg-career-website)

## 📸 Screenshots

### 🏠 Home Page
- Modern hero section with call-to-action
- Featured job categories
- Company values and mission

### 💼 Jobs Listing
- Search and filter functionality
- Responsive job cards
- Pagination support

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected routes

## Features

### 🎯 Core Features
- **Job Listings**: Browse and search through available positions
- **Job Categories**: Organized by departments (AI, DevOps, Full Stack, Mobile, etc.)
- **User Authentication**: Register and login system
- **Job Applications**: Apply for positions with cover letters and resumes
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Admin Panel**: Manage job postings and applications (for admin users)

### 🚀 Technology Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens
- **UI/UX**: Framer Motion animations, React Icons
- **Notifications**: React Toastify

### 📱 Pages & Components
- **Home Page**: Hero section, job categories, featured jobs, company values
- **Jobs Page**: Job listings with search and filtering
- **Job Detail Page**: Individual job information with application form
- **About Page**: Company information, mission, values, timeline
- **Contact Page**: Contact form and office locations
- **Login/Register**: User authentication pages

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas connection
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saksham1508/ntfg-career-website.git
   cd ntfg-career-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ntfg-careers
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   JWT_SECRET=your-jwt-secret-here
   ```

4. **Seed the database (optional)**
   ```bash
   npm run seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── jobs/          # Job-related endpoints
│   │   └── applications/  # Application endpoints
│   ├── jobs/              # Job pages
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Hero.tsx
│   ├── JobCategories.tsx
│   ├── WhyJoinUs.tsx
│   ├── FeaturedJobs.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── models/                # MongoDB models
│   ├── Job.ts
│   ├── User.ts
│   └── Application.ts
├── lib/                   # Utility libraries
│   └── mongodb.ts
├── scripts/               # Utility scripts
│   └── seed.js
├── types/                 # TypeScript type definitions
│   └── global.d.ts
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with sample data

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Jobs
- `GET /api/jobs` - Get all jobs (with filtering and pagination)
- `GET /api/jobs/[id]` - Get specific job
- `POST /api/jobs` - Create new job (admin only)
- `PUT /api/jobs/[id]` - Update job (admin only)
- `DELETE /api/jobs/[id]` - Delete job (admin only)

### Applications
- `GET /api/applications` - Get user's applications
- `POST /api/applications` - Submit job application

## Job Categories

The platform supports various job categories including:
- **AI & Machine Learning**: AI Engineer, ML Engineer, Data Scientist
- **DevOps & Infrastructure**: DevOps Engineer, Cloud Architect, SRE
- **Full Stack Development**: Full Stack Developer, Frontend, Backend
- **Mobile Development**: iOS Developer, Android Developer, React Native
- **Data & Analytics**: Data Analyst, Business Intelligence, Data Engineer
- **Design & UX**: UX Designer, UI Designer, Product Designer
- **Security & Compliance**: Security Engineer, Compliance Officer
- **Product & Management**: Product Manager, Project Manager, Scrum Master

## Features in Detail

### Job Search & Filtering
- Search by keywords, skills, or job titles
- Filter by department, location, job type, and experience level
- Pagination for large result sets
- Featured job highlighting

### User Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Role-based access control (user/admin)
- Protected routes and API endpoints

### Application System
- Cover letter and resume submission
- Application status tracking
- Duplicate application prevention
- Admin application management

### Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Smooth animations with Framer Motion
- Accessible UI components

## Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables for Production
Make sure to set all environment variables in your production environment:
- `MONGODB_URI` - MongoDB connection string
- `NEXTAUTH_SECRET` - Secret for NextAuth.js
- `NEXTAUTH_URL` - Production URL
- `JWT_SECRET` - Secret for JWT tokens

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email careers@nexttechfusion.com or create an issue in the repository.

---

Built with ❤️ by the NextTechFusionGadgets team