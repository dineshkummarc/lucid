describe('Lucid.Model', function () {
  var Model;

  beforeEach(function () {
    Model = Lucid.Model.extend({
      initialize: function () {},
      foo: function () {}
    });
  });


  it('should add methods to prototype', function () {
    expect(_.isFunction(Model.prototype.foo)).toBe(true);
  });

  it('should add events the prototype', function () {
    expect(_.isFunction(Model.prototype.trigger)).toBe(true);
  });

  it('should add aspects', function () {
    expect(_.isFunction(Model.prototype.before)).toBe(true);
  });

  it('should call the initialize method', function () {
    spyOn(Model.prototype, 'initialize');
    new Model('foo');
    expect(Model.prototype.initialize).toHaveBeenCalledWith('foo');
  });

  it('should not blow up if initialize is not defined', function () {
    var Model = Lucid.Model.extend({});
    expect(function () {
      new Model();
    }).not.toThrow();
  });
});
