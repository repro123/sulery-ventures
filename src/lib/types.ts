export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface FAQProps {
  question: string;
  answer: string;
}
