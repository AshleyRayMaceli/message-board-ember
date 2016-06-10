import Ember from 'ember';

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
    },
  }
});
