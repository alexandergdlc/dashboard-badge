import { useState } from "react";
import { ComponentCard } from "@/components/shared/component-card";
import { PageMeta } from "@/components/shared/page-meta";
import { Badge } from "@/components/ui/lab-badge";
import type { BadgeVariant } from "@/components/ui/lab-badge-variants";
import { useTranslations } from "@/i18n";
import { monthly, orders } from "./data";

const variants: BadgeVariant[] = ["success", "warning", "danger"];
const money = (n: number) => new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(n);

export default function LaboratorioPage() {
  const t = useTranslations("lab08");
  const [variant, setVariant] = useState<BadgeVariant>("success");
  const [label, setLabel] = useState("");
  const [filter, setFilter] = useState<BadgeVariant | "all">("all");
  const visibleOrders = orders.filter(o => filter === "all" || o.status === filter);
  return <>
    <PageMeta title={t("title")} description={t("description")} />
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <div><p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{t("eyebrow")}</p>
        <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{t("description")}</p></div>
      <div className="grid gap-4 sm:grid-cols-3">
        {variants.map(v => <div key={v} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
          <Badge variant={v}>{t(v)}</Badge>
          <p className="mt-3 text-3xl font-semibold">{orders.filter(o => o.status === v).length}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t("orders")}</p>
        </div>)}
      </div>
      <ComponentCard title={t("playground")} description={t("playgroundDescription")}>
        <div className="flex flex-wrap gap-2" aria-label={t("choose")}>
          {variants.map(v => <button type="button" key={v} aria-pressed={variant === v}
            onClick={() => setVariant(v)}
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 aria-pressed:border-brand-500 aria-pressed:bg-brand-50 aria-pressed:text-brand-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:aria-pressed:bg-brand-950 dark:aria-pressed:text-brand-200">
            {v}
          </button>)}
        </div>
        <div className="grid items-center gap-5 @container sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium">{t("label")}
            <input value={label} onChange={e => setLabel(e.target.value)} maxLength={40}
              placeholder={t("placeholder")} className="block w-full rounded-xl border border-gray-300 bg-transparent p-3 focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-gray-600" />
          </label>
          <div aria-live="polite" aria-atomic="true" className="space-y-3">
            <Badge variant={variant}>{label.trim() || t(variant)}</Badge>
            <code className="block overflow-x-auto text-xs text-gray-500 dark:text-gray-400">{`<Badge variant="${variant}">...</Badge>`}</code>
          </div>
        </div>
      </ComponentCard>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <ComponentCard title={t("recent")} description={t("demo")}>
            <label className="flex flex-wrap items-center gap-3 text-sm">{t("filter")}
              <select value={filter} onChange={e => setFilter(e.target.value as BadgeVariant | "all")}
                className="rounded-lg border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-900">
                <option value="all">{t("all")}</option>
                {variants.map(v => <option key={v} value={v}>{t(v)}</option>)}
              </select>
              <span role="status">{visibleOrders.length} {t("results")}</span>
            </label>
            <div className="overflow-x-auto"><table className="w-full text-start text-sm">
              <caption className="sr-only">{t("recent")}</caption>
              <thead><tr className="border-b border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                {["order", "product", "amount", "status"].map(k => <th key={k} scope="col" className="px-3 py-3 text-start font-medium">{t(k)}</th>)}
              </tr></thead>
              <tbody>{visibleOrders.map(o => <tr key={o.id} className="border-b border-gray-100 last:border-0 dark:border-gray-800">
                <td className="whitespace-nowrap px-3 py-4">{o.id}</td><td className="px-3 py-4">{t(o.product)}</td>
                <td className="whitespace-nowrap px-3 py-4">{money(o.amount)}</td><td className="px-3 py-4"><Badge variant={o.status}>{t(o.status)}</Badge></td>
              </tr>)}</tbody>
            </table></div>
          </ComponentCard>
        </div>
        <ComponentCard title={t("chart")} description={t("chartDescription")}>
          <div className="@container"><ul className="space-y-4 @md:space-y-5" aria-label={t("chart")}>
            {monthly.map((value, i) => <li key={i} className="space-y-1">
              <div className="flex justify-between gap-2 text-xs"><span>{t(`month${i}`)}</span><span>{money(value)}</span></div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"><div style={{ width: `${value / 3000 * 100}%` }} className="h-full rounded-full bg-brand-500 dark:bg-brand-400" /></div>
            </li>)}
          </ul></div>
        </ComponentCard>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{t("footer")}</p>
    </div>
  </>;
}
