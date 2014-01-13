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
};

go();