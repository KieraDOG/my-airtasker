// 前端单元测试
// 单元 = 责任
// Single Responsibility
// 责任 = Component
// 前端单元测试 = 前端 Component 测试
// Readable, Maintainable, Reusable
// 
// Testable?

// React?
// JAVA Service 测试好写? => Pure Function
// 给一定的输入 -> 给相同的输出
// JAVA Controller / Modal
// Controller 和 Network 请求耦合
// Modal 和 DB 耦合
// Component 高内聚，低耦合
// Mock 边界，测试本身

// React DOM 耦合一起，浏览器耦合
// Enzyme, React Testing Lib

// Enzyme
// React -> Tree View Object

// 测试写多少?
// 1. 涵盖 Component 调用
// 2. 没有必要测静态显示

import React from 'react';
import { shallow } from 'enzyme'; 
import App from './App';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import AuthenticationProvider from './components/AuthenticationProvider';

describe('<App />', () => {
  it('renders', ()  => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(AuthenticationProvider)).toHaveLength(1);
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(Banner)).toHaveLength(1);
  });
});
