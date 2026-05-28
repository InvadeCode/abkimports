import React, { useState, useEffect } from 'react';
import { ChevronDown, PawPrint, FileText, TrendingUp, Sparkles, Home, Heart, HandHeart, Wallet, List, MessageSquare, LifeBuoy, AlertTriangle, Box, Briefcase, Users, Package, Award, Target, Newspaper, BookOpen, Settings, Truck, Star, Map as MapIcon, Shield, CheckCircle, ArrowRight, Clock, Building, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

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

  // Preloader Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

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
      {/* --- PRELOADER --- */}
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
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          
          @keyframes wipe {
            0% { clip-path: inset(100% 0 0 0); }
            100% { clip-path: inset(0 0 0 0); }
          }
          
          @keyframes pageFadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-page-fade-in {
            animation: pageFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
          .card-shadow { box-shadow: 0 12px 40px -8px rgba(0, 0, 0, 0.15), 0 0 10px rgba(0, 0, 0, 0.04); }

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
        
        <div className="sr-only">
          <h1>ABK Imports: India's Premier Wholesale Pet Products Distributor</h1>
          <p>India's premier importer and B2B distributor of premium pet food, grooming supplies, and accessories.</p>
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WholesaleStore",
            "name": "ABK Imports",
            "image": "https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png",
            "address": { "@type": "PostalAddress", "streetAddress": "4th Floor, Verdant 84, Office No. 402, N Main Rd, Koregaon Park East, Mundhwa", "addressLocality": "Pune", "addressRegion": "Maharashtra", "postalCode": "411036", "addressCountry": "IN" },
            "telephone": "1800-233-2025"
          })}} />
        </div>
        
        {/* 1. Floating Navigation Bar (100vw with 3vw padding) */}
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-[3vw] pointer-events-none">
          <nav aria-label="Main Navigation" className="pointer-events-auto relative flex items-center justify-between px-5 py-3 w-full bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            <button onClick={() => setActivePage('home')} className="flex items-center gap-2 pl-2 focus:outline-none">
              <img src="https://www.abkgrooming.com/cdn/shop/files/abk_red_logo.png" alt="ABK Imports Logo" className="h-[30px] md:h-[35px] object-contain" />
            </button>
            
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[13px] font-semibold text-slate-600">
              
              <NavMegaMenu 
                title="About Us"
                featuredTitle={<>Discover<br/>Our Story.</>}
                featuredDesc="India's leading importer of premium pet supplies since 2010."
                featuredBtn="Read Our Journey"
                onFeatureClick={() => setActivePage('about')}
                col1Title="Who We Are"
                col1Links={[
                  { icon: <Briefcase size={16}/>, title: "Company Profile", desc: "Our mission and vision", onClick: () => setActivePage('about') },
                  { icon: <Users size={16}/>, title: "Leadership Team", desc: "Meet our directors", onClick: () => setActivePage('about') },
                  { icon: <Award size={16}/>, title: "Awards & Milestones", desc: "Industry recognition", onClick: () => setActivePage('about') }
                ]}
                col2Title="News & Updates"
                col2Links={[
                  { icon: <Newspaper size={16}/>, title: "News & Insights", desc: "Latest company news", onClick: () => setActivePage('home') },
                  { icon: <BookOpen size={16}/>, title: "Blogs", desc: "Pet care and retail tips", onClick: () => setActivePage('home') },
                  { icon: <Shield size={16}/>, title: "Quality Assurance", desc: "Our import standards", onClick: () => setActivePage('about') }
                ]}
              />

              <NavMegaMenu 
                title="Our Brands"
                featuredTitle={<>Global<br/>Market<br/>Leaders.</>}
                featuredDesc="Exclusively importing the highest quality pet brands into India."
                featuredBtn="View Brand Catalog"
                onFeatureClick={() => setActivePage('brands')}
                col1Title="Premium Nutrition"
                col1Links={[
                  { icon: <Star size={16}/>, title: "Orijen", desc: "Biologically appropriate diets", onClick: () => setActivePage('brands') },
                  { icon: <Target size={16}/>, title: "Acana", desc: "Award-winning recipes", onClick: () => setActivePage('brands') },
                  { icon: <Heart size={16}/>, title: "Wellness CORE", desc: "Grain-free nutrition", onClick: () => setActivePage('brands') }
                ]}
                col2Title="Supplies & Grooming"
                col2Links={[
                  { icon: <Home size={16}/>, title: "KONG", desc: "Durable enrichment toys", onClick: () => setActivePage('brands') },
                  { icon: <Settings size={16}/>, title: "Furminator", desc: "Deshedding solutions", onClick: () => setActivePage('brands') },
                  { icon: <AlertTriangle size={16}/>, title: "TropiClean", desc: "Natural grooming care", onClick: () => setActivePage('brands') }
                ]}
              />

              <NavMegaMenu 
                title="Categories"
                featuredTitle={<>Source the<br/>World's Best<br/>Pet Products.</>}
                featuredDesc="Direct imports, verified quality, and high retail margins."
                featuredBtn="View All Categories"
                onFeatureClick={() => setActivePage('categories')}
                col1Title="Diet & Nutrition"
                col1Links={[
                  { icon: <Box size={16}/>, title: "Dog Food", desc: "Dry, wet, and raw diets", onClick: () => setActivePage('categories') },
                  { icon: <Heart size={16}/>, title: "Cat Food", desc: "Premium feline nutrition", onClick: () => setActivePage('categories') },
                  { icon: <Wallet size={16}/>, title: "Treats & Chews", desc: "Training and dental rewards", onClick: () => setActivePage('categories') }
                ]}
                col2Title="Care & Accessories"
                col2Links={[
                  { icon: <HandHeart size={16}/>, title: "Health & Grooming", desc: "Shampoos and supplements", onClick: () => setActivePage('categories') },
                  { icon: <List size={16}/>, title: "Toys & Enrichment", desc: "Interactive and plush toys", onClick: () => setActivePage('categories') },
                  { icon: <Truck size={16}/>, title: "Travel & Habitats", desc: "Carriers, beds, and crates", onClick: () => setActivePage('categories') }
                ]}
              />

              <button onClick={() => setActivePage('contact')} className="hover:text-[#D84835] transition-colors py-2 focus:outline-none">Contact</button>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium pr-1">
              <button className="slide-bg-primary text-white px-6 py-2.5 rounded-[9px] shadow-sm shadow-[#D84835]/20 text-[13px] font-semibold focus:outline-none">
                Retailer Login
              </button>
            </div>
          </nav>
        </div>

        {/* --- ROUTING SWITCH --- */}
        <div className="flex-1 w-full animate-page-fade-in" key={activePage}>
          {activePage === 'home' && <HomePage mousePos={mousePos} openCatalog={openCatalog} />}
          {activePage === 'about' && <AboutPage openCatalog={openCatalog} />}
          {activePage === 'brands' && <BrandsPage openCatalog={openCatalog} />}
          {activePage === 'categories' && <CategoriesPage openCatalog={openCatalog} />}
          {activePage === 'contact' && <ContactPage />}
        </div>

        {/* --- GLOBAL PRE-FOOTER --- */}
        {activePage !== 'contact' && (
          <section className="pt-24 pb-40 px-[3vw] bg-white relative z-20 -mb-24 rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full text-left">
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
        <footer className="bg-slate-950 text-slate-400 pt-36 pb-12 px-[3vw] relative z-0 w-full text-left">
          <div className="w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
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
              
              <div className="lg:col-span-2">
                <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-widest">Company</h4>
                <nav aria-label="Footer Company Links">
                  <ul className="space-y-4 text-[13px] font-medium">
                    <li><button onClick={() => setActivePage('about')} className="hover:text-[#D84835] transition-colors focus:outline-none">About Us</button></li>
                    <li><button onClick={() => setActivePage('about')} className="hover:text-[#D84835] transition-colors focus:outline-none">Leadership Team</button></li>
                    <li><button onClick={() => setActivePage('brands')} className="hover:text-[#D84835] transition-colors focus:outline-none">Our Brands</button></li>
                    <li><button onClick={() => setActivePage('home')} className="hover:text-[#D84835] transition-colors focus:outline-none">News & Insights</button></li>
                    <li><button onClick={() => setActivePage('contact')} className="hover:text-[#D84835] transition-colors focus:outline-none">Careers</button></li>
                  </ul>
                </nav>
              </div>
              
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
                  <li className="flex gap-4 items-start border-t border-slate-800/50 pt-4">
                    <Package className="shrink-0 w-5 h-5 text-slate-500 mt-0.5" aria-hidden="true" /> 
                    <span className="leading-relaxed font-normal text-left">
                      <strong className="text-slate-200 block mb-1.5 font-bold">Main Warehouse</strong>
                      Office 105, 1st Flr, Pune Trade Centre,<br/>
                      Gat No. 2337/1, Nagar Rd, Wagholi,<br/>
                      Pune, Maharashtra 412207
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
// PAGE COMPONENTS
// ---------------------------

function HomePage({ mousePos, openCatalog }) {
  return (
    <>
      {/* 2. Cohesive Interactive Hero Section (FROZEN LAYOUT) */}
      <section className="relative w-full flex flex-col items-center pt-40 pb-12 min-h-[calc(100vh-80px)] overflow-hidden">
        
        {/* Interactive Background Grid (Hover Glow with custom mask) */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            maskImage: `radial-gradient(circle 350px at calc(50% + ${mousePos.x * 20}px) calc(50% + ${mousePos.y * 20}px), black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 350px at calc(50% + ${mousePos.x * 20}px) calc(50% + ${mousePos.y * 20}px), black, transparent)`
          }}
        ></div>

        {/* Hero Copy */}
        <div className="relative z-30 flex flex-col items-center">
          
          <div className="relative p-[1px] rounded-[9px] overflow-hidden mb-6 cursor-pointer group">
            <div className="absolute inset-0 bg-[#f4cccc] group-hover:bg-[#eebaba] transition-colors"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_280deg,#D84835_360deg)] animate-[spin_3s_linear_infinite]"></div>
            
            <div className="relative flex items-center gap-1.5 bg-[#fdf6f5] rounded-[8px] px-3.5 py-1.5 z-10">
              <Sparkles size={12} className="text-[#D84835]" />
              <span className="text-[10px] font-bold text-[#D84835] tracking-widest uppercase">New Global Brands Added</span>
            </div>
          </div>
          
          <h1 className="text-[32px] md:text-[42px] font-bold tracking-tight text-center max-w-4xl px-4 leading-[1.2] text-slate-900">
            Discover <span className="text-[#D84835]">winning pet products</span><br className="hidden md:block" /> your customers will love
          </h1>
          
          <p className="mt-4 text-sm md:text-[15px] text-slate-500 text-center max-w-3xl px-4 font-normal leading-relaxed">
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
          
          <div className="absolute inset-0 z-0 opacity-50">
             <ScrollerTrack CardComponent={SkeletonCard} />
          </div>

          <div 
            className="absolute inset-0 z-10 pointer-events-none transition-transform duration-200 ease-out"
            style={{ 
              clipPath: 'polygon(20% 50%, 100% -40%, 100% 140%)',
              background: 'linear-gradient(90deg, transparent 20%, rgba(216, 72, 53, 0.12) 20%, rgba(216, 72, 53, 0.04) 45%, rgba(255, 255, 255, 0) 100%)',
            }}
          ></div>

          <div className="absolute inset-0 z-20 pointer-events-none" style={{ clipPath: 'polygon(20% 50%, 100% -40%, 100% 140%)' }}>
             <div className="absolute inset-0 pointer-events-auto">
               <ScrollerTrack CardComponent={ProductCard} />
             </div>
          </div>

          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-40 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-40 pointer-events-none"></div>

          <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
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
      <section className="bg-slate-50 border-t border-slate-100 py-24 px-[3vw] w-full text-left">
        <div className="w-full">
          <FadeInSection>
            <div className="mb-12">
              <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight text-slate-900 mb-4">
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
                <div className="bg-white border border-slate-200 p-8 rounded-[12px] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full flex flex-col group">
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

      {/* SECTION 6: B2B Portal Software Mockup */}
      <section className="py-24 px-[3vw] bg-white overflow-hidden border-b border-slate-100 w-full text-left">
        <div className="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="w-full lg:w-[45%]">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                <Box size={14} className="text-[#D84835]" /> Proprietary Software
              </div>
              <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight text-slate-900 mb-5 leading-tight">
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
              <div className="relative rounded-[12px] bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
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
                    <div className="w-full h-6 bg-slate-200/50 rounded mb-4"></div>
                    {[1,2,3,4].map(i => <div key={i} className="w-3/4 h-3 bg-slate-200/50 rounded"></div>)}
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <div className="w-1/3 h-5 bg-slate-200 rounded"></div>
                      <div className="px-3 py-1 bg-[#D84835] text-white rounded-[4px] text-[10px] font-bold">New Order</div>
                    </div>
                    <div className="space-y-3">
                      {[1,2,3].map((i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-3 rounded-[8px] border border-slate-200 shadow-sm">
                          <div className="w-10 h-10 bg-slate-100 rounded-[6px] shrink-0"></div>
                          <div className="flex-1 space-y-2">
                            <div className="w-2/3 h-3 bg-slate-200 rounded"></div>
                            <div className="flex gap-2">
                              <div className="w-1/4 h-2 bg-slate-100 rounded"></div>
                              <div className="w-1/4 h-2 bg-slate-100 rounded"></div>
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

      {/* SECTION 7: ROI Margin Calculator */}
      <section className="py-24 px-[3vw] bg-slate-900 text-white relative overflow-hidden w-full text-left">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeInSection>
            <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-5 text-white">Maximize your shelf space ROI.</h2>
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

      {/* SECTION 8: Recent News & Blogs Snippet */}
      <section className="py-24 px-[3vw] bg-white border-b border-slate-100 w-full text-left">
        <div className="w-full">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight text-slate-900 mb-3">Retailer Insights</h2>
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

// Reusable Hero for Inner Pages
function InnerPageHero({ title, subtitle }) {
  return (
    <div className="w-full pt-40 pb-16 px-[3vw] bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D84835]/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl text-left">
        <h1 className="text-[36px] md:text-[46px] font-bold text-white mb-4 tracking-tight leading-tight">{title}</h1>
        <p className="text-slate-400 text-[14px] md:text-[16px] font-normal leading-relaxed">{subtitle}</p>
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
      />
      
      <div className="px-[3vw] pt-20">
        <FadeInSection>
          <div className="max-w-4xl mb-16">
            <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
              From products on retail shelves to the professionals in grooming salons and vet clinics, we craft and curate to foster love for pets. We identify and partner with leading international pet brands, curate products suited for the Indian market, and distribute them across a growing network.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <FadeInSection delay={100}>
            <div className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm h-full">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6">
                <Package className="text-slate-600 w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-3">A Chain of Conviction</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                Every piece in this catalogue passed through many hands before it reached yours. Each product that arrives at your doorstep is rigorously tested with our expert stamp of approval.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm h-full">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6">
                <Users className="text-slate-600 w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-3">The Last Mile of Care</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                Our retailers and distributors are the final, essential act of care. Every shelf where an ABK product is displayed is an extension of the belief we first built.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm h-full">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-[9px] flex items-center justify-center mb-6">
                <Award className="text-slate-600 w-5 h-5" />
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-3">India Grooming Show</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                Our commitment to the professionals who give meaning to everything we import. A stage for groomers to grow, connect, and be celebrated.
              </p>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="bg-white rounded-[12px] border border-slate-200 shadow-sm p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-[24px] font-bold text-slate-900 mb-4">A Room Full of Reasons.</h2>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-8 font-normal">
                We do not just sell what we import. We experience it. At ABK, our relationship with every product begins long before it reaches a shelf. Come visit our ABK Experience Center in Pune.
              </p>
              <button onClick={openCatalog} className="slide-bg-primary text-white px-6 py-3 rounded-[9px] font-bold text-[13px] shadow-sm">
                Download Full 2026-27 Catalogue
              </button>
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
    <div className="w-full pb-24 text-left min-h-screen bg-white">
      <InnerPageHero 
        title="Curating the Greats, Creating the Best." 
        subtitle="We partner with leading international pet brands and develop high-margin, high-quality in-house lines."
      />
      
      <div className="px-[3vw] pt-20">
        <FadeInSection>
          <div className="mb-20">
            <h2 className="text-[20px] font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">Global Brands We Bring To India</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {international.map((brand, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-[9px] border border-slate-200 flex flex-col items-start justify-center hover:border-slate-300 transition-colors">
                  <span className="font-bold text-[16px] text-slate-800 mb-1">{brand.name}</span>
                  <span className="text-[11px] text-slate-500 font-normal">{brand.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div>
            <h2 className="text-[20px] font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">Brands We've Built</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {inHouse.map((brand, i) => (
                <div key={i} className="bg-white p-6 rounded-[9px] border border-slate-200 shadow-sm flex flex-col items-start hover:border-[#D84835]/30 transition-colors">
                  <span className="font-bold text-[16px] text-[#D84835] mb-1">{brand.name}</span>
                  <span className="text-[11px] text-slate-500 font-normal">{brand.desc}</span>
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
        subtitle="From puppies and kittens to senior pets, our 2026-27 catalogue covers daily nutrition, play, grooming, and life essentials."
      />
      
      <div className="px-[3vw] pt-20">
        <FadeInSection>
          <div className="mb-12">
            <button onClick={openCatalog} className="slide-bg-primary px-6 py-3 rounded-[9px] font-bold text-[13px] text-white shadow-sm flex items-center gap-2 w-fit">
              <FileText size={16} /> Download Full PDF Catalogue
            </button>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-white p-8 rounded-[12px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-[16px] font-bold text-slate-900 mb-3">{sec.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-normal">{sec.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="w-full pb-24 text-left min-h-screen bg-white flex flex-col">
      <InnerPageHero 
        title="Where Every Link Matters." 
        subtitle="We operate across India with a massive network of distributors, super-stockists, and authorized retailers."
      />
      
      <div className="px-[3vw] pt-20 w-full flex-1">
        <FadeInSection>
          <div className="w-full h-[600px] bg-slate-50 rounded-[12px] overflow-hidden border border-slate-200 shadow-sm relative">
            <LeafletMap />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}


// ---------------------------
// HELPER COMPONENTS
// ---------------------------

// Reusable Mega Menu Component
function NavMegaMenu({ title, featuredTitle, featuredDesc, featuredBtn, col1Title, col1Links, col2Title, col2Links, onFeatureClick }) {
  return (
    <div className="group h-full flex items-center">
      <button className="flex items-center gap-1 hover:text-[#D84835] transition-colors py-2 focus:outline-none">
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      
      <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility,transform] duration-300 translate-y-3 group-hover:translate-y-0 w-[860px]">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgb(0,0,0,0.12)] border border-slate-100 p-2.5 flex gap-2">
          
          <div className="w-[35%] bg-gradient-to-br from-slate-900 via-slate-800 to-[#9a2a1a] rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D84835]/35 rounded-full blur-[40px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-white text-[24px] font-bold leading-snug tracking-tight">
                {featuredTitle}
              </h3>
              <p className="text-slate-300 text-[12.5px] mt-3 leading-relaxed font-normal">{featuredDesc}</p>
            </div>
            <button onClick={onFeatureClick} className="relative z-10 slide-bg-secondary text-slate-900 py-2.5 px-5 rounded-[9px] text-xs font-bold mt-8 w-fit shadow-sm border border-slate-200/50">
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
    <a href="#" onClick={(e) => { e.preventDefault(); if(onClick) onClick(); }} aria-label={title} className="flex items-start gap-3 group/link cursor-pointer p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors outline-none focus:ring-2 focus:ring-[#D84835]/50">
      <div className="bg-slate-50 border border-slate-100 text-slate-500 p-2 rounded-lg group-hover/link:border-[#D84835]/20 group-hover/link:bg-[#D84835]/10 group-hover/link:text-[#D84835] transition-colors mt-0.5">
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
