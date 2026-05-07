export const ABOUT_TEXT =
  "Raynad Digital is a business transformation partner that believes a company's success is defined by the strength of its internal systems. We don't just implement tools; we architect growth-ready business structures designed for long-term scalability. Led by founders Nadir Alatas and Rayyan Faris, along with Muhammad Defan, we serve as a dedicated partner focused on making your business scalable, data-driven, and future-ready."

export const PAIN_POINTS = [
  'Operational systems run separately',
  'Customer data is fragmented',
  'Decision-making is not data-driven',
  'Loyalty programs are not measurable',
  'Business growth is not supported by scalable systems',
]

export const SERVICES = [
  {
    id: 'service-mapping',
    title: 'Business System Mapping',
    description: 'We create a clear blueprint for a scalable system structure by analyzing your business and identifying operational bottlenecks.',
    gradientFrom: '#2a2a2a',
    gradientTo: '#1a1a1a',
  },
  {
    id: 'service-development',
    title: 'Custom Business System Development',
    description: 'We build tailored solutions like POS, CRM, and Financial Monitoring systems that align with your specific business model.',
    gradientFrom: '#1e2a38',
    gradientTo: '#0f1620',
  },
  {
    id: 'service-integration',
    title: 'System Integration',
    description: 'We unify your fragmented tools and platforms into a single, synchronized architecture for full operational transparency.',
    gradientFrom: '#2a2418',
    gradientTo: '#1a1610',
  },
  {
    id: 'service-optimization',
    title: 'Continuous Optimization & Advisory',
    description: 'We provide ongoing performance analysis and strategic advice to ensure your systems evolve with your business.',
    gradientFrom: '#2a1e38',
    gradientTo: '#160f20',
  },
  {
    id: 'service-finance',
    title: 'Financial System Architecture',
    description: 'We design and implement systems that give you full control and real-time visibility over your financial performance.',
    gradientFrom: '#1e3830',
    gradientTo: '#0f201a',
  },
]

export const PROJECTS = [
  {
    id: 'project-getwashed-1',
    title: 'Getwashed x Latte: Integrated Loyalty-Based Multi-Business System',
    description: 'Unified separate data into a single integrated ecosystem to increase Customer Lifetime Value.',
    image: '/projectgetwashed1.jpeg',
    details: {
      concept: 'An Integrated Loyalty Based Multi-Business System that unifies GetWashed (Car Wash) and Latte (Coffee Shop).',
      leadDeveloper: 'Ferdinand Wilson',
      features: [
        {
          title: 'Unified Customer Identity',
          description: 'The system provides a single customer account that connects the Car Wash, Motor Wash, and Coffee Shop. Customers collect points within one unified ecosystem.',
        },
        {
          title: 'Transparent Loyalty Tracking',
          description: 'An interface that allows customers to see their point accumulation progress in real-time (e.g., a 1/10 progress bar) to trigger completion bias and repeat visits.',
        },
        {
          title: 'Operational Visibility & Data Intelligence',
          description: 'A centralized dashboard for management to monitor 30-day visit trends, customer visit frequency, and cross-business behavior.',
        },
        {
          title: 'Real-Time WhatsApp Engagement',
          description: 'When a customer earns points, the system automatically sends a WhatsApp message from the admin, including their Name, Points Earned, and Total Points.',
        }
      ],
      strategicImpact: 'Transformed two separate businesses into a single integrated ecosystem that maximizes Customer Lifetime Value.',
      gallery: [
        { id: 'g1', caption: 'Dashboard Monitoring', src: '/getwashed-dashboard.png' },
        { id: 'g2', caption: 'Customer Loyalty Interface', src: '/getwashed-loyalty.png' },
        { id: 'g3', caption: 'WA Notification Preview', src: '/getwashed-whatsapp.png' },
      ]
    }
  },
  {
    id: 'project-bizcore',
    title: 'BizCore — Integrated Business Management System',
    description: 'A unified platform that manages every aspect of your business operations — from customer acquisition and real-time transactions to automated financial reporting — built for F&B, retail, and growing SMEs.',
    gradientFrom: '#0047AB',
    gradientTo: '#002E6D',
    details: {
      concept: "The Operational Backbone for Scaling Your Business. BizCore is a comprehensive business management system designed to eliminate the operational chaos that holds growing businesses back. From managing customer leads and supplier purchase orders to processing POS transactions and generating digital invoices, BizCore delivers automated profit-loss reports and AI-powered business insights in one connected platform.",
      leadDeveloper: 'Ferdinand Wilson',
      features: [
        {
          title: 'Modern POS',
          description: 'Multi-channel order support.',
        },
        {
          title: 'Real-time Inventory',
          description: 'Automatic low-stock alerts.',
        },
        {
          title: 'CRM Pipeline',
          description: 'Tracking customer loyalty and lead conversion.',
        },
        {
          title: 'Analytics Dashboard',
          description: 'Actionable insights from daily sales data.',
        },
        {
          title: 'Automated Business Notifications via WhatsApp',
          description: "Every invoice transaction, automated daily report, and low-stock alert is sent automatically by the system directly to the owner's or admin's WhatsApp for full control anywhere.",
        }
      ],
      strategicImpact: 'Provides a single source of truth for all business operations, enabling data-driven decisions and scalable growth by automating key processes.',
      gallery: [
        { id: 'b1', caption: 'BizCore Dashboard & AI Insights', src: '/bizcore-dashboard.png' },
        { id: 'b2', caption: 'Inventory & Supplier Management UI', src: '/bizcore-inventory.png' },
        { id: 'b3', caption: 'Mobile POS & Digital Invoicing', src: '/bizcore-pos.png' },
      ]
    }
  },
  {
    id: 'project-bengkelpro',
    title: 'BengkelPro — Workshop Management System',
    description: 'A purpose-built system for automotive workshops that digitizes service queues, tracks repair progress in real time, manages spare part inventory, and automates billing — so workshop owners can focus on the work, not the paperwork.',
    gradientFrom: '#0047AB', /* Consistent blue gradient */
    gradientTo: '#002E6D',
    details: {
      concept: "Digitizing Automotive Operations for Maximum Efficiency. BengkelPro transforms how automotive workshops operate, replacing manual whiteboards and handwritten receipts with a clean, integrated digital system. Every vehicle gets a digital service card—trackable from the moment it arrives to the moment it leaves.",
      leadDeveloper: 'Ferdinand Wilson',
      features: [
        {
          title: 'Queue & Progress Tracking',
          description: 'Real-time status updates per mechanic.',
        },
        {
          title: 'Customer Vehicle History',
          description: 'Proactive service reminders based on history logs.',
        },
        {
          title: 'Inventory Management',
          description: 'Automatic critical stock alerts for spare parts.',
        },
        {
          title: 'Mechanic Dashboard',
          description: 'Performance metrics to help owners manage their team.',
        },
        {
          title: 'One-Tap WhatsApp Billing & Reminders',
          description: "The system automatically sends digital invoices to the customer's WhatsApp when service is complete, and also sends automatic service reminders based on the last repair history.",
        }
      ],
      strategicImpact: 'Reduces administrative overhead and increases workshop throughput by providing a clear, real-time view of all operations, from customer check-in to final billing.',
      gallery: [
        { id: 'bp1', caption: 'Digital Service Queue & Tracking UI', src: '/bengkel-queue.png' },
        { id: 'bp2', caption: 'Vehicle History & Customer Database', src: '/bengkel-history.png' },
        { id: 'bp3', caption: 'Spare Part Inventory Control', src: '/bengkel-inventory.png' },
      ]
    }
  },
]

export const TEAM_MEMBERS = [
  {
    id: 'member-rayyan',
    name: 'Rayyan',
    role: 'Founder',
    gradientFrom: '#5a6a70',
    gradientTo: '#3a4a50',
  },
  {
    id: 'member-nadir',
    name: 'Nadir',
    role: 'Founder',
    gradientFrom: '#6a7070',
    gradientTo: '#404848',
  },
  {
    id: 'member-defan',
    name: 'Defan',
    role: 'Finance & Marketing',
    gradientFrom: '#607068',
    gradientTo: '#3c4840',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#service' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Business Model', href: '#business-model' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]
