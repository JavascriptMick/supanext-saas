import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import ClientIcon from "./ClientIcon";
import UserAccount from "./UserAccount/UserAccount";
import Notifications from "./Notifications";

const AppHeader = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session: user },
  } = await supabase.auth.getSession();

  return (
    <div className="navbar bg-base-100">
      <Notifications />
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            {!user && (
              <li>
                <Link href="/signin">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          SupaNext SAAS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user && (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          {!user && (
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link href="/signup">Start for free</Link>
            </li>
          )}
          <li>
            <a
              title="github"
              href="https://github.com/JavascriptMick/supanuxt-saas"
            >
              <ClientIcon icon="mdi:github" />
            </a>
          </li>
        </ul>
      </div>
      {user && <UserAccount user={user} />}
    </div>
  );
};

export default AppHeader;
