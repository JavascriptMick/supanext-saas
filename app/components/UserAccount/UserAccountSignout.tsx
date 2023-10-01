"use client";

import { Database } from "@/lib/database.types";
import { useAccountStore } from "@/stores/account.store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const UserAccountSignout = () => {
  const router = useRouter();
  const accountStoreSignout = useAccountStore((state) => state.signout);
  const signout = async () => {
    const supabase = createClientComponentClient<Database>();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    } else {
      if (accountStoreSignout) {
        accountStoreSignout();
      }
      router.push("/");
    }
  };
  return (
    <Link href="#" onClick={signout}>
      Signout
    </Link>
  );
};

export default UserAccountSignout;
