🎧 Audiophile E-commerce Website
A pixel-perfect e-commerce website built with React/Next.js, featuring a complete shopping experience with integrated backend functionality and email confirmations.

https://img.shields.io/badge/React-18.0+-blue.svg
https://img.shields.io/badge/Next.js-14.0+-black.svg
https://img.shields.io/badge/Convex-Backend-orange.svg

📋 Project Overview
This project implements the Audiophile e-commerce design from Figma, providing a fully functional online store with:

🛍️ Product browsing and shopping cart

💳 Complete checkout process

📧 Order confirmation emails

💾 Backend integration with Convex

📱 Responsive design across all devices

🚀 Features
Frontend
Pixel-perfect implementation of the Audiophile Figma design

Responsive layout for mobile, tablet, and desktop

React/Next.js based architecture

Accessible forms and navigation

Form validation with inline error handling

Backend & Checkout
Convex backend integration for data persistence

Complete checkout flow with user details collection

Order management with status tracking

Edge case handling (duplicate submissions, invalid quantities, etc.)

Email System
Transactional email delivery via Resend API or Nodemailer

Responsive HTML email templates

Order confirmation with full summary

Personalized content with user details

🛠️ Tech Stack
Frontend: React, Next.js, CSS/SCSS

Backend: Convex

Email: Resend API / Nodemailer

Deployment: Vercel/Netlify

Design: Figma (pixel-perfect implementation)

📁 Project Structure
text
audiophile-ecommerce/
├── components/          # Reusable React components
├── pages/              # Next.js pages
├── convex/             # Backend schema and functions
├── lib/                # Utilities and configurations
├── tailwind            # for styling
├── public/             # Static assets
└── emails/             # Email templates
🎯 Requirements Checklist
✅ Core Implementation
React with Next.js framework

Pixel-perfect match to Figma design

Responsive across mobile, tablet, desktop

Accessible forms and navigation

✅ Checkout System
User details collection (name, email, phone, address)

Form validation with inline errors

Edge case handling

Order data storage in Convex

Order confirmation email

Success page redirect

✅ Backend (Convex)
Customer details storage

Shipping information

Order items with pricing

Total calculations (subtotal, shipping, taxes)

Order status and timestamps

✅ Email System
Personalized greeting with user name

Order ID and item summary

Shipping details

Support/contact information

"View your order" CTA

Responsive email design

🚀 Getting Started
Prerequisites
Node.js 18+

npm or yarn

Convex account

Resend account (for emails)

Installation
Clone the repository

bash
git clone [repository-url]
cd audiophile-ecommerce
Install dependencies

bash
npm install
# or
yarn install
Environment setup
Create a .env.local file:

env
CONVEX_DEPLOYMENT=your-convex-deployment-url
RESEND_API_KEY=your-resend-api-key
Run development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000

📧 Email Template
The project includes responsive HTML email templates for order confirmations. Templates feature:

Personalized customer greetings

Order summary with items and pricing

Shipping address display

Brand-consistent styling

Mobile-responsive design

🎨 Design Implementation
This project strictly follows the Audiophile E-commerce Figma design with pixel-perfect accuracy across all breakpoints:

Mobile: 375px and below

Tablet: 768px and below

Desktop: 1440px and below

📦 Deployment
Vercel (Recommended)
bash
npm run build
vercel --prod
Netlify
bash
npm run build
# Deploy dist folder to Netlify
📝 Submission Requirements
✅ Live deployed application link

✅ GitHub repository with complete code

✅ Clear setup instructions

✅ Example confirmation email template

🔧 Development
Available Scripts
npm run dev - Start development server

npm run build - Build for production

npm run start - Start production server

npm run convex:dev - Start Convex development

Code Quality
Clean, modular component structure

Comprehensive documentation

Accessibility compliance (WCAG)

Error boundary implementation

🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is part of the Stage 3 assessment task.
