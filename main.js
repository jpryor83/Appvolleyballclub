(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function initials(name) {
    return name.split(/\s+/).map(function (p) { return p.charAt(0); }).slice(0, 2).join("").toUpperCase();
  }
  // Show a photo if it loads, otherwise show initials
  function photoBox(cls, src, name) {
    var box = document.createElement("div");
    box.className = cls;
    var fallback = function () {
      box.innerHTML = '<span class="initials" aria-hidden="true">' + esc(initials(name)) + "</span>";
    };
    if (!src) { fallback(); return box; }
    var img = new Image();
    img.alt = name;
    img.loading = "lazy";
    img.onerror = fallback;
    img.src = src;
    box.appendChild(img);
    return box;
  }

  /* Header / footer basics */
  $("year").textContent = new Date().getFullYear();
  $("footLocation").textContent = S.location;
  var emailLink = $("footEmail");
  emailLink.href = "mailto:" + S.email;
  emailLink.textContent = S.email;
  if (S.phone) {
    $("footPhoneWrap").hidden = false;
    $("footPhone").href = "tel:" + S.phone.replace(/[^\d+]/g, "");
    $("footPhone").textContent = S.phone;
  }

  var logo = $("brandLogo");
  logo.addEventListener("error", function () { logo.remove(); });
  if (logo.complete && logo.naturalWidth === 0) { logo.remove(); }

  var toggle = document.querySelector(".nav-toggle");
  var nav = $("nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  /* Programs */
  $("programList").innerHTML = S.programs.map(function (p) {
    return '<article class="program"><h3>' + esc(p.name) + '</h3><p class="who">' + esc(p.who) +
      "</p><p>" + esc(p.text) + '</p><a class="link" href="' + esc(p.link) + '">' + esc(p.cta) + "</a></article>";
  }).join("");

  /* Payments */
  $("payList").innerHTML = S.payments.map(function (p) {
    var amt = p.amount ? '<p class="amount">' + esc(p.amount) + "</p>" : "";
    var btn = p.url
      ? '<a class="btn" href="' + esc(p.url) + '" rel="noopener">Pay now</a>'
      : '<span class="btn" aria-disabled="true">Link coming soon</span>';
    return '<div class="pay"><h3>' + esc(p.name) + "</h3>" + amt + "<p>" + esc(p.text) + "</p>" + btn + "</div>";
  }).join("");

  /* Next level (alumni) */
  var real = S.alumni.filter(function (a) { return !a.sample; });
  if (real.length) {
    $("alumniLead").textContent = real.length === 1
      ? "One of our players now plays college volleyball."
      : real.length + " of our players now play college volleyball. Here is where they landed.";
  }
  var activeLevel = "All";
  function renderAlumni() {
    var list = S.alumni.filter(function (a) { return activeLevel === "All" || a.level === activeLevel; })
      .sort(function (a, b) { return (b.classYear || 0) - (a.classYear || 0); });
    var host = $("alumniList");
    host.innerHTML = "";
    list.forEach(function (a) {
      var card = document.createElement("article");
      card.className = "player";
      card.appendChild(photoBox("player-photo", a.photo, a.name));
      var meta = [a.position, a.classYear ? "Class of " + a.classYear : "", a.highSchool].filter(Boolean).join(", ");
      var body = document.createElement("div");
      body.className = "player-body";
      body.innerHTML = "<h3>" + esc(a.name) + (a.sample ? '<span class="tag">Sample</span>' : "") + "</h3>" +
        '<p class="college">' + esc(a.college) + (a.level ? " (" + esc(a.level) + ")" : "") + "</p>" +
        '<p class="meta">' + esc(meta) + "</p>" +
        (a.note ? '<p class="quote">' + esc(a.note) + "</p>" : "");
      card.appendChild(body);
      host.appendChild(card);
    });
  }
  var levels = [];
  S.alumni.forEach(function (a) { if (a.level && levels.indexOf(a.level) === -1) levels.push(a.level); });
  if (levels.length > 1) {
    var fh = $("alumniFilters");
    fh.hidden = false;
    ["All"].concat(levels).forEach(function (l) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = l;
      b.setAttribute("aria-pressed", l === "All");
      b.addEventListener("click", function () {
        activeLevel = l;
        Array.prototype.forEach.call(fh.children, function (c) { c.setAttribute("aria-pressed", c === b); });
        renderAlumni();
      });
      fh.appendChild(b);
    });
  }
  renderAlumni();

  /* Coaches */
  var staffHost = $("staffList");
  S.staff.forEach(function (s) {
    var el = document.createElement("article");
    el.className = "coach";
    el.appendChild(photoBox("coach-photo", s.photo, s.name));
    var info = document.createElement("div");
    info.innerHTML = "<h3>" + esc(s.name) + '</h3><p class="role">' + esc(s.role) + "</p>" +
      s.bio.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    el.appendChild(info);
    staffHost.appendChild(el);
  });

  /* Events */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var upcoming = S.events.filter(function (e) { return new Date(e.date + "T00:00:00") >= today; })
    .sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  var evHost = $("eventList");
  if (!upcoming.length) {
    evHost.innerHTML = '<li class="empty">No events are posted right now. Follow us on Facebook or Instagram, or send a sign-up and we will tell you when dates are set.</li>';
  } else {
    evHost.innerHTML = upcoming.map(function (e) {
      var d = new Date(e.date + "T00:00:00");
      return '<li><div class="date"><span class="m">' + d.toLocaleString("en-US", { month: "short" }) +
        '</span><span class="d">' + d.getDate() + "</span></div><div><h3>" + esc(e.title) +
        (e.sample ? '<span class="tag" style="background:#e3ecf1">Sample</span>' : "") + '</h3><p class="place">' + esc(e.place) +
        "</p>" + (e.text ? "<p>" + esc(e.text) + "</p>" : "") + "</div></li>";
    }).join("");
  }

  /* Gallery: only keep photos that load */
  var gHost = $("galleryList");
  var gSection = $("gallery");
  S.photos.forEach(function (p) {
    var img = new Image();
    img.alt = p.alt;
    img.loading = "lazy";
    img.onload = function () {
      var fig = document.createElement("figure");
      fig.appendChild(img);
      gHost.appendChild(fig);
      gSection.hidden = false;
    };
    img.src = p.src;
  });

  /* Sign-up form */
  var sel = document.querySelector('select[name="grad_year"]');
  var y = new Date().getFullYear();
  for (var i = 0; i < 12; i++) {
    var o = document.createElement("option");
    o.value = o.textContent = y + i;
    sel.appendChild(o);
  }

  var form = $("signupForm");
  var status = $("formStatus");
  function setStatus(msg, cls) { status.textContent = msg; status.className = "status " + (cls || ""); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var missing = form.querySelectorAll("[required]");
    for (var k = 0; k < missing.length; k++) {
      if (!missing[k].value.trim()) {
        missing[k].focus();
        setStatus("Please fill in all required fields.", "err");
        return;
      }
    }
    var fd = new FormData(form);
    if (fd.get("_gotcha")) return; // spam trap
    var interests = fd.getAll("interest").join(", ");
    var data = {
      player: fd.get("player_first") + " " + fd.get("player_last"),
      graduation_year: fd.get("grad_year"),
      position: fd.get("position"),
      current_team: fd.get("current_team"),
      parent: fd.get("parent_name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      interested_in: interests,
      notes: fd.get("notes")
    };

    var notConfigured = !S.formEndpoint || S.formEndpoint.indexOf("XXXXXXXX") !== -1;
    if (notConfigured) {
      var body = Object.keys(data).map(function (k2) { return k2.replace(/_/g, " ") + ": " + data[k2]; }).join("\n");
      window.location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent("Sign-up: " + data.player) +
        "&body=" + encodeURIComponent(body);
      setStatus("Your email app should open with the sign-up filled in. Press send to finish.", "ok");
      return;
    }

    setStatus("Sending...", "");
    fetch(S.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) {
      if (!r.ok) throw new Error("bad status");
      form.reset();
      setStatus("Thank you! We received your sign-up and will email you soon.", "ok");
    }).catch(function () {
      setStatus("Something went wrong. Please try again or email " + S.email + ".", "err");
    });
  });
})();
