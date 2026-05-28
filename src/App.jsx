import React from 'react';
import { 
  ChevronDown, PawPrint, FileText, TrendingUp, Sparkles, Home, Heart, HandHeart, 
  Wallet, List, MessageSquare, LifeBuoy, AlertTriangle, Box, Briefcase, Users, 
  Package, Award, Target, Newspaper, BookOpen, Settings, Truck, Star, Map, Shield, 
  CheckCircle, ArrowRight, Play, MapPin, ShieldCheck, Quote, Plus, Minus, Building, 
  Phone, Mail, Facebook, Instagram, Linkedin, Zap, BarChart3, Clock, Globe
} from 'lucide-react';

// --- DATA ARRAYS FOR SECTIONS ---
const products = [
  { name: 'Orijen Original Dog Food 11.4kg', wholesale: '₹7,800', demand: 'Very High', trend: '+32%', color: 'bg-orange-100', icon: '🐕' },
  { name: 'Acana Pacifica Cat 5.4kg', wholesale: '₹4,100', demand: 'High', trend: '+34%', color: 'bg-blue-100', icon: '🐈' },
  { name: 'Furminator Deshedding Tool', wholesale: '₹1,850', demand: 'Trending', trend: '+47%', color: 'bg-slate-100', icon: '✂️' },
  { name: 'Kong Classic Red (Large)', wholesale: '₹650', demand: 'High', trend: '+45%', color: 'bg-red-100', icon: '🦴' },
  { name: 'Trixie Alicante Cat Tree', wholesale: '₹4,500', demand: 'Steady', trend: '+12%', color: 'bg-stone-100', icon: '🏰' },
  { name: 'Savic Trotter 1 Pet Carrier', wholesale: '₹1,200', demand: 'High', trend: '+42%', color: 'bg-sky-100', icon: '👜' },
  { name: 'TropiClean Papaya Shampoo', wholesale: '₹750', demand: 'Trending', trend: '+64%', color: 'bg-green-100', icon: '🧴' },
  { name: 'Beaphar Top 10 Multivitamins', wholesale: '₹480', demand: 'Steady', trend: '+33%', color: 'bg-yellow-100', icon: '💊' },
  { name: 'Flexi New Classic Leash 5m', wholesale: '₹1,100', demand: 'Very High', trend: '+43%', color: 'bg-rose-100', icon: '🦮' },
  { name: 'Earthbath Oatmeal Aloe Shampoo', wholesale: '₹950', demand: 'High', trend: '+22%', color: 'bg-emerald-100', icon: '🛁' },
  { name: 'Nylabone DuraChew Dental', wholesale: '₹550', demand: 'Trending', trend: '+58%', color: 'bg-amber-100', icon: '🍖' },
  { name: 'Outward Hound Slow Feeder', wholesale: '₹850', demand: 'Very High', trend: '+51%', color: 'bg-purple-100', icon: '🥣' },
  { name: 'KONG Cozie Marvin Moose', wholesale: '₹720', demand: 'High', trend: '+19%', color: 'bg-amber-100', icon: '🦌' },
  { name: 'Chuckit! Ultra Ball 2-Pack', wholesale: '₹450', demand: 'Trending', trend: '+77%', color: 'bg-orange-100', icon: '🎾' },
  { name: 'Wellness CORE Grain-Free', wholesale: '₹6,500', demand: 'Steady', trend: '+14%', color: 'bg-teal-100', icon: '🥩' },
];

const brandPartners = ['ORIJEN', 'ACANA', 'KONG', 'FURminator', 'TRIXIE', 'TropiClean', 'Beaphar', 'Flexi', 'Savic', 'Earthbath', 'Wellness CORE'];

const recentBlogs = [
  { category: 'Retail Strategy', title: 'Maximizing Shelf Space ROI with Premium Pet Diets', date: 'May 25, 2026', readTime: '5 min read', img: 'bg-slate-100' },
  { category: 'Industry News', title: 'ABK Imports Secures Exclusive Rights for New Grooming Line', date: 'May 20, 2026', readTime: '3 min read', img: 'bg-slate-100' },
  { category: 'Product Spotlight', title: 'Top 5 TropiClean Essentials Every Pet Store Needs This Summer', date: 'May 12, 2026', readTime: '4 min read', img: 'bg-slate-100' }
];

const features = [
  { icon: <ShieldCheck className="text-[#D84835] w-6 h-6"/>, title: "100% Genuine Imports", desc: "Sourced directly from global manufacturers with complete legal and customs compliance." },
  { icon: <BarChart3 className="text-[#D84835] w-6 h-6"/>, title: "High Retail Margins", desc: "Cut out the middlemen. Our direct import model ensures you get the best wholesale prices." },
  { icon: <Zap className="text-[#D84835] w-6 h-6"/>, title: "Live Inventory Sync", desc: "Our B2B portal shows live stock levels across all our warehouses in real-time." },
  { icon: <Globe className="text-[#D84835] w-6 h-6"/>, title: "Exclusive Distribution", desc: "Access premium global brands that are exclusively distributed by ABK in India." }
];

const steps = [
  { step: '01', title: 'Apply for Partnership', desc: 'Fill out a quick form with your GST and retail store details.' },
  { step: '02', title: 'Get Verified', desc: 'Our team verifies your business within 24-48 hours.' },
  { step: '03', title: 'Access B2B Portal', desc: 'Log in to see exclusive wholesale pricing and live inventory.' },
  { step: '04', title: 'Order & Profit', desc: 'Place orders seamlessly and enjoy industry-leading margins.' }
];

const categories = [
  { name: "Premium Diets", count: "450+ Products", color: "bg-orange-50 text-orange-600", img: "🍖" },
  { name: "Toys & Enrichment", count: "1,200+ Products", color: "bg-red-50 text-red-600", img: "🎾" },
  { name: "Grooming & Spa", count: "300+ Products", color: "bg-cyan-50 text-cyan-600", img: "🛁" },
  { name: "Travel & Habitats", count: "250+ Products", color: "bg-stone-50 text-stone-600", img: "👜" },
];

const testimonials = [
  { quote: "Partnering with ABK changed our business. Getting consistent stock of Orijen and Acana has driven immense footfall to our stores.", author: "Rahul M.", store: "Paws & Tails, Mumbai" },
  { quote: "The B2B portal is flawless. I can see exactly what's in the warehouse, place my order, and it arrives in Bangalore within days.", author: "Sneha K.", store: "The Pet Boutique, Bangalore" },
  { quote: "No other distributor offers the marketing support ABK does. The display units and social media assets have really helped us sell.", author: "Vikram S.", store: "Happy Hounds, Delhi" }
];

const faqs = [
  { q: "What are the requirements to become a partner?", a: "You need a valid GST certificate and a registered retail pet business (physical store, clinic, or verified e-commerce platform)." },
  { q: "Is there a minimum order quantity (MOQ)?", a: "Yes, we have a nominal minimum order value to ensure wholesale pricing is maintained. Details are provided upon account approval." },
  { q: "How long does shipping take?", a: "Depending on your location, dispatch happens within 24 hours. Delivery usually takes 2-5 business days pan-India." },
  { q: "Do you provide marketing materials?", a: "Absolutely. We provide authorized retailers with digital assets, shelf talkers, and in-store display units for our premium brands." }
];

export default function App() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0, px: -1000, py: -1000 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, pageX, pageY } = e;
    // For parallax
    const x = (clientX / window.innerWidth - 0.5) * 8; 
    const y = (clientY / window.innerHeight - 0.5) * 8;
    // For absolute radial mask positioning
    setMousePos({ x, y, px: pageX, py: pageY });
  };

  return (
    <div 
      className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col relative"
      onMouseMove={handleMouseMove}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* 0. SEO / AIO Context Blocks (Invisible visually, read by crawlers) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WholesaleStore",
        "name": "ABK Imports Pvt Ltd",
        "description": "India's premier importer and B2B distributor of biologically appropriate pet nutrition, professional grooming supplies, and premium accessories.",
        "url": "https://www.abkimports.com",
        "logo": "https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Block-A, Office No. 101, Pune IT Park, Bopodi",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "411020",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-18002332025",
          "contactType": "Customer Service"
        }
      })}} />
      <div className="sr-only">
        <h1>ABK Imports: India's Premium B2B Pet Product Distributor</h1>
        <p>Welcome to ABK Imports Pvt Ltd. We are India's leading wholesale distributor for global pet brands, specializing in dog food, cat food, pet grooming supplies, and veterinary products. We exclusively import top-tier brands including Orijen, Acana, KONG, Furminator, Trixie, TropiClean, and Wellness CORE for the Indian retail market. Partner with us for high margins, 100% genuine imports, and pan-India distribution.</p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .slide-bg-primary {
          background: linear-gradient(to right, #b03929 50%, #D84835 50%);
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-bg-primary:hover {
          background-position: 0 0;
        }

        .slide-bg-secondary {
          background: linear-gradient(to right, #f1f5f9 50%, #ffffff 50%);
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-bg-secondary:hover {
          background-position: 0 0;
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 45s linear infinite; }
        .animate-scroll-right { animation: scroll-right 45s linear infinite; }
        .animate-scroll-fast { animation: scroll-left 25s linear infinite; }
      `}} />
      
      {/* 1. Floating Navigation Bar */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-[2vw] pointer-events-none">
        <nav aria-label="Main Navigation" className="pointer-events-auto relative flex items-center justify-between px-5 py-3 w-full bg-white/95 backdrop-blur-md rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
          <div className="flex items-center gap-2 pl-2">
            <img src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" alt="ABK Imports - Leading Pet Product Distributor Logo" className="h-[30px] md:h-[35px] object-contain" />
          </div>
          
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[13px] font-semibold text-slate-600">
            <NavMegaMenu 
              title="About Us"
              featuredTitle={<>Discover<br/>Our Story.</>}
              featuredDesc="India's leading importer of premium pet supplies since 2010."
              featuredBtn="Read Our Journey"
              col1Title="Who We Are"
              col1Links={[
                { icon: <Briefcase size={16}/>, title: "Company Profile", desc: "Our mission and vision" },
                { icon: <Users size={16}/>, title: "Leadership Team", desc: "Meet our directors" },
                { icon: <Award size={16}/>, title: "Awards & Milestones", desc: "Industry recognition" }
              ]}
              col2Title="News & Updates"
              col2Links={[
                { icon: <Newspaper size={16}/>, title: "News & Insights", desc: "Latest company news" },
                { icon: <BookOpen size={16}/>, title: "Blogs", desc: "Pet care and retail tips" },
                { icon: <Shield size={16}/>, title: "Quality Assurance", desc: "Our import standards" }
              ]}
            />
            <NavMegaMenu 
              title="Our Brands"
              featuredTitle={<>Global<br/>Market<br/>Leaders.</>}
              featuredDesc="Exclusively importing the highest quality pet brands into India."
              featuredBtn="View Brand Catalog"
              col1Title="Premium Nutrition"
              col1Links={[
                { icon: <Star size={16}/>, title: "Orijen", desc: "Biologically appropriate diets" },
                { icon: <Target size={16}/>, title: "Acana", desc: "Award-winning recipes" },
                { icon: <Heart size={16}/>, title: "Wellness CORE", desc: "Grain-free nutrition" }
              ]}
              col2Title="Supplies & Grooming"
              col2Links={[
                { icon: <Home size={16}/>, title: "KONG", desc: "Durable enrichment toys" },
                { icon: <Settings size={16}/>, title: "Furminator", desc: "Deshedding solutions" },
                { icon: <AlertTriangle size={16}/>, title: "TropiClean", desc: "Natural grooming care" }
              ]}
            />
            <NavMegaMenu 
              title="Categories"
              featuredTitle={<>Source the<br/>World's Best<br/>Pet Products.</>}
              featuredDesc="Direct imports, verified quality, and high retail margins."
              featuredBtn="View All Categories"
              col1Title="Diet & Nutrition"
              col1Links={[
                { icon: <Box size={16}/>, title: "Dog Food", desc: "Dry, wet, and raw diets" },
                { icon: <Heart size={16}/>, title: "Cat Food", desc: "Premium feline nutrition" },
                { icon: <Wallet size={16}/>, title: "Treats & Chews", desc: "Training and dental rewards" }
              ]}
              col2Title="Care & Accessories"
              col2Links={[
                { icon: <HandHeart size={16}/>, title: "Health & Grooming", desc: "Shampoos and supplements" },
                { icon: <List size={16}/>, title: "Toys & Enrichment", desc: "Interactive and plush toys" },
                { icon: <Truck size={16}/>, title: "Travel & Habitats", desc: "Carriers, beds, and crates" }
              ]}
            />
            <button className="hover:text-[#D84835] transition-colors py-2">Contact</button>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium pr-1">
            <button className="slide-bg-primary text-white px-6 py-2.5 rounded-[9px] shadow-sm shadow-[#D84835]/20 text-[13px] font-semibold">
              Retailer Login
            </button>
          </div>
        </nav>
      </div>

      {/* 2. Cohesive Interactive Hero Section (FROZEN) */}
      <section className="relative w-full flex flex-col items-center pt-44 pb-12 min-h-[calc(100vh-80px)] overflow-hidden">
        
        {/* Interactive Hover-Glow Grid */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 40%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.5) 40%, transparent 70%)',
          }}
        >
          {/* Base light grid */}
          <div 
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
              backgroundSize: '100px 100px',
            }}
          ></div>
          
          {/* Hover glow dark grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.4] transition-opacity duration-300"
            style={{
              backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
              backgroundSize: '100px 100px',
              maskImage: `radial-gradient(circle 300px at ${mousePos.px}px ${mousePos.py}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.px}px ${mousePos.py}px, black, transparent)`
            }}
          ></div>
        </div>

        {/* Hero Copy */}
        <div className="relative z-30 flex flex-col items-center">
          
          {/* Animated Gradient Border Badge */}
          <div className="relative p-[1px] rounded-[9px] overflow-hidden mb-6 cursor-pointer group">
            <div className="absolute inset-0 bg-[#f4cccc] group-hover:bg-[#eebaba] transition-colors"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_280deg,#D84835_360deg)] animate-[spin_3s_linear_infinite]"></div>
            <div className="relative flex items-center gap-1.5 bg-[#fdf6f5] rounded-[8px] px-3.5 py-1.5 z-10">
              <Sparkles size={12} className="text-[#D84835]" />
              <span className="text-[10px] font-bold text-[#D84835] tracking-widest uppercase">New Global Brands Added</span>
            </div>
          </div>
          
          <h1 className="text-[32px] md:text-[46px] font-bold tracking-tight text-center max-w-4xl px-4 leading-[1.2] text-slate-900">
            Discover <span className="text-[#D84835]">winning pet products</span><br className="hidden md:block" /> your customers will love
          </h1>
          
          <p className="mt-4 text-sm md:text-base text-slate-500 text-center max-w-3xl px-4 font-normal leading-relaxed">
            Partner with India's most trusted wholesale pet distributor. Find trending dog and cat supplies, optimize your retail inventory, and effortlessly grow your business with high-demand brands.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button className="slide-bg-primary text-white px-6 py-2.5 rounded-[9px] shadow-lg shadow-[#D84835]/20 font-semibold text-sm">
              Partner With Us
            </button>
            <button className="flex items-center gap-2 slide-bg-secondary border border-slate-200 text-slate-700 px-6 py-2.5 rounded-[9px] shadow-sm hover:border-slate-300 transition-colors font-semibold text-sm">
              <FileText className="w-4 h-4 text-slate-500" />
              Download Catalog
            </button>
          </div>
        </div>

        {/* 3. The Interactive Split Pyramid Scroller */}
        <div className="relative w-full mt-6 flex flex-col items-center justify-start flex-1 min-h-[450px]">
          
          <style dangerouslySetInnerHTML={{__html: `
            /* Deepened the shadow significantly so the white cards pop inside the beam */
            .card-shadow { box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.04); }
          `}} />

          {/* LAYER 1: Background Skeletons */}
          <div className="absolute inset-0 z-0 opacity-50">
             <ScrollerTrack CardComponent={SkeletonCard} />
          </div>

          {/* LAYER 2: The Pyramid Light Beam (Interactive Parallax) */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none transition-transform duration-200 ease-out"
            style={{ 
              clipPath: 'polygon(20% 50%, 100% -40%, 100% 140%)',
              background: 'linear-gradient(90deg, transparent 20%, rgba(216, 72, 53, 0.12) 20%, rgba(216, 72, 53, 0.04) 45%, rgba(255, 255, 255, 0) 100%)',
              transform: `translateX(${mousePos.x * 0.5}px) translateY(${mousePos.y * 0.5}px)`
            }}
          ></div>

          {/* LAYER 3: Foreground Real Cards (Clipped to the moving right-facing beam) */}
          {/* We must apply the clip-path to a wrapper, but NOT transform it, to keep the animation running smoothly. */}
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ clipPath: 'polygon(20% 50%, 100% -40%, 100% 140%)' }}>
             {/* The inner track is what handles the pointer events and rendering */}
             <div className="absolute inset-0 pointer-events-auto">
               <ScrollerTrack CardComponent={ProductCard} />
             </div>
          </div>

          {/* LAYER 4: Fade edges to blend the scroll */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-40 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-40 pointer-events-none"></div>

          {/* LAYER 5: Central Generator Box (Parallax) with ABK Logo Inverted */}
          <div 
            className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transition-transform duration-200 ease-out"
            style={{ transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))` }}
          >
            {/* Increased padding from p-3.5 to p-6 to make the logo breathe more */}
            <div className="relative w-[110px] h-[110px] p-6 slide-bg-primary rounded-3xl shadow-[0_4px_40px_rgba(216,72,53,0.4)] flex items-center justify-center border-[3px] border-white/90 cursor-pointer pointer-events-auto">
               <img 
                 src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" 
                 alt="ABK Generator" 
                 className="w-full h-full object-contain"
                 style={{ filter: 'brightness(0) invert(1)' }}
               />
            </div>
          </div>
          
        </div>
      </section>

      {/* =========================================================
          NEW SECTIONS START HERE (Max title text-3xl/4xl)
          ========================================================= */}

      {/* SECTION 1: Trusted Brands Scroller (Professional Grayscale) */}
      <section className="py-12 border-t border-b border-slate-100 bg-white overflow-hidden">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Authorized Importer & Distributor For</p>
        <div className="relative w-full flex overflow-hidden">
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex w-[200%] animate-scroll-fast">
            {[...brandPartners, ...brandPartners, ...brandPartners].map((brand, i) => (
              <div key={i} className="flex-1 flex justify-center items-center px-8 min-w-[200px]">
                <span className="text-xl md:text-2xl font-black text-slate-300 tracking-tight hover:text-[#D84835] transition-colors duration-300 cursor-default">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Partner With ABK (Premium Grid) */}
      <section className="py-24 px-[2vw] bg-slate-50/50">
        <div className="w-full max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                  Empowering <span className="text-[#D84835]">3,000+</span> Pet Retailers
                </h2>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  We handle the global sourcing, complex customs, and heavy logistics. You focus on giving your customers the best pet products in the world.
                </p>
              </div>
              <button className="text-sm font-semibold text-[#D84835] flex items-center gap-1 hover:gap-2 transition-all group">
                Learn about our process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D84835]/10 transition-colors">
                    {React.cloneElement(feat.icon, { className: "text-slate-600 group-hover:text-[#D84835] transition-colors w-6 h-6" })}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed flex-1">{feat.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Step-by-step Process (SaaS Timeline Style) */}
      <section className="py-24 px-[2vw] bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D84835]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <FadeInSection>
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Onboarding in <span className="text-[#D84835]">4 simple steps</span></h2>
              <p className="text-sm md:text-base text-slate-400">Our partner approval process is entirely digital. Become an authorized retailer and access your B2B dashboard within 48 hours.</p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 z-0"></div>
            
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl border border-slate-700 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center text-lg font-bold text-[#D84835] mb-6 relative group">
                    <div className="absolute inset-0 bg-[#D84835] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                    {step.step}
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-3 text-slate-100">{step.title}</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed max-w-[240px]">{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={600}>
            <div className="mt-16 flex justify-center">
              <button className="slide-bg-primary text-white px-8 py-3 rounded-[9px] font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#D84835]/20">
                Start Application <ArrowRight size={16} />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SECTION 4: Browse Categories (Clean, Uniform Cards) */}
      <section className="py-24 px-[2vw] bg-white border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Everything a pet needs</h2>
              <p className="text-sm md:text-base text-slate-500">Source across all major categories from one unified dashboard, completely replacing multiple vendor relationships.</p>
            </div>
          </FadeInSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-[#D84835]/50 hover:shadow-lg hover:shadow-[#D84835]/5 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:bg-[#D84835]/5 transition-all duration-300`}>
                    <span className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100">{cat.img}</span>
                  </div>
                  <h3 className="text-[14px] md:text-base font-bold text-slate-900 mb-1">{cat.name}</h3>
                  <p className="text-[12px] font-medium text-slate-500">{cat.count}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: B2B Portal Software Highlight (High-Fidelity Mockup) */}
      <section className="py-24 px-[2vw] bg-slate-50 overflow-hidden border-b border-slate-200/50">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-[45%]">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wide uppercase mb-8 shadow-sm">
                <Box size={14} className="text-[#D84835]" /> Proprietary Software
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Ordering wholesale has never been this seamless.
              </h2>
              <p className="text-[14px] md:text-base text-slate-500 leading-relaxed mb-8">
                Say goodbye to messy spreadsheets and long email chains. Our custom-built B2B portal puts the power in your hands. Browse live inventory, check margins, and place restocks in seconds.
              </p>
              <ul className="space-y-4">
                {['Live stock availability across all regional warehouses', 'One-click reordering of your store\'s top sellers', 'Downloadable tax invoices and marketing assets', 'Real-time order tracking and dispatch alerts'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13.5px] text-slate-700 font-medium leading-snug">
                    <CheckCircle className="text-[#D84835] shrink-0 w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <FadeInSection delay={200}>
              {/* Premium Dashboard Mockup */}
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
                {/* Browser Header */}
                <div className="w-full h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="mx-auto w-48 h-5 bg-white border border-slate-200 rounded-md"></div>
                </div>
                
                {/* Mockup Body */}
                <div className="flex flex-1 p-4 gap-4 bg-slate-50/50">
                  {/* Sidebar */}
                  <div className="w-1/4 hidden sm:flex flex-col gap-2 border-r border-slate-200 pr-4">
                    <div className="w-full h-6 bg-slate-200/50 rounded mb-4"></div>
                    {[1,2,3,4].map(i => <div key={i} className="w-3/4 h-3 bg-slate-200/50 rounded"></div>)}
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="flex-1 space-y-4">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <div className="w-1/3 h-5 bg-slate-200 rounded"></div>
                      <div className="w-24 h-6 bg-[#D84835]/10 text-[#D84835] rounded-full flex items-center justify-center text-[10px] font-bold">New Order</div>
                    </div>
                    
                    {/* List Items */}
                    <div className="space-y-3">
                      {[1,2,3].map((i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          <div className="w-10 h-10 bg-slate-100 rounded-lg shrink-0"></div>
                          <div className="flex-1 space-y-2">
                            <div className="w-2/3 h-3 bg-slate-200 rounded"></div>
                            <div className="flex gap-2">
                              <div className="w-1/4 h-2 bg-slate-100 rounded"></div>
                              <div className="w-1/4 h-2 bg-slate-100 rounded"></div>
                            </div>
                          </div>
                          <div className="w-16 h-8 bg-slate-50 border border-slate-100 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* SECTION 6: Logistics & Warehousing (Clean Data Viz) */}
      <section className="py-24 px-[2vw] bg-white border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
            <FadeInSection>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col justify-center h-full">
                <h4 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">10+</h4>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">States Covered</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col justify-center h-full">
                <h4 className="text-4xl md:text-5xl font-black text-[#D84835] mb-2 tracking-tight">48<span className="text-xl text-[#D84835]/70">hrs</span></h4>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Avg Dispatch Time</p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm col-span-2 flex items-center justify-center gap-5 hover:border-[#D84835]/30 transition-colors cursor-default">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#D84835] w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">Central Hub: Pune</h4>
                  <p className="text-[13px] text-slate-500">50,000 sq ft climate-controlled facility</p>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="w-full lg:w-1/2">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Infrastructure built for national scale.
              </h2>
              <p className="text-[14px] md:text-base text-slate-500 leading-relaxed mb-8">
                Premium pet nutrition requires strict temperature control and careful handling. Our centralized, state-of-the-art warehouses ensure every bag of food and every grooming liquid reaches your store in perfect factory condition.
              </p>
              <button className="text-[13px] font-bold text-slate-900 flex items-center gap-2 hover:text-[#D84835] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#D84835]/10 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" /> 
                </div>
                Watch Warehouse Tour
              </button>
            </FadeInSection>
          </div>

        </div>
      </section>

      {/* SECTION 7: Marketing Support (Premium Accent Block) */}
      <section className="py-24 px-[2vw] relative overflow-hidden bg-[#D84835]">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="w-full max-w-4xl mx-auto text-center relative z-10">
          <FadeInSection>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
              <Star className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">We help you sell.</h2>
            <p className="text-base text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              Partnering with ABK means gaining a marketing department. Authorized retailers access our extensive library of high-res product imagery, social media templates, shelf talkers, and physical floor display units.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Digital Assets', 'FSDU Displays', 'Staff Training', 'Promotional Banners'].map((tag, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[9px] text-[13px] font-semibold text-white hover:bg-white hover:text-[#D84835] transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SECTION 8: Testimonials (Clean Review Cards) */}
      <section className="py-24 px-[2vw] bg-slate-50 border-b border-slate-200/50">
        <div className="w-full max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Trusted by the best in the business
              </h2>
              <p className="text-sm md:text-base text-slate-500">See what top pet retailers across India have to say.</p>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col relative group hover:shadow-md transition-shadow">
                  <Quote className="absolute top-8 right-8 text-slate-100 w-10 h-10 group-hover:text-[#D84835]/5 transition-colors" />
                  <div className="flex items-center gap-1 mb-6 text-[#D84835]">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-[14px] text-slate-600 leading-relaxed flex-1 relative z-10 font-medium">"{t.quote}"</p>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-sm">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-slate-900">{t.author}</h4>
                      <p className="text-[12px] text-slate-500 font-medium">{t.store}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: ROI Calculator (Visual Only - SaaS Style Widget) */}
      <section className="py-24 px-[2vw] bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Maximize your shelf space ROI.</h2>
            <p className="text-[14px] md:text-base text-slate-400 leading-relaxed mb-10">
              Premium pet food and accessories yield significantly higher margins per square foot compared to standard grocery lines. Upgrade your inventory and see the difference in your monthly P&L.
            </p>
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-2xl flex justify-between items-center">
                <span className="text-[13px] font-medium text-slate-300">Avg. Standard Pet Food Margin</span>
                <span className="text-base font-bold text-slate-100">12 - 15%</span>
              </div>
              <div className="bg-[#D84835]/10 border border-[#D84835]/20 p-5 rounded-2xl flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D84835]"></div>
                <span className="text-[13px] font-bold text-[#D84835]">ABK Premium Brands Margin</span>
                <span className="text-lg font-black text-[#D84835]">30 - 45%+</span>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            {/* Sleek ROI Widget */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl"></div>
              
              <div className="mb-8 flex justify-between items-start border-b border-slate-700/50 pb-6">
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">Example Product</p>
                  <p className="text-sm font-medium text-slate-200">Orijen Original 11.4kg</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">MSRP</p>
                  <h4 className="text-xl font-bold text-white">₹11,500</h4>
                </div>
              </div>
              
              {/* Visual Bar */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[12px] font-bold">
                  <span className="text-slate-400">Wholesale Cost</span>
                  <span className="text-green-400">Your Profit (32%)</span>
                </div>
                <div className="w-full h-3 flex rounded-full overflow-hidden bg-slate-900">
                  <div className="w-[68%] bg-slate-600 h-full rounded-r-full"></div>
                  <div className="w-[32%] bg-gradient-to-r from-green-500 to-emerald-400 h-full relative">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-5 flex justify-between items-center border border-slate-700/50">
                <span className="text-[13px] text-slate-400 font-medium">Net Margin per unit</span>
                <span className="text-2xl font-black text-green-400">₹3,700</span>
              </div>
              
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SECTION 10: Best Sellers Mini-Showcase */}
      <section className="py-24 px-[2vw] bg-white border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Highest Retail Demand</h2>
                <p className="text-sm md:text-base text-slate-500">Products with the highest inventory turnover rates globally.</p>
              </div>
              <button className="text-[13px] font-bold text-[#D84835] hover:text-slate-900 transition-colors flex items-center gap-1 group">
                View Top 100 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((prod, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="p-5 border border-slate-200 rounded-2xl hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-default h-full flex flex-col">
                  <div className={`w-full aspect-[4/3] rounded-xl flex items-center justify-center text-5xl mb-5 border border-slate-100 bg-slate-50 group-hover:bg-white transition-colors`}>
                    <span className="grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-sm">{prod.icon}</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">{prod.name}</h3>
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-100">
                    <span className="text-[12px] text-slate-500 font-medium">{prod.wholesale} <span className="text-[10px] uppercase">WS</span></span>
                    <span className="text-[10px] font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded-md uppercase tracking-wide border border-green-200/50">{prod.demand}</span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Awards / Trust Bar */}
      <section className="py-16 px-[2vw] bg-white border-b border-slate-100">
        <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-10 md:gap-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-3 font-bold text-[15px] text-slate-700"><Award className="text-[#D84835]" /> Best Distributor 2023</div>
          <div className="flex items-center gap-3 font-bold text-[15px] text-slate-700"><Shield className="text-[#D84835]" /> ISO 9001:2015</div>
          <div className="flex items-center gap-3 font-bold text-[15px] text-slate-700"><CheckCircle className="text-[#D84835]" /> FSSAI Certified</div>
        </div>
      </section>

      {/* SECTION 12: Global Footprint (Dynamic Leaflet Map) */}
      <section className="py-24 px-[2vw] bg-slate-50 border-b border-slate-200/50">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-[40%]">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-bold tracking-wide uppercase mb-8 shadow-sm">
                <Map size={14} className="text-[#D84835]" /> Distribution Network
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Nationwide reach.<br/>Localized support.
              </h2>
              <p className="text-[14px] md:text-base text-slate-500 leading-relaxed mb-8">
                With state-of-the-art climate-controlled warehouses strategically located across India, we ensure rapid dispatch and pristine product quality upon arrival. 
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-[13.5px] text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#D84835] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(216,72,53,0.5)]"></div> 
                  Central Hub: Pune, Maharashtra
                </li>
                <li className="flex items-start gap-3 text-[13.5px] text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0"></div> 
                  Regional Hubs: Delhi, Bangalore, Mumbai
                </li>
              </ul>
            </FadeInSection>
          </div>
          
          <div className="w-full lg:w-[60%] h-[450px] relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 z-10 bg-white p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
               <LeafletMap />
               {/* Map gradient overlay to blend edges */}
               <div className="absolute inset-0 border-4 border-white rounded-2xl pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: Blogs & Insights */}
      <section className="py-24 px-[2vw] bg-white border-b border-slate-100">
        <div className="w-full max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Retailer Insights</h2>
                <p className="text-sm md:text-base text-slate-500">Market trends, merchandising tips, and global brand announcements to keep you ahead.</p>
              </div>
              <button className="text-[13px] font-bold text-[#D84835] flex items-center gap-1 hover:text-slate-900 transition-colors group">
                View All Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentBlogs.map((blog, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col" aria-labelledby={`blog-title-${i}`}>
                  {/* Premium Image Placeholder */}
                  <div className={`w-full aspect-[16/9] bg-slate-50 relative overflow-hidden border-b border-slate-100`} aria-hidden="true">
                    {/* Minimalist pattern instead of solid grey */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/50 text-[10px] font-bold text-slate-800 uppercase tracking-widest shadow-sm">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 id={`blog-title-${i}`} className="text-[16px] font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#D84835] transition-colors">
                      {blog.title}
                    </h3>
                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between text-[12px] font-semibold text-slate-400">
                      <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                      <span className="flex items-center gap-1.5"><Clock size={14} aria-hidden="true" /> {blog.readTime}</span>
                    </div>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQ */}
      <section className="py-24 px-[2vw] bg-slate-50">
        <div className="w-full max-w-3xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-sm md:text-base text-slate-500">Everything you need to know about partnering with us.</p>
            </div>
          </FadeInSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: Pre-Footer CTA Block */}
      <section className="py-24 px-[2vw] bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <FadeInSection>
            <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl border border-slate-700">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D84835]/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
              
              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                    Ready to elevate your pet retail business?
                  </h2>
                  <p className="text-[14px] md:text-base text-slate-300 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                    Join over 3,000 successful retailers across India selling the world's most trusted premium pet brands. Setup your B2B account in minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="slide-bg-primary text-white px-8 py-3.5 rounded-[9px] font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg shadow-[#D84835]/20">
                      Become a Partner <ArrowRight size={16} />
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-[9px] font-bold text-[14px] transition-colors">
                      Talk to Sales
                    </button>
                  </div>
                </div>
                
                <div className="w-full max-w-sm bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hidden lg:block shadow-xl">
                  <h4 className="font-bold text-[11px] uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                    <Mail size={14} className="text-[#D84835]" /> Retailer Newsletter
                  </h4>
                  <p className="text-[13px] text-slate-400 mb-6 leading-relaxed">Get exclusive updates on new product lines, seasonal wholesale discounts, and industry trends.</p>
                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Store email address" className="w-full px-4 py-3 rounded-[9px] bg-slate-950/80 border border-slate-700 text-white text-[13px] focus:outline-none focus:border-[#D84835] transition-colors placeholder:text-slate-600" required />
                    <button type="submit" className="bg-white text-slate-900 px-4 py-3 rounded-[9px] font-bold text-[13px] hover:bg-slate-200 transition-colors w-full">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SECTION 16: Detailed Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 px-[2vw] border-t border-slate-900">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 pr-4">
              <img src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" alt="ABK Imports Logo" className="h-8 mb-8 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              <p className="text-[13px] leading-relaxed mb-8 max-w-sm font-medium">
                India's premier importer and B2B distributor of biologically appropriate pet nutrition, professional grooming supplies, and premium accessories since 2010.
              </p>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#D84835] hover:text-white transition-colors border border-slate-800"><Facebook size={16} /></a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#D84835] hover:text-white transition-colors border border-slate-800"><Instagram size={16} /></a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#D84835] hover:text-white transition-colors border border-slate-800"><Linkedin size={16} /></a>
              </div>
            </div>
            
            {/* Col 2: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><a href="#" className="hover:text-[#D84835] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Leadership Team</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Our Brands</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">News & Insights</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Careers</a></li>
              </ul>
            </div>
            
            {/* Col 3: Support */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest">Retailers</h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li><a href="#" className="hover:text-[#D84835] transition-colors">B2B Portal Login</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Become a Partner</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Marketing Assets</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Distributor Policies</a></li>
                <li><a href="#" className="hover:text-[#D84835] transition-colors">Report an Issue</a></li>
              </ul>
            </div>
            
            {/* Col 4: Detailed Contact */}
            <address className="lg:col-span-4 bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50 not-italic">
              <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D84835]" aria-hidden="true" /> Get In Touch
              </h4>
              <ul className="space-y-5 text-[13px]">
                <li className="flex gap-4">
                  <Building className="shrink-0 w-5 h-5 text-slate-500" aria-hidden="true" /> 
                  <span className="leading-relaxed font-medium">
                    <strong className="text-slate-200 block mb-1.5 font-bold">Corporate HQ</strong>
                    Block-A, Office No. 101, First Floor,<br/>
                    Pune IT Park, Bopodi, Pune - 411020<br/>
                    Maharashtra, India
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="shrink-0 w-5 h-5 text-slate-500" aria-hidden="true" /> 
                  <a href="tel:+9118002332025" className="hover:text-white transition-colors font-medium text-slate-300">1800-233-2025 <span className="text-slate-500 text-[11px]">(Toll Free)</span></a>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="shrink-0 w-5 h-5 text-slate-500" aria-hidden="true" /> 
                  <a href="mailto:b2b@abkimports.com" className="hover:text-white transition-colors font-medium text-slate-300">b2b@abkimports.com</a>
                </li>
              </ul>
            </address>
            
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-medium text-slate-500">
            <p>&copy; {new Date().getFullYear()} ABK Imports Pvt Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Shipping & Returns</a>
              <a href="#" className="hover:text-slate-300 transition-colors">FSSAI License</a>
            </div>
          </div>
          
        </div>
      </footer>

    </div>
  );
}

// ---------------------------
// Helper Components
// ---------------------------

// Reusable Mega Menu Component
function NavMegaMenu({ title, featuredTitle, featuredDesc, featuredBtn, col1Title, col1Links, col2Title, col2Links }) {
  return (
    <div className="group h-full flex items-center">
      <button className="flex items-center gap-1 hover:text-[#D84835] transition-colors py-2">
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      
      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility,transform] duration-300 translate-y-3 group-hover:translate-y-0 w-[860px]">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgb(0,0,0,0.12)] border border-slate-100 p-2.5 flex gap-2">
          
          {/* Left Featured Pane - Brand Gradient */}
          <div className="w-[35%] bg-gradient-to-br from-slate-900 via-slate-800 to-[#9a2a1a] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D84835]/35 rounded-full blur-[40px] pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-white text-[24px] font-bold leading-snug tracking-tight">
                {featuredTitle}
              </h3>
              <p className="text-slate-300 text-[12.5px] mt-3 leading-relaxed">{featuredDesc}</p>
            </div>
            <button className="relative z-10 slide-bg-secondary text-slate-900 py-2.5 px-5 rounded-[9px] text-xs font-bold mt-8 w-fit shadow-sm border border-slate-200/50">
              {featuredBtn}
            </button>
          </div>

          {/* Right Links Grid Pane */}
          <div className="w-[65%] grid grid-cols-2 gap-x-10 gap-y-6 p-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">{col1Title}</h4>
              {col1Links.map((link, i) => <MegaMenuLink key={`col1-${i}`} {...link} />)}
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">{col2Title}</h4>
              {col2Links.map((link, i) => <MegaMenuLink key={`col2-${i}`} {...link} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mega Menu Link Item Component
function MegaMenuLink({ icon, title, desc }) {
  return (
    <a href="#" className="flex items-start gap-3 group/link cursor-pointer p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D84835]/20" aria-label={`${title} - ${desc}`}>
      <div className="bg-slate-100 text-slate-600 p-2 rounded-lg group-hover/link:bg-[#D84835]/10 group-hover/link:text-[#D84835] transition-colors mt-0.5" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h5 className="text-[13px] font-bold text-slate-800 group-hover/link:text-[#D84835] transition-colors">{title}</h5>
        <p className="text-[11px] text-slate-500 mt-0.5">{desc}</p>
      </div>
    </a>
  )
}

// Reusable scroll animation component
function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      });
    }, { threshold: 0.1 }); 
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {children}
    </div>
  );
}

/** * Reusable track component to ensure perfect synchronization */
function ScrollerTrack({ CardComponent }) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex flex-col gap-6">
      <div className="w-[200%] flex gap-6 animate-scroll-left py-2 px-3">
        {[...products, ...products].map((product, idx) => (
          <CardComponent key={`row1-${idx}`} product={product} />
        ))}
      </div>

      <div className="w-[200%] flex gap-6 animate-scroll-right py-2 px-3 -ml-[25%]">
        {[...products.slice(3), ...products.slice(0,3), ...products.slice(3), ...products.slice(0,3)].map((product, idx) => (
          <CardComponent key={`row2-${idx}`} product={product} />
        ))}
      </div>

      <div className="w-[200%] flex gap-6 animate-scroll-left py-2 px-3 -ml-[15%]">
        {[...products.slice(5), ...products.slice(0,5), ...products.slice(5), ...products.slice(0,5)].map((product, idx) => (
          <CardComponent key={`row3-${idx}`} product={product} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------
// Card Components
// ---------------------------

function ProductCard({ product }) {
  return (
    <div className="flex items-center gap-4 bg-white border-2 border-slate-100 rounded-2xl p-3 min-w-[360px] h-[92px] card-shadow transition-transform hover:scale-[1.02] hover:border-[#D84835]/30 cursor-pointer">
      <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center text-2xl ${product.color} border border-black/5`}>
        {product.icon}
      </div>
      
      <div className="flex-1 overflow-hidden">
        <h3 className="font-semibold text-slate-800 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          {product.name}
        </h3>
        <p className="text-slate-500 text-xs mt-1 font-medium">
          Wholesale <span className="text-slate-700 font-semibold">{product.wholesale}</span>
        </p>
      </div>

      <div className="flex flex-col items-end border-l-2 border-slate-100 pl-4 shrink-0">
        <span className="text-slate-800 font-bold text-base tracking-tight">{product.demand}</span>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Demand</span>
          <span className="flex items-center gap-0.5 bg-green-50 text-green-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-200">
            <TrendingUp size={10} strokeWidth={2.5} /> {product.trend}
          </span>
        </div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="flex items-center gap-4 bg-slate-50/80 border-2 border-slate-100/50 rounded-2xl p-3 min-w-[360px] h-[92px]">
      <div className="w-14 h-14 shrink-0 rounded-xl bg-slate-200/50 animate-pulse"></div>
      
      <div className="flex-1 space-y-2.5">
        <div className="h-3.5 bg-slate-200/50 rounded-md w-10/12 animate-pulse"></div>
        <div className="h-3 bg-slate-200/50 rounded-md w-1/2 animate-pulse"></div>
      </div>

      <div className="flex flex-col items-end border-l-2 border-slate-100/50 pl-4 shrink-0 space-y-2.5">
        <div className="h-4 bg-slate-200/50 rounded-md w-16 animate-pulse"></div>
        <div className="h-3 bg-slate-200/50 rounded-md w-12 animate-pulse"></div>
      </div>
    </div>
  );
}

// Reusable FAQ Item
function FAQItem({ q, a, delay }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <FadeInSection delay={delay}>
      <div className="border border-slate-200 rounded-[12px] bg-white overflow-hidden transition-all duration-300 hover:border-slate-300">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-full px-6 py-5 flex items-center justify-between font-bold text-[14px] text-slate-900 hover:text-[#D84835] transition-colors text-left"
          aria-expanded={isOpen}
        >
          {q}
          <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#D84835] border-[#D84835] text-white rotate-180' : 'border-slate-200 text-slate-400 bg-slate-50'}`}>
            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
          </div>
        </button>
        <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-[13.5px] text-slate-500 leading-relaxed font-medium">{a}</p>
        </div>
      </div>
    </FadeInSection>
  )
}

// Dynamic Leaflet Map Component (Safe for Sandbox Environments)
function LeafletMap() {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    // Add required Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    
    // Add required Leaflet JS
    if (!document.getElementById('leaflet-js')) {
      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      document.head.appendChild(script);
    }

    // Initialize Map once Leaflet is loaded
    const checkLeaflet = setInterval(() => {
      if (window.L && mapRef.current && !mapRef.current._leaflet_id) {
        clearInterval(checkLeaflet);
        
        // Initialize focused on India
        const map = window.L.map(mapRef.current, { scrollWheelZoom: false, zoomControl: false }).setView([22.5937, 78.9629], 4.5);
        
        // Custom minimal map style
        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap &copy; CARTO'
        }).addTo(map);

        // Custom ABK Pin
        const customIcon = window.L.divIcon({
          className: 'custom-pin',
          html: `<div style="background-color:#D84835; width:16px; height:16px; border-radius:50%; border:3px solid white; box-shadow: 0 4px 10px rgba(216,72,53,0.4);"></div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        });

        // Add Distribution Hubs
        window.L.marker([18.5204, 73.8567], {icon: customIcon}).addTo(map).bindPopup('<b style="font-family:Poppins,sans-serif;font-size:12px;color:#0f172a;">Pune HQ</b><br><span style="font-size:11px;color:#64748b;">Central Hub</span>');
        window.L.marker([28.7041, 77.1025], {icon: customIcon}).addTo(map).bindPopup('<b style="font-family:Poppins,sans-serif;font-size:12px;color:#0f172a;">Delhi</b><br><span style="font-size:11px;color:#64748b;">North Hub</span>');
        window.L.marker([12.9716, 77.5946], {icon: customIcon}).addTo(map).bindPopup('<b style="font-family:Poppins,sans-serif;font-size:12px;color:#0f172a;">Bangalore</b><br><span style="font-size:11px;color:#64748b;">South Hub</span>');
        window.L.marker([19.0760, 72.8777], {icon: customIcon}).addTo(map).bindPopup('<b style="font-family:Poppins,sans-serif;font-size:12px;color:#0f172a;">Mumbai</b><br><span style="font-size:11px;color:#64748b;">West Hub</span>');
      }
    }, 100);

    return () => clearInterval(checkLeaflet);
  }, []);

  return (
    <div className="w-full h-full relative bg-slate-50">
      <style>{`.leaflet-container { z-index: 10 !important; font-family: 'Poppins', sans-serif; background: #f8fafc; } .leaflet-popup-content-wrapper { border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; }`}</style>
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
}
