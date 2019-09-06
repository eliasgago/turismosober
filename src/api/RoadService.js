import json from '../assets/roads.json'

export default {

  getAll() {
    return new Promise(function(resolve, reject){
      resolve(json);
    });
  },

}
