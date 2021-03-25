import React from 'react';

const withAPI = ({
  callAPI,
  onSuccess,
  onError,
}) => (Component) => {
  class WithAPI extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isServerRequesting: false,
        serverResponse: undefined,
      };

      this.handleServerResponse = this.handleServerResponse.bind(this);
      this.handleServerRequest = this.handleServerRequest.bind(this);
      this.callAPI = this.callAPI.bind(this);
    }

    handleServerResponse(serverResponse) {
      this.setState({
        serverResponse,
      });
    }

    handleServerRequest(isServerRequesting) {
      this.setState({
        isServerRequesting,
      });
    }

    callAPI() {
      this.handleServerRequest(true);
      this.handleServerResponse();

      callAPI(this.props)
        .then((response) => {
          this.handleServerRequest(false);
          this.handleServerResponse(response);

          onSuccess(this.props);

          return response;
        })
        .catch((error) => {
          this.handleServerRequest(false);
          this.handleServerResponse(error.response);

          onError(this.props);

          return error.response;
        });
    }

    render() {
      const { serverResponse, isServerRequesting } = this.state;

      return (
        <Component
          serverResponse={serverResponse}
          isServerRequesting={isServerRequesting}
          callAPI={this.callAPI}
          {...this.props}
        />
      );
    }
  }

  return WithAPI;
};

export default withAPI;
