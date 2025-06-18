import { BrainCircuit, ShieldCheck, Zap } from "lucide-react";

export const ICON_MAP = {
  BrainCircuit,
  Zap,
  ShieldCheck,
} as const;

export const FEATURES = [
  {
    icon: "BrainCircuit",
    title: "AI-Powered Analysis",
    description:
      "Get deep, unbiased insights into candidate skills, communication, and confidence.",
  },
  {
    icon: "Zap",
    title: "Streamlined Workflow",
    description:
      "Automate scheduling, screening, and feedback to hire faster than ever.",
  },
  {
    icon: "ShieldCheck",
    title: "Fair & Consistent",
    description:
      "Structured interviews and objective scoring to eliminate bias and ensure fairness.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah K., HR Director",
    company: "Innovate Inc.",
    text:
      "Avioo transformed our hiring process. We're hiring better candidates in half the time. The AI analysis is incredibly accurate and insightful.",
    avatar: `https://placehold.co/100x100/E2E8F0/4A5568?text=SK`,
  },
  {
    name: "David L., Software Engineer",
    company: "Candidate",
    text:
      "The most seamless interview experience I've had. The AI feedback helped me understand my strengths and where I could improve. A game-changer for job seekers.",
    avatar: `https://placehold.co/100x100/E2E8F0/4A5568?text=DL`,
  },
];

export const FAQS = [
  {
    q: "How does the AI scoring work?",
    a: "Our AI analyzes language patterns, speech clarity, and response content against key competencies for the role, providing an objective score without human bias.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use end-to-end encryption for all video and personal data, ensuring complete confidentiality and compliance with privacy regulations.",
  },
  {
    q: "Can I customize the interview questions?",
    a: "Yes, HR teams can create custom question banks tailored to specific roles, or use our library of expertly designed questions for various industries.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Create / Apply",
    description:
      "Hiring managers post a job. Candidates apply and receive an interview link.",
  },
  {
    title: "AI Interview",
    description:
      "Candidates take the structured video interview anytime, anywhere.",
  },
  {
    title: "Review & Hire",
    description:
      "HR gets a detailed analysis report to compare candidates and make the best choice.",
  },
];
