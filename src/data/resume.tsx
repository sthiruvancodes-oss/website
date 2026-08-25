import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Saison Thiruvananthaselvan",
  initials: "ST",
  url: "https://sthiruvancodes-oss.github.io",
  location: "Melbourne, Australia",
  locationLink: "https://www.google.com/maps/place/melbourne+victoria",
  description:
    "IT Network & Systems Administrator. I build automation, accessibility tools, and small products that solve real operational problems.",
  summary:
    "I'm a Computer Science graduate from [Trent University](/#education) (data science) currently working as an [IT Network & Systems Administrator at Hazeldenes](/#work). Before that I automated fundraising data workflows, supported IT operations, and did QA on a federal export-control system. On the side I ship [tools people can actually use](/#projects) — a network health CLI, an accessibility Chrome extension, and a phone-triggered browser agent. I also [hack on real problems under a clock](/#hackathons).",
  avatarUrl: "/me.png",
  ogImage: "/me.png",
  cvOptions: [
    { label: "IT" },
    { label: "Software Engineering" },
  ],
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I like tools that replace a painful manual loop. Here are a few I built recently — from IT ops CLIs to accessibility extensions.",
    },
    hackathons: {
      order: 6, enabled: true,
      label: "Hackathons",
      heading: "I like building things",
      text: "I showed up to the Cursor Toronto hackathon with 90 minutes on the clock, a real problem pulled from Reddit, and a rule that the demo had to actually work. We shipped.",
    },
    photos: {
      order: 7, enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Message me on LinkedIn with a direct question and I'll get back when I can.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sthiruvancodes-oss",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saison-thiruvananthaselvan-482300172/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://www.linkedin.com/in/saison-thiruvananthaselvan-482300172/",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hazeldenes Chicken",
      href: "https://www.hazeldenes.com.au",
      badges: [],
      location: "Melbourne, Victoria, Australia",
      title: "IT Network & Systems Administrator",
      logoUrl: "https://www.google.com/s2/favicons?domain=hazeldenes.com.au&sz=128",
      start: "April 2026",
      end: undefined,
      description:
        "Run day-to-day IT and network operations for a food manufacturing business — keeping systems, connectivity, and internal tooling reliable for a distributed workforce.",
    },
    {
      company: "Community Collective",
      href: "https://communitycollective.com.au",
      badges: [],
      location: "Melbourne, Victoria, Australia",
      title: "Junior Data Automation Specialist",
      logoUrl: "https://www.google.com/s2/favicons?domain=communitycollective.com.au&sz=128",
      start: "September 2025",
      end: "December 2025",
      description:
        "Built a cross-platform Electron app that automates campaign CSV validation with campaign-specific business logic and a non-technical UI. Shipped a Flask + AWS Elastic Beanstalk dashboard that pulled live campaign data and replaced manual reporting. Rule-based checks cut manual QA time by more than 80%.",
    },
    {
      company: "MACA",
      href: "#",
      badges: [],
      location: "Australia",
      title: "IT Specialist",
      logoUrl: "https://avatar.vercel.sh/maca?size=40",
      start: "April 2024",
      end: "October 2025",
      description:
        "Supported IT systems, hardware, and network operations — the unglamorous work that keeps people productive.",
    },
    {
      company: "Global Affairs Canada",
      href: "https://www.international.gc.ca",
      badges: [],
      location: "Gatineau, Quebec, Canada",
      title: "Quality Assurance Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=international.gc.ca&sz=128",
      start: "September 2022",
      end: "December 2022",
      description:
        "Found and fixed bugs on the New Export Import Control System ahead of a version update. Wrote test cases, ran them in IBM Rational Functional Tester, and worked with SEIT teammates to clear impediments.",
    },
  ],
  education: [
    {
      school: "Trent University",
      href: "https://www.trentu.ca",
      degree: "Bachelor of Science, Computer Science — Data Science",
      logoUrl: "https://www.google.com/s2/favicons?domain=trentu.ca&sz=128",
      start: "2020",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "nethealth",
      href: "https://github.com/sthiruvancodes-oss/ICT_ToolsAIG",
      dates: "August 2026",
      active: true,
      description:
        "A network health CLI for the checks I was tired of running by hand before a change: ICMP, TCP, DNS, HTTP, and TLS. Concurrent checks, text/JSON/HTML reports, and exit codes you can drop into a script. 63 mocked tests and CI on Linux, macOS, and Windows.",
      technologies: [
        "Python",
        "CLI",
        "ICMP",
        "DNS",
        "TLS",
        "pytest",
      ],
      details: [
        {
          label: "Goal",
          text: "Replace the pre-change ritual of ping, curl, dig, and openssl with one command that reports whether a host is actually healthy.",
        },
        {
          label: "Why",
          text: "I kept running the same checks by hand before touching production. Missing one meant finding out after the change, not before.",
        },
        {
          label: "Build",
          text: "Python CLI with concurrent ICMP, TCP, DNS, HTTP, and TLS probes. Text/JSON/HTML reports, scriptable exit codes, 63 mocked tests, and CI on Linux, macOS, and Windows.",
        },
        {
          label: "Result",
          text: "A drop-in health check I actually use before network changes, instead of a pile of one-off commands.",
        },
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sthiruvancodes-oss/ICT_ToolsAIG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      demo: "terminal",
      mediaGradient: "#0b1220",
    },
    {
      title: "Instacart Substitution Spotlight",
      href: "https://github.com/sthiruvancodes-oss/instacart-sub",
      dates: "August 2026",
      active: true,
      description:
        "Chrome extension for a visually impaired friend who kept getting groceries he didn't order. Flags items silently set to auto-substitute, colour-codes the options, and lets you change Instacart's real setting in one click. Storage permission only — no network calls, no analytics.",
      technologies: [
        "JavaScript",
        "Chrome Extension",
        "MV3",
        "Accessibility",
      ],
      details: [
        {
          label: "Goal",
          text: "Make Instacart's hidden auto-substitute setting obvious, and let someone change it without hunting through menus.",
        },
        {
          label: "Why",
          text: "A visually impaired friend kept receiving groceries he never ordered because items were silently set to auto-substitute.",
        },
        {
          label: "Build",
          text: "Manifest V3 Chrome extension that flags auto-sub items, colour-codes the options, and writes Instacart's real setting in one click. Storage permission only — no network, no analytics.",
        },
        {
          label: "Result",
          text: "He can see which items will be swapped and lock the original before checkout.",
        },
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sthiruvancodes-oss/instacart-sub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      demo: "extension",
      mediaGradient: "#0f172a",
    },
    {
      title: "Dispatch",
      href: "https://github.com/sthiruvancodes-oss/dispatch-browser-agent",
      dates: "August 2026",
      active: true,
      description:
        "Phone-triggered browser agent with a live Chromium view. Give it a natural-language instruction and Claude drives a real headed browser session while the UI shows the same page.",
      technologies: [
        "Python",
        "browser-use",
        "Claude",
        "Chromium",
      ],
      details: [
        {
          label: "Goal",
          text: "Trigger a real browser agent from a phone, and watch the same Chromium session live while it works.",
        },
        {
          label: "Why",
          text: "Most agents hide the browser. I wanted to see the page move, not just a log of what the model claimed it did.",
        },
        {
          label: "Build",
          text: "Python + browser-use + Claude driving a headed Chromium session. Natural-language instruction in, live view of the same tab out.",
        },
        {
          label: "Result",
          text: "A phone-triggered loop where you can watch the agent click through a real page instead of trusting a transcript.",
        },
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sthiruvancodes-oss/dispatch-browser-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      demo: "browser",
      mediaGradient: "#111827",
    },
    {
      title: "Field Invoice",
      href: "https://github.com/sthiruvancodes-oss/field-invoice",
      dates: "June 2026",
      active: false,
      description:
        "Hackathon product for wedding photographers who close bookings over WhatsApp mid-shoot, then wait days to invoice. Paste a booking line, get an invoice and payment link in seconds, send it over SMS or WhatsApp. We took invoice delay from 3.2 days down to 28 seconds.",
      technologies: [
        "HTML",
        "JavaScript",
        "AI agent",
        "SMS",
        "WhatsApp",
      ],
      details: [
        {
          label: "Goal",
          text: "Turn a WhatsApp booking line into an invoice and payment link before the photographer puts the camera down.",
        },
        {
          label: "Why",
          text: "Wedding photographers close bookings mid-shoot, then wait days to invoice. The delay is where money leaks.",
        },
        {
          label: "Build",
          text: "Paste a booking line, get an invoice and payment link, send it over SMS or WhatsApp. Built in 90 minutes at the Cursor Toronto hackathon.",
        },
        {
          label: "Result",
          text: "Invoice delay went from 3.2 days to 28 seconds. One of 5 groups out of 20 that made it to demo.",
        },
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sthiruvancodes-oss/field-invoice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      demo: "invoice",
      mediaGradient: "#14532d",
    },
  ],
  hackathons: [
    {
      title: "Cursor Toronto Hackathon",
      dates: "June 25th, 2026",
      location: "Toronto, Ontario",
      description:
        "90 minutes, teams of five, a real problem sourced from Reddit, and it had to work. We built Field Invoice so wedding photographers can bill from the field instead of waiting 3.2 days. One of 5 groups out of 20 that made it to demo.",
      image: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
      win: "Demo finalist",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sthiruvancodes-oss/field-invoice",
        },
      ],
    },
  ],
} as const;
