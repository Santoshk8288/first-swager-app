'use strict';

var Restaurant = require('../../config/restaurantService')();

module.exports = {addMeal, addRestaurant, deleteOrder, deleteQRCode, deleteRestaurant, findRestaurantsByName, getMeal, getOrderById, getQRCode, getRestaurantById, placeOrder, requestQRCode, updateMeal, updateQRCode, updateRestaurant, updateRestaurantWithForm, uploadFile, uploadMealFile};

function addRestaurant (req, res, next) {
  var body = req.body;
  res.json({success: Restaurant.addRestaurant(body), description: "Restaurant added to the list!"})
};

function addMeal (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var body = req.body;
  res.json({success: Restaurant.addMeal(restaurantId,body), description: "Meal added to the Restaurant!"})
};

function deleteOrder (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var orderId = req.swagger.params['orderId'].value;
  if(Restaurant.deleteOrder(restaurantId,orderId)){
    res.json({success: 1, description: "Order deleted!"});
  }
  else{
    res.status(204).send();
  }
};

function deleteQRCode (req, res, next) {
  /*var restaurantId = req.swagger.params['restaurantId'].value;
  var qrCodeId = req.swagger.params['qrCodeId'].value;
  Restaurant.deleteQRCode(restaurantId,qrCodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
};

function deleteRestaurant (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  if(Restaurant.deleteRestaurant(restaurantId,api_key)){
    res.json({success: 1, description: "Restaurant deleted!"});
  }
  else{
    res.status(204).send();
  }
};

function findRestaurantsByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  var restaurant = Restaurant.findRestaurantsByName(name) 
  if(restaurant){
    res.json(restaurant)
  }
  else{
    res.status(204).send();
  }
};

function getMeal (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var mealId = req.swagger.params['mealId'].value;
  res.send(Restaurant.getMeal(restaurantId,mealId))
};

function getOrderById (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var orderId = req.swagger.params['orderId'].value;
  res.send(Restaurant.getOrderById(restaurantId,orderId))
};

function getQRCode (req, res, next) {
  /*var restaurantId = req.swagger.params['restaurantId'].value;
  var qrCodeId = req.swagger.params['qrCodeId'].value;
  Restaurant.getQRCode(restaurantId,qrCodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
};

function getRestaurantById (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  res.send(Restaurant.getRestaurantById(restaurantId))
};

function placeOrder (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var body = req.swagger.params['body'].value;
  res.send({success: Restaurant.placeOrder(restaurantId,body), description: "Meal added to the Restaurant!"}) 
};

function requestQRCode (req, res, next) {
  /*var restaurantId = req.swagger.params['restaurantId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.requestQRCode(restaurantId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
};

function updateMeal (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var mealId = req.swagger.params['mealId'].value;
  var body = req.swagger.params['body'].value;
  if(Restaurant.updateMeal(restaurantId,mealId,body)){
    res.json({success: 1, description: "Meal updated!"});
  }
  else{
    res.status(204).send();
  }
};

function updateQRCode (req, res, next) {
  /*var restaurantId = req.swagger.params['restaurantId'].value;
  var qrCodeId = req.swagger.params['qrCodeId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.updateQRCode(restaurantId,qrCodeId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
};

function updateRestaurant (req, res, next) {
  /*var body = req.swagger.params['body'].value;
  Restaurant.updateRestaurant(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
};

function updateRestaurantWithForm (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  if(Restaurant.updateRestaurantWithForm(restaurantId,name,status)){
    res.json({success: 1, description: "Restaurant updated!"});
  }
  else{
    res.status(204).send();
  }
};

function uploadFile (req, res, next) {
  /*var restaurantId = req.swagger.params['restaurantId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Restaurant.uploadFile(restaurantId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });*/
};

function uploadMealFile (req, res, next) {
  /*var restaurantId = req.swagger.params['restaurantId'].value;
  var mealId = req.swagger.params['mealId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Restaurant.uploadMealFile(restaurantId,mealId,additionalMetadata,file)
  .then(function (response) {
    utils.writeJson(res, response);
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });*/
};