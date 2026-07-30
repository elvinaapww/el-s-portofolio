export interface Project {
  slug: string;
  title: string;
  role: string;
  duration?: string;
  shortDescription: string;
  tags: string[];
  background: string;
  businessProblem: string;
  challenges: string[];
  objectives: string[];
  solution: string;
  responsibilities: string[];
  sdlcProcess: { phase: string; description: string }[];
  businessFlow: string[];
  requirementAnalysis: string;
  functionalRequirements: string[];
  nonFunctionalRequirements: string[];
  umlDiagrams: { name: string; description: string; image?: string }[];
  erdDescription: string;
  erdImage?: string;
  wireframeDescription: string;
  technologies: string[];
  implementation: string;
  results: string[];
  lessonsLearned: string[];
  gallery: { title: string; description: string; image?: string }[];
}

export const projects: Project[] = [
  {
    slug: "paperless-quality-assurance",
    title: "Paperless Quality Assurance System",
    role: "Full Stack Developer (Individual Project)",
    duration: "Feb 2025 - Apr 2025",
    shortDescription:
      "Web-based inspection specification system that digitizes product/material/part QA forms and auto-generates data-injected PDF reports, eliminating the use of physical paper.",
    tags: ["CodeIgniter 3", "PHP", "MySQL", "FPDF", "FPDI"],
    background:
      "The Quality Assurance department relied on printed inspection specification forms for products, materials, and parts. Every inspection required a physical form to be filled, filed, and manually archived, making records slow to retrieve and easy to lose.",
    businessProblem:
      "Heavy dependence on physical paperwork caused document loss, inconsistent form versions across inspectors, slow retrieval of historical inspection records, and unnecessary printing costs.",
    challenges: [
      "Replicating the exact layout of existing printed inspection forms in digital PDF output",
      "Injecting dynamic inspection data into pre-designed PDF templates using FPDI",
      "Supporting multiple inspection types (product, material, part) each with different fields",
      "Ensuring generated PDFs remained print-ready and visually consistent with the original paper forms",
    ],
    objectives: [
      "Digitize the inspection specification form creation process",
      "Generate standardized, print-ready PDF output directly from the system",
      "Provide fast, searchable access to historical inspection records",
      "Reduce paper usage and manual filing across the QA department",
    ],
    solution:
      "Built a CodeIgniter 3 web application, end-to-end as a solo developer, where QA staff fill inspection specification forms online. The system stores the data in MySQL, then uses FPDI to load the original PDF template and FPDF to inject the stored data directly onto the template, producing a ready-to-print PDF identical to the previous paper form.",
    responsibilities: [
      "Requirement Gathering",
      "System Design",
      "Database Design",
      "Frontend Development",
      "Backend Development",
      "PDF Template & Injection Logic (FPDF/FPDI)",
      "Testing",
      "Deployment",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Collected sample paper forms from QA staff and defined the scope for digitizing product, material, and part inspection specifications.",
      },
      {
        phase: "Analysis",
        description: "Broke down each printed form into structured data fields and identified which fields were shared vs. type-specific.",
      },
      {
        phase: "Design",
        description: "Designed the database schema and mapped each form field to its exact coordinate position on the PDF template for injection.",
      },
      {
        phase: "Implementation",
        description: "Developed the CodeIgniter 3 application, integrated FPDF/FPDI libraries, and built the form-to-PDF generation pipeline.",
      },
      {
        phase: "Testing",
        description: "Compared generated PDF output against original paper forms for layout accuracy and validated data integrity end-to-end.",
      },
      {
        phase: "Deployment",
        description: "Deployed internally and rolled out to QA staff, replacing the manual paper-based inspection process.",
      },
    ],
    businessFlow: [
      "QA staff selects the inspection type (product, material, or part)",
      "Staff fills in the inspection specification form through the web interface",
      "System validates input and stores the data in the database",
      "System loads the matching PDF template using FPDI",
      "FPDF injects the stored data onto the template at the correct positions",
      "A print-ready PDF is generated and archived digitally for future retrieval",
    ],
    requirementAnalysis:
      "Analyzed existing physical inspection forms across product, material, and part categories to extract required fields and layout constraints, then translated them into a digital data model and PDF injection mapping.",
    functionalRequirements: [
      "Dynamic inspection specification form based on inspection type",
      "Data validation before submission",
      "PDF generation with data injected into a fixed template layout",
      "Digital archive of all submitted inspection records",
      "Search and filter of historical inspection data",
      "Download and print of generated inspection PDF",
    ],
    nonFunctionalRequirements: [
      "PDF generation completes within a few seconds per request",
      "Generated PDF layout matches the original paper form precisely",
      "Data persisted reliably with no loss during PDF injection",
      "Usable on standard office desktop browsers",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "QA Staff and Admin actors covering form submission, PDF generation, and record retrieval.",
      },
      {
        name: "Activity Diagram",
        description: "Flow from form input to stored data and finally to injected PDF output.",
      },
      {
        name: "Sequence Diagram",
        description: "Interaction between the form controller, database, and the FPDF/FPDI PDF generation service.",
      },
      {
        name: "Class Diagram",
        description: "Entities for InspectionForm, InspectionType, and PdfTemplate and their relationships.",
      },
    ],
    erdDescription:
      "Designed a database with tables for inspection forms, inspection types, form fields, and PDF template mappings, allowing each inspection type to define its own set of fields while reusing the same generation logic.",
    wireframeDescription:
      "Sketched the inspection form input page and record archive listing before development, focusing on matching the field order of the original paper form to reduce user confusion.",
    technologies: ["PHP", "CodeIgniter 3", "MySQL", "FPDF", "FPDI", "JavaScript", "Bootstrap"],
    implementation:
      "Built with CodeIgniter 3's MVC structure. The core feature is the PDF pipeline: FPDI opens the existing PDF template as a base page, and FPDF writes the submitted form data onto that page at pre-mapped X/Y coordinates, producing a downloadable inspection report.",
    results: [
      "Eliminated physical paper forms for product, material, and part inspections",
      "Generated inspection PDFs directly from stored data with consistent layout",
      "Made historical inspection records searchable instead of filed on paper",
      "Reduced form processing time compared to manual filling and filing",
    ],
    lessonsLearned: [
      "Working with FPDI/FPDF requires precise coordinate mapping — small layout mismatches are easy to introduce",
      "Digitizing a paper-based process works best when the digital form mirrors the original as closely as possible",
      "Solo ownership of a project end-to-end improves speed but requires disciplined self-testing before rollout",
    ],
    gallery: [
      { title: "Inspection Form", description: "Digital form for product/material/part specification input" },
      { title: "Generated PDF Output", description: "Print-ready inspection report with injected data" },
      { title: "Record Archive", description: "Searchable list of digitally stored inspection records" },
    ],
  },
  {
    slug: "supplier-performance-report",
    title: "Supplier Performance Report System",
    role: "Full Stack Developer (Individual Project)",
    duration: "Jun 2025 - Oct 2025",
    shortDescription:
      "Enterprise system that automatically scores supplier performance using predefined formulas and emails the resulting report with attachments directly to each supplier.",
    tags: ["PHP", "CodeIgniter 3", "MySQL", "Email Automation"],
    background:
      "Procurement needed a way to evaluate supplier performance consistently instead of relying on scattered spreadsheets and manually calculated scores that were slow to compile and distribute.",
    businessProblem:
      "The procurement team lacked a standardized, automated way to calculate supplier scores and distribute performance reports, leading to delayed feedback to suppliers and inconsistent evaluation criteria.",
    challenges: [
      "Translating multiple scoring criteria into accurate calculation formulas",
      "Generating a distinct report file per supplier based on their own data",
      "Sending automated emails with dynamically generated attachments at scale",
      "Ensuring score calculations stayed consistent as evaluation criteria evolved",
    ],
    objectives: [
      "Automate supplier score calculation based on defined criteria",
      "Generate a performance report output per supplier",
      "Automatically email each supplier their own performance report as an attachment",
      "Give the procurement team a single system to manage the full evaluation cycle",
    ],
    solution:
      "Developed a CodeIgniter 3 system, solo end-to-end, that calculates each supplier's score using configured formulas, generates a report file per supplier, and sends it out via an automated email function with the report attached.",
    responsibilities: [
      "Requirement Gathering",
      "Scoring Formula Design",
      "Database Design",
      "Frontend Development",
      "Backend Development",
      "Email & Attachment Automation",
      "Testing",
      "Deployment",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Gathered supplier evaluation criteria and scoring logic used by the procurement team.",
      },
      {
        phase: "Analysis",
        description: "Documented how each criterion should be weighted and combined into a final supplier score.",
      },
      {
        phase: "Design",
        description: "Designed the database schema and report layout, and planned the email-with-attachment flow.",
      },
      {
        phase: "Implementation",
        description: "Built the CodeIgniter 3 application, scoring engine, report generator, and email sending function.",
      },
      {
        phase: "Testing",
        description: "Validated score calculations against manual spreadsheet results and tested email delivery with attachments.",
      },
      {
        phase: "Deployment",
        description: "Deployed for the procurement team's periodic supplier evaluation cycle.",
      },
    ],
    businessFlow: [
      "Procurement team inputs supplier delivery and quality data",
      "System applies scoring formulas per criterion to calculate each supplier's score",
      "System generates a performance report for each supplier",
      "System sends an automated email with the report attached to each supplier",
      "Procurement reviews aggregated results to identify underperforming suppliers",
    ],
    requirementAnalysis:
      "Gathered scoring criteria and thresholds directly from the procurement team and mapped them into formulas that could run automatically against stored supplier data.",
    functionalRequirements: [
      "Supplier master data management",
      "Configurable scoring criteria and formulas",
      "Automated score calculation per supplier",
      "Report generation per supplier",
      "Automated email delivery with report attachment",
      "Dashboard summarizing supplier scores",
    ],
    nonFunctionalRequirements: [
      "Score calculation completes without manual intervention",
      "Email delivery succeeds reliably with attachments intact",
      "Dashboard loads within a few seconds",
      "Supports periodic (e.g. monthly) evaluation cycles",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "Defined actors: Admin, Procurement Staff, and Manager with 15 use cases.",
        image: "/image/porto-usecase-spr.png",
      },
      {
        name: "Activity Diagram",
        description: "Mapped supplier evaluation workflow from data input to email report delivery.",
        image: "/image/activity-portofolio-spr.png",
      },
      {
        name: "Sequence Diagram",
        description: "Illustrated score calculation and report-email process between UI, controller, and database layers.",
        image: "/image/sequence-portofolio-spr.png",
      },
      {
        name: "Class Diagram",
        description: "Defined entity relationships for Supplier, Criteria, Score, and Report classes.",
        image: "/image/class-portofolio-spr.png",
      },
    ],
    erdDescription:
      "Designed a normalized database with tables for suppliers, scoring criteria, scores, and report logs, so historical scores and sent reports remain traceable over time.",
    erdImage: "/image/erd-portofolio-spr.png",
    wireframeDescription:
      "Created wireframes for the dashboard, data entry forms, and report preview before development began.",
    technologies: ["PHP", "CodeIgniter 3", "JavaScript", "MySQL", "Bootstrap", "Chart.js", "PHPMailer"],
    implementation:
      "Built on CodeIgniter 3's MVC architecture. Implemented a formula-based scoring engine, PDF report generation per supplier, and an email module that attaches the generated report and sends it automatically to each supplier's registered email.",
    results: [
      "Automated a scoring process that was previously done manually per supplier",
      "Cut report distribution time from manual sending to a single automated batch run",
      "Standardized supplier evaluation criteria across the procurement cycle",
      "Improved supplier visibility into their own performance via direct email reports",
    ],
    lessonsLearned: [
      "Formula-based scoring must be validated against real historical data to catch edge cases early",
      "Automated email delivery needs proper error handling for failed sends and invalid addresses",
      "Clear score breakdowns in reports reduce follow-up questions from suppliers",
    ],
    gallery: [
      {
        title: "Dashboard Overview",
        description: "KPI dashboard with supplier performance scores",
        image: "/image/dashboard-spr.png",
      },
      {
        title: "Data Entry Form",
        description: "Supplier evaluation data input interface",
        image: "/image/data-master-spr.png",
      },
      {
        title: "Report Generation",
        description: "Automated PDF report emailed as an attachment to suppliers",
        image: "/image/report-spr.png",
      },
    ],
  },
  {
    slug: "vehicle-spare-parts-inventory-system",
    title: "Vehicle Spare Parts Inventory System — Bahari Motor Service",
    role: "Business Analyst (Team Project)",
    duration: "Oct 2024 - Dec 2024",
    shortDescription:
      "Laravel-based inventory system for Bahari Motor Service to manage vehicle spare parts, track stock in/out, and support purchasing decisions through trend analysis.",
    tags: ["Laravel", "MySQL", "Business Analysis", "Inventory"],
    background:
      "Bahari Motor Service managed spare parts inventory manually, causing frequent stock discrepancies and delays when critical parts were unavailable during vehicle servicing.",
    businessProblem:
      "Lack of real-time inventory visibility resulted in overstocking of slow-moving items, stockouts of critical parts, and no data-driven basis for deciding what and how much to purchase.",
    challenges: [
      "Understanding the existing manual stock recording process across staff",
      "Translating business needs into clear requirements for the development team",
      "Defining trend analysis logic to support purchasing decisions",
      "Coordinating requirements between business stakeholders and the technical team",
    ],
    objectives: [
      "Provide real-time inventory visibility for spare parts",
      "Record stock in/out transactions accurately",
      "Analyze stock trends to support purchasing decisions",
      "Give management a clear basis for deciding part types and quantities to buy",
    ],
    solution:
      "As part of a team, worked as Business Analyst to gather requirements and design the business process for a Laravel-based inventory system with stock movement tracking, trend analysis, and purchasing recommendations.",
    responsibilities: [
      "Requirement Gathering",
      "Business Process Analysis",
      "Workflow Design",
      "Documentation (BRD/User Stories)",
      "UAT Coordination",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Defined project scope with Bahari Motor Service stakeholders as part of the team's planning phase.",
      },
      {
        phase: "Analysis",
        description: "Interviewed staff and mapped the existing manual stock recording process to identify gaps.",
      },
      {
        phase: "Design",
        description: "Collaborated with the development team on database structure and workflow design based on gathered requirements.",
      },
      {
        phase: "Implementation",
        description: "Supported the team during development by clarifying business rules for stock and trend logic.",
      },
      {
        phase: "Testing",
        description: "Coordinated user acceptance testing with Bahari Motor Service staff.",
      },
      {
        phase: "Deployment",
        description: "Assisted with rollout and user training documentation for warehouse staff.",
      },
    ],
    businessFlow: [
      "Spare parts received and logged into the system",
      "Stock levels updated on part issuance for vehicle servicing",
      "System records every stock in/out transaction with a timestamp",
      "System analyzes usage trends per part over time",
      "Management uses trend data to decide which parts and quantities to purchase",
    ],
    requirementAnalysis:
      "Conducted interviews with warehouse and service staff at Bahari Motor Service, documented the existing manual process, and defined functional requirements for the Laravel-based inventory system as the team's Business Analyst.",
    functionalRequirements: [
      "Spare parts master data management",
      "Stock in/out transaction recording",
      "Stock level monitoring per part",
      "Usage trend analysis per part over a given period",
      "Purchase recommendation based on trend data",
      "User role management for staff and admin",
    ],
    nonFunctionalRequirements: [
      "Accurate stock calculation with no discrepancies from recorded transactions",
      "Responsive interface usable by non-technical warehouse staff",
      "Reliable data storage integrated with MySQL",
      "Reasonable response time for stock and trend queries",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "Warehouse Staff, Admin, and Manager actors with inventory and reporting operations.",
      },
      {
        name: "Activity Diagram",
        description: "Stock receiving, issuance, and trend review workflow mapping.",
      },
      {
        name: "ERD",
        description: "Relational schema covering parts, categories, stock transactions, and users.",
      },
    ],
    erdDescription:
      "Database designed with the development team to store spare parts, categories, stock transactions, and trend summaries, enabling accurate stock tracking and purchase analysis.",
    wireframeDescription:
      "Contributed to wireframes for the stock dashboard, transaction forms, and trend report screens based on gathered business requirements.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    implementation:
      "The development team built the system in Laravel with MySQL for data storage. As Business Analyst, defined the business rules for stock calculations and trend analysis that the team implemented.",
    results: [
      "Gave Bahari Motor Service real-time visibility into spare parts stock",
      "Reduced instances of critical parts being unavailable during service",
      "Provided trend-based data to guide purchasing decisions",
      "Replaced manual, error-prone stock recording with a digital system",
    ],
    lessonsLearned: [
      "Clear requirement documentation prevents miscommunication between business and development teams",
      "Field-level understanding of warehouse operations is essential before defining trend analysis logic",
      "Being the analyst on a team project means translating business needs precisely so developers build the right thing",
    ],
    gallery: [
      { title: "Inventory Dashboard", description: "Real-time spare parts stock overview" },
      { title: "Transaction Form", description: "Stock in/out recording interface" },
      { title: "Trend Report", description: "Usage trend view supporting purchase decisions" },
    ],
  },
  {
    slug: "purchase-invoice-system",
    title: "Motor Purchase Invoice System",
    role: "Full Stack Developer (Individual Project)",
    duration: "Mar 2024 - Apr 2024",
    shortDescription:
      "A dynamic PHP and MySQL web system with full CRUD that outputs a purchase invoice printing transaction records exactly as stored in the database.",
    tags: ["PHP", "MySQL", "Web Development", "CRUD", "Invoice System"],
    background:
      "As part of an academic project, a web-based information system was required to demonstrate dynamic website design principles — connecting a PHP frontend with a MySQL database to manage and display transactional data.",
    businessProblem:
      "Manual purchase record management lacked a centralized digital system. Transaction data needed to be stored in a database and presented as printable purchase invoices that accurately reflect stored records.",
    challenges: [
      "Designing a relational database schema for purchase transactions",
      "Integrating PHP with MySQL for dynamic data retrieval",
      "Implementing full CRUD for transaction records",
      "Generating printable invoice output that matches stored data exactly",
    ],
    objectives: [
      "Build a dynamic web-based information system using PHP",
      "Integrate the system with a MySQL database",
      "Support full CRUD on purchase transaction records",
      "Generate printable purchase invoices from database data",
    ],
    solution:
      "Built solo, this dynamic PHP and MySQL system captures purchase transaction data, supports create, read, update, and delete operations, and outputs printable purchase invoices that reflect the stored records.",
    responsibilities: [
      "System Design",
      "Database Design",
      "Frontend Development",
      "Backend Development",
      "Testing",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Defined system scope and requirements for the purchase invoice system.",
      },
      {
        phase: "Analysis",
        description: "Identified data entities and transaction flow for purchase records.",
      },
      {
        phase: "Design",
        description: "Designed database schema and web page layouts for data input and invoice output.",
      },
      {
        phase: "Implementation",
        description: "Built PHP pages with MySQL queries for CRUD operations and invoice generation.",
      },
      {
        phase: "Testing",
        description: "Validated data storage, retrieval, and invoice print output accuracy.",
      },
    ],
    businessFlow: [
      "User inputs purchase transaction data through a web form",
      "System validates and stores data into the MySQL database",
      "User can view, update, or delete existing transaction records",
      "System generates a purchase invoice from stored database records",
      "Invoice can be printed with accurate transaction details",
    ],
    requirementAnalysis:
      "Analyzed requirements for a web-based information system capable of storing purchase transactions with full CRUD and producing invoice output. Documented functional needs for data input, storage, editing, retrieval, and printable report generation.",
    functionalRequirements: [
      "Purchase transaction data input form",
      "Create, read, update, and delete transaction records",
      "Store transaction records in the MySQL database",
      "Retrieve and display transaction history",
      "Generate purchase invoice from database records",
      "Print transaction records as invoice output",
    ],
    nonFunctionalRequirements: [
      "Responsive web interface for desktop browsers",
      "Database queries execute within acceptable response time",
      "Printed invoice matches stored database records accurately",
      "Secure database connection using proper credentials",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "User interactions for CRUD operations and generating invoices.",
      },
      {
        name: "Activity Diagram",
        description: "Purchase transaction flow from data entry to invoice printing.",
      },
      {
        name: "ERD",
        description: "Relational schema for purchase transactions and related entities.",
      },
    ],
    erdDescription:
      "Designed a relational database schema with tables for transactions, items, and customer data. Established primary and foreign key relationships to ensure data integrity across purchase records.",
    wireframeDescription:
      "Created wireframes for the transaction input form, transaction list page, and printable invoice layout prior to development.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    implementation:
      "Built dynamic PHP pages connected to MySQL via SQL queries. Implemented full CRUD for transaction input, and an invoice template that renders purchase data from the database for printing.",
    results: [
      "Successfully built a functional web-based information system with full CRUD",
      "Purchase transactions stored, edited, and retrieved accurately from MySQL",
      "Invoice output correctly reflects database records",
      "Demonstrated dynamic website design with database integration",
    ],
    lessonsLearned: [
      "Proper database schema design is essential before building dynamic web pages",
      "Separating data logic from presentation simplifies invoice generation",
      "Testing print output against database records ensures data accuracy",
    ],
    gallery: [
      { title: "Transaction Form", description: "Purchase data input interface" },
      { title: "Invoice Output", description: "Printable purchase invoice from database" },
      { title: "Transaction List", description: "Stored records retrieved from MySQL with CRUD actions" },
    ],
  },
  {
    slug: "ecommerce-electronics-website",
    title: "Electronics E-commerce Website",
    role: "Frontend Developer (Individual Project)",
    shortDescription:
      "Frontend-only e-commerce website for an electronics store, built with PHP and Bootstrap to present product catalog and store pages.",
    tags: ["PHP", "Bootstrap", "HTML", "CSS", "Frontend"],
    background:
      "Built as a frontend-focused practice project to design and implement the customer-facing pages of an electronics e-commerce store.",
    businessProblem:
      "The project focused on presenting an e-commerce storefront experience — product listings, categories, and product detail pages — without a connected backend or live transactions.",
    challenges: [
      "Structuring reusable PHP includes for consistent layout across pages",
      "Building a responsive product catalog grid with Bootstrap",
      "Designing product detail and cart UI without backend logic",
      "Keeping markup organized across multiple store pages",
    ],
    objectives: [
      "Design and build the storefront UI for an electronics e-commerce site",
      "Implement responsive product listing and detail pages",
      "Use PHP includes to keep layout components consistent",
      "Style the interface with Bootstrap components",
    ],
    solution:
      "Developed the frontend of an electronics e-commerce website using PHP for page structure/includes and Bootstrap for responsive styling, covering home, category, and product pages.",
    responsibilities: [
      "UI Design",
      "Frontend Development",
      "Responsive Layout",
      "Component Styling",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Defined the set of storefront pages needed: home, category listing, and product detail.",
      },
      {
        phase: "Design",
        description: "Planned page layout and component structure using Bootstrap's grid system.",
      },
      {
        phase: "Implementation",
        description: "Built PHP-included page templates and styled components with Bootstrap.",
      },
      {
        phase: "Testing",
        description: "Checked layout responsiveness across desktop and mobile breakpoints.",
      },
    ],
    businessFlow: [
      "Visitor lands on the home page and browses featured products",
      "Visitor navigates to a category page to view a filtered product list",
      "Visitor opens a product detail page for more information",
      "Visitor can view product options before proceeding to a mock checkout UI",
    ],
    requirementAnalysis:
      "Focused on frontend requirements only: consistent page layout, responsive product grids, and clear product detail presentation using PHP includes and Bootstrap components.",
    functionalRequirements: [
      "Home page with featured product sections",
      "Category page with product grid listing",
      "Product detail page layout",
      "Reusable header/footer via PHP includes",
      "Responsive navigation menu",
    ],
    nonFunctionalRequirements: [
      "Responsive layout across mobile, tablet, and desktop",
      "Consistent styling across all pages",
      "Fast page load with static/mock content",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "Visitor actor browsing home, category, and product detail pages.",
      },
    ],
    erdDescription:
      "No backend database was implemented — this project focused solely on frontend structure and presentation using PHP includes.",
    wireframeDescription:
      "Sketched simple layouts for the home, category, and product detail pages before implementing them with Bootstrap components.",
    technologies: ["PHP", "Bootstrap", "HTML", "CSS", "JavaScript"],
    implementation:
      "Used PHP includes to share header, footer, and navigation across pages, and Bootstrap's grid and card components to build a responsive product catalog and detail layout.",
    results: [
      "Delivered a responsive e-commerce storefront UI across key pages",
      "Reused PHP includes to keep layout consistent and maintainable",
      "Practiced structuring a multi-page frontend project with Bootstrap",
    ],
    lessonsLearned: [
      "PHP includes are a simple, effective way to avoid duplicating layout markup",
      "Planning the component structure early makes styling with Bootstrap much faster",
    ],
    gallery: [
      { title: "Home Page", description: "Storefront landing page with featured products" },
      { title: "Category Page", description: "Responsive product listing grid" },
      { title: "Product Detail", description: "Individual product information layout" },
    ],
  },
  {
    slug: "news-portal-website",
    title: "News Portal Website",
    role: "Full Stack Developer (Team Project)",
    shortDescription:
      "Laravel and MySQL news portal where visitors can read articles and manage news content through full CRUD.",
    tags: ["Laravel", "MySQL", "PHP", "CRUD"],
    background:
      "Built as a team project to create a news portal where content could be published, read, and managed through a Laravel-based CMS-style workflow.",
    businessProblem:
      "The team needed a working example of a content-driven website where news articles could be created, edited, and displayed dynamically instead of using static pages.",
    challenges: [
      "Structuring Laravel routes, controllers, and views for a content-heavy site",
      "Implementing full CRUD for news articles with proper validation",
      "Coordinating frontend and backend work within the team",
      "Designing a clean reading experience for published articles",
    ],
    objectives: [
      "Allow visitors to browse and read published news articles",
      "Allow authorized users to create, edit, and delete news articles",
      "Structure the site with Laravel's MVC conventions",
      "Deliver both frontend and backend as part of a team project",
    ],
    solution:
      "As part of a team, built a Laravel news portal handling both the frontend reading experience and backend CRUD for managing articles, using MySQL for storage.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "CRUD Implementation",
      "Database Integration",
      "Testing",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Defined the scope with the team: article reading pages and an admin CRUD area.",
      },
      {
        phase: "Design",
        description: "Planned the database schema for articles and the page layout for reading and managing news.",
      },
      {
        phase: "Implementation",
        description: "Built Laravel routes, controllers, and views for both reading and CRUD management, contributing to frontend and backend.",
      },
      {
        phase: "Testing",
        description: "Tested CRUD operations and verified articles displayed correctly on the public-facing pages.",
      },
    ],
    businessFlow: [
      "Admin creates a news article through the CRUD management page",
      "Article is stored in the MySQL database",
      "Visitor browses the news portal and opens an article to read",
      "Admin can update or delete existing articles as needed",
    ],
    requirementAnalysis:
      "Worked with the team to define the news portal's core requirements: public article reading and an authenticated CRUD interface for managing content.",
    functionalRequirements: [
      "Public news listing and article detail pages",
      "Create, read, update, and delete news articles",
      "Article categorization",
      "Basic authentication for the content management area",
    ],
    nonFunctionalRequirements: [
      "Responsive layout for article browsing",
      "Reliable data storage in MySQL",
      "Reasonable page load time for article listings",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "Visitor and Admin actors covering reading and CRUD operations.",
      },
      {
        name: "ERD",
        description: "Schema for articles, categories, and users.",
      },
    ],
    erdDescription:
      "Designed with the team a database covering articles, categories, and users to support both public reading and CRUD management.",
    wireframeDescription:
      "Sketched the article listing, article detail, and CRUD management pages with the team before implementation.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    implementation:
      "Built using Laravel's MVC structure, handling both the public-facing article pages (frontend) and the CRUD management logic (backend) as part of the team's development work.",
    results: [
      "Delivered a working news portal with public reading and full CRUD management",
      "Contributed to both frontend and backend as part of the team",
      "Practiced structuring a content-driven site using Laravel conventions",
    ],
    lessonsLearned: [
      "Working across both frontend and backend clarified how Laravel's MVC layers connect end-to-end",
      "Team coordination on shared database schema prevents conflicting assumptions during development",
    ],
    gallery: [
      { title: "News Listing", description: "Public-facing article listing page" },
      { title: "Article Detail", description: "Individual news article reading page" },
      { title: "CRUD Management", description: "Admin interface for managing news articles" },
    ],
  },
  {
    slug: "bulog-rice-distribution-system",
    title: "Bulog Rice Distribution & Monitoring System",
    role: "Frontend Developer & API Integration (Team Project)",
    shortDescription:
      "System built to automate rice distribution across supply points and monitor stock data for Bulog, reducing manual distribution errors.",
    tags: ["Go", "REST API", "Automation", "Stock Monitoring"],
    background:
      "Rice distribution across supply points was frequently miscalculated when handled manually, and stock data was difficult to monitor in real time, creating the need for an automated, API-driven system.",
    businessProblem:
      "Manual distribution planning often led to incorrect rice allocation per supply point, and there was no centralized way to monitor stock levels, making it hard to catch discrepancies early.",
    challenges: [
      "Working with a complex system with multiple supply points and distribution rules",
      "Integrating the frontend with Go-based REST APIs for real-time data",
      "Presenting distribution and stock data clearly to reduce human error",
      "Coordinating frontend work with the backend/API team",
    ],
    objectives: [
      "Automate the calculation and allocation of rice distribution per supply point",
      "Provide real-time monitoring of rice stock data",
      "Reduce manual errors in distribution planning",
      "Deliver a frontend that consumes the team's Go REST APIs reliably",
    ],
    solution:
      "As part of a team, contributed the frontend and API integration layer that consumes Go-based REST APIs to display and manage rice distribution allocation and stock monitoring data.",
    responsibilities: [
      "Frontend Development",
      "REST API Integration",
      "UI for Distribution & Stock Monitoring",
      "Testing",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Aligned with the team on the automation goal: reducing distribution errors and improving stock visibility.",
      },
      {
        phase: "Design",
        description: "Planned frontend screens for distribution allocation and stock monitoring based on the team's API contracts.",
      },
      {
        phase: "Implementation",
        description: "Built the frontend and integrated it with Go REST APIs for distribution and stock data.",
      },
      {
        phase: "Testing",
        description: "Tested API integration against real distribution scenarios and validated stock figures displayed correctly.",
      },
    ],
    businessFlow: [
      "Backend calculates rice supply allocation per supply point via Go services",
      "Frontend requests distribution and stock data through REST APIs",
      "System displays allocation results and current stock levels",
      "Staff monitor stock data to catch discrepancies before they cause distribution errors",
    ],
    requirementAnalysis:
      "Worked with the team to understand the distribution logic and stock monitoring needs, focusing on what data the frontend needed to fetch and display via the Go REST APIs.",
    functionalRequirements: [
      "Rice distribution allocation view per supply point",
      "Real-time stock monitoring dashboard",
      "API integration for fetching distribution and stock data",
      "Discrepancy/alert indicators for stock irregularities",
    ],
    nonFunctionalRequirements: [
      "Frontend reflects up-to-date data from the REST API",
      "Usable dashboard for monitoring multiple supply points at once",
      "Stable integration against the Go backend services",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "Staff actor monitoring distribution allocation and stock data via the dashboard.",
      },
      {
        name: "Sequence Diagram",
        description: "Frontend-to-REST API interaction for fetching distribution and stock data.",
      },
    ],
    erdDescription:
      "Database and schema design were owned by the backend/API team; frontend work focused on consuming the exposed REST endpoints for supply points, distribution, and stock records.",
    wireframeDescription:
      "Designed dashboard layouts for distribution allocation and stock monitoring in coordination with the team's API structure.",
    technologies: ["Go", "REST API", "JavaScript", "HTML", "CSS"],
    implementation:
      "Built the frontend to consume Go-based REST APIs, rendering distribution allocation per supply point and a stock monitoring dashboard, working closely with the team on API integration.",
    results: [
      "Contributed to reducing manual errors in rice distribution allocation",
      "Delivered a stock monitoring view integrated with live REST API data",
      "Supported the team's automation goal for a complex distribution system",
    ],
    lessonsLearned: [
      "Integrating a frontend with a Go REST API requires close alignment on API contracts with the backend team",
      "Automating a previously manual, error-prone process significantly changes how staff trust and use the system",
    ],
    gallery: [
      { title: "Distribution Dashboard", description: "Allocation view per rice supply point" },
      { title: "Stock Monitoring", description: "Real-time stock data view via REST API" },
    ],
  },
  {
    slug: "jagadiri-website-revamp",
    title: "Jagadiri Website Revamp",
    role: "Frontend Developer (Individual Project)",
    shortDescription:
      "Frontend revamp of the Jagadiri website using Next.js, rebuilding and improving the UI while integrating with existing backend APIs.",
    tags: ["Next.js", "REST API", "UI/UX Revamp"],
    background:
      "The existing Jagadiri website needed a frontend refresh to modernize its interface and improve usability, without changing the underlying backend services.",
    businessProblem:
      "The previous interface felt outdated and needed a cleaner, more modern presentation while continuing to work with the existing backend APIs.",
    challenges: [
      "Rebuilding the interface in Next.js while preserving existing functionality",
      "Integrating with existing backend APIs without backend-side changes",
      "Matching new UI components to existing data structures returned by the API",
      "Maintaining feature parity with the previous version during the revamp",
    ],
    objectives: [
      "Modernize the Jagadiri website's frontend UI/UX",
      "Rebuild the interface using Next.js",
      "Integrate seamlessly with existing backend APIs",
      "Preserve existing functionality while improving the visual experience",
    ],
    solution:
      "Solely handled the frontend revamp, rebuilding the interface in Next.js and connecting it to the existing backend by consuming its REST APIs, focused entirely on the presentation layer.",
    responsibilities: [
      "UI/UX Revamp",
      "Frontend Development",
      "API Integration",
      "Testing",
    ],
    sdlcProcess: [
      {
        phase: "Planning",
        description: "Reviewed the existing website to identify which pages and components needed revamping.",
      },
      {
        phase: "Design",
        description: "Designed the updated UI/UX for key pages while keeping existing API data structures in mind.",
      },
      {
        phase: "Implementation",
        description: "Rebuilt the frontend in Next.js and connected it to existing backend endpoints.",
      },
      {
        phase: "Testing",
        description: "Verified the revamped pages functioned correctly against live API responses.",
      },
    ],
    businessFlow: [
      "User visits the revamped Jagadiri website",
      "Next.js frontend requests data from the existing backend APIs",
      "API responses are rendered through the new UI components",
      "User interacts with a modernized interface without any backend changes",
    ],
    requirementAnalysis:
      "Focused on frontend requirements: which pages needed a visual and interaction refresh, and how the new components should map to the existing API response structures.",
    functionalRequirements: [
      "Revamped page layouts consuming existing API endpoints",
      "Updated navigation and core UI components",
      "Consistent design system across revamped pages",
      "Preserved existing feature functionality post-revamp",
    ],
    nonFunctionalRequirements: [
      "Improved perceived performance with Next.js rendering",
      "Responsive design across devices",
      "No disruption to existing backend services",
    ],
    umlDiagrams: [
      {
        name: "Use Case Diagram",
        description: "User actor interacting with the revamped frontend pages backed by existing APIs.",
      },
    ],
    erdDescription:
      "No database changes were made — the revamp worked entirely against the existing backend's API layer without modifying its data model.",
    wireframeDescription:
      "Designed updated wireframes for the key pages being revamped, based on the existing site structure and available API data.",
    technologies: ["Next.js", "React", "TypeScript", "REST API", "Tailwind CSS"],
    implementation:
      "Rebuilt the frontend with Next.js, fetching data from the existing backend's REST APIs and rendering it through new, modernized UI components.",
    results: [
      "Delivered a modernized frontend for the Jagadiri website",
      "Maintained full functionality while integrating with the existing backend",
      "Improved the overall visual and interaction experience of the site",
    ],
    lessonsLearned: [
      "A frontend-only revamp requires carefully reading existing API responses to avoid breaking functionality",
      "Next.js made it straightforward to modernize the UI while keeping the integration layer thin",
    ],
    gallery: [
      { title: "Revamped Home Page", description: "Updated landing page UI" },
      { title: "Updated Components", description: "Modernized UI components across key pages" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
