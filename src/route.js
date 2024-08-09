import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './route.css';
import Header from'./Header';
import Footer from './Footer';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative; /* Ensure positioning context for absolute children */
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-base);
  background: ${({ primary }) => primary
    ? 'linear-gradient(90deg, #1A2B51 0%, #EC8845 100%)'
    : 'var(--color-black)'
  };
  border-radius: var(--br-7xs);
  color: var(--color-white);
  font-size: var(--font-size-base);
  font-family: var(--font-khula);
  align-items: center;
  
`;

const HeroSection = styled.section`
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Ensure this is behind other content */
`;

const HeroTitle = styled.h1`
  color: var(--color-blackS);
  font-size: 50px;
  font-family: var(--font-judson);
  font-weight: 400;
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
  gap: var(--gap-xl);
`;

const ExploreColleges = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; /* Align items to the top of the row */
  justify-content: space-between; /* Distribute space evenly between cards */
  gap: var(--gap-xl);
  flex-wrap: wrap; /* Allow wrapping to the next row if there's not enough space */
  padding: var(--padding-base);
  box-sizing: border-box;
`;


const Title = styled.h2`
  margin: 10px 0; /* Adjust margin as needed */
  font-size: 1.5rem; /* Adjust font size as needed */
  text-align: center; /* Center-align the title text */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 60%; /* Adjust the height as needed */
  object-fit: cover; /* Ensure the image covers the area without distortion */
  border-radius: var(--br-7xs); /* Optional: Add border-radius for rounded corners */
`;


const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Adjust alignment within the card */
  width: 300px; /* Fixed width */
  height: 400px; /* Fixed height */
  margin: var(--gap-xl);
  background: #f0f0f0; /* Grey background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
  border-radius: var(--br-7xs); /* Optional: Add border-radius for rounded corners */
  box-sizing: border-box; /* Ensure padding and border are included in the width and height */
`;


const SearchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background: url('https://www.oxfordscholastica.com/wp-content/uploads/2019/05/20190606_Balliol_2.jpg') no-repeat center center;
  background-size: cover;
  position: relative; /* Ensure positioning context for absolute children */
  z-index: 10; /* Higher z-index to ensure this is above the background image */
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
`;

const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
  position: relative; /* Ensure positioning context */
  z-index: 1; /* Lower z-index than the SearchSection */
`;

const Testimonial = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--padding-base);
`;

const Avatar = styled.img`
  loading: lazy;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: var(--gap-xl);
`;

const TestimonialText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialName = styled.span`
  font-weight: bold;
`;

const TestimonialCourse = styled.span`
  color: var(--color-gray-100);
`;


function Route() {
  const navigate = useNavigate();

  return (
    <HomePage>
      <Header />
      <HeroSection>
        <HeroImage src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/james_madison_university.jpg?itok=rzNh-kr_" alt="Hero Image" />
        <HeroTitle>Explore 1000+ colleges and universities<br />and choose what’s best for YOU</HeroTitle>
      </HeroSection>
      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <Button primary>
            <span>Get Started</span>
          </Button>
          <Button>
            <span>Explore Colleges</span>
          </Button>
        </div>
      </Section>
      <Section>
        <Title>Explore products</Title>
        <ExploreColleges>
          <ProductCard>
            <ProductImage src="https://s3.envato.com/files/308100152/_8528770.jpg" alt="Product 1" />
            <Title>SPOT ROUND ADMISSION</Title>
            <p>Info about what the product does</p>
            <Button primary>
              <span>EXPLORE</span>
            </Button>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://images.shiksha.com/mediadata/images/articles/1590483961php7tYsDp.jpeg" alt="Product 2" />
            <Title>COLLEGE PREDICTOR</Title>
            <p>Info about what the product does</p>
            <Button primary>
              <span>EXPLORE</span>
            </Button>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/source/rev-84e1005/s39613.pcdn.co/wp-content/uploads/2018/04/student-led-study-group-library-id842920176.jpg" alt="Product 3" />
            <Title>SPOT ROUND ADMISSION</Title>
            <p>Info about what the product does</p>
            <Button primary>
              <span>EXPLORE</span>
            </Button>
          </ProductCard>
        </ExploreColleges>
      </Section>
      <SearchSection>
        <SearchInput placeholder="Search for colleges, exams, and more..." />
      </SearchSection>
      <TestimonialsSection>
        <Title>Testimonials</Title>
        <Testimonial>
          <Avatar src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg" alt="Avatar 1" />
          <TestimonialText>
            <TestimonialName>John Doe</TestimonialName>
            <TestimonialCourse>Computer Science, Class of 2022</TestimonialCourse>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </TestimonialText>
        </Testimonial>
        <Testimonial>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPFG2avZ9h7ROn4W6qZy5risfoI-ykQlsew&s" alt="Avatar 2" />
          <TestimonialText>
            <TestimonialName>Jane Smith</TestimonialName>
            <TestimonialCourse>Business Administration, Class of 2023</TestimonialCourse>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </TestimonialText>
        </Testimonial>
      </TestimonialsSection>
      <Footer />
    </HomePage>
  );
}

export default Route;
