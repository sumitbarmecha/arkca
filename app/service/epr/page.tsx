import type { Metadata } from "next";
import { HubPage } from "@/components/service/HubPage";
import { getHub } from "@/lib/hubs";

const hub = getHub("epr")!;

export const metadata: Metadata = {
  title: hub.metaTitle,
  description: hub.description,
  alternates: { canonical: hub.path },
};

export default function EprHubRoute() {
  return <HubPage hub={hub} />;
}
