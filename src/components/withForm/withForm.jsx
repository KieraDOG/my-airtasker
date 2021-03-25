import React from 'react';

// 我们没有借用任何工具去完成这部分的重构
// 我们用的是基本的 JS 概念，函数是一等公民，Scope，闭包
// 更好的前端开发，写更好的 React，
// AngularJS（半年 + 3000），angular（半年 + 3000），React（半年 + 3000），
// 本质的技术，算盘 -》 计算器 -》 计算机 -》 超算 -》 量子计算机 （数学，物理）
// Jquery, AngularJS, angular, Vue, React, （JavaScript）
// React, JSX
// React -> JS
// Better React -> JS

const withForm = (field) => (Component) => {
  class WithForm extends React.Component {
    constructor(props) {
      super(props);

      const getInitialData = () => Object
        .keys(field)
        .reduce((acc, cur) => ({
          ...acc,
          [cur]: '',
        }), {});

      this.state = {
        data: getInitialData(),
        isFormTouched: false,
      };

      this.getError = this.getError.bind(this);
      this.handleFormTouch = this.handleFormTouch.bind(this);
      this.handleDataChange = this.handleDataChange.bind(this);
      this.validateForm = this.validateForm.bind(this);
    }

    getError() {
      const { data } = this.state;

      const error = {};

      Object.keys(field).forEach((key) => {
        const { validations } = field[key];
        validations.forEach(({ validator, errorMessage }) => {
          const valid = validator(data);

          if (valid) {
            return;
          }

          error[key] = errorMessage;
        });
      });

      return error;
    }

    handleFormTouch() {
      this.setState({
        isFormTouched: true,
      });
    }

    handleDataChange(key) {
      return (event) => {
        const dataToChange = {
          [key]: event.target.value,
        };

        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            ...dataToChange,
          },
        }));
      };
    }

    validateForm() {
      const error = this.getError();

      return Object.keys(error).length === 0;
    }

    render() {
      const { data, isFormTouched } = this.state;
      
      return (
        <Component
          data={data}
          isFormTouched={isFormTouched}
          getError={this.getError}
          handleFormTouch={this.handleFormTouch}
          handleDataChange={this.handleDataChange}
          validateForm={this.validateForm}
          {...this.props}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
