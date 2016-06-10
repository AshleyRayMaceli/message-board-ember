import Ember from 'ember';

var questions = [{
    asked: "What is the meaning of life?",
    author: "ExistentialEd00",
    notes: "Someone just tell me we aren't living in a Sims game please...",
    avatar: "http://thirdeyeactivation.com/wp-content/uploads/2014/11/ways-to-tell-if-third-eye-is-open.jpg"
  }, {
    asked: "What is the best puzzle book?",
    author: "CoolSkeleton95",
    notes: "I love puzzles! I need a whole library of puzzles. Help me get my collection started",
    avatar: "https://s-media-cache-ak0.pinimg.com/736x/5e/cb/76/5ecb764c6b7940eb4a6813d80ac6263c.jpg"
  }, {
    asked: "What is the best food cart in Portland?",
    author: "hangry88",
    notes: "There are so many to try! So tell me, which do you enjoy the most? Also, add location please! There are so many around here.",
    avatar: "http://data.whicdn.com/images/61914233/large.jpg"
  }];

export default Ember.Route.extend({
  model() {
    return questions;
  }
});
