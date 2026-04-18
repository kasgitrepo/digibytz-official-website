import React, { useState, useEffect } from 'react';
import {
  Sun, Shield, Zap, Laptop, ArrowRight,
  Phone, Mail, CheckCircle, Star, X,
  PiggyBank, TrendingUp, Landmark, Banknote,
  Leaf, Settings, Award, ThumbsUp, Users, MapPin,
  Cpu, MessageSquare, Search, FileText, Wrench,
  Monitor, Printer, Video, Globe
} from 'lucide-react';

const servicesData = [
  {
    id: 'solar',
    title: 'Solar Panels',
    wallpaper: '/Solar Panels_wallpaper.jpg',
    icon: <Sun size={32} />,
    tags: ['Installation', 'Service', 'Sales'],
    shortDesc: 'Premium solar solutions for sustainable and cost-effective energy.',
    longDesc: 'Our solar panel services cover everything from initial consultation and sales to expert installation and ongoing maintenance. We provide state-of-the-art panels that maximize efficiency and reduce your carbon footprint while cutting down your electricity bills.',
    categories: [
      {
        title: 'Residential Solar',
        desc: 'We design and install customised rooftop solar systems for homes across India. Our solar solutions help homeowners get direct benefit from government subsidies, reduce electricity bills, and generate clean energy with minimal maintenance and long-term reliability assured.',
        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600'
      },
      {
        title: 'Commercial Solar',
        desc: 'We support businesses with scalable solar installations that lower operational costs and improve energy efficiency. Our systems are designed to help companies reduce grid dependence, achieve consistent performance, and enhance sustainability credentials.',
        img: '/commercial_solar.png'
      },
      {
        title: 'Industrial Solar',
        desc: 'For large industries, we deliver high-capacity solar power systems that reduce power expenses and optimise energy consumption. Our engineering team ensures efficiency, safe, and performance-driven installations tailored to industrial requirements.',
        img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=600'
      },
    ],

    epc: [
      {
        title: 'Engineering',
        desc: 'Our expert team delivers precision-driven solar project design across all scales - from warehouse rooftops to educational facilities. We optimize performance using advanced modeling tailored to solar panels for industrial use and large-scale clean energy initiatives.',
        img: '/Engineering.PNG'
      },
      {
        title: 'Procurement',
        desc: 'We select high-efficiency technology components ideal for projects like installing solar panel on warehouse rooftop and hybrid applications. Whether you\'re integrating solar into a solar-powered car park lights system or a logistics hub, we ensure reliable and scalable sourcing.',
        img: '/Procurement.jpeg'
      },
      {
        title: 'Construction',
        desc: 'We specialize in executing complex solar builds for a variety of structures from solar rooftop or car park systems to expansive solar installations across commercial buildings. Each project is delivered with structural integrity, safety compliance, and DPWH-approved engineering practices.',
        img: '/Construction.jpg'
      },
      {
        title: 'Maintenance',
        desc: 'Our support goes beyond installation. With scheduled check-ups, troubleshooting, and system diagnostics for high-capacity and off grid solar system small home solutions, we keep your investment running at peak efficiency.',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600'
      }
    ],
    benefits: [
      { icon: <PiggyBank className="text-brand-green" size={28} />, title: 'Significant Cost Savings & High ROI', desc: 'Reduce electricity bills significantly and recover overall solar investment within a few years.' },
      { icon: <TrendingUp className="text-brand-green" size={28} />, title: 'Creation of Additional Income', desc: 'Export surplus solar power back to the grid and earn valuable energy credits monthly.' },
      { icon: <Zap className="text-brand-green" size={28} />, title: 'Net Metering Advantage', desc: 'Offset electricity bills by exporting excess power through approved net metering systems.' },
      { icon: <Landmark className="text-brand-green" size={28} />, title: 'Government Incentives', desc: 'Apply under respective central and state subsidies to reduce upfront solar installation costs.' },
      { icon: <Banknote className="text-brand-green" size={28} />, title: 'Collateral-Free Loan Availability', desc: 'Access easy solar financing options without collateral for quicker system installation.' },
      { icon: <Leaf className="text-brand-green" size={28} />, title: 'Eco-Friendly & Sustainable', desc: 'Reduce carbon footprint and promote clean, renewable energy for future generations.' },
      { icon: <Shield className="text-brand-green" size={28} />, title: 'Energy Security & Independence', desc: 'Reduce energy dependency on grid electricity and protect against rising tariff rates.' },
      { icon: <Settings className="text-brand-green" size={28} />, title: 'Low Maintenance & Long Life', desc: 'Solar systems require minimal maintenance and deliver reliable performance continuously for decades.' },
      { icon: <Award className="text-brand-green" size={28} />, title: 'Enhanced Brand & Compliance', desc: 'Strengthen sustainability goals and improve corporate brand image with better solar adoption.' }
    ],
    whyChooseUs: [
      { icon: <Award size={32} />, title: 'Expertise & Experience', desc: 'We have over 9 years of experience in delivering efficient rooftop solar solutions across India.' },
      { icon: <Users size={32} />, title: 'Customer Approach', desc: 'Every solar project is tailor-designed to match your energy generation needs, given your property type and budget.' },
      { icon: <CheckCircle size={32} />, title: 'Quality & Reliability', desc: 'We utilize premium solar panels and certified equipment that ensures long-lasting system performance.' },
      { icon: <PiggyBank size={32} />, title: 'Subsidy Assistance', desc: 'Tax exemption, flexible EMI loan support, and accelerated depreciation will reduce overall project costs.' },
      { icon: <MapPin size={32} />, title: 'Local Presence & Trust', desc: 'A India-based team offering reliable solar panel services like installation, after-sales support and more that you can highly rely on.' },
      { icon: <Cpu size={32} />, title: 'Advanced Technology', desc: 'We utilize high-efficiency panels and smart inverters to achieve better power generation and for monitoring purposes.' }
    ],
    installationProcess: [
      { step: 1, icon: <MessageSquare size={32} />, title: 'Initial Consultation & Site Visit', desc: 'We start by understanding your solar energy generation needs and schedule a visit to check how fit your property is for solar installation.' },
      { step: 2, icon: <Search size={32} />, title: 'Feasibility Check & Proposal Design', desc: 'Our experts inspect your roof, assess sunlight-prone areas, and review your electricity usage to create a customized solar system for your home.' },
      { step: 3, icon: <FileText size={32} />, title: 'Documentation, Approvals & Installation', desc: 'We handle MNRE registration, KSEB approvals, and loan support. Materials arrive within a week, and installation will be done in the following week.' },
      { step: 4, icon: <Wrench size={32} />, title: 'Ongoing Support & Maintenance', desc: 'Enjoy free preventive maintenance every 4 months, for the first 5 years of your solar system installation. We do monitor your system and offer reliable service whenever needed.' }
    ],
    images: [
      '/Solar1.jpg',
      '/Solar2.jpeg'
    ],
    reviews: [
      { id: 's1', name: 'Ravi T.', initial: 'R', text: 'Outstanding solar installation! Our power bills have dropped significantly. Very professional team.' },
      { id: 's2', name: 'Sneha M.', initial: 'S', text: 'Highly recommend Digibytz for solar setup. They took care of everything from start to finish.' },
      { id: 's3', name: 'Arun K.', initial: 'A', text: 'The panels are top notch and the after-sales service is brilliant. Great investment.' },
      { id: 's4', name: 'Meera S.', initial: 'M', text: 'Very transparent pricing and excellent workmanship. The solar system is working flawlessly.' },
      { id: 's5', name: 'Vimal G.', initial: 'V', text: 'Excellent ongoing maintenance. The panels have been working at peak efficiency.' }
    ]
  },
  {
    id: 'cctv',
    title: 'Security Solutions - CCTV',
    wallpaper: '/Security Solutions - CCTV_wallpaper.jpg',
    icon: <Shield size={32} />,
    tags: ['Installation', 'Service', 'Sales'],
    shortDesc: 'Advanced surveillance systems to keep your premises secure 24/7.',
    longDesc: 'Protect your home or business with our top-of-the-line CCTV security solutions. We offer high-definition cameras with night vision, motion tracking, and remote mobile access. Our experts handle complete sales, seamless installation, and rapid-response servicing.',
    surveillance: [
      {
        title: 'Intelligent Camera Solutions',
        subtitle: '(1–2 Cameras)',
        usedFor: ['Solar Camera', '4G Camera', 'WiFi Camera'],
        img: '/cctv_type1.jpg'
      },
      {
        title: 'Advanced Multi-Camera Systems',
        subtitle: '(More than 2 Cameras)',
        usedFor: ['Analog', 'Normal', 'HD', 'Hybrid', 'IP', 'IP (Pro)', 'Hybrid 360° Rotating'],
        img: '/cctv_type2.jpg'
      }
    ],
    trustedBrands: [
      { name: 'Hikvision', logo: '/Hikvision-Logo.png' },
      { name: 'CP Plus', logo: '/cpplus_logo.png' },
      { name: 'Dahua Technology', logo: '/dahua_logo.png' },
      { name: 'UNV (Uniview)', logo: '/uniview_logo.png' },
      { name: 'Prama', logo: '/prama_logo' },
      { name: 'High Focus', logo: '/highfocus_logo.png' },
    ],
    images: [
      '/CCTV1.PNG',
      '/CCTV2.PNG'
    ],
    reviews: [
      { id: 'c1', name: 'Vikas D.', initial: 'V', text: 'Top tier security systems. The cameras are clear even at night. Feel much safer now.' },
      { id: 'c2', name: 'Pooja R.', initial: 'P', text: 'Quick and clean installation of CCTV at our office. The remote view app works perfectly.' },
      { id: 'c3', name: 'Manoj V.', initial: 'M', text: 'Their team helped us choose the right cameras for all blind spots. Highly satisfied.' },
      { id: 'c4', name: 'Ananya L.', initial: 'A', text: 'Good quality products and professional technicians. The motion tracking feature is amazing.' },
      { id: 'c5', name: 'Gopal N.', initial: 'G', text: 'Great service! They responded quickly when we needed an extra camera added.' }
    ]
  },
  {
    id: 'inverters',
    title: 'Inverters and Batteries',
    wallpaper: '/Inverters_wallpaper.PNG',
    icon: <Zap size={32} />,
    tags: ['Installation', 'Service', 'Sales'],
    shortDesc: 'Reliable power backup solutions to ensure uninterrupted workflow.',
    longDesc: 'Never experience a blackout again. Digibytz provides robust inverter solutions tailored to both residential and commercial needs. We supply top-brand inverters, ensure safe professional installation, and provide necessary regular maintenance for peak performance.',
    images: [
      '/inverter1.png',
      '/inverter2.jpg'
    ],
    reviews: [
      { id: 'i1', name: 'Deepak S.', initial: 'D', text: 'Finally, no more power cuts disrupting work. The inverter unit they suggested works flawlessly.' },
      { id: 'i2', name: 'Kavita B.', initial: 'K', text: 'Prompt installation and proper guidance on usage. The backup time is exactly as promised.' },
      { id: 'i3', name: 'Sanjay P.', initial: 'S', text: 'Very neat wiring and proper setup. The inverter automatically switches on in seconds.' },
      { id: 'i4', name: 'Ritu J.', initial: 'R', text: 'Trustable brand provided at a good price. Their service team is very responsive.' }
    ]
  },
  {
    id: 'computers',
    title: 'PCs & Laptops',
    wallpaper: '/PCs & Laptops_wallpaper.jpg',
    icon: <Laptop size={32} />,
    tags: ['Installation', 'Sales', 'Service'],
    shortDesc: 'High-performance laptops, desktops, and custom assembled PCs.',
    longDesc: 'Whether you need sleek laptops for on-the-go productivity, all-in-one desktops for the office, or custom-assembled high-performance PCs for gaming or design, we have you covered. Our IT experts deliver sales guidance, rapid OS/software installation, and dedicated hardware servicing.',
    categories: [
      {
        title: 'Laptops (Gaming & Workspace)',
        desc: 'High-performance laptops for professional work and gaming. Portable, powerful, and equipped with top-tier graphics.',
        img: '/laptop_gaming_workspace.png',
        brands: [
          { name: 'Lenovo', logo: '/lenovo_logo.png', desc: 'Legion and ThinkPad series for build quality and performance.' },
          { name: 'ASUS', logo: '/asus_logo.png', desc: 'ROG and VivoBook lineups for cutting-edge power and aesthetics.' },
          { name: 'MSI', logo: '/mis_logo.png', desc: 'Premium gaming laptops built for raw speed and thermal efficiency.' },
          { name: 'DELL', logo: '/dell_logo.png', desc: 'XPS and Alienware series for professional and gaming excellence.' },
          { name: 'HP', logo: '/hp_logo.png', desc: 'Spectre and OMEN lineups balancing design with powerful internals.' },
          { name: 'Acer', logo: '/acer_logo.png', desc: 'Predator and Swift series offering great value and technology.' }
        ]
      },
      {
        title: 'Desktops',
        desc: 'Reliable desktop solutions for business and home. Built for consistent performance and easy upgradability.',
        img: '/desktop_pc.png',
        brands: [
          { name: 'Lenovo', logo: '/lenovo_logo.png', desc: 'ThinkCentre towers offering rock-solid office reliability.' },
          { name: 'ASUS', logo: '/asus_logo.png', desc: 'ProArt and ROG desktops for creative work and gaming.' },
          { name: 'DELL', logo: '/dell_logo.png', desc: 'OptiPlex and Inspiron series, the standard for business computing.' },
          { name: 'HP', logo: '/hp_logo.png', desc: 'EliteDesk and Pavilion towers for productivity and power.' },
          { name: 'Acer', logo: '/acer_logo.png', desc: 'Aspire and Veriton desktops providing dependable daily performance.' }
        ]
      },
      {
        title: 'All-in-One PCs',
        desc: 'Sleek, space-saving solutions for modern offices. Monitor and PC integrated into one clutter-free design.',
        img: '/all_in_one_pc.png',
        brands: [
          { name: 'Lenovo', logo: '/lenovo_logo.png', desc: 'IdeaCentre AIO series with sharp displays and efficient internals.' },
          { name: 'ASUS', logo: '/asus_logo.png', desc: 'Zen AiO models featuring premium design and performance.' },
          { name: 'DELL', logo: '/dell_logo.png', desc: 'Inspiron AIOs offering a seamless desktop experience.' },
          { name: 'HP', logo: '/hp_logo.png', desc: 'Pavilion and Envy AIOs for home and professional creative use.' },
          { name: 'Acer', logo: '/acer_logo.png', desc: 'Aspire C series providing slim designs and reliable performance.' }
        ]
      },
      {
        title: 'Assembled PCs',
        desc: 'Bespoke custom computer rigs meticulously assembled based on your exact specifications and budget. We build extreme powerhouses for smooth 4K gaming, 3D rendering, and video editing.',
        img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=600'
      }
    ],
    images: [],
    reviews: [
      { id: 'p1', name: 'Nitin A.', initial: 'N', text: 'Bought a custom gaming PC. They understood precisely what I wanted and built a beast of a machine.' },
      { id: 'p2', name: 'Shruti V.', initial: 'S', text: 'Great place for laptops and accessories. They helped transfer all my old data effortlessly.' },
      { id: 'p3', name: 'Vikram M.', initial: 'V', text: 'The desktop repair service was fast, and the charges were very reasonable. Excellent job.' },
      { id: 'p4', name: 'Neha C.', initial: 'N', text: 'Purchased office computers from them. Setup was rapid and the systems run very smoothly.' },
      { id: 'p5', name: 'Aditya S.', initial: 'A', text: 'Very knowledgeable staff. Helped me pick the best configuration for my graphic design work.' }
    ]
  },
  {
    id: 'it-surveillance',
    title: 'Comprehensive IT & Surveillance Services',
    wallpaper: '/Comprehensive IT & Surveillance Services_wallpaper.jpg',
    icon: <Wrench size={32} />,
    tags: ['Infrastructure', 'Hardware', 'Security'],
    shortDesc: 'End-to-end solutions for hardware, security, and network infrastructure.',
    longDesc: 'We provide specialized end-to-end IT infrastructure and surveillance systems tailored for businesses and institutions. From enterprise-grade networking and data security to complex hardware repairs and printing solutions, our team ensures your operations stay uninterrupted and secure.',
    gridCategories: [
      {
        title: 'Computing Solutions',
        icon: <Monitor className="text-brand-green" size={32} />,
        desc: 'Branded desktops, custom-built systems, workstations, and servers. All branded laptops and high-performance workstation laptops.'
      },
      {
        title: 'Chip-Level Repairs',
        icon: <Cpu className="text-brand-green" size={32} />,
        desc: 'Advanced motherboard repair services for Desktop & Laptop motherboards, DVR systems, and NVR systems.'
      },
      {
        title: 'Printing Solutions',
        icon: <Printer className="text-brand-green" size={32} />,
        desc: 'Complete support for Laser, Inkjet & Dot Matrix printers, sticker printers, cartridge refilling, and systematic maintenance.'
      },
      {
        title: 'Surveillance Systems',
        icon: <Video className="text-brand-green" size={32} />,
        desc: 'End-to-end CCTV: Analog, HD, IP & Hybrid systems, plus solar-powered and WiFi cameras with full installation.'
      },
      {
        title: 'Networking & Security',
        icon: <Globe className="text-brand-green" size={32} />,
        desc: 'Robust infrastructure with managed/unmanaged switches, routers, access points, firewalls, and cloud storage integration.'
      }
    ],
    customCTA: {
      message: 'Need a custom solution for your setup?',
      subtext: 'We design and deploy based on your exact requirements.',
      phones: ['8098950005', '9150010664']
    },
    images: []
  }
];

const reviewsData = [
  {
    id: 1,
    name: 'Ramesh K.',
    text: "Digibytz provided an excellent CCTV installation for our office. The team was professional, and the camera quality is outstanding.",
    initial: 'R'
  },
  {
    id: 2,
    name: 'Priya S.',
    text: "Got my custom PC assembled here. The pricing was transparent and the cable management inside the CPU is flawless. Highly recommend!",
    initial: 'P'
  },
  {
    id: 3,
    name: 'Karthik Coimbatore',
    text: "Solar panel setup was very smooth. They explained everything clearly and handling the post-installation service perfectly.",
    initial: 'K'
  }
];

const brandLogos = [
  '/acer_logo.png', '/asus_logo.png', '/cpplus_logo.png', '/dahua_logo.png',
  '/dell_logo.png', '/highfocus_logo.png', '/hp_logo.png', '/lenovo_logo.png',
  '/mis_logo.png', '/prama_logo', '/uniview_logo.png', '/Hikvision-Logo.png'
];

function App() {
  const [activeService, setActiveService] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // ⚠️ Replace this URL with your deployed Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyVoH7Xhr3be7w67HbOfkdRwAXAdUa7n3rgQOy45wklTiVahTEUBsLkal1xdp4qIyR1/exec';



    const form = new FormData();
    form.append('Name', formData.name);
    form.append('Email', formData.email);
    form.append('Phone', formData.phone);
    form.append('Location', formData.location);
    form.append('Service', formData.service);
    form.append('Message', formData.message);

    try {
      // no-cors mode is needed for Google Apps Script Web Apps avoiding CORS policy blocks.
      // Opaque responses will have response.ok = false, so we just assume success if it doesn't throw.
      await fetch(scriptURL, { method: 'POST', body: form, mode: 'no-cors' });

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' });
    } catch (error) {
      console.error('Error!', error.message);
      setFormStatus('error');
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img src="/Logo.png" alt="Digibytz Logo" style={{ height: '60px', width: 'auto' }} />
            <img src="/Name.png" alt="Digibytz" style={{ height: '28px', width: 'auto' }} />
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#quote" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Get quote</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="reveal-word" style={{ animationDelay: '0.1s' }}>India's</span>{' '}
            <span className="reveal-word" style={{ animationDelay: '0.2s' }}>Trusted</span>{' '}
            <span className="reveal-word" style={{ animationDelay: '0.3s' }}>Partner</span>{' '}
            <span className="reveal-word" style={{ animationDelay: '0.4s' }}>for</span>{' '}
            <span className="text-brand-green reveal-word" style={{ animationDelay: '0.5s' }}>Smarter</span>{' '}
            <span className="font-bethany text-brand-orange reveal-word" style={{ animationDelay: '0.6s' }}>Roof Tops,</span>{' '}
            <span className="text-brand-green reveal-word" style={{ animationDelay: '0.7s' }}>Smarter</span>{' '}
            <span className="font-bethany text-brand-orange reveal-word" style={{ animationDelay: '0.8s' }}>Surveillance,</span>
            <br />
            <span className="text-brand-green reveal-word" style={{ animationDelay: '0.9s' }}>Smarter</span>{' '}
            <span className="font-bethany text-brand-orange reveal-word" style={{ animationDelay: '1.0s' }}>Power</span>{' '}
            <span className="reveal-word" style={{ animationDelay: '1.1s' }}>&amp;</span>{' '}
            <span className="text-brand-green reveal-word" style={{ animationDelay: '1.2s' }}>Smarter</span>{' '}
            <span className="font-bethany text-brand-orange reveal-word" style={{ animationDelay: '1.3s' }}>PCs &amp; Laptops</span>
          </h1>
          <p className="hero-subtitle">
            Welcome to Digibytz Digital, Coimbatore. From cutting-edge security systems and custom PCs to sustainable solar energy, we deliver premium installations, seamless sales, and dedicated service.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="#services" className="btn-primary">
              Explore Services <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="reveal-word" style={{animationDelay: '1.4s'}}>10,000+</h3>
              <p className="reveal-word" style={{animationDelay: '1.5s', display: 'block'}}>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="reveal-word" style={{animationDelay: '1.6s'}}>18+ years</h3>
              <p className="reveal-word" style={{animationDelay: '1.7s', display: 'block'}}>Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="reveal-word" style={{animationDelay: '1.8s'}}>1,000+</h3>
              <p className="reveal-word" style={{animationDelay: '1.9s', display: 'block'}}>Partners</p>
            </div>
            <div className="stat-item">
              <h3 className="reveal-word" style={{animationDelay: '2.0s'}}>5</h3>
              <p className="reveal-word" style={{animationDelay: '2.1s', display: 'block'}}>Core Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="marquee-container">
         <div className="marquee-content">
            {brandLogos.map((logo, idx) => <img key={`orig-${idx}`} src={logo} alt="Brand Logo" className="marquee-logo" />)}
            {/* Duplicated for seamless continuous scroll */}
            {brandLogos.map((logo, idx) => <img key={`dup-${idx}`} src={logo} alt="Brand Logo" className="marquee-logo" />)}
         </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section container">
        <h2 className="section-title">
          <span className="animate-on-scroll" style={{ display: 'inline-block' }}>Our&nbsp;</span>
          <span className="animate-on-scroll delay-100" style={{ display: 'inline-block' }}>Premium&nbsp;</span>
          <span className="text-gradient animate-on-scroll delay-200" style={{ display: 'inline-block' }}>Services</span>
        </h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-card animate-on-scroll delay-${(index * 100) + 100}`}
              onClick={() => setActiveService(service)}
            >
              {service.wallpaper && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url("${service.wallpaper}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, zIndex: 0, pointerEvents: 'none' }} />
              )}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="service-tag">{tag}</span>
                  ))}
                </div>
                <p className="service-desc">{service.shortDesc}</p>
  
                <div className="service-link" style={{ marginTop: 'auto' }}>
                  View Details <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section container" style={{ position: 'relative' }}>
        <h2 className="section-title">
          <span className="animate-on-scroll" style={{ display: 'inline-block' }}>What&nbsp;</span>
          <span className="animate-on-scroll delay-100" style={{ display: 'inline-block' }}>Our&nbsp;</span>
          <span className="text-gradient animate-on-scroll delay-200" style={{ display: 'inline-block' }}>Clients&nbsp;</span>
          <span className="animate-on-scroll delay-300" style={{ display: 'inline-block' }}>Say</span>
        </h2>
        <div className="reviews-container">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.initial}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
              <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.1 }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width="30" alt="Google" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay for Service Details */}
      <div className={`modal-overlay ${activeService ? 'active' : ''}`} onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) setActiveService(null);
      }}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setActiveService(null)}>
            <X size={24} />
          </button>

          {activeService && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--color-primary)' }}>{activeService.icon}</div>
                <h2 style={{ fontSize: '2rem' }}>{activeService.title}</h2>
              </div>

              <div className="service-tags">
                {activeService.tags.map(tag => (
                  <span key={tag} className="service-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>
                    <CheckCircle size={12} style={{ marginRight: '4px', display: 'inline' }} /> {tag}
                  </span>
                ))}
              </div>

              <div className="modal-body">
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  {activeService.longDesc}
                </p>

                {activeService.categories && (
                  <div style={{ marginTop: '2rem' }}>
                    <div className={`responsive-modal-grid ${activeService.categories.length === 3 ? 'cols-3' : 'cols-2'}`}>
                      {activeService.categories.map((cat, idx) => (
                        <div
                          key={idx}
                          className="category-card"
                          style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '380px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: `url(${cat.img}) center/cover no-repeat`, boxShadow: '0 0 0 4px var(--bg-dark), 0 8px 32px rgba(0,0,0,0.5)' }}
                        >
                          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1) 100%)' }}></div>
                          <div style={{ position: 'relative', zIndex: 1, padding: '1.8rem 1.5rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'white', textAlign: 'center', marginBottom: '0.8rem' }}>{cat.title}</h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: cat.brands ? '1.2rem' : '0' }}>{cat.desc}</p>
                            {cat.brands && (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                                {cat.brands.map((brand, bIdx) => (
                                  <div key={bIdx} style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.35)', borderRadius: '10px', padding: '0.75rem 1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                                      {brand.logo && (
                                        <div style={{ width: '24px', height: '24px', background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', flexShrink: 0 }}>
                                          <img src={brand.logo} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </div>
                                      )}
                                      <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--color-secondary)', fontWeight: '700' }}>{brand.name}</span>
                                    </div>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: '#cbd5e1', lineHeight: '1.4', margin: 0 }}>{brand.desc}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Surveillance Solutions Section */}
                {activeService.surveillance && (
                  <div style={{ marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Surveillance <span style={{ color: 'var(--color-secondary)' }}>Solutions</span></h3>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Smart camera systems tailored to every scale and setup.</p>
                    <div className="responsive-modal-grid cols-2">
                      {activeService.surveillance.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            minHeight: '360px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            background: `url(${item.img}) center/cover no-repeat`,
                            boxShadow: '0 0 0 4px var(--bg-dark), 0 8px 32px rgba(0,0,0,0.5)'
                          }}
                        >
                          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.1) 100%)' }}></div>
                          <div style={{ position: 'relative', zIndex: 1, padding: '1.8rem 1.5rem' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'white', marginBottom: '0.3rem' }}>{item.title}</h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', marginBottom: '1rem', fontStyle: 'italic' }}>{item.subtitle}</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>Use for:</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                              {item.usedFor.map((use, uIdx) => (
                                <span
                                  key={uIdx}
                                  style={{
                                    background: 'rgba(16,185,129,0.15)',
                                    border: '1px solid rgba(16,185,129,0.4)',
                                    color: '#6ee7b7',
                                    borderRadius: '20px',
                                    padding: '0.25rem 0.75rem',
                                    fontSize: '0.78rem',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: '600'
                                  }}
                                >{use}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grid Categories Section (for IT & Surveillance) */}
                {activeService.gridCategories && (
                  <div style={{ marginTop: '3rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {activeService.gridCategories.map((cat, idx) => (
                        <div
                          key={idx}
                          className="category-card"
                          style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '2rem',
                            borderRadius: '20px',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div style={{ background: 'rgba(16,185,129,0.1)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {cat.icon}
                          </div>
                          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'white' }}>{cat.title}</h3>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{cat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Custom CTA for special services */}
                {activeService.customCTA && (
                  <div style={{ marginTop: '4rem', padding: '3rem 2rem', background: 'linear-gradient(135deg, var(--color-primary), #064e3b)', borderRadius: '24px', textAlign: 'center', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'white' }}>{activeService.customCTA.message}</h3>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem' }}>{activeService.customCTA.subtext}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                      {activeService.customCTA.phones.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:+91${phone}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            background: 'white',
                            color: 'var(--color-primary)',
                            padding: '1rem 2rem',
                            borderRadius: '100px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                          }}
                        >
                          <Phone size={20} /> {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trusted Brands Section */}
                {activeService.trustedBrands && (
                  <div style={{ marginTop: '3rem', padding: '2.5rem 2rem', background: 'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(249,115,22,0.06))', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Our Trusted <span style={{ color: 'var(--color-secondary)' }}>Brands</span></h3>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto 2rem' }}>We partner with industry-leading names to deliver reliable, high-performance surveillance.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                      {activeService.trustedBrands.map((brand, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'var(--bg-card)',
                            border: '1px solid rgba(249,115,22,0.3)',
                            borderRadius: '16px',
                            padding: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.8rem',
                            minWidth: '140px',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                            transition: 'transform 0.2s, border-color 0.2s',
                            cursor: 'default'
                          }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.7)'; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'; }}
                        >
                          <div style={{ width: '110px', height: '60px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                            />
                          </div>
                          <span style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            color: 'var(--text-muted)',
                            textAlign: 'center',
                            letterSpacing: '0.02em'
                          }}>{brand.name}</span>
                        </div>
                      ))}
                    </div>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '680px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                      We remain flexible in our approach and can source and install <strong style={{ color: 'var(--text-light)' }}>other brands</strong> based on specific customer requirements, project scope, and budget preferences. Our priority is to deliver <strong style={{ color: 'var(--text-light)' }}>the right solution</strong>, not limit you to a fixed set of options.
                    </p>
                  </div>
                )}

                {/* Benefits Section */}
                {activeService.benefits && (
                  <div style={{ marginTop: '4rem', padding: '3rem 2rem', background: 'var(--bg-dark)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>Benefits of Solar</h3>
                    <div className="responsive-modal-grid cols-2">
                      {activeService.benefits.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '1.25rem', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                          <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>{item.icon}</div>
                          <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: 'var(--text-light)', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* EPC Section */}
                {activeService.epc && (
                  <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>What we Offer</h3>
                    <div className="responsive-modal-grid cols-3">
                      {activeService.epc.map((item, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-dark)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <img src={item.img} alt={item.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                          <div style={{ padding: '1.5rem' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.8rem', color: 'var(--text-light)', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why Choose Us */}
                {activeService.whyChooseUs && (
                  <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>Why Choose Us</h3>
                    <div className="responsive-modal-grid cols-3">
                      {activeService.whyChooseUs.map((item, idx) => (
                        <div key={idx} style={{ background: 'var(--bg-dark)', padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(249, 115, 22, 0.1)', color: 'var(--color-secondary)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                            {item.icon}
                          </div>
                          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Installation Process */}
                {activeService.installationProcess && (
                  <div style={{ marginTop: '4rem', padding: '4rem 2rem', background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', borderRadius: '24px', color: 'white' }}>
                    <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: 'white', fontFamily: 'var(--font-heading)' }}>Our <span style={{ borderBottom: '3px solid var(--color-secondary)' }}>Installation</span> Process</h3>
                    <div className="responsive-modal-grid cols-3">
                      {activeService.installationProcess.map((item, idx) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', padding: '1.5rem', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', marginBottom: '1.5rem', backdropFilter: 'blur(10px)' }}>
                            {item.icon}
                          </div>
                          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'white', fontFamily: 'var(--font-heading)' }}>{item.step}. {item.title}</h4>
                          <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: '1.6' }}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeService.images && activeService.images.length > 0 && (
                  <div className="modal-image-grid" style={{ marginTop: '4rem' }}>
                    {activeService.images.map((img, idx) => (
                      <img 
                        key={idx} 
                        src={img} 
                        alt={`${activeService.title} product example`} 
                        style={img.includes('inverter1.png') ? { objectPosition: 'center 25%' } : {}}
                      />
                    ))}
                  </div>
                )}

                <div className="modal-cta">
                  <a href="tel:+910000000000" className="btn-primary">
                    <Phone size={20} /> Call for Booking
                  </a>
                  <a href="mailto:info@digibytz.com" className="btn-secondary">
                    <Mail size={20} /> Request a Quote
                  </a>
                </div>

                {activeService.reviews && activeService.reviews.length > 0 && (
                  <div style={{ marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-color)', textAlign: 'center' }}>
                      Customer Feedback on {activeService.title}
                    </h3>
                    <div className="reviews-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                      {activeService.reviews.map((review) => (
                        <div key={review.id} className="review-card" style={{ padding: '1.25rem', background: 'var(--color-bg)' }}>
                          <div className="review-header">
                            <div className="review-avatar" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>{review.initial}</div>
                            <div>
                              <div className="review-name" style={{ fontSize: '1rem' }}>{review.name}</div>
                              <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                              </div>
                            </div>
                          </div>
                          <p className="review-text" style={{ fontSize: '0.9rem' }}>"{review.text}"</p>
                          <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.1 }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" width="20" alt="Google" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {/* Get Quote Form */}
      <section id="quote" className="section container">
        <h2 className="section-title">
          <span className="animate-on-scroll" style={{ display: 'inline-block' }}>Get&nbsp;</span>
          <span className="animate-on-scroll delay-100" style={{ display: 'inline-block' }}>a&nbsp;</span>
          <span className="text-gradient animate-on-scroll delay-200" style={{ display: 'inline-block' }}>Quote</span>
        </h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          {formStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                <CheckCircle size={64} />
              </div>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '1rem' }}>Form Submitted.</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Our team will get back to you.</p>
              <button type="button" onClick={() => setFormStatus(null)} className="btn-secondary">
                Submit another form
              </button>
            </div>
          ) : (
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleFormSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required style={{ fontFamily: 'var(--font-body)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email Address" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Please enter a valid email address." style={{ fontFamily: 'var(--font-body)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>Phone</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Phone Number (10 digits)" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number." style={{ fontFamily: 'var(--font-body)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="location" style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>Location</label>
              <input type="text" id="location" value={formData.location} onChange={handleInputChange} placeholder="Your City or Setup Location" required style={{ fontFamily: 'var(--font-body)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="service" style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>Select Service</label>
              <select id="service" value={formData.service} onChange={handleInputChange} required style={{ fontFamily: 'var(--font-body)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', outline: 'none', transition: 'border-color 0.3s', cursor: 'pointer', appearance: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                <option value="" disabled>Select a Service</option>
                <option value="solar">Solar Panels</option>
                <option value="cctv">Security Solutions - CCTV</option>
                <option value="inverters">Inverters and Batteries</option>
                <option value="computers">PCs &amp; Laptops</option>
                <option value="it">IT &amp; Surveillance</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: '500', fontFamily: 'var(--font-heading)' }}>Message</label>
              <textarea id="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="How can we help?" required style={{ fontFamily: 'var(--font-body)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--bg-dark)', color: 'white', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}></textarea>
            </div>



            {formStatus === 'error' && (
              <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>
                Oops! Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button type="submit" disabled={formStatus === 'submitting'} className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem', padding: '1rem', borderRadius: '12px', fontSize: '1.1rem', cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer', opacity: formStatus === 'submitting' ? 0.7 : 1 }}>
              {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
          )}
        </div>

        <div style={{ maxWidth: '800px', margin: '4rem auto 0', padding: '0 1rem', textAlign: 'center' }}>
          <h4 style={{ color: 'white', fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '2.5rem', fontWeight: 'bold' }}>Instant <span className="text-gradient">Connect</span></h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
            <div className="contact-row">
              <span className="contact-label">Solar Panels:</span>
              <a href="tel://+9196003097776/" style={{ backgroundColor: 'var(--color-primary)', color: '#111', textDecoration: 'none', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.5rem', borderRadius: '30px', fontSize: '1.1rem', minWidth: '220px', justifyContent: 'center', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <Phone size={18} color="#111" /> +91 96003 97776
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Security Solutions - CCTV:</span>
              <a href="tel://+919150010664/" style={{ backgroundColor: 'var(--color-primary)', color: '#111', textDecoration: 'none', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.5rem', borderRadius: '30px', fontSize: '1.1rem', minWidth: '220px', justifyContent: 'center', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <Phone size={18} color="#111" /> +91-91500 10664
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Inverters and Batteries:</span>
              <a href="tel://+919600397775/" style={{ backgroundColor: 'var(--color-primary)', color: '#111', textDecoration: 'none', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.5rem', borderRadius: '30px', fontSize: '1.1rem', minWidth: '220px', justifyContent: 'center', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <Phone size={18} color="#111" /> +91-96003 97775
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">PCs & Laptops:</span>
              <a href="tel://+919150011907/" style={{ backgroundColor: 'var(--color-primary)', color: '#111', textDecoration: 'none', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.5rem', borderRadius: '30px', fontSize: '1.1rem', minWidth: '220px', justifyContent: 'center', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <Phone size={18} color="#111" /> +91-91500 11907
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Comprehensive IT & Surveillance Services:</span>
              <a href="tel://+918098950005/" style={{ backgroundColor: 'var(--color-primary)', color: '#111', textDecoration: 'none', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.5rem', borderRadius: '30px', fontSize: '1.1rem', minWidth: '220px', justifyContent: 'center', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <Phone size={18} color="#111" /> +91-80989 50005
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="section container" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="animate-on-scroll" style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
          <img 
            src="/TeamDigibytz.jpeg" 
            alt="The Digibytz Team" 
            style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }} 
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)', padding: '3rem 2rem 2rem', textAlign: 'center', pointerEvents: 'none' }}>
            <h3 style={{ color: 'white', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Meet the Digibytz Team</h3>
            <p style={{ color: 'var(--color-primary)', fontWeight: '600', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Dedicated to your success in Coimbatore</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <div className="container footer-content">
          <a href="#home" className="footer-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
            <img src="/Logo.png" alt="Digibytz Logo" style={{ height: '72px', width: 'auto' }} />
            <img src="/Name.png" alt="Digibytz" style={{ height: '32px', width: 'auto' }} />
          </a>
          <p className="footer-text">
            Based in Coimbatore🌏, bringing you premium solutions in sustainable energy, uncompromising security, and high-performance computing.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <a href="tel:+910000000000" style={{ color: 'var(--text-muted)' }}><Phone /></a>
            <a href="mailto:info@digibytz.com" style={{ color: 'var(--text-muted)' }}><Mail /></a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Digibytz Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
