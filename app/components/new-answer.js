import Ember from 'ember';

var clearAvatarChoice = function() {
  $("#pickSquare").removeClass("selected-avatar");
  $("#pickDiamond").removeClass("selected-avatar");
  $("#pickPyramid").removeClass("selected-avatar");
  $("#pickCat").removeClass("selected-avatar");
}

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        comment: this.get('comment'),
        username: this.get('username'),
        image: this.get('image'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('comment', "");
      this.set('username', "");
      this.set('image', "");
    },
    pickSquare() {
      clearAvatarChoice();
      this.set('image', "https://67.media.tumblr.com/36f3f6b6b1699e13bb63c042a53b6fff/tumblr_moa11zV41c1ru83xzo1_500.png");
      $("#pickSquare").addClass("selected-avatar");
    },
    pickDiamond() {
      clearAvatarChoice();
      this.set('image', "https://66.media.tumblr.com/9f9b498bf798ef43dddeaa78cec7b027/tumblr_o51oavbMDx1ugpbmuo7_500.png");
      $("#pickDiamond").addClass("selected-avatar");
    },
    pickPyramid() {
      clearAvatarChoice();
      this.set('image', "http://67.media.tumblr.com/75bad14fee104f69652084d545213291/tumblr_mldfty8fh41qcnibxo5_540.png");
      $("#pickPyramid").addClass("selected-avatar");
    },
    pickCat() {
      clearAvatarChoice();
      this.set('image', "https://66.media.tumblr.com/7d65a925636d6e3df94e2ebe30667c29/tumblr_nq1zg0MEn51qg6rkio1_500.jpg");
      $("#pickCat").addClass("selected-avatar");
    },
  }
});
