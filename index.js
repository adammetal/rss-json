function readNews() {
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss")
    .then((r) => r.json())
    .then(renderNews);
}

// news -> rss.json
function renderNews(news) {
  let items = news.items;
  for (let item of items) {
    renderItem(item);
  }
}

function renderItem(item) {
  let box = document.createElement("div");
  let title = document.createElement("h1");
  let desc = document.createElement("p");
  let link = document.createElement("a");

  title.innerText = item.title;
  link.innerText = item.link;
  link.href = item.link;
  desc.innerText = item.description.substring(0, 255) + "...";

  box.append(title, desc, link);

  document.getElementById("rss").append(box);
}

window.addEventListener("load", readNews);
