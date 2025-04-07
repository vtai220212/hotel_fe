import React from 'react';
import { TeamWrapper, TeamContainer, TeamGrid, TeamMember } from './style';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';



const Team = () => {
  const teamMembers = [
    { name: 'Nguyễn Văn A', position: 'CEO & Founder', image: '/images/team-1.jpg', linkedin: '#', twitter: '#' },
    { name: 'Trần Thị B', position: 'Marketing Director', image: '/images/team-2.jpg', linkedin: '#', twitter: '#' },
    { name: 'Lê Văn C', position: 'Operations Manager', image: '/images/team-3.jpg', linkedin: '#', twitter: '#' },
    { name: 'Phạm Thị D', position: 'Customer Relations', image: '/images/team-4.jpg', linkedin: '#', twitter: '#' }
  ];

  return (
    <TeamWrapper>
      <TeamContainer>
        <h2>Đội Ngũ Của Chúng Tôi</h2>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <img src={member.image} alt={member.name} />
              <div className="overlay">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <div className="social-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamContainer>
    </TeamWrapper>
  );
};

export default Team;