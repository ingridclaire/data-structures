var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //all this._storage is is a container of helper methods. that's it.
  //this._storage.get/set/each

};
// var bucket = this._storage.get(index);
// this._storage.set(index, bucket)


HashTable.prototype.insert = function(k, v) { //(k,v) = ("steven", "seagal")
//if there is no bucket, create it
  //bucket is a container for new tuple
//if there is a bucket, get it
  //search through bucket
  //if k is found - overwrite v
  //if k is not found, add k, v pair to the bucket


  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var found = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }
  if (!found) {
    bucket.push([k,v]);
  }
};

/*
[
  0: [['Ingrid','Calrson'], ['Eric','Song'], ['Carly','Larko'], ['Robin','Kim']],
  1: [['Justin','Paoletta'], ['Julian','West']]
]
*/

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};



HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get the bucket
  var bucket = this._storage.get(index);
  //loop through the bucket
  for (var i = 0; i < bucket.length; i++) {
    //if 0 index of the current tuple = k
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      break;
    }
    //remove tuple
    //break
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


