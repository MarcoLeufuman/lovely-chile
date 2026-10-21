// Con esta clase el CSS sabe que el JS cargó y recién ahí esconde lo que va a animar
document.documentElement.classList.add('js');

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  document.documentElement.classList.contains('reduce-motion');

function initLogo() {
  const logo = document.querySelector('.logo');
  const replayButton = document.querySelector('[data-logo-replay]');
  if (!logo) return;

  const play = () => {
    logo.classList.remove('is-drawing');
    // Forzar un reflow para que el navegador reinicie la animación
    void logo.getBoundingClientRect();
    logo.classList.add('is-drawing');
  };

  play();
  replayButton?.addEventListener('click', play);
}

function initFontPicker() {
  document.querySelectorAll('[data-font-group]').forEach((group) => {
    const variable = group.dataset.fontGroup;

    group.addEventListener('change', (event) => {
      document.documentElement.style.setProperty(variable, event.target.value);
    });
  });
}

function initHearts() {
  const button = document.querySelector('[data-hearts]');
  if (!button) return;

  const wrap = button.parentElement;
  const total = 10;

  button.addEventListener('click', () => {
    if (prefersReducedMotion()) return;

    for (let i = 0; i < total; i += 1) {
      const heart = document.createElement('span');
      const angle = (Math.PI * 2 * i) / total + Math.random() * 0.5;
      const distance = 70 + Math.random() * 50;

      heart.className = 'heart-burst';
      heart.textContent = '♥';
      heart.setAttribute('aria-hidden', 'true');
      heart.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
      heart.style.setProperty('--y', `${Math.sin(angle) * distance - 30}px`);
      heart.style.setProperty('--r', `${Math.random() * 60 - 30}deg`);
      heart.addEventListener('animationend', () => heart.remove());

      wrap.append(heart);
    }
  });
}

function initTabs() {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  if (!tabs.length) return;

  const select = (tab) => {
    tabs.forEach((other) => {
      const isActive = other === tab;
      const panel = document.getElementById(other.getAttribute('aria-controls'));

      other.setAttribute('aria-selected', String(isActive));
      other.tabIndex = isActive ? 0 : -1;
      panel.hidden = !isActive;

      if (isActive) {
        panel.classList.remove('is-entering');
        void panel.offsetWidth;
        panel.classList.add('is-entering');
      }
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));

    // Flechas izquierda/derecha: así se navegan las pestañas con teclado según ARIA
    tab.addEventListener('keydown', (event) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
      if (!step) return;

      const next = tabs[(index + step + tabs.length) % tabs.length];
      next.focus();
      select(next);
    });
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
}

function initMotionToggle() {
  const toggle = document.querySelector('[data-motion-toggle]');
  if (!toggle) return;

  toggle.addEventListener('change', () => {
    document.documentElement.classList.toggle('reduce-motion', toggle.checked);
  });
}

// Cada demo por separado: si una falla, las demás siguen funcionando
[initLogo, initFontPicker, initHearts, initTabs, initReveal, initMotionToggle].forEach((init) => {
  try {
    init();
  } catch (error) {
    console.error(`No se pudo iniciar ${init.name}`, error);
  }
});
