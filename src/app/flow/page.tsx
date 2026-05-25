import { Suspense } from "react";
import FlowShell from "@/components/features/Recomendation/FlowShell";

export default function FlowPage() {
  return (
    <Suspense>
      <FlowShell />
    </Suspense>
  );
}