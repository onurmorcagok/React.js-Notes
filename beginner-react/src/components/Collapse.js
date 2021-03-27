import React, { Component } from "react";

class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
    };

    // console.log("constructor");
  }

  showDetail = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  render() {
    // console.log("render");
    return (
      <div className="container">
        <button onClick={this.showDetail} className="btn btn-success w-100">
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
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
