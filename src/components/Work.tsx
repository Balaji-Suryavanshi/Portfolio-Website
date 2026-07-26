import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Full-Stack Job Portal",
    category: "Web App & Cloud DevOps",
    tools: "Node.js, Express, MySQL, AWS EC2/S3, Docker, K8s",
  },
  {
    name: "Production SMTP Server",
    category: "Server Networking & Infra",
    tools: "Linux, DNS (MX, SPF, DKIM), SMTP Routing, Security",
  },
  {
    name: "Automated CI/CD Pipelines",
    category: "DevOps Orchestration",
    tools: "GitLab CI/CD, Docker, Kubernetes, AWS, GCP, Azure",
  },
  {
    name: "Linux Server Automation",
    category: "System Administration",
    tools: "Ubuntu/CentOS, Bash Scripting, Systemd, Cron Automation",
  },
  {
    name: "SQL Query Optimization",
    category: "Database Engineering",
    tools: "MySQL, Performance Debugging, Indexing, Data Analysis",
  },
  {
    name: "AI & Data Architecture",
    category: "Emerging Technology",
    tools: "Generative AI, Solution Architecture, Python, Data Systems",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
