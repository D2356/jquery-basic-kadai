$(function() {
  $(window).on({
    'load': function() {
      console.log('loadイベントが発生しました');
    },
    'scroll':function() {
      console.log('scrollが発生しました');
    }
  });
});