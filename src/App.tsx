import React from "react";
import Albums from "./component/Albums";

const App = () => {
  return (
    <div className="d-flex flex-column gap-4 align-items-center pt-5 bg-dark text-white">
      <div>
        <h1 className="font-bold text-4xl">Albums</h1>
      </div>
      <Albums />
    </div>
  );
};

export default App;
