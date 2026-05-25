export const formatPrice = (price?: number | null) => {
  if (!price) return "-";

  return `Rp ${price.toLocaleString("id-ID")}`;
};