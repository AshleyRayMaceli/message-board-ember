import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        asked: this.get('asked'),
        author: this.get('author'),
        notes: this.get('notes'),
        avatar: this.get('avatar'),
      };
      this.sendAction('saveQuestion', params);
      this.set('asked', "");
      this.set('author', "");
      this.set('notes', "");
      this.set('avatar', "");
    }
  }
});
