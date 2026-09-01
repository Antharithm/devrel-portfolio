/* Anthony Tilotta: portfolio behaviour.
   No dependencies. Everything degrades: without JS the page is still readable
   and every video is one click from YouTube. */
(() => {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (name, cls = "icon") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  /* ---------- Theme ---------- */

  const rootEl = document.documentElement;
  const lightMQ = matchMedia("(prefers-color-scheme: light)");
  const storedTheme = () => { try { return localStorage.getItem("theme"); } catch { return null; } };
  const applyTheme = (t, animate) => {
    if (animate && !reduceMotion) {
      rootEl.classList.add("theme-x");
      setTimeout(() => rootEl.classList.remove("theme-x"), 420);
    }
    rootEl.setAttribute("data-theme", t);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = t === "light" ? "#f5f5f9" : "#161826";
    $$(".theme-toggle").forEach((b) => b.setAttribute("aria-label", t === "light" ? "Switch to dark mode" : "Switch to light mode"));
  };
  applyTheme(rootEl.getAttribute("data-theme") || (lightMQ.matches ? "light" : "dark"), false);
  $$(".theme-toggle").forEach((b) => b.addEventListener("click", () => {
    const t = rootEl.getAttribute("data-theme") === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", t); } catch {}
    applyTheme(t, true);
  }));
  lightMQ.addEventListener?.("change", (e) => { if (!storedTheme()) applyTheme(e.matches ? "light" : "dark", true); });

  /* ---------- Video data ---------- */

  // Accepts any YouTube URL shape (watch, youtu.be, shorts, embed, live) or a bare id.
  const ytId = (v) => {
    if (v.id) return v.id;
    try {
      const u = new URL(v.url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0];
      const m = u.pathname.match(/^\/(shorts|embed|live)\/([^/?]+)/);
      if (m) return m[2];
      return u.searchParams.get("v");
    } catch { return null; }
  };
  const thumb    = (id, q = "hqdefault") => `https://i.ytimg.com/vi/${id}/${q}.jpg`;
  const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

  const videos = (window.PORTFOLIO_VIDEOS || [])
    .map((v) => ({ ...v, id: ytId(v) }))
    .filter((v) => v.id);

  /* ---------- Selected tutorials (featured rows) ---------- */

  const featEl = $("#featured");
  if (featEl) {
    videos.filter((v) => v.featured).forEach((v) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "feat-row";
      b.dataset.video = v.id;
      b.innerHTML =
        `<span class="feat-title">${esc(v.short || v.title)}</span>` +
        `<span class="feat-focus">${esc(v.featured)}</span>` +
        `<span class="feat-cta">Watch ${icon("play", "icon icon-sm")}</span>`;
      featEl.append(b);
    });
    featEl.hidden = !featEl.children.length;
  }

  /* ---------- Library: filters + grid ---------- */

  const grid = $("#vgrid");
  const filt = $("#filters");
  const count = $("#vcount");

  if (grid) {
    videos.forEach((v, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "vcard";
      b.dataset.video = v.id;
      b.dataset.topic = v.topic || "";
      b.setAttribute("data-reveal", "");
      b.style.setProperty("--d", `${Math.min(i, 8) * 45}ms`);
      b.innerHTML =
        `<span class="vthumb"><img loading="lazy" decoding="async" src="${thumb(v.id)}" alt="">` +
        `<span class="play">${icon("play")}</span></span>` +
        `<span class="vtitle">${esc(v.title)}</span>` +
        `<span class="vmeta">${esc([v.topic, v.channel].filter(Boolean).join(" · "))}</span>`;
      grid.append(b);
    });
  }

  const setCount = (n) => { if (count) count.textContent = `${n} ${n === 1 ? "video" : "videos"}`; };
  setCount(videos.length);

  if (filt && grid) {
    const topics = [...new Set(videos.map((v) => v.topic).filter(Boolean))];
    if (topics.length > 1) {
      ["All", ...topics].forEach((t, i) => {
        const c = document.createElement("button");
        c.type = "button";
        c.className = "chip";
        c.textContent = t;
        c.dataset.topic = t;
        c.setAttribute("aria-pressed", String(i === 0));
        filt.append(c);
      });
    } else {
      filt.hidden = true;
    }

    filt.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      $$(".chip", filt).forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      const t = chip.dataset.topic;
      let n = 0;
      $$(".vcard", grid).forEach((card) => {
        const show = t === "All" || card.dataset.topic === t;
        card.hidden = !show;
        if (!show) return;
        // Re-run the reveal with a fresh stagger so the filter feels animated, not abrupt.
        card.classList.remove("is-in");
        card.style.setProperty("--d", `${Math.min(n, 8) * 40}ms`);
        n++;
      });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        $$(".vcard:not([hidden])", grid).forEach((card) => card.classList.add("is-in"));
      }));
      setCount(n);
    });
  }

  /* ---------- Reveal on scroll ---------- */

  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach((el) => io.observe(el));
    // Safety net: never leave content invisible.
    setTimeout(() => revealEls.forEach((el) => el.classList.add("is-in")), 5000);
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Stat count-up ---------- */

  const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 0 });
  const counters = $$("[data-to]");
  if (counters.length) {
    const run = (el) => {
      const to = Number(el.dataset.to);
      const suffix = el.dataset.suffix || "";
      const final = compact.format(to) + suffix;
      if (reduceMotion || !Number.isFinite(to)) { el.textContent = final; return; }
      const t0 = performance.now();
      const dur = 1200;
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(2, -10 * p);          // ease-out-expo
        el.textContent = compact.format(Math.round(to * e)) + suffix;
        if (p < 1) requestAnimationFrame(tick); else el.textContent = final;
      };
      requestAnimationFrame(tick);
    };
    if ("IntersectionObserver" in window) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          cio.unobserve(en.target);
          run(en.target);
        });
      }, { threshold: 0.5 });
      counters.forEach((el) => cio.observe(el));
    } else {
      counters.forEach(run);
    }
  }

  /* ---------- Scroll spy + sliding indicator ---------- */

  const spyLinks = $$("a[data-spy]");
  const sections = [...new Set(spyLinks.map((a) => a.hash))].map((h) => $(h)).filter(Boolean);
  const railNav = $(".rail-nav");
  let active = null;

  const setActive = (id) => {
    spyLinks.forEach((a) => {
      if (a.hash === `#${id}`) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
    if (railNav) {
      const a = railNav.querySelector(`a[href="#${id}"]`);
      if (a) {
        railNav.style.setProperty("--spy-y", `${a.offsetTop}px`);
        railNav.style.setProperty("--spy-h", `${a.offsetHeight}px`);
        railNav.style.setProperty("--spy-o", "1");
      }
    }
    // Keep the active pill visible in the mobile bar.
    const tb = $(".topbar");
    if (tb && getComputedStyle(tb).display !== "none") {
      const a = tb.querySelector(`a[href="#${id}"]`);
      a?.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  let raf = 0;
  const spy = () => {
    raf = 0;
    if (!sections.length) return;
    const probe = scrollY + innerHeight * 0.35;
    let cur = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top + scrollY <= probe) cur = s;
    }
    const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) cur = sections[sections.length - 1];
    if (cur.id !== active) { active = cur.id; setActive(active); }
  };
  addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(spy); }, { passive: true });
  addEventListener("resize", () => { if (!raf) raf = requestAnimationFrame(spy); });
  // Fonts loading shifts offsets; re-measure once they're in.
  document.fonts?.ready.then(() => { active = null; spy(); });
  spy();

  /* ---------- Video player (dialog) ---------- */

  const dlg = $("#player");
  const frame = $("#player-frame");
  const pTitle = $("#player-title");
  const pLink = $("#player-link");
  let lastFocus = null;

  const openVideo = (id, trigger) => {
    const v = videos.find((x) => x.id === id) || {};
    const title = v.title || "Video";
    if (!dlg || typeof dlg.showModal !== "function") { window.open(watchUrl(id), "_blank", "noopener"); return; }
    lastFocus = trigger || document.activeElement;
    pTitle.textContent = title;
    pLink.href = watchUrl(id);
    frame.innerHTML =
      `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&modestbranding=1&playsinline=1" ` +
      `title="${esc(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
      `allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    dlg.showModal();
    $("#player-close")?.focus({ preventScroll: true });
  };
  const closeVideo = () => { if (dlg?.open) dlg.close(); };

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-video]");
    if (!t) return;
    e.preventDefault();
    openVideo(t.dataset.video, t);
  });
  if (dlg) {
    dlg.addEventListener("close", () => {
      frame.innerHTML = "";
      lastFocus?.focus?.({ preventScroll: true });
    });
    // Click on the backdrop (the dialog element itself, outside .player-box) closes.
    dlg.addEventListener("click", (e) => { if (e.target === dlg) closeVideo(); });
    $("#player-close")?.addEventListener("click", closeVideo);
  }

  /* ---------- Copy email + toast ---------- */

  const toast = $("#toast");
  let toastTimer = 0;
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  };
  $$("[data-copy]").forEach((b) => {
    b.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copy);
        showToast("Email copied");
      } catch {
        showToast(b.dataset.copy);
      }
    });
  });

  /* ---------- Back to top ---------- */

  const toTop = $("#to-top");
  if (toTop) {
    let tRaf = 0;
    const toggleTop = () => { tRaf = 0; toTop.classList.toggle("is-hidden", scrollY < 600); };
    addEventListener("scroll", () => { if (!tRaf) tRaf = requestAnimationFrame(toggleTop); }, { passive: true });
    toggleTop();
    toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  }

  /* ---------- Footer year ---------- */

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
