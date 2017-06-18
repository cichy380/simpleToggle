# Simple Toggle

Simple Toggle is [jQuery](https://jquery.com/) plugin for toggle effects called via data attributes.

## Getting Started

### Installation

Put the script at the [bottom](https://developer.yahoo.com/performance/rules.html#js_bottom) of your markup right after
jQuery:

```html
<script src="jquery.js"></script>
<script src="jquery.simpleToggle.js"></script>
```

### Initialize

Simple example with full required code (HTML tag, selector, library, plugin and initialization):

```html
<button type="button" class="toggle"></button>

<script src="jquery.js"></script>
<script src="jquery.simpleToggle.js"></script>
<script>
    $('.toggle').simpleToggle();
</script>
```

## Example of usage

### classname

Add or remove one or more classes from clicked element, depending on either the class's presence.

```html
<button type="button" class="toggle" data-toggle-classname="toggle-classname">click me</button>
```

### target

Display or hide target element.

```html
<button type="button" class="toggle" data-toggle-target=".target">click me</button>
<div class="target">Target element</div>
```

### JSON syntax

Previous example in concise format.

```html
<button type="button" class="toggle" data-toggle='{"target":".target", "classname":"toggle-classname"}'>click me</button>
<div class="target">Target element</div>
```

**Syntax:** Parameter given in `data-toggle` attribute must have always
[JSON syntax](https://www.w3schools.com/js/js_json_syntax.asp).

### multi target

Thanks to JSON format and `items` property it is possible to change any number of targets.

```html
<button type="button"
        class="toggle"
        data-toggle='{
            "items": [
                {
                    "target":".target-1",
                    "classname":"toggle-classname"
                },
                {
                    "target":".target-2"
                }
            ]
        }'>click me</button>
<div class="target-1">Target element #1</div>
<div class="target-2">Target element #2</div>
```

**More live examples** available on
[http://example.silversite.pl/simple-toggle/](http://example.silversite.pl/simple-toggle/)

## License

Code released under the MIT license.
