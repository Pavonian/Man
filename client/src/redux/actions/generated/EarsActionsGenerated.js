/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e8611528763035aac7a59c3
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN EarsActionsGenerated.js PLEASE EDIT ../EarsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import EarsApi from "../../../api/EarsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create ears
  createEars: function(ears) {
    return function(dispatch) {
      return EarsApi
        .createEars(ears)
        .then(ears => {
          dispatch(actionsFunction.createEarsSuccess(ears));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createEarsSuccess: function(ears) {
    return { type: types.CREATE_EARS_SUCCESS, payload: ears };
  },


  // Delete ears
  deleteEars: function(id) {
    return function(dispatch) {
      return EarsApi
        .deleteEars(id)
        .then(ears => {
          dispatch(actionsFunction.deleteEarsSuccess(ears));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteEarsSuccess: function(ears) {
    return { type: types.DELETE_EARS_SUCCESS, payload: ears };
  },


  // Find by ears
  findByears: function(key) {
    return function(dispatch) {
      return EarsApi
        .findByears(key)
        .then(item => {
          dispatch(actionsFunction.findByearsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByearsSuccess: function(item) {
    return { type: types.FINDBYEARS_EARS_SUCCESS, payload: item };
  },


  // Get ears
  loadEars: function(id) {
    return function(dispatch) {
      return EarsApi
        .getOneEars(id)
        .then(ears => {
          dispatch(actionsFunction.loadEarsSuccess(ears));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEarsSuccess: function(ears) {
    return { type: types.GET_EARS_SUCCESS, payload: ears };
  },

  // Load  list
  loadEarsList: function() {
    return function(dispatch) {
      return EarsApi
        .getEarsList()
        .then(list => {
          dispatch(actionsFunction.loadEarsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEarsListSuccess: function(list) {
    return { type: types.LIST_EARS_SUCCESS, payload: list };
  },

	
  // Save ears
  saveEars: function(ears) {
    return function(dispatch) {
      return EarsApi
        .saveEars(ears)
        .then(ears => {
          dispatch(actionsFunction.saveEarsSuccess(ears));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveEarsSuccess: function(ears) {
    return { type: types.UPDATE_EARS_SUCCESS, payload: ears };
  },


};

export default actionsFunction;
