export const employmentDuration = (date: Date): string => {
  // Employment began on September 1, 2024; count completed calendar months.
  const months = Math.max(
    0,
    (date.getFullYear() - 2024) * 12 + date.getMonth() - 8
  );

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years} ${years === 1 ? "year" : "years"}, ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
};
