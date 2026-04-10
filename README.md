# 🚀 PeerSync AI  
### AI-powered community learning platform to find the perfect study partners and grow together

<p align="center">
  <img src="https://raw.githubusercontent.com/AdityaVerma810/PeerSync-AI/main/peersync/public/preview.png" width="100%" />
</p>

<p align="center">
  <a href="https://peer-sync-ai-drmt.vercel.app/">🌐 Live Demo</a> •
  <a href="https://github.com/AdityaVerma810/PeerSync-AI/tree/main/peersync">📂Git Repo</a>
</p>

---

# 📌 Overview

**PeerSync AI** is an intelligent learning platform that connects learners with compatible peers based on their **goals, interests, and learning styles**.

Instead of random study groups, the platform uses **AI-powered matching** to suggest the best collaborators, helping users stay motivated, share knowledge, and achieve learning goals faster.

---

# ✨ Features

## 🤝 AI-Powered Matching
- Matches learners based on **learning goals, interests, and compatibility**
- Returns **up to 3 curated matches**
- Prevents duplicate connections

## 🎯 Goal-Oriented Learning
- Create and manage **learning goals**
- Track progress inside communities

## 💬 Peer Collaboration
- Chat with matched peers
- Organized conversation threads

## 🧠 AI Conversation Insights
- AI-generated summaries
- Extracts key discussion points
- Suggests actionable next steps

## 🔐 Secure Authentication
- Google login
- GitHub login
- Passkey authentication

## 💎 Subscription System
- Free and Pro tiers
- Feature access based on plan

## 📱 Modern UI Experience
- Fully responsive design
- Dark / Light mode
- Smooth animations

---

# 🛠 Tech Stack

## Frontend
- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- ShadCN UI
- Radix UI
- Framer Motion

## Backend
- Hono API
- TanStack Query
- Zod Validation

## Database
- PostgreSQL
- Drizzle ORM

## Authentication
- Clerk

## AI
- OpenAI API

---

# 🏗 Architecture

```
Frontend: Next.js (App Router)
Backend: Hono API Routes
Database: PostgreSQL + Drizzle ORM
Authentication: Clerk
AI Integration: OpenAI
State Management: TanStack Query
```

---

# 📂 API Routes

```
/api/communities
/api/matches
/api/conversations
/api/user
```

---

# 🗄 Database Overview

The seed script initializes the following entities:

- Users (Free & Pro)
- Communities
- Learning Goals
- Peer Matches
- Conversations
- Messages
- AI-generated summaries

Explore database:

```bash
bun db:studio
```

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/PeerSync-AI.git
cd PeerSync-AI
```

---

## 2️⃣ Install Dependencies

```bash
bun install
```

---

## 3️⃣ Setup Environment Variables

Create a `.env.local` file:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/peersync

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...

# OpenAI
OPENAI_API_KEY=sk-...
```

---

## 4️⃣ Setup Database

```bash
bun db:push
bun db:seed
```

Optional:

```bash
bun db:generate
```

---

## 5️⃣ Run the Development Server

```bash
bun dev
```

Open:

```
http://localhost:3000
```

---

# 💎 Subscription Plans

| Plan | Features |
|-----|----------|
| Free | 1 Community, 1 Learning Goal, 3 Active Matches |
| Pro | Unlimited Communities, Goals, and Matches |

---

# 🛠 Development Commands

### App

```bash
bun dev
bun build
bun start
bun lint
```

### Database

```bash
bun db:generate
bun db:push
bun db:seed
bun db:studio
```

---

# 🧩 Troubleshooting

## Database Issues
- Ensure PostgreSQL is running
- Verify the DATABASE_URL
- Check user permissions

## Authentication Issues
- Verify Clerk API keys
- Check webhook configuration

## AI Issues
- Check OpenAI API key
- Ensure API credits are available

## Build Errors

```bash
rm -rf .next
rm -rf node_modules
bun install
```

---

# 🚀 Future Enhancements

- Real-time messaging
- Video calls
- Calendar integration
- Analytics dashboard
- Mobile application
- Gamification system
- Public learner profiles
- Payment integration
- Email notifications

---

# 🙏 Acknowledgements

- Clerk
- PostgreSQL
- Drizzle ORM
- OpenAI
- Zod
- Next.js
- Hono
- TanStack Query

---

# ⭐ Support

If you like this project, consider **starring the repository** and sharing it with others.
