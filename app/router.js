import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games');
  this.route('photos', function() {
    this.route('1');
    this.route('2');
    this.route('sports',{path:'/sports/:width/:height'});
    this.route('lifestyle');
  });
});

export default Router;
