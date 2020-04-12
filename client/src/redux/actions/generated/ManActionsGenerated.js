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
 *  TO CUSTOMIZE FUNCTIONS IN ManActionsGenerated.js PLEASE EDIT ../ManActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ManApi from "../../../api/ManApi";

let actionsFunction = {

  //CRUD METHODS

  // Create man
  createMan: function(man) {
    return function(dispatch) {
      return ManApi
        .createMan(man)
        .then(man => {
          dispatch(actionsFunction.createManSuccess(man));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createManSuccess: function(man) {
    return { type: types.CREATE_MAN_SUCCESS, payload: man };
  },


  // Delete man
  deleteMan: function(id) {
    return function(dispatch) {
      return ManApi
        .deleteMan(id)
        .then(man => {
          dispatch(actionsFunction.deleteManSuccess(man));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteManSuccess: function(man) {
    return { type: types.DELETE_MAN_SUCCESS, payload: man };
  },


  // Get man
  loadMan: function(id) {
    return function(dispatch) {
      return ManApi
        .getOneMan(id)
        .then(man => {
          dispatch(actionsFunction.loadManSuccess(man));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadManSuccess: function(man) {
    return { type: types.GET_MAN_SUCCESS, payload: man };
  },

  // Load  list
  loadManList: function() {
    return function(dispatch) {
      return ManApi
        .getManList()
        .then(list => {
          dispatch(actionsFunction.loadManListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadManListSuccess: function(list) {
    return { type: types.LIST_MAN_SUCCESS, payload: list };
  },

	
  // Save man
  saveMan: function(man) {
    return function(dispatch) {
      return ManApi
        .saveMan(man)
        .then(man => {
          dispatch(actionsFunction.saveManSuccess(man));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveManSuccess: function(man) {
    return { type: types.UPDATE_MAN_SUCCESS, payload: man };
  },


};

export default actionsFunction;
