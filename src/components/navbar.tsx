import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const dockIconClassName =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

const tooltipClassName =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

function TooltipLabel({ label }: { label: string }) {
  return (
    <TooltipContent side="top" sideOffset={8} className={tooltipClassName}>
      <p>{label}</p>
      <TooltipArrow className="fill-primary" />
    </TooltipContent>
  );
}

function CvMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const cvButton = (
    <button
      type="button"
      onClick={() => setOpen((current) => !current)}
      aria-label="Choose resume"
      aria-expanded={open}
    >
      <DockIcon className={`${dockIconClassName} group`}>
        <span className="relative flex size-full items-center justify-center text-xs font-semibold tracking-wide">
          <span className="transition-opacity group-hover:opacity-0">CV</span>
          <ArrowUpRight
            className="absolute size-4 opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
        </span>
      </DockIcon>
    </button>
  );

  return (
    <div ref={menuRef} className="relative">
      {open ? (
        cvButton
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>{cvButton}</TooltipTrigger>
          <TooltipLabel label="Resume" />
        </Tooltip>
      )}

      {open ? (
        <div className="absolute bottom-[calc(100%+0.75rem)] left-1/2 z-50 w-64 -translate-x-1/2 rounded-2xl border border-border bg-card/95 p-2 text-card-foreground shadow-[0_16px_45px_-18px_rgba(0,0,0,0.45)] backdrop-blur-3xl dark:shadow-[0_16px_45px_-18px_rgba(0,0,0,0.85)]">
          <div className="flex flex-col gap-1">
            {DATA.cvOptions.map((option) =>
              "href" in option && option.href ? (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{option.label}</span>
                  <ArrowUpRight
                    className="size-3.5 text-muted-foreground transition-colors group-hover:text-foreground"
                    aria-hidden
                  />
                </a>
              ) : (
                <div
                  key={option.label}
                  aria-disabled="true"
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground"
                >
                  <span>{option.label}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em]">
                    Soon
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className="rounded-2xl cursor-pointer size-full bg-background p-0 text-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipLabel label={item.label} />
            </Tooltip>
          );
        })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className={dockIconClassName}>
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipLabel label={name} />
              </Tooltip>
            );
          })}
        <CvMenu />
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipLabel label="Theme" />
        </Tooltip>
      </Dock>
    </div>
  );
}
