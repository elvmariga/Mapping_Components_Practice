import React from "react";
import Card from "./Card";
import details from "../emojipedia";

function Entry({ userId, title, body }) {
  return <Card userId={userId} title={title} body={body} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {details.map((detail) => (
          <Entry key={detail.id} {...detail} />
        ))}
      </dl>
    </div>
  );
}

export default App;
