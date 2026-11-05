import { createElement } from "react";
import {
  Activity,
  Anchor,
  Award,
  BadgeCheck,
  BatteryCharging,
  Building2,
  Car,
  CircleDot,
  Cog,
  Container,
  Cpu,
  Droplets,
  FilePen,
  FileText,
  Fish,
  Globe,
  Handshake,
  KeyRound,
  Landmark,
  Layers,
  Leaf,
  Lock,
  type LucideIcon,
  Magnet,
  Package,
  Pill,
  RadioTower,
  Receipt,
  RefreshCw,
  Rocket,
  Scale,
  ScrollText,
  ShieldCheck,
  Ship,
  Stamp,
  Store,
  Trash2,
  Truck,
  User,
  Users,
  Utensils,
  Wheat,
  Wifi,
  Zap,
  FileSignature,
  HardHat,
} from "lucide-react";

/** Last path segment, used as a stable key for a link. */
export function slugOf(href: string): string {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

const icons: Record<string, LucideIcon> = {
  // EPR
  "plastic-waste": Package,
  "packaging-and-sanitary-waste": Package,
  "e-waste": Cpu,
  "battery-waste": BatteryCharging,
  "tyre-waste": CircleDot,
  "used-oil": Droplets,
  "end-of-life-vehicle": Car,
  "solid-waste-management": Trash2,
  "non-ferrous-metal": Magnet,
  "construction-and-demolition": HardHat,
  "sso-common-epr-portal": KeyRound,
  // Licences and certifications
  "bis-crs": BadgeCheck,
  wpc: Wifi,
  "wpc-eta": RadioTower,
  lmpc: Scale,
  "fssai-registration-and-compliance": Utensils,
  cdsco: Pill,
  apeda: Wheat,
  mpeda: Fish,
  "spice-board-registration": Leaf,
  capexil: Ship,
  eepc: Cog,
  cepa: Handshake,
  "iso-certification": Award,
  "msme-certification": Store,
  dsc: FileSignature,
  "trade-mark": Stamp,
  "trade-license": ScrollText,
  "tds-filing-registration-and-compliance": Receipt,
  // Business setup
  "company-formation": Building2,
  "llp-formation": Users,
  "one-person-company": User,
  "dpiit-startup-registration": Rocket,
  "gst-registration-and-compliance": Receipt,
  "roc-compliance": FileText,
  "iec-registration-and-compliance": Globe,
  rcmc: Stamp,
  // Import and customs
  "noc-for-dgft-steel-import-moefcc": ShieldCheck,
  adcode: Landmark,
  "ice-gate": Container,
  "ice-gate-modification": FilePen,
  "icegate-for-freight-forwarders": Truck,
  "advance-authorisation": Zap,
  "iec-renewal": RefreshCw,
  "iec-modification": FilePen,
  "sims-pims-aims-cims": Activity,
  scomet: Lock,
};

/** Renders the icon for a menu link. Uses createElement so no component is created during render. */
export function MenuIcon({
  href,
  className,
  strokeWidth,
}: {
  href: string;
  className?: string;
  strokeWidth?: number;
}) {
  return createElement(icons[slugOf(href)] ?? Layers, {
    className,
    strokeWidth,
    "aria-hidden": true,
  });
}

/**
 * One-line descriptions for the menu. A `hint` in navigation.ts always wins.
 * These only restate what the service is. They make no claims about timing,
 * price or outcome.
 */
const descriptions: Record<string, string> = {
  // EPR
  "plastic-waste": "Measure plastic packaging placed on the market",
  "packaging-and-sanitary-waste": "Packaging and sanitary waste duties",
  "e-waste": "Electrical and electronic equipment",
  "battery-waste": "Battery producer and importer duties",
  "tyre-waste": "Tyre producer and importer duties",
  "used-oil": "Used oil registration and returns",
  "end-of-life-vehicle": "End-of-life vehicle compliance",
  "solid-waste-management": "Solid waste management compliance",
  "non-ferrous-metal": "Non-ferrous metal waste",
  "construction-and-demolition": "Construction and demolition waste",
  "sso-common-epr-portal": "Common EPR portal access",
  // Licences
  "spice-board-registration": "Spice exporter registration",
  "iso-certification": "Quality and management standards",
  "msme-certification": "Udyam registration for MSMEs",
  "trade-mark": "Protect your brand name and logo",
  "trade-license": "Local licence to operate a business",
  // Business setup
  "company-formation": "Incorporate a company in India",
  "llp-formation": "Limited liability partnership registration",
  "one-person-company": "Single-owner company structure",
  "dpiit-startup-registration": "Startup recognition under DPIIT",
  "gst-registration-and-compliance": "Registration, returns and compliance",
  "roc-compliance": "Annual filings with the Registrar of Companies",
  "iec-registration-and-compliance": "Importer-exporter code for trade",
  // Import and customs
  "noc-for-dgft-steel-import-moefcc": "No-objection certificates from DGFT, steel and MoEFCC authorities",
  "ice-gate-modification": "Update your ICEGATE registration details",
  "icegate-for-freight-forwarders": "Customs filing access for freight forwarders",
  "advance-authorisation": "Duty-free imports for export production",
  "iec-renewal": "Keep your import-export code active",
  "iec-modification": "Update the details on your IEC",
};

export function descFor(href: string, hint?: string): string | null {
  return hint ?? descriptions[slugOf(href)] ?? null;
}

/** Short line under each group title, used where a group has its own panel. */
export const groupBlurbs: Record<string, string> = {
  "Product and market compliance": "Approvals to sell products in India",
  "Export registrations": "Registrations for exporters",
  "Business credentials": "Certificates and credentials for your business",
};
