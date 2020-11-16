# JR Project 3

## 组内要求

1. StandUp Meeting (Daily - 2 per week)
2. Retro Meeting (Weekly) -> 在本节课结束后下节课开始前进行一次!

- Bus Factor
- 微信里面写代码片段非常困难，Slack （99.99% 澳洲IT公司）
- Retro (Sad, Nature, Happy)
- Sad: 写代码的时候感觉很困难，一些知识点不理解，写起来非常慢 -> Action （我安排组员B每天2个小时和你一起写代码）
- Nature: 我们P3进度有些慢 -> Action （具体哪里慢，如何加快，是否需要请外援）
- Happy: 大家在互相帮助上表现的很积极

- 组内多交流，推荐 Agile （Standup Meeting, Retro Meeting）
- 多开会多讨论少写代码
- Acceptance Criteria (AC) + Due Date
- 组长需要负起责任，调动组员积极性
- 组员需要听从安排，有问题及时向组长反应

1. npx create-react-app
2. 对项目进行一个基础建设 (CSS? Icon? File Structure? Image?)

## CSS
a. CSS 用不用库? 如果用库，用什么库？如果不用库，用什么 CSS 写法
UI Developer -> API Caller

P3: 不用库，我会用 Styled Components 手写一份 CSS 库出来

0. antd
1. antd
2. TO_DO
3. material-UI

b. Icon
font-awesome

## File Structure
c. File Structure?

现在要写 Navigation，Component 放在哪里？怎么放？NavItem Components?
现在要写 Task Page，放在哪里?

/src/components
/src/pages

sub components folder

## Navigation 

AC:

1. 左边有 Logo
2. 中间是 `Post a task` button + page links
3. 左边和中间有竖线分隔
4. `Post a task` 样式是红色高亮
5. 右面是 `Sign up` + `Log in` + `Become a Tasker` link
6. `Sign up` 和 `Log in` button 的样式和 page links 的样式一致
8. `Become a Tasker` 是 button 样式但是是 link 功能
7. `Become a Tasker` 样式是灰色背景 + 蓝色字体
10. 点击 `Sign up` 和 `Log in` 出现相应的弹窗
11. `Sign up` 和 `Log in` 弹窗有...功能
13. Post a task 的样式和以后其他的样式会出现复用的可能性？

`PostATaskModal`
做 Navigation 的组员B这次不做弹窗，只做基本功能
组员C `Post a task` 弹窗
9. `Post a task` 弹窗有...功能

`LoginModal`
组员A来做
8. 点击 `Post a task` 出现 `Post a task` 弹窗

`SignUpModal`
组员D来做
8. 点击 `Post a task` 出现 `Post a task` 弹窗

`Modal`
我们如何做出一个可以让3个地方复用的 Modal

12. 链接跳转到相应页面 (react-router-dom)

多达 20 个复杂的功能

开会！！！！！！！开会！！！！！！！开会！！！！！！！

1. Modal -> click `Log in` or `Sign up` will show a modal
2. Modal is closeable by click close button
3. Modal is closeable by click outside of Modal
4. Modal has a `Log in` or `Sign up` header
5. Modal has a `Don't have a account? Sign Up` or `Already have an account? Log in` Footer
6. Modal has a `Forget password` to open `Forget password` modal
7. Footer Button will open the other Modal

---

7. Log in has a form to submit email and password
8. Log in has not empty email validation
9. Log in has not empty password validation
10. Sign up has ... validation
11. Sign up has ... validation
12. Sign up has ... validation
13. Sign up has ... validation
14. Sign up has T&C
15. Log in will call /auth/log-in api
16. Sign up will call /auth/sign-up api
...

Declarative (props, state)
Component Based (lifecycle)

Readable, Maintainable, Reusable

SOLID

Class 1 (This one)

Form Validation
Connect API

Class 2

HOC (Higher Order Components)
React Context
JWT

Class 3

JWT
Redux

Class 4

Unit test
Build Create React APP, Deploy to S3 (or GithubPages)

1. Email, Password, Confirm Password
2. Validation Email (non-empty, email), Password (8 chars), Confirm Password (same as password)
4. T&C ticks
5. Sign Up
6. Email, Password
7. Validation Email, Password (non-empty)
8. Login
9. Forget Password
10. Email
11. Cancel, Send Button

Out of MVP
3. Google Auth, FaceBook Auth, AppleID Auth


MVP - 最小价值产品 -> MVP 功能 -> MVP 功能 -> ... -> 大型商业化项目
Nothing Prefect

