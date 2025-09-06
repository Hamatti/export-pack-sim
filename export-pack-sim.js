const pattern = /(.*)\(.*\) x(\d+)/;

async function copy() {
  const area = document.querySelector("#pulled-card-rowparent");
  const pulls = area.querySelectorAll("div");

  const cards = Object.values(pulls).map((div) => {
    const id = div.querySelector("a")?.dataset.name;
    const content = div.textContent;

    const [full, name, amount] = content.match(pattern);

    return `${amount} ${name} ${id}`;
  });

  await navigator.clipboard.writeText(cards.join("\n"));
}

copy();
