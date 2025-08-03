"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const UnauthorizedToast = () => {
  useEffect(() => {
    toast.error("You are not authorized to access this page. Please log in.", {
      description: "Redirecting to login page...",
      duration: 5000,
    });
  }, []);

  return null;
};

export default UnauthorizedToast;
