import type { BadgeVariant } from "@/components/ui/lab-badge-variants";
export const orders: { id: string; product: string; amount: number; status: BadgeVariant }[] = [
  { id: "PED-001", product: "monitor", amount: 850, status: "success" },
  { id: "PED-002", product: "keyboard", amount: 180, status: "warning" },
  { id: "PED-003", product: "headphones", amount: 240, status: "danger" },
  { id: "PED-004", product: "laptop", amount: 3200, status: "success" },
  { id: "PED-005", product: "mouse", amount: 95, status: "warning" },
  { id: "PED-006", product: "webcam", amount: 210, status: "success" },
];
export const monthly = [1200, 1800, 1500, 2400, 2100, 2800];
