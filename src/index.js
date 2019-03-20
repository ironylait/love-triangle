module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  var triangles = 0;

    for (var i = 0; i < preferences.length; i++) { 
      
      var firstSpichonee  = preferences[i];
      var secondSpichonee = preferences[firstSpichonee - 1];
      var thirdSpichonee  = preferences[secondSpichonee - 1]; 

      if (thirdSpichonee === i + 1) {
        counter++;
      }
    }

 triangles =(Math.floor(counter / 3)) ;
 return triangles; 
};


