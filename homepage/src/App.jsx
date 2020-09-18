import React from "react";
import ReactDOM from "react-dom";
import Chat from "chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

const App = () => (
  <div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ad
      blanditiis eos ducimus obcaecati, mollitia et facere tenetur est
      recusandae?
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam
      nam cum odio nisi mollitia earum omnis provident deleniti, quae asperiores
      saepe perspiciatis iste. Beatae, dolor aspernatur? Dolor, suscipit ad.
    </p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
