$(document).ready(function(){

$nav = $('.nav');
$toggleCollapse = $('.toggle-collapse');

/*-------click event on menu-----------*/
$toggleCollapse.click(function(){
$nav.toggleClass('collapse');
})

});