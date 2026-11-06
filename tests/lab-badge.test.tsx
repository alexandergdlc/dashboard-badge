import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Badge } from "../src/components/ui/lab-badge";
import { orders } from "../src/pages/main/laboratorio-08/data";

describe("Badge del laboratorio", () => {
  it.each([
    ["success", "bg-emerald-50", "dark:text-emerald-200"],
    ["warning", "bg-amber-50", "dark:text-amber-200"],
    ["danger", "bg-rose-50", "dark:text-rose-200"],
  ] as const)("aplica las clases de %s", (variant, light, dark) => {
    const html = renderToStaticMarkup(<Badge variant={variant}>Estado</Badge>);
    expect(html).toContain(light);
    expect(html).toContain(dark);
    expect(html).toContain(`data-variant="${variant}"`);
    expect(html).toContain("Estado");
  });
  it("admite atributos nativos y escapa el texto", () => {
    const html = renderToStaticMarkup(<Badge variant="warning" title="Detalle">{"<script>"}</Badge>);
    expect(html).toContain('title="Detalle"');
    expect(html).toContain("&lt;script&gt;");
  });
  it("integra las tres variantes en los pedidos", () => {
    expect(orders.filter(o => o.status === "success")).toHaveLength(3);
    expect(orders.filter(o => o.status === "warning")).toHaveLength(2);
    expect(orders.filter(o => o.status === "danger")).toHaveLength(1);
    expect(new Set(orders.map(o => o.id)).size).toBe(orders.length);
  });
});
