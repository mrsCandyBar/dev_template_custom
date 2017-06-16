'use strict';

generateCake = function () {

  var $target = $('#target');
  var selectedCake = void 0;
  var cake = [{
    type: "Chocolate",
    ingredient: 'cocoa',
    taste: "chocolatey goodness"
  }, {
    type: "Strawberry",
    ingredient: 'strawberries',
    taste: "berry berry nice"
  }, {
    type: "Butterscotch",
    ingredient: 'caramel',
    taste: "creamy caramel clouds"
  }];

  var init = function () {
    _render();
    _bindUIevents();
  }();

  function _render() {
    $.get('template/cakeGen.html', function (template) {
      var rendered = Mustache.render(template, cake[_getRandomNumberBetween(0, 2)]);
      $target.html(rendered);
    });
  }

  function _getRandomNumberBetween(min, max) {
    var randomNumber = void 0,
        numberMin = min,
        numberMax = max;

    for (noOfTries = 0; noOfTries < 3; noOfTries++) {
      randomNumber = Math.round(Math.random() * (numberMax - numberMin) + numberMin);

      if (randomNumber != selectedCake) {
        selectedCake = randomNumber;
        return selectedCake;
      }

      if (noOfTries === 2) {
        selectedCake = selectedCake != 0 ? 0 : 1;
        return selectedCake;
      }
    }
  }

  function _bindUIevents() {
    $target.delegate('button', 'click', function () {
      _render();
    });
  };
}();