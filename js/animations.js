$(document).ready(function () {
  // Skill Bars Animation with Delay
  $(".skill-done").each(function (index) {
    var $this = $(this);
    var percentage = $this.text();
    $this.css("width", "0");
    setTimeout(function () {
      $this.animate(
        {
          width: percentage,
        },
        {
          duration: 2000,
          step: function (now) {
            $this.find("strong").text(Math.round(now) + "%");
          },
        }
      );
    }, index * 1000); // Delay by index * 1000 ms
  });

  // Credentials Count Animation
  var $counters = $(".credentials-inner h1");
  var countersVisible = false;

  function animateCounters() {
    if (countersVisible) return;
    countersVisible = true;

    $counters.each(function () {
      var $this = $(this);
      var countTo = $this.text();
      $this.text("0");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  // Function to check if element is in viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function onScroll() {
    $(".credentials-inner").each(function (index) {
      if (isElementInViewport(this) && !$(this).hasClass("visible")) {
        var $element = $(this);
        setTimeout(function () {
          $element.addClass("visible");
        }, index * 500); // Delay by index * 500 ms
      }
    });

    var scrollTop = $(window).scrollTop();
    var offsetTop = $(".credentials").offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
      animateCounters();
    }
  }

  // Scroll event to trigger animations
  $(window).scroll(onScroll);

  // Initial check in case the elements are already visible on page load
  onScroll();
});
