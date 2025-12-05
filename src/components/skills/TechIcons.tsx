import React from 'react';

// Use a union type for the icon component properties
type IconProps = { className?: string };

// Helper to render an image icon
const ImageIcon = (src: string, alt: string) => ({ className }: IconProps) => (
    <img src={src} alt={alt} className={className} loading="lazy" />
);

// Helper to render a custom SVG (for abstract concepts)
const SvgIcon = (children: React.ReactNode, viewBox = "0 0 24 24", fill = "none", stroke = "currentColor", strokeWidth = "2") => ({ className }: IconProps) => (
    <svg viewBox={viewBox} className={className} fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
        {children}
    </svg>
);

export const TechIcons: Record<string, React.FC<IconProps>> = {
    // --- Brand Logos (DevIcon / CDN) ---
    // Using 'original' versions for full color logos

    // Languages
    "SQL": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", "SQL Server"), // Official MS SQL Logo
    "MySQL": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", "MySQL"),
    "No SQL": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", "NoSQL"), // MongoDB as representative
    "Basic JAVA": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", "Java"),
    "Basic Python": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "Python"),

    // Tools & Frameworks
    "JIRA": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", "JIRA"),
    "Bugzilla": SvgIcon(<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />, "0 0 24 24", "#D72B26", "none", "0"),
    "Selenium": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg", "Selenium"),
    "Maven": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", "Maven"),
    "Postman": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", "Postman"),
    "Cypress": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg", "Cypress"),
    "Git": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "Git"),
    "Version Control (Git)": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "Git"),

    // OS & Platforms
    "Linux": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", "Linux"),
    "Windows": ImageIcon("https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg", "Windows"),
    "Microsoft Office": ImageIcon("https://static.cdnlogo.com/logos/o/66/office-365.svg", "Microsoft Office"), // Reliable CDN for Office logo

    // AI & ML
    "ML Basics": ImageIcon("/ml-icon.png", "Machine Learning"), // Custom user image
    "AI in Testing": ImageIcon("/ai-icon.png", "AI in Testing"), // Custom user image

    // --- Abstract / General Skills (Custom SVGs) ---
    "Manual Testing": SvgIcon(<>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#e2e8f0" stroke="none" />
        <polyline points="14 2 14 8 20 8" stroke="#475569" strokeWidth="2" fill="none" />
        <path d="M9 15l2 2 4-4" stroke="#16a34a" strokeWidth="3" fill="none" />
    </>, "0 0 24 24", "none"),

    "Test case writing": SvgIcon(<>
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#e2e8f0" stroke="none" />
        <path d="M8 10h8v2H8zm0 4h8v2H8z" stroke="#334155" />
    </>, "0 0 24 24", "none"),

    "Test plan creation": SvgIcon(<>
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#e2e8f0" stroke="none" />
        <path d="M12 18H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" stroke="#334155" />
    </>, "0 0 24 24", "none"),

    "Test scenarios creation": SvgIcon(<>
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#e2e8f0" stroke="none" />
        <text x="12" y="16" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="bold" stroke="none">TS</text>
    </>, "0 0 24 24", "none"),

    "Verification & Validation": SvgIcon(<>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#8B5CF6" stroke="none" />
        <path d="M10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z" fill="white" stroke="none" />
    </>, "0 0 24 24", "none"),

    "Agile Methodologies": SvgIcon(<>
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#0052CC" stroke="none" />
        <path d="M12 7v6h2V7h-2zm0 8v2h2v-2h-2z" fill="white" stroke="none" />
    </>, "0 0 24 24", "none"),

    "API Testing": SvgIcon(<>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00758F" stroke="none" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" stroke="none">API</text>
    </>, "0 0 24 24", "none"),
};

export const getTechIcon = (name: string) => {
    return TechIcons[name] || TechIcons["Manual Testing"]; // Fallback icon
};
