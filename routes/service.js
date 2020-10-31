// REQUIRE EXPRESS ROUTER
const router = require("express").Router();
const _ = require('lodash');

//  DATA
const global = require("../data/global.json");
const serviceData = require("../data/service.json");

//SERVICE ROUTE
router.get('/services/:serviceName', (req, res) => {
    serviceData.serviceItems.forEach(serviceItem => {
        const serviceName = _.lowerCase(req.params.serviceName);
        if(serviceName === _.lowerCase(serviceItem.serviceName)) {
            res.render('service', {
                pageTitle: 'Our Awesome Services',
                layout: "./layouts/single-view",
                global,
                serviceName : serviceItem.serviceName,
                // add the rest

            })
        }// render 404 page to handle error params
    })
})



module.exports = router;