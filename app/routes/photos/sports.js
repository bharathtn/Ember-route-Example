import Ember from 'ember';

export default Ember.Route.extend({
     model : function(params){
        return `http://lorempixel.com/${params.width}/${params.height}/sports`;
    }
});
