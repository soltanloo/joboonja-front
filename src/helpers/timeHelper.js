var persianJs = require('persianjs');

export function calcTimeDifference(time, mode) {
  var now = new Date();
  var deadline = new Date(time);
  var distance = (deadline - now);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (mode === "compact")
    return persianJs(days + ":" + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2))
      .englishNumber().toString();
  else
    return persianJs(days + " روز و " + hours + " ساعت و " + minutes + " دقیقه و " + seconds + " ثانیه")
      .englishNumber().toString();
}

export function isPastDeadline(time) {
  var now = new Date();
  var deadline = new Date(time);
  var diffMs = (deadline - now);
  return diffMs <= 0;
}