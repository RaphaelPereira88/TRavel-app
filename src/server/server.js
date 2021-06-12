const app = require("./index.js");
app.set('port', process.env.PORT || 8081);

app.listen(app.get('port'), function () {
  console.log(`running on localhost: `, server.address().port);
});
