(function () {
  const d = new Date();
  const convertedSeconds =
    ((d.getSeconds() + d.getMilliseconds() / 1000) / 60) * 360;
  const convertedMinutes = (d.getMinutes() / 60) * 360;
  const convertedHours = ((d.getHours() + d.getMinutes() / 60) / 12) * 360;

  const rotateSecondsTo = convertedSeconds + 360;
  const rotateMinutesTo = convertedMinutes + 360;
  const rotateHoursTo = convertedHours + 360;

  const root = document.documentElement;
  root.style.setProperty("--s-rotate-from", convertedSeconds + "deg");
  root.style.setProperty("--m-rotate-from", convertedMinutes + "deg");
  root.style.setProperty("--h-rotate-from", convertedHours + "deg");
  root.style.setProperty("--s-rotate-to", rotateSecondsTo + "deg");
  root.style.setProperty("--m-rotate-to", rotateMinutesTo + "deg");
  root.style.setProperty("--h-rotate-to", rotateHoursTo + "deg");



  function tictac() {
    var d = new Date();
    var h = ('0' + d.getHours()).slice(-2),
      m = ('0' + d.getMinutes()).slice(-2),
      s = ('0' + d.getSeconds()).slice(-2);

    var color = '#' + h + m + s;
    document.getElementsByTagName('section')[0].style.backgroundColor = color

    setTimeout(tictac, 1000);
  }
  window.onload = tictac();
})();