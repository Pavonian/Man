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
 *  TO CUSTOMIZE FUNCTIONS IN EyesActionsGenerated.js PLEASE EDIT ../EyesActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import EyesApi from "../../../api/EyesApi";

let actionsFunction = {

  //CRUD METHODS

  // Create eyes
  createEyes: function(eyes) {
    return function(dispatch) {
      return EyesApi
        .createEyes(eyes)
        .then(eyes => {
          dispatch(actionsFunction.createEyesSuccess(eyes));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createEyesSuccess: function(eyes) {
    return { type: types.CREATE_EYES_SUCCESS, payload: eyes };
  },


  // Delete eyes
  deleteEyes: function(id) {
    return function(dispatch) {
      return EyesApi
        .deleteEyes(id)
        .then(eyes => {
          dispatch(actionsFunction.deleteEyesSuccess(eyes));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteEyesSuccess: function(eyes) {
    return { type: types.DELETE_EYES_SUCCESS, payload: eyes };
  },


  // Find by eyes
  findByeyes: function(key) {
    return function(dispatch) {
      return EyesApi
        .findByeyes(key)
        .then(item => {
          dispatch(actionsFunction.findByeyesSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByeyesSuccess: function(item) {
    return { type: types.FINDBYEYES_EYES_SUCCESS, payload: item };
  },


  // Get eyes
  loadEyes: function(id) {
    return function(dispatch) {
      return EyesApi
        .getOneEyes(id)
        .then(eyes => {
          dispatch(actionsFunction.loadEyesSuccess(eyes));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEyesSuccess: function(eyes) {
    return { type: types.GET_EYES_SUCCESS, payload: eyes };
  },

  // Load  list
  loadEyesList: function() {
    return function(dispatch) {
      return EyesApi
        .getEyesList()
        .then(list => {
          dispatch(actionsFunction.loadEyesListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEyesListSuccess: function(list) {
    return { type: types.LIST_EYES_SUCCESS, payload: list };
  },

	
  // Save eyes
  saveEyes: function(eyes) {
    return function(dispatch) {
      return EyesApi
        .saveEyes(eyes)
        .then(eyes => {
          dispatch(actionsFunction.saveEyesSuccess(eyes));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveEyesSuccess: function(eyes) {
    return { type: types.UPDATE_EYES_SUCCESS, payload: eyes };
  },


};

export default actionsFunction;