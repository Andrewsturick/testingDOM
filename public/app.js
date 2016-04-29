let Calculator = function(element){
    this.el  = $('.' + element)
}

Calculator.prototype.add = function(a,b){
    this.el.html(a + b)
}

Calculator.prototype.divide = function(a,b){
    this.el.html(a / b)
}

Calculator.prototype.hideResult = function(cb){
    setTimeout(()=>{
      this.el.fadeOut(1000, cb)
    }, 1000)
}
