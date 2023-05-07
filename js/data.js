$(document).ready(function(){
    // Insert current year into the Copyright text in the footer.  Note: MustacheJS is not needed to do this.
	$("#currentYear").html(new Date().getFullYear());

	// Define variables that reference our script tags within the body of our page
	var topNavigation = $("#topNavigation").html();
    var logoImage = $("#logoImage").html();
    var mainImage = $("#mainImage").html();
    
	// Have MustacheJS render our script tags
	Mustache.parse(topNavigation);
    Mustache.parse(mainImage);
    Mustache.parse(logoImage);

	
	// Define our data objects
	var topNav = Mustache.render(topNavigation, {
        item:
		[
			{
                name: "Home",
                link: "index.html"
            },
            {
                name: "Diet",
                link: "diet.html"
            },
            {
                name: "Fitness",
                link: "fitness.html"
            },
            {
                name: "Habits",
                link: "habits.html"
            },
            {
                name: "Contact",
                link: "contact.html"
            }
		]
    });

    var mainImg = Mustache.render(mainImage, {
        image: {
          src: "images/healthyhabits.jpg",
          alt: "Healthy Habit Image",
          class: "img-fluid",
          role: "img",
          ariaLabel: "Healthy Habits Image"
          
        }
      });

      var logoImg = Mustache.render(logoImage, {
        image: {
          src: "images/logo.png",
          alt: "Healthy Habit Logo",
          class: "img-fluid",
          role: "img",
          ariaLabel: "Healthy Habits Logo"
        },
        link: {
            href: "index.html"
        }  
      });
	
	// Place data into the HTML of our page with the html() jQuery method
	$("#render_topLinks").html(topNav);
	$("#render_mainImage").html(mainImg);
    $("#render_logoImage").html(logoImg);



	
});