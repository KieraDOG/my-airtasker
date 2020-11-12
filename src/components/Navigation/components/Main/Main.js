import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import NavItem from '../NavItem';

const LINKS = [{
  key: 'categories',
  href: '/',
  children: 'Categories'
}, {
  key: 'browse_tasks',
  href: '/',
  children: 'Browse tasks'
}, {
  key: 'how_it_works',
  href: '/',
  children: 'How it works'
}];

const BORDER_GAP = '20px';

const Layout = styled.div`
  border-left: 1px solid #ccc;
  padding-left: ${BORDER_GAP};
  margin-left: ${BORDER_GAP};
  display: flex;
  align-items: center;
`;

const PostATask = styled(NavItem)`
  padding-top: 0;
  padding-left: 0;
  padding-bottom: 0;
`;

const Link = styled(NavItem)`
  display: block;
  text-decoration: none;
  color: #545a77;
`;

const Main = () => (
  <Layout>
    <PostATask>
      <Button size="sm" variant="primary">Post a task</Button>
    </PostATask>
    {LINKS.map((l) => (
      <Link 
        indictable
        highlight
        key={l.key} 
        as="a" 
        href={l.href}
      >
        {l.children}
      </Link>
    ))}
  </Layout>
);

export default Main;
