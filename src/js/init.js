//Init WOW.js with animate.css
new WOW().init();

//use window.scrollY
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

});