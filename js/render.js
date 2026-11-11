const D = SITE_DATA;

function getValue(path) {
  return path.split(".").reduce((obj, key) => (obj ? obj[key] : undefined), D);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function bindSimpleFields() {
  document.querySelectorAll("[data-text]").forEach((n) => (n.textContent = getValue(n.dataset.text)));
  document.querySelectorAll("[data-src]").forEach((n) => (n.src = getValue(n.dataset.src)));
  document.querySelectorAll("[data-alt]").forEach((n) => (n.alt = getValue(n.dataset.alt)));
}

function renderShell() {
  const page = location.pathname.split("/").pop() || "index.html";
  const links = document.getElementById("navLinks");
  D.nav.forEach((item) => {
    const li = el("li");
    const a = el("a", item.href === page ? "active" : "", item.label);
    a.href = item.href;
    li.appendChild(a);
    links.appendChild(li);
  });
  const cta = document.getElementById("ctaLink");
  cta.href = D.cta.href;
  cta.append(D.cta.label + " ", el("span", "", "\u2197"));
  document.getElementById("footerText").textContent = D.footer;
  document.title = document.title.split("|")[0] + "| " + D.student.firstName + "'s Portfolio";
}

function renderAbout() {
  const tbody = document.getElementById("eduBody");
  D.about.education.forEach((e) => {
    const tr = el("tr");
    [e.period, e.institution, e.qualification].forEach((v) => tr.appendChild(el("td", "", v)));
    tbody.appendChild(tr);
  });
  D.about.skills.forEach((s) => document.getElementById("skillsList").appendChild(el("li", "", s)));
  D.about.hobbies.forEach((h) => document.getElementById("hobbiesList").appendChild(el("li", "", h)));
  const video = document.getElementById("introVideo");
  video.poster = D.about.video.poster;
  document.getElementById("introSource").src = D.about.video.src;
  video.load();
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  D.projects.forEach((p) => {
    const card = el("article", "card");
    const img = el("img");
    img.src = p.image;
    img.alt = p.imageAlt;
    const body = el("div");
    const link = el("a", "btn", "View project");
    link.href = p.link;
    link.target = "_blank";
    link.rel = "noopener";
    body.append(el("h2", "", p.title), el("p", "", p.description), link);
    card.append(img, body);
    grid.appendChild(card);
  });
}

renderShell();
bindSimpleFields();
if (document.getElementById("eduBody")) renderAbout();
if (document.getElementById("projectsGrid")) renderProjects();
