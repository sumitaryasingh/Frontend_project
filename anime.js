

/*
#################################################################################
___________________________________header scroll
#################################################################################*/




window.onscroll = function() {
    addScrollAnimation();
};

function addScrollAnimation() {
    var header = document.getElementById("header");

    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Define a scroll threshold (adjust as needed)
    var scrollThreshold = 100;

    // Check if the scroll position is below the threshold
    if (scrollPosition > scrollThreshold) {
        // Add a class when scrolled down
        header.classList.add("scrolled");
    } else {
        // Remove the class when scrolled back to the top
        header.classList.remove("scrolled");
    }
}

/*
#################################################################################
___________________________________card animation
#################################################################################*/


const card = document.getElementById('myCard');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  // You can adjust this threshold as needed
  const triggerPosition = card.offsetTop - window.innerHeight * 0.75;

  if (scrollPosition > triggerPosition) {
    card.style.transform = 'scale(1.2)';
  } else {
    card.style.transform = 'scale(1)';
  }
});



document.getElementById('addToCartBtn').addEventListener('click', function () {
  addToCart();
});

function addToCart() {
  // Implement your logic to add the product to the cart
  alert('Product added to cart!');
  // You can replace the alert with actual logic to add the product to the cart
}













