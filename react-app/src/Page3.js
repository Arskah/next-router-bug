import React from "react";
import { Link, useHistory } from "react-router-dom";


export default function Home() {
  const history = useHistory();
  return (
    <div className="container">
      <main className="main">
        <form className="myDiv3">
          <Link to="/">
            <button>Link component</button>
          </Link>
        </form>
        <div className="myDiv1">
          <button onClick={() => history.push(("/page-two"))}>Not a Form</button>
        </div>
      </main>
    </div>
  )
}
