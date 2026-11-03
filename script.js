document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = btn?.querySelector('i');

    if (!btn || !menu || !icon) {
        return;
    }

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const isExpanded = !menu.classList.contains('hidden');
        btn.setAttribute('aria-expanded', String(isExpanded));
        btn.setAttribute('aria-label', isExpanded ? 'Fechar menu' : 'Abrir menu');

        if (isExpanded) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Abrir menu');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            btn.focus();
        }
    });
});
