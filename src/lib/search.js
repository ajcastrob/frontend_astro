const PAGE_SIZE = 6;
let page = 0;

export { PAGE_SIZE };

export function selectedTag() {
  const checked = document.querySelector("input[name='tag-article']:checked");
  return (checked?.value ?? "").trim().toLowerCase();
}

export function getMatchesCard(q, selectTag) {
  const matches = [];
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = card.querySelector(".card__title").textContent.toLowerCase();
    const tags = [...card.querySelectorAll(".card__tag")].map((el) =>
      el.textContent.toLowerCase(),
    );
    const matchTitle = q === "" || title.includes(q);
    const matchTag =
      selectTag === "" || tags.some((t) => t.includes(selectTag));
    if (matchTitle && matchTag) {
      matches.push(card);
    }
  });
  return matches;
}

export function getTotalPages(matches) {
  const totalPages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  if (page > totalPages - 1) {
    page = totalPages - 1;
  }
  return totalPages;
}

export function chageStatusPagination(matches, totalPages) {
  const status = document.querySelector("#search-status");
  const empty = document.querySelector("#search-empty");
  const pager = document.querySelector("#search-pager");
  const prev = document.querySelector("#pager-prev");
  const next = document.querySelector("#pager-next");
  const start = page * PAGE_SIZE;

  matches.slice(start, start + PAGE_SIZE).forEach((card) => {
    card.hidden = false;
  });

  if (matches.length === 0) {
    status.hidden = true;
    status.textContent = "";
    empty.hidden = false;
  } else {
    empty.hidden = true;
    status.hidden = false;
    const from = start + 1;
    const to = start + Math.min(PAGE_SIZE, matches.length - start);
    status.textContent = `${from}-${to} de ${matches.length} artículos`;
  }
  pager.hidden = matches.length <= PAGE_SIZE;
  prev.disabled = page === 0;
  next.disabled = page >= totalPages - 1;
}

export function resetPage() {
  page = 0;
}

export function stepPage(delta) {
  page += delta;
}
