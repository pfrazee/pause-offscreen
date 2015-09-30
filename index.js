module.exports = function (parentEl) {
  var onscroll = function () {
    // would love to do this query once and cache it, but that doesnt work when the page changes a lot
    var els = Array.prototype.slice.call(parentEl.querySelectorAll('video, img'))
    for (var i=0; i < els.length; i++) {
      if (isInViewport(els[i]))
        show(els[i])
      else
        hide(els[i])
    }
  }

  onscroll() // show/hide now
  window.addEventListener('scroll', onscroll)
  return function () {
    window.removeEventListener('scroll', onscroll)
  }
}

function isInViewport (el) {
  var rect = el.getBoundingClientRect()
  var h = (window.innerHeight || document.documentElement.clientHeight)
  return (
    rect.top >= 0 && rect.top <= h || // top is in viewport
    rect.bottom >= 0 && rect.bottom <= h || // bottom is in viewport
    rect.top <= 0 && rect.bottom >= h // top is above, bottom is below
  );
}

function show (el) {
  if (el.pauseOffscreenShowing === true)
    return
  if (el.tagName === 'VIDEO') el.play()
  else el.style.visibility = 'visible'
  el.pauseOffscreenShowing = true
}

function hide (el) {
  if (el.pauseOffscreenShowing === false)
    return
  if (el.tagName === 'VIDEO') el.pause()
  else el.style.visibility = 'hidden'
  el.pauseOffscreenShowing = false
}