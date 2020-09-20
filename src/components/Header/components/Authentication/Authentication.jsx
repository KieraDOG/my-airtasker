import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';

const Layout = styled.div`
  display: flex;
`;

const Authentication = () => (
  <Layout>
    <NavigationLink.Text href="/sign-in">
      Sign in
    </NavigationLink.Text>
    <NavigationLink.Text href="/sign-up">
      Sign up
    </NavigationLink.Text>
    <NavigationLink.Button variant="secondary" href="/enroll">
      Become a Tasker
    </NavigationLink.Button>
  </Layout>
);

export default Authentication;
