import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>Dashoboard Users</h1>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/user/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/user/1">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/user/1">User 3</Link>
        </li>
        <li>
          <Link href="/dashboard/user/1">User 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
