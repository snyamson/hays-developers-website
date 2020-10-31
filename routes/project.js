// REQUIRE EXPRESS ROUTER
const router = require("express").Router();
const _ = require('lodash');

//  DATA
const global = require("../data/global.json");
const projectData = require("../data/project.json");

// PROOJECT ROUTE
router.get('/projects/:projectName', (req, res) => {
    projectData.projectItems.forEach( projectitem => {
        const projectRequest = _.lowerCase(req.params.projectName); 
        if(projectRequest === _.lowerCase(projectitem.projectName)) {
            res.render("project", {
                global,
                pageTitle: "Our Awesome Projects",
                layout: "./layouts/single-view",
                projectName: projectitem.projectName,
                projectDesc : projectitem.projectDesc

                // add the remaining data
            }) 
        } // render 404 page to handle error params
    })
})

module.exports = router;