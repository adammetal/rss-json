function readNews() {
  fetch("rss.json")
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
  let box = document
    .createElement('div');
  
  let title = document
    .createElement('h1');

  let desc = document
    .createElement('p');

  title
    .innerText = item.title;

  desc
    .innerText = item.summary;

  box.append(title, desc);
  
  document
    .getElementById('rss')
    .append(box);
}

window.addEventListener('load', readNews);