function convertMarkdownToHtml(divElement: HTMLElement | Element) {
  // Get the Markdown text from the div
  let markdownText = divElement.textContent!;
  // Convert the Markdown to HTML
  markdownText = markdownText
    .split("\n")
    .map((val: string) => val.trim())
    .join("\n");
  let htmlText = markdownText
    .replace(/\n/gm, "\n<br>\n")
    .replace(/^\t/gm, "---")
    .replace(/^"  "/gm, "@")
    .replace(/^# (.+)/gm, "<h1>$1</h1>")
    .replace(/^## (.+)/gm, "<h2>$1</h2>")
    .replace(/^### (.+)/gm, "<h3>$1</h3>")
    .replace(/^#### (.+)/gm, "<h4>$1</h4>")
    .replace(/^##### (.+)/gm, "<h5>$1</h5>")
    .replace(/^###### (.+)/gm, "<h6>$1</h6>")
    .replace(/\*\*(.+?)\*\*/gm, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/gm, "<em>$1</em>")
    .replace(/\`(.+?)\`/gm, "<code>$1</code>")
    .replace(/~~(.+?)~~/gm, "<del>$1</del>")
    .replace(/\[(.+?)\]\((.+?)\)/gm, "<a href='$2'>$1</a>")
    .replace(
      /\[(X| )\]- (.+?)/gm,
      "<input type='checkbox' $1 id='$2-input'><label for='$2-input'>$2</label>"
    );
  divElement.innerHTML = htmlText;
}
function convertCodeToHTML(el: HTMLElement | Element) {
  let text = el.textContent!;
  text = text
    .split("\n")
    .map((val: string) => val.trim())
    .join("\n");

  let output = text
  .replace(/{/gm, "{\n\t")
  .replace(/function (.+?)/gm, "FUNCT $1")
  .replace(/\((.+?)\) /gm, "(ARGS $1)")
  .replace(/console/gm, "CONSOLE")
  .replace(/(var|let|const)/gm, "VAR")
  .replace(/}/gm, "\n}");
  console.log(output);
}
const blocks = document.querySelectorAll("magic-md");
if (blocks.length > 0) {
  blocks.forEach((b: HTMLElement | Element) => {
    convertMarkdownToHtml(b);
  });
}

const codes = document.getElementById("test")!;
if (codes) {
  convertCodeToHTML(codes);
}
