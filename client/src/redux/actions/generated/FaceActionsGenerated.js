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
 *  TO CUSTOMIZE FUNCTIONS IN FaceActionsGenerated.js PLEASE EDIT ../FaceActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import FaceApi from "../../../api/FaceApi";

let actionsFunction = {

  //CRUD METHODS

  // Create face
  createFace: function(face) {
    return function(dispatch) {
      return FaceApi
        .createFace(face)
        .then(face => {
          dispatch(actionsFunction.createFaceSuccess(face));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createFaceSuccess: function(face) {
    return { type: types.CREATE_FACE_SUCCESS, payload: face };
  },


  // Delete face
  deleteFace: function(id) {
    return function(dispatch) {
      return FaceApi
        .deleteFace(id)
        .then(face => {
          dispatch(actionsFunction.deleteFaceSuccess(face));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteFaceSuccess: function(face) {
    return { type: types.DELETE_FACE_SUCCESS, payload: face };
  },


  // Get face
  loadFace: function(id) {
    return function(dispatch) {
      return FaceApi
        .getOneFace(id)
        .then(face => {
          dispatch(actionsFunction.loadFaceSuccess(face));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadFaceSuccess: function(face) {
    return { type: types.GET_FACE_SUCCESS, payload: face };
  },

  // Load  list
  loadFaceList: function() {
    return function(dispatch) {
      return FaceApi
        .getFaceList()
        .then(list => {
          dispatch(actionsFunction.loadFaceListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadFaceListSuccess: function(list) {
    return { type: types.LIST_FACE_SUCCESS, payload: list };
  },

	
  // Save face
  saveFace: function(face) {
    return function(dispatch) {
      return FaceApi
        .saveFace(face)
        .then(face => {
          dispatch(actionsFunction.saveFaceSuccess(face));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveFaceSuccess: function(face) {
    return { type: types.UPDATE_FACE_SUCCESS, payload: face };
  },


};

export default actionsFunction;
