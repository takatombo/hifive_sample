(function() {
  // 以下に処理を記述する
  /**
   * コントローラオブジェクト
   */
  var sampleController = {
    /**
     * コントローラ名（必須）
     */
    __name: 'sampleController'
  };
  h5.core.expose(sampleController);
})();

$(function() {
  // 以下に処理を記述する
  h5.core.controller('#target', sampleController);
});
