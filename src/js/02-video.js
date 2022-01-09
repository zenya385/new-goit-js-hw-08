import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

const currentTime = localStorage.getItem(CURRENT_TIME);

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
