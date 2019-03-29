module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  var triangles = 0;

    for (var i = 0; i < preferences.length; i++) { 
      
      var secondSpichonee = preferences[i];                   //i = 4 // 6
      var thirdSpichonee  = preferences[secondSpichonee - 1]; //i = 5 // 4
      var firstSpichonee  = preferences[thirdSpichonee - 1];  //i = 3 // 5

      if (firstSpichonee === i + 1) {
        counter++;
      }
    }

 triangles = (Math.floor(counter / 3));
 return triangles; 
};


