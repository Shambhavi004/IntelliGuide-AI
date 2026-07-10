import "./CompanyPrep.css";
import { useState } from "react";

function CompanyPrep() {

  const [company, setCompany] = useState("Google");
  const [role, setRole] = useState("Software Developer");

  const companyData = {

    Google: {
      difficulty: "Hard",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "HR"
      ],
      topics: [
        "Arrays",
        "Trees",
        "Graphs",
        "Dynamic Programming",
        "System Design",
        "Recursion"
      ],
      questions: [
        "LRU Cache",
        "Word Ladder",
        "Merge K Sorted Lists",
        "Median of Streams",
        "Design URL Shortener"
      ],
      tip:
        "Google focuses heavily on problem-solving clarity. Explain your approach before coding. Googleyness round checks culture fit and communication.",
      hrQuestions: [
        "Why Google?",
        "Tell me about a hard problem you solved",
        "How do you handle failure?"
      ]
    },

    Amazon: {
      difficulty: "Hard",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "Bar Raiser",
        "HR"
      ],
      topics: [
        "Arrays",
        "Trees",
        "Graphs",
        "DP",
        "OOPs",
        "Leadership Principles"
      ],
      questions: [
        "Lowest Common Ancestor",
        "Clone Graph",
        "Trapping Rain Water",
        "Design Amazon Locker",
        "Number Of Islands"
      ],
      tip:
        "Connect every answer to Amazon Leadership Principles. Customer Obsession and Ownership are the most important.",
      hrQuestions: [
        "Tell me about a time you disagreed with your team",
        "Describe a time you took ownership",
        "Why Amazon?"
      ]
    },

    Microsoft: {
      difficulty: "Hard",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "Technical Round 3",
        "HR"
      ],
      topics: [
        "Trees",
        "Linked Lists",
        "Strings",
        "OOPs",
        "OS Basics",
        "Puzzles",
        "Data Structures"
      ],
      questions: [
        "Diameter Of Binary Tree",
        "Reverse Linked List In Groups",
        "Serialize/Deserialize Tree",
        "Clone Linked List With Random Pointer",
        "Longest Substring Without Repeating Characters"
      ],
      tip:
        "Microsoft interviews are conversational. Focus on explaining your thinking clearly.",
      hrQuestions: [
        "Why Microsoft?",
        "Where do you see yourself in 5 years?",
        "Tell me about a project you are proud of"
      ]
    },

    Adobe: {
      difficulty: "Medium",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "HR"
      ],
      topics: [
        "Arrays",
        "Strings",
        "Trees",
        "OOPs",
        "Design Patterns",
        "Data Structures"
      ],
      questions: [
        "LRU Cache",
        "Iterator Pattern",
        "Stock Buy Sell",
        "Sliding Window",
        "Design Parking Lot"
      ],
      tip:
        "Adobe focuses heavily on OOPs and Design Patterns. Clean code matters.",
      hrQuestions: [
        "Tell me about yourself",
        "What is your biggest strength?",
        "Describe a challenge you overcame"
      ]
    },

    Flipkart: {
      difficulty: "Medium",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "Hiring Manager",
        "HR"
      ],
      topics: [
        "Arrays & Strings",
        "Trees & Graphs",
        "System Design Basics",
        "DBMS",
        "OS",
        "OOPs"
      ],
      questions: [
        "Design Splitwise",
        "Alien Dictionary",
        "Implement HashMap",
        "Top K Frequent Elements",
        "Minimum Cost To Connect Ropes"
      ],
      tip:
        "Flipkart is DSA heavy. Brute force solutions are usually rejected.",
      hrQuestions: [
        "Why Flipkart?",
        "How do you prioritize tasks?",
        "Tell me about a failure"
      ]
    },

    TCS: {
      difficulty: "Easy",
      rounds: [
        "Aptitude Test",
        "Technical Interview",
        "HR Interview"
      ],
      topics: [
        "OOPs",
        "DBMS",
        "OS",
        "Programming Language Basics — C, C++, Java, or Python",
        "Basic DSA"
      ],
      questions: [
        "What is polymorphism?",
        "Explain normalization",
        "What is deadlock?",
        "Stack vs Queue"
      ],
      tip:
        "TCS focuses on fundamentals more than advanced DSA.",
      hrQuestions: [
        "Tell me about yourself",
        "Why TCS?",
        "Where do you see yourself in 5 years?"
      ]
    },

    Infosys: {
      difficulty: "Easy",
      rounds: [
        "Online Test",
        "Technical Interview",
        "HR Interview"
      ],
      topics: [
        "OOPs",
        "DBMS",
        "Networking Basics",
        "Basic DSA",
        "Puzzles"
      ],
      questions: [
        "Explain OOPs concepts",
        "What is a foreign key?",
        "Fibonacci series",
        "What is OSI model?",
        "Reverse a string"
      ],
      tip:
        "Infosys is beginner friendly. Focus on fundamentals. The aptitude test has English, logical reasoning, and maths.",
      hrQuestions: [
        "Why Infosys?",
        "What are your hobbies?",
        "Tell me about your final year project"
      ]
    },

    Wipro: {
      difficulty: "Easy",
      rounds: [
        "Online Assessment",
        "Technical Interview",
        "HR Interview"
      ],
      topics: [
        "OOPs",
        "Basic DSA",
        "DBMS",
        "OS",
        "Aptitude"
      ],
      questions: [
        "What is inheritance?",
        "Explain ACID properties",
        "Write bubble sort",
        "What is virtual memory?",
        "Difference between process and thread"
      ],
      tip:
        "Very similar to TCS. Concept-based, not DSA heavy. HR round is relaxed — just be confident.",
      hrQuestions: [
        "Tell me about yourself",
        "Why Wipro?",
        "What is your greatest weakness?"
      ]
    },

    Accenture: {
      difficulty: "Easy",
      rounds: [
        "Communication Test",
        "Aptitude Test",
        "Technical Interview",
        "HR Interview"
      ],
      topics: [
        "Communication Skills",
        "Aptitude",
        "Basic Coding",
        "OOPs Basics"
      ],
      questions: [
        "Tell me about yourself",
        "What is OOPs?",
        "Write a simple program",
        "What are your strengths?"
      ],
      tip:
        "Accenture focuses heavily on communication over technical depth. The communication test is eliminatory — speak clearly.",
      hrQuestions: [
        "Why Accenture?",
        "Where do you see yourself in 3 years?",
        "Are you open to relocation?"
      ]
    },

    Walmart: {
      difficulty: "Medium",
      rounds: [
        "Online Assessment",
        "Technical Round 1",
        "Technical Round 2",
        "HR"
      ],
      topics: [
        "DSA",
        "OOPs",
        "System Design Basics",
        "SQL",
        "Problem Solving"
      ],
      questions: [
        "Design Walmart Cart",
        "Binary Search problems",
        "Graph BFS/DFS",
        "Two Sum variations",
        "Stack-based problems"
      ],
      tip:
        "Walmart values structured thinking and clean communication. SQL questions are common alongside DSA.",
      hrQuestions: [
        "Why Walmart?",
        "Tell me about a team project",
        "How do you handle tight deadlines?"
      ]
    }

  };

  const roleData = {

    "Software Developer": {
      topics: [
        "Data Structures & Algorithms",
        "Object Oriented Programming",
        "DBMS & SQL",
        "Operating Systems",
        "Computer Networks",
        "System Design Basics",
        "Time & Space Complexity",
        "Recursion & Backtracking"
      ],
      projects: [
        "REST API with JWT authentication and role-based access control",
        "Clone a real app — Twitter, Reddit, or Notion with core features",
        "Real-time chat application using WebSockets",
        "URL shortener with analytics dashboard",
        "Task management system with drag and drop"
      ],
      resources: [
        "Striver's A2Z DSA Sheet — striver.in",
        "NeetCode 150 — neetcode.io",
        "GeeksforGeeks — geeksforgeeks.org",
        "LeetCode company-wise questions — leetcode.com",
        "CS Fundamentals — interviewbit.com"
      ]
    },

    "SWE Intern": {
      topics: [
        "Basic Data Structures — Arrays, Stacks, Queues, Linked Lists",
        "Basic Algorithms — Sorting, Searching, Recursion",
        "Object Oriented Programming concepts",
        "Basic SQL queries",
        "Git & Version Control",
        "One programming language in depth — C++, Java, or Python"
      ],
      projects: [
        "Any one full stack CRUD web application",
        "CLI tool that solves a real problem",
        "Open source contribution — even a bug fix counts",
        "Automate a repetitive task using a script"
      ],
      resources: [
        "LeetCode easy problems — leetcode.com",
        "GeeksforGeeks basics — geeksforgeeks.org",
        "CS50 by Harvard — cs50.harvard.edu",
        "Git & GitHub beginner guide — learngitbranching.js.org"
      ]
    },

    "Frontend Developer": {
      topics: [
        "HTML5 & Semantic Elements",
        "CSS3 — Flexbox, Grid, Animations, Media Queries",
        "JavaScript — ES6+, Event Loop, Promises, Async/Await, Closures",
        "React — Hooks, Context API, State Management, Virtual DOM",
        "TypeScript fundamentals",
        "REST API integration & Fetch / Axios",
        "Responsive & Accessible Design — WCAG basics",
        "Performance Optimization — Lazy Loading, Code Splitting, Web Vitals",
        "Testing — Jest, React Testing Library",
        "Build Tools — Webpack, Vite"
      ],
      projects: [
        "Portfolio website with animations, dark mode, and contact form",
        "Weather app consuming a public API with search and geolocation",
        "E-commerce product listing with cart, filters, and sorting",
        "Real-time dashboard with charts using Chart.js or Recharts",
        "GitHub profile finder app using GitHub API"
      ],
      resources: [
        "JavaScript.info — javascript.info",
        "React official docs — react.dev",
        "CSS Tricks — css-tricks.com",
        "Frontend Mentor projects — frontendmentor.io",
        "web.dev by Google — web.dev",
        "TypeScript docs — typescriptlang.org"
      ]
    },

    "Backend Developer": {
      topics: [
        "REST API design principles & best practices",
        "Authentication & Authorization — JWT, OAuth 2.0, Sessions",
        "Databases — SQL (MySQL, PostgreSQL) & NoSQL (MongoDB, Redis)",
        "ORM & ODM — Sequelize, Mongoose, Prisma",
        "Node.js / Express OR Python (Django, FastAPI) OR Java (Spring Boot)",
        "Caching strategies — Redis, Memcached",
        "Message Queues — RabbitMQ, Kafka basics",
        "System Design — Load Balancing, Scalability, Microservices",
        "Security — SQL Injection, XSS, CSRF, Rate Limiting, CORS",
        "Docker & Deployment basics — Railway, Render, AWS EC2"
      ],
      projects: [
        "REST API with full auth — register, login, JWT, refresh tokens, RBAC",
        "Blog API with CRUD, pagination, search, and comments",
        "File upload service with cloud storage — Cloudinary or AWS S3",
        "Rate-limited public API with API key management",
        "Microservice architecture — split a monolith into 2-3 services"
      ],
      resources: [
        "Node.js official docs — nodejs.org",
        "System Design Primer — github.com/donnemartin/system-design-primer",
        "MongoDB University — learn.mongodb.com",
        "PostgreSQL tutorial — postgresqltutorial.com",
        "roadmap.sh/backend — roadmap.sh"
      ]
    },

    "Full Stack Developer": {
      topics: [
        "HTML, CSS, JavaScript — core fundamentals",
        "React or Angular or Vue — at least one frontend framework deeply",
        "TypeScript — now required at most companies",
        "Node.js + Express or any backend framework",
        "REST APIs & GraphQL basics",
        "SQL & NoSQL databases",
        "Authentication — JWT, OAuth, Sessions",
        "System Design — MVC, Microservices, Event-driven architecture",
        "DevOps basics — Docker, CI/CD pipelines, Nginx",
        "Testing — unit, integration, and end-to-end",
        "Web performance — Core Web Vitals, LCP, lazy loading, caching"
      ],
      projects: [
        "Full stack SaaS clone — Trello, Notion, or Slack with real features",
        "Real-time collaborative app — shared whiteboard or Google Docs lite",
        "E-commerce platform — product listing, cart, payments via Razorpay/Stripe",
        "Social media app — posts, likes, comments, follow system, notifications",
        "Multi-tenant application with role-based access and separate dashboards"
      ],
      resources: [
        "Full Stack Open by University of Helsinki — fullstackopen.com",
        "The Odin Project — theodinproject.com",
        "roadmap.sh/full-stack — roadmap.sh",
        "Fireship YouTube — youtube.com/@Fireship",
        "TypeScript deep dive — basarat.gitbook.io/typescript"
      ]
    },

    "Data Analyst": {
      topics: [
        "SQL — Joins, Subqueries, Window Functions, CTEs, Aggregations",
        "Python for Data Analysis — Pandas, NumPy, Matplotlib, Seaborn",
        "Statistics & Probability — mean, median, standard deviation, distributions",
        "Data Cleaning & Preprocessing",
        "Excel — Pivot Tables, VLOOKUP, Power Query",
        "Data Visualization — Tableau, Power BI, or Plotly",
        "Business Intelligence concepts",
        "A/B Testing & Hypothesis Testing",
        "Basic Machine Learning concepts — regression, classification"
      ],
      projects: [
        "Exploratory Data Analysis on a Kaggle public dataset with full report",
        "Sales performance dashboard in Tableau or Power BI",
        "SQL case study — e-commerce database with business questions answered",
        "Customer churn analysis using Python and visualizations",
        "COVID or IPL or stock market data analysis with storytelling"
      ],
      resources: [
        "Mode SQL Tutorial — mode.com/sql-tutorial",
        "Kaggle — kaggle.com",
        "Tableau Public free training — public.tableau.com",
        "Python for Data Analysis book — by Wes McKinney",
        "StatQuest with Josh Starmer — YouTube",
        "roadmap.sh/data-analyst — roadmap.sh"
      ]
    },

    "Business Analyst": {
      topics: [
        "Requirement gathering & stakeholder communication",
        "Business Process Modeling — flowcharts, swimlane diagrams",
        "SQL basics — SELECT, JOIN, GROUP BY for data pulling",
        "Excel — advanced formulas, dashboards, pivot tables",
        "Use Case & User Story writing",
        "Agile & Scrum methodology",
        "Data interpretation & storytelling",
        "Case study problem solving — structured frameworks like MECE",
        "Wireframing basics — Figma or Balsamiq"
      ],
      projects: [
        "Business case study — analyze a real company's problem and propose a solution",
        "Process improvement document for a manual workflow",
        "Market research report with data from public sources",
        "Requirement specification document (BRS/SRS) for an app idea",
        "Dashboard in Excel or Power BI showing business KPIs"
      ],
      resources: [
        "BA Times — batimes.com",
        "Case interview prep — caseinterview.com",
        "Excel for Business — Coursera by Macquarie University",
        "Agile & Scrum — scrum.org",
        "Wireframing basics — figma.com/resources"
      ]
    }

  };

  const selectedCompanyData = companyData[company];
  const selectedRoleData = roleData[role];

  return (

    <div className="companyPrepPage">

      <div className="companyPrepContainer">

        <h1>
          Company Specific Preparation
        </h1>

        <p className="subtitle">
          &nbsp; &nbsp;Select a company and role to get a tailored prep plan
        </p>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option>Google</option>
          <option>Amazon</option>
          <option>Microsoft</option>
          <option>Adobe</option>
          <option>Flipkart</option>
          <option>TCS</option>
          <option>Infosys</option>
          <option>Wipro</option>
          <option>Accenture</option>
          <option>Walmart</option>
        </select>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Software Developer</option>
          <option>SWE Intern</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Data Analyst</option>
          <option>Business Analyst</option>
        </select>

        <div className="companyPrepResult">

          <h2>
            Difficulty:
            <span
              className={
                selectedCompanyData.difficulty === "Hard"
                  ? "difficultyHard"
                  : selectedCompanyData.difficulty === "Medium"
                  ? "difficultyMedium"
                  : "difficultyEasy"
              }
            >
              {" "}
              {selectedCompanyData.difficulty}
            </span>
          </h2>

          <h2>Interview Rounds</h2>

          <div className="roundsContainer">
            {
              selectedCompanyData.rounds.map((round, index) => (
                <div key={index} className="roundWrapper">
                  <div className="roundCard">
                    {round}
                  </div>
                  {
                    index !== selectedCompanyData.rounds.length - 1 &&
                    <div className="arrow">↓</div>
                  }
                </div>
              ))
            }
          </div>

          <h2>Topics To Prepare</h2>

          <div className="tags">
            {
              selectedCompanyData.topics.map((topic, index) => (
                <span key={index} className="tag">
                  {topic}
                </span>
              ))
            }
          </div>

          <h2>Most Asked Questions</h2>

          <div className="tags">
            {
              selectedCompanyData.questions.map((question, index) => (
                <span key={index} className="tag">
                  {question}
                </span>
              ))
            }
          </div>

          <h2>Preparation Tip</h2>

          <div className="tipBox">
            {selectedCompanyData.tip}
          </div>

          <h2>HR Questions</h2>

          <ul className="hrList">
            {
              selectedCompanyData.hrQuestions.map((question, index) => (
                <li key={index}>
                  {question}
                </li>
              ))
            }
          </ul>

          <h2>Role Specific Topics</h2>

          <div className="tags">
            {
              selectedRoleData.topics.map((topic, index) => (
                <span key={index} className="tag">
                  {topic}
                </span>
              ))
            }
          </div>

          <h2>Projects To Build</h2>

          <div className="tags">
            {
              selectedRoleData.projects.map((project, index) => (
                <span key={index} className="tag">
                  {project}
                </span>
              ))
            }
          </div>

          <h2>Recommended Resources</h2>

          <div className="tags">
            {
              selectedRoleData.resources.map((resource, index) => (
                <span key={index} className="tag">
                  {resource}
                </span>
              ))
            }
          </div>

        </div>

      </div>

    </div>

  );
}

export default CompanyPrep;
