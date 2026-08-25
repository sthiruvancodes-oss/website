import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative rounded-2xl border border-border/70 bg-card/70 p-10 backdrop-blur-md shadow-sm">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border/70 bg-card/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
        <span className="text-sm font-medium text-muted-foreground">{DATA.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden rounded-2xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
        </p>
      </div>
    </div>
  );
}

