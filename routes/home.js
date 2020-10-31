// REQUIRE EXPRESS ROUTER
const router = require("express").Router();

//  DATA
const global = require("../data/global.json");
const index = require("../data/index.json");
const projectData = require("../data/project.json");
const serviceData = require("../data/service.json");

// SERVICESDATA ARRAY
const serviceJson = serviceData.serviceItems;

// LOOPING TO GET 2 PER ROW SERVICES ITEMS
const serviceChunks = [];
const serviceChunkSize = 2;
for (let i = 0; i < serviceJson.length; i += serviceChunkSize) {
  serviceChunks.push(serviceJson.slice(i, i + serviceChunkSize));
}

// LOGS FOR CHECKING ERRORS
console.log(index);
console.log(serviceJson);
console.log(serviceChunks);
console.log(projectData);

// HOME ROUTE
router.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Hays Developers Ent | motto",
    global,
    home: index.home,
    serviceItem: serviceChunks,
    serviceData: serviceData,
    project: projectData,
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
})

module.exports = router;