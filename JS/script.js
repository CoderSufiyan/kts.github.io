$('.count').counterUp({
    delay: 10,
    time: 3000
})

// Get the button 
myButton = document.getElementById("myBtn");

// when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none"; 
    }
}

// When the user clicks on the button, scroll to the top of the element
function topFunction(){
    document.body.scrollTop = 0 ; // For the safari browser
    document.documentElement.scrollTop = 0 ; // For othe browsers like chrome and firefox etc.
}
