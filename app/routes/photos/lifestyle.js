import Ember from 'ember';

export default Ember.Route.extend({
    model : function(){
        return 'http://lorempixel.com/400/200/nightlife';
    }
});
