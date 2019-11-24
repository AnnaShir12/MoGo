
// DROPDOWN WITH SCROLL

var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('div[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.fa-angle-down');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};


//TESTIMONIALS SLIDER

$(function(){
    	$('.sl').slick({
            arrows: true,
            appendArrows: $('.testimonial-slider-arrow'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    	});
    });

//OUR-WORK-SLIDER

  $(function(){
    	$('.our-work-sl').slick({
            arrows: true,
            appendArrows: $('.our-work-slider-arrow'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    	});
    });

//OPEN-MAP

let coll = document.getElementsByClassName('collapsible'); 
for(let i = 0; i < coll.length; i++){
    coll[i].addEventListener('click', function(){
        this.classList.toggle('active-map');
        let content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        } else{
            content.style.maxHeight=content.scrollHeight + 'px';
        }
    })
}