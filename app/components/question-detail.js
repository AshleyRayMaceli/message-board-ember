import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    saveAnswer(answer, params) {
      this.sendAction('saveAnswer', answer, params);
    },
  }
});
