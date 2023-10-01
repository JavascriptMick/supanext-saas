"use client";

import React from "react";
import { Icon } from "@iconify/react";

const ClientIcon = ({ icon, className="" }: { icon: string, className?: string }) => {
  return <Icon icon={icon} className={className}/>;
};

export default ClientIcon;
