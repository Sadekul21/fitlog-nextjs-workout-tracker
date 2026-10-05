"use client";

import FitlogProvider from "@/context/FitlogContext";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

const AppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <FitlogProvider>
      {children}

      <ToastContainer
        position="top-right"
        theme="dark"
        autoClose={2000}
      />
    </FitlogProvider>
  );
};

export default AppProvider;
