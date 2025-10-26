import React, { useState, useEffect, useRef } from 'react';
import { Github, Clock, Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// NOTE ON FIREBASE IMPORTS: 
// All Firebase imports are now handled dynamically inside useEffect (Step 1) 
// using CDN paths to resolve persistent module resolution errors (Vite/Build Issue).

// --- CONFIGURATION ---
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// Helper to get Firestore document reference (uses dynamic imports in the logic below)
let getFavoritesDocRef: any; 
let setDoc: any;
let onSnapshot: any;
let signInWithCustomToken: any;
let signInAnonymously: any;
let getAuth: any;
let getFirestore: any;
let initializeApp: any;
let doc: any;

// --- INTERFACES ---
interface Project {
  id: string; 
  title: string;
  description: string;
  duration: string;
  responsibilities: string[];
  tools: string[];
  image: string;
  category: string;
  github?: string;
  paperPublished?: string;
}

interface PopupState {
  project: Project;
  x: number;
  y: number;
}

// --- PROJECT DATA ---
const projects: Project[] = [
  {
    id: "p1",
    title: "E-commerce Site Automation (Flipkart)",
    description: "Developed a robust automation framework using Selenium and Python to validate critical business flows on the Flipkart e-commerce platform.",
    duration: "2 months",
    responsibilities: [
      "Designed and implemented an end-to-end automation framework (Page Object Model) using Selenium WebDriver, Python, and pytest.",
      "Automated key e-commerce scenarios including user registration, product search, filter application, cart addition, and checkout process.",
      "Integrated logging and reporting (HTML reports) into the automation suite for easy test result analysis.",
      "Managed and maintained test data using CSV/Excel files to support various test cases.",
      "Conducted daily regression runs to ensure stability and detect defects early in the continuous integration pipeline."
    ],
    tools: ["Selenium WebDriver", "Java", "Java Script", "Page Object Model", "HTML Reporting"],
    image: "/lovable-uploads/Flipkart.png",
    category: "Automation Project",
    github: "https://github.com/dyannadle/Flipkart-Automation"
  },
  {
    id: "p2",
    title: "Echoes of the Past (AI Detective Game)",
    description: "A unique procedural narrative detective game using an integrated AI interpreter (Gemini 2.0 Flash) to generate story conclusions from fragmented clues.",
    duration: "2 weeks",
    responsibilities: [
      "Designed and implemented the core game logic in JavaScript, including movement between rooms and object interaction.",
      "Developed a procedural generation algorithm to create unique house layouts and dynamically place clues for each session.",
      "Integrated the Google Gemini API to analyze collected clues and generate concise, plausible narrative conclusions.",
      "Created a clean, text-based interface and persistent game log using HTML5 and Tailwind CSS for easy user exploration.",
      "Focused on creating a dynamic mystery where multiple clue combinations lead to varied AI interpretations."
    ],
    tools: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)", "Google Gemini API"],
    image: "/lovable-uploads/Echo.png",
    category: "Game Development, AI/ML Project",
    github: "https://github.com/dyannadle/Games",
  },
  {
    id: "p3",
    title: "Front Accounting ERP Testing",
    description: "Comprehensive testing of professional web-based accounting system for ERP solutions using manual testing methodologies.",
    duration: "2 months",
    responsibilities: [
      "Developed detailed test plans, test cases, and test scripts based on ERP requirements and specifications.",
      "Executed end-to-end functional testing covering modules like accounting, inventory, and payroll to ensure system integrity.",
      "Coordinated and conducted User Acceptance Testing (UAT) with stakeholders to validate business workflows.",
      "Identified, logged, and tracked defects using bug tracking tools, ensuring timely resolution.",
      "Collaborated with developers and business analysts to clarify requirements and resolve issues."
    ],
    tools: ["Manual Testing", "Test Planning", "Microsoft Excel", "SRS Writing"],
    image: "/lovable-uploads/2b88fb76-449e-419a-aaa8-ec1ff1fb3dfd.png",
    category: "Testing Project",
    github: "https://github.com/dyannadle/Manual-Projects"
  },
  {
    id: "p4",
    title: "Food Recipe Generation from Images",
    description: "AI-powered computer vision model that analyzes food images and generates detailed recipes using deep learning techniques.",
    duration: "4 months",
    responsibilities: [
      "Designed and implemented an automated pipeline for generating recipes from food images using convolutional and recurrent neural networks.",
      "Performed extensive performance optimization and hyperparameter tuning to improve model accuracy and efficiency.",
      "Validated model predictions against labeled datasets to ensure recipe relevance and correctness.",
      "Collaborated on dataset collection and preprocessing to enhance training data quality.",
      "Documented model architecture and results for academic publication."
    ],
    tools: ["PyTorch", "Transformers", "NLP", "CNN", "LSTM"],
    image: "/lovable-uploads/71a0f015-985f-4444-81ed-1937b2cd2a1d.png",
    category: "AI/ML Project",
    paperPublished: "/AI-Powered Recipe Generator from Food Images Using Deep Learning Published Paper.pdf",
    github: "https://github.com/dyannadle/Recipe-Generator",
  },
  {
    id: "p5",
    title: "Maze Solver Game",
    description: "Classic maze generation and solving game implemented in Python using the Pygame library.",
    duration: "1 month",
    responsibilities: [
      "Designed and implemented maze generation algorithms, including Recursive Backtracker, for random maze creation.",
      "Developed and integrated pathfinding algorithms such as A* search and Breadth-First Search for automated maze solving.",
      "Created a responsive graphical user interface with Pygame to visualize maze generation and solver's path dynamically.",
      "Implemented user controls for manual maze navigation and game state management.",
      "Conducted extensive testing and debugging to ensure smooth gameplay and accurate pathfinding."
    ],
    tools: ["Python", "Pygame", "Algorithms", "Data Structures"],
    image: "/lovable-uploads/c400b9cf-269a-4945-8688-165aa7894f4d.png",
    category: "AI/ML Project, Game Development",
    github: "https://github.com/dyannadle/Maze-Solver",
  },
  {
    id: "p6",
    title: "Image Model Cloudflare Workers AI",
    description: "Streamlit application leveraging Cloudflare Workers AI to generate and manipulate images using AI models.",
    duration: "3 weeks",
    responsibilities: [
      "Developed AI-powered image generation features using Cloudflare Workers AI API integrated into Streamlit interface.",
      "Implemented REST API calls and handled asynchronous image processing requests efficiently.",
      "Managed environment configuration, dependencies, and deployment for seamless application performance.",
      "Optimized user experience through responsive UI design and error handling.",
      "Documented API usage and application setup for future maintenance."
    ],
    tools: ["Python", "Streamlit", "Cloudflare Workers AI", "Requests"],
    image: "/lovable-uploads/a29f2c35-e89b-4321-9794-594f01dcd11d.png",
    category: "AI/ML Project",
    github: "https://github.com/dyannadle/Image-Generator"
  },
  {
    id: "p7",
    title: "Attendance System",
    description: "A Python-based face recognition attendance system using OpenCV for automatic detection and recording, with data storage in Excel and reporting features.",
    duration: "6 weeks",
    responsibilities: [
      "Designed and implemented a face recognition attendance system using OpenCV to detect and record attendance automatically.",
      "Integrated data storage using Pandas and Excel formats for easy report generation and record maintenance.",
      "Developed a user-friendly GUI with Tkinter to facilitate manual overrides and attendance review.",
      "Tested system accuracy under various lighting and environmental conditions to ensure reliability.",
      "Generated detailed attendance reports and analytics to assist management."
    ],
    tools: ["Python", "OpenCV", "Tkinter", "Pandas", "NumPy"],
    image: "/lovable-uploads/1dc83084-6bdb-42b4-9125-bf6af70db315.png",
    category: "AI/ML Project",
    github: "https://github.com/dyannadle/Face-attendance"
  },
  {
    id: "p8",
    title: "Popular Web Series Page UI Testing",
    description: "Manual and functional UI testing conducted for a mobile app page displaying trending web series,focusing on navigation, interaction, and content rendering validation.",
    duration: "2 weeks",
    responsibilities: [
      "Verified correct rendering of web series posters, titles, and platform badges (e.g., Netflix, Hotstar Specials) across devices.",
      "Tested search functionality rigorously to ensure accurate filtering and retrieval of web series based on user input.",
      "Validated responsiveness and visual state changes of filter buttons (Trending, Newest, Comedy) under different scenarios.",
      "Checked functionality and feedback of 'like/favorite' and 'share' buttons for each web series card to enhance UX.",
      "Ensured smooth vertical scrolling and lazy loading of additional content without performance issues.",
      "Confirmed clear visibility, accessibility compliance and UI consistency across various screen sizes and resolutions."
    ],
    tools: ["Manual Testing", "Google Sheets", "Bug Tracking Software (JIRA)", "UI Specifications Document"],
    image: "UI Testing.png",
    category: "Testing Project",
    github: "https://github.com/dyannadle/Manual-Testing--UI-Testing"
  }
];

const filters = [
  'All',
  'Favorites',
  'Testing Project',
  'AI/ML Project',
  'Automation Project',
  'Game Development',
];


// --- APP COMPONENT (The Single File/Main Component) ---

export default function App() {
  
  const [db, setDb] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [popup, setPopup] = useState<PopupState | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // 1. FIREBASE INITIALIZATION AND AUTH (FIXED: Dynamic CDN Imports)
  useEffect(() => {
    const initializeFirebase = async () => {
        if (!firebaseConfig) {
            console.error("Firebase config is missing.");
            return;
        }

        try {
            // Dynamically import Firebase services via CDN URLs (last resort fix for module errors)
            const appModule = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js');
            const authModule = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js');
            const firestoreModule = await import('https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js');
            
            // Assign imported functions globally for the component
            initializeApp = appModule.initializeApp;
            getAuth = authModule.getAuth;
            signInWithCustomToken = authModule.signInWithCustomToken;
            signInAnonymously = authModule.signInAnonymously;
            getFirestore = firestoreModule.getFirestore;
            onSnapshot = firestoreModule.onSnapshot;
            setDoc = firestoreModule.setDoc;
            doc = firestoreModule.doc;

            // Define the helper using the imported 'doc' function
            getFavoritesDocRef = (db: any, userId: string) => doc(db, 'artifacts', appId, 'users', userId, 'favorites', 'userList');


            const app = initializeApp(firebaseConfig);
            const firestore = getFirestore(app);
            const authService = getAuth(app);
            setDb(firestore);

            const signIn = async () => {
                if (initialAuthToken) {
                    await signInWithCustomToken(authService, initialAuthToken);
                } else {
                    await signInAnonymously(authService);
                }
                setUserId(authService.currentUser?.uid || crypto.randomUUID());
            };

            signIn().catch(err => console.error("Firebase Sign-in Error:", err));
            
        } catch (e) {
            console.error("Firebase Initialization Error:", e);
        }
    };
    initializeFirebase();
  }, []);

  // 2. FIRESTORE: Load favorites list using onSnapshot
  useEffect(() => {
    if (db && userId && onSnapshot) { // Check if onSnapshot is loaded
      const docRef = getFavoritesDocRef(db, userId);
      
      const unsubscribe = onSnapshot(docRef, (docSnap: any) => {
        if (docSnap.exists() && Array.isArray(docSnap.data().list)) {
          setFavorites(docSnap.data().list);
        } else {
          setFavorites([]);
        }
      }, (error: any) => {
        console.error("Firestore Snapshot Error:", error);
      });

      return () => unsubscribe();
    }
  }, [db, userId]);

  // 3. FIRESTORE: Save/Update favorites list
  const toggleFavorite = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation(); 
    
    if (!db || !userId || !setDoc) { // Check if setDoc is loaded
      console.warn("Database not ready. Cannot save favorite.");
      return;
    }
    
    let newFavorites;
    setFavorites(prev => {
        newFavorites = prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id];
        return newFavorites;
    });

    try {
      const docRef = getFavoritesDocRef(db, userId);
      await setDoc(docRef, { list: newFavorites }, { merge: false });
    } catch (error) {
      console.error("Error updating favorites in Firestore:", error);
    }
  };

  // Filter projects based on filter, search, and favorites list
  const filteredProjects = projects.filter((p) => {
    const categoryMatch = filter === 'All'
      ? true
      : filter === 'Favorites'
        ? favorites.includes(p.id)
        : p.category.includes(filter);

    const searchMatch = p.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // Handle click for popup positioning
  const handlePopup = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    project: Project
  ) => {
    e.stopPropagation(); 
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPopup({
      project,
      x: rect.left + rect.width / 2,
      y: rect.top + window.scrollY + rect.height + 10,
    });
  };

  const closePopup = () => setPopup(null);
  
  // Close popup on click outside (document click)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const popupElement = document.querySelector('.floating-popup');
      if (popup && popupElement && !popupElement.contains(event.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [popup]);


  // --- JSX RENDER ---
  return (
    <section ref={sectionRef} className="relative py-16 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          My Portfolio Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Browse projects across development, AI, and testing. Favorites are saved using Firestore.
        </p>

        {/* Search + Filter UI */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search projects by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border dark:border-gray-700 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-inner w-full sm:max-w-xs focus:ring-2 focus:ring-blue-500"
          />

          <div className='flex flex-wrap justify-center gap-2'>
            {filters.map((cat) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-sm
                  ${filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/50"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, index) => {
            const isFavorited = favorites.includes(p.id);
            return (
              <motion.div
                key={p.id}
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={(e) => handlePopup(e, p)}
              >
                {/* Favorite Star Button */}
                <button 
                  onClick={(e) => toggleFavorite(e, p.id)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-900 p-1.5 rounded-full shadow-lg z-10 transition-transform hover:scale-110"
                  aria-label="Toggle favorite button"
                >
                  <Star
                    size={22}
                    className={
                      isFavorited
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    }
                  />
                </button>

                {/* Image */}
                <div className="overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                    onError={(e) => {
                       e.currentTarget.onerror = null;
                       e.currentTarget.src = `https://placehold.co/400x192/4A90E2/FFFFFF?text=${p.category.split(',')[0].trim()}`;
                    }}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold dark:text-white hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 mt-3">
                    <Clock size={14} className="mr-1 flex-shrink-0" /> {p.duration}
                  </div>

                  {/* Tools/Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-xs px-3 py-1 rounded-full font-medium shadow-inner"
                      >
                        {tool.split(':')[0].trim()}
                      </span>
                    ))}
                    {p.tools.length > 4 && (
                        <span className="text-gray-500 text-xs px-2 py-1">+{p.tools.length - 4} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Popup (Modal Implementation) */}
        <AnimatePresence>
          {popup && (
            <motion.div
              className="fixed z-[9999] floating-popup"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              style={{
                left: popup.x,
                top: popup.y,
                transform: "translate(-50%, 0)",
              }}
              onClick={closePopup}
            >
              <div 
                className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-2xl p-5 w-[28rem] max-w-[90vw] overflow-y-auto max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={closePopup} 
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 p-1"
                  aria-label="Close popup"
                >
                  <X size={20} />
                </button>

                <h3 className="text-xl font-bold mb-3 dark:text-white border-b pb-2">
                  {popup.project.title}
                </h3>
                
                {/* Image Section */}
                <div className="mb-4">
                    <img 
                      src={popup.project.image} 
                      alt={popup.project.title} 
                      className="rounded-xl max-h-48 object-cover w-full shadow-inner"
                      onError={(e) => {
                           e.currentTarget.onerror = null;
                           e.currentTarget.src = `https://placehold.co/400x192/4A90E2/FFFFFF?text=Full+View`;
                      }}
                    />
                </div>

                {/* Details Section */}
                <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">
                  {popup.project.description}
                </p>

                <h4 className="text-sm font-semibold dark:text-gray-100">Responsibilities:</h4>
                <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  {popup.project.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                
                {/* Links */}
                <div className="flex gap-3 mt-4 border-t pt-3">
                  {popup.project.github && (
                    <a
                      href={popup.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 text-sm hover:underline font-medium"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {popup.project.paperPublished && (
                     <a
                      href={popup.project.paperPublished}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-green-600 text-sm hover:underline font-medium"
                    >
                      View Paper
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
