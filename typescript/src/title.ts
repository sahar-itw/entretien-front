export function title(title: string) {
  const h2 = document.createElement("h2");
  h2.innerText = title;
  document.body.append(h2);
}
