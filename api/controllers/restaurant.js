'use strict';

var Restaurant = require('../../config/restaurantService');

module.exports = {addMeal, addRestaurant, deleteOrder, deleteQRCode, deleteRestaurant, findRestaurantsByName, getMeal, getOrderById, getQRCode, getRestaurantById, placeOrder, requestQRCode, updateMeal, updateQRCode, updateRestaurant, updateRestaurantWithForm, uploadFile, uploadMealFile};

function addMeal (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.addMeal(restaurantId,body)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function addRestaurant (req, res, next) {
  var body = req.swagger.params['body'].value;
  Restaurant.addRestaurant(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function deleteOrder (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var orderId = req.swagger.params['orderId'].value;
  Restaurant.deleteOrder(restaurantId,orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function deleteQRCode (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var qrCodeId = req.swagger.params['qrCodeId'].value;
  Restaurant.deleteQRCode(restaurantId,qrCodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function deleteRestaurant (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Restaurant.deleteRestaurant(restaurantId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function findRestaurantsByName (req, res, next) {
  var name = req.swagger.params['name'].value;
  Restaurant.findRestaurantsByName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function getMeal (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var mealId = req.swagger.params['mealId'].value;
  Restaurant.getMeal(restaurantId,mealId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function getOrderById (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var orderId = req.swagger.params['orderId'].value;
  Restaurant.getOrderById(restaurantId,orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function getQRCode (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var qrCodeId = req.swagger.params['qrCodeId'].value;
  Restaurant.getQRCode(restaurantId,qrCodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function getRestaurantById (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  Restaurant.getRestaurantById(restaurantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function placeOrder (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.placeOrder(restaurantId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function requestQRCode (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.requestQRCode(restaurantId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function updateMeal (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var mealId = req.swagger.params['mealId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.updateMeal(restaurantId,mealId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function updateQRCode (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var qrCodeId = req.swagger.params['qrCodeId'].value;
  var body = req.swagger.params['body'].value;
  Restaurant.updateQRCode(restaurantId,qrCodeId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function updateRestaurant (req, res, next) {
  var body = req.swagger.params['body'].value;
  Restaurant.updateRestaurant(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function updateRestaurantWithForm (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Restaurant.updateRestaurantWithForm(restaurantId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function uploadFile (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Restaurant.uploadFile(restaurantId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

function uploadMealFile (req, res, next) {
  var restaurantId = req.swagger.params['restaurantId'].value;
  var mealId = req.swagger.params['mealId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Restaurant.uploadMealFile(restaurantId,mealId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};