

describe('FX', function(){
  var $calc,
      calculator,
      calculatorTemplate = 'calcy-template',
      calcClass = calculatorTemplate.replace('-template', ''),
      flag = false;

  beforeEach(function(done){
      $calc = $( $('.' + calculatorTemplate).clone()[0]  )
                                    .addClass(calcClass)
                                    .removeClass(calculatorTemplate)
      $('body').append($calc)
      calculator = new Calculator (calcClass)
      calculator.hideResult(done)
  })

  afterEach(function(){
      $('.' + calcClass).remove()
  })

  it('should be able to hide an object', function(){
      expect($calc.css('display')).toBe('none')
  })




})





describe('Calculator', function(){
  var calculator;
  var $calc;
  var calcTemplateClass = 'calcy-template'
  var calcClass         = calcTemplateClass.replace('-template', '')


  beforeEach(function(){
      jasmine.addMatchers(   new Matcher.inBetween()  )

      $calc      = $($( '.' +  calcTemplateClass ).clone()[0]);

      $calc.addClass(calcClass)
      $calc.removeClass(calcTemplateClass)
      $('body').append($calc);


      calculator = new Calculator( calcClass )
  })

  afterEach(function(){
      $calc.remove()
  })




  //tests

  it('should be able to add 2 and 4', function (){
      calculator.add(2 , 4)
      expect(    Number(  $('.' + calcClass).html()    )).toBe( 6 )
  })

  it('should be able to divide 6 and 3', function(){
      calculator.divide(6 , 3)
      expect(    Number(  $('.' + calcClass).html()    )).toBe( 2 )
  })

  it('should be able to divide 1 and 3', function(){
      calculator.divide(1 , 3)
      expect(    Number(  $('.' + calcClass).html()    )).inBetween( [0.33, 0.34] )
  })

  it('should only have 1 dom element with class calcy at the end', function(){
      expect(      $('.' + calcClass).length = 1      ).toBe(1)
  })


})
