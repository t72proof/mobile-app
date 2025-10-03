
const sizeTable = ["B", "KiB", "MiB", "GiB", "TiB"];

export function formatBytes(bytes: number) {
  let index = 0;
  for (
    ;
    Math.pow(1024, index + 1) < bytes && index < sizeTable.length - 1;
    index++
  );
  let convertedBytes = bytes;
  if (index > 0) convertedBytes = bytes / Math.pow(1024, index);
  return String(convertedBytes.toFixed(2)) + " " + sizeTable[index];
}