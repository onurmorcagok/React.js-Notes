import React, { Component } from "react";

class Collapse extends Component {
  state = {
    isShow: false,
  };

  showDetail = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.showDetail} className="btn btn-success w-100">
          Card Button
        </button>
        {this.state.isShow ? (
          <div className="collapse show">
            <div className="card card-body">{this.props.children}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
