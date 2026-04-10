# 🚀 PeerSync AI  
### An AI-powered community learning platform to find the perfect study partners and grow together

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge&logo=vercel)](https://peer-sync-ai-drmt.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/AdityaVerma810/PeerSync-AI)

---
**PeerSync AI** is a smart learning platform that helps learners connect with compatible peers based on their goals, interests, and learning styles. It goes beyond simple matching by using AI to create meaningful learning collaborations and track progress effectively.
An AI-powered community learning platform to find the perfect study partners and grow together

PeerSync AI is a smart learning platform that helps learners connect with compatible peers based on their goals, interests, and learning styles. It goes beyond simple matching by using AI to create meaningful learning collaborations and track progress effectively.

⚡ Features
🛠️ Tech Stack
🚀 Next.js (App Router) – Server-side rendering, routing, and API handling
⚛️ React – Interactive UI with reusable components
🔐 Clerk – Authentication (Google, GitHub, Passkeys)
🎨 ShadCN UI + Radix UI – Accessible and customizable UI components
💾 PostgreSQL – Scalable relational database
🗄️ Drizzle ORM – Type-safe queries and migrations
📜 TypeScript – Static typing and better DX
💅 TailwindCSS – Utility-first styling
✅ Zod – Schema validation
🤖 OpenAI (GPT-4o-mini) – AI-powered matching and summaries
⚡ Hono – Lightweight API layer
🔄 TanStack Query – Efficient data fetching & caching
💡 Application Features
🤝 AI-Powered Matching
Matches users based on learning goals, interests, and compatibility (not just keywords)
🎯 Goal-Oriented Learning
Create and track learning goals within communities
💬 Real-Time Chat
Connect and collaborate with matched peers
📊 AI Conversation Summaries
Get summaries, key points, and actionable insights from chats
🔒 Secure Authentication
Protected routes with Clerk integration
💎 Subscription System
FREE & PRO tier support
📱 Responsive Design
Optimized for mobile and desktop
🔔 Live Notifications
Toast-based updates for actions
🌓 Dark / Light Mode
✨ Smooth Animations
Using Framer Motion
📈 Performance Optimized
Efficient queries, caching, and batching
🔍 Smart Match Filtering
Prevents duplicate or irrelevant matches
🚀 Getting Started
1️⃣ Fork & Clone
git clone https://github.com/your-username/PeerSync-AI.git
cd PeerSync-AI
2️⃣ Install Dependencies
bun install
3️⃣ Setup Environment Variables

Create a .env.local file:

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/peersync

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...

# OpenAI
OPENAI_API_KEY=sk-...
4️⃣ Database Setup
bun db:push
bun db:seed   # optional but recommended
5️⃣ Run the App
bun dev

App will run at:
👉 http://localhost:3000

🗄️ Database Overview

Seed script includes:

👤 Users (Free & Pro)
🏘️ Communities
🎯 Learning Goals
🤝 Matches (accepted & pending)
💬 Conversations & Messages
🤖 AI-generated summaries

Explore database:

bun db:studio
🏗️ Architecture
Frontend: Next.js App Router (server-first approach)
Backend API: Hono inside /api routes
Database: PostgreSQL + Drizzle ORM
Auth: Clerk (session + user sync)
AI Layer: OpenAI integration
State Management: React Query
📂 API Structure
/api/communities    → community management
/api/matches        → AI & manual matching
/api/conversations  → chat & summaries
/api/user           → profile & subscription
🤖 AI Capabilities
🔍 Smart Matching
Understands semantic meaning of goals
Matches complementary learners
Returns curated matches (max 3 per request)
Avoids duplicate matches
🧠 Conversation Insights
Summary of discussion
Key learning points
Action items
Suggested next steps
💎 Subscription Tiers
🆓 Free Plan
1 Community
1 Learning Goal
3 Active Matches
Unlimited chats
💼 Pro Plan
Unlimited communities
Unlimited goals
Unlimited matches
Priority AI matching
🛠️ Development Commands
# App
bun dev
bun build
bun start
bun lint

# Database
bun db:generate
bun db:push
bun db:seed
bun db:studio
🧩 Troubleshooting
Database Issues
Ensure PostgreSQL is running
Verify DATABASE_URL
Check permissions
Auth Issues
Verify Clerk keys
Check Clerk dashboard config
AI Issues
Check OpenAI API key
Ensure sufficient credits
Monitor rate limits
Build Errors
rm -rf .next
rm -rf node_modules
bun install
🚀 Future Enhancements
🔴 Real-time messaging (WebSockets)
🎥 Video call integration
📅 Calendar scheduling
📊 Analytics dashboard
📱 Mobile app (React Native)
🏆 Gamification (badges, streaks)
🌐 Public profiles
💳 Payment integration
📧 Email notifications
🙏 Acknowledgements
Clerk (Authentication)
PostgreSQL (Database)
Drizzle ORM
OpenAI
Zod
ShadCN UI
Next.js
Hono
TanStack Query
