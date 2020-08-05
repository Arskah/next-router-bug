import React from "react";
import { useHistory } from "react-router-dom";

export default function PageTwo() {
  const history = useHistory();
  return (
    <div className="container">
      <main className="main">
        <form className="myDiv2">
          <button onClick={() => history.push(("/page-three"))}>onClick</button>
        </form>
      </main>
    </div>
  )
}
