import { defineStore } from "pinia"

export const layoutStore = defineStore('layoutStore', {
    state: () => {
        return {
            page: '',
            navbarFixed: false,
            btnColor: 'from-purple-700 to-pink-500',
            sidebarColor: 'xl:bg-transparent shadow-none'
        }
    },
    actions: {
        init() {
            const initPage = localStorage.getItem('page');
            const initNavbarFixed = localStorage.getItem('navbarFixed');
            const initBtnColor = localStorage.getItem('btnColor');
            const initsidebarColor = localStorage.getItem('sidebarColor');

            if(initPage) {
                this.page = initPage;
            }

            if(initNavbarFixed) {
                this.navbarFixed = initNavbarFixed;
            }

            if(initBtnColor) {
                this.btnColor = initBtnColor;
            }

            if(initsidebarColor) {
                this.sidebarColor = initsidebarColor;
            }
        },
    },
    persist: true,
});