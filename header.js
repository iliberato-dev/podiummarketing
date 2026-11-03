class SiteHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.replace(/\\/g, '/');
        const isInPagesDirectory = currentPath.includes('/pages/');
        const isInArticlesDirectory = currentPath.includes('/pages/artigos/');
        const pagesPath = isInArticlesDirectory ? '../' : isInPagesDirectory ? '' : 'pages/';
        const homePath = isInArticlesDirectory
            ? '../../index.html'
            : isInPagesDirectory ? '../index.html' : 'index.html';
        const activePage = this.dataset.active;
        const whatsappUrl = 'https://wa.me/5511988831507';
        const links = [
            ['consultorias', 'Consultorias'],
            ['cursos', 'Cursos'],
            ['sobre', 'Sobre a Podium'],
            ['cases', 'Cases'],
            ['blog', 'Blog']
        ];
        const desktopLinkMarkup = ([page, label]) => {
            const activeClass = activePage === page
                ? 'text-brand-yellow'
                : 'text-gray-700 hover:text-brand-yellow';
            const currentPage = activePage === page ? ' aria-current="page"' : '';

            return `<a href="${pagesPath}${page}.html"${currentPage} class="transition-colors ${activeClass}">${label}</a>`;
        };
        const mobileLinkMarkup = ([page, label]) => {
            const activeClass = activePage === page
                ? 'text-brand-yellow'
                : 'text-gray-900 hover:bg-gray-50 hover:text-brand-yellow';
            const currentPage = activePage === page ? ' aria-current="page"' : '';

            return `<a href="${pagesPath}${page}.html"${currentPage} class="block px-3 py-3 rounded-md text-base font-medium ${activeClass}">${label}</a>`;
        };

        this.innerHTML = `
            <header class="bg-white sticky top-0 z-50 shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-20">
                        <a href="${homePath}" class="flex-shrink-0 flex items-center gap-2" aria-label="PODIUM, página inicial">
                            <span class="flex items-end gap-0.5 h-8" aria-hidden="true">
                                <span class="w-1.5 h-4 bg-brand-yellow rounded-t-sm"></span>
                                <span class="w-1.5 h-6 bg-brand-yellow rounded-t-sm"></span>
                                <span class="w-1.5 h-8 bg-brand-yellow rounded-t-sm"></span>
                            </span>
                            <span class="flex flex-col justify-center leading-none">
                                <span class="text-2xl font-bold text-brand-blue tracking-tight">PODIUM</span>
                                <span class="text-[0.55rem] font-semibold text-gray-500 tracking-widest uppercase mt-0.5">Inteligência Empresarial</span>
                            </span>
                        </a>
                        <nav aria-label="Navegação principal" class="hidden md:flex gap-7 items-center text-sm font-medium">
                            ${links.map(desktopLinkMarkup).join('')}
                        </nav>
                        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex bg-brand-yellow hover:bg-brand-yellowHover text-brand-blue font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md">Fale com um especialista</a>
                        <button type="button" id="mobile-menu-btn" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden text-gray-700 hover:text-brand-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow p-2">
                            <i class="fa-solid fa-bars text-2xl" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <nav aria-label="Navegação mobile" class="px-4 pt-2 pb-6 space-y-1">
                        ${links.map(mobileLinkMarkup).join('')}
                        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="block px-3 py-3 mt-2 text-center bg-brand-yellow text-brand-blue font-bold rounded-full">Fale com um especialista</a>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
