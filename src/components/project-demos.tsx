import { MousePointer2 } from "lucide-react";

function DemoFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-44 w-full items-center justify-center overflow-hidden sm:aspect-[16/10] sm:h-auto ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function TerminalDemo() {
  return (
    <DemoFrame className="bg-[#0b1220] p-3">
      <div className="relative z-10 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] overflow-hidden rounded-xl border border-white/10 bg-black/80 p-3 font-mono text-[10px] leading-relaxed text-zinc-200 shadow-[0_0_20px_rgba(0,0,0,0.42)] sm:text-[11px]">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-yellow-400/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[9px] text-zinc-500">nethealth</span>
        </div>
        <p className="text-zinc-400">
          <span className="text-emerald-400">$</span> nethealth check gateway.local
        </p>
        <div className="mt-1.5 space-y-0.5">
          <p className="demo-line demo-line-1 text-emerald-300">ICMP     12ms   ok</p>
          <p className="demo-line demo-line-2 text-emerald-300">TCP:443  18ms   ok</p>
          <p className="demo-line demo-line-3 text-emerald-300">DNS      9ms    ok</p>
          <p className="demo-line demo-line-4 text-emerald-300">TLS      41ms   ok</p>
          <p className="demo-line demo-line-5 text-zinc-400">exit 0 · 4/4 healthy</p>
        </div>
      </div>
    </DemoFrame>
  );
}

export function ExtensionDemo() {
  return (
    <DemoFrame className="bg-[#0f172a] p-3">
      <div className="relative z-10 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] overflow-hidden rounded-xl border border-white/10 bg-white p-3 text-[10px] text-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.42)] sm:text-[11px]">
        <p className="mb-2 font-semibold tracking-tight">Cart · 3 items</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-lg bg-zinc-100 px-2 py-1.5">
            <span>Oat milk</span>
            <span className="text-[9px] text-zinc-500">keep original</span>
          </div>
          <div className="demo-sub-row relative flex items-center justify-between overflow-hidden rounded-lg px-2 py-1.5">
            <span>Bananas</span>
            <span className="demo-sub-label text-[9px] font-semibold uppercase tracking-wide" />
          </div>
          <div className="flex items-center justify-between rounded-lg bg-zinc-100 px-2 py-1.5">
            <span>Eggs</span>
            <span className="text-[9px] text-zinc-500">keep original</span>
          </div>
        </div>
        <MousePointer2
          className="demo-sub-cursor pointer-events-none absolute z-20 size-4 fill-black/45 stroke-[2.5] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.75)]"
          aria-hidden
        />
      </div>
    </DemoFrame>
  );
}

export function BrowserDemo() {
  return (
    <DemoFrame className="bg-[#111827] p-3">
      <div className="relative z-10 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.42)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
          <span className="size-2 rounded-full bg-red-400/80" />
          <span className="size-2 rounded-full bg-yellow-400/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          <div className="ml-2 flex-1 truncate rounded-md bg-black/40 px-2 py-0.5 font-mono text-[9px] text-zinc-400">
            claude · open hazeldenes.com and check DNS
          </div>
        </div>
        <div className="relative h-[calc(100%-1.75rem)] overflow-hidden bg-zinc-100">
          <div className="project-still-image absolute inset-0 bg-[linear-gradient(180deg,#e2e8f0_0%,#f8fafc_40%,#dbeafe_100%)]" />
          <div className="absolute left-4 top-4 w-2/3 rounded-md bg-white p-2 shadow-sm">
            <div className="h-2 w-24 rounded bg-zinc-300" />
            <div className="mt-2 h-1.5 w-full rounded bg-zinc-200" />
            <div className="mt-1 h-1.5 w-4/5 rounded bg-zinc-200" />
          </div>
          <div className="absolute bottom-3 right-3 rounded-md bg-emerald-600 px-2 py-1 text-[9px] font-medium text-white">
            DNS ok · 9ms
          </div>
          <MousePointer2
            className="project-still-cursor pointer-events-none absolute z-20 size-5 -translate-x-1/2 -translate-y-1/2 fill-black/45 stroke-[2.5] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.75)]"
            aria-hidden
          />
        </div>
      </div>
    </DemoFrame>
  );
}

export function InvoiceDemo() {
  return (
    <DemoFrame className="bg-[#14532d] p-3">
      <div className="relative z-10 flex h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#052e16] p-3 shadow-[0_0_20px_rgba(0,0,0,0.42)]">
        <div className="demo-chat absolute left-3 top-3 max-w-[70%] rounded-2xl rounded-tl-sm bg-white/95 px-2.5 py-1.5 text-[10px] text-zinc-800">
          Sat 3pm · $450 · gardens
        </div>
        <div className="demo-invoice relative w-[78%] rounded-xl bg-white p-3 text-zinc-800 shadow-lg">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Invoice
          </p>
          <p className="mt-1 text-[11px] font-semibold">Garden wedding · 3pm</p>
          <div className="mt-2 flex items-center justify-between text-[10px]">
            <span>$450.00</span>
            <span className="demo-paid rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-800">
              link ready
            </span>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

export function PulseDemo() {
  return (
    <DemoFrame className="bg-[#0b1220] p-3">
      <div className="relative z-10 flex h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111827] p-3 text-[10px] text-zinc-200 shadow-[0_0_20px_rgba(0,0,0,0.42)] sm:text-[11px]">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-semibold tracking-tight text-white">Pulse</p>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-300">
            live
          </span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <p className="text-[9px] uppercase tracking-wide text-zinc-500">Blowing up</p>
            <p className="mt-1 font-semibold text-white">Adopt Me!</p>
            <p className="mt-1 text-[9px] text-orange-300">heat 94</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
            <p className="text-[9px] uppercase tracking-wide text-zinc-500">Loop</p>
            <p className="mt-1 font-semibold text-white">Pet economy</p>
            <p className="mt-1 text-[9px] text-sky-300">trade + hatch</p>
          </div>
          <div className="col-span-2 rounded-lg border border-white/10 bg-black/30 p-2">
            <div className="mb-1.5 flex items-end gap-1">
              <span className="h-3 w-1.5 rounded-sm bg-sky-400/80" />
              <span className="h-5 w-1.5 rounded-sm bg-sky-400/80" />
              <span className="h-4 w-1.5 rounded-sm bg-sky-400/80" />
              <span className="h-7 w-1.5 rounded-sm bg-emerald-400/90" />
              <span className="h-6 w-1.5 rounded-sm bg-emerald-400/90" />
              <span className="h-8 w-1.5 rounded-sm bg-orange-400/90" />
              <span className="h-5 w-1.5 rounded-sm bg-sky-400/80" />
              <span className="h-6 w-1.5 rounded-sm bg-emerald-400/90" />
            </div>
            <p className="text-[9px] text-zinc-500">session sparkline · genre mix shifting</p>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

export function ProjectDemo({ kind }: { kind?: string }) {
  if (kind === "terminal") return <TerminalDemo />;
  if (kind === "extension") return <ExtensionDemo />;
  if (kind === "browser") return <BrowserDemo />;
  if (kind === "invoice") return <InvoiceDemo />;
  if (kind === "pulse") return <PulseDemo />;
  return null;
}
