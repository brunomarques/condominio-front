import { Tooltip } from 'flowbite';

export function useTooltip (targetEl, triggerEl, placement) {
    // set the tooltip content element
    const $targetEl = document.getElementById(targetEl);

    // set the element that trigger the tooltip using hover or click
    const $triggerEl = document.getElementById(triggerEl);

    // options with default values
    const options = {
        placement: placement ?? 'bottom',
        triggerType: 'hover',
        /*onHide: () => {
            console.log('tooltip is shown');
        },
        onShow: () => {
            console.log('tooltip is hidden');
        },
        onToggle: () => {
            console.log('tooltip is toggled');
        },*/
    };

    // instance options with default values
    const instanceOptions = {
        id: targetEl,
        override: true,
    };

    /*
    * $targetEl: required
    * $triggerEl: required
    * options: optional
    */
    const tooltip = new Tooltip($targetEl, $triggerEl, options, instanceOptions);

    return tooltip.show() ?? tooltip.hide();
};