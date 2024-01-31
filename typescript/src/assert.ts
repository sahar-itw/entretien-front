export function assert(description: string, check: boolean) {
  let element = document.createElement("div");
  element.innerText = `${description} ${check ? "✅" : "❌"}`;
  document.body.append(element);
}
