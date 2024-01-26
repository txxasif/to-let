"use client";

import { NextAuthProvider } from "./nextAuth-provider";
import ReduxProvider from "./redux-provider";
import ReactQueryProvider from "./tanstack-prover";

export default function AllProviders({ children }) {
  return (
    <NextAuthProvider>
      <ReduxProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ReduxProvider>
    </NextAuthProvider>
  );
}
