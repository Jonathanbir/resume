$(document).ready(function () {
  var zindex = 10;
  let clickBtn = false;
  $(".btn").click(function (e) {
    console.log("btn");
    clickBtn = true;
  });

  $(".chocolate").click(function (e) {
    window.open("https://stunning-sprite-4e12dc.netlify.app");
  });

  $(".lebledor").click(function (e) {
    window.open("https://willowy-dasik-238d60.netlify.app/");
  });

  $(".order-react").click(function (e) {
    window.open("https://practical-benz-e2a2b7.netlify.app/");
  });

  $(".order").click(function (e) {
    window.open("https://jonathanbir.github.io/orderspace_demo/");
  });

  $(".comfy").click(function (e) {
    window.open("https://testing-shop.netlify.app/");
  });

  $(".netflix").click(function (e) {
    window.open("https://festive-bell-b49145.netlify.app/");
  });

  $(".todolist").click(function (e) {
    window.open("https://sparkling-heliotrope-900765.netlify.app/");
  });

  $(".snack").click(function (e) {
    window.open("https://jonathanbir.github.io/snack/index.html");
  });

  $(".hib").click(function (e) {
    window.open("https://www.hib.com.tw/");
  });

  $(".adventure").click(function (e) {
    window.open("https://monumental-phoenix-415f88.netlify.app/");
    // window.open("https://luxury-valkyrie-d33462.netlify.app/");
  });

  $(".esomusic").click(function (e) {
    window.open("https://dulcet-stroopwafel-8c19b9.netlify.app/");
  });

  $(".workflow").click(function (e) {
    window.open("https://workflow-demo-mu.vercel.app/");
  });

  $(".deliveroo-app").click(function (e) {
    window.open("https://willowy-dasik-238d60.netlify.app/");
  });

  $(".in-and-out").click(function (e) {
    window.open("https://jonathanbir.github.io/in-and-out-webside/");
  });

  $(".jew").click(function (e) {
    window.open("https://jewshion.wpcomstaging.com/");
  });

  $(".kitchen").click(function (e) {
    window.open("https://www.infinitykitchen.com/");
    //window.open("https://jonathanbir.github.io/infinity-kitchen/index.html");
  });

  $(".mir").click(function (e) {
    window.open(
      "http://www.onead.com.tw/wp-content/themes/gravity/ft-video/onead_mirsk.mp4"
    );
  });

  $(".mib").click(function (e) {
    window.open(
      "http://www.onead.com.tw/wp-content/themes/gravity/ft-video/onead_micb.mp4"
    );
  });

  //   $(".").click(function (e) {
  //     window.open("");
  //   });

  //   $(".").click(function (e) {
  //     window.open("");
  //   });

  //   $(".").click(function (e) {
  //     window.open("");
  //   });

  $("div.card").click(function (e) {
    e.preventDefault();
    var isShowing = false;
    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing") && clickBtn === false) {
      // a card is already in view
      console.log("close");

      $("div.card.show").removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards").removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this).css({ zIndex: zindex }).addClass("show");
      }

      zindex++;
    } else {
      console.log("open");
      $(".toggle-info").click(function (e) {
        clickBtn = false;
      });
      // no cards in view
      clickBtn = false;
      $("div.cards").addClass("showing");
      $(this).css({ zIndex: zindex }).addClass("show");

      zindex++;
    }
  });
});
