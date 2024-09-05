"use client";
import { useSelector } from "react-redux";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  // make sidebar width dynamic based on sidebar state
  const sidebarWidth = useSelector((state: any) => state.index.value);
  return (
    // dynamically apply margin left to the content based on sidebar state 
    <div style={{ marginLeft: sidebarWidth, transition: "ease-in-out 0.1s" }}>
      {children}
    </div>
  );
}
