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
  url: "https://saisonthiru.com",
  location: "Melbourne, Australia",
  locationLink: "https://www.google.com/maps/place/melbourne+victoria",
  description:
    "Software Engineer and IT Systems and Network Administrator in Melbourne.",
  summary:
    "Computer Science grad from [Trent University](/#education), data science stream. I work as an [IT Network & Systems Administrator at Hazeldenes](/#work). Before that I automated fundraising reports, did IT support, and QA on a federal export-control system. [Projects](/#projects) so far: a network health CLI, an Instacart accessibility extension, and a phone-triggered browser agent. I also [show up to Cursor hackathons](/#hackathons) when I can.",
  avatarUrl: "/me.png",
  ogImage: "/me.png",
  cvOptions: [
    { label: "Software Engineering", href: "/Saison_Thiruvananthaselvan_Software_Engineer.pdf" },
    { label: "IT Australia", href: "/Saison_Thiruvananthaselvan_IT_Australia.pdf" },
    { label: "IT Canada", href: "/Saison_Thiruvananthaselvan_IT_Canada.pdf" },
  ],
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "Projects",
      heading: "Things I've built",
      text: "Most of these started as a job I was tired of doing by hand.",
    },
    hackathons: {
      order: 6, enabled: true,
      label: "Hackathons",
      heading: "Build under a clock",
      text: "A few Cursor weekends. Some shipped to demo. One turned into Dispatch.",
    },
    photos: {
      order: 7, enabled: false,
      heading: "Photos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Say hi",
      text: "LinkedIn is the easiest way to reach me.",
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
        "Day-to-day IT and network ops at a food manufacturing site. Servers, connectivity, accounts, and the internal tools people need to keep working.",
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
        "Built an Electron app that checks campaign CSVs against campaign-specific rules, with a UI that non-technical staff can use. Also shipped a Flask + AWS Elastic Beanstalk dashboard that pulled live campaign data so people weren't exporting reports by hand. Rule-based checks cut manual QA time by more than 80%.",
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
        "IT support. Hardware, accounts, network issues, and getting people back online.",
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
        "Found and fixed bugs on the New Export Import Control System before a version update. Wrote test cases, ran them in IBM Rational Functional Tester, and worked with the SEIT team to clear blockers.",
    },
  ],
  education: [
    {
      school: "Trent University",
      href: "https://www.trentu.ca",
      degree: "Bachelor of Science, Computer Science (Data Science)",
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
        "CLI for the checks I used to run by hand before a change: ICMP, TCP, DNS, HTTP, and TLS. Concurrent probes, text/JSON/HTML reports, and exit codes you can drop into a script. 63 mocked tests and CI on Linux, macOS, and Windows.",
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
          text: "One command that tells me if a host is healthy before I change anything.",
        },
        {
          label: "Why",
          text: "I was running ping, curl, dig, and openssl separately. Easy to skip one.",
        },
        {
          label: "Build",
          text: "Python CLI. Concurrent ICMP, TCP, DNS, HTTP, and TLS probes. Reports in text, JSON, or HTML. 63 mocked tests. CI on Linux, macOS, and Windows.",
        },
        {
          label: "Result",
          text: "I run this before network changes now, instead of a pile of one-off commands.",
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
        "Chrome extension for a visually impaired friend who kept getting groceries he didn't order. It flags items set to auto-substitute, colour-codes the options, and lets you change Instacart's setting in one click. Storage permission only. No network calls, no analytics.",
      technologies: [
        "JavaScript",
        "Chrome Extension",
        "MV3",
        "Accessibility",
      ],
      details: [
        {
          label: "Goal",
          text: "Make Instacart's auto-substitute setting obvious, and make it easy to turn off.",
        },
        {
          label: "Why",
          text: "A friend kept receiving groceries he never ordered. Items were set to auto-substitute and he couldn't see that.",
        },
        {
          label: "Build",
          text: "Manifest V3 Chrome extension. Flags auto-sub items, colour-codes the options, writes Instacart's setting in one click. Storage permission only. No network, no analytics.",
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
        "Browser agent you trigger from a phone, with a live Chromium view. Built at the Cursor x Intuit hackathon with Davies (Elise AI), Akshin Makkar (Mercor), and Manan Joshi. You type an instruction, Claude drives a headed browser, and the UI shows the same page.",
      technologies: [
        "Python",
        "browser-use",
        "Claude",
        "Chromium",
      ],
      details: [
        {
          label: "Goal",
          text: "Start a browser agent from my phone and watch the same Chromium window while it works.",
        },
        {
          label: "Why",
          text: "A lot of agents hide the browser. I wanted to see the page, not a log after the fact.",
        },
        {
          label: "Build",
          text: "Python, browser-use, and Claude driving a headed Chromium session. Built with Davies, Akshin, and Manan at the Cursor x Intuit PM hackathon. Instruction in, live view of the same tab out.",
        },
        {
          label: "Result",
          text: "A phone-triggered loop where you can watch the agent click through a page instead of trusting a transcript.",
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
        "Hackathon project for wedding photographers who book over WhatsApp mid-shoot, then take days to invoice. Paste a booking line, get an invoice and payment link, send it over SMS or WhatsApp. Invoice time went from 3.2 days to 28 seconds.",
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
          text: "They close the booking on WhatsApp during a shoot, then invoice days later.",
        },
        {
          label: "Build",
          text: "Paste a booking line, get an invoice and payment link, send it over SMS or WhatsApp. Built in 90 minutes at the Cursor Toronto hackathon.",
        },
        {
          label: "Result",
          text: "Invoice time went from 3.2 days to 28 seconds. One of 5 groups out of 20 that made it to demo.",
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
      title: "Cursor x Intuit Hackathon",
      dates: "August 2026",
      location: "Toronto, Ontario",
      description:
        "PM-focused Cursor x Intuit weekend. Built Dispatch with Davies (Product Solutions at Elise AI, UsersCRM and VoiceAI), Akshin Makkar (PM at Mercor), and Manan Joshi (PM, idea support). Phone-triggered browser agent with a live Chromium view.",
      image: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sthiruvancodes-oss/dispatch-browser-agent",
        },
      ],
    },
    {
      title: "Cursor Hackathon",
      dates: "July 2026",
      location: "Toronto, Ontario",
      description:
        "Showed up and built. Didn't make it to the demo stage this time.",
      image: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
    },
    {
      title: "Cursor Toronto Hackathon",
      dates: "June 25th, 2026",
      location: "Toronto, Ontario",
      description:
        "90 minutes, teams of five, a problem from Reddit, and it had to work. We built Field Invoice so wedding photographers can bill from the field instead of waiting days. One of 5 groups out of 20 that made it to demo.",
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
