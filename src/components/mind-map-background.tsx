import { useEffect, useRef } from "react";

type Kind = "hub" | "leaf" | "mote";

type Node = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  kind: Kind;
  label?: string;
  cluster: number;
  phase: number;
};

type Edge = {
  a: number;
  b: number;
  packet: number;
  speed: number;
};

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

const CLUSTERS = [
  {
    label: "SYSTEMS",
    x: 0.16,
    y: 0.3,
    words: ["DNS", "TLS", "ICMP", "TCP", "socket", "packet", "route", "NAT", "VLAN", "SSH"],
  },
  {
    label: "CODE",
    x: 0.84,
    y: 0.28,
    words: ["AST", "type", "hook", "state", "ref", "lint", "build", "test", "graph", "token"],
  },
  {
    label: "DATA",
    x: 0.2,
    y: 0.74,
    words: ["schema", "index", "query", "cache", "queue", "WAL", "join", "blob", "log"],
  },
  {
    label: "SHIP",
    x: 0.82,
    y: 0.72,
    words: ["docker", "CI", "deploy", "alert", "VPN", "k8s", "CDN", "cron", "trace"],
  },
  {
    label: "DEBUG",
    x: 0.5,
    y: 0.14,
    words: ["stack", "heap", "race", "null", "perf", "core", "trace", "repro"],
  },
] as const;

function isDarkTheme() {
  return document.documentElement.classList.contains("dark");
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function dist(ax: number, ay: number, bx: number, by: number) {
  const dx = ax - bx;
  const dy = ay - by;
  return Math.hypot(dx, dy);
}

export default function MindMapBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false, speed: 0 };
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    const sparks: Spark[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let dark = isDarkTheme();
    let reduced = prefersReducedMotion();
    let raf = 0;
    let last = performance.now();

    function palette() {
      if (dark) {
        return {
          line: [125, 211, 252],
          hub: [196, 181, 253],
          packet: [52, 211, 153],
          spark: [253, 224, 71],
          label: [226, 232, 240],
          mote: [165, 180, 252],
          max: 0.78,
        };
      }
      return {
        line: [30, 41, 59],
        hub: [79, 70, 229],
        packet: [5, 150, 105],
        spark: [180, 83, 9],
        label: [15, 23, 42],
        mote: [71, 85, 105],
        max: 0.34,
      };
    }

    function fadeAt(x: number) {
      const band = Math.abs(x - width / 2) / Math.max(140, width * 0.2);
      return Math.min(1, 0.14 + band * 1.05);
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes.length = 0;
      edges.length = 0;
      const mobile = width < 768;
      const wordLimit = mobile ? 5 : 99;
      const moteCount = mobile ? 28 : 70;

      CLUSTERS.forEach((cluster, clusterIndex) => {
        const hx = cluster.x * width;
        const hy = cluster.y * height;
        const hubIndex = nodes.length;
        nodes.push({
          x: hx,
          y: hy,
          ox: hx,
          oy: hy,
          vx: 0,
          vy: 0,
          r: mobile ? 3.2 : 4.2,
          kind: "hub",
          label: cluster.label,
          cluster: clusterIndex,
          phase: rand(0, Math.PI * 2),
        });

        cluster.words.slice(0, wordLimit).forEach((word, i) => {
          const angle = (i / Math.max(1, cluster.words.length)) * Math.PI * 2 + clusterIndex;
          const radius = (mobile ? 58 : 92) + (i % 3) * (mobile ? 16 : 28) + rand(-10, 10);
          const x = hx + Math.cos(angle) * radius + rand(-8, 8);
          const y = hy + Math.sin(angle) * radius + rand(-8, 8);
          const leafIndex = nodes.length;
          nodes.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            r: rand(1.2, 2.2),
            kind: "leaf",
            label: word,
            cluster: clusterIndex,
            phase: rand(0, Math.PI * 2),
          });
          edges.push({
            a: hubIndex,
            b: leafIndex,
            packet: Math.random(),
            speed: rand(0.0018, 0.0045),
          });
          if (i > 0 && Math.random() > 0.35) {
            edges.push({
              a: leafIndex,
              b: leafIndex - 1,
              packet: Math.random(),
              speed: rand(0.0012, 0.0032),
            });
          }
        });
      });

      const hubs = nodes.map((node, i) => (node.kind === "hub" ? i : -1)).filter((i) => i >= 0);
      for (let i = 0; i < hubs.length; i += 1) {
        for (let j = i + 1; j < hubs.length; j += 1) {
          edges.push({
            a: hubs[i],
            b: hubs[j],
            packet: Math.random(),
            speed: rand(0.0008, 0.0022),
          });
        }
      }

      for (let i = 0; i < moteCount; i += 1) {
        const x = rand(0, width);
        const y = rand(0, height);
        nodes.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: rand(-0.12, 0.12),
          vy: rand(-0.08, 0.08),
          r: rand(0.6, 1.4),
          kind: "mote",
          cluster: -1,
          phase: rand(0, Math.PI * 2),
        });
      }
    }

    function nearest(x: number, y: number, count: number, kinds: Kind[]) {
      return nodes
        .map((node, i) => ({ i, d: dist(x, y, node.x, node.y), kind: node.kind }))
        .filter((item) => kinds.includes(item.kind))
        .sort((a, b) => a.d - b.d)
        .slice(0, count);
    }

    function emitSparks(x: number, y: number, n: number) {
      for (let i = 0; i < n; i += 1) {
        const angle = rand(0, Math.PI * 2);
        const mag = rand(0.4, 2.4);
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * mag,
          vy: Math.sin(angle) * mag,
          life: rand(0.35, 0.9),
        });
      }
      if (sparks.length > 80) sparks.splice(0, sparks.length - 80);
    }

    function step(now: number) {
      const dt = Math.min(32, now - last) / 16.67;
      last = now;
      const colors = palette();
      mouse.x += (mouse.tx - mouse.x) * 0.18;
      mouse.y += (mouse.ty - mouse.y) * 0.18;

      ctx.clearRect(0, 0, width, height);

      if (!reduced) {
        for (const node of nodes) {
          node.phase += 0.012 * dt;
          let fx = (node.ox - node.x) * (node.kind === "hub" ? 0.045 : 0.03);
          let fy = (node.oy - node.y) * (node.kind === "hub" ? 0.045 : 0.03);

          if (node.kind === "mote") {
            node.ox += node.vx * dt;
            node.oy += node.vy * dt;
            if (node.ox < -20) node.ox = width + 20;
            if (node.ox > width + 20) node.ox = -20;
            if (node.oy < -20) node.oy = height + 20;
            if (node.oy > height + 20) node.oy = -20;
          }

          if (mouse.active) {
            const d = dist(node.x, node.y, mouse.x, mouse.y);
            const radius = node.kind === "hub" ? 280 : 200;
            if (d < radius && d > 0.001) {
              const pull = (1 - d / radius) * (node.kind === "hub" ? 0.11 : 0.16);
              fx += ((mouse.x - node.x) / d) * pull;
              fy += ((mouse.y - node.y) / d) * pull;
            }
          }

          node.vx = (node.vx + fx) * 0.86;
          node.vy = (node.vy + fy) * 0.86;
          node.x += node.vx * dt * 4.2;
          node.y += node.vy * dt * 4.2;
        }
      }

      const thought = mouse.active
        ? nearest(mouse.x, mouse.y, 7, ["hub", "leaf"])
        : [];

      for (const edge of edges) {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        const fade = Math.min(fadeAt(a.x), fadeAt(b.x));
        const focused = thought.some((item) => item.i === edge.a || item.i === edge.b);
        const hubLink = a.kind === "hub" && b.kind === "hub";
        const alpha =
          (hubLink ? 0.24 : 0.1) * fade * colors.max * (focused ? 2.6 : 1);
        const [lr, lg, lb] = focused ? colors.packet : colors.line;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(${lr},${lg},${lb},${alpha})`;
        ctx.lineWidth = hubLink ? 1.25 : focused ? 1.15 : 0.7;
        ctx.stroke();

        if (!reduced) {
          edge.packet += edge.speed * dt * (focused ? 3.4 : 1.2);
          if (edge.packet > 1) edge.packet -= 1;
          const px = a.x + (b.x - a.x) * edge.packet;
          const py = a.y + (b.y - a.y) * edge.packet;
          const [pr, pg, pb] = colors.packet;
          ctx.beginPath();
          ctx.arc(px, py, focused ? 1.8 : 1.15, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${pr},${pg},${pb},${0.55 * fade * colors.max * (focused ? 1 : 0.7)})`;
          ctx.fill();
        }
      }

      if (mouse.active) {
        for (const item of thought) {
          const node = nodes[item.i];
          const fade = fadeAt(node.x);
          const [pr, pg, pb] = colors.packet;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = `rgba(${pr},${pg},${pb},${(0.18 + (1 - Math.min(item.d, 180) / 180) * 0.28) * fade})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.spark.join(",")},0.7)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 16, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${colors.hub.join(",")},0.18)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.font = '10px "Geist Mono Variable", ui-monospace, monospace';
      ctx.textBaseline = "middle";

      for (const node of nodes) {
        const fade = fadeAt(node.x);
        const pulse = reduced ? 1 : 0.75 + Math.sin(node.phase) * 0.25;
        const nearMouse = mouse.active && dist(node.x, node.y, mouse.x, mouse.y) < 150;
        const rgb =
          node.kind === "hub" ? colors.hub : node.kind === "mote" ? colors.mote : colors.line;
        const alpha =
          (node.kind === "hub" ? 0.7 : node.kind === "leaf" ? 0.45 : 0.22) *
          fade *
          colors.max *
          pulse *
          (nearMouse ? 1.45 : 1);

        ctx.beginPath();
        if (node.kind === "leaf") {
          ctx.rect(node.x - node.r, node.y - node.r, node.r * 2, node.r * 2);
        } else {
          ctx.arc(node.x, node.y, node.r * pulse, 0, Math.PI * 2);
        }
        ctx.fillStyle = `rgba(${rgb.join(",")},${alpha})`;
        ctx.fill();

        if (node.label && (node.kind === "hub" || nearMouse)) {
          const [tr, tg, tb] = colors.label;
          ctx.fillStyle = `rgba(${tr},${tg},${tb},${(node.kind === "hub" ? 0.42 : 0.55) * fade * (dark ? 1 : 0.85)})`;
          ctx.textAlign = "left";
          ctx.fillText(node.label, node.x + node.r + 6, node.y);
        }
      }

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i];
        spark.life -= 0.02 * dt;
        spark.x += spark.vx * dt * 3;
        spark.y += spark.vy * dt * 3;
        spark.vx *= 0.96;
        spark.vy *= 0.96;
        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.spark.join(",")},${spark.life * 0.8})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onResize() {
      resize();
      seed();
    }

    function onMove(event: PointerEvent) {
      const nextX = event.clientX;
      const nextY = event.clientY;
      if (mouse.active) {
        mouse.speed = dist(nextX, nextY, mouse.tx, mouse.ty);
        if (mouse.speed > 18) emitSparks(nextX, nextY, 4);
      }
      mouse.tx = nextX;
      mouse.ty = nextY;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
      mouse.tx = -9999;
      mouse.ty = -9999;
    }

    function onTheme() {
      dark = isDarkTheme();
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      reduced = motion.matches;
    };

    resize();
    seed();
    last = performance.now();
    raf = requestAnimationFrame(step);

    const themeObserver = new MutationObserver(onTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseleave", onLeave);
    motion.addEventListener("change", onMotion);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      motion.removeEventListener("change", onMotion);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}
