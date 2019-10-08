$( document ).ready(function() {
    console.log( "ready!" );
    $('.qa-container').click(accordionHandler);
});

function accordionHandler (e) {
    console.log(e.target);
    let target = $(e.currentTarget);
    if ($(e.target.parentNode).hasClass('question-container')) {
        // let target = $(e.currentTarget);
        console.log('clicked question', e.currentTarget);
        if (target.hasClass('expanded')) {
            target.removeClass('expanded');
        } else {
            target.addClass('expanded');
        }
    } else {
        console.log(e.target)
    }
}