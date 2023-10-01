/*
This store manages User and Account state including the ActiveAccount
It is used in the Account administration page and the header due to it's account switching features.

Note) Other pages don't need this state as the dbUser and activeAccount are available on the TRPC Context 
so that other routers can use them to filter results to the active user and account transparently.

[State Map]

(supabase) user -> dbUser                       <-- this.dbUser
                     |
                     |
  membership-----membership------membership*    <-- this.dbUser.memberships (*this.activeMembership)
       |             |               |
    account       account         acccount**    <--**(id=this.activeAccountId)
                                     |
                   membership-----membership------membership     <-- this.activeAccountMembers
                       |             |               |
                    account       account        acccount*
*/
export interface AccountStoreState {
  dbUser: any | null; //TODO - should be FullDBUser
  activeAccountId: number | null;
  activeAccountMembers: any[]; //TODO - should be MembershipWithUser
  signout: () => void;
}

import { create } from "zustand";

export const useAccountStore = create<AccountStoreState>((set) => ({
  dbUser: null,
  activeAccountId: null,
  activeAccountMembers: [],
  signout: () =>
    set({ dbUser: null, activeAccountId: null, activeAccountMembers: [] }),
}));
