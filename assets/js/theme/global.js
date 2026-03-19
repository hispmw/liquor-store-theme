import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import languageSelector from './global/language-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import AgeVerification from './custom/age-verification';
// Add import
import MegaNavigation from './custom/mega-navigation';

new MegaNavigation();

export default class Global extends PageManager {  // ✅ Class starts here
    onReady() {  // ✅ Method INSIDE the class
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        languageSelector();
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        svgInjector();
        
        // Initialize age verification
        new AgeVerification();
    //new MegaNavigation();

    }
}  // ✅ Class ends here