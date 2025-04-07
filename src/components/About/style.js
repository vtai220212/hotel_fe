import styled, { keyframes } from 'styled-components';
import HeroBanner from '../../assets/banner.jpg';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f1e9;
`;

const HeroWrapper = styled.section`
  height: 80vh;
  position: relative;
  background-image: url(${HeroBanner}); // Ảnh banner làm nền
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(26, 26, 26, 0.3), transparent);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 576px) {
    height: 50vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 20px;
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #d4af37;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto 30px;
    color: #e6d7b2;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  }

  .cta-button {
    padding: 15px 40px;
    background: #d4af37;
    color: #1a1a1a;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);

    &:hover {
      background: #e6d7b2;
      color: #1a1a1a;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.6);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3.5rem;
      letter-spacing: 2px;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 25px;
    }
    .cta-button {
      padding: 12px 30px;
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
    }
    p {
      font-size: 1rem;
      margin-bottom: 20px;
    }
    .cta-button {
      padding: 10px 25px;
      font-size: 0.9rem;
    }
  }
`;

const AchievementsWrapper = styled.section`
  padding: 80px 0;
  background: #1a1a1a;
  color: #e6d7b2;
`;

const AchievementsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #d4af37;
  }

  .number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #d4af37;
  }

  .label {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const StoryWrapper = styled.section`
  padding: 100px 0;
  background: #f8f1e9;
`;

const StoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 15px;
  }
`;

const StoryContent = styled.div`
  h2 {
    font-size: 2.8rem;
    color: #2b2525;
    margin-bottom: 30px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #2b2525;
    margin-bottom: 20px;
  }
`;

const StoryImage = styled.div`
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid #d4af37;
  }

  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;

const TeamWrapper = styled.section`
  padding: 100px 0;
  background: #f8f1e9;
`;

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 2.8rem;
    color: #2b2525;
    margin-bottom: 60px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
    .overlay {
      opacity: 1;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(26, 26, 26, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  h3 {
    font-size: 1.5rem;
    color: #d4af37;
    margin-bottom: 5px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: #e6d7b2;
    margin-bottom: 15px;
  }

  .social-links {
    display: flex;
    gap: 15px;

    a {
      color: #d4af37;
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #e6d7b2;
      }
    }
  }
`;

const TestimonialsWrapper = styled.section`
  padding: 100px 0;
  background: #1a1a1a;
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 2.8rem;
    color: #d4af37;
    margin-bottom: 60px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: #f8f1e9;
  padding: 30px;
  border-radius: 8px;
  text-align: center;

  .quote-icon {
    color: #d4af37;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #2b2525;
    margin-bottom: 20px;
    font-style: italic;
  }

  .author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #d4af37;
    }

    div {
      text-align: left;
    }

    h4 {
      font-size: 1.1rem;
      color: #2b2525;
      font-weight: 600;
    }

    span {
      font-size: 0.9rem;
      color: #2b2525;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
`;

const ValuesWrapper = styled.section`
  padding: 100px 0;
  background: #f8f1e9;
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 2.8rem;
    color: #2b2525;
    margin-bottom: 60px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ValueCard = styled.div`
  padding: 40px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .icon {
    font-size: 3rem;
    color: #d4af37;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    color: #2b2525;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #2b2525;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
`;

export { PageWrapper, HeroWrapper, HeroContent, AchievementsWrapper, AchievementsContainer, StatsGrid, StatItem, StoryWrapper, StoryContainer, StoryContent, StoryImage, TeamWrapper, TeamContainer, TeamGrid, TeamMember, TestimonialsWrapper, TestimonialsContainer, TestimonialsGrid, TestimonialCard, ValuesWrapper, ValuesContainer, ValuesGrid, ValueCard };