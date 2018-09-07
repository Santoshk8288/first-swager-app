'use strict';


/**
 * Add a new meal
 * 
 *
 * restaurantId Long ID of restaurant that needs to be updated
 * body Meal Meal information to add.
 * returns Meal
 **/
exports.addMeal = function(restaurantId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "dayTimePricing" : 12.5,
		  "nightTimePricing" : 15,
		  "mealDescription" : "Champignons, poivrons et cornichons dans une sauce crémeuse au poulet."
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new restaurant to the store
 * 
 *
 * body Restaurant restaurant object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addRestaurant = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value.         
 * Negative or non-integer values will generate API errors
 * restaurantId Long ID of restaurant that needs to be updated
 * orderId Long ID of the order that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteOrder = function(restaurantId,orderId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Fetch a QR Code info for a table.
 * 
 *
 * restaurantId Long ID of restaurant
 * qrCodeId Long QR Code ID to delete.
 * returns QRCode
 **/
exports.deleteQRCode = function(restaurantId,qrCodeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "restaurantId" : 7,
		  "tableRestaurantId" : "4",
		  "qrCodeUrl" : null,
		  "status" : "requested"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a restaurant
 * 
 *
 * restaurantId Long restaurant id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteRestaurant = function(restaurantId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds restaurants by name
 * 
 *
 * name String Name to filter by
 * returns List
 **/
exports.findRestaurantsByName = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
		  "photoUrls" : [ "photoUrls", "photoUrls" ],
		  "name" : "Piazza Mama",
		  "id" : 0,
		  "category" : {
		    "name" : "italian",
		    "id" : 6
		  },
		  "tags" : [ {
		    "name" : "terrasse",
		    "id" : 1
		  }, {
		    "name" : "shows",
		    "id" : 2
		  } ],
		  "status" : "available"
		}, {
		  "photoUrls" : [ "photoUrls", "photoUrls" ],
		  "name" : "Piazza Mama",
		  "id" : 0,
		  "category" : {
		    "name" : "italian",
		    "id" : 6
		  },
		  "tags" : [ {
		    "name" : "terrasse",
		    "id" : 1
		  }, {
		    "name" : "shows",
		    "id" : 2
		  } ],
		  "status" : "available"
		} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new meal
 * 
 *
 * restaurantId Long ID of restaurant
 * mealId Long ID of the Meal information to fetch.
 * returns Meal
 **/
exports.getMeal = function(restaurantId,mealId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "dayTimePricing" : 12.5,
		  "nightTimePricing" : 15,
		  "mealDescription" : "Champignons, poivrons et cornichons dans une sauce crémeuse au poulet."
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 *
 * restaurantId Long ID of restaurant that needs to be updated
 * orderId Long ID of restaurant that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(restaurantId,orderId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "restaurantId" : 6,
		  "quantity" : 1,
		  "id" : 0,
		  "orderDate" : "20000123T04:56:07.000+00:00",
		  "basket" : [ {
		    "mealId" : 6,
		    "quantity" : 1
		  } ],
		  "complete" : false,
		  "status" : "placed"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch a QR Code info for a table.
 * 
 *
 * restaurantId Long ID of restaurant
 * qrCodeId Long QR Code ID to fetch.
 * returns QRCode
 **/
exports.getQRCode = function(restaurantId,qrCodeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "restaurantId" : 7,
		  "tableRestaurantId" : "4",
		  "qrCodeUrl" : null,
		  "status" : "requested"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find restaurant by ID
 * Returns a single restaurant
 *
 * restaurantId Long ID of restaurant to return
 * returns Restaurant
 **/
exports.getRestaurantById = function(restaurantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "photoUrls" : [ "photoUrls", "photoUrls" ],
		  "name" : "Piazza Mama",
		  "id" : 0,
		  "category" : {
		    "name" : "italian",
		    "id" : 6
		  },
		  "tags" : [ {
		    "name" : "terrasse",
		    "id" : 1
		  }, {
		    "name" : "shows",
		    "id" : 2
		  } ],
		  "status" : "available"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Place an order for food.
 * 
 *
 * restaurantId Long ID of restaurant that needs to be updated
 * body Order Order to be added.
 * returns Order
 **/
exports.placeOrder = function(restaurantId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "restaurantId" : 6,
		  "quantity" : 1,
		  "id" : 0,
		  "orderDate" : "2000-01-23T04:56:07.000+00:00",
		  "basket" : [ {
		    "mealId" : 6,
		    "quantity" : 1
		  } ],
		  "complete" : false,
		  "status" : "placed"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request a QR Code for a new table.
 * 
 *
 * restaurantId Long ID of restaurant that needs to be updated
 * body QRCode QR Code information to use to create the QR Code.
 * returns QRCode
 **/
exports.requestQRCode = function(restaurantId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "restaurantId" : 7,
		  "tableRestaurantId" : "4",
		  "qrCodeUrl" : null,
		  "status" : "requested"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a meal
 * 
 *
 * restaurantId Long ID of restaurant
 * mealId Long ID of the Meal information to update.
 * body Meal Meal information to update.
 * returns Meal
 **/
exports.updateMeal = function(restaurantId,mealId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "dayTimePricing" : 12.5,
		  "nightTimePricing" : 15,
		  "mealDescription" : "Champignons, poivrons et cornichons dans une sauce crémeuse au poulet."
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a QR Code info for a table.
 * 
 *
 * restaurantId Long ID of restaurant
 * qrCodeId Long QR Code ID to update.
 * body QRCode QR Code information to use to create the QR Code.
 * returns QRCode
 **/
exports.updateQRCode = function(restaurantId,qrCodeId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
		  "id" : 0,
		  "restaurantId" : 7,
		  "tableRestaurantId" : "4",
		  "qrCodeUrl" : null,
		  "status" : "requested"
		};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing restaurant
 * 
 *
 * body Restaurant restaurant object that needs to be added
 * no response value expected for this operation
 **/
exports.updateRestaurant = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a restaurant in the store with form data
 * 
 *
 * restaurantId Long ID of restaurant that needs to be updated
 * name String Updated name of the restaurant (optional)
 * status String Updated status of the restaurant (optional)
 * no response value expected for this operation
 **/
exports.updateRestaurantWithForm = function(restaurantId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 * 
 *
 * restaurantId Long ID of restaurant to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function(restaurantId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads a meal image
 * 
 *
 * restaurantId Long ID of restaurant to update
 * mealId Long ID of restaurant to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns ApiResponse
 **/
exports.uploadMealFile = function(restaurantId,mealId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}



