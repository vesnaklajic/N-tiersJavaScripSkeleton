
const app = require('./config/server')

   // config = require('./config/env');
  


app.listen(3000, () => {
    console.log('Started server at 3000');
    //app.listen(config.app_port, () => {
    //    console.log('server started');
});



