import type { SVGProps } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Golang } from "@/components/ui/svgs/golang";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Icons } from "@/components/icons";

type Icon = (props: SVGProps<SVGSVGElement>) => React.ReactNode;

const Javascript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256">
    <path fill="#F7DF1E" d="M0 0h256v256H0z" />
    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-83.377h24.057v84.275c0 24.926-14.606 36.259-35.916 36.259-19.002 0-30.134-9.867-35.886-21.865m85.982-2.49l19.588-11.341c5.11 8.352 11.695 14.515 23.404 14.515 9.867 0 16.108-4.925 16.108-11.768 0-8.2-6.53-11.085-17.493-15.87l-6.012-2.58c-17.356-7.391-28.871-16.707-28.871-36.352 0-18.073 13.764-31.784 35.228-31.784 15.294 0 26.292 5.328 34.232 19.247l-18.764 12.034c-4.138-7.387-8.618-10.305-15.465-10.305-7.048 0-11.514 4.468-11.514 10.305 0 7.218 4.468 10.14 14.778 14.6l6.013 2.577c20.45 8.782 31.963 17.753 31.963 37.91 0 21.752-17.097 33.668-40.072 33.668-22.463 0-37.057-10.857-44.068-22.972" />
  </svg>
);

const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="90" fill="currentColor" className="text-foreground" />
    <path
      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
      fill="var(--background)"
    />
    <rect x="115" y="54" width="12" height="72" fill="var(--background)" />
  </svg>
);

const Html = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 384 512">
    <path
      fill="#E34F26"
      d="M0 32l34.9 435.9L191.5 480l157.6-12.1L384 32H0zm308.2 120.4L224 360.2l-11.3.3-58.7-145.1-36.8 114.8-14.4.3L60.7 152.4l29.1-.4 25.2 98.5 37.8-119.6 13.4-.3 37.1 120.5 25.2-100.9 29.7-.4z"
    />
  </svg>
);

const Css = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 384 512">
    <path
      fill="#1572B6"
      d="M0 32l34.9 435.9L191.5 480l157.6-12.1L384 32H0zm313.1 80l-4.8 47.3L193 208.6l89.3 26.1-8.4 54.1-76.4-22.6v61.9l-14.6 4.3-14.9-4.4v-64.2l-76.1 22.3-8.3-52.5 89.6-26.4-78.9-25.3 8.4-54.1 81.3 25.5V112l14.9-4.4 14.6 4.4v45.4l81-25.3 8.4 54.1z"
    />
  </svg>
);

const ICON_BY_NAME: Record<string, Icon> = {
  python: Python,
  javascript: Javascript,
  typescript: Typescript,
  react: ReactLight,
  "node.js": Nodejs,
  node: Nodejs,
  nextjs: Nextjs,
  "next.js": Nextjs,
  java: Java,
  "c#": Csharp,
  csharp: Csharp,
  go: Golang,
  golang: Golang,
  postgres: Postgresql,
  postgresql: Postgresql,
  docker: Docker,
  kubernetes: Kubernetes,
  html: Html,
  css: Css,
  tailwind: Icons.tailwindcss as Icon,
  "tailwind css": Icons.tailwindcss as Icon,
};

export function getTechIcon(name: string): Icon | undefined {
  return ICON_BY_NAME[name.trim().toLowerCase()];
}

export { Javascript, Nextjs, Html, Css };
