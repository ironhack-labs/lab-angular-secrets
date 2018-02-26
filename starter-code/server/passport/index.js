const passsport = require ('passport');
require('./serializers');
require('./local.strategy');
module.export = (app) =>{
    app.use(passsport.initialize());
    app.use(passsport.session());

}