# pause offscreen

On web pages, hide gifs and pause videos when they're scrolled offscreen, to save CPU cycles.

```js
var pauser = require('pause-offscreen')
var unlistenPauser = pauser(containerEl)
ui.onTeardown(unlistenPauser)
```

Notes
 - Only bothers checking vertical scroll position
 - Does not check if the page is visible (just checks if the element is in the viewport)
 - Shows/hides on initial call, then on scroll
 - Hides *all* images when they go out of viewport (visibility=hidden) because my usecase couldnt use the filename's extension to differentiate gifs from other images.