export function formatDate(date) {
  return date.tooLocaleDateString("en-US", {
    dateStyle: "medium",
  });
}
