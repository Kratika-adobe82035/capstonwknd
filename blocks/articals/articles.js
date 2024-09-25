export default async function decorate(block) {
    const articleLists = block.querySelector('a[href$=".json"]');
    async function loadArticles() {
      const resp = await fetch(articleLists.href);
      const json = await resp.json();
      // eslint-disable-next-line no-return-assign
      const magazineItems = json.data.filter((value) => value.template === 'magazine');
      magazineItems.forEach((row) => {
        // Null checks for required fields
        if (row.path && row.image && row.title && row.description) {
          // Create the elements
          const articleDiv = document.createElement('div');
          articleDiv.classList.add('article-item');
          articleDiv.innerHTML = `
            <a href="${row.path}">
                <img src="${row.image}" alt="${row.title}">
                <h3>${row.title}</h3>
            </a>
            <p>${row.description}</p>
          `;
          block.appendChild(articleDiv);
        }
      });
    }
    if (articleLists) {
      loadArticles();
    }
  }
  