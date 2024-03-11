import { Dropdown } from 'flowbite';

export function useDropdown (targetEl, triggerEl, placement) {
    // set the dropdown menu element
    const $targetEl = document.getElementById(targetEl);

    // set the element that trigger the dropdown menu on click
    const $triggerEl = document.getElementById(triggerEl);

    // options with default values
    const options = {
        placement: placement ?? 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: false,
        /*onHide: () => {
            console.log('dropdown has been hidden');
        },
        onShow: () => {
            console.log('dropdown has been shown');
        },
        onToggle: () => {
            console.log('dropdown has been toggled');
        },*/
    };

    // instance options object
    const instanceOptions = {
        id: targetEl,
        override: false,
    };

    /*
    * $targetEl: required
    * $triggerEl: required
    * options: optional
    * instanceOptions: optional
    */
    const dropdown = new Dropdown($targetEl, $triggerEl, options, instanceOptions);

    return dropdown.show() ?? dropdown.hide();
};