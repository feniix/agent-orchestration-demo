const UNITS = ["B", "KB", "MB", "GB"];

export function formatBytes(count) {
  let value = count;
  let unit = 0;
  while (value >= 1024 && unit < UNITS.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(1)} ${UNITS[unit]}`;
}
