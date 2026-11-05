import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/service/HubPage";
import { getHub, hubs } from "@/lib/hubs";

type Props = { params: Promise<{ hub: string }> };

/** Only the five hub URLs that already exist on the live site. Service pages will be added under this folder. */
export const dynamicParams = false;

export function generateStaticParams() {
  // EPR has its own folder (app/service/epr) for its nested stream pages.
  return hubs.filter((h) => h.slug !== "epr").map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hub: slug } = await params;
  const hub = getHub(slug);
  if (!hub) return {};
  return {
    title: hub.metaTitle,
    description: hub.description,
    alternates: { canonical: hub.path },
  };
}

export default async function ServiceHubPage({ params }: Props) {
  const { hub: slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();
  return <HubPage hub={hub} />;
}
