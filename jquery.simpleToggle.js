/**
 * Simple Toggle
 *
 * jQuery plugin. Set toggle action.
 *
 * @version 0.2.3
 * @author Marcin Dobroszek <marcin.dobroszek@gmail.pl>
 * @license The MIT License (MIT)
 *
 * @todo "target" param with object variant recognized options with "closest", "parents", etc.
 * @todo "event" param with 'click' default value
 * @todo add .prefixData() plugin
 * @todo toggle classname from one to another ("classname":{"first-version":"second-ver"})
 */
;(function($, undefined) {
    'use strict';

    $.fn.simpleToggle = function () {
        this.on('click', function (event) {
            var $toggle = $(this),
            // expected format
            //   eg.: <elem data-toggle='{"items":[{"target":".selector1","classname":"visible-element"},{"target":".selector2"}]}' />
                toggleData = $toggle.data('toggle') || {},
                items = toggleData.items || [],
                $toggleTarget;

            if (typeof toggleData !== 'object') {
                $.error('Value of "data-toggle" attribute (' + toggleData + ') do not have JSON format.')
            }

            event.preventDefault();

            // if it is NOT multi-items we need to create singe-item-array
            //   eg. simple variant: <elem data-toggle-target=".selector" data-toggle-classname="visible-element" />
            //  or
            //   eg. json variant: <elem data-toggle='{"target":".selector","classname":"visible-element"}' />
            if (items.length === 0) {
                items.push({
                    target: toggleData.target || $toggle.data('toggle-target') || null,
                    classname: toggleData.classname || $toggle.data('toggle-classname') || null,
                });
            }

            items.forEach(function (item) {
                if (item.target) {
                    $toggleTarget = item.target === 'parent' ? $toggle.parent() : $(item.target);
                    if ($toggleTarget.length === 0) {
                        $.error('Element "' + item.target + '" can not be found.');
                    }
                } else {
                    $toggleTarget = $toggle;
                }

                if (item.classname) {
                    $toggleTarget.toggleClass(item.classname);
                } else {
                    $toggleTarget.toggle();
                }
            });
        });

        return this;
    };
})(jQuery);
