// Generated by CoffeeScript 1.9.3
(function() {
  var Gist,
    slice = [].slice;

  Gist = (function() {
    function Gist(client) {
      this.client = client;
    }

    Gist.prototype.list = function() {
      var cb, i, params, ref;
      params = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), cb = arguments[i++];
      return (ref = this.client).get.apply(ref, ["/gists"].concat(slice.call(params), [function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist list error'));
        } else {
          return cb(null, b, h);
        }
      }]));
    };

    Gist.prototype["public"] = function() {
      var cb, i, params, ref;
      params = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), cb = arguments[i++];
      return (ref = this.client).get.apply(ref, ["/gists/public"].concat(slice.call(params), [function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist public error'));
        } else {
          return cb(null, b, h);
        }
      }]));
    };

    Gist.prototype.starred = function() {
      var cb, i, params, ref;
      params = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), cb = arguments[i++];
      return (ref = this.client).get.apply(ref, ["/gists/starred"].concat(slice.call(params), [function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist starred error'));
        } else {
          return cb(null, b, h);
        }
      }]));
    };

    Gist.prototype.user = function() {
      var cb, i, params, ref, user;
      params = 3 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 2) : (i = 0, []), user = arguments[i++], cb = arguments[i++];
      return (ref = this.client).get.apply(ref, ["/users/" + user + "/gists"].concat(slice.call(params), [function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist user error'));
        } else {
          return cb(null, b, h);
        }
      }]));
    };

    Gist.prototype.get = function(id, cb) {
      return this.client.get("/gists/" + id, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist get error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.create = function(gist, cb) {
      return this.client.post("/gists", gist, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 201) {
          return cb(new Error('Gist create error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.edit = function(id, gist, cb) {
      return this.client.post("/gists/" + id, gist, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist edit error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype["delete"] = function(id, cb) {
      return this.client.del("/gists/" + id, {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Gist delete error"));
        } else {
          return cb(null);
        }
      });
    };

    Gist.prototype.fork = function(id) {
      return this.client.post("/gists/" + id + "/forks", {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 201) {
          return cb(new Error('Gist fork error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.star = function(id, cb) {
      return this.client.put("/gists/" + id + "/star", {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Gist star error"));
        } else {
          return cb(null);
        }
      });
    };

    Gist.prototype.unstar = function(id, cb) {
      return this.client.del("/gists/" + id + "/unstar", {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Gist unstar error"));
        } else {
          return cb(null);
        }
      });
    };

    Gist.prototype.check = function(id, cb) {
      return this.client.get("/gists/" + id + "/star", function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        return cb(null, s === 204, h);
      });
    };

    Gist.prototype.listComments = function(id, cb) {
      return this.client.get("/gists/" + id + "/comments", function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist comments error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.getComment = function(id, cb) {
      return this.client.get("/gists/comments/" + id, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist getComment error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.createComment = function(id, comment, cb) {
      return this.client.post("/gists/" + id + "/comments", comment, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 201) {
          return cb(new Error('Gist createComment error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.updateComment = function(id, comment, cb) {
      return this.client.post("/gists/comments/" + id, comment, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error('Gist updateComment error'));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Gist.prototype.deleteComment = function(id, cb) {
      return this.client.del("/gists/comments/" + id, {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Gist deleteComment error"));
        } else {
          return cb(null);
        }
      });
    };

    Gist.prototype.comments = function(id, cbOrCmnt, cb) {
      if ((cb == null) && typeof cbOrCmnt === 'function') {
        return this.listComments(id, cbOrCmnt);
      } else {
        return this.createComment(id, cbOrCmnt, cb);
      }
    };

    Gist.prototype.comment = function(cbOrIdOrCmnt, cbOrCmnt, cb) {
      if ((cb == null) && typeof cbOrIdOrCmnt === 'number' && typeof cbOrCmnt === 'function') {
        return this.getComment(cbOrIdOrCmnt, cbOrCmnt);
      } else if ((cbOrCmnt == null) && (cb == null) && typeof cbOrIdOrCmnt === 'number') {
        return this.deleteComment(cbOrIdOrCmnt);
      } else if (typeof cb === 'function' && typeof cbOrIdOrCmnt === 'number' && typeof cbOrCmnt('object')) {
        return this.updateComment(cbOrIdOrCmnt, cbOrCmnt, cb);
      } else {
        return cbOrIdOrCmnt(new Error('Gist comment error'));
      }
    };

    return Gist;

  })();

  module.exports = Gist;

}).call(this);
