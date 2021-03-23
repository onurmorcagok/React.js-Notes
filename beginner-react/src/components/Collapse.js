import React from "react";

const Collapse = (props) => {
  return (
    <div className="container">
      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href={"#".concat(props.href)}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Card Button
      </a>
      <div className="collapse" id={props.href}>
        <div className="card card-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;
