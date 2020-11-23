import React from 'react';
import getAuth from '../../apis/getAuth';
import AuthenticationContext from './AuthenticationContext';

// 如果一个程序员什么都不懂
// SOLID
// Readable Maintainable Readable

// 如何写出来
// -> AuthenticationProvider?
// -> TasksProvider

// 如何保证不同水平的程序员写出来的代码风格一致
// 如何降低团队的培训成本

// 自由 vs 独裁

// 独裁 (制定规章制度)
// 所有人必须在规章制度下写代码

// -> Redux

class AuthenticationProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }

    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    getAuth()
      .then((data) => this.setUser(data))
      .catch(() => {});
  }

  setUser(value) {
    this.setState({
      user: value,
    });
  }

  render() {
    const { children } = this.props;
    const { user } = this.state;

    return (
      <AuthenticationContext.Provider value={{ user, setUser: this.setUser }}>
        {children}
      </AuthenticationContext.Provider>
    );
  }
}

export default AuthenticationProvider;