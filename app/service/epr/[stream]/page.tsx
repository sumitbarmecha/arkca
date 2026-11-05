import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EprStreamPage } from "@/components/service/EprStreamPage";
import { eprStreams, getStream } from "@/lib/epr";

type Props = { params: Promise<{ stream: string }> };

/** Only the ten EPR stream URLs that exist on the live site. */
export const dynamicParams = false;

export function generateStaticParams() {
  return eprStreams.map((s) => ({ stream: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stream: slug } = await params;
  const stream = getStream(slug);
  if (!stream) return {};
  return {
    title: stream.metaTitle,
    description: stream.description,
    alternates: { canonical: `/service/epr/${stream.slug}/` },
  };
}

export default async function EprStreamRoute({ params }: Props) {
  const { stream: slug } = await params;
  const stream = getStream(slug);
  if (!stream) notFound();
  return <EprStreamPage stream={stream} />;
}
