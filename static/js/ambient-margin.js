(function () {
  "use strict";

  var root = document.getElementById("ambient-margin");
  if (!root) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(max-width: 720px)").matches) return;

  var blobs = root.querySelectorAll(".ambient-margin__blob");
  if (!blobs.length) return;

  var OPACITY_MAX_MIN = 0.06;
  var OPACITY_MAX_MAX = 0.11;
  var FADE_MS_MIN = 4000;
  var FADE_MS_MAX = 8000;

  function hash01(n) {
    var s = Math.sin(n * 12.9898) * 43758.5453123;
    return s - Math.floor(s);
  }

  function smooth01(t) {
    var i = Math.floor(t);
    var f = t - i;
    var u = f * f * (3 - 2 * f);
    return hash01(i) * (1 - u) + hash01(i + 1) * u;
  }

  function randBetween(a, b, seed) {
    return a + smooth01(seed) * (b - a);
  }

  function scheduleBlob(el, index) {
    var phase = hash01(index * 19.7) * 100;
    var fadeMs = Math.round(randBetween(FADE_MS_MIN, FADE_MS_MAX, phase + 2.3));
    el.style.transitionDuration = fadeMs + "ms";

    function tick(timeKey) {
      var t = phase + timeKey * 0.17 + index * 2.41;
      var waitBefore = randBetween(3000, 14000, t);
      var hold = randBetween(2000, 9000, t + 4.2);
      var maxOp = randBetween(OPACITY_MAX_MIN, OPACITY_MAX_MAX, t + 8.1);

      window.setTimeout(function () {
        el.style.opacity = String(maxOp);
        window.setTimeout(function () {
          el.style.opacity = "0";
          window.setTimeout(function () {
            tick(timeKey + smooth01(t + index) * 3 + 1);
          }, fadeMs + 400);
        }, hold);
      }, waitBefore);
    }

    tick(0);
  }

  for (var i = 0; i < blobs.length; i++) {
    scheduleBlob(blobs[i], i);
  }
})();
