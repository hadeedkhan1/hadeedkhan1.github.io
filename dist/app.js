const projects = [
    {
        id: "emotionware",
        title: "Emotionware",
        description: "Real-time computer vision system that detects and classifies emotions using camera input and Presage machine learning. Sends data to custom wearable device.",
        tags: ["Python CV/Deepface", "Embedded Systems", "Presage SDK", "Gemini API"],
        categories: ["AI/Machine Learning + Data Science", "Embedded Systems + Hardware"],
        link: "https://hadeedkhan1.github.io/emotionware"
    },
    {
        id: "bandit-model",
        title: "Custom Bandit Algorithm Model with simulation",
        description: "Developed a building simulation and a new custom hybrid Bandit model that most efficiently heats and cools all types of buildings and dwellings. Compiled results into a published research paper.",
        tags: ["Machine Learning", "Bandit Algorithms", "Python Simulation", "Reinforcement Learning"],
        categories: ["AI/Machine Learning + Data Science"],
        link: "https://nhsjs.com/2024/model-free-bandit-algorithms-for-efficient-temperature-regulation-in-buildings/"
    },
    {
        id: "stock-visualizer",
        title: "Stock Data Visualizer",
        description: "A dashboard using Streamlit and Plotly to analyze real-time financial data, featuring technical indicators and a custom price-alert system.",
        tags: ["Python", "AWS", "Streamlit", "Data Visualization"],
        categories: ["AI/Machine Learning + Data Science", "Software + Product development"],
        link: "https://github.com/hadeedkhan1"
    },
    {
        id: "food-match",
        title: "Food Match",
        description: "Computer Vision based menu recommendation system that that learns user preferences through interactive feedback and a swipe style interface to personalize meal suggestions.",
        tags: ["Python", "Computer Vision", "Full Stack", "OpenAI API"],
        categories: ["AI/Machine Learning + Data Science", "Software + Product development"],
        link: "https://github.com/hadeedkhan1"
    },
    {
        id: "mathwise",
        title: "Mathwise",
        description: "Free AI tutoring platform sponsored by Mathnasium that provides personalized STEM problem-solving to 2,000+ users, resulting in a measurable 12% average grade improvement.",
        tags: ["Python", "OpenAI API", "Full Stack Development", "Education Tech"],
        categories: ["AI/Machine Learning + Data Science", "Software + Product development", "Leadership", "EdTech"],
        link: "https://mathwise.help"
    },
    {
        id: "lasa-ask",
        title: "LASA Ask",
        description: "Maintained production-hosted classroom response system used by LASA High School. Added new polling methods (free-response and 0-10 ratings), minor front-end usability improvements, and deployed/debugged updates on a remote Linux server via SSH. 700+ users per schoolyear.",
        tags: ["Web Dev", "Linux", "JavaScript"],
        categories: ["Software + Product development", "EdTech"],
        link: "lasacs.com/ask/505"
    },
    {
        id: "turtles-robotics-project",
        title: "TURTLES Robotics",
        description: "Autonomous navigation and maze solving using only LIDAR. Texas A&M TURTLES lab project",
        tags: ["Teamwork", "ROS2", "LIDAR", "SLAM"],
        categories: ["Robotics", "Software + Product development", "Leadership"],
        link: "https://www.turtlerobotics.org/SCPosters/MAZE_SC_Spring26.pptx.png"
    },
    {
        id: "academix-ui",
        title: "ACADEMIX UI",
        description: "Automation tools for Academix Tutors, automating accounting, timetracking, budgeting, paryoll and more",
        tags: ["Javascript", "SQL", "UX"],
        categories: ["Software + Product development", "EdTech"],
        link: "academixtutors.com"
    },
    {
        id: "basic-flutter-app",
        title: "Flutter App",
        description: "Used my knowledge of Flutter app development from internship experience to create a simple fullstack application.",
        tags: ["Dotnet", "Flutter", "IOS", "Andriod"],
        categories: ["Software + Product development"],
        link: "#"
    },
    {
        id: "bldc",
        title: "BLDC",
        description: "Designed and built a custom motor controller PCB that can drive brushless motors with precision torque control over CAN bus.",
        tags: ["KiCad", "Field-Oriented Control", "Power Electronics"],
        categories: ["Embedded Systems + Hardware"],
        link: "#"
    },
    {
        id: "attendance-tracker-rfid",
        title: "Attendance Tracker RFID",
        description: "Designed and deployed an ESP32-based attendance tracking system with RFID, with a web-connected backend.",
        tags: ["ESP32", "RFID", "C++", "IoT"],
        categories: ["Embedded Systems + Hardware"],
        link: "#"
    },
    {
        id: "robotics-programs",
        title: "Robotics Programs",
        description: "Details coming soon.",
        tags: [],
        categories: ["Robotics", "Software + Product development"],
        link: "#"
    }
];
const experience = [
    {
        id: "capsher",
        title: "Software Engineering Intern | Capsher Technologies (Summer 2026)",
        description: "",
        tags: ["Backend Development", "Azure Cloud Deployment", "REST APIs", "Systems Engineering"],
        link: "https://capsher.com/"
    },
    {
        id: "city-of-austin-dell",
        title: "IT Intern | City of Austin/Dell Technologies (Summer 2024 & Summer 2025)",
        description: "",
        tags: ["IT Infrastructure", "Communication", "Systems Support"],
        link: "#"
    },
    {
        id: "reliablyme",
        title: "Software Engineering Intern | ReliablyME (2024-2025)",
        description: "",
        tags: ["SDLC", "Python", "SQL", "AWS"],
        link: "https://reliablyme.com"
    },
    {
        id: "academix-tutors",
        title: "Founder and CEO | Academix Tutors (2023-Present)",
        description: "",
        tags: ["Math", "Physics", "Database", "Scripting"],
        link: "https://academixtutors.com"
    },
    {
        id: "turtles-robotics",
        title: "Robotics Software Developer | Texas A&M TURTLES Robotics, MAZE team (2026-Present)",
        description: "",
        tags: ["Teamwork", "ROS2", "Autonomous Navigation", "SLAM"],
        link: "https://www.turtlerobotics.org/SCPosters/MAZE_SC_Spring26.pptx.png"
    },
    {
        id: "frc-418",
        title: "Fabrication Team | FRC Robotics #418 (2021-2025)",
        description: "",
        tags: ["CAD", "Fabrication", "Design Process"],
        link: "https://www.lasarobotics.org/"
    },
    {
        id: "ftc-coach-admin",
        title: "Coach + Admin | FTC Robotics #31675/#27859 (2024-2026)",
        description: "Compass award for mentorship",
        tags: ["Path Planning", "CAD", "Mentorship", "Strategy"],
        link: "https://icbcrobotics.org/"
    }
];
///////
const featuredProjectIds = ["emotionware", "bandit-model", "mathwise", "food-match"];
const featuredExperienceIds = ["capsher", "turtles-robotics", "city-of-austin-dell", "reliablyme", "academix-tutors"];
const projectCategories = [
    "All",
    "AI/Machine Learning + Data Science",
    "Software + Product development",
    "Embedded Systems + Hardware",
    "Robotics",
    "Leadership",
    "EdTech"
];
let activeProjectCategory = "All";
function isHomepage() {
    return document.body.dataset.page === 'home';
}
function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid)
        return;
    const items = isHomepage()
        ? projects.filter(project => featuredProjectIds.includes(project.id))
        : projects.filter(project => { var _a; return activeProjectCategory === "All" || ((_a = project.categories) === null || _a === void 0 ? void 0 : _a.includes(activeProjectCategory)); });
    grid.innerHTML = items.map(project => {
        var _a;
        return `
        <div class="relative flex flex-col p-8 overflow-hidden transition-all duration-300 rounded-xl group bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(103,178,216,0.3)]">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>

            <div class="relative z-10 flex flex-col h-full">
                <h3 class="text-[#0C343D] dark:text-white text-2xl font-bold mb-3">${project.title}</h3>
                <p class="text-[#0C343D] dark:text-stone-300 mb-6 leading-relaxed flex-grow font-medium opacity-90">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${[...((_a = project.categories) !== null && _a !== void 0 ? _a : []), ...project.tags].map(tag => `
                        <span class="bg-white/40 dark:bg-white/10 text-[#6BAB4F] dark:text-[#67B2D8] border border-white/60 dark:border-white/10 text-xs px-3 py-1 rounded-lg font-bold uppercase tracking-wide">${tag}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="inline-flex items-center text-[#0C343D] dark:text-white font-extrabold hover:text-[#6BAB4F] dark:hover:text-[#67B2D8] transition-colors mt-auto">
                    View Project
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </div>
    `;
    }).join('');
}
function setupProjectFilters() {
    const filters = document.getElementById('project-filters');
    if (!filters)
        return;
    filters.innerHTML = projectCategories.map(category => `
        <button type="button" data-project-filter="${category}" aria-pressed="${category === activeProjectCategory}"
            class="project-filter px-4 py-2 rounded-xl border font-bold text-sm transition ${category === activeProjectCategory
        ? 'bg-[#0C343D] text-white dark:bg-[#DBC6A5] dark:text-[#500000] border-transparent'
        : 'bg-white/30 dark:bg-white/10 text-[#0C343D] dark:text-[#DBC6A5] border-white/50 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20'}">
            ${category}
        </button>
    `).join('');
    filters.onclick = (event) => {
        const button = event.target.closest('[data-project-filter]');
        if (!button)
            return;
        activeProjectCategory = button.dataset.projectFilter;
        setupProjectFilters();
        renderProjects();
    };
}
function renderExperience() {
    const grid = document.getElementById('experience-grid');
    if (!grid)
        return;
    const items = isHomepage()
        ? experience.filter(job => featuredExperienceIds.includes(job.id))
        : experience;
    grid.innerHTML = items.map(job => `
        <div class="experience-card relative flex flex-col p-8 overflow-hidden transition-all duration-300 rounded-xl group bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(103,178,216,0.3)]">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>

            <div class="relative z-10 flex flex-col h-full">
                <h3 class="text-[#0C343D] dark:text-white text-2xl font-bold mb-3">${job.title}</h3>
                <p class="text-[#0C343D] dark:text-stone-300 mb-6 leading-relaxed flex-grow font-medium opacity-90">${job.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${job.tags.map(tag => `
                        <span class="bg-white/40 dark:bg-white/10 text-[#6BAB4F] dark:text-[#67B2D8] border border-white/60 dark:border-white/10 text-xs px-3 py-1 rounded-lg font-bold uppercase tracking-wide">${tag}</span>
                    `).join('')}


                </div>
                <a href="${job.link}" target="_blank" class="inline-flex items-center text-[#0C343D] dark:text-white font-extrabold hover:text-[#67B2D8] transition-colors mt-auto">
                    View Details
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>
        </div>
    `).join('');
}
function setupDarkMode() {
    const btn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark')
        html.classList.add('dark');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const txt = document.getElementById('theme-text');
        if (txt)
            txt.innerText = isDark ? 'Light' : 'Dark';
    });
}
function setupExperienceTimeline() {
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline)
        return;
    const revealTimeline = () => timeline.classList.add('is-visible');
    if (!('IntersectionObserver' in window)) {
        revealTimeline();
        return;
    }
    const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting)
            return;
        revealTimeline();
        observer.disconnect();
    }, { threshold: 0.25 });
    observer.observe(timeline);
}
function setupExperienceCards() {
    const cards = document.querySelectorAll('.experience-card');
    if (!cards.length)
        return;
    const revealCard = (card) => card.classList.add('is-visible');
    if (!('IntersectionObserver' in window)) {
        cards.forEach(revealCard);
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
                return;
            revealCard(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });
    cards.forEach(card => observer.observe(card));
}
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupProjectFilters();
    renderExperience();
    setupDarkMode();
    setupExperienceTimeline();
    setupExperienceCards();
    initPCB();
    if (isHomepage())
        initLidar();
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener('click', () => {
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.toggle('hidden');
    });
});
