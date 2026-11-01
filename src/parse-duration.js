export function parseDuration(text) {
  const match = typeof text === "string" && /^(?=\d)(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(text);
  if (!match) throw new RangeError("Invalid duration: expected a string such as 1h30m");
  const [, hours = 0, minutes = 0, seconds = 0] = match;
  return (Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)) * 1000;
}
