// Header

// 左面的 logo, 作为 link 跳转到主页
// 中间 navigation，
// Post a task button，点击弹出 Post a task 弹窗
// Categories，下拉菜单
// Browse tasks，作为 link 跳转 tasks 页面
// How it works，作为 link 跳转 faq 页面
// 所有的 navigation item 都有一样的样式，但是不同的 element?
// navigation item 有的有高亮 border-top，有的没有
// 右面 登陆/注册 Auth
// Sign up，作为 button 显示 Sign up 弹窗
// Log in，作为 button 显示 Log in 弹窗
// Become a tasker，作为 link 跳转到 become a tasker 页面
// 所有的 button 看起来相似，但又不同，不同的颜色，不同的 element

// Header
// Layout, flex, width: 1280px, margin: 0 auto;
// Logo, share height -> flex align-items: center
// Navigation, share height -> flex align-items: center
// Auth, share height -> flex align-items: center
// HeaderItem，所有不是 button 的 item 的 style
// HeaderItem 负责高度和 padding
// HeaderItem hover 颜色
// HeaderItem border-top 的高亮
// 怎么实现 dropdown link 和 button
// Button，负责两个 Button style，
// 一个 Component，有两个渲染方向？
// (JSX, Component, props, state, lifecycle)
// (Component + props)
// Post a task, become a tasker 怎么水平居中？

// * HeaderItem reusable, maintainable?
// * Post a task 弹窗
// * Sign up 弹窗
// * Log in 弹窗
// * Forget password 弹窗
// * 悬浮下拉菜单，显示所有的 categories
// * Button 复用的可能性?

import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Auth from './components/Auth';

const StyledHeader = styled.div`
  border-bottom: 1px solid #ccc;
`;

const Layout = styled.div`
  display: flex;
  align-items: stretch;
  width: 1280px;
  margin: auto;
`;

const Header = () => (
  <StyledHeader>
    <Layout>
      <Logo />
      <Navigation />
      <Auth />
    </Layout>
  </StyledHeader>
);

export default Header;
