'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 25;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var MY_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 240, 20);
  ctx.fillText('Список результатов:', 220, 40);

  var maxTime = getMaxElement(times);
  var getCurrentHeight = function (i) {
    return Math.round(BAR_MAX_HEIGHT * times[i] / maxTime);
  };
  for (var i = 0; i < names.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = MY_COLOR;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP, BAR_WIDTH, -getCurrentHeight(i));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - 2 * FONT_GAP - GAP - getCurrentHeight(i));
  }
};
