export function formatPublishedAt(date: string) {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });
}
