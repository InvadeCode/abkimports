import React, { useState, useEffect } from 'react';
import { ChevronDown, PawPrint, FileText, TrendingUp, Sparkles, Home, Heart, HandHeart, Wallet, List, MessageSquare, LifeBuoy, AlertTriangle, Box, Briefcase, Users, Package, Award, Target, Newspaper, BookOpen, Settings, Truck, Star, Map as MapIcon, Shield, CheckCircle, ArrowRight, Clock, Building, Phone, Mail, Facebook, Instagram, Linkedin, Leaf, Globe, HeartHandshake } from 'lucide-react';

// Pet product data tailored for wholesale/import metrics
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

const brandPartners = ['ORIJEN', 'ACANA', 'KONG', 'FURMINATOR', 'TROPICLEAN', 'BEAPHAR', 'FLEXI', 'TRIXIE', 'SAVIC', 'EARTHBATH', 'SCHESIR', 'HYDRA', 'BIO-GROOM'];

const recentBlogs = [
  { title: 'The rise of grain-free diets in Indian pet retail', date: 'Oct 12, 2026', readTime: '4 min read', category: 'Market Trends' },
  { title: 'Optimizing shelf space for high-margin accessories', date: 'Oct 05, 2026', readTime: '6 min read', category: 'Merchandising' },
  { title: 'ABK Imports secures exclusive rights for new brand', date: 'Sep 28, 2026', readTime: '3 min read', category: 'Company News' }
];

const features = [
  { title: "Direct Importer Pricing", desc: "Bypass regional distributors and source directly from the master importer.", icon: <Box /> },
  { title: "Guaranteed Authenticity", desc: "100% genuine products directly from global manufacturers with verifiable supply chains.", icon: <Shield /> },
  { title: "Live Inventory Sync", desc: "Our B2B portal reflects real-time warehouse stock so you never over-commit to customers.", icon: <Sparkles /> },
  { title: "Dedicated Account Reps", desc: "Get personalized support for order planning, bulk discounts, and merchandising.", icon: <Users /> }
];

const CATALOG_URL = "https://5489382d-e5dd-44ec-a4eb-680874f5cf71.usrfiles.com/ugd/548938_976dfb283a734b59b1edf75759e74bee.pdf";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');

  // Preloader Logic: Fades in the logo with color, then hides preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Subtle interactive parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 8; 
    const y = (clientY / window.innerHeight - 0.5) * 8;
    setMousePos({ x, y });
  };

  const openCatalog = () => {
    window.open(CATALOG_URL, "_blank");
  };

  return (
    <>
      {/* --- PRELOADER (Logo fades to color) --- */}
      <div className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-1000 ${isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative">
          <img 
            src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" 
            alt="Loading..." 
            className="w-24 h-24 object-contain grayscale opacity-20"
          />
          <div className="absolute inset-0 overflow-hidden animate-[wipe_2s_ease-in-out_forwards]">
            <img 
              src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" 
              alt="Loading..." 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>

      <div 
        className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col relative"
        onMouseMove={handleMouseMove}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* --- GLOBAL STYLES & SEO --- */}
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
          
          /* Preloader Animation */
          @keyframes wipe {
            0% { clip-path: inset(100% 0 0 0); }
            100% { clip-path: inset(0 0 0 0); }
          }
          
          /* Page Transition Animation */
          @keyframes pageFadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-page-fade-in {
            animation: pageFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          /* Marquee Animations */
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
          
          /* Deep Shadows */
          .card-shadow { box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.04); }

          /* Left-to-Right Wiping Button Hovers */
          .slide-bg-primary {
            background: linear-gradient(to right, #b03929 50%, #D84835 50%);
            background-size: 200% 100%;
            background-position: 100% 0;
            transition: background-position 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .slide-bg-primary:hover { background-position: 0 0; }

          .slide-bg-secondary {
            background: linear-gradient(to right, #f1f5f9 50%, #ffffff 50%);
            background-size: 200% 100%;
            background-position: 100% 0;
            transition: background-position 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .slide-bg-secondary:hover { background-position: 0 0; }
        `}} />
        
        {/* Advanced SEO & AIO Hidden Context */}
        <div className="sr-only">
          <h1>ABK Imports: India's Premier Wholesale Pet Products Distributor</h1>
          <p>India's premier importer and B2B distributor of premium pet food, grooming supplies, and accessories. We supply top global brands like Orijen, Acana, Kong, and Trixie to over 3000 retailers nationwide.</p>
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WholesaleStore",
            "name": "ABK Imports",
            "image": "https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png",
            "address": { "@type": "PostalAddress", "streetAddress": "4th Floor, Verdant 84, Office No. 402, N Main Rd, Koregaon Park East, Mundhwa", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411036", "addressCountry": "IN" },
            "telephone": "1800-233-2025"
          })}} />
        </div>
        
        {/* 1. Floating Navigation Bar (100vw, 2% padding) */}
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-[2vw] pointer-events-none">
          <nav aria-label="Main Navigation" className="pointer-events-auto relative flex items-center justify-between px-5 py-3 w-full bg-white/95 backdrop-blur-md rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            {/* Logo */}
            <button onClick={() => setActivePage('home')} className="flex items-center gap-2 pl-2 focus:outline-none">
              <img src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" alt="ABK Imports Logo" className="h-[30px] md:h-[35px] object-contain" />
            </button>
            
            {/* Centered Links (Left-Aligned Structure internally) */}
            <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 text-[13px] font-semibold text-slate-600">
            
              {/* Massive Consolidated About Us Mega Menu */}
              <NavMegaMenu 
                title="About Us"
                featuredTitle={<>Discover<br/>Our Story.</>}
                featuredDesc="India's leading importer of premium pet supplies since 2010."
                featuredBtn="Read Our Journey"
                onFeatureClick={() => setActivePage('about')}
                col1Title="Who We Are"
                col1Links={[
                  { icon: <Briefcase size={16}/>, title: "Company Profile", desc: "Our mission and vision", onClick: () => setActivePage('about') },
                  { icon: <Users size={16}/>, title: "Leadership Team", desc: "Meet our directors", onClick: () => setActivePage('leadership') },
                  { icon: <Award size={16}/>, title: "Awards & Milestones", desc: "Industry recognition", onClick: () => setActivePage('awards') },
                  { icon: <Shield size={16}/>, title: "Quality Assurance", desc: "Our import standards", onClick: () => setActivePage('quality') }
                ]}
                col2Title="What We Offer"
                col2Links={[
                  { icon: <Star size={16}/>, title: "Our Brands", desc: "Explore global & in-house brands", onClick: () => setActivePage('brands') },
                  { icon: <List size={16}/>, title: "Product Categories", desc: "Browse the full catalog", onClick: () => setActivePage('categories') }
                ]}
              />

              <button onClick={() => setActivePage('impact')} className="hover:text-[#D84835] transition-colors py-2 focus:outline-none">Our Impact</button>
              <button onClick={() => setActivePage('news')} className="hover:text-[#D84835] transition-colors py-2 focus:outline-none">News & Insights</button>
              <button onClick={() => setActivePage('blogs')} className="hover:text-[#D84835] transition-colors py-2 focus:outline-none">Blogs</button>
              <button onClick={() => setActivePage('contact')} className="hover:text-[#D84835] transition-colors py-2 focus:outline-none">Contact</button>
            </div>
            
            {/* Social Icons & Retailer Login (Right Aligned) */}
            <div className="flex items-center gap-5 text-slate-400 pr-2">
              <a href="#" aria-label="LinkedIn" className="hover:text-[#D84835] transition-colors focus:outline-none">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#D84835] transition-colors focus:outline-none">
                <Instagram size={18} />
              </a>
            </div>
          </nav>
        </div>

        {/* --- ROUTING SWITCH --- */}
        {/* Ensures soft fade transitions between pages */}
        <div className="flex-1 w-full animate-page-fade-in" key={activePage}>
          {activePage === 'home' && <HomePage mousePos={mousePos} openCatalog={openCatalog} />}
          {activePage === 'about' && <AboutPage openCatalog={openCatalog} />}
          {activePage === 'leadership' && <LeadershipPage />}
          {activePage === 'awards' && <AwardsPage />}
          {activePage === 'quality' && <QualityPage />}
          {activePage === 'impact' && <ImpactPage />}
          {activePage === 'news' && <NewsPage />}
          {activePage === 'blogs' && <BlogsPage />}
          {activePage === 'brands' && <BrandsPage openCatalog={openCatalog} />}
          {activePage === 'categories' && <CategoriesPage openCatalog={openCatalog} />}
          {activePage === 'contact' && <ContactPage />}
        </div>

        {/* --- GLOBAL PRE-FOOTER (Curved Reveal Illusion) --- */}
        {/* This creates the illusion that the footer is revealed from underneath. */}
        {activePage !== 'contact' && (
          <section className="pt-24 pb-40 px-[2vw] bg-white relative z-20 -mb-24 rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full text-left">
            <div className="w-full">
              <FadeInSection>
                <div className="relative rounded-[16px] overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D84835]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                  
                  <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="w-full max-w-xl">
                      <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-5 leading-tight text-white">
                        Ready to elevate your pet retail business?
                      </h2>
                      <p className="text-[14px] text-slate-300 mb-10 max-w-md leading-relaxed font-normal">
                        Join over 3,000 successful retailers across India selling the world's most trusted premium pet brands. Setup your B2B account in minutes.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <button className="slide-bg-primary text-white px-8 py-3.5 rounded-[9px] font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg shadow-[#D84835]/20">
                          Become a Partner <ArrowRight size={16} />
                        </button>
                        <button onClick={openCatalog} className="slide-bg-secondary text-slate-900 px-8 py-3.5 rounded-[9px] font-bold text-[14px] border border-transparent hover:border-white/10 transition-colors">
                          Download Catalog
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-full max-w-sm bg-slate-950/50 backdrop-blur-md p-8 rounded-[12px] border border-slate-800 hidden lg:block shadow-xl">
                      <h4 className="font-bold text-[11px] uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                        <Mail size={14} className="text-[#D84835]" /> Retailer Newsletter
                      </h4>
                      <p className="text-[13px] text-slate-400 mb-6 leading-relaxed font-normal">Get exclusive updates on new product lines, seasonal wholesale discounts, and industry trends.</p>
                      <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Store email address" className="w-full px-4 py-3 rounded-[9px] bg-slate-900 border border-slate-700 text-white text-[13px] font-normal focus:outline-none focus:border-[#D84835] transition-colors placeholder:text-slate-500" required />
                        <button type="submit" className="bg-[#D84835] text-white px-4 py-3 rounded-[9px] font-bold text-[13px] hover:bg-[#c23f2d] transition-colors w-full">Subscribe Now</button>
                      </form>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </section>
        )}

        {/* --- GLOBAL DETAILED FOOTER --- */}
        <footer className="bg-slate-950 text-slate-400 pt-36 pb-12 px-[2vw] relative z-0 w-full text-left">
          <div className="w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
              {/* Branding Col */}
              <div className="lg:col-span-4 pr-4">
                <img src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" alt="ABK Imports Logo" className="h-8 mb-8 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                <p className="text-[13px] leading-relaxed mb-8 max-w-sm font-normal">
                  India's premier importer and B2B distributor of biologically appropriate pet nutrition, professional grooming supplies, and premium accessories since 2010.
                </p>
                <div className="flex gap-3 justify-start">
                  <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-[9px] bg-slate-900 flex items-center justify-center hover:bg-[#D84835] hover:text-white transition-colors border border-slate-800"><Facebook size={16} /></a>
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-[9px] bg-slate-900 flex items-center justify-center hover:bg-[#D84835] hover:text-white transition-colors border border-slate-800"><Instagram size={16} /></a>
                  <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-[9px] bg-slate-900 flex items-center justify-center hover:bg-[#D84835] hover:text-white transition-colors border border-slate-800"><Linkedin size={16} /></a>
                </div>
              </div>
              
              {/* Links Col 1 */}
              <div className="lg:col-span-2">
                <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest">Company</h4>
                <nav aria-label="Footer Company Links">
                  <ul className="space-y-4 text-[13px] font-medium">
                    <li><button onClick={() => setActivePage('about')} className="hover:text-[#D84835] transition-colors focus:outline-none">About Us</button></li>
                    <li><button onClick={() => setActivePage('leadership')} className="hover:text-[#D84835] transition-colors focus:outline-none">Leadership Team</button></li>
                    <li><button onClick={() => setActivePage('brands')} className="hover:text-[#D84835] transition-colors focus:outline-none">Our Brands</button></li>
                    <li><button onClick={() => setActivePage('news')} className="hover:text-[#D84835] transition-colors focus:outline-none">News & Insights</button></li>
                    <li><button onClick={() => setActivePage('contact')} className="hover:text-[#D84835] transition-colors focus:outline-none">Careers</button></li>
                  </ul>
                </nav>
              </div>
              
              {/* Links Col 2 */}
              <div className="lg:col-span-2">
                <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest">Retailers</h4>
                <nav aria-label="Footer Retailer Links">
                  <ul className="space-y-4 text-[13px] font-medium">
                    <li><a href="#" className="hover:text-[#D84835] transition-colors">B2B Portal Login</a></li>
                    <li><button onClick={() => setActivePage('contact')} className="hover:text-[#D84835] transition-colors focus:outline-none">Become a Partner</button></li>
                    <li><a href="#" className="hover:text-[#D84835] transition-colors">Marketing Assets</a></li>
                    <li><a href="#" className="hover:text-[#D84835] transition-colors">Distributor Policies</a></li>
                    <li><button onClick={() => setActivePage('contact')} className="hover:text-[#D84835] transition-colors focus:outline-none">Report an Issue</button></li>
                  </ul>
                </nav>
              </div>
              
              {/* Contact Card */}
              <address className="lg:col-span-4 bg-slate-900/40 p-8 rounded-[12px] border border-slate-800/50 not-italic">
                <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D84835]" aria-hidden="true" /> Get In Touch
                </h4>
                <ul className="space-y-5 text-[13px]">
                  <li className="flex gap-4 items-start">
                    <Building className="shrink-0 w-5 h-5 text-slate-500 mt-0.5" aria-hidden="true" /> 
                    <span className="leading-relaxed font-normal text-left">
                      <strong className="text-slate-200 block mb-1.5 font-bold">Corporate HQ</strong>
                      4th Floor, Verdant 84, Office No. 402,<br/>
                      N Main Rd, Koregaon Park East, Mundhwa,<br/>
                      Pune, Maharashtra 411036
                    </span>
                  </li>
                  
                  <li className="flex gap-4 items-center pt-2 border-t border-slate-800/50">
                    <Phone className="shrink-0 w-5 h-5 text-slate-500" aria-hidden="true" /> 
                    <a href="tel:+9118002332025" className="hover:text-white transition-colors font-bold text-slate-300">1800-233-2025 <span className="text-slate-500 text-[11px] font-normal ml-1">(Toll Free)</span></a>
                  </li>
                  <li className="flex gap-4 items-center">
                    <Mail className="shrink-0 w-5 h-5 text-slate-500" aria-hidden="true" /> 
                    <a href="mailto:info@abkimports.com" className="hover:text-white transition-colors font-bold text-slate-300">info@abkimports.com</a>
                  </li>
                </ul>
              </address>
              
            </div>
            
            <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] font-normal text-slate-500">
              <p>&copy; {new Date().getFullYear()} ABK Imports Pvt Ltd. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center">
                <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Shipping & Returns</a>
                <a href="#" className="hover:text-slate-300 transition-colors">FSSAI License</a>
              </div>
            </div>
            
          </div>
        </footer>

      </div>
    </>
  );
}

// ---------------------------
// FROZEN HOME PAGE HERO & SECTIONS
// ---------------------------

function HomePage({ mousePos, openCatalog }) {
  return (
    <>
      {/* 2. Cohesive Interactive Hero Section (FROZEN LAYOUT) */}
      <section className="relative w-full flex flex-col items-center pt-44 pb-12 min-h-[calc(100vh-80px)] overflow-hidden">
        
        {/* Interactive Background Grid (Faded Squares with Localized Radial Mask) */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] transition-transform duration-200 ease-out"
          style={{
            backgroundImage: 'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            maskImage: `radial-gradient(circle 500px at calc(50% + ${mousePos.x * 20}px) calc(50% + ${mousePos.y * 20}px), black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 500px at calc(50% + ${mousePos.x * 20}px) calc(50% + ${mousePos.y * 20}px), black, transparent)`
          }}
        ></div>

        {/* Hero Copy */}
        <div className="relative z-30 flex flex-col items-center">
          
          {/* Animated Gradient Border Badge */}
          <div className="relative p-[1px] rounded-[9px] overflow-hidden mb-6 cursor-pointer group">
            {/* Spinning gradient for the border glow */}
            <div className="absolute inset-0 bg-[#f4cccc] group-hover:bg-[#eebaba] transition-colors"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_280deg,#D84835_360deg)] animate-[spin_3s_linear_infinite]"></div>
            
            {/* Inner pill content */}
            <div className="relative flex items-center gap-1.5 bg-[#fdf6f5] rounded-[8px] px-3.5 py-1.5 z-10">
              <Sparkles size={12} className="text-[#D84835]" />
              <span className="text-[10px] font-bold text-[#D84835] tracking-widest uppercase">New Global Brands Added</span>
            </div>
          </div>
          
          {/* Reduced Font Sizes */}
          <h1 className="text-[28px] md:text-[40px] font-bold tracking-tight text-center max-w-4xl px-4 leading-[1.2] text-slate-900">
            Discover <span className="text-[#D84835]">winning pet products</span><br className="hidden md:block" /> your customers will love
          </h1>
          
          {/* Reduced Font Sizes */}
          <p className="mt-4 text-[13px] md:text-[14px] text-slate-500 text-center max-w-3xl px-4 font-normal leading-relaxed">
            Partner with India's most trusted wholesale pet distributor. Find trending dog and cat supplies, optimize your retail inventory, and effortlessly grow your business with high-demand brands.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button className="slide-bg-primary text-white px-6 py-2.5 rounded-[9px] shadow-lg shadow-[#D84835]/20 font-semibold text-sm">
              Partner With Us
            </button>
            <button onClick={openCatalog} className="flex items-center gap-2 slide-bg-secondary border border-slate-200 text-slate-700 px-6 py-2.5 rounded-[9px] shadow-sm hover:border-slate-300 transition-colors font-semibold text-sm">
              <FileText className="w-4 h-4 text-slate-500" />
              Download Catalog
            </button>
          </div>
        </div>

        {/* 3. The Interactive Split Pyramid Scroller */}
        <div className="relative w-full mt-6 flex flex-col items-center justify-start flex-1 min-h-[450px]">
          
          {/* CSS Keyframes */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
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
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ clipPath: 'polygon(20% 50%, 100% -40%, 100% 140%)' }}>
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
            <div className="relative w-[110px] h-[110px] p-6 slide-bg-primary rounded-[24px] shadow-[0_4px_40px_rgba(216,72,53,0.4)] flex items-center justify-center border-[3px] border-white/90 cursor-pointer pointer-events-auto">
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

      {/* SECTION 4: Value Proposition Grid */}
      <section className="bg-slate-50 border-t border-slate-200 py-24 px-[2vw] w-full text-left">
        <div className="w-full">
          <FadeInSection>
            <div className="mb-12">
              <h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-4">
                Empowering <span className="text-[#D84835]">3,000+</span> Pet Retailers
              </h2>
              <p className="text-[14px] text-slate-500 max-w-2xl font-normal leading-relaxed">
                We handle the global sourcing, complex customs, and heavy warehousing. You focus on giving your customers the best pet products in the world.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="bg-white border border-slate-200 p-8 rounded-[12px] shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6 group-hover:bg-[#D84835]/10 group-hover:border-[#D84835]/20 transition-colors">
                    {React.cloneElement(feat.icon, { className: "text-slate-600 group-hover:text-[#D84835] transition-colors w-5 h-5" })}
                  </div>
                  <h3 className="text-[15px] font-bold text-slate-900 mb-3">{feat.title}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed flex-1 font-normal">{feat.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Brand Showcase Marquee */}
      <section className="py-20 px-[2vw] bg-white border-b border-slate-200 w-full text-left overflow-hidden">
        <FadeInSection>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8">Official National Distributor For Global Leaders</p>
          <div className="flex flex-wrap gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brandPartners.slice(0, 6).map((brand, i) => (
              <h3 key={i} className="text-xl md:text-3xl font-black text-slate-800 tracking-tighter hover:text-[#D84835] transition-colors cursor-pointer">{brand}</h3>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 6: The ABK Advantage Infographic (Step-by-step) */}
      <section className="py-24 px-[2vw] bg-slate-900 text-white w-full text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D84835]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="w-full relative z-10">
          <FadeInSection>
            <div className="mb-16 max-w-3xl">
              <span className="text-[#D84835] text-[11px] font-bold uppercase tracking-widest block mb-3">Supply Chain Integrity</span>
              <h2 className="text-[28px] font-bold tracking-tight mb-4">From Global Factories to Your Shelves.</h2>
              <p className="text-[14px] text-slate-400 font-normal leading-relaxed">
                We manage an end-to-end, cold-chain compliant logistics network to ensure absolute authenticity and product safety.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-6 left-10 right-10 h-[1px] bg-slate-800 z-0"></div>
            {[
              { step: "01", title: "Direct Sourcing", desc: "Procured straight from international manufacturing plants. No grey markets." },
              { step: "02", title: "Customs & AQCS", desc: "Rigorous legal clearance, FSSAI approvals, and animal quarantine checks." },
              { step: "03", title: "Climate Warehousing", desc: "Stored in our state-of-the-art Pune Trade Centre under strict temperature control." },
              { step: "04", title: "Rapid Dispatch", desc: "B2B orders shipped to your retail store within 24-48 hours via premium logistics." }
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-[9px] bg-slate-800 border border-slate-700 flex items-center justify-center text-[#D84835] font-black text-lg mb-6 shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-slate-400 font-normal leading-relaxed">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: B2B Portal Software Mockup */}
      <section className="py-24 px-[2vw] bg-white overflow-hidden border-b border-slate-200 w-full text-left">
        <div className="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="w-full lg:w-[45%]">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                <Box size={14} className="text-[#D84835]" /> Proprietary Software
              </div>
              <h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-5 leading-tight">
                Ordering wholesale has never been this seamless.
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-8 font-normal">
                Say goodbye to messy spreadsheets and long email chains. Our custom-built B2B portal puts the power in your hands. Browse live inventory, check margins, and place restocks in seconds.
              </p>
              <ul className="space-y-4">
                {['Live stock availability across all regional warehouses', 'One-click reordering of your store\'s top sellers', 'Downloadable tax invoices and marketing assets', 'Real-time order tracking and dispatch alerts'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-slate-700 font-medium leading-snug">
                    <CheckCircle className="text-[#D84835] shrink-0 w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <FadeInSection delay={200}>
              <div className="relative rounded-[12px] bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col">
                <div className="w-full h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="ml-4 w-48 h-5 bg-white border border-slate-200 rounded-[4px]"></div>
                </div>
                <div className="flex flex-1 p-4 gap-4 bg-slate-50/50">
                  <div className="w-1/4 hidden sm:flex flex-col gap-2 border-r border-slate-200 pr-4">
                    <div className="w-full h-6 bg-slate-200/50 rounded-[4px] mb-4"></div>
                    {[1,2,3,4].map(i => <div key={i} className="w-3/4 h-3 bg-slate-200/50 rounded-[4px]"></div>)}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <div className="w-1/3 h-5 bg-slate-200 rounded-[4px]"></div>
                      <div className="px-3 py-1 bg-[#D84835] text-white rounded-[4px] text-[10px] font-bold">New Order</div>
                    </div>
                    <div className="space-y-3">
                      {[1,2,3].map((i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-[9px] border border-slate-200 shadow-sm">
                          <div className="w-10 h-10 bg-slate-100 rounded-[6px] shrink-0"></div>
                          <div className="flex-1 space-y-2">
                            <div className="w-2/3 h-3 bg-slate-200 rounded-[4px]"></div>
                            <div className="flex gap-2">
                              <div className="w-1/4 h-2 bg-slate-100 rounded-[4px]"></div>
                              <div className="w-1/4 h-2 bg-slate-100 rounded-[4px]"></div>
                            </div>
                          </div>
                          <div className="w-16 h-8 bg-slate-50 border border-slate-200 rounded-[4px]"></div>
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

      {/* SECTION 8: Interactive Category Spotlight */}
      <section className="py-24 px-[2vw] bg-slate-50 w-full text-left border-b border-slate-200">
        <FadeInSection>
          <div className="mb-12">
            <h2 className="text-[28px] font-bold text-slate-900 mb-3">Explore by Category</h2>
            <p className="text-[14px] text-slate-500 font-normal max-w-2xl">From everyday nutrition to professional grooming setups, our catalogue covers every square foot of your retail space.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Biologically Appropriate Diets", desc: "Orijen, Acana, Wellness CORE", icon: <Star/>, color: "bg-orange-50", text: "text-orange-600" },
              { title: "Toys & Enrichment", desc: "Kong, Outward Hound, Nerf", icon: <Target/>, color: "bg-blue-50", text: "text-blue-600" },
              { title: "Professional Grooming", desc: "Hydra, Bio-Groom, TropiClean", icon: <Sparkles/>, color: "bg-pink-50", text: "text-pink-600" }
            ].map((cat, i) => (
              <div key={i} className="group bg-white border border-slate-200 rounded-[12px] p-8 hover:border-[#D84835] hover:shadow-lg transition-all cursor-pointer relative overflow-hidden">
                <div className={`w-12 h-12 ${cat.color} ${cat.text} rounded-[9px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-[13px] text-slate-500 font-normal mb-8">{cat.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D84835] to-[#b03929] transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <span className="text-[#D84835] text-[12px] font-bold flex items-center gap-1">View Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/></span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 9: ROI Margin Calculator */}
      <section className="py-24 px-[2vw] bg-slate-900 text-white relative overflow-hidden w-full text-left">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeInSection>
            <h2 className="text-[28px] font-bold tracking-tight mb-5 text-white">Maximize your shelf space ROI.</h2>
            <p className="text-[14px] text-slate-400 leading-relaxed mb-8 font-normal max-w-lg">
              Premium pet food and accessories yield significantly higher margins per square foot compared to standard grocery lines. Upgrade your inventory and see the difference in your monthly P&L.
            </p>
            <div className="space-y-4 max-w-md">
              <div className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-[12px] flex justify-between items-center">
                <span className="text-[13px] font-medium text-slate-300">Avg. Standard Pet Food Margin</span>
                <span className="text-[15px] font-bold text-slate-100">12 - 15%</span>
              </div>
              <div className="bg-[#D84835]/10 border border-[#D84835]/30 p-5 rounded-[12px] flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D84835]"></div>
                <span className="text-[13px] font-bold text-[#D84835]">ABK Premium Brands Margin</span>
                <span className="text-[18px] font-black text-[#D84835]">30 - 45%+</span>
              </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div className="bg-slate-950 p-8 rounded-[12px] border border-slate-800 shadow-2xl relative overflow-hidden max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="mb-8 flex justify-between items-start border-b border-slate-800 pb-6">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">Example Product</p>
                  <p className="text-[14px] font-bold text-slate-200">Orijen Original 11.4kg</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1.5">MSRP</p>
                  <h4 className="text-[20px] font-bold text-white">₹11,500</h4>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[12px] font-semibold">
                  <span className="text-slate-400">Wholesale Cost</span>
                  <span className="text-green-400">Your Profit (32%)</span>
                </div>
                <div className="w-full h-2.5 flex rounded-full overflow-hidden bg-slate-800">
                  <div className="w-[68%] bg-slate-600 h-full"></div>
                  <div className="w-[32%] bg-green-500 h-full relative"></div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[9px] p-5 flex justify-between items-center border border-slate-800">
                <span className="text-[13px] text-slate-400 font-medium">Net Margin per unit</span>
                <span className="text-[20px] font-bold text-green-400">₹3,700</span>
              </div>
              
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* SECTION 10: Retailer Testimonials */}
      <section className="py-24 px-[2vw] bg-slate-50 w-full text-left border-b border-slate-200">
        <FadeInSection>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-3">Retailer Success Stories</h2>
              <p className="text-[14px] text-slate-500 font-normal">Hear from the store owners who scaled their business with ABK Imports.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Switching to ABK for our premium lines like Acana was the best decision. The B2B portal saves me hours every week, and the stock is always reliable.", author: "Rajesh K.", store: "Paws & Claws, Mumbai" },
              { quote: "The margins on their in-house brands like Chip Chops are incredible. They fly off the shelves and customer retention is at an all-time high.", author: "Priya S.", store: "The Pet Boutique, Bangalore" },
              { quote: "Their dedicated account managers actually care about our merchandising. They provided free display racks that completely transformed our store layout.", author: "Amit P.", store: "Furry Friends, Delhi" }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm relative hover:shadow-md transition-shadow">
                <MessageSquare size={24} className="text-slate-100 absolute top-6 right-6" />
                <p className="text-[14px] text-slate-700 italic leading-relaxed mb-6">"{test.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm border border-slate-200">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-slate-900">{test.author}</h4>
                    <p className="text-[11px] text-slate-500 font-normal">{test.store}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION 11: Dedicated Support Highlight */}
      <section className="py-24 px-[2vw] bg-white w-full text-left border-b border-slate-200">
        <div className="w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2">
            <FadeInSection>
              <div className="w-full aspect-[4/3] bg-slate-100 rounded-[12px] border border-slate-200 overflow-hidden relative shadow-inner">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" alt="Support Team" className="w-full h-full object-cover grayscale opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-[9px] border border-slate-200 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-[9px] flex items-center justify-center text-green-600 border border-green-100"><Phone size={20}/></div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-900">Priority B2B Hotline</h4>
                    <p className="text-[12px] text-slate-500 font-normal">1800-233-2025 (Mon-Sat)</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
          <div className="w-full md:w-1/2">
            <FadeInSection delay={200}>
              <h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-5 leading-tight">
                Not just an importer. Your strategic growth partner.
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-normal">
                Every registered retailer is assigned a Dedicated Account Manager. We don't just ship boxes; we help you analyze your demographic and pick the fastest-moving SKUs.
              </p>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-8 font-normal">
                Get custom planograms, free marketing assets, and priority resolution on any transit damages. Your success is our bottom line.
              </p>
              <button className="slide-bg-primary text-white px-8 py-3.5 rounded-[9px] font-semibold text-[14px] shadow-sm">
                Speak to Sales
              </button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* NEW SECTION 12: Detailed Interactive Map */}
      <section className="py-24 px-[2vw] bg-slate-50 w-full text-left border-b border-slate-200">
        <FadeInSection>
          <div className="mb-12">
             <h2 className="text-[28px] font-bold text-slate-900 mb-3">Our National Footprint</h2>
             <p className="text-[14px] text-slate-500 font-normal">Explore our Corporate HQ, Central Warehouses, and 100+ Authorized Dealer network across India.</p>
          </div>
          <div className="w-full h-[500px] bg-slate-100 rounded-[12px] overflow-hidden border border-slate-200 shadow-sm relative">
            <LeafletMap />
          </div>
        </FadeInSection>
      </section>

      {/* NEW SECTION 13: Recent News & Blogs Snippet */}
      <section className="py-24 px-[2vw] bg-white border-b border-slate-200 w-full text-left">
        <div className="w-full">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[28px] font-bold tracking-tight text-slate-900 mb-3">Retailer Insights</h2>
                <p className="text-[14px] text-slate-500 font-normal">Market trends, merchandising tips, and global brand announcements.</p>
              </div>
              <button className="text-[13px] font-bold text-[#D84835] flex items-center gap-1 hover:text-[#b03929] transition-colors group">
                View All Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recentBlogs.map((blog, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <article className="bg-white border border-slate-200 rounded-[12px] overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer h-full flex flex-col" aria-labelledby={`blog-title-${i}`}>
                  <div className="w-full h-40 bg-slate-50 relative overflow-hidden border-b border-slate-100" aria-hidden="true">
                    <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-[6px] border border-slate-200 text-[10px] font-bold text-slate-700 uppercase tracking-widest shadow-sm">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 id={`blog-title-${i}`} className="text-[15px] font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#D84835] transition-colors">
                      {blog.title}
                    </h3>
                    <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between text-[12px] font-medium text-slate-500">
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

    </>
  );
}

// ---------------------------
// INNER PAGES COMPONENTS
// ---------------------------

// Reusable Upgraded Hero for Inner Pages
function InnerPageHero({ title, subtitle, bgImage }) {
  return (
    <div className="w-full pt-52 pb-32 md:pt-64 md:pb-40 px-[2vw] relative overflow-hidden bg-slate-900">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
         <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-50" />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D84835]/30 blur-[140px] rounded-full pointer-events-none z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-left pl-[1vw]">
        <div className="w-16 h-1 bg-[#D84835] mb-8 rounded-full"></div>
        <h1 className="text-[40px] md:text-[56px] font-extrabold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">{title}</h1>
        <p className="text-slate-300 text-[16px] md:text-[18px] font-normal leading-relaxed max-w-2xl drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
}

function AboutPage({ openCatalog }) {
  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      <InnerPageHero 
        title="Driven by Love. Defined by Quality." 
        subtitle="At the heart of India's booming pet industry is something simple: people love their pets more deeply than ever before."
        bgImage="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Intro */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="max-w-4xl mb-12">
            <h2 className="text-[28px] font-bold text-slate-900 mb-6">Our Mission & Vision</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
              From products on retail shelves to the professionals in grooming salons and vet clinics, we craft and curate to foster love for pets. We identify and partner with leading international pet brands, curate products suited for the Indian market, and distribute them across a growing network.
            </p>
            <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
              Our vision is to elevate the standard of pet care in India by ensuring that every pet parent has access to the world's most biologically appropriate, safe, and innovative products through their trusted local retailers.
            </p>
          </div>
        </FadeInSection>

        {/* Section 3: Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <FadeInSection delay={100}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6">
                <Package className="text-slate-600 w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3">A Chain of Conviction</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                Every piece in this catalogue passed through many hands before it reached yours. Each product that arrives at your doorstep is rigorously tested with our expert stamp of approval.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6">
                <Users className="text-slate-600 w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3">The Last Mile of Care</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                Our retailers and distributors are the final, essential act of care. Every shelf where an ABK product is displayed is an extension of the belief we first built.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6">
                <Award className="text-slate-600 w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3">India Grooming Show</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                Our commitment to the professionals who give meaning to everything we import. A stage for groomers to grow, connect, and be celebrated.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Section 4: By The Numbers */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="bg-slate-900 rounded-[12px] p-16 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D84835]/20 rounded-full blur-[60px] pointer-events-none"></div>
             <div>
               <h4 className="text-[40px] font-black text-white mb-2">15+</h4>
               <p className="text-[13px] text-slate-400 font-medium uppercase tracking-widest">Years of Trust</p>
             </div>
             <div>
               <h4 className="text-[40px] font-black text-white mb-2">3000+</h4>
               <p className="text-[13px] text-slate-400 font-medium uppercase tracking-widest">Active Retailers</p>
             </div>
             <div>
               <h4 className="text-[40px] font-black text-white mb-2">100+</h4>
               <p className="text-[13px] text-slate-400 font-medium uppercase tracking-widest">Global Brands</p>
             </div>
             <div>
               <h4 className="text-[40px] font-black text-white mb-2">24/7</h4>
               <p className="text-[13px] text-slate-400 font-medium uppercase tracking-widest">Partner Support</p>
             </div>
          </div>
        </FadeInSection>
      </div>

      {/* Section 5: Experience Center */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="bg-white rounded-[12px] border border-slate-200 shadow-sm p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="relative z-10 flex-1">
              <h2 className="text-[28px] font-bold text-slate-900 mb-4">A Room Full of Reasons.</h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8 font-normal">
                We do not just sell what we import. We experience it. At ABK, our relationship with every product begins long before it reaches a shelf. Come visit our state-of-the-art ABK Experience Center in Pune to interact with our catalogue firsthand.
              </p>
              <button onClick={openCatalog} className="slide-bg-primary text-white px-8 py-3.5 rounded-[9px] font-semibold text-[14px] shadow-sm">
                Download Full 2026-27 Catalogue
              </button>
            </div>
            <div className="w-full md:w-[40%] aspect-video bg-slate-100 rounded-[12px] border border-slate-200 flex items-center justify-center relative overflow-hidden">
               <img src="https://placehold.co/800x600/f8fafc/64748b?text=ABK+Experience+Center" alt="Experience Center" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

function BrandsPage({ openCatalog }) {
  const international = [
    { name: 'Orijen', desc: 'Biologically appropriate diets' },
    { name: 'Acana', desc: 'Award-winning regional recipes' },
    { name: 'KONG', desc: 'Durable enrichment toys' },
    { name: 'Furminator', desc: 'Professional deshedding solutions' },
    { name: 'TropiClean', desc: 'Natural grooming care' },
    { name: 'Savic', desc: 'Premium habitats and carriers' },
    { name: 'Trixie', desc: 'European pet accessories' },
    { name: 'Schesir', desc: '100% natural wet food' },
    { name: 'Hydra', desc: 'Professional spa treatments' },
    { name: 'Bio-Groom', desc: 'Nature-distilled grooming' }
  ];

  const inHouse = [
    { name: 'Chip Chops', desc: 'India\'s most wanted dog treats' },
    { name: 'POW', desc: 'Flavour unleashed treats' },
    { name: 'Kittos', desc: 'Treats for your cat brat' },
    { name: 'Cataholic', desc: 'Spoil your cat with every bite' },
    { name: 'All That Matters', desc: 'Soft jerky treats' },
    { name: 'Pawpaya', desc: 'Everyday hygiene solutions' }
  ];

  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      <InnerPageHero 
        title="Curating the Greats, Creating the Best." 
        subtitle="We partner with leading international pet brands and develop high-margin, high-quality in-house lines."
        bgImage="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Download CTA */}
      <div className="px-[2vw] pt-20 border-b border-slate-200 pb-16">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm">
            <div>
              <h2 className="text-[20px] font-bold text-slate-900 mb-2">The Complete Master Catalogue</h2>
              <p className="text-[14px] text-slate-500 font-normal">Explore 5,000+ SKUs across all our global and in-house brands.</p>
            </div>
            <button onClick={openCatalog} className="slide-bg-primary px-8 py-3.5 rounded-[9px] font-semibold text-[14px] text-white shadow-sm flex items-center gap-2 shrink-0">
              <FileText size={18} /> Download Full PDF
            </button>
          </div>
        </FadeInSection>
      </div>

      {/* Section 3: Global Brands */}
      <div className="px-[2vw] pt-16">
        <FadeInSection>
          <div className="mb-8">
            <h2 className="text-[28px] font-bold text-slate-900 mb-3">Global Brands We Bring To India</h2>
            <p className="text-[15px] text-slate-500 font-normal mb-8 max-w-3xl">Exclusive national distribution rights for the world's most trusted manufacturers. Rigorous customs clearance and 100% authenticity guaranteed.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {international.map((brand, i) => (
                <div key={i} className="bg-white p-6 rounded-[12px] border border-slate-200 shadow-sm flex flex-col items-start justify-center hover:border-slate-300 hover:shadow-md transition-all">
                  <span className="font-bold text-[16px] text-slate-800 mb-1">{brand.name}</span>
                  <span className="text-[12px] text-slate-500 font-normal leading-snug">{brand.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Section 4: In-House Brands */}
      <div className="px-[2vw] pt-24">
        <FadeInSection delay={100}>
          <div>
            <h2 className="text-[28px] font-bold text-slate-900 mb-3">Brands We've Built</h2>
            <p className="text-[15px] text-slate-500 font-normal mb-8 max-w-3xl">Leveraging over a decade of consumer insights to create high-margin, high-velocity products that dominate retail shelves.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {inHouse.map((brand, i) => (
                <div key={i} className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm flex flex-col items-start hover:border-[#D84835]/30 hover:shadow-md transition-all group">
                  <span className="font-bold text-[18px] text-[#D84835] mb-2 group-hover:text-[#b03929] transition-colors">{brand.name}</span>
                  <span className="text-[13px] text-slate-500 font-normal leading-relaxed">{brand.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

function CategoriesPage({ openCatalog }) {
  const sections = [
    { title: "Snacks & Treats", desc: "Chip Chops, Milky Goodness, POW, Schesir, Kitty Licks, Trixie Soft Treats." },
    { title: "Wet Food", desc: "Schesir Natural Fillets, Kitten Mousse, Skin & Coat specials." },
    { title: "Grooming & Spa", desc: "Hydra, Bio-Groom, Forcans, Groomer's Goop, Pawpaya, Trixie Brushes." },
    { title: "Toys & Enrichment", desc: "Outward Hound, Petstages, Nerf, Zeus, Petsports USA, Trixie Interactive." },
    { title: "Accessories & Travel", desc: "Savic Trotter/Andes Carriers, Trixie Leashes, Car Safety Belts." },
    { title: "Hygiene Solutions", desc: "Pawpaya Pee Pads, Trixie Diapers, Simple Solution Odour Removers." }
  ];

  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      <InnerPageHero 
        title="Products That Cater to Every Need." 
        subtitle="From puppies and kittens to senior pets, our catalogue covers daily nutrition, play, grooming, and life essentials."
        bgImage="https://images.unsplash.com/photo-1516734212498-132d08a54e60?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Categories Grid */}
      <div className="px-[2vw] pt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group h-full cursor-pointer flex flex-col">
                <h3 className="text-[18px] font-bold text-slate-900 mb-3 group-hover:text-[#D84835] transition-colors">{sec.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed font-normal flex-1">{sec.desc}</p>
                <span className="text-[12px] font-bold text-[#D84835] uppercase tracking-widest mt-6 flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ChevronDown size={14} className="-rotate-90"/></span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Section 3: Merchandising Support */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
           <div className="bg-slate-900 rounded-[12px] p-16 text-white text-center max-w-4xl mx-auto">
             <h2 className="text-[28px] font-bold mb-4">Retail Merchandising Support</h2>
             <p className="text-[15px] text-slate-400 font-normal leading-relaxed mb-8">
               Need help deciding what to stock? Our dedicated account managers will help you select the fastest-moving SKUs for your specific store size and customer demographic. We provide custom planograms, shelf-talkers, and display racks for partner retailers.
             </p>
             <button onClick={openCatalog} className="slide-bg-primary px-8 py-3.5 rounded-[9px] font-semibold text-[14px] text-white shadow-sm inline-flex items-center gap-2">
                <FileText size={18} /> Download 2026-27 Catalogue
             </button>
           </div>
        </FadeInSection>
      </div>
    </div>
  );
}

function ImpactPage() {
  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      <InnerPageHero 
        title="Beyond Business. Leaving a Pawprint of Care." 
        subtitle="Our commitment to sustainability, ethical sourcing, and community welfare goes beyond just delivering pet products."
        bgImage="https://images.unsplash.com/photo-1528301725143-1ba6948f0e82?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="px-[2vw] pt-24 max-w-4xl">
        <FadeInSection>
          <div className="mb-12">
            <h2 className="text-[28px] font-bold text-slate-900 mb-6">Our Corporate Responsibility</h2>
            <p className="text-[15px] text-slate-600 leading-relaxed font-normal mb-6">
              As India's premier pet importer, we recognize our responsibility to the animals we serve and the planet we share. ABK Imports is dedicated to driving positive change through strategic community partnerships, sustainable logistics, and ethical brand selection.
            </p>
          </div>
        </FadeInSection>
      </div>

      <div className="px-[2vw] pt-12">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeInSection delay={100}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-[9px] flex items-center justify-center mb-6">
                <Leaf className="text-emerald-600 w-7 h-7" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-4">Sustainable Logistics</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                We've reduced our warehouse carbon footprint by 30% through solar integration and eliminated single-use plastics in our B2B dispatch packaging.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-50 border border-sky-100 rounded-[9px] flex items-center justify-center mb-6">
                <Globe className="text-sky-600 w-7 h-7" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-4">Ethical Sourcing</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                We exclusively partner with global manufacturers who adhere to cruelty-free testing and use sustainably farmed, biologically appropriate ingredients.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-rose-50 border border-rose-100 rounded-[9px] flex items-center justify-center mb-6">
                <HeartHandshake className="text-rose-600 w-7 h-7" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-4">Community Welfare</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                Through our 'ABK Cares' initiative, we donate over 5,000 kgs of premium pet food annually to verified animal shelters and rescue operations across India.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

    </div>
  )
}

function ContactPage() {
  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50 flex flex-col">
      <InnerPageHero 
        title="Where Every Link Matters." 
        subtitle="We operate across India with a massive network of distributors, super-stockists, and authorized retailers. Reach out to us today."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Contact Details Grid */}
      <div className="px-[2vw] pt-24">
        <div className="grid md:grid-cols-3 gap-6">
           <FadeInSection delay={100}>
              <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full">
                <MessageSquare className="w-8 h-8 text-[#D84835] mb-6" />
                <h3 className="text-[18px] font-bold text-slate-900 mb-2">Retailer Support</h3>
                <p className="text-[14px] text-slate-500 mb-6 font-normal">Need help with an order, portal access, or damaged stock? Our team is here.</p>
                <a href="mailto:support@abkimports.com" className="text-[#D84835] font-bold text-[14px]">support@abkimports.com</a>
              </div>
           </FadeInSection>
           <FadeInSection delay={200}>
              <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full">
                <Briefcase className="w-8 h-8 text-[#D84835] mb-6" />
                <h3 className="text-[18px] font-bold text-slate-900 mb-2">Sales & Partnerships</h3>
                <p className="text-[14px] text-slate-500 mb-6 font-normal">Looking to stock our brands or become a regional super-stockist?</p>
                <a href="mailto:sales@abkimports.com" className="text-[#D84835] font-bold text-[14px]">sales@abkimports.com</a>
              </div>
           </FadeInSection>
           <FadeInSection delay={300}>
              <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full">
                <MapIcon className="w-8 h-8 text-[#D84835] mb-6" />
                <h3 className="text-[18px] font-bold text-slate-900 mb-2">Corporate HQ</h3>
                <p className="text-[14px] text-slate-500 mb-6 font-normal">Verdant 84, Office No. 402, N Main Rd, Koregaon Park East, Pune 411036</p>
                <a href="tel:18002332025" className="text-[#D84835] font-bold text-[14px]">1800-233-2025</a>
              </div>
           </FadeInSection>
        </div>
      </div>

      {/* Section 3: Partner Inquiry Form (UI) */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="bg-white rounded-[12px] border border-slate-200 shadow-sm p-12 md:p-16 max-w-4xl mx-auto">
             <div className="text-center mb-10">
               <h2 className="text-[28px] font-bold text-slate-900 mb-4">Partner Inquiry Form</h2>
               <p className="text-[15px] text-slate-500 font-normal">Fill out the details below and a regional sales manager will contact you within 24 hours.</p>
             </div>
             <form className="space-y-6" onSubmit={e => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-[13px] font-bold text-slate-700">Business Name</label>
                   <input type="text" className="px-4 py-3 rounded-[9px] bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D84835] transition-colors" placeholder="e.g. Pawfect Pets" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-[13px] font-bold text-slate-700">Contact Person</label>
                   <input type="text" className="px-4 py-3 rounded-[9px] bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D84835] transition-colors" placeholder="Full Name" />
                 </div>
               </div>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-[13px] font-bold text-slate-700">Email Address</label>
                   <input type="email" className="px-4 py-3 rounded-[9px] bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D84835] transition-colors" placeholder="name@business.com" />
                 </div>
                 <div className="flex flex-col gap-2">
                   <label className="text-[13px] font-bold text-slate-700">Phone Number</label>
                   <input type="tel" className="px-4 py-3 rounded-[9px] bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D84835] transition-colors" placeholder="+91..." />
                 </div>
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-[13px] font-bold text-slate-700">Inquiry Type</label>
                 <select className="px-4 py-3 rounded-[9px] bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D84835] transition-colors text-slate-700">
                    <option>I want to become a retail partner</option>
                    <option>I want to become a regional distributor</option>
                    <option>General Support Inquiry</option>
                 </select>
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-[13px] font-bold text-slate-700">Message</label>
                 <textarea rows="4" className="px-4 py-3 rounded-[9px] bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#D84835] transition-colors" placeholder="Tell us about your requirements..."></textarea>
               </div>
               <button className="slide-bg-primary text-white px-8 py-4 rounded-[9px] font-bold text-[14px] w-full mt-4">
                 Submit Inquiry
               </button>
             </form>
          </div>
        </FadeInSection>
      </div>

      {/* Section 4: Map */}
      <div className="px-[2vw] pt-24 w-full flex-1">
        <FadeInSection>
          <div className="mb-6">
             <h2 className="text-[24px] font-bold text-slate-900">Our National Footprint</h2>
             <p className="text-[14px] text-slate-500">Live operational map of our HQ, Warehouses, and 100+ authorized dealers.</p>
          </div>
          <div className="w-full h-[600px] bg-slate-100 rounded-[12px] overflow-hidden border border-slate-200 shadow-sm relative">
            <LeafletMap />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

function LeadershipPage() {
  const leaders = [
    { name: "Rahul Deshmukh", role: "Founder & Managing Director", desc: "Pioneered the import of biologically appropriate pet foods in India, scaling ABK from a single warehouse to a nationwide network." },
    { name: "Priya Sharma", role: "Director of Global Sourcing", desc: "Oversees international brand partnerships and ensures strict compliance with FSSAI and international quality standards." },
    { name: "Vikram Singh", role: "Head of National Supply Chain", desc: "Manages the complex logistics network across our 100+ distributors, ensuring ready stock and rapid deployment." },
    { name: "Ananya Patel", role: "Chief Marketing Officer", desc: "Drives B2B retailer education and brand awareness, creating the bridge between global manufacturers and Indian shelves." }
  ];

  const regional = [
    { name: "Arjun Reddy", role: "VP - South Region", area: "Bangalore Hub" },
    { name: "Neha Gupta", role: "VP - West Region", area: "Mumbai Hub" },
    { name: "Sameer Khan", role: "VP - North Region", area: "Delhi NCR Hub" },
    { name: "Riya Sen", role: "VP - East Region", area: "Kolkata Hub" }
  ];

  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      {/* Section 1: Hero */}
      <InnerPageHero 
        title="Guided by Passion. Driven by Excellence." 
        subtitle="Meet the experienced executive team working behind the scenes to bring the world's best pet products to your retail shelves."
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Executive Leadership Grid */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="mb-12">
            <h2 className="text-[28px] font-bold text-slate-900 mb-2">Executive Board</h2>
            <p className="text-[15px] text-slate-500 font-normal">The visionaries navigating ABK Imports through the evolving pet care landscape.</p>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-white rounded-[12px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col group">
                <div className="aspect-square bg-slate-100 relative overflow-hidden">
                  <img src={`https://placehold.co/400x400/f1f5f9/64748b?text=${leader.name.split(' ')[0]}`} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-[20px] font-bold text-slate-900 mb-1">{leader.name}</h3>
                  <p className="text-[11px] font-bold text-[#D84835] uppercase tracking-widest mb-4">{leader.role}</p>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-normal">{leader.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Section 3: Founder's Message */}
      <div className="px-[2vw] pt-32">
        <FadeInSection>
          <div className="bg-white border border-slate-200 rounded-[12px] p-12 md:p-16 flex flex-col md:flex-row gap-12 lg:gap-20 items-center shadow-sm">
             <div className="w-full md:w-1/3 aspect-[4/5] bg-slate-100 rounded-[12px] overflow-hidden shrink-0 shadow-inner">
                <img src="https://placehold.co/600x800/f8fafc/64748b?text=Founder+Portrait" alt="Rahul Deshmukh" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="w-full md:w-2/3">
                <MessageSquare size={36} className="text-[#D84835] mb-8 opacity-50" />
                <p className="text-[18px] md:text-[22px] text-slate-800 leading-relaxed mb-8 font-medium italic">
                  "Our vision was never just to import products. It was to elevate the entire standard of pet care in India. When a retailer places an ABK product on their shelf, they aren't just making a sale—they are passing on a promise of uncompromising quality and biological appropriateness to a pet parent."
                </p>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-bold text-[16px] text-slate-900">Rahul Deshmukh</h4>
                  <p className="text-[13px] text-[#D84835] font-bold uppercase tracking-widest mt-1">Founder & Managing Director</p>
                </div>
             </div>
          </div>
        </FadeInSection>
      </div>

      {/* Section 4: Regional Directors */}
      <div className="px-[2vw] pt-32">
        <FadeInSection>
          <div className="mb-12">
            <h2 className="text-[28px] font-bold text-slate-900 mb-2">Regional Operations Leadership</h2>
            <p className="text-[15px] text-slate-500 font-normal">Commanding our expansive distribution network across India's four major zones.</p>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-4 gap-6">
           {regional.map((reg, i) => (
             <FadeInSection key={`reg-${i}`} delay={i * 100}>
               <div className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm flex flex-col items-start hover:border-[#D84835]/30 transition-colors">
                  <MapIcon className="text-slate-400 mb-4 w-6 h-6" />
                  <h3 className="font-bold text-[16px] text-slate-900 mb-1">{reg.name}</h3>
                  <p className="text-[12px] font-bold text-[#D84835] uppercase tracking-widest mb-3">{reg.role}</p>
                  <p className="text-[13px] text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-[6px] border border-slate-100">{reg.area}</p>
               </div>
             </FadeInSection>
           ))}
        </div>
      </div>

      {/* Section 5: Leadership Philosophy */}
      <div className="px-[2vw] pt-32">
        <FadeInSection>
          <div className="mb-12">
            <h2 className="text-[28px] font-bold text-slate-900 mb-2">Our Leadership Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-slate-900 p-10 rounded-[12px] text-white">
                <h4 className="text-[18px] font-bold mb-4 text-white">Zero Compromise</h4>
                <p className="text-[14px] text-slate-400 leading-relaxed font-normal">We do not cut corners on customs, cold-chain transport, or authenticity. If it isn't perfect, it doesn't leave our warehouse.</p>
             </div>
             <div className="bg-slate-900 p-10 rounded-[12px] text-white">
                <h4 className="text-[18px] font-bold mb-4 text-white">Empower the Retailer</h4>
                <p className="text-[14px] text-slate-400 leading-relaxed font-normal">Our success is entirely dependent on the success of our retail partners. We lead by providing them with the highest margins and best training.</p>
             </div>
             <div className="bg-slate-900 p-10 rounded-[12px] text-white">
                <h4 className="text-[18px] font-bold mb-4 text-white">Continuous Curation</h4>
                <p className="text-[14px] text-slate-400 leading-relaxed font-normal">The global pet market evolves rapidly. We lead by constantly analyzing global trends and bringing only the proven winners to Indian shores.</p>
             </div>
          </div>
        </FadeInSection>
      </div>

      {/* Section 6: Careers CTA */}
      <div className="px-[2vw] pt-32">
        <FadeInSection>
          <div className="bg-[#D84835] rounded-[12px] p-16 text-center text-white relative overflow-hidden shadow-lg">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)] pointer-events-none"></div>
             <h2 className="text-[32px] font-bold mb-4 relative z-10">Want to join the pack?</h2>
             <p className="text-[16px] text-red-100 font-medium mb-8 max-w-2xl mx-auto relative z-10">We are always looking for passionate logistics experts, brand managers, and sales directors to help us grow.</p>
             <button className="bg-white text-[#D84835] px-8 py-3.5 rounded-[9px] font-bold text-[14px] shadow-sm hover:bg-red-50 transition-colors relative z-10">
                View Open Positions
             </button>
          </div>
        </FadeInSection>
      </div>

    </div>
  );
}

function AwardsPage() {
  const milestones = [
    { year: "2010", title: "The ABK Journey Begins", desc: "Founded in Pune with a mission to elevate the standard of pet care products available to Indian pet parents." },
    { year: "2014", title: "Orijen & Acana Partnership", desc: "Secured the exclusive national distribution rights for Champion Petfoods, introducing biologically appropriate diets to India." },
    { year: "2018", title: "Best B2B Pet Distributor Award", desc: "Recognized at the National Pet Industry Awards for outstanding supply chain reliability and retailer support." },
    { year: "2021", title: "Launch of In-House Brands", desc: "Leveraging a decade of market insight to launch high-quality, high-margin in-house lines like Chip Chops and Kittos." },
    { year: "2024", title: "100+ Distributor Network", desc: "Successfully scaled operations to include super-stockists and distributors covering every major state in the country." },
    { year: "2026", title: "The ABK Experience Center", desc: "Opened a state-of-the-art facility in Pune for retailers and groomers to interact directly with global product lines." }
  ];

  return (
    <div className="w-full pb-24 text-left min-h-screen bg-white">
      {/* Section 1: Hero */}
      <InnerPageHero 
        title="A Decade of Industry Recognition." 
        subtitle="Our commitment to quality and retailer success has marked our journey with significant industry milestones and awards."
        bgImage="https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Timeline */}
      <div className="px-[2vw] pt-24 max-w-5xl">
        <FadeInSection>
          <div className="mb-16 border-b border-slate-100 pb-6">
            <h2 className="text-[28px] font-bold text-slate-900">Historical Milestones</h2>
          </div>
        </FadeInSection>
        <div className="space-y-12">
          {milestones.map((milestone, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
                <div className="md:w-32 shrink-0">
                  <span className="text-[32px] md:text-[40px] font-black text-slate-200 group-hover:text-[#D84835] transition-colors duration-500">{milestone.year}</span>
                </div>
                <div className="flex-1 pb-12 border-b border-slate-50 group-last:border-0">
                  <h3 className="text-[20px] font-bold text-slate-900 mb-3">{milestone.title}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed font-normal max-w-2xl">{milestone.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Section 3: Industry Awards Grid */}
      <div className="px-[2vw] pt-32">
        <FadeInSection>
          <div className="mb-12 border-b border-slate-100 pb-6">
            <h2 className="text-[28px] font-bold text-slate-900">Industry Awards</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
               <div key={`award-${i}`} className="bg-slate-50 border border-slate-100 p-8 rounded-[12px] flex items-start gap-4">
                  <Award className="text-[#D84835] w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[16px] text-slate-900 mb-1">National Pet Retail Excellence {2020 + i}</h4>
                    <p className="text-[13px] text-slate-500 font-normal">Awarded for the most reliable B2B supply chain in the western region.</p>
                  </div>
               </div>
            ))}
          </div>
        </FadeInSection>
      </div>

      {/* Section 4: Certifications */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="bg-slate-900 rounded-[12px] p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-lg">
             <div className="text-white max-w-lg">
               <h2 className="text-[28px] font-bold mb-4">Fully Certified & Compliant</h2>
               <p className="text-[14px] text-slate-400 leading-relaxed font-normal">ABK Imports operates under strict adherence to all Indian import laws. We hold valid FSSAI licenses, Animal Quarantine (AQCS) clearances, and ISO certifications for warehouse management.</p>
             </div>
             <div className="flex gap-6">
               <div className="w-24 h-24 bg-white/10 rounded-[12px] border border-white/20 flex items-center justify-center backdrop-blur-sm">
                 <Shield className="text-white w-10 h-10" />
               </div>
               <div className="w-24 h-24 bg-white/10 rounded-[12px] border border-white/20 flex items-center justify-center backdrop-blur-sm">
                 <CheckCircle className="text-white w-10 h-10" />
               </div>
             </div>
          </div>
        </FadeInSection>
      </div>

    </div>
  );
}

function QualityPage() {
  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      {/* Section 1: Hero */}
      <InnerPageHero 
        title="Zero Compromise on Authenticity." 
        subtitle="We maintain the strictest import protocols to ensure every product arriving on your shelf is 100% genuine and safe."
        bgImage="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: 3 Pillars Grid */}
      <div className="px-[2vw] pt-24">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeInSection delay={100}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D84835]/10 rounded-[9px] flex items-center justify-center mb-6">
                <Shield className="text-[#D84835] w-7 h-7" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-4">Direct Manufacturer Sourcing</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                We bypass grey markets and regional sub-distributors. Every global brand in our catalogue is sourced directly from the original manufacturing facilities, guaranteeing authenticity.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D84835]/10 rounded-[9px] flex items-center justify-center mb-6">
                <Box className="text-[#D84835] w-7 h-7" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-4">Climate-Controlled Transit</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                Premium biologically appropriate foods require strict thermal management. From the shipping containers to our central warehouses, we monitor temperatures meticulously.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={300}>
            <div className="bg-white p-10 rounded-[12px] border border-slate-200 shadow-sm h-full hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#D84835]/10 rounded-[9px] flex items-center justify-center mb-6">
                <FileText className="text-[#D84835] w-7 h-7" />
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-4">FSSAI & Customs Compliance</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-normal">
                Every imported batch undergoes rigorous customs clearance, animal quarantine checks, and FSSAI approvals. We provide complete transparency for every SKU.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Section 3: The 4 Step Process */}
      <div className="px-[2vw] pt-32">
         <FadeInSection>
            <div className="mb-12">
               <h2 className="text-[28px] font-bold text-slate-900 mb-2">Our Secure Supply Chain</h2>
               <p className="text-[15px] text-slate-500 font-normal">How a product travels from a global manufacturer to your retail shelf.</p>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
               {/* Step 1 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-900 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-[12px] border border-slate-200 shadow-sm">
                     <h3 className="font-bold text-[16px] text-slate-900 mb-2">Factory Origin</h3>
                     <p className="text-[13px] text-slate-500 font-normal">Pallets are loaded directly at the brand's manufacturing facility (e.g., Champion Petfoods in Canada) and sealed.</p>
                  </div>
               </div>
               {/* Step 2 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-900 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-[12px] border border-slate-200 shadow-sm">
                     <h3 className="font-bold text-[16px] text-slate-900 mb-2">Port & Customs Clearance</h3>
                     <p className="text-[13px] text-slate-500 font-normal">Containers arrive in India and undergo AQCS (Animal Quarantine) and strict FSSAI inspections before being released.</p>
                  </div>
               </div>
               {/* Step 3 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-900 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">3</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-[12px] border border-slate-200 shadow-sm">
                     <h3 className="font-bold text-[16px] text-slate-900 mb-2">ABK Central Warehouse</h3>
                     <p className="text-[13px] text-slate-500 font-normal">Goods are transferred to our climate-controlled Pune Trade Centre warehouse, barcoded, and synced to the B2B portal.</p>
                  </div>
               </div>
               {/* Step 4 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#D84835] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">4</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-[12px] border border-[#D84835]/30 shadow-md">
                     <h3 className="font-bold text-[16px] text-[#D84835] mb-2">Retailer Dispatch</h3>
                     <p className="text-[13px] text-slate-600 font-normal">Orders placed via the portal are picked, packed, and dispatched to your store via our expedited logistics network.</p>
                  </div>
               </div>
            </div>
         </FadeInSection>
      </div>

      {/* Section 4: Guarantee Banner */}
      <div className="px-[2vw] pt-32">
        <FadeInSection>
          <div className="bg-[#D84835] rounded-[12px] p-12 text-center text-white shadow-lg">
             <Shield className="w-12 h-12 mx-auto mb-6 opacity-90" />
             <h2 className="text-[28px] font-bold mb-4">The ABK Authenticity Guarantee</h2>
             <p className="text-[15px] text-red-100 font-medium mb-0 max-w-3xl mx-auto">We take full legal and ethical responsibility for every product sold through our network. When you buy from ABK, you are buying peace of mind for yourself and your customers.</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

function NewsPage() {
  const newsItems = [
    { title: "ABK Imports Secures Exclusive Distribution for New Aquatic Line", date: "May 15, 2026", category: "Partnerships", excerpt: "Expanding our catalog to include premium freshwater and marine accessories from global leader AquaTech." },
    { title: "Pune Trade Centre Warehouse Expands Capacity by 40%", date: "April 28, 2026", category: "Operations", excerpt: "Our central hub just got bigger, enabling faster dispatch times and higher stock availability across all zones." },
    { title: "Announcing the 2026 India Grooming Show Dates", date: "April 10, 2026", category: "Events", excerpt: "The premier event for professional pet groomers returns to Mumbai this November. Early bird registration is open." },
    { title: "Orijen & Acana Regional Recipes: Supply Chain Update", date: "March 22, 2026", category: "Supply Chain", excerpt: "An update on incoming shipments and FSSAI clearances for the highly anticipated new grain-free recipes." },
    { title: "ABK Retailer Portal 3.0: New Inventory Sync Features", date: "March 05, 2026", category: "Technology", excerpt: "We've upgraded our B2B software. Retailers can now integrate our live stock API directly into their POS systems." }
  ];

  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      {/* Section 1: Hero */}
      <InnerPageHero 
        title="Company News & Press." 
        subtitle="Stay updated on new brand acquisitions, warehouse expansions, and ABK corporate announcements."
        bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000"
      />
      
      {/* Section 2: Featured News */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
           <div className="bg-slate-900 rounded-[12px] p-12 flex flex-col lg:flex-row gap-12 items-center shadow-lg">
              <div className="w-full lg:w-1/2">
                <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-[6px] mb-6 inline-block border border-white/20">Featured Press Release</span>
                <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight mb-4">ABK Imports wins 'Distributor of the Year' at the 2026 National Pet Summit.</h2>
                <p className="text-[15px] text-slate-400 font-normal leading-relaxed mb-8">For the third consecutive year, ABK Imports has been recognized for its flawless supply chain execution and unparalleled retailer support network across India.</p>
                <button className="slide-bg-primary text-white px-8 py-3.5 rounded-[9px] font-bold text-[14px] shadow-sm">
                  Read Full Press Release
                </button>
              </div>
              <div className="w-full lg:w-1/2 aspect-video bg-slate-800 rounded-[9px] border border-slate-700 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen hover:grayscale-0 transition-all duration-700" alt="Award Ceremony"/>
              </div>
           </div>
        </FadeInSection>
      </div>

      {/* Section 3: Upcoming Events */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="mb-10 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-[#D84835]/10 flex items-center justify-center text-[#D84835]"><Award size={20}/></div>
             <h3 className="text-[24px] font-bold text-slate-900">Upcoming Events</h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-[12px] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#D84835]/30 transition-colors">
            <div>
              <span className="text-[11px] font-bold text-[#D84835] uppercase tracking-widest block mb-2">Trade Show • Nov 12-14, 2026</span>
              <h4 className="text-[20px] font-bold text-slate-900 mb-2">The India Grooming Show 2026</h4>
              <p className="text-[14px] text-slate-500">Join us in Mumbai for the largest gathering of professional pet groomers. Masterclasses, product launches, and networking.</p>
            </div>
            <button className="slide-bg-secondary border border-slate-200 text-slate-900 px-6 py-3 rounded-[9px] font-bold text-[13px] shrink-0 hover:border-slate-300">
              Register Now
            </button>
          </div>
        </FadeInSection>
      </div>

      {/* Section 4: News Feed Grid */}
      <div className="px-[2vw] pt-24 max-w-6xl">
        <FadeInSection>
          <div className="mb-10">
             <h3 className="text-[24px] font-bold text-slate-900">Latest Announcements</h3>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 gap-4">
          {newsItems.map((item, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white rounded-[12px] border border-slate-200 hover:border-[#D84835]/40 hover:shadow-md transition-all cursor-pointer">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-[6px]">{item.category}</span>
                    <span className="text-[12px] font-medium text-slate-400 flex items-center gap-1"><Clock size={12}/> {item.date}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 group-hover:text-[#D84835] transition-colors mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{item.excerpt}</p>
                </div>
                <div className="mt-4 md:mt-0 shrink-0 flex items-center">
                  <span className="text-[13px] font-bold text-[#D84835] mr-3 opacity-0 group-hover:opacity-100 transition-opacity">Read Story</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#D84835] group-hover:border-[#D84835] group-hover:text-white transition-all text-slate-400">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Section 5: Media Assets */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="bg-slate-100 border border-slate-200 rounded-[12px] p-12 text-left">
            <h3 className="text-[24px] font-bold text-slate-900 mb-3">Brand Assets & Media Kit</h3>
            <p className="text-[14px] text-slate-500 mb-8 max-w-2xl">Download high-resolution ABK logos, brand guidelines, and executive headshots for press and media publications.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-[9px] font-bold text-[13px] flex items-center gap-2 hover:border-slate-300 shadow-sm">
                <FileText size={16}/> Download Brand Guidelines (PDF)
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-[9px] font-bold text-[13px] flex items-center gap-2 hover:border-slate-300 shadow-sm">
                <Package size={16}/> Download Logo Pack (ZIP)
              </button>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Section 6: PR Contact */}
      <div className="px-[2vw] pt-12">
         <FadeInSection>
            <div className="bg-white border border-slate-200 rounded-[12px] p-12 text-center max-w-3xl mx-auto shadow-sm">
               <Newspaper className="w-10 h-10 mx-auto text-[#D84835] mb-6" />
               <h3 className="text-[22px] font-bold text-slate-900 mb-3">Press Inquiries</h3>
               <p className="text-[14px] text-slate-500 font-normal mb-6">For interviews or official statements, please contact our PR department.</p>
               <a href="mailto:pr@abkimports.com" className="text-[#D84835] font-bold text-[14px] hover:underline bg-[#D84835]/10 px-6 py-3 rounded-[9px]">pr@abkimports.com</a>
            </div>
         </FadeInSection>
      </div>

    </div>
  );
}

function BlogsPage() {
  const [activeFilter, setActiveFilter] = useState('All Articles');
  
  const allBlogs = [
    { title: 'The rise of grain-free diets in Indian pet retail', date: 'Oct 12, 2026', readTime: '4 min read', category: 'Market Trends', img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" },
    { title: 'Optimizing shelf space for high-margin accessories', date: 'Oct 05, 2026', readTime: '6 min read', category: 'Merchandising', img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80" },
    { title: 'Building customer loyalty through premium pet grooming', date: 'Sep 28, 2026', readTime: '5 min read', category: 'Retail Strategy', img: "https://images.unsplash.com/photo-1516734212498-132d08a54e60?auto=format&fit=crop&w=600&q=80" },
    { title: 'Understanding biologically appropriate nutrition', date: 'Sep 15, 2026', readTime: '7 min read', category: 'Product Education', img: "https://images.unsplash.com/photo-1528301725143-1ba6948f0e82?auto=format&fit=crop&w=600&q=80" },
    { title: 'How to successfully host an in-store pet adoption event', date: 'Sep 02, 2026', readTime: '4 min read', category: 'Retail Strategy', img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600&q=80" },
    { title: 'The growing demand for interactive enrichment toys', date: 'Aug 21, 2026', readTime: '5 min read', category: 'Market Trends', img: "https://images.unsplash.com/photo-1531685250784-7569952593d2?auto=format&fit=crop&w=600&q=80" }
  ];

  const filteredBlogs = activeFilter === 'All Articles' 
    ? allBlogs 
    : allBlogs.filter(blog => blog.category === activeFilter);

  const filters = ['All Articles', 'Market Trends', 'Merchandising', 'Product Education', 'Retail Strategy'];

  return (
    <div className="w-full pb-24 text-left min-h-screen bg-slate-50">
      {/* Section 1: Hero */}
      <InnerPageHero 
        title="Retailer Insights & Strategy." 
        subtitle="Actionable advice, market trends, and merchandising strategies to help you grow your pet retail business."
        bgImage="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Section 2: Featured Hero Article */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
          <div className="bg-white border border-slate-200 rounded-[12px] p-2 flex flex-col lg:flex-row gap-8 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="w-full lg:w-3/5 aspect-video bg-slate-100 rounded-[9px] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Featured Article"/>
              <div className="absolute top-6 left-6 bg-[#D84835] text-white px-4 py-2 rounded-[6px] text-[11px] font-bold uppercase tracking-widest shadow-lg">Featured</div>
            </div>
            <div className="w-full lg:w-2/5 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500 mb-4">
                <span className="text-[#D84835] font-bold">Expert Guide</span> • <Clock size={14}/> 8 min read
              </div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-slate-900 leading-tight mb-4 group-hover:text-[#D84835] transition-colors">The 2026 Blueprint for Pet Retail Layouts.</h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">Discover how leading stores are restructuring their aisles to maximize foot traffic, increase dwell time, and skyrocket impulse purchases of high-margin accessories.</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                   <img src="https://placehold.co/100x100/e2e8f0/64748b?text=AP" className="w-full h-full object-cover" alt="Author"/>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-900">Ananya Patel</h4>
                  <p className="text-[12px] text-slate-500">Chief Merchandising Officer</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
      
      {/* Section 3: Functional Category Filter */}
      <div className="px-[2vw] pt-20">
         <FadeInSection>
            <div className="flex flex-wrap gap-3 border-b border-slate-200 pb-6">
               {filters.map(filter => (
                 <button 
                   key={filter}
                   onClick={() => setActiveFilter(filter)}
                   className={`px-6 py-2.5 rounded-[9px] text-[13px] font-bold transition-all ${activeFilter === filter ? 'bg-slate-900 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
                 >
                   {filter}
                 </button>
               ))}
            </div>
         </FadeInSection>
      </div>

      {/* Section 4: Blog Grid */}
      <div className="px-[2vw] pt-12 min-h-[500px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <article className="bg-white border border-slate-200 rounded-[12px] overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                <div className="w-full aspect-[3/2] bg-slate-100 relative overflow-hidden border-b border-slate-100">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-[6px] border border-slate-200 text-[10px] font-bold text-slate-700 uppercase tracking-widest shadow-sm">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-[18px] font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#D84835] transition-colors">
                    {blog.title}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-[12px] font-medium text-slate-500">
                    <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {blog.readTime}</span>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
        {filteredBlogs.length === 0 && (
          <div className="w-full py-20 text-center text-slate-500">
            No articles found in this category.
          </div>
        )}
      </div>

      {/* Section 5: Industry Experts Highlight */}
      <div className="px-[2vw] pt-24">
        <FadeInSection>
           <div className="bg-white border border-slate-200 rounded-[12px] p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[9px] flex items-center justify-center mx-auto mb-6"><BookOpen size={28}/></div>
              <h3 className="text-[24px] font-bold text-slate-900 mb-4">Written by Retail Experts.</h3>
              <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed">Our blog isn't outsourced content. It's written by ABK's own category managers, veterinary nutritionists, and regional sales directors who are out in the field every single day.</p>
           </div>
        </FadeInSection>
      </div>

      {/* Section 6: Newsletter Box */}
      <div className="px-[2vw] pt-24">
         <FadeInSection>
            <div className="bg-[#D84835] rounded-[12px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] pointer-events-none"></div>
               <div className="text-white max-w-lg relative z-10">
                 <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-3">Subscribe to Retailer Insights</h2>
                 <p className="text-[14px] text-red-100 font-medium leading-relaxed">Get the latest market trends, merchandising tips, and brand updates delivered straight to your inbox every month.</p>
               </div>
               <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 relative z-10">
                 <input type="email" placeholder="Store email address" className="w-full sm:w-72 px-5 py-4 rounded-[9px] bg-white border-0 text-slate-900 text-[14px] focus:outline-none shadow-sm" />
                 <button className="bg-slate-900 text-white px-8 py-4 rounded-[9px] font-bold text-[14px] hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm">
                   Subscribe
                 </button>
               </div>
            </div>
         </FadeInSection>
      </div>

    </div>
  );
}

// ---------------------------
// HELPER COMPONENTS
// ---------------------------

function NavMegaMenu({ title, featuredTitle, featuredDesc, featuredBtn, col1Title, col1Links, col2Title, col2Links, onFeatureClick }) {
  return (
    <div className="group h-full flex items-center">
      <button className="flex items-center gap-1 hover:text-[#D84835] transition-colors py-2 focus:outline-none">
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      
      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility,transform] duration-300 translate-y-3 group-hover:translate-y-0 w-[860px]">
        <div className="bg-white rounded-[16px] shadow-[0_20px_60px_rgb(0,0,0,0.12)] border border-slate-100 p-2.5 flex gap-2">
          
          <div className="w-[35%] bg-gradient-to-br from-slate-900 via-slate-800 to-[#9a2a1a] rounded-[12px] p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D84835]/35 rounded-full blur-[40px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-white text-[24px] font-bold leading-snug tracking-tight">
                {featuredTitle}
              </h3>
              <p className="text-slate-300 text-[12.5px] mt-3 leading-relaxed font-normal">{featuredDesc}</p>
            </div>
            <button onClick={(e) => {
              if (onFeatureClick) onFeatureClick();
              const dropdownParent = e.currentTarget.closest('.group');
              if (dropdownParent) {
                dropdownParent.classList.remove('group');
                setTimeout(() => dropdownParent.classList.add('group'), 150);
              }
            }} className="relative z-10 slide-bg-secondary text-slate-900 py-2.5 px-5 rounded-[9px] text-xs font-bold mt-8 w-fit shadow-sm border border-slate-200/50">
              {featuredBtn}
            </button>
          </div>

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

function MegaMenuLink({ icon, title, desc, onClick }) {
  return (
    <a href="#" onClick={(e) => { 
      e.preventDefault(); 
      if(onClick) onClick(); 
      const dropdownParent = e.currentTarget.closest('.group');
      if (dropdownParent) {
        dropdownParent.classList.remove('group');
        setTimeout(() => dropdownParent.classList.add('group'), 150);
      }
    }} aria-label={title} className="flex items-start gap-3 group/link cursor-pointer p-2 -mx-2 rounded-[9px] hover:bg-slate-50 transition-colors outline-none focus:ring-2 focus:ring-[#D84835]/50">
      <div className="bg-slate-50 border border-slate-100 text-slate-500 p-2 rounded-[9px] group-hover/link:border-[#D84835]/20 group-hover/link:bg-[#D84835]/10 group-hover/link:text-[#D84835] transition-colors mt-0.5">
        {icon}
      </div>
      <div>
        <h5 className="text-[13px] font-bold text-slate-800 group-hover/link:text-[#D84835] transition-colors">{title}</h5>
        <p className="text-[11px] text-slate-500 mt-0.5 font-normal">{desc}</p>
      </div>
    </a>
  )
}

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
// CARD COMPONENTS
// ---------------------------

function ProductCard({ product }) {
  return (
    <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-[12px] p-3 min-w-[360px] h-[92px] card-shadow transition-transform hover:scale-[1.02] hover:border-[#D84835]/30 cursor-pointer">
      <div className={`w-14 h-14 shrink-0 rounded-[9px] flex items-center justify-center text-2xl ${product.color} border border-black/5`}>
        {product.icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <h3 className="font-semibold text-slate-800 text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
          {product.name}
        </h3>
        <p className="text-slate-500 text-[11px] mt-1 font-medium">
          Wholesale <span className="text-slate-700 font-semibold">{product.wholesale}</span>
        </p>
      </div>
      <div className="flex flex-col items-end border-l border-slate-100 pl-4 shrink-0">
        <span className="text-slate-800 font-bold text-[14px] tracking-tight">{product.demand}</span>
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
    <div className="flex items-center gap-4 bg-slate-50/80 border border-slate-200/50 rounded-[12px] p-3 min-w-[360px] h-[92px]">
      <div className="w-14 h-14 shrink-0 rounded-[9px] bg-slate-200/50 animate-pulse"></div>
      <div className="flex-1 space-y-2.5">
        <div className="h-3 bg-slate-200/50 rounded-[4px] w-10/12 animate-pulse"></div>
        <div className="h-2.5 bg-slate-200/50 rounded-[4px] w-1/2 animate-pulse"></div>
      </div>
      <div className="flex flex-col items-end border-l border-slate-100/50 pl-4 shrink-0 space-y-2.5">
        <div className="h-3.5 bg-slate-200/50 rounded-[4px] w-16 animate-pulse"></div>
        <div className="h-2.5 bg-slate-200/50 rounded-[4px] w-12 animate-pulse"></div>
      </div>
    </div>
  );
}

function LeafletMap() {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    if (!document.getElementById('leaflet-js')) {
      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      document.head.appendChild(script);
    }

    const checkLeaflet = setInterval(() => {
      if (window.L && mapRef.current && !mapRef.current._leaflet_id) {
        clearInterval(checkLeaflet);
        
        const map = window.L.map(mapRef.current, { scrollWheelZoom: false, zoomControl: false, attributionControl: false }).setView([18.0, 78.0], 4.5);
        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(map);

        const hqIcon = window.L.divIcon({
          className: 'bg-transparent border-0',
          html: `<div class="relative flex h-6 w-6"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D84835] opacity-75"></span><span class="relative inline-flex rounded-full h-6 w-6 bg-[#D84835] border-2 border-white shadow-lg items-center justify-center"><div class="w-1.5 h-1.5 bg-white rounded-full"></div></span></div>`,
          iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12]
        });

        const warehouseIcon = window.L.divIcon({
          className: 'bg-transparent border-0',
          html: `<div class="relative flex h-5 w-5"><span class="relative inline-flex rounded-full h-5 w-5 bg-slate-700 border-2 border-white shadow-md"></span></div>`,
          iconSize: [20, 20], iconAnchor: [10, 10], popupAnchor: [0, -10]
        });

        const dealerIcon = window.L.divIcon({
          className: 'bg-transparent border-0',
          html: `<div class="h-2.5 w-2.5 bg-[#D84835] rounded-full border border-white shadow-sm opacity-80 hover:opacity-100 hover:scale-150 transition-all cursor-pointer"></div>`,
          iconSize: [10, 10], iconAnchor: [5, 5]
        });

        window.L.marker([18.5362, 73.9142], {icon: hqIcon}).addTo(map)
          .bindPopup('<div style="font-family:Poppins,sans-serif;text-align:left;padding:4px;"><b style="font-size:12px;color:#0f172a;">Corporate HQ</b><br><span style="font-size:11px;color:#64748b;font-weight:400;">Verdant 84, Office 402</span><br><span style="font-size:10px;color:#94a3b8;">Pune, Maharashtra</span></div>');
        
        window.L.marker([18.5808, 73.9787], {icon: warehouseIcon}).addTo(map)
          .bindPopup('<div style="font-family:Poppins,sans-serif;text-align:left;padding:4px;"><b style="font-size:12px;color:#0f172a;">Main Warehouse</b><br><span style="font-size:11px;color:#64748b;font-weight:400;">Pune Trade Centre (105)</span><br><span style="font-size:10px;color:#94a3b8;">Wagholi, Pune</span></div>');

        const dealers = [
            { coords: [12.9716, 77.5946], type: 'Super-Stockist' }, { coords: [13.0827, 80.2707], type: 'Distributor' }, 
            { coords: [17.3850, 78.4867], type: 'Authorized Retailer' }, { coords: [9.9312, 76.2673], type: 'Distributor' }, 
            { coords: [11.0168, 76.9558], type: 'Authorized Retailer' }, { coords: [8.5241, 76.9366], type: 'Authorized Retailer' }, 
            { coords: [12.2958, 76.6394], type: 'Authorized Retailer' }, { coords: [13.3409, 74.7421], type: 'Super-Stockist' }, 
            { coords: [11.6643, 78.1460], type: 'Authorized Retailer' }, { coords: [10.8505, 76.2711], type: 'Distributor' }, 
            { coords: [12.9200, 77.6100], type: 'Authorized Retailer' }, { coords: [13.0500, 80.2000], type: 'Authorized Retailer' }, 
            { coords: [17.4500, 78.5000], type: 'Super-Stockist' }, { coords: [12.3000, 76.6500], type: 'Authorized Retailer' }, 
            { coords: [11.0000, 77.0000], type: 'Distributor' }, { coords: [15.3173, 75.7139], type: 'Authorized Retailer' }, 
            { coords: [14.4644, 78.8242], type: 'Authorized Retailer' }, { coords: [16.5062, 80.6480], type: 'Authorized Retailer' },
            { coords: [19.0760, 72.8777], type: 'Super-Stockist' }, { coords: [28.7041, 77.1025], type: 'Distributor' }, 
            { coords: [22.5726, 88.3639], type: 'Super-Stockist' }, { coords: [23.0225, 72.5714], type: 'Distributor' }, 
            { coords: [26.9124, 75.7873], type: 'Authorized Retailer' }, { coords: [30.7333, 76.7794], type: 'Authorized Retailer' }, 
            { coords: [21.1702, 72.8311], type: 'Distributor' }, { coords: [19.2000, 72.8000], type: 'Authorized Retailer' }, 
            { coords: [28.5000, 77.2000], type: 'Authorized Retailer' }, { coords: [22.7196, 75.8577], type: 'Authorized Retailer' },
            { coords: [21.1458, 79.0882], type: 'Super-Stockist' }, { coords: [26.8467, 80.9462], type: 'Authorized Retailer' }
        ];

        dealers.forEach((dealer, i) => {
            setTimeout(() => {
                window.L.marker(dealer.coords, {icon: dealerIcon}).addTo(map)
                .bindPopup(`<div style="font-family:Poppins,sans-serif;text-align:left;padding:2px;"><b style="font-size:11px;color:#0f172a;">${dealer.type}</b></div>`);
            }, i * 50); 
        });
      }
    }, 100);

    return () => clearInterval(checkLeaflet);
  }, []);

  return (
    <div className="w-full h-full relative bg-transparent rounded-[12px] overflow-hidden">
      <style>{`.leaflet-container { z-index: 10 !important; font-family: 'Poppins', sans-serif; background: #f8fafc; } .leaflet-popup-content-wrapper { border-radius: 8px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border: 1px solid #f1f5f9; padding: 2px; } .leaflet-popup-close-button { display: none; }`}</style>
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
}
