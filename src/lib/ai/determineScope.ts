export function determineScope(
  areas: string[]
): string {
  const upperAreas = [
    "Kepala",
    "Tangan",
    "Punggung",
  ];

  const hasKaki = areas.includes("Kaki");

  const upperCount = areas.filter((a) =>
    upperAreas.includes(a)
  ).length;

  
  if (areas.length === 1) {
    return areas[0];
  }

 
  if (hasKaki && areas.length >= 2) {
    return "Full Badan";
  }

  if (upperCount >= 2) {
    return "Upper";
  }

  return "Full Badan";
}