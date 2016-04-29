var matchers = {}

matchers.inBetween = function(){

  return   {

      inBetween : function(util , customEqualityTesters){

        return {

          compare : function(actual , expected){

            if (expected == undefined){
              expected = []
            }

            var result = {};


            result.pass = actual  > expected[0] && actual < expected[1]

            return result
          }
        }
      }
    }

}


  if (window) window.Matcher = matchers;
  else {
      window = this;
      window.Matcher = matchers;
  }
