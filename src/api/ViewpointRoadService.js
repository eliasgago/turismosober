import json from '../assets/viewpoints-roads.json'

export default {

  getAll() {
    return new Promise(function(resolve, reject){
      resolve(json);
    });
  },

}
