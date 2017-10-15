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

function isScrolledIntoView(el) {
    scrollpos = window.scrollY;
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    // var min = (window.innerHeight-100)*(-1);
    var min = window.innerHeight;
    console.log(min);

    var isVisible = (elemTop <= (min-100)) && (elemBottom >= 0);
    console.log(scrollpos+' '+isVisible+' '+elemTop+' '+elemBottom);
    return isVisible;
    // document.body.scrollHeight;
}

// Sections
var goalsSupporters = document.getElementById("results-goals-supporters");
var impressions     = document.getElementById("results-impressions");
var media           = document.getElementById("results-media");
var whatsNext       = document.getElementById("results-whats-next");

// Scroll Events
window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 50){
        add_nav_class_on_scroll();
    }
    else {
        remove_nav_class_on_scroll();
    }
    // console.log(scrollpos);

    if(scrollpos > 200){
        add_footer_class_on_scroll();
    }
    else {
        remove_footer_class_on_scroll();
    }

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