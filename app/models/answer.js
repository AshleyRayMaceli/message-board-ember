import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  author: DS.attr()
});
