'use strict';
var crypto = require('crypto');

module.exports = function() {
  return {
    restaurantList : {},
    
    /**
     * Add a new restaurant to the store
     **/
    addRestaurant(name) {
      var id = crypto.randomBytes(20).toString('hex');
      this.restaurantList[id] = {}
      this.restaurantList[id].name = name.title
      this.restaurantList[id].mealList = {}
      this.restaurantList[id].orderlist = {}
      return 1;
      /*return new Promise(function(resolve, reject) {
        resolve();
      });*/
    },

    /**
     * Add a new meal
     **/
    addMeal(restaurantId,body) {
      var id = crypto.randomBytes(20).toString('hex');
      this.restaurantList[restaurantId].mealList[id] = body
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },
  
    /**
     * Delete purchase order by ID
     **/
    deleteOrder(restaurantId,orderId) {
      delete this.restaurantList[restaurantId].orderlist[orderId]
      return 1
    },

    /**
     * Fetch a QR Code info for a table.
     **/
    deleteQRCode(restaurantId,qrCodeId) {
    },
    
    /**
     * Deletes a restaurant
     **/
    deleteRestaurant(restaurantId) {
      delete this.restaurantList[restaurantId]
      return this.restaurantList;
    },

    /**
     * Finds restaurants by name
     **/
    findRestaurantsByName(name) {
      for(var i in this.restaurantList){
        if(this.restaurantList[i].name === name)
          return {id : i, data:this.restaurantList[i]}
      }
      /*return this.restaurantList.find(element => {
        return element.name === name;
      });*/
      
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * Add a new meal
     **/
    getMeal(restaurantId) {
      return this.restaurantList[restaurantId].mealList
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * Find purchase order by ID
     **/
    getOrderById(restaurantId, orderId) {
      return this.restaurantList[restaurantId].orderlist[orderId]
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * Fetch a QR Code info for a table.
     **/
    getQRCode(restaurantId,qrCodeId) {
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
    },

    /**
     * Find restaurant by ID
     **/
    getRestaurantById(restaurantId) {
      return this.restaurantList[restaurantId]
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * Place an order for food.
     **/
    placeOrder(restaurantId,body) {
      id = crypto.randomBytes(20).toString('hex');
      this.restaurantList[restaurantId].orderlist[id].push(body)
      return 1
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * Request a QR Code for a new table.
     **/
    requestQRCode(restaurantId,body) {
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
    },

    /**
     * Update a meal
     **/
    updateMeal(restaurantId,mealId,body) {
      this.restaurantList[restaurantId].mealList[mealId] = body
      return 1
      /*return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * Update a QR Code info for a table.
     **/
    updateQRCode(restaurantId,qrCodeId,body) {
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
    },

    /**
     * Update an existing restaurant
     **/
    updateRestaurant(body) {
      /*return new Promise(function(resolve, reject) {
        resolve();
      });*/
    },

    /**
     * Updates a restaurant in the store with form data
     **/
    updateRestaurantWithForm(restaurantId,name,status) {
      this.restaurantList[restaurantId].name = name
      this.restaurantList[restaurantId].status = status
      return 1
      /*return new Promise(function(resolve, reject) {
        resolve();
      });*/
    }, 

    /**
     * uploads an image
     **/
    uploadFile(restaurantId,additionalMetadata,file) {
     /* return new Promise(function(resolve, reject) {
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
      });*/
    },

    /**
     * uploads a meal image
     **/
    uploadMealFile(restaurantId,mealId,additionalMetadata,file) {
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
  }
}


















