import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  max-height: 650px;
  background: url('https://eu7cmie.cloudimg.io/v7/https://airtasker-seo-assets-prod.s3-ap-southeast-2.amazonaws.com/global-homepage-hero.jpg?quality=60');
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 880px;
  margin: auto;
`;

const Heading = styled.h1`
  color: white;
  font-size: 48px;
  line-height: 52px;
`;

const Sub = styled.p`
  color: white;
  font-size: 34px;
  line-height: 40px;
`;

const HomePageBanner = () => (
  <Wrapper>
    <Container>
      <Heading>
        Connect with experts to get the job done on Airtasker
      </Heading>
      <Sub>
        It’s amazing what you can’t do yourself
      </Sub>
      <p>
        <Button>Get started now</Button>
      </p>
    </Container>
  </Wrapper>
);

export default HomePageBanner;