import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer & DevOps Intern</h4>
                <h5>Okisna IT Solution</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and maintained a full-stack Job Portal Application,
              handling backend development, database management, AWS cloud
              deployment, and containerized Docker/Kubernetes orchestration.
              Configured a production SMTP mail server from scratch (MX, SPF,
              DKIM) and automated CI/CD pipelines via GitLab CI/CD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>NCRD’s Sterling Institute of Management Studies, Nerul</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Graduated with a CGPA of 7.62 / 10. Specialized in software
              development, cloud infrastructure (AWS, GCP, Azure), Linux system
              administration, database query optimization, and DevOps automation.
              Achieved Cisco Networking Academy "Linux Unhatched" certification.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>COCSIT College of Computer Science & IT, Latur</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Graduated with Academic Excellence (CGPA: 9.17 / 10). Developed a
              strong foundation in computer science, programming algorithms, SQL
              and database systems, operating systems, and computer networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
