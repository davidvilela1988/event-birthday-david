AOS.init();

const dateEvent = new Date("Mar 11, 2026 19:00:00");
const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(function () {
  const now = new Date();
  const timeStampCurrent = now.getTime();

  const timeUntilEvent = timeStampEvent - timeStampCurrent;

  const dayInMS = 1000 * 60 * 60 * 24;
  const hourInMS = 1000 * 60 * 60;
  const MinuteInMS = 1000 * 60;

  const daysUntilEvent = Math.floor(timeUntilEvent / dayInMS);
  const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMS) / hourInMS);
  const minutesUntilEvent = Math.floor(
    (timeUntilEvent % hourInMS) / MinuteInMS
  );
  const secondsUntilEvent = Math.floor((timeUntilEvent % MinuteInMS) / 1000);

  document.getElementById(
    "counter"
  ).innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

  if (timeUntilEvent < 0) {
    clearInterval(countHours);
    document.getElementById("counter").innerHTML = "Evento Expirado";
  }
}, 1000);
