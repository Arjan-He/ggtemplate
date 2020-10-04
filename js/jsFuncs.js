$(document).ready(function () {
	// Transition effect for navbar 
	$(window).scroll(function () {
		// checks if window is scrolled more than 500px, adds/removes solid class
		if ($(this).scrollTop() > 100) {

			$('.navbar').addClass('bg-panelblue');
		} else {
			$('.navbar').removeClass('bg-panelblue');
		}
	});
});


$(document).ready(function () {
			var acc = document.getElementsByClassName("accordion");
			var i;

			for (i = 0; i < acc.length; i++) {
				acc[i].addEventListener("click", function () {
					/* Toggle between adding and removing the "active" class,
					to highlight the button that controls the panel */
					this.classList.toggle("accordion-active");

					/* Toggle between hiding and showing the active panel */
					var comment = this.nextElementSibling;
					if (comment.style.display === "block") {
						comment.style.display = "none";
					} else {
						comment.style.display = "block";
					}
				});
			}
		});