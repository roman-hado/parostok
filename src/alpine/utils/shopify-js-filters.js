import { formatMoney } from "@shopify/theme-currency";

export const handleize = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\u00C0-\u024f]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const money = (value) => {
  return formatMoney(value, "€{{amount}}");
};

export const unhandleize = (str) => {
  if (str.length < 0) return;

  return str.replaceAll("-", " ");
};
