window.module = {};
Object.defineProperty(window.module, 'exports', {
  set: function(newValue) {
    window.Firebase = newValue;
  }
});
