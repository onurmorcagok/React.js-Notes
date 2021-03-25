import React, { Component } from "react";

import PropTypes from "prop-types";

// Class component for "this" using required
class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src={this.props.cardImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.cardTitle}</h5>
            <p className="card-text">{this.props.cardText}</p>
            <p className="card-text">
              <small className="text-muted">{this.props.updateTime}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// Default Props

Card.defaultProps = {
  cardTitle: "Default Card Title",
};

// PropTypes

Card.propTypes = {
  // cardText: PropTypes.string,
  cardText: PropTypes.string.isRequired,
};

export default Card;
