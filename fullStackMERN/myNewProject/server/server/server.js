// const express = require('express');
// const app = express();
// const port = 8000;
    
// app.listen(port, () => console.log(`Listening on port: ${port}`) );

// const express = require('express');
// const app = express();
// require('./routes/person.routes')(app);   // We're importing the routes export. 
// // These two lines are the long-hand notation of the code above. They better show what's going on.
//     // const personRoutes = require("./routes/person.routes");  <-- assign the exported function to a const
//     // personRoutes(app);     <-- invoke the function and pass in the express "app" server
// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })

const express = require('express');
const cors = require('cors')    /* This is new */
const app = express();
app.use(cors())                 /* This is new */
/* This is a short-hand notation we use: */
require('./routes/person.routes')(app);
/* These two lines are the long-hand notation of the above code, to better illustrate what's going on: */
/* const personRoutes = require("./routes/person.routes"); */
/* personRoutes(app); */
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

