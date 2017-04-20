;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M755.608533 932.927795 268.394537 932.927795c-28.85637 0-52.204058-20.154016-52.204058-44.995797L216.190479 107.928105c0-24.840758 23.347688-44.995797 52.204058-44.995797l487.213997 0c28.852277 0 52.200988 20.154016 52.200988 44.995797l0 780.003893C807.808498 912.773779 784.46081 932.927795 755.608533 932.927795zM511.999488 887.931998c19.203128 0 34.803046-13.4575 34.803046-30.008454 0-16.549931-15.599919-30.007431-34.803046-30.007431-19.200058 0-34.798953 13.4575-34.798953 30.007431C477.199512 874.474498 492.799431 887.931998 511.999488 887.931998zM755.608533 152.923902l-17.401012 0L285.791455 152.923902l-17.397942 0 0 629.996414 17.397942 0 452.415044 0 17.401012 0L755.60751 152.923902z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M765.814384 702.922331 569.691762 510.694261 765.790847 318.500984 705.461405 259.343653 509.349017 451.550233 313.247885 259.343653 252.919466 318.500984 449.010364 510.686075 252.868299 702.922331 313.247885 762.02952 509.355157 569.82908 705.461405 762.02952Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M31.616 199.36c0-33.504 27.168-60.672 60.672-60.672s60.672 27.168 60.672 60.672c0 33.504-27.168 60.672-60.672 60.672s-60.672-27.168-60.672-60.672zM23.936 500.032c0-33.536 27.2-60.736 60.736-60.736s60.736 27.2 60.736 60.736c0 33.536-27.2 60.736-60.736 60.736s-60.736-27.2-60.736-60.736zM23.936 802.24c0-33.536 27.2-60.736 60.736-60.736s60.736 27.2 60.736 60.736c0 33.536-27.2 60.736-60.736 60.736s-60.736-27.2-60.736-60.736zM995.392 196.544c0 32-23.744 57.856-53.12 57.856l-629.76 0c-29.376 0-53.184-25.92-53.184-57.856l0 0c0-31.936 23.744-57.856 53.184-57.856l629.696 0c29.44 0 53.184 25.92 53.184 57.856l0 0zM995.392 497.28c0 31.936-23.744 57.856-53.12 57.856l-629.76 0c-29.376 0-53.184-25.92-53.184-57.856l0 0c0-32 23.744-57.856 53.184-57.856l629.696 0c29.44-0.064 53.184 25.856 53.184 57.856l0 0zM995.392 799.296c0 32-23.744 57.92-53.12 57.92l-629.76 0c-29.376 0-53.184-25.92-53.184-57.92l0 0c0-31.872 23.744-57.792 53.184-57.792l629.696 0c29.44 0 53.184 25.92 53.184 57.792l0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M365.11753 470.249702l94.903462 182.603925c0 0 154.220948-371.101213 397.451996-494.79409-5.938523 88.355281-29.647453 164.923837 11.854465 259.195061C762.546946 440.782889 543.069989 705.871312 471.875458 835.457552c-100.841985-123.715458-219.499537-217.941521-302.525954-247.408335L365.11753 470.249702z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-triangle-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M857.308 810.538h-692.46l343.068-593.65z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 896c-211.2 0-384-172.8-384-384 0-211.2 172.8-384 384-384 211.2 0 384 172.8 384 384C896 723.2 723.2 896 512 896zM512 165.12C320 165.12 165.12 320 165.12 512S320 858.88 512 858.88 858.88 704 858.88 512 704 165.12 512 165.12z"  ></path>' +
    '' +
    '<path d="M512 896c-211.2 0-384-172.8-384-384 0-211.2 172.8-384 384-384 211.2 0 384 172.8 384 384C896 723.2 723.2 896 512 896zM512 165.12C320 165.12 165.12 320 165.12 512S320 858.88 512 858.88 858.88 704 858.88 512 704 165.12 512 165.12z"  ></path>' +
    '' +
    '<path d="M349.991808 324.639104l349.363968 349.363968-26.247552 26.247552-349.363968-349.363968 26.247552-26.247552Z"  ></path>' +
    '' +
    '<path d="M674.013312 324.639104l26.247552 26.247552-349.363968 349.363968-26.247552-26.247552 349.363968-349.363968Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)