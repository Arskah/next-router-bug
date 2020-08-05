import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div className="container">
      <main className="main">
        <form className="myDiv1" onSubmit={() => history.push(("/page-two"))}>
          <button type="submit">onSubmit</button>
        </form>
      </main>
    </div>
  )
}