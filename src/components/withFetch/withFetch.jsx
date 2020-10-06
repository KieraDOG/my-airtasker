/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

const withFetch = (Component) => {
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        loading: false,
      };

      this.fetch = this.fetch.bind(this);
    }

    fetch(onFetch, errorMessage) {
      this.setState({
        error: null,
        loading: false,
      });

      return onFetch()
        .then((res) => {
          this.setState({
            loading: false,
          });

          if (!res.ok) {
            throw res;
          }

          const token = res.headers.get('X-Auth-Token');
          if (token) {
            localStorage.setItem('token', token);
          }

          return res.json();
        })
        .catch((error) => {
          if (errorMessage && errorMessage[error.status]) {
            this.setState({
              error: errorMessage[error.status],
            });
          }

          throw error;
        });
    }

    render() {
      const { error, loading } = this.state;

      return (
        <Component
          {...this.props}
          error={error}
          loading={loading}
          fetch={this.fetch}
        />
      );
    }
  }

  return Wrapper;
};

export default withFetch;
