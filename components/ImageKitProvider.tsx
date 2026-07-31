"use client";

import { ImageKitProvider } from "@imagekit/next";

export default function ImageKitWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/agenticimg">
      {children}
    </ImageKitProvider>
  );
}