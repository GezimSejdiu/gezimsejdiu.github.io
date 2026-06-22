(function () {
  var cardId = "gs-profile-card";
  var spacerId = "gs-profile-card-spacer";
  var desktopBreakpoint = 1230;
  var defaultTopPx = 80;
  var listenersBound = false;
  var updateQueued = false;
  var resizeObserver = null;

  function getOrCreateSpacer(footer) {
    var spacer = document.getElementById(spacerId);
    if (!spacer) {
      spacer = document.createElement("div");
      spacer.id = spacerId;
      spacer.setAttribute("aria-hidden", "true");
    }

    if (spacer.parentNode !== footer.parentNode || spacer.nextSibling !== footer) {
      footer.parentNode.insertBefore(spacer, footer);
    }

    return spacer;
  }

  function getCardTopPx(card) {
    var stored = parseFloat(card.getAttribute("data-gs-base-top"));
    if (Number.isFinite(stored)) {
      return stored;
    }
    return defaultTopPx;
  }

  function updateCardPosition() {
    var card = document.getElementById(cardId);
    var spacer = document.getElementById(spacerId);
    if (!card) {
      if (spacer) {
        spacer.style.height = "0px";
      }
      return;
    }

    if (window.innerWidth < desktopBreakpoint) {
      card.style.position = "";
      card.style.top = "";
      card.style.maxHeight = "";
      card.style.overflowY = "";
      if (spacer) {
        spacer.style.height = "0px";
      }
      return;
    }

    var footer = document.querySelector(".md-footer");
    var topPx = getCardTopPx(card);
    if (!footer) {
      card.style.position = "fixed";
      card.style.top = topPx + "px";
      card.style.maxHeight = "";
      card.style.overflowY = "";
      if (spacer) {
        spacer.style.height = "0px";
      }
      return;
    }

    var scrollY = window.scrollY || window.pageYOffset;
    var gap = 16;

    // Keep the card full-height without introducing internal scroll.
    card.style.maxHeight = "";
    card.style.overflowY = "";

    var fixedTopAbs = scrollY + topPx;
    var footerTopAbs = footer.getBoundingClientRect().top + scrollY;
    var overlap = fixedTopAbs + card.offsetHeight + gap - footerTopAbs;

    spacer = getOrCreateSpacer(footer);
    spacer.style.height = (overlap > 0 ? overlap : 0) + "px";

    // Recalculate after spacer adjustment, then clamp card above footer.
    footerTopAbs = footer.getBoundingClientRect().top + scrollY;
    var stopTopAbs = footerTopAbs - card.offsetHeight - gap;

    if (fixedTopAbs >= stopTopAbs) {
      card.style.position = "absolute";
      card.style.top = Math.max(topPx, stopTopAbs) + "px";
    } else {
      card.style.position = "fixed";
      card.style.top = topPx + "px";
    }
  }

  function scheduleUpdateCardPosition() {
    if (updateQueued) {
      return;
    }
    updateQueued = true;
    window.requestAnimationFrame(function () {
      updateQueued = false;
      updateCardPosition();
    });
  }

  function bindPositionListeners() {
    if (listenersBound) {
      return;
    }
    listenersBound = true;
    window.addEventListener("scroll", scheduleUpdateCardPosition, { passive: true });
    window.addEventListener("resize", scheduleUpdateCardPosition);
    window.addEventListener("load", scheduleUpdateCardPosition);
  }

  function bindLayoutObservers(card) {
    if (typeof window.ResizeObserver !== "function" || resizeObserver) {
      return;
    }

    resizeObserver = new window.ResizeObserver(function () {
      scheduleUpdateCardPosition();
    });

    resizeObserver.observe(card);

    var footer = document.querySelector(".md-footer");
    if (footer) {
      resizeObserver.observe(footer);
    }

    var main = document.querySelector(".md-main");
    if (main) {
      resizeObserver.observe(main);
    }
  }

  function getSocialData() {
    var links = document.querySelectorAll(".md-footer .md-social__link");
    return Array.prototype.map.call(links, function (link) {
      return {
        link: link.getAttribute("href") || "#",
        name: link.getAttribute("title") || link.textContent.trim() || "Link",
        icon: link.getAttribute("title") || ""
      };
    });
  }

  function getIconClass(icon) {
    var iconMap = {
      "fontawesome/brands/github": "fa-brands fa-github",
      "fontawesome/brands/linkedin": "fa-brands fa-linkedin",
      "fontawesome/brands/x-twitter": "fa-brands fa-x-twitter",
      "fontawesome/brands/google-scholar": "fa-solid fa-graduation-cap"
    };

    var titleMap = {
      GitHub: "fa-brands fa-github",
      LinkedIn: "fa-brands fa-linkedin",
      X: "fa-brands fa-x-twitter",
      "Google Scholar": "fa-solid fa-graduation-cap"
    };

    return iconMap[icon] || titleMap[icon] || "fa-solid fa-link";
  }

  function injectProfileCard() {
    var existing = document.getElementById(cardId);
    if (existing) {
      scheduleUpdateCardPosition();
      return;
    }

    var socialLinks = getSocialData();
    var socialMarkup = socialLinks
      .map(function (social) {
        var iconClass = getIconClass(social.icon);
        return [
          '      <li class="gs-contact-item"><a href="' + social.link + '" target="_blank" rel="noopener noreferrer">',
          '        <span class="gs-contact-icon"><i class="' + iconClass + '" aria-hidden="true"></i></span>',
          '        <span class="gs-contact-label">' + social.name + '</span>',
          '      </a></li>'
        ].join("");
      })
      .join("\n");

    var card = document.createElement("aside");
    card.id = cardId;
    card.className = "gs-profile-card";
    card.innerHTML = [
      '<div class="gs-profile-card-inner" itemscope itemtype="http://schema.org/Person">',
      '  <div class="author__avatar">',
      '    <img src="https://avatars3.githubusercontent.com/u/5259296?s=400&u=2923073a71257798968eb57c860c45d4e7a18d72&v=4" alt="Dr. Gezim Sejdiu" loading="lazy" />',
      '  </div>',
      '  <div class="author__content">',
      '    <h3 class="author__name">Dr. Gezim Sejdiu</h3>',
      '    <p class="author__bio">Chief Data Engineer at <a href="https://www.dpdhl.jobs/data-science" target="_blank" rel="noopener noreferrer">DPDHL</a> &amp; Assistant Professor at <a href="https://www.universum-ks.org/" target="_blank" rel="noopener noreferrer">Universum College</a>. PhD from <a href="https://www.uni-bonn.de/" target="_blank" rel="noopener noreferrer">Uni Bonn</a> in the <a href="http://sda.tech" target="_blank" rel="noopener noreferrer">SDA research group</a>. #BigData #SemanticWeb. Opinions are my own.</p>',
      '  </div>',
      '  <div class="author__urls-wrapper">',
      '    <button class="gs-follow-btn" type="button" aria-expanded="false">Follow</button>',
      '    <ul class="author__urls">',
      '      <li class="gs-contact-item">',
      '        <span class="gs-contact-icon"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></span>',
      '        <span class="gs-contact-label">Bonn, Germany</span>',
      '      </li>',
      '      <li class="gs-contact-item"><a href="mailto:sejdiu@cs.uni-bonn.de">',
      '        <span class="gs-contact-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></span>',
      '        <span class="gs-contact-label">Email</span>',
      '      </a></li>',
      socialMarkup,
      '    </ul>',
      '  </div>',
      '</div>',
    ].join("");

    document.body.appendChild(card);

    var initialTop = parseFloat(window.getComputedStyle(card).top);
    card.setAttribute(
      "data-gs-base-top",
      String(Number.isFinite(initialTop) ? initialTop : defaultTopPx)
    );

    var followButton = card.querySelector(".gs-follow-btn");
    var urls = card.querySelector(".author__urls");

    if (followButton && urls) {
      followButton.addEventListener("click", function () {
        var expanded = followButton.getAttribute("aria-expanded") === "true";
        followButton.setAttribute("aria-expanded", expanded ? "false" : "true");
        urls.classList.toggle("is-open", !expanded);
        scheduleUpdateCardPosition();
      });
    }

    var avatar = card.querySelector(".author__avatar img");
    if (avatar) {
      avatar.addEventListener("load", scheduleUpdateCardPosition, { once: true });
    }

    bindPositionListeners();
    bindLayoutObservers(card);
    scheduleUpdateCardPosition();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectProfileCard);
  } else {
    injectProfileCard();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(injectProfileCard);
  }
})();
