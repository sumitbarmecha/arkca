/**
 * Google reviews supplied by the client for now (copied as posted).
 *
 * Two of them (Ahona Sarkar, Sayantan Gope) describe working AT ARKCA, so they are
 * labelled "Team member" rather than passed off as client reviews. Replace or add real
 * client reviews when available. Relative dates ("7 months ago") are left out because they
 * go stale. The only edit to the text is dropping an emoji from Neha Kashyap's review.
 */

export type Reviewer = "Client" | "Team member" | "Google reviewer";

export type Testimonial = {
  name: string;
  /** What we can honestly say about the reviewer, taken from what they wrote. */
  relation: Reviewer;
  quote: string;
  /** Short phrase from the review, shown highlighted on the featured card. */
  highlight?: string;
  /** Words lifted from the review, shown as chips on the featured card. */
  traits?: string[];
};

export const testimonials: Testimonial[] = [
  {
    name: "Sukanya Bose",
    relation: "Client",
    quote:
      "I had a really great experience with Arcka Corporate. Their team is extremely professional, responsive, and knowledgeable when it comes to compliance and corporate services. What stood out the most was how smoothly they handled everything—from documentation to execution—without any confusion or delays.",
    highlight: "how smoothly they handled everything—from documentation to execution",
    traits: ["Professional", "Responsive", "Knowledgeable"],
  },
  {
    name: "Ahona Sarkar",
    relation: "Team member",
    quote:
      "My first corporate experience at Arkca Corporate Solutions Private Limited was truly wonderful. The working environment is very comfortable and supportive. The behaviour of the senior leaders, mentors, team leaders, HR, and managers is very kind and helpful. I am very grateful for this opportunity. It has been a memorable experience for me.",
  },
  {
    name: "Sayantan Gope",
    relation: "Team member",
    quote:
      "Working at Arkca Corporate Solutions Pvt Ltd has been a great learning experience. The company provides a good environment for freshers and helps in building strong knowledge in corporate compliance, backend operations, and professional communication. The team is supportive, and management is approachable when it comes to guidance and resolving issues.",
  },
  {
    name: "Neha Kashyap",
    relation: "Google reviewer",
    quote: "Wonderful experience supportive team beautiful environment...",
  },
];

/**
 * Rating shown on the current ARKCA about page (Trustindex widget, Google source).
 * It changes over time, so re-check it before launch or remove it.
 */
export const googleRating = { score: 4.4, reviews: 52 } as const;
