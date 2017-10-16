//Init WOW.js with animate.css
new WOW().init();

// Show/Hide Nav and Footer
var scrollpos = window.scrollY;
var topNav = document.getElementById("top-nav");
var progressFooter = document.getElementById("progress-footer");

function add_nav_class_on_scroll() {
    topNav.classList.add("up");
}

function remove_nav_class_on_scroll() {
    topNav.classList.remove("up");
}

function add_footer_class_on_scroll() {
    progressFooter.classList.add("show");
}

function remove_footer_class_on_scroll() {
    progressFooter.classList.remove("show");
}

var line_to_goals           = document.getElementById("progress-line--to-goals");
var line_to_impressions     = document.getElementById("progress-line--to-impressions");
var line_to_media           = document.getElementById("progress-line--to-media");
var line_to_next            = document.getElementById("progress-line--to-next");

function progress_grow_on_scroll(el) {
    el.classList.add("grow");
}

function progress_shrink_on_scroll(el) {
    el.classList.remove("grow");
}

function meter_grow_on_scroll(el) {
    el.classList.add("grow");
}

function meter_shrink_on_scroll(el) {
    el.classList.remove("grow");
}

function isScrolledIntoView(el) {
    scrollpos = window.scrollY;
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    // var min = (window.innerHeight-100)*(-1);
    var min = window.innerHeight;
    // console.log(min);

    var isVisible = (elemTop <= (min-200)) && (elemBottom >= 0);
    // console.log(scrollpos+' '+isVisible+' '+elemTop+' '+elemBottom);
    return isVisible;
    // document.body.scrollHeight;
}

function isMeterScrolledIntoView(el) {
    scrollpos = window.scrollY;
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    // var min = (window.innerHeight-100)*(-1);
    var min = window.innerHeight;
    // console.log(min);

    var isVisible = (elemTop <= (min)) && (elemBottom >= 0);
    // console.log(scrollpos+' '+isVisible+' '+elemTop+' '+elemBottom);
    return isVisible;
    // document.body.scrollHeight;
}

// Meter
var meter = document.getElementById("the-meter");

// Sections
var goalsSupporters = document.getElementById("results-goals-supporters");
var impressions     = document.getElementById("results-impressions");
var media           = document.getElementById("results-media");
var whatsNext       = document.getElementById("results-whats-next");

// Smooth Scroll
// https://jsfiddle.net/oneeezy/rrfwogxm/ 
!function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(window||this,function(e){"use strict";var t,n,o,r={},a=!!document.querySelector&&!!e.addEventListener,c={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},u=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},i=function(e,t){var n={};return u(e,function(t,o){n[o]=e[o]}),u(t,function(e,o){n[o]=t[o]}),n},l=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},s=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),o=n.length,r=-1,a="",c=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===c?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return a},d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},m=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},p=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))};r.animateScroll=function(t,n,r){var a=i(a||c,r||{}),u=p(t?t.getAttribute("data-options"):null);a=i(a,u),n="#"+f(n.substr(1));var l="#"===n?document.documentElement:document.querySelector(n),g=e.pageYOffset;o||(o=document.querySelector("[data-scroll-header]"));var b,O,y,S=null===o?0:s(o)+o.offsetTop,I=h(l,S,parseInt(a.offset,10)),H=I-g,E=m(),A=0;v(n,a.updateURL);var L=function(o,r,c){var u=e.pageYOffset;(o==r||u==r||e.innerHeight+u>=E)&&(clearInterval(c),l.focus(),a.callbackAfter(t,n))},Q=function(){A+=16,O=A/parseInt(a.speed,10),O=O>1?1:O,y=g+H*d(a.easing,O),e.scrollTo(0,Math.floor(y)),L(y,I,b)},C=function(){a.callbackBefore(t,n),b=setInterval(Q,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()};var g=function(e){var n=l(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),r.animateScroll(n,n.hash,t))},b=function(){n||(n=setTimeout(function(){n=null,headerHeight=null===o?0:s(o)+o.offsetTop},66))};return r.destroy=function(){t&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",b,!1),t=null,n=null,o=null)},r.init=function(n){a&&(r.destroy(),t=i(c,n||{}),o=document.querySelector("[data-scroll-header]"),document.addEventListener("click",g,!1),o&&e.addEventListener("resize",b,!1))},r});

// Initialize Smooth Scroll
smoothScroll.init({
    speed: 600,
    easing: 'easeInOutCubic',
    offset: 0,
    updateURL: true,
    callbackBefore: function ( toggle, anchor ) {},
    callbackAfter: function ( toggle, anchor ) {}
});

// Scroll Events
window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;
    // console.log(scrollpos);

    // Show/Hide Top Nav 
    if(scrollpos > 50){
        add_nav_class_on_scroll();
    }
    else {
        remove_nav_class_on_scroll();
    }

    // Show/Hide Progress Footer 
    if(scrollpos > 24){
        add_footer_class_on_scroll();
    }
    else {
        remove_footer_class_on_scroll();
    }
    
    // Meter 
    if (isMeterScrolledIntoView(meter) == true) {
        meter_grow_on_scroll(meter)
    } else {
        meter_shrink_on_scroll(meter)
    }

    // Grow/Shrink Progress Bars 
    if (isScrolledIntoView(goalsSupporters) == true) {
        progress_grow_on_scroll(line_to_goals)
    } else {
        progress_shrink_on_scroll(line_to_goals)
    }

    if (isScrolledIntoView(impressions) == true) {
        progress_grow_on_scroll(line_to_impressions)
        progress_grow_on_scroll(line_to_goals)
    } else {
        progress_shrink_on_scroll(line_to_impressions)
    }

    if (isScrolledIntoView(media) == true) {
        progress_grow_on_scroll(line_to_impressions)
        progress_grow_on_scroll(line_to_goals)
        progress_grow_on_scroll(line_to_media)
    } else {
        progress_shrink_on_scroll(line_to_media)
    }

    if (isScrolledIntoView(whatsNext) == true) {
        progress_grow_on_scroll(line_to_impressions)
        progress_grow_on_scroll(line_to_goals)
        progress_grow_on_scroll(line_to_media)
        progress_grow_on_scroll(line_to_next)
    } else {
        progress_shrink_on_scroll(line_to_next)
    }
});