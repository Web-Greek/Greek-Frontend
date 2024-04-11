
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './TeamPage.css'; // Import custom CSS file for styling

const Section = ({ image, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Suggest using at least 0.5 to ensure the section is at least half in view before triggering
    triggerOnce: true,
  });

  return (
    <div className="team-section" ref={ref} style={{ backgroundImage: `url(${image})` }}>
      <div className={`section-content ${inView ? 'active' : ''}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="team-page-container">
      <Section
        image="가천대.jpeg"
        title="Gogeup Web Programming"
        description="고급웹 프로그래밍 수업에서"
      />
      <Section
        image="혁신.jpeg"
        title="Revolutionary"
        description="혁신적이고"
      />
      <Section
        image="화이팅.jpeg"
        title="Energetic"
        description="에너제틱하며"
      />
      <Section
        image="교육.jpeg"
        title="Educational"
        description="교육적으로"
      />
      <Section
        image="창조.jpeg"
        title="Kreator"
        description="창조적인 개발자로 성장하겠습니다"
      />
    </div>
  );
};

export default Team;
