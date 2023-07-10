import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1> index page</h1>
      {
        <ul >
          <li>
            <Link href="AboutPage/1">yash</Link>
          </li>
          <li>
            <Link href="AboutPage/2">Vaibhav</Link>
          </li>
          <li>
            <Link href="AboutPage/3">Suresh</Link>
          </li>
        </ul>
      }
    </div>
  );
};

export default index;
