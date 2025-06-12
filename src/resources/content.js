import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Dandi",
  lastName: "Irwanto",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer | AI Entusiast",
  avatar: "/images/avatar.jpg",
  email: "dandi.direct20@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dandiirwanto20",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dandiir/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@dund.efg",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting code & exploring AI frontiers</>,
  featured: {
    display: true,
    title: <>Recent Learning: <strong className="ml-4">Explore AI</strong></>,
    href: "/work/ai-project",
  },
  subline: (
    <>
      I'm Dandi, a software engineer passionate about AI and machine learning. I love exploring new technologies
      <br /> and building innovative solutions. In my free time, I dive deep into AI research and development.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  resume: {
    display: true,
    link: "/resume.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dandi is a Software engineer with a passion for artificial intelligence and machine learning. He is currently focused on learning and exploring AI technologies, working on projects that combine software development with innovative AI solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SPE Solution",
        timeframe: "May 2023 - May 2025",
        role: "Software Engineer",
        achievements: [
          <>
            Led the creation of high-performance web applications for a top-tier fintech firm, utilizing advanced
            technologies such as Yii2 PHP, Golang, MySQL, ClickHouse, MongoDB, and REDIS within RDL frameworks for
            BNI Bank Internal Service (eCollection V2).
          </>,
          <>
            Specialized in the optimization of CI/CD pipelines, significantly improving deployment speed and
            system reliability.
          </>,
          <>
            Enhanced system communication and efficiency by integrating RabbitMQ for effective inter-service
            messaging.
          </>,
          <>
            Streamlined deployment and ensured consistent operational environments through proficient use of
            Docker containerization.
          </>,
          <>
            Advocated for code quality, rigorously adhering to SonarQube standards to maintain software integrity
          </>,
          <>
            Developed and sustained a microservices architecture, facilitating agile processes for the delivery of
            dependable and superior software solutions.
          </>,
          <>
            Demonstrated expertise in GitLab for version control, promoting seamless team collaboration and
            adherence to project timeline.
          </>,
          <>
            Implemented unit tests on backend services, achieving 80% test coverage across key services.
          </>,
          <>
            Performed code refactoring for the Portal eCollection project, focusing on Models, Controllers, and
            primarily Views, using SonarQube to ensure code quality and maintainability.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "7Smart Indonesia",
        timeframe: "Feb 2023 - May 2023",
        role: "Programmer",
        achievements: [
          <>
            Spearheaded backend development for a robust car rental management system at 7smart Indonesia, leveraging
            the CodeIgniter 3 framework and MySQL to enhance operational efficiency for Naba Wood Company.
          </>,
        ],
        images: [],
      },
      {
        company: "Folkatech",
        timeframe: "Dec 2022 - Feb 2023",
        role: "Back-end Developer Intern",
        achievements: [
          <>
            Engineered robust backend solutions utilizing NESTJS, TypeScript, NodeJS, and MySQL at Folkatech, a leading
            software house and IT consultancy.
          </>,
          <>
            Fostered collaborative synergy with Project Managers and Quality Assurance teams, leveraging agile
            methodologies and Kanban via Trello for optimal project execution.
          </>,
          <>
            Contributed to the CV Generator project, enhancing system efficiency and scalability through proficient backend
            development practices.
          </>,
        ],
        images: [],
      },
      {
        company: "Traveloka - Singapore",
        timeframe: "Apr 2022 - Jun 2022",
        role: "Cloud Engineer Intern Based on Capstone Bangkit Academy",
        achievements: [
          <>
            Engineered a robust REST API using ExpressJS to seamlessly connect Mobile Applications with Machine
            Learning datasets and Google Cloud Platform services.
          </>,
          <>
            Designed and implemented a MySQL database on Cloud SQL, ensuring secure and scalable data storage
            solutions.
          </>,
          <>
            Configured Compute Engine with auto-scaling capabilities to optimize web server performance and resource
            management.
          </>,
          <>
            Monitored and managed billing for organizational resources, including Compute Engine, Cloud SQL, and Cloud
            Storage, to maintain cost efficiency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indonesian Digital Technology University (UTDI)",
        description: <>Bachelor Degree in Informatics</>,
      },
      {
        name: "Bangkit Academy Graduate - Led By Google, Tokopedia, Gojek, and Traveloka",
        description: <>Graduate of Bangkit Academy 2022</>,
      },
      {
        name: "Independent Study Kampus Merdeka Cycle 1 - Dicoding Indonesia",
        description: <>Distinction Graduate in Front-End and Back-End Web Developer</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Golang, PHP, TypeScript, JavaScript, Java</>,
        images: [],
      },
      {
        title: "Frameworks",
        description: <>Yii2, NodeJS, NextJS, NestJS, Laravel, CodeIgniter 3</>,
        images: [],
      },
      {
        title: "Cloud Platforms",
        description: <>Google Cloud Platform (GCP), Amazon Web Service (AWS)</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, MySQL, Redis, ClickHouse</>,
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: <>Docker, Git, GitLab</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Certificates + Badges",
  title: `Certificates + Badges – ${person.name}`,
  description: `Professional certificates and badges earned by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-6.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-7.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-8.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-9.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-10.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-12.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-13.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-14.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-15.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-16.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-17.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-18.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
