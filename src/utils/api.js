export const baseUrl =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636174";

export async function getFlag() {
  const res = await fetch(`${baseUrl}`, {
    method: "GET",
  });
  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    const text = await res.text();
    return text;
  }
}
