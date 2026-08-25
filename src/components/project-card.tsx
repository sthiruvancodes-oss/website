import { Badge } from "@/components/ui/badge";
import { ProjectDemo } from "@/components/project-demos";
import { getTechIcon } from "@/components/tech-icons";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

const gifImagePattern = /\.gif(?:[?#].*)?$/i;
const stillImagePattern = /\.(png|jpe?g|avif|webp)(?:[?#].*)?$/i;

function ProjectMediaFrame({
  children,
  mediaGradient,
}: {
  children: React.ReactNode;
  mediaGradient?: string;
}) {
  return (
    <div
      className="relative flex h-44 w-full items-center justify-center overflow-hidden sm:aspect-[16/10] sm:h-auto"
      style={{ background: mediaGradient ?? "#0f172a" }}
    >
      {children}
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  mediaGradient,
}: {
  src: string;
  alt: string;
  mediaGradient?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const isGif = gifImagePattern.test(src);
  const shouldInspect = stillImagePattern.test(src);

  if (!src || imageError) {
    return <ProjectMediaFrame mediaGradient={mediaGradient} />;
  }

  return (
    <ProjectMediaFrame mediaGradient={mediaGradient}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "relative z-10 max-h-[calc(100%-0.75rem)] max-w-[calc(100%-0.75rem)] rounded-xl object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.42)]",
          !isGif && shouldInspect && "project-still-image"
        )}
        onError={() => setImageError(true)}
      />
      {!isGif && shouldInspect && (
        <MousePointer2
          className="project-still-cursor pointer-events-none absolute z-20 size-5 -translate-x-1/2 -translate-y-1/2 fill-black/45 stroke-[2.5] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.75)]"
          aria-hidden
        />
      )}
    </ProjectMediaFrame>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  demo?: string;
  mediaGradient?: string;
  details?: readonly {
    label: string;
    text: string;
  }[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  demo,
  mediaGradient,
  details,
  links,
  className,
}: Props) {
  const [isRevealed, setIsRevealed] = useState(false);
  const hasDetails = Boolean(details?.length);

  const shouldHandleTapReveal = () => (
    typeof window !== "undefined"
    && window.matchMedia("(hover: none), (pointer: coarse)").matches
  );

  const toggleReveal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hasDetails || !shouldHandleTapReveal()) return;
    if ((event.target as HTMLElement).closest("a, button")) return;
    setIsRevealed((current) => !current);
  };

  const toggleRevealFromKeyboard = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasDetails || (event.target as HTMLElement).closest("a, button")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setIsRevealed((current) => !current);
  };

  const media = demo ? (
    <ProjectDemo kind={demo} />
  ) : video ? (
    <ProjectMediaFrame mediaGradient={mediaGradient}>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="relative z-10 h-full w-full rounded-xl object-cover"
      />
    </ProjectMediaFrame>
  ) : image ? (
    <ProjectImage src={image} alt={title} mediaGradient={mediaGradient} />
  ) : (
    <ProjectMediaFrame mediaGradient={mediaGradient} />
  );

  return (
    <div
      className={cn(
        "group relative flex h-[clamp(530px,136vw,560px)] flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-[600px]",
        href ? "cursor-pointer hover:ring-2 hover:ring-muted" : "hover:ring-1 hover:ring-muted",
        hasDetails && "cursor-default sm:cursor-pointer",
        className
      )}
      tabIndex={hasDetails ? 0 : undefined}
      role={hasDetails ? "button" : undefined}
      aria-label={hasDetails ? `${title} project details.` : undefined}
      aria-pressed={hasDetails ? isRevealed : undefined}
      onClick={toggleReveal}
      onKeyDown={toggleRevealFromKeyboard}
    >
      {links && links.length > 0 && (
        <div className="absolute right-2 top-2 z-30 flex flex-wrap justify-end gap-2">
          {links.map((link, idx) => (
            <a
              href={link.href}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
              <Badge
                className="flex h-7 items-center gap-1.5 bg-black px-2.5 text-[11px] text-white hover:bg-black/90"
                variant="default"
              >
                {link.icon}
                {link.type}
              </Badge>
            </a>
          ))}
        </div>
      )}

      <div
        className={cn(
          "flex h-full flex-col transition-opacity duration-150",
          hasDetails && "group-hover:opacity-0 group-focus-visible:opacity-0",
          isRevealed && "opacity-0"
        )}
        aria-hidden={isRevealed}
      >
        <div className="relative shrink-0">{media}</div>
        <div className="flex flex-1 flex-col gap-2 p-3.5 sm:gap-3 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`Open ${title}`}
                onClick={(event) => event.stopPropagation()}
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
          <div className="prose max-w-full flex-1 text-pretty font-sans text-[11.5px] leading-snug text-muted-foreground dark:prose-invert sm:text-xs sm:leading-relaxed">
            <Markdown>{description}</Markdown>
          </div>
          {tags && tags.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1">
              {tags.map((tag) => {
                const Icon = getTechIcon(tag);
                return (
                  <Badge
                    key={tag}
                    className="flex h-6 w-fit items-center gap-1.5 border border-border px-2 text-[11px] font-medium"
                    variant="outline"
                  >
                    {Icon ? (
                      <Icon className="size-3.5 shrink-0 overflow-hidden rounded-[2px] object-contain" />
                    ) : null}
                    {tag}
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {hasDetails && (
        <div
          className={cn(
            "absolute inset-0 z-20 flex flex-col overflow-hidden bg-background px-2 pb-2 pt-1.5 opacity-0 pointer-events-none transition-opacity duration-150 sm:px-3 sm:pb-2.5 sm:pt-2 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:opacity-100",
            isRevealed && "opacity-100 pointer-events-auto"
          )}
        >
          <div className="flex min-h-7 items-center pr-20 sm:pr-32">
            <h3 className="font-semibold">{title}</h3>
          </div>
          <div className="mt-1.5 grid min-h-0 flex-1 content-start gap-1 overflow-hidden pr-1 sm:mt-2 sm:gap-2">
            {details?.map((detail) => (
              <div key={detail.label} className="rounded-lg border border-border/80 bg-muted/30 p-1.5 sm:p-2">
                <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-[9.5px]">
                  {detail.label}
                </p>
                <p className="mt-1 text-[10.5px] leading-tight text-muted-foreground sm:text-[11.5px] sm:leading-snug">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
