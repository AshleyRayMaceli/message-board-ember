import DS from 'ember-data';

export default DS.Model.extend({
  asked: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  avatar: DS.attr()
});
