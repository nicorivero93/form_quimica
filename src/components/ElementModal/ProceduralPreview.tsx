import { useEffect, useRef } from 'react';
import type { Element, Phase } from '@/types/element';
import { CATEGORIES } from '@/data/categories';

interface Props {
  element: Element;
  className?: string;
}

export function ProceduralPreview({ element, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cat = CATEGORIES[element.category];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let raf = 0;
    const start = performance.now();

    const render = (now: number) => {
      const t = (now - start) / 1000;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      drawPhase(ctx, w, h, t, element.phase, cat.color);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [element, cat.color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={`Vista procedural de ${element.name} (${element.phase.toLowerCase()})`}
    />
  );
}

function drawPhase(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  phase: Phase,
  color: string,
) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(1, '#020617');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  if (phase === 'Gas') {
    drawGas(ctx, w, h, t, color);
  } else if (phase === 'Líquido') {
    drawLiquid(ctx, w, h, t, color);
  } else {
    drawSolid(ctx, w, h, t, color);
  }
}

function drawGas(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, color: string) {
  ctx.globalAlpha = 0.7;
  for (let i = 0; i < 24; i++) {
    const seed = i * 997.31;
    const x = ((Math.sin(t * 0.3 + seed) * 0.5 + 0.5) * w);
    const y = (((Math.cos(t * 0.4 + seed * 1.7) * 0.5 + 0.5) * h));
    const r = 4 + (Math.sin(seed) * 0.5 + 0.5) * 8;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
    g.addColorStop(0, color);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r * 4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawLiquid(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, color: string) {
  ctx.fillStyle = `${color}40`;
  ctx.fillRect(0, h * 0.55, w, h * 0.45);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x <= w; x += 4) {
    const y = h * 0.55 + Math.sin((x / w) * Math.PI * 4 + t * 1.5) * 6;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = `${color}20`;
  for (let i = 0; i < 12; i++) {
    const seed = i * 13.7;
    const x = ((Math.sin(t * 0.6 + seed) * 0.5 + 0.5) * w);
    const y = h * 0.6 + ((Math.cos(t * 0.4 + seed) * 0.5 + 0.5) * h * 0.35);
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawSolid(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, color: string) {
  const cell = Math.min(w, h) / 10;
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.7;
  for (let y = -cell; y < h + cell; y += cell) {
    for (let x = -cell; x < w + cell; x += cell) {
      const px = x + Math.sin(t * 0.5 + (x + y) * 0.05) * 2;
      const py = y + Math.cos(t * 0.5 + (x + y) * 0.05) * 2;
      ctx.beginPath();
      ctx.arc(px, py, cell * 0.35, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}
