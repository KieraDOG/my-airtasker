import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';
import NavigationButton from '../NavigationButton';
import PostATaskModal from './components/PostATaskModal';
import CategoriesDropdown from './components/CategoriesDropdown';
import ToggleContent from '../../../ToggleContent';

const Layout = styled.div`
  display: flex;
`;

const Divider = styled.div`
  width: 1px;
  border-right: 1px solid #dadada;
`;

const Logo = styled.span`
  color: #008fb4;
`;

const Public = () => (
  <Layout>
    <NavigationLink href="/">
      <Logo>LOGO</Logo>
    </NavigationLink>
    <Divider />
    <ToggleContent
      toggle={(toggler) => (
        <NavigationButton
          variant="primary"
          href="/post-a-task"
          onClick={toggler}
        >
          Post a task
        </NavigationButton>
      )}
      content={(toggler) => (
        <PostATaskModal onClose={toggler} />
      )}
    />
    <CategoriesDropdown />
    <NavigationLink indictable href="/browse-tasks">
      Browse tasks
    </NavigationLink>
    <NavigationLink indictable href="/how-it-works">
      How it works
    </NavigationLink>
  </Layout>
);

export default Public;
