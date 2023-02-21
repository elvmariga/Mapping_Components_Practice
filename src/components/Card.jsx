import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <p className="emoji">
          {/* {props.id} */}
          {props.userId}
        </p>
        <p>{props.title}</p>
      </dt>
      <dd>{props.body}</dd>
    </div>
  );
}
export default Card;
