jQuery.moveClass
================

jQuery.moveClass allows you to, very simply, move a class (or set of classes) from an element in a group of
elements, to another in the same group. This is something one might find themselves doing very often, when creating
tabs, accordions, sliders and anything else where an element might have an "active" state.

To see an example of usage let's consider the tabs use case

```html
<section class="tabs">
  <ul>
    <li class="tabs__nav tabs__nav--active">Tab 1</li>
    <li class="tabs__nav">Tab 2</li>
    <li class="tabs__nav">Tab 3</li>
  </ul>
  <div class="tabs__wrap">
    <section class="tabs__tab tabs__tab--active">1</section>
    <section class="tabs__tab">2</section>
    <section class="tabs__tab">3</section>
  </div>
</section>
```

The `js` for this case could look something like the following:

```javascript
$('.tabs').each(function () {
  var module = $(this),
    nav = module.find('.tabs__nav'),
    tabs = module.find('.tabs__tab');

  module.on('click', '.tabs__nav', function () {
    nav.moveClass('tabs__nav--active', $(this));
    tabs.moveClass('tabs__tab--active', $(this).index());
  });
});
```

Notice that for the `nav` elements `moveClass` is accepting