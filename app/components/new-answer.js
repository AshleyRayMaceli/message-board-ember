import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        comment: this.get('comment'),
        author: this.get('author'),
        avatar: this.get('avatar'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    },
  }
});
