(function ($) {

  $.fn.extend({

    textFX: function (message, options) {

      var defaults = {
        delay: 0,
        mspl: 40
      };

      var settings = $.extend(defaults, options);
      var letters = message.split('');

      var shuffle = function () {
          return Math.random() < 0.5 ? 1 : -1;
        };

      return this.each(function () {

        var $this = $(this);
        var order = [],
          output = [];
        var length = letters.length;

        $this.text('');

        for (var i = 0; i < length; i++) {
          output[i] = Math.random() < 0.1 ? '<span class="dud">|</span>' : '';
          order[i] = i;
        }

        order.sort(shuffle);

        var o = {
          t: 0
        };
        var n, p;

        $(o).delay(settings.delay).animate({
          t: 1
        }, {
          duration: settings.mspl * length,
          step: function () {
            p = Math.floor(o.t * length);
            if (order[p] !== null) {
              n = order[p];
              output[n] = letters[n];
              order[p] = null;
            }
            $this.html(output.join(''));
          },
          complete: function () {
            $this.html(message);
          }
        });

      });
    }
  });
})(jQuery);

function go() {
  $('#tf1').textFX("DIMENSIONS", {
    delay: 0
  });
  // $('#tf2').textFX("Lorizzle ipsizzle dolizzle sit amizzle, sure adipiscing elizzle.", {
  //   delay: 1000
  // });
  // $('#tf3').textFX("Nullizzle sapizzle velizzle, i'm in the shizzle volutpizzle.", {
  //   delay: 1500
  // });
  // $('#tf4').textFX("Check out this yo mamma dolizzle dapibizzle hizzle tempizzle fizzle.", {
  //   delay: 1800
  // });
  // $('#tf5').textFX("Cool eleifend boofron phat. Bow wow wow dapibizzle.", {
  //   delay: 2000
  // });
  // $('#tf6').textFX("Bizzle suscipizzle. Integer semper fo shizzle sizzle purus.", {
  //   delay: 2200
  // });
};

$('#btn').click(function () {
  go();
  return false;
});

go();