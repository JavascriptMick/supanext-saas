import Link from "next/link";
import React from "react";

const AppFooter = () => {
  return (
    <div className="sticky z-50 bottom-0 p-4 bg-base-200">
      <span>
        <Link href="/terms">Terms Of Service</Link>
      </span>
      <span>
        &nbsp;|&nbsp;<Link href="/privacy">Privacy</Link>
      </span>
      <span>
        &nbsp;|&nbsp;
        <button type="button" data-cc="c-settings">
          Cookie settings
        </button>
      </span>
    </div>
  );
};

export default AppFooter;
