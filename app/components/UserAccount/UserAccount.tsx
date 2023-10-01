import React from "react";
import UserAccountSwitch from "./UserAccountSwitch";
import UserAccountSignout from "./UserAccountSignout";
import Link from "next/link";
import Image from "next/image";

interface Props {
  user: any;
}

const UserAccount = ({ user }: Props) => {
  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user.user_metadata && user.user_metadata["avatar_url"] ? (
              <Image
                src={user.user_metadata["avatar_url"]}
                alt="avatar image"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/images/avatar.svg"
                alt="default avatar image"
                width={40}
                height={40}
              />
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          {user.email && <li>{user.email}</li>}
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <UserAccountSignout />
          </li>
          <UserAccountSwitch />
        </ul>
      </div>
    </div>
  );
};

export default UserAccount;
