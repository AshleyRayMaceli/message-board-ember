import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  author: DS.attr(),
  avatar: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
