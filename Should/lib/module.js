if( typeof module === 'undefined' ) {
  var module = require('..')
}

describe('module', function(){

  it('something must be done', function(){
    should( module() ).toBe( 'doing something' )
  })

})