var projects = [
    {
        title: "Stock Data Visualizer",
        description: "A dashboard using Streamlit and Plotly to analyze real-time financial data, featuring technical indicators and a custom price-alert system.",
        tags: ["Python", "AWS", "Streamlit", "Plotly"],
        link: "https://github.com/hadeedkhan1"
    },
    {
        title: "Food Match",
        description: "An menu recommender that uses Computer Vision to digitize physical menus and a Tinder-style swipe interface to refine a personalized reinforcement learning model for meal suggestions.",
        tags: ["In Progress", "Python", "Computer Vision", "OpenAI API"],
        link: "https://github.com/hadeedkhan1"
    },
    {
        title: "Custom Bandit Algorithm Model with simulation",
        description: "Developed a building simulation and a new custom hybrid Bandit model that most efficiently heats and cools all types of buildings and dwellings. Compiled results into a published research paper.",
        tags: ["Machine Learning", "Bandit Algorithms", "Python Simulation", "Mathematical Modeling"],
        link: "https://nhsjs.com/2024/model-free-bandit-algorithms-for-efficient-temperature-regulation-in-buildings/"
    },
    {
        title: "Mathwise",
        description: "A free AI tutoring platform sponsored by Mathnasium that provides personalized STEM problem-solving to 2,000+ users, resulting in a measurable 12% average grade improvement.",
        tags: ["Python", "OpenAI API", "Data Analysis"],
        link: "https://mathwise.help"
    }
];
var experience = [
    {
        title: "IT Intern | City of Austin/Dell Technologies (Summer 2024 & Summer 2025)",
        description: "",
        tags: ["Teamwork", "Communication", "Technical Support"],
        link: "#"
    },
    {
        title: "Software Engineering Intern | ReliablyME (2024-2025)",
        description: "",
        tags: ["SDLC", "Python", "SQL", "AWS"],
        link: "https://reliablyme.com"
    },
    {
        title: "Founder and CEO | Academix Tutors (2023-Present)",
        description: "",
        tags: ["Math", "Physics", "Database", "Google Apps Scripts"],
        link: "https://academixtutors.com"
    },
    {
        title: "Fabrication Team | FRC Robotics #418 (2021-2025)",
        description: "",
        tags: ["3D Modeling", "Fabrication", "Design Process"],
        link: "https://www.lasarobotics.org/"
    },
    {
        title: "Coach + Admin | FTC Robotics #31675/#27859 (2024-Present)",
        description: "",
        tags: ["Path Planning", "Computer Vision", "Mentorship"],
        link: "https://icbcrobotics.org/"
    }
];
function renderProjects() {
    var grid = document.getElementById('project-grid');
    if (!grid)
        return;
    grid.innerHTML = projects.map(function (project) { return "\n        <div class=\"relative flex flex-col p-8 overflow-hidden transition-all duration-300 rounded-xl group bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(103,178,216,0.3)]\">\n            <span class=\"absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]\"></span>\n\n            <div class=\"relative z-10 flex flex-col h-full\">\n                <h3 class=\"text-[#0C343D] dark:text-white text-2xl font-bold mb-3\">".concat(project.title, "</h3>\n                <p class=\"text-[#0C343D] dark:text-stone-300 mb-6 leading-relaxed flex-grow font-medium opacity-90\">").concat(project.description, "</p>\n                <div class=\"flex flex-wrap gap-2 mb-6\">\n                    ").concat(project.tags.map(function (tag) { return "\n                        <span class=\"bg-white/40 dark:bg-white/10 text-[#6BAB4F] dark:text-[#67B2D8] border border-white/60 dark:border-white/10 text-xs px-3 py-1 rounded-lg font-bold uppercase tracking-wide\">".concat(tag, "</span>\n                    "); }).join(''), "\n                </div>\n                <a href=\"").concat(project.link, "\" target=\"_blank\" class=\"inline-flex items-center text-[#0C343D] dark:text-white font-extrabold hover:text-[#67B2D8] transition-colors mt-auto\">\n                    View Project \n                    <svg class=\"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\"></path></svg>\n                </a>\n            </div>\n        </div>\n    "); }).join('');
}
function renderExperience() {
    var grid = document.getElementById('experience-grid');
    if (!grid)
        return;
    grid.innerHTML = experience.map(function (job) { return "\n        <div class=\"relative flex flex-col p-8 overflow-hidden transition-all duration-300 rounded-xl group bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 hover:bg-white/50 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(103,178,216,0.3)]\">\n            <span class=\"absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 dark:via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]\"></span>\n\n            <div class=\"relative z-10 flex flex-col h-full\">\n                <h3 class=\"text-[#0C343D] dark:text-white text-2xl font-bold mb-3\">".concat(job.title, "</h3>\n                <p class=\"text-[#0C343D] dark:text-stone-300 mb-6 leading-relaxed flex-grow font-medium opacity-90\">").concat(job.description, "</p>\n                <div class=\"flex flex-wrap gap-2 mb-6\">\n                    ").concat(job.tags.map(function (tag) { return "\n                        <span class=\"bg-white/40 dark:bg-white/10 text-[#6BAB4F] dark:text-[#67B2D8] border border-white/60 dark:border-white/10 text-xs px-3 py-1 rounded-lg font-bold uppercase tracking-wide\">".concat(tag, "</span>\n                    "); }).join(''), "\n\n\n                </div>\n                <a href=\"").concat(job.link, "\" target=\"_blank\" class=\"inline-flex items-center text-[#0C343D] dark:text-white font-extrabold hover:text-[#67B2D8] transition-colors mt-auto\">\n                    View Details \n                    <svg class=\"w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\"></path></svg>\n                </a>\n            </div>\n        </div>\n    "); }).join('');
}
function setupDarkMode() {
    var btn = document.getElementById('theme-toggle');
    var html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark')
        html.classList.add('dark');
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        var isDark = html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        var txt = document.getElementById('theme-text');
        if (txt)
            txt.innerText = isDark ? 'Light' : 'Dark';
    });
}
document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    renderExperience();
    setupDarkMode();
    var menuBtn = document.getElementById('menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener('click', function () {
        mobileMenu === null || mobileMenu === void 0 ? void 0 : mobileMenu.classList.toggle('hidden');
    });
});
