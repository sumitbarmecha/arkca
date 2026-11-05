import { ArrowRight, Mail } from "lucide-react";
import { FaqAccordion, type FaqItem } from "@/components/home/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { consultationHref, contactDetails } from "@/lib/navigation";

/**
 * Home FAQ. Answers are deliberately general: no fees, timelines or legal
 * guarantees, because none of those are confirmed. Replace with the approved
 * FAQ content when the client supplies it.
 */
const faqs: FaqItem[] = [
  {
    question: "How do I know which registrations my business needs?",
    answer:
      "It depends on what you make, import or sell, and on the role your business plays. Tell us about your products and activities in a consultation and we will map the registrations, licences and filings that apply, and the order to handle them in.",
    link: { label: "Book a consultation", href: consultationHref },
  },
  {
    question: "What is EPR and who has to comply?",
    answer:
      "Extended Producer Responsibility makes the businesses that place certain products on the Indian market responsible for how their waste is handled. Producers, importers and brand owners are the usual starting point, and the rules differ by waste stream such as plastic, e-waste, batteries, tyres and used oil.",
    link: { label: "Explore EPR services", href: "/service/epr/" },
  },
  {
    question: "Does ARKCA only handle EPR?",
    answer:
      "No. EPR is where many clients start, but the same team also handles product licences and certifications, company setup and the registrations that follow it, and import and customs filings.",
    link: { label: "Explore licences and certifications", href: "/service/certification-and-compliances/" },
  },
  {
    question: "How does the process work?",
    answer:
      "We start with a 30-minute consultation, then map what applies to your business. You receive a document checklist, we review the paperwork and submit the application on the official portal, and we keep renewals and annual filings on your calendar afterwards.",
  },
  {
    question: "How long will my registration take?",
    answer:
      "Timelines depend on the registration, the authority involved and how complete your documents are, so we do not quote a single number for everything. After we review your case we can tell you what to expect for that specific registration.",
  },
  {
    question: "What happens after I am registered?",
    answer:
      "Many registrations come with ongoing duties such as annual returns and renewals, and authorities sometimes change deadlines or portal requirements. We track these so a filing date does not catch you by surprise.",
  },
  {
    question: "Which documents will I need to prepare?",
    answer:
      "The list depends on the registration. Common examples are business and tax records, purchase and sales invoices, and product details. You get a checklist for your specific case before anything is filed.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-[#d5dcea] bg-[#e8eef7] py-16 md:py-24"
    >
      <Container>
        <Reveal>
          <header className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#c1ccde] bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#47505e]">
              <span className="size-1.5 rounded-full bg-[#536d9b] shadow-[0_0_0_4px_rgba(83,109,155,0.18)]" />
              FAQ
            </p>
            <h2
              id="faq-title"
              className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-[2.75rem]"
            >
              Questions, answered
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#555d6c] md:text-base">
              The things businesses ask us most before they start.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-10 max-w-3xl md:mt-12">
          <FaqAccordion items={faqs} />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-brand p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-display text-lg font-bold tracking-[-0.01em]">
                Still have a question?
              </p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="mt-1 inline-flex items-center gap-2 text-sm text-white/70 no-underline hover:text-accent"
              >
                <Mail className="size-4" aria-hidden />
                {contactDetails.email}
              </a>
            </div>
            <a
              href={consultationHref}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold !text-brand no-underline transition-colors hover:bg-accent-soft"
            >
              Talk to the team
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
