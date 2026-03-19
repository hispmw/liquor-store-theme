export default class MegaNavigation {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupMegaMenu();
        this.setupTouchSupport();
    }
    
    setupMegaMenu() {
        const megaItems = document.querySelectorAll('.navPages-item--mega');
        
        megaItems.forEach(item => {
            const link = item.querySelector('.navPages-action');
            const subMenu = item.querySelector('.navPage-subMenu--mega');
            
            if (!subMenu) return;
            
            // Handle hover on desktop
            if (window.innerWidth > 768) {
                item.addEventListener('mouseenter', () => {
                    this.closeAllMegas();
                    subMenu.classList.add('is-open');
                });
                
                item.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        if (!item.matches(':hover')) {
                            subMenu.classList.remove('is-open');
                        }
                    }, 100);
                });
            }
            
            // Handle click on mobile
            if (link && subMenu) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        subMenu.classList.toggle('is-open');
                    }
                });
            }
        });
    }
    
    closeAllMegas() {
        document.querySelectorAll('.navPage-subMenu--mega.is-open').forEach(menu => {
            menu.classList.remove('is-open');
        });
    }
    
    setupTouchSupport() {
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navPages-item--mega')) {
                this.closeAllMegas();
            }
        });
    }
}