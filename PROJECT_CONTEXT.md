# TechBiz - Tech Business Website

## Project Overview
A modern and professional website for a tech business targeting general consumers, featuring comprehensive team profiles and showcasing innovative technology solutions.

## Brand Identity
- **Industry**: Technology
- **Target Audience**: General consumers
- **Style**: Modern and professional
- **Brand Colors**: Blue (trust, innovation), Gray (sophistication), White (clarity)

## Key Features

### 1. Navigation
- Sticky navigation bar with smooth scroll
- Logo and brand identity
- Clear call-to-action button
- Responsive mobile menu

### 2. Hero Section
- Full-screen impactful hero with professional imagery
- Large, bold typography (text-7xl)
- Clear value proposition
- Dual CTA buttons (primary and secondary)
- Trust indicators with statistics

### 3. Services Section
- 6 comprehensive service offerings
- Clean 3-column grid layout
- Icon-based visual hierarchy
- Hover effects for engagement
- Services include: Custom Software Development, Product Innovation, Cybersecurity, Cloud Infrastructure, Digital Consulting, Data Analytics

### 4. Team Profiles Section
- 6 team member profiles with professional photos
- Leadership positions: CEO, CTO, Head of Design, VP of Engineering, Head of Product, Director of Security
- Image-first design with overlay information
- Client testimonials included
- Distinct layout from services (image-focused vs icon-based)

### 5. Pricing Section
- Single professional plan at $29/month
- Comprehensive feature list (8 features)
- Stripe integration for payments
- Trust indicators (uptime, support, guarantee)
- Gradient design for visual impact

### 6. Contact Form
- Full-featured contact form with validation
- Required fields: name, email, phone, message
- Hidden fields for founder_id and project_id
- Success/error state handling
- Contact information cards (email, phone, location)
- Form submits to: https://deep-api-server-2moiw.kinsta.app/api/form-submissions

### 7. Footer
- Comprehensive link structure (Company, Services, Resources, Legal)
- Social media integration
- Contact information
- Newsletter signup area
- Copyright and legal links

## Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body), Poppins (headings)
- **Images**: Unsplash (professional stock photography)

## Design Principles
1. **Modern & Professional**: Clean lines, generous white space, sophisticated color palette
2. **User-Centric**: Clear navigation, intuitive layout, fast loading
3. **Visual Hierarchy**: Large headings, clear CTAs, consistent spacing
4. **Responsive**: Mobile-first design, adaptive layouts
5. **Performance**: Optimized images, efficient code, smooth animations

## Color Palette
- Primary Blue: #2563eb (Blue-600)
- Dark Blue: #1e40af (Blue-800)
- Light Blue: #3b82f6 (Blue-500)
- Gray Scale: #111827 (Gray-900) to #f9fafb (Gray-50)
- White: #ffffff

## Typography
- **Headings**: Poppins (Bold 700-800)
- **Body**: Inter (Regular 400)
- **Hero**: 6xl-8xl (72px-96px)
- **Section Headers**: 5xl-6xl (48px-60px)
- **Body Text**: lg-xl (18px-20px)

## Spacing System
- Section padding: py-24 (96px)
- Container max-width: 7xl (1280px)
- Card padding: p-8 (32px)
- Grid gaps: gap-8 (32px)

## Form Configuration
- **Endpoint**: https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- **Method**: POST
- **Required Fields**: name, email, phone, message, founder_id, project_id
- **Validation**: Client-side required validation

## Payment Integration
- **Provider**: Stripe
- **Link**: https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00
- **Price**: $29/month
- **Plan**: Professional Plan

## Image Sources
- Hero: Unsplash (team collaboration)
- Team profiles: Unsplash (professional portraits)
- All images optimized for web delivery

## Performance Optimizations
- Next.js Image component for automatic optimization
- Lazy loading for below-fold content
- CSS animations with GPU acceleration
- Minimal JavaScript bundle

## Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios
- Responsive text sizing

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach

## Deployment Notes
- Environment variables required for founder_id and project_id
- Unsplash images should be cached/optimized in production
- Form endpoint must be accessible from deployment domain
- Stripe link is test mode and should be updated for production

## Future Enhancements
- Blog section for content marketing
- Case studies/portfolio
- Live chat integration
- Advanced analytics tracking
- A/B testing capabilities
- Multi-language support