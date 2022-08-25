/*************************************************************************
    Template Name: Qamous
    Template URI: https://themeforest.net/qamous-html/
    Description: Qamous is a fully functional HtML theplate that gives you freedom to create any type of directory listing theme with tons of real time functionality for your real site. We did not make it just to present the demo, but to present each and every functionality from a real user's point of view.
    Author: Radiuzz
    Version: 1.0
    Author URI: https://themeforest.net/user/radiuzz
    
    Note: plugins js.
*************************************************************************/

/******************************************************************
                        INDEX
*******************************************************************

    01. Avoid `console`
    02. Mean menu
    03. Parallax js
    04. Images Loaded
    05. tags
    06. Circle Progress
    07. Chartist js
    08. Chartist Point Labels

******************************************************************
                        END INDEX
******************************************************************/

/*==================== 01. Avoid console ========================*/

//Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

/*
  jQuery Nice Select - v1.0
 */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

/*-------------------------------------------------------------
  02. Mean menu
---------------------------------------------------------------*/
!(function ($) {
  "use strict";
  $.fn.meanmenu = function (e) {
    var n = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "",
      meanContract: "",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: "",
    };
    e = $.extend(n, e);
    var a = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function () {
      var n = e.meanMenuTarget,
        t = e.meanMenuContainer,
        r = e.meanMenuClose,
        i = e.meanMenuCloseSize,
        s = e.meanMenuOpen,
        u = e.meanRevealPosition,
        m = e.meanRevealPositionDistance,
        l = e.meanRevealColour,
        o = e.meanScreenWidth,
        c = e.meanNavPush,
        v = ".meanmenu-reveal",
        h = e.meanShowChildren,
        d = e.meanExpandableChildren,
        y = e.meanExpand,
        j = e.meanContract,
        Q = e.meanRemoveAttrs,
        f = e.onePage,
        g = e.meanDisplay,
        p = e.removeElements,
        C = !1;
      (navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/Blackberry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) &&
        (C = !0),
        (navigator.userAgent.match(/MSIE 8/i) ||
          navigator.userAgent.match(/MSIE 7/i)) &&
          jQuery("html").css("overflow-y", "scroll");
      var w = "",
        x = function () {
          if ("center" === u) {
            var e = window.innerWidth || document.documentElement.clientWidth,
              n = e / 2 - 22 + "px";
            (w = "left:" + n + ";right:auto;"),
              C
                ? jQuery(".meanmenu-reveal").animate({ left: n })
                : jQuery(".meanmenu-reveal").css("left", n);
          }
        },
        A = !1,
        E = !1;
      "right" === u && (w = "right:" + m + ";left:auto;"),
        "left" === u && (w = "left:" + m + ";right:auto;"),
        x();
      var M = "",
        P = function () {
          M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s);
        },
        W = function () {
          jQuery(".mean-bar,.mean-push").remove(),
            jQuery(t).removeClass("mean-container"),
            jQuery(n).css("display", g),
            (A = !1),
            (E = !1),
            jQuery(p).removeClass("mean-remove");
        },
        b = function () {
          var e = "background:" + l + ";color:" + l + ";" + w;
          if (o >= a) {
            jQuery(p).addClass("mean-remove"),
              (E = !0),
              jQuery(t).addClass("mean-container"),
              jQuery(".mean-container").prepend(
                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                  e +
                  '">Show Navigation</a><nav class="mean-nav"></nav></div>'
              );
            var r = jQuery(n).html();
            jQuery(".mean-nav").html(r),
              Q &&
                jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                  jQuery(this).is(".mean-remove")
                    ? jQuery(this).attr("class", "mean-remove")
                    : jQuery(this).removeAttr("class"),
                    jQuery(this).removeAttr("id");
                }),
              jQuery(n).before('<div class="mean-push" />'),
              jQuery(".mean-push").css("margin-top", c),
              jQuery(n).hide(),
              jQuery(".meanmenu-reveal").show(),
              jQuery(v).html(s),
              (M = jQuery(v)),
              jQuery(".mean-nav ul, .mean-nav .mega-menu-content").hide(),
              h
                ? d
                  ? (jQuery(
                      ".mean-nav ul ul, .mean-nav ul .mega-menu-content"
                    ).each(function () {
                      jQuery(this).children().length &&
                        jQuery(this, "li:first")
                          .parent()
                          .append(
                            '<a class="mean-expand" href="#" style="font-size: ' +
                              i +
                              '"><span>' +
                              y +
                              "<span></a>"
                          );
                    }),
                    jQuery(".mean-expand").on("click", function (e) {
                      e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked")
                          ? (jQuery(this).text(y),
                            jQuery(this)
                              .prev("ul, .mega-menu-content")
                              .slideUp(300, function () {}))
                          : (jQuery(this).text(j),
                            jQuery(this)
                              .prev("ul, .mega-menu-content")
                              .slideDown(300, function () {})),
                        jQuery(this).toggleClass("mean-clicked");
                    }))
                  : jQuery(
                      ".mean-nav ul ul, .mean-nav ul .mega-menu-content"
                    ).show()
                : jQuery(
                    ".mean-nav ul ul, .mean-nav ul .mega-menu-content"
                  ).hide(),
              jQuery(".mean-nav ul li").last().addClass("mean-last"),
              M.removeClass("meanclose"),
              jQuery(M).click(function (e) {
                e.preventDefault(),
                  A === !1
                    ? (M.css("text-align", "center"),
                      M.css("text-indent", "0"),
                      M.css("font-size", i),
                      jQuery(".mean-nav ul:first").slideDown(),
                      (A = !0))
                    : (jQuery(".mean-nav ul:first").slideUp(), (A = !1)),
                  M.toggleClass("meanclose"),
                  P(),
                  jQuery(p).addClass("mean-remove");
              }),
              f &&
                jQuery(".mean-nav ul > li > a:first-child").on(
                  "click",
                  function () {
                    jQuery(".mean-nav ul:first").slideUp(),
                      (A = !1),
                      jQuery(M).toggleClass("meanclose").html(s);
                  }
                );
          } else W();
        };
      C ||
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            a > o,
            W(),
            o >= a ? (b(), x()) : W();
        }),
        jQuery(window).resize(function () {
          (a = window.innerWidth || document.documentElement.clientWidth),
            C
              ? (x(), o >= a ? E === !1 && b() : W())
              : (W(), o >= a && (b(), x()));
        }),
        b();
    });
  };
})(jQuery);

/* ---------------------------------------------
    03. Parallax js
 --------------------------------------------- */
(function ($) {
  var $window = $(window);
  var windowHeight = $window.height();

  $window.resize(function () {
    windowHeight = $window.height();
  });

  $.fn.parallax = function (xpos, speedFactor, outerHeight) {
    var $this = $(this);
    var getHeight;
    var firstTop;
    var paddingTop = 0;

    //get the starting position of each element to have parallax applied to it
    $this.each(function () {
      firstTop = $this.offset().top;
    });

    if (outerHeight) {
      getHeight = function (jqo) {
        return jqo.outerHeight(true);
      };
    } else {
      getHeight = function (jqo) {
        return jqo.height();
      };
    }

    // setup defaults if arguments aren't specified
    if (arguments.length < 1 || xpos === null) xpos = "50%";
    if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
    if (arguments.length < 3 || outerHeight === null) outerHeight = true;

    // function to be called whenever the window is scrolled or resized
    function update() {
      var pos = $window.scrollTop();

      $this.each(function () {
        var $element = $(this);
        var top = $element.offset().top;
        var height = getHeight($element);

        // Check if totally above or totally below viewport
        if (top + height < pos || top > pos + windowHeight) {
          return;
        }

        $this.css(
          "backgroundPosition",
          xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px"
        );
      });
    }

    $window.bind("scroll", update).resize(update);
    update();
  };
})(jQuery);

/*-------------------------------------------------------------
  04. Images Loaded
---------------------------------------------------------------*/
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*-------------------------------------------------------------
  05. tags
---------------------------------------------------------------*/
(function () {
  var TagsInput = function (opts) {
    this.options = Object.assign(TagsInput.defaults, opts);
    this.original_input = document.getElementById(opts.selector);
    this.arr = [];
    this.wrapper = document.createElement("div");
    this.input = document.createElement("input");
    buildUI(this);
    addEvents(this);
  };
  TagsInput.prototype.addTag = function (string) {
    if (this.anyErrors(string)) return;

    this.arr.push(string);
    var tagInput = this;

    var tag = document.createElement("span");
    tag.className = this.options.tagClass;
    tag.innerText = string;

    var closeIcon = document.createElement("a");
    closeIcon.innerHTML = "&times;";
    closeIcon.addEventListener("click", function (e) {
      e.preventDefault();
      var tag = this.parentNode;

      for (var i = 0; i < tagInput.wrapper.childNodes.length; i++) {
        if (tagInput.wrapper.childNodes[i] == tag) tagInput.deleteTag(tag, i);
      }
    });
    tag.appendChild(closeIcon);
    this.wrapper.insertBefore(tag, this.input);
    this.original_input.value = this.arr.join(",");

    return this;
  };
  TagsInput.prototype.deleteTag = function (tag, i) {
    tag.remove();
    this.arr.splice(i, 1);
    this.original_input.value = this.arr.join(",");
    return this;
  };

  TagsInput.prototype.anyErrors = function (string) {
    if (this.options.max != null && this.arr.length >= this.options.max) {
      console.log("max tags limit reached");
      return true;
    }

    if (!this.options.duplicate && this.arr.indexOf(string) != -1) {
      console.log('duplicate found " ' + string + ' " ');
      return true;
    }

    return false;
  };

  TagsInput.prototype.addData = function (array) {
    var plugin = this;

    array.forEach(function (string) {
      plugin.addTag(string);
    });
    return this;
  };

  TagsInput.prototype.getInputString = function () {
    return this.arr.join(",");
  };
  // Private function to initialize the UI Elements
  function buildUI(tags) {
    tags.wrapper.append(tags.input);
    tags.wrapper.classList.add(tags.options.wrapperClass);
    tags.original_input.setAttribute("hidden", "true");
    tags.original_input.parentNode.insertBefore(
      tags.wrapper,
      tags.original_input
    );
  }

  function addEvents(tags) {
    tags.wrapper.addEventListener("click", function () {
      tags.input.focus();
    });
    tags.input.addEventListener("keydown", function (e) {
      var str = tags.input.value.trim();
      if (!!~[9, 13, 188].indexOf(e.keyCode)) {
        tags.input.value = "";
        if (str != "") tags.addTag(str);
      }
    });
  }
  TagsInput.defaults = {
    selector: "",
    wrapperClass: "tags-input-wrapper",
    tagClass: "tag",
    max: null,
    duplicate: false,
  };

  window.TagsInput = TagsInput;
})();

/*-------------------------------------------------------------
  06. Circle Progress
---------------------------------------------------------------*/
/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!(function (i) {
  if ("function" == typeof define && define.amd) define(["jquery"], i);
  else if ("object" == typeof module && module.exports) {
    var t = require("jquery");
    i(t), (module.exports = t);
  } else i(jQuery);
})(function (i) {
  function t(i) {
    this.init(i);
  }
  (t.prototype = {
    value: 0,
    size: 100,
    startAngle: -Math.PI,
    thickness: "auto",
    fill: { gradient: ["#3aeabb", "#fdd250"] },
    emptyFill: "rgba(0, 0, 0, .1)",
    animation: { duration: 1200, easing: "circleProgressEasing" },
    animationStartValue: 0,
    reverse: !1,
    lineCap: "butt",
    insertMode: "prepend",
    constructor: t,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (t) {
      i.extend(this, t),
        (this.radius = this.size / 2),
        this.initWidget(),
        this.initFill(),
        this.draw(),
        this.el.trigger("circle-inited");
    },
    initWidget: function () {
      this.canvas ||
        (this.canvas = i("<canvas>")[
          "prepend" == this.insertMode ? "prependTo" : "appendTo"
        ](this.el)[0]);
      var t = this.canvas;
      if (
        ((t.width = this.size),
        (t.height = this.size),
        (this.ctx = t.getContext("2d")),
        window.devicePixelRatio > 1)
      ) {
        var e = window.devicePixelRatio;
        (t.style.width = t.style.height = this.size + "px"),
          (t.width = t.height = this.size * e),
          this.ctx.scale(e, e);
      }
    },
    initFill: function () {
      function t() {
        var t = i("<canvas>")[0];
        (t.width = e.size),
          (t.height = e.size),
          t.getContext("2d").drawImage(g, 0, 0, r, r),
          (e.arcFill = e.ctx.createPattern(t, "no-repeat")),
          e.drawFrame(e.lastFrameValue);
      }
      var e = this,
        a = this.fill,
        n = this.ctx,
        r = this.size;
      if (!a) throw Error("The fill is not specified!");
      if (
        ("string" == typeof a && (a = { color: a }),
        a.color && (this.arcFill = a.color),
        a.gradient)
      ) {
        var s = a.gradient;
        if (1 == s.length) this.arcFill = s[0];
        else if (s.length > 1) {
          for (
            var l = a.gradientAngle || 0,
              o = a.gradientDirection || [
                (r / 2) * (1 - Math.cos(l)),
                (r / 2) * (1 + Math.sin(l)),
                (r / 2) * (1 + Math.cos(l)),
                (r / 2) * (1 - Math.sin(l)),
              ],
              h = n.createLinearGradient.apply(n, o),
              c = 0;
            c < s.length;
            c++
          ) {
            var d = s[c],
              u = c / (s.length - 1);
            i.isArray(d) && ((u = d[1]), (d = d[0])), h.addColorStop(u, d);
          }
          this.arcFill = h;
        }
      }
      if (a.image) {
        var g;
        a.image instanceof Image
          ? (g = a.image)
          : ((g = new Image()), (g.src = a.image)),
          g.complete ? t() : (g.onload = t);
      }
    },
    draw: function () {
      this.animation
        ? this.drawAnimated(this.value)
        : this.drawFrame(this.value);
    },
    drawFrame: function (i) {
      (this.lastFrameValue = i),
        this.ctx.clearRect(0, 0, this.size, this.size),
        this.drawEmptyArc(i),
        this.drawArc(i);
    },
    drawArc: function (i) {
      if (0 !== i) {
        var t = this.ctx,
          e = this.radius,
          a = this.getThickness(),
          n = this.startAngle;
        t.save(),
          t.beginPath(),
          this.reverse
            ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n)
            : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i),
          (t.lineWidth = a),
          (t.lineCap = this.lineCap),
          (t.strokeStyle = this.arcFill),
          t.stroke(),
          t.restore();
      }
    },
    drawEmptyArc: function (i) {
      var t = this.ctx,
        e = this.radius,
        a = this.getThickness(),
        n = this.startAngle;
      i < 1 &&
        (t.save(),
        t.beginPath(),
        i <= 0
          ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI)
          : this.reverse
          ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i)
          : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n),
        (t.lineWidth = a),
        (t.strokeStyle = this.emptyFill),
        t.stroke(),
        t.restore());
    },
    drawAnimated: function (t) {
      var e = this,
        a = this.el,
        n = i(this.canvas);
      n.stop(!0, !1),
        a.trigger("circle-animation-start"),
        n
          .css({ animationProgress: 0 })
          .animate(
            { animationProgress: 1 },
            i.extend({}, this.animation, {
              step: function (i) {
                var n = e.animationStartValue * (1 - i) + t * i;
                e.drawFrame(n), a.trigger("circle-animation-progress", [i, n]);
              },
            })
          )
          .promise()
          .always(function () {
            a.trigger("circle-animation-end");
          });
    },
    getThickness: function () {
      return i.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },
    getValue: function () {
      return this.value;
    },
    setValue: function (i) {
      this.animation && (this.animationStartValue = this.lastFrameValue),
        (this.value = i),
        this.draw();
    },
  }),
    (i.circleProgress = { defaults: t.prototype }),
    (i.easing.circleProgressEasing = function (i) {
      return i < 0.5
        ? ((i = 2 * i), 0.5 * i * i * i)
        : ((i = 2 - 2 * i), 1 - 0.5 * i * i * i);
    }),
    (i.fn.circleProgress = function (e, a) {
      var n = "circle-progress",
        r = this.data(n);
      if ("widget" == e) {
        if (!r)
          throw Error(
            'Calling "widget" method on not initialized instance is forbidden'
          );
        return r.canvas;
      }
      if ("value" == e) {
        if (!r)
          throw Error(
            'Calling "value" method on not initialized instance is forbidden'
          );
        if ("undefined" == typeof a) return r.getValue();
        var s = arguments[1];
        return this.each(function () {
          i(this).data(n).setValue(s);
        });
      }
      return this.each(function () {
        var a = i(this),
          r = a.data(n),
          s = i.isPlainObject(e) ? e : {};
        if (r) r.init(s);
        else {
          var l = i.extend({}, a.data());
          "string" == typeof l.fill && (l.fill = JSON.parse(l.fill)),
            "string" == typeof l.animation &&
              (l.animation = JSON.parse(l.animation)),
            (s = i.extend(l, s)),
            (s.el = a),
            (r = new t(s)),
            a.data(n, r);
        }
      });
    });
});

/*-------------------------------------------------------------
  07. Chartist
---------------------------------------------------------------*/
/* Chartist.js 0.9.8
 * Copyright Â© 2016 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define([], function () {
        return (a.Chartist = b());
      })
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.Chartist = b());
})(this, function () {
  var a = { version: "0.9.8" };
  return (
    (function (a, b, c) {
      "use strict";
      (c.namespaces = {
        svg: "http://www.w3.org/2000/svg",
        xmlns: "http://www.w3.org/2000/xmlns/",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        ct: "http://gionkunz.github.com/chartist-js/ct",
      }),
        (c.noop = function (a) {
          return a;
        }),
        (c.alphaNumerate = function (a) {
          return String.fromCharCode(97 + (a % 26));
        }),
        (c.extend = function (a) {
          a = a || {};
          var b = Array.prototype.slice.call(arguments, 1);
          return (
            b.forEach(function (b) {
              for (var d in b)
                "object" != typeof b[d] ||
                null === b[d] ||
                b[d] instanceof Array
                  ? (a[d] = b[d])
                  : (a[d] = c.extend({}, a[d], b[d]));
            }),
            a
          );
        }),
        (c.replaceAll = function (a, b, c) {
          return a.replace(new RegExp(b, "g"), c);
        }),
        (c.ensureUnit = function (a, b) {
          return "number" == typeof a && (a += b), a;
        }),
        (c.quantity = function (a) {
          if ("string" == typeof a) {
            var b = /^(\d+)\s*(.*)$/g.exec(a);
            return { value: +b[1], unit: b[2] || void 0 };
          }
          return { value: a };
        }),
        (c.querySelector = function (a) {
          return a instanceof Node ? a : b.querySelector(a);
        }),
        (c.times = function (a) {
          return Array.apply(null, new Array(a));
        }),
        (c.sum = function (a, b) {
          return a + (b ? b : 0);
        }),
        (c.mapMultiply = function (a) {
          return function (b) {
            return b * a;
          };
        }),
        (c.mapAdd = function (a) {
          return function (b) {
            return b + a;
          };
        }),
        (c.serialMap = function (a, b) {
          var d = [],
            e = Math.max.apply(
              null,
              a.map(function (a) {
                return a.length;
              })
            );
          return (
            c.times(e).forEach(function (c, e) {
              var f = a.map(function (a) {
                return a[e];
              });
              d[e] = b.apply(null, f);
            }),
            d
          );
        }),
        (c.roundWithPrecision = function (a, b) {
          var d = Math.pow(10, b || c.precision);
          return Math.round(a * d) / d;
        }),
        (c.precision = 8),
        (c.escapingMap = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        }),
        (c.serialize = function (a) {
          return null === a || void 0 === a
            ? a
            : ("number" == typeof a
                ? (a = "" + a)
                : "object" == typeof a && (a = JSON.stringify({ data: a })),
              Object.keys(c.escapingMap).reduce(function (a, b) {
                return c.replaceAll(a, b, c.escapingMap[b]);
              }, a));
        }),
        (c.deserialize = function (a) {
          if ("string" != typeof a) return a;
          a = Object.keys(c.escapingMap).reduce(function (a, b) {
            return c.replaceAll(a, c.escapingMap[b], b);
          }, a);
          try {
            (a = JSON.parse(a)), (a = void 0 !== a.data ? a.data : a);
          } catch (b) {}
          return a;
        }),
        (c.createSvg = function (a, b, d, e) {
          var f;
          return (
            (b = b || "100%"),
            (d = d || "100%"),
            Array.prototype.slice
              .call(a.querySelectorAll("svg"))
              .filter(function (a) {
                return a.getAttributeNS(c.namespaces.xmlns, "ct");
              })
              .forEach(function (b) {
                a.removeChild(b);
              }),
            (f = new c.Svg("svg")
              .attr({ width: b, height: d })
              .addClass(e)
              .attr({ style: "width: " + b + "; height: " + d + ";" })),
            a.appendChild(f._node),
            f
          );
        }),
        (c.normalizeData = function (a) {
          if (
            ((a = a || { series: [], labels: [] }),
            (a.series = a.series || []),
            (a.labels = a.labels || []),
            a.series.length > 0 && 0 === a.labels.length)
          ) {
            var b,
              d = c.getDataArray(a);
            (b = d.every(function (a) {
              return a instanceof Array;
            })
              ? Math.max.apply(
                  null,
                  d.map(function (a) {
                    return a.length;
                  })
                )
              : d.length),
              (a.labels = c.times(b).map(function () {
                return "";
              }));
          }
          return a;
        }),
        (c.reverseData = function (a) {
          a.labels.reverse(), a.series.reverse();
          for (var b = 0; b < a.series.length; b++)
            "object" == typeof a.series[b] && void 0 !== a.series[b].data
              ? a.series[b].data.reverse()
              : a.series[b] instanceof Array && a.series[b].reverse();
        }),
        (c.getDataArray = function (a, b, d) {
          function e(a) {
            if (!c.isFalseyButZero(a)) {
              if ((a.data || a) instanceof Array) return (a.data || a).map(e);
              if (a.hasOwnProperty("value")) return e(a.value);
              if (d) {
                var b = {};
                return (
                  "string" == typeof d
                    ? (b[d] = c.getNumberOrUndefined(a))
                    : (b.y = c.getNumberOrUndefined(a)),
                  (b.x = a.hasOwnProperty("x")
                    ? c.getNumberOrUndefined(a.x)
                    : b.x),
                  (b.y = a.hasOwnProperty("y")
                    ? c.getNumberOrUndefined(a.y)
                    : b.y),
                  b
                );
              }
              return c.getNumberOrUndefined(a);
            }
          }
          return (
            ((b && !a.reversed) || (!b && a.reversed)) &&
              (c.reverseData(a), (a.reversed = !a.reversed)),
            a.series.map(e)
          );
        }),
        (c.normalizePadding = function (a, b) {
          return (
            (b = b || 0),
            "number" == typeof a
              ? { top: a, right: a, bottom: a, left: a }
              : {
                  top: "number" == typeof a.top ? a.top : b,
                  right: "number" == typeof a.right ? a.right : b,
                  bottom: "number" == typeof a.bottom ? a.bottom : b,
                  left: "number" == typeof a.left ? a.left : b,
                }
          );
        }),
        (c.getMetaData = function (a, b) {
          var d = a.data ? a.data[b] : a[b];
          return d ? c.serialize(d.meta) : void 0;
        }),
        (c.orderOfMagnitude = function (a) {
          return Math.floor(Math.log(Math.abs(a)) / Math.LN10);
        }),
        (c.projectLength = function (a, b, c) {
          return (b / c.range) * a;
        }),
        (c.getAvailableHeight = function (a, b) {
          return Math.max(
            (c.quantity(b.height).value || a.height()) -
              (b.chartPadding.top + b.chartPadding.bottom) -
              b.axisX.offset,
            0
          );
        }),
        (c.getHighLow = function (a, b, d) {
          function e(a) {
            if (void 0 !== a)
              if (a instanceof Array)
                for (var b = 0; b < a.length; b++) e(a[b]);
              else {
                var c = d ? +a[d] : +a;
                g && c > f.high && (f.high = c), h && c < f.low && (f.low = c);
              }
          }
          b = c.extend({}, b, d ? b["axis" + d.toUpperCase()] : {});
          var f = {
              high: void 0 === b.high ? -Number.MAX_VALUE : +b.high,
              low: void 0 === b.low ? Number.MAX_VALUE : +b.low,
            },
            g = void 0 === b.high,
            h = void 0 === b.low;
          return (
            (g || h) && e(a),
            (b.referenceValue || 0 === b.referenceValue) &&
              ((f.high = Math.max(b.referenceValue, f.high)),
              (f.low = Math.min(b.referenceValue, f.low))),
            f.high <= f.low &&
              (0 === f.low
                ? (f.high = 1)
                : f.low < 0
                ? (f.high = 0)
                : f.high > 0
                ? (f.low = 0)
                : ((f.high = 1), (f.low = 0))),
            f
          );
        }),
        (c.isNum = function (a) {
          return !isNaN(a) && isFinite(a);
        }),
        (c.isFalseyButZero = function (a) {
          return !a && 0 !== a;
        }),
        (c.getNumberOrUndefined = function (a) {
          return isNaN(+a) ? void 0 : +a;
        }),
        (c.getMultiValue = function (a, b) {
          return c.isNum(a) ? +a : a ? a[b || "y"] || 0 : 0;
        }),
        (c.rho = function (a) {
          function b(a, c) {
            return a % c === 0 ? c : b(c, a % c);
          }
          function c(a) {
            return a * a + 1;
          }
          if (1 === a) return a;
          var d,
            e = 2,
            f = 2;
          if (a % 2 === 0) return 2;
          do (e = c(e) % a), (f = c(c(f)) % a), (d = b(Math.abs(e - f), a));
          while (1 === d);
          return d;
        }),
        (c.getBounds = function (a, b, d, e) {
          var f,
            g,
            h,
            i = 0,
            j = { high: b.high, low: b.low };
          (j.valueRange = j.high - j.low),
            (j.oom = c.orderOfMagnitude(j.valueRange)),
            (j.step = Math.pow(10, j.oom)),
            (j.min = Math.floor(j.low / j.step) * j.step),
            (j.max = Math.ceil(j.high / j.step) * j.step),
            (j.range = j.max - j.min),
            (j.numberOfSteps = Math.round(j.range / j.step));
          var k = c.projectLength(a, j.step, j),
            l = k < d,
            m = e ? c.rho(j.range) : 0;
          if (e && c.projectLength(a, 1, j) >= d) j.step = 1;
          else if (e && m < j.step && c.projectLength(a, m, j) >= d) j.step = m;
          else
            for (;;) {
              if (l && c.projectLength(a, j.step, j) <= d) j.step *= 2;
              else {
                if (l || !(c.projectLength(a, j.step / 2, j) >= d)) break;
                if (((j.step /= 2), e && j.step % 1 !== 0)) {
                  j.step *= 2;
                  break;
                }
              }
              if (i++ > 1e3)
                throw new Error(
                  "Exceeded maximum number of iterations while optimizing scale step!"
                );
            }
          var n = 2.221e-16;
          for (
            j.step = Math.max(j.step, n), g = j.min, h = j.max;
            g + j.step <= j.low;

          )
            g += j.step;
          for (; h - j.step >= j.high; ) h -= j.step;
          (j.min = g), (j.max = h), (j.range = j.max - j.min);
          var o = [];
          for (f = j.min; f <= j.max; f += j.step) {
            var p = c.roundWithPrecision(f);
            p !== o[o.length - 1] && o.push(f);
          }
          return (j.values = o), j;
        }),
        (c.polarToCartesian = function (a, b, c, d) {
          var e = ((d - 90) * Math.PI) / 180;
          return { x: a + c * Math.cos(e), y: b + c * Math.sin(e) };
        }),
        (c.createChartRect = function (a, b, d) {
          var e = !(!b.axisX && !b.axisY),
            f = e ? b.axisY.offset : 0,
            g = e ? b.axisX.offset : 0,
            h = a.width() || c.quantity(b.width).value || 0,
            i = a.height() || c.quantity(b.height).value || 0,
            j = c.normalizePadding(b.chartPadding, d);
          (h = Math.max(h, f + j.left + j.right)),
            (i = Math.max(i, g + j.top + j.bottom));
          var k = {
            padding: j,
            width: function () {
              return this.x2 - this.x1;
            },
            height: function () {
              return this.y1 - this.y2;
            },
          };
          return (
            e
              ? ("start" === b.axisX.position
                  ? ((k.y2 = j.top + g),
                    (k.y1 = Math.max(i - j.bottom, k.y2 + 1)))
                  : ((k.y2 = j.top),
                    (k.y1 = Math.max(i - j.bottom - g, k.y2 + 1))),
                "start" === b.axisY.position
                  ? ((k.x1 = j.left + f),
                    (k.x2 = Math.max(h - j.right, k.x1 + 1)))
                  : ((k.x1 = j.left),
                    (k.x2 = Math.max(h - j.right - f, k.x1 + 1))))
              : ((k.x1 = j.left),
                (k.x2 = Math.max(h - j.right, k.x1 + 1)),
                (k.y2 = j.top),
                (k.y1 = Math.max(i - j.bottom, k.y2 + 1))),
            k
          );
        }),
        (c.createGrid = function (a, b, d, e, f, g, h, i) {
          var j = {};
          (j[d.units.pos + "1"] = a),
            (j[d.units.pos + "2"] = a),
            (j[d.counterUnits.pos + "1"] = e),
            (j[d.counterUnits.pos + "2"] = e + f);
          var k = g.elem("line", j, h.join(" "));
          i.emit(
            "draw",
            c.extend(
              { type: "grid", axis: d, index: b, group: g, element: k },
              j
            )
          );
        }),
        (c.createLabel = function (a, b, d, e, f, g, h, i, j, k, l) {
          var m,
            n = {};
          if (
            ((n[f.units.pos] = a + h[f.units.pos]),
            (n[f.counterUnits.pos] = h[f.counterUnits.pos]),
            (n[f.units.len] = b),
            (n[f.counterUnits.len] = Math.max(0, g - 10)),
            k)
          ) {
            var o =
              '<span class="' +
              j.join(" ") +
              '" style="' +
              f.units.len +
              ": " +
              Math.round(n[f.units.len]) +
              "px; " +
              f.counterUnits.len +
              ": " +
              Math.round(n[f.counterUnits.len]) +
              'px">' +
              e[d] +
              "</span>";
            m = i.foreignObject(
              o,
              c.extend({ style: "overflow: visible;" }, n)
            );
          } else m = i.elem("text", n, j.join(" ")).text(e[d]);
          l.emit(
            "draw",
            c.extend(
              {
                type: "label",
                axis: f,
                index: d,
                group: i,
                element: m,
                text: e[d],
              },
              n
            )
          );
        }),
        (c.getSeriesOption = function (a, b, c) {
          if (a.name && b.series && b.series[a.name]) {
            var d = b.series[a.name];
            return d.hasOwnProperty(c) ? d[c] : b[c];
          }
          return b[c];
        }),
        (c.optionsProvider = function (b, d, e) {
          function f(b) {
            var f = h;
            if (((h = c.extend({}, j)), d))
              for (i = 0; i < d.length; i++) {
                var g = a.matchMedia(d[i][0]);
                g.matches && (h = c.extend(h, d[i][1]));
              }
            e &&
              b &&
              e.emit("optionsChanged", {
                previousOptions: f,
                currentOptions: h,
              });
          }
          function g() {
            k.forEach(function (a) {
              a.removeListener(f);
            });
          }
          var h,
            i,
            j = c.extend({}, b),
            k = [];
          if (!a.matchMedia)
            throw "window.matchMedia not found! Make sure you're using a polyfill.";
          if (d)
            for (i = 0; i < d.length; i++) {
              var l = a.matchMedia(d[i][0]);
              l.addListener(f), k.push(l);
            }
          return (
            f(),
            {
              removeMediaQueryListeners: g,
              getCurrentOptions: function () {
                return c.extend({}, h);
              },
            }
          );
        }),
        (c.splitIntoSegments = function (a, b, d) {
          var e = { increasingX: !1, fillHoles: !1 };
          d = c.extend({}, e, d);
          for (var f = [], g = !0, h = 0; h < a.length; h += 2)
            void 0 === b[h / 2].value
              ? d.fillHoles || (g = !0)
              : (d.increasingX && h >= 2 && a[h] <= a[h - 2] && (g = !0),
                g && (f.push({ pathCoordinates: [], valueData: [] }), (g = !1)),
                f[f.length - 1].pathCoordinates.push(a[h], a[h + 1]),
                f[f.length - 1].valueData.push(b[h / 2]));
          return f;
        });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      (c.Interpolation = {}),
        (c.Interpolation.none = function (a) {
          var b = { fillHoles: !1 };
          return (
            (a = c.extend({}, b, a)),
            function (b, d) {
              for (
                var e = new c.Svg.Path(), f = !0, g = 0;
                g < b.length;
                g += 2
              ) {
                var h = b[g],
                  i = b[g + 1],
                  j = d[g / 2];
                void 0 !== j.value
                  ? (f ? e.move(h, i, !1, j) : e.line(h, i, !1, j), (f = !1))
                  : a.fillHoles || (f = !0);
              }
              return e;
            }
          );
        }),
        (c.Interpolation.simple = function (a) {
          var b = { divisor: 2, fillHoles: !1 };
          a = c.extend({}, b, a);
          var d = 1 / Math.max(1, a.divisor);
          return function (b, e) {
            for (
              var f, g, h, i = new c.Svg.Path(), j = 0;
              j < b.length;
              j += 2
            ) {
              var k = b[j],
                l = b[j + 1],
                m = (k - f) * d,
                n = e[j / 2];
              void 0 !== n.value
                ? (void 0 === h
                    ? i.move(k, l, !1, n)
                    : i.curve(f + m, g, k - m, l, k, l, !1, n),
                  (f = k),
                  (g = l),
                  (h = n))
                : a.fillHoles || (f = k = h = void 0);
            }
            return i;
          };
        }),
        (c.Interpolation.cardinal = function (a) {
          var b = { tension: 1, fillHoles: !1 };
          a = c.extend({}, b, a);
          var d = Math.min(1, Math.max(0, a.tension)),
            e = 1 - d;
          return function f(b, g) {
            var h = c.splitIntoSegments(b, g, { fillHoles: a.fillHoles });
            if (h.length) {
              if (h.length > 1) {
                var i = [];
                return (
                  h.forEach(function (a) {
                    i.push(f(a.pathCoordinates, a.valueData));
                  }),
                  c.Svg.Path.join(i)
                );
              }
              if (
                ((b = h[0].pathCoordinates),
                (g = h[0].valueData),
                b.length <= 4)
              )
                return c.Interpolation.none()(b, g);
              for (
                var j,
                  k = new c.Svg.Path().move(b[0], b[1], !1, g[0]),
                  l = 0,
                  m = b.length;
                m - 2 * !j > l;
                l += 2
              ) {
                var n = [
                  { x: +b[l - 2], y: +b[l - 1] },
                  { x: +b[l], y: +b[l + 1] },
                  { x: +b[l + 2], y: +b[l + 3] },
                  { x: +b[l + 4], y: +b[l + 5] },
                ];
                j
                  ? l
                    ? m - 4 === l
                      ? (n[3] = { x: +b[0], y: +b[1] })
                      : m - 2 === l &&
                        ((n[2] = { x: +b[0], y: +b[1] }),
                        (n[3] = { x: +b[2], y: +b[3] }))
                    : (n[0] = { x: +b[m - 2], y: +b[m - 1] })
                  : m - 4 === l
                  ? (n[3] = n[2])
                  : l || (n[0] = { x: +b[l], y: +b[l + 1] }),
                  k.curve(
                    (d * (-n[0].x + 6 * n[1].x + n[2].x)) / 6 + e * n[2].x,
                    (d * (-n[0].y + 6 * n[1].y + n[2].y)) / 6 + e * n[2].y,
                    (d * (n[1].x + 6 * n[2].x - n[3].x)) / 6 + e * n[2].x,
                    (d * (n[1].y + 6 * n[2].y - n[3].y)) / 6 + e * n[2].y,
                    n[2].x,
                    n[2].y,
                    !1,
                    g[(l + 2) / 2]
                  );
              }
              return k;
            }
            return c.Interpolation.none()([]);
          };
        }),
        (c.Interpolation.monotoneCubic = function (a) {
          var b = { fillHoles: !1 };
          return (
            (a = c.extend({}, b, a)),
            function d(b, e) {
              var f = c.splitIntoSegments(b, e, {
                fillHoles: a.fillHoles,
                increasingX: !0,
              });
              if (f.length) {
                if (f.length > 1) {
                  var g = [];
                  return (
                    f.forEach(function (a) {
                      g.push(d(a.pathCoordinates, a.valueData));
                    }),
                    c.Svg.Path.join(g)
                  );
                }
                if (
                  ((b = f[0].pathCoordinates),
                  (e = f[0].valueData),
                  b.length <= 4)
                )
                  return c.Interpolation.none()(b, e);
                var h,
                  i,
                  j = [],
                  k = [],
                  l = b.length / 2,
                  m = [],
                  n = [],
                  o = [],
                  p = [];
                for (h = 0; h < l; h++)
                  (j[h] = b[2 * h]), (k[h] = b[2 * h + 1]);
                for (h = 0; h < l - 1; h++)
                  (o[h] = k[h + 1] - k[h]),
                    (p[h] = j[h + 1] - j[h]),
                    (n[h] = o[h] / p[h]);
                for (m[0] = n[0], m[l - 1] = n[l - 2], h = 1; h < l - 1; h++)
                  0 === n[h] || 0 === n[h - 1] || n[h - 1] > 0 != n[h] > 0
                    ? (m[h] = 0)
                    : ((m[h] =
                        (3 * (p[h - 1] + p[h])) /
                        ((2 * p[h] + p[h - 1]) / n[h - 1] +
                          (p[h] + 2 * p[h - 1]) / n[h])),
                      isFinite(m[h]) || (m[h] = 0));
                for (
                  i = new c.Svg.Path().move(j[0], k[0], !1, e[0]), h = 0;
                  h < l - 1;
                  h++
                )
                  i.curve(
                    j[h] + p[h] / 3,
                    k[h] + (m[h] * p[h]) / 3,
                    j[h + 1] - p[h] / 3,
                    k[h + 1] - (m[h + 1] * p[h]) / 3,
                    j[h + 1],
                    k[h + 1],
                    !1,
                    e[h + 1]
                  );
                return i;
              }
              return c.Interpolation.none()([]);
            }
          );
        }),
        (c.Interpolation.step = function (a) {
          var b = { postpone: !0, fillHoles: !1 };
          return (
            (a = c.extend({}, b, a)),
            function (b, d) {
              for (
                var e, f, g, h = new c.Svg.Path(), i = 0;
                i < b.length;
                i += 2
              ) {
                var j = b[i],
                  k = b[i + 1],
                  l = d[i / 2];
                void 0 !== l.value
                  ? (void 0 === g
                      ? h.move(j, k, !1, l)
                      : (a.postpone ? h.line(j, f, !1, g) : h.line(e, k, !1, l),
                        h.line(j, k, !1, l)),
                    (e = j),
                    (f = k),
                    (g = l))
                  : a.fillHoles || (e = f = g = void 0);
              }
              return h;
            }
          );
        });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      c.EventEmitter = function () {
        function a(a, b) {
          (d[a] = d[a] || []), d[a].push(b);
        }
        function b(a, b) {
          d[a] &&
            (b
              ? (d[a].splice(d[a].indexOf(b), 1),
                0 === d[a].length && delete d[a])
              : delete d[a]);
        }
        function c(a, b) {
          d[a] &&
            d[a].forEach(function (a) {
              a(b);
            }),
            d["*"] &&
              d["*"].forEach(function (c) {
                c(a, b);
              });
        }
        var d = [];
        return { addEventHandler: a, removeEventHandler: b, emit: c };
      };
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a) {
        var b = [];
        if (a.length) for (var c = 0; c < a.length; c++) b.push(a[c]);
        return b;
      }
      function e(a, b) {
        var d = b || this.prototype || c.Class,
          e = Object.create(d);
        c.Class.cloneDefinitions(e, a);
        var f = function () {
          var a,
            b = e.constructor || function () {};
          return (
            (a = this === c ? Object.create(e) : this),
            b.apply(a, Array.prototype.slice.call(arguments, 0)),
            a
          );
        };
        return (f.prototype = e), (f["super"] = d), (f.extend = this.extend), f;
      }
      function f() {
        var a = d(arguments),
          b = a[0];
        return (
          a.splice(1, a.length - 1).forEach(function (a) {
            Object.getOwnPropertyNames(a).forEach(function (c) {
              delete b[c],
                Object.defineProperty(
                  b,
                  c,
                  Object.getOwnPropertyDescriptor(a, c)
                );
            });
          }),
          b
        );
      }
      c.Class = { extend: e, cloneDefinitions: f };
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, d) {
        return (
          a &&
            ((this.data = a),
            this.eventEmitter.emit("data", {
              type: "update",
              data: this.data,
            })),
          b &&
            ((this.options = c.extend(
              {},
              d ? this.options : this.defaultOptions,
              b
            )),
            this.initializeTimeoutId ||
              (this.optionsProvider.removeMediaQueryListeners(),
              (this.optionsProvider = c.optionsProvider(
                this.options,
                this.responsiveOptions,
                this.eventEmitter
              )))),
          this.initializeTimeoutId ||
            this.createChart(this.optionsProvider.getCurrentOptions()),
          this
        );
      }
      function e() {
        return (
          this.initializeTimeoutId
            ? a.clearTimeout(this.initializeTimeoutId)
            : (a.removeEventListener("resize", this.resizeListener),
              this.optionsProvider.removeMediaQueryListeners()),
          this
        );
      }
      function f(a, b) {
        return this.eventEmitter.addEventHandler(a, b), this;
      }
      function g(a, b) {
        return this.eventEmitter.removeEventHandler(a, b), this;
      }
      function h() {
        a.addEventListener("resize", this.resizeListener),
          (this.optionsProvider = c.optionsProvider(
            this.options,
            this.responsiveOptions,
            this.eventEmitter
          )),
          this.eventEmitter.addEventHandler(
            "optionsChanged",
            function () {
              this.update();
            }.bind(this)
          ),
          this.options.plugins &&
            this.options.plugins.forEach(
              function (a) {
                a instanceof Array ? a[0](this, a[1]) : a(this);
              }.bind(this)
            ),
          this.eventEmitter.emit("data", { type: "initial", data: this.data }),
          this.createChart(this.optionsProvider.getCurrentOptions()),
          (this.initializeTimeoutId = void 0);
      }
      function i(a, b, d, e, f) {
        (this.container = c.querySelector(a)),
          (this.data = b),
          (this.defaultOptions = d),
          (this.options = e),
          (this.responsiveOptions = f),
          (this.eventEmitter = c.EventEmitter()),
          (this.supportsForeignObject = c.Svg.isSupported("Extensibility")),
          (this.supportsAnimations = c.Svg.isSupported(
            "AnimationEventsAttribute"
          )),
          (this.resizeListener = function () {
            this.update();
          }.bind(this)),
          this.container &&
            (this.container.__chartist__ &&
              this.container.__chartist__.detach(),
            (this.container.__chartist__ = this)),
          (this.initializeTimeoutId = setTimeout(h.bind(this), 0));
      }
      c.Base = c.Class.extend({
        constructor: i,
        optionsProvider: void 0,
        container: void 0,
        svg: void 0,
        eventEmitter: void 0,
        createChart: function () {
          throw new Error("Base chart type can't be instantiated!");
        },
        update: d,
        detach: e,
        on: f,
        off: g,
        version: c.version,
        supportsForeignObject: !1,
      });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, d, e, f, g) {
        a instanceof Element
          ? (this._node = a)
          : ((this._node = b.createElementNS(c.namespaces.svg, a)),
            "svg" === a && this.attr({ "xmlns:ct": c.namespaces.ct })),
          d && this.attr(d),
          e && this.addClass(e),
          f &&
            (g && f._node.firstChild
              ? f._node.insertBefore(this._node, f._node.firstChild)
              : f._node.appendChild(this._node));
      }
      function e(a, b) {
        return "string" == typeof a
          ? b
            ? this._node.getAttributeNS(b, a)
            : this._node.getAttribute(a)
          : (Object.keys(a).forEach(
              function (b) {
                if (void 0 !== a[b])
                  if (b.indexOf(":") !== -1) {
                    var d = b.split(":");
                    this._node.setAttributeNS(c.namespaces[d[0]], b, a[b]);
                  } else this._node.setAttribute(b, a[b]);
              }.bind(this)
            ),
            this);
      }
      function f(a, b, d, e) {
        return new c.Svg(a, b, d, this, e);
      }
      function g() {
        return this._node.parentNode instanceof SVGElement
          ? new c.Svg(this._node.parentNode)
          : null;
      }
      function h() {
        for (var a = this._node; "svg" !== a.nodeName; ) a = a.parentNode;
        return new c.Svg(a);
      }
      function i(a) {
        var b = this._node.querySelector(a);
        return b ? new c.Svg(b) : null;
      }
      function j(a) {
        var b = this._node.querySelectorAll(a);
        return b.length ? new c.Svg.List(b) : null;
      }
      function k(a, d, e, f) {
        if ("string" == typeof a) {
          var g = b.createElement("div");
          (g.innerHTML = a), (a = g.firstChild);
        }
        a.setAttribute("xmlns", c.namespaces.xmlns);
        var h = this.elem("foreignObject", d, e, f);
        return h._node.appendChild(a), h;
      }
      function l(a) {
        return this._node.appendChild(b.createTextNode(a)), this;
      }
      function m() {
        for (; this._node.firstChild; )
          this._node.removeChild(this._node.firstChild);
        return this;
      }
      function n() {
        return this._node.parentNode.removeChild(this._node), this.parent();
      }
      function o(a) {
        return this._node.parentNode.replaceChild(a._node, this._node), a;
      }
      function p(a, b) {
        return (
          b && this._node.firstChild
            ? this._node.insertBefore(a._node, this._node.firstChild)
            : this._node.appendChild(a._node),
          this
        );
      }
      function q() {
        return this._node.getAttribute("class")
          ? this._node.getAttribute("class").trim().split(/\s+/)
          : [];
      }
      function r(a) {
        return (
          this._node.setAttribute(
            "class",
            this.classes(this._node)
              .concat(a.trim().split(/\s+/))
              .filter(function (a, b, c) {
                return c.indexOf(a) === b;
              })
              .join(" ")
          ),
          this
        );
      }
      function s(a) {
        var b = a.trim().split(/\s+/);
        return (
          this._node.setAttribute(
            "class",
            this.classes(this._node)
              .filter(function (a) {
                return b.indexOf(a) === -1;
              })
              .join(" ")
          ),
          this
        );
      }
      function t() {
        return this._node.setAttribute("class", ""), this;
      }
      function u() {
        return this._node.getBoundingClientRect().height;
      }
      function v() {
        return this._node.getBoundingClientRect().width;
      }
      function w(a, b, d) {
        return (
          void 0 === b && (b = !0),
          Object.keys(a).forEach(
            function (e) {
              function f(a, b) {
                var f,
                  g,
                  h,
                  i = {};
                a.easing &&
                  ((h =
                    a.easing instanceof Array
                      ? a.easing
                      : c.Svg.Easing[a.easing]),
                  delete a.easing),
                  (a.begin = c.ensureUnit(a.begin, "ms")),
                  (a.dur = c.ensureUnit(a.dur, "ms")),
                  h &&
                    ((a.calcMode = "spline"),
                    (a.keySplines = h.join(" ")),
                    (a.keyTimes = "0;1")),
                  b &&
                    ((a.fill = "freeze"),
                    (i[e] = a.from),
                    this.attr(i),
                    (g = c.quantity(a.begin || 0).value),
                    (a.begin = "indefinite")),
                  (f = this.elem("animate", c.extend({ attributeName: e }, a))),
                  b &&
                    setTimeout(
                      function () {
                        try {
                          f._node.beginElement();
                        } catch (b) {
                          (i[e] = a.to), this.attr(i), f.remove();
                        }
                      }.bind(this),
                      g
                    ),
                  d &&
                    f._node.addEventListener(
                      "beginEvent",
                      function () {
                        d.emit("animationBegin", {
                          element: this,
                          animate: f._node,
                          params: a,
                        });
                      }.bind(this)
                    ),
                  f._node.addEventListener(
                    "endEvent",
                    function () {
                      d &&
                        d.emit("animationEnd", {
                          element: this,
                          animate: f._node,
                          params: a,
                        }),
                        b && ((i[e] = a.to), this.attr(i), f.remove());
                    }.bind(this)
                  );
              }
              a[e] instanceof Array
                ? a[e].forEach(
                    function (a) {
                      f.bind(this)(a, !1);
                    }.bind(this)
                  )
                : f.bind(this)(a[e], b);
            }.bind(this)
          ),
          this
        );
      }
      function x(a) {
        var b = this;
        this.svgElements = [];
        for (var d = 0; d < a.length; d++)
          this.svgElements.push(new c.Svg(a[d]));
        Object.keys(c.Svg.prototype)
          .filter(function (a) {
            return (
              [
                "constructor",
                "parent",
                "querySelector",
                "querySelectorAll",
                "replace",
                "append",
                "classes",
                "height",
                "width",
              ].indexOf(a) === -1
            );
          })
          .forEach(function (a) {
            b[a] = function () {
              var d = Array.prototype.slice.call(arguments, 0);
              return (
                b.svgElements.forEach(function (b) {
                  c.Svg.prototype[a].apply(b, d);
                }),
                b
              );
            };
          });
      }
      (c.Svg = c.Class.extend({
        constructor: d,
        attr: e,
        elem: f,
        parent: g,
        root: h,
        querySelector: i,
        querySelectorAll: j,
        foreignObject: k,
        text: l,
        empty: m,
        remove: n,
        replace: o,
        append: p,
        classes: q,
        addClass: r,
        removeClass: s,
        removeAllClasses: t,
        height: u,
        width: v,
        animate: w,
      })),
        (c.Svg.isSupported = function (a) {
          return b.implementation.hasFeature(
            "http://www.w3.org/TR/SVG11/feature#" + a,
            "1.1"
          );
        });
      var y = {
        easeInSine: [0.47, 0, 0.745, 0.715],
        easeOutSine: [0.39, 0.575, 0.565, 1],
        easeInOutSine: [0.445, 0.05, 0.55, 0.95],
        easeInQuad: [0.55, 0.085, 0.68, 0.53],
        easeOutQuad: [0.25, 0.46, 0.45, 0.94],
        easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
        easeInCubic: [0.55, 0.055, 0.675, 0.19],
        easeOutCubic: [0.215, 0.61, 0.355, 1],
        easeInOutCubic: [0.645, 0.045, 0.355, 1],
        easeInQuart: [0.895, 0.03, 0.685, 0.22],
        easeOutQuart: [0.165, 0.84, 0.44, 1],
        easeInOutQuart: [0.77, 0, 0.175, 1],
        easeInQuint: [0.755, 0.05, 0.855, 0.06],
        easeOutQuint: [0.23, 1, 0.32, 1],
        easeInOutQuint: [0.86, 0, 0.07, 1],
        easeInExpo: [0.95, 0.05, 0.795, 0.035],
        easeOutExpo: [0.19, 1, 0.22, 1],
        easeInOutExpo: [1, 0, 0, 1],
        easeInCirc: [0.6, 0.04, 0.98, 0.335],
        easeOutCirc: [0.075, 0.82, 0.165, 1],
        easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
        easeInBack: [0.6, -0.28, 0.735, 0.045],
        easeOutBack: [0.175, 0.885, 0.32, 1.275],
        easeInOutBack: [0.68, -0.55, 0.265, 1.55],
      };
      (c.Svg.Easing = y), (c.Svg.List = c.Class.extend({ constructor: x }));
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, d, e, f, g) {
        var h = c.extend(
          { command: f ? a.toLowerCase() : a.toUpperCase() },
          b,
          g ? { data: g } : {}
        );
        d.splice(e, 0, h);
      }
      function e(a, b) {
        a.forEach(function (c, d) {
          u[c.command.toLowerCase()].forEach(function (e, f) {
            b(c, e, d, f, a);
          });
        });
      }
      function f(a, b) {
        (this.pathElements = []),
          (this.pos = 0),
          (this.close = a),
          (this.options = c.extend({}, v, b));
      }
      function g(a) {
        return void 0 !== a
          ? ((this.pos = Math.max(0, Math.min(this.pathElements.length, a))),
            this)
          : this.pos;
      }
      function h(a) {
        return this.pathElements.splice(this.pos, a), this;
      }
      function i(a, b, c, e) {
        return (
          d("M", { x: +a, y: +b }, this.pathElements, this.pos++, c, e), this
        );
      }
      function j(a, b, c, e) {
        return (
          d("L", { x: +a, y: +b }, this.pathElements, this.pos++, c, e), this
        );
      }
      function k(a, b, c, e, f, g, h, i) {
        return (
          d(
            "C",
            { x1: +a, y1: +b, x2: +c, y2: +e, x: +f, y: +g },
            this.pathElements,
            this.pos++,
            h,
            i
          ),
          this
        );
      }
      function l(a, b, c, e, f, g, h, i, j) {
        return (
          d(
            "A",
            { rx: +a, ry: +b, xAr: +c, lAf: +e, sf: +f, x: +g, y: +h },
            this.pathElements,
            this.pos++,
            i,
            j
          ),
          this
        );
      }
      function m(a) {
        var b = a
          .replace(/([A-Za-z])([0-9])/g, "$1 $2")
          .replace(/([0-9])([A-Za-z])/g, "$1 $2")
          .split(/[\s,]+/)
          .reduce(function (a, b) {
            return (
              b.match(/[A-Za-z]/) && a.push([]), a[a.length - 1].push(b), a
            );
          }, []);
        "Z" === b[b.length - 1][0].toUpperCase() && b.pop();
        var d = b.map(function (a) {
            var b = a.shift(),
              d = u[b.toLowerCase()];
            return c.extend(
              { command: b },
              d.reduce(function (b, c, d) {
                return (b[c] = +a[d]), b;
              }, {})
            );
          }),
          e = [this.pos, 0];
        return (
          Array.prototype.push.apply(e, d),
          Array.prototype.splice.apply(this.pathElements, e),
          (this.pos += d.length),
          this
        );
      }
      function n() {
        var a = Math.pow(10, this.options.accuracy);
        return (
          this.pathElements.reduce(
            function (b, c) {
              var d = u[c.command.toLowerCase()].map(
                function (b) {
                  return this.options.accuracy
                    ? Math.round(c[b] * a) / a
                    : c[b];
                }.bind(this)
              );
              return b + c.command + d.join(",");
            }.bind(this),
            ""
          ) + (this.close ? "Z" : "")
        );
      }
      function o(a, b) {
        return (
          e(this.pathElements, function (c, d) {
            c[d] *= "x" === d[0] ? a : b;
          }),
          this
        );
      }
      function p(a, b) {
        return (
          e(this.pathElements, function (c, d) {
            c[d] += "x" === d[0] ? a : b;
          }),
          this
        );
      }
      function q(a) {
        return (
          e(this.pathElements, function (b, c, d, e, f) {
            var g = a(b, c, d, e, f);
            (g || 0 === g) && (b[c] = g);
          }),
          this
        );
      }
      function r(a) {
        var b = new c.Svg.Path(a || this.close);
        return (
          (b.pos = this.pos),
          (b.pathElements = this.pathElements.slice().map(function (a) {
            return c.extend({}, a);
          })),
          (b.options = c.extend({}, this.options)),
          b
        );
      }
      function s(a) {
        var b = [new c.Svg.Path()];
        return (
          this.pathElements.forEach(function (d) {
            d.command === a.toUpperCase() &&
              0 !== b[b.length - 1].pathElements.length &&
              b.push(new c.Svg.Path()),
              b[b.length - 1].pathElements.push(d);
          }),
          b
        );
      }
      function t(a, b, d) {
        for (var e = new c.Svg.Path(b, d), f = 0; f < a.length; f++)
          for (var g = a[f], h = 0; h < g.pathElements.length; h++)
            e.pathElements.push(g.pathElements[h]);
        return e;
      }
      var u = {
          m: ["x", "y"],
          l: ["x", "y"],
          c: ["x1", "y1", "x2", "y2", "x", "y"],
          a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"],
        },
        v = { accuracy: 3 };
      (c.Svg.Path = c.Class.extend({
        constructor: f,
        position: g,
        remove: h,
        move: i,
        line: j,
        curve: k,
        arc: l,
        scale: o,
        translate: p,
        transform: q,
        parse: m,
        stringify: n,
        clone: r,
        splitByCommand: s,
      })),
        (c.Svg.Path.elementDescriptions = u),
        (c.Svg.Path.join = t);
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, c, d) {
        (this.units = a),
          (this.counterUnits = a === f.x ? f.y : f.x),
          (this.chartRect = b),
          (this.axisLength = b[a.rectEnd] - b[a.rectStart]),
          (this.gridOffset = b[a.rectOffset]),
          (this.ticks = c),
          (this.options = d);
      }
      function e(a, b, d, e, f) {
        var g = e["axis" + this.units.pos.toUpperCase()],
          h = this.ticks.map(this.projectValue.bind(this)),
          i = this.ticks.map(g.labelInterpolationFnc);
        h.forEach(
          function (j, k) {
            var l,
              m = { x: 0, y: 0 };
            (l = h[k + 1] ? h[k + 1] - j : Math.max(this.axisLength - j, 30)),
              (c.isFalseyButZero(i[k]) && "" !== i[k]) ||
                ("x" === this.units.pos
                  ? ((j = this.chartRect.x1 + j),
                    (m.x = e.axisX.labelOffset.x),
                    "start" === e.axisX.position
                      ? (m.y =
                          this.chartRect.padding.top +
                          e.axisX.labelOffset.y +
                          (d ? 5 : 20))
                      : (m.y =
                          this.chartRect.y1 +
                          e.axisX.labelOffset.y +
                          (d ? 5 : 20)))
                  : ((j = this.chartRect.y1 - j),
                    (m.y = e.axisY.labelOffset.y - (d ? l : 0)),
                    "start" === e.axisY.position
                      ? (m.x = d
                          ? this.chartRect.padding.left + e.axisY.labelOffset.x
                          : this.chartRect.x1 - 10)
                      : (m.x = this.chartRect.x2 + e.axisY.labelOffset.x + 10)),
                g.showGrid &&
                  c.createGrid(
                    j,
                    k,
                    this,
                    this.gridOffset,
                    this.chartRect[this.counterUnits.len](),
                    a,
                    [e.classNames.grid, e.classNames[this.units.dir]],
                    f
                  ),
                g.showLabel &&
                  c.createLabel(
                    j,
                    l,
                    k,
                    i,
                    this,
                    g.offset,
                    m,
                    b,
                    [
                      e.classNames.label,
                      e.classNames[this.units.dir],
                      e.classNames[g.position],
                    ],
                    d,
                    f
                  ));
          }.bind(this)
        );
      }
      var f = {
        x: {
          pos: "x",
          len: "width",
          dir: "horizontal",
          rectStart: "x1",
          rectEnd: "x2",
          rectOffset: "y2",
        },
        y: {
          pos: "y",
          len: "height",
          dir: "vertical",
          rectStart: "y2",
          rectEnd: "y1",
          rectOffset: "x1",
        },
      };
      (c.Axis = c.Class.extend({
        constructor: d,
        createGridAndLabels: e,
        projectValue: function (a, b, c) {
          throw new Error("Base axis can't be instantiated!");
        },
      })),
        (c.Axis.units = f);
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, d, e) {
        var f = e.highLow || c.getHighLow(b.normalized, e, a.pos);
        (this.bounds = c.getBounds(
          d[a.rectEnd] - d[a.rectStart],
          f,
          e.scaleMinSpace || 20,
          e.onlyInteger
        )),
          (this.range = { min: this.bounds.min, max: this.bounds.max }),
          c.AutoScaleAxis["super"].constructor.call(
            this,
            a,
            d,
            this.bounds.values,
            e
          );
      }
      function e(a) {
        return (
          (this.axisLength *
            (+c.getMultiValue(a, this.units.pos) - this.bounds.min)) /
          this.bounds.range
        );
      }
      c.AutoScaleAxis = c.Axis.extend({ constructor: d, projectValue: e });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, d, e) {
        var f = e.highLow || c.getHighLow(b.normalized, e, a.pos);
        (this.divisor = e.divisor || 1),
          (this.ticks =
            e.ticks ||
            c.times(this.divisor).map(
              function (a, b) {
                return f.low + ((f.high - f.low) / this.divisor) * b;
              }.bind(this)
            )),
          this.ticks.sort(function (a, b) {
            return a - b;
          }),
          (this.range = { min: f.low, max: f.high }),
          c.FixedScaleAxis["super"].constructor.call(this, a, d, this.ticks, e),
          (this.stepLength = this.axisLength / this.divisor);
      }
      function e(a) {
        return (
          (this.axisLength *
            (+c.getMultiValue(a, this.units.pos) - this.range.min)) /
          (this.range.max - this.range.min)
        );
      }
      c.FixedScaleAxis = c.Axis.extend({ constructor: d, projectValue: e });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, d, e) {
        c.StepAxis["super"].constructor.call(this, a, d, e.ticks, e),
          (this.stepLength =
            this.axisLength / (e.ticks.length - (e.stretch ? 1 : 0)));
      }
      function e(a, b) {
        return this.stepLength * b;
      }
      c.StepAxis = c.Axis.extend({ constructor: d, projectValue: e });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a) {
        this.data = c.normalizeData(this.data);
        var b = {
          raw: this.data,
          normalized: c.getDataArray(this.data, a.reverseData, !0),
        };
        this.svg = c.createSvg(
          this.container,
          a.width,
          a.height,
          a.classNames.chart
        );
        var d,
          e,
          g = this.svg.elem("g").addClass(a.classNames.gridGroup),
          h = this.svg.elem("g"),
          i = this.svg.elem("g").addClass(a.classNames.labelGroup),
          j = c.createChartRect(this.svg, a, f.padding);
        (d =
          void 0 === a.axisX.type
            ? new c.StepAxis(
                c.Axis.units.x,
                b,
                j,
                c.extend({}, a.axisX, {
                  ticks: b.raw.labels,
                  stretch: a.fullWidth,
                })
              )
            : a.axisX.type.call(c, c.Axis.units.x, b, j, a.axisX)),
          (e =
            void 0 === a.axisY.type
              ? new c.AutoScaleAxis(
                  c.Axis.units.y,
                  b,
                  j,
                  c.extend({}, a.axisY, {
                    high: c.isNum(a.high) ? a.high : a.axisY.high,
                    low: c.isNum(a.low) ? a.low : a.axisY.low,
                  })
                )
              : a.axisY.type.call(c, c.Axis.units.y, b, j, a.axisY)),
          d.createGridAndLabels(
            g,
            i,
            this.supportsForeignObject,
            a,
            this.eventEmitter
          ),
          e.createGridAndLabels(
            g,
            i,
            this.supportsForeignObject,
            a,
            this.eventEmitter
          ),
          b.raw.series.forEach(
            function (f, g) {
              var i = h.elem("g");
              i.attr({
                "ct:series-name": f.name,
                "ct:meta": c.serialize(f.meta),
              }),
                i.addClass(
                  [
                    a.classNames.series,
                    f.className ||
                      a.classNames.series + "-" + c.alphaNumerate(g),
                  ].join(" ")
                );
              var k = [],
                l = [];
              b.normalized[g].forEach(
                function (a, h) {
                  var i = {
                    x: j.x1 + d.projectValue(a, h, b.normalized[g]),
                    y: j.y1 - e.projectValue(a, h, b.normalized[g]),
                  };
                  k.push(i.x, i.y),
                    l.push({
                      value: a,
                      valueIndex: h,
                      meta: c.getMetaData(f, h),
                    });
                }.bind(this)
              );
              var m = {
                  lineSmooth: c.getSeriesOption(f, a, "lineSmooth"),
                  showPoint: c.getSeriesOption(f, a, "showPoint"),
                  showLine: c.getSeriesOption(f, a, "showLine"),
                  showArea: c.getSeriesOption(f, a, "showArea"),
                  areaBase: c.getSeriesOption(f, a, "areaBase"),
                },
                n =
                  "function" == typeof m.lineSmooth
                    ? m.lineSmooth
                    : m.lineSmooth
                    ? c.Interpolation.monotoneCubic()
                    : c.Interpolation.none(),
                o = n(k, l);
              if (
                (m.showPoint &&
                  o.pathElements.forEach(
                    function (b) {
                      var h = i
                        .elem(
                          "line",
                          { x1: b.x, y1: b.y, x2: b.x + 0.01, y2: b.y },
                          a.classNames.point
                        )
                        .attr({
                          "ct:value": [b.data.value.x, b.data.value.y]
                            .filter(c.isNum)
                            .join(","),
                          "ct:meta": b.data.meta,
                        });
                      this.eventEmitter.emit("draw", {
                        type: "point",
                        value: b.data.value,
                        index: b.data.valueIndex,
                        meta: b.data.meta,
                        series: f,
                        seriesIndex: g,
                        axisX: d,
                        axisY: e,
                        group: i,
                        element: h,
                        x: b.x,
                        y: b.y,
                      });
                    }.bind(this)
                  ),
                m.showLine)
              ) {
                var p = i.elem(
                  "path",
                  { d: o.stringify() },
                  a.classNames.line,
                  !0
                );
                this.eventEmitter.emit("draw", {
                  type: "line",
                  values: b.normalized[g],
                  path: o.clone(),
                  chartRect: j,
                  index: g,
                  series: f,
                  seriesIndex: g,
                  axisX: d,
                  axisY: e,
                  group: i,
                  element: p,
                });
              }
              if (m.showArea && e.range) {
                var q = Math.max(
                    Math.min(m.areaBase, e.range.max),
                    e.range.min
                  ),
                  r = j.y1 - e.projectValue(q);
                o.splitByCommand("M")
                  .filter(function (a) {
                    return a.pathElements.length > 1;
                  })
                  .map(function (a) {
                    var b = a.pathElements[0],
                      c = a.pathElements[a.pathElements.length - 1];
                    return a
                      .clone(!0)
                      .position(0)
                      .remove(1)
                      .move(b.x, r)
                      .line(b.x, b.y)
                      .position(a.pathElements.length + 1)
                      .line(c.x, r);
                  })
                  .forEach(
                    function (c) {
                      var h = i.elem(
                        "path",
                        { d: c.stringify() },
                        a.classNames.area,
                        !0
                      );
                      this.eventEmitter.emit("draw", {
                        type: "area",
                        values: b.normalized[g],
                        path: c.clone(),
                        series: f,
                        seriesIndex: g,
                        axisX: d,
                        axisY: e,
                        chartRect: j,
                        index: g,
                        group: i,
                        element: h,
                      });
                    }.bind(this)
                  );
              }
            }.bind(this)
          ),
          this.eventEmitter.emit("created", {
            bounds: e.bounds,
            chartRect: j,
            axisX: d,
            axisY: e,
            svg: this.svg,
            options: a,
          });
      }
      function e(a, b, d, e) {
        c.Line["super"].constructor.call(this, a, b, f, c.extend({}, f, d), e);
      }
      var f = {
        axisX: {
          offset: 30,
          position: "end",
          labelOffset: { x: 0, y: 0 },
          showLabel: !0,
          showGrid: !0,
          labelInterpolationFnc: c.noop,
          type: void 0,
        },
        axisY: {
          offset: 40,
          position: "start",
          labelOffset: { x: 0, y: 0 },
          showLabel: !0,
          showGrid: !0,
          labelInterpolationFnc: c.noop,
          type: void 0,
          scaleMinSpace: 20,
          onlyInteger: !1,
        },
        width: void 0,
        height: void 0,
        showLine: !0,
        showPoint: !0,
        showArea: !1,
        areaBase: 0,
        lineSmooth: !0,
        low: void 0,
        high: void 0,
        chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
        fullWidth: !1,
        reverseData: !1,
        classNames: {
          chart: "ct-chart-line",
          label: "ct-label",
          labelGroup: "ct-labels",
          series: "ct-series",
          line: "ct-line",
          point: "ct-point",
          area: "ct-area",
          grid: "ct-grid",
          gridGroup: "ct-grids",
          vertical: "ct-vertical",
          horizontal: "ct-horizontal",
          start: "ct-start",
          end: "ct-end",
        },
      };
      c.Line = c.Base.extend({ constructor: e, createChart: d });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a) {
        this.data = c.normalizeData(this.data);
        var b,
          d = {
            raw: this.data,
            normalized: a.distributeSeries
              ? c
                  .getDataArray(
                    this.data,
                    a.reverseData,
                    a.horizontalBars ? "x" : "y"
                  )
                  .map(function (a) {
                    return [a];
                  })
              : c.getDataArray(
                  this.data,
                  a.reverseData,
                  a.horizontalBars ? "x" : "y"
                ),
          };
        this.svg = c.createSvg(
          this.container,
          a.width,
          a.height,
          a.classNames.chart +
            (a.horizontalBars ? " " + a.classNames.horizontalBars : "")
        );
        var e = this.svg.elem("g").addClass(a.classNames.gridGroup),
          g = this.svg.elem("g"),
          h = this.svg.elem("g").addClass(a.classNames.labelGroup);
        if (a.stackBars && 0 !== d.normalized.length) {
          var i = c.serialMap(d.normalized, function () {
            return Array.prototype.slice
              .call(arguments)
              .map(function (a) {
                return a;
              })
              .reduce(
                function (a, b) {
                  return { x: a.x + (b && b.x) || 0, y: a.y + (b && b.y) || 0 };
                },
                { x: 0, y: 0 }
              );
          });
          b = c.getHighLow(
            [i],
            c.extend({}, a, { referenceValue: 0 }),
            a.horizontalBars ? "x" : "y"
          );
        } else
          b = c.getHighLow(
            d.normalized,
            c.extend({}, a, { referenceValue: 0 }),
            a.horizontalBars ? "x" : "y"
          );
        (b.high = +a.high || (0 === a.high ? 0 : b.high)),
          (b.low = +a.low || (0 === a.low ? 0 : b.low));
        var j,
          k,
          l,
          m,
          n,
          o = c.createChartRect(this.svg, a, f.padding);
        (k =
          a.distributeSeries && a.stackBars
            ? d.raw.labels.slice(0, 1)
            : d.raw.labels),
          a.horizontalBars
            ? ((j = m =
                void 0 === a.axisX.type
                  ? new c.AutoScaleAxis(
                      c.Axis.units.x,
                      d,
                      o,
                      c.extend({}, a.axisX, { highLow: b, referenceValue: 0 })
                    )
                  : a.axisX.type.call(
                      c,
                      c.Axis.units.x,
                      d,
                      o,
                      c.extend({}, a.axisX, { highLow: b, referenceValue: 0 })
                    )),
              (l = n =
                void 0 === a.axisY.type
                  ? new c.StepAxis(c.Axis.units.y, d, o, { ticks: k })
                  : a.axisY.type.call(c, c.Axis.units.y, d, o, a.axisY)))
            : ((l = m =
                void 0 === a.axisX.type
                  ? new c.StepAxis(c.Axis.units.x, d, o, { ticks: k })
                  : a.axisX.type.call(c, c.Axis.units.x, d, o, a.axisX)),
              (j = n =
                void 0 === a.axisY.type
                  ? new c.AutoScaleAxis(
                      c.Axis.units.y,
                      d,
                      o,
                      c.extend({}, a.axisY, { highLow: b, referenceValue: 0 })
                    )
                  : a.axisY.type.call(
                      c,
                      c.Axis.units.y,
                      d,
                      o,
                      c.extend({}, a.axisY, { highLow: b, referenceValue: 0 })
                    )));
        var p = a.horizontalBars
            ? o.x1 + j.projectValue(0)
            : o.y1 - j.projectValue(0),
          q = [];
        l.createGridAndLabels(
          e,
          h,
          this.supportsForeignObject,
          a,
          this.eventEmitter
        ),
          j.createGridAndLabels(
            e,
            h,
            this.supportsForeignObject,
            a,
            this.eventEmitter
          ),
          d.raw.series.forEach(
            function (b, e) {
              var f,
                h,
                i = e - (d.raw.series.length - 1) / 2;
              (f =
                a.distributeSeries && !a.stackBars
                  ? l.axisLength / d.normalized.length / 2
                  : a.distributeSeries && a.stackBars
                  ? l.axisLength / 2
                  : l.axisLength / d.normalized[e].length / 2),
                (h = g.elem("g")),
                h.attr({
                  "ct:series-name": b.name,
                  "ct:meta": c.serialize(b.meta),
                }),
                h.addClass(
                  [
                    a.classNames.series,
                    b.className ||
                      a.classNames.series + "-" + c.alphaNumerate(e),
                  ].join(" ")
                ),
                d.normalized[e].forEach(
                  function (g, k) {
                    var r, s, t, u;
                    if (
                      ((u =
                        a.distributeSeries && !a.stackBars
                          ? e
                          : a.distributeSeries && a.stackBars
                          ? 0
                          : k),
                      (r = a.horizontalBars
                        ? {
                            x:
                              o.x1 +
                              j.projectValue(
                                g && g.x ? g.x : 0,
                                k,
                                d.normalized[e]
                              ),
                            y:
                              o.y1 -
                              l.projectValue(
                                g && g.y ? g.y : 0,
                                u,
                                d.normalized[e]
                              ),
                          }
                        : {
                            x:
                              o.x1 +
                              l.projectValue(
                                g && g.x ? g.x : 0,
                                u,
                                d.normalized[e]
                              ),
                            y:
                              o.y1 -
                              j.projectValue(
                                g && g.y ? g.y : 0,
                                k,
                                d.normalized[e]
                              ),
                          }),
                      l instanceof c.StepAxis &&
                        (l.options.stretch ||
                          (r[l.units.pos] += f * (a.horizontalBars ? -1 : 1)),
                        (r[l.units.pos] +=
                          a.stackBars || a.distributeSeries
                            ? 0
                            : i *
                              a.seriesBarDistance *
                              (a.horizontalBars ? -1 : 1))),
                      (t = q[k] || p),
                      (q[k] = t - (p - r[l.counterUnits.pos])),
                      void 0 !== g)
                    ) {
                      var v = {};
                      (v[l.units.pos + "1"] = r[l.units.pos]),
                        (v[l.units.pos + "2"] = r[l.units.pos]),
                        !a.stackBars ||
                        ("accumulate" !== a.stackMode && a.stackMode)
                          ? ((v[l.counterUnits.pos + "1"] = p),
                            (v[l.counterUnits.pos + "2"] =
                              r[l.counterUnits.pos]))
                          : ((v[l.counterUnits.pos + "1"] = t),
                            (v[l.counterUnits.pos + "2"] = q[k])),
                        (v.x1 = Math.min(Math.max(v.x1, o.x1), o.x2)),
                        (v.x2 = Math.min(Math.max(v.x2, o.x1), o.x2)),
                        (v.y1 = Math.min(Math.max(v.y1, o.y2), o.y1)),
                        (v.y2 = Math.min(Math.max(v.y2, o.y2), o.y1)),
                        (s = h
                          .elem("line", v, a.classNames.bar)
                          .attr({
                            "ct:value": [g.x, g.y].filter(c.isNum).join(","),
                            "ct:meta": c.getMetaData(b, k),
                          })),
                        this.eventEmitter.emit(
                          "draw",
                          c.extend(
                            {
                              type: "bar",
                              value: g,
                              index: k,
                              meta: c.getMetaData(b, k),
                              series: b,
                              seriesIndex: e,
                              axisX: m,
                              axisY: n,
                              chartRect: o,
                              group: h,
                              element: s,
                            },
                            v
                          )
                        );
                    }
                  }.bind(this)
                );
            }.bind(this)
          ),
          this.eventEmitter.emit("created", {
            bounds: j.bounds,
            chartRect: o,
            axisX: m,
            axisY: n,
            svg: this.svg,
            options: a,
          });
      }
      function e(a, b, d, e) {
        c.Bar["super"].constructor.call(this, a, b, f, c.extend({}, f, d), e);
      }
      var f = {
        axisX: {
          offset: 30,
          position: "end",
          labelOffset: { x: 0, y: 0 },
          showLabel: !0,
          showGrid: !0,
          labelInterpolationFnc: c.noop,
          scaleMinSpace: 30,
          onlyInteger: !1,
        },
        axisY: {
          offset: 40,
          position: "start",
          labelOffset: { x: 0, y: 0 },
          showLabel: !0,
          showGrid: !0,
          labelInterpolationFnc: c.noop,
          scaleMinSpace: 20,
          onlyInteger: !1,
        },
        width: void 0,
        height: void 0,
        high: void 0,
        low: void 0,
        chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
        seriesBarDistance: 15,
        stackBars: !1,
        stackMode: "accumulate",
        horizontalBars: !1,
        distributeSeries: !1,
        reverseData: !1,
        classNames: {
          chart: "ct-chart-bar",
          horizontalBars: "ct-horizontal-bars",
          label: "ct-label",
          labelGroup: "ct-labels",
          series: "ct-series",
          bar: "ct-bar",
          grid: "ct-grid",
          gridGroup: "ct-grids",
          vertical: "ct-vertical",
          horizontal: "ct-horizontal",
          start: "ct-start",
          end: "ct-end",
        },
      };
      c.Bar = c.Base.extend({ constructor: e, createChart: d });
    })(window, document, a),
    (function (a, b, c) {
      "use strict";
      function d(a, b, c) {
        var d = b.x > a.x;
        return (d && "explode" === c) || (!d && "implode" === c)
          ? "start"
          : (d && "implode" === c) || (!d && "explode" === c)
          ? "end"
          : "middle";
      }
      function e(a) {
        this.data = c.normalizeData(this.data);
        var b,
          e,
          f,
          h,
          i,
          j = [],
          k = a.startAngle,
          l = c.getDataArray(this.data, a.reverseData);
        (this.svg = c.createSvg(
          this.container,
          a.width,
          a.height,
          a.donut ? a.classNames.chartDonut : a.classNames.chartPie
        )),
          (e = c.createChartRect(this.svg, a, g.padding)),
          (f = Math.min(e.width() / 2, e.height() / 2)),
          (i =
            a.total ||
            l.reduce(function (a, b) {
              return a + b;
            }, 0));
        var m = c.quantity(a.donutWidth);
        "%" === m.unit && (m.value *= f / 100),
          (f -= a.donut ? m.value / 2 : 0),
          (h =
            "outside" === a.labelPosition || a.donut
              ? f
              : "center" === a.labelPosition
              ? 0
              : f / 2),
          (h += a.labelOffset);
        var n = { x: e.x1 + e.width() / 2, y: e.y2 + e.height() / 2 },
          o =
            1 ===
            this.data.series.filter(function (a) {
              return a.hasOwnProperty("value") ? 0 !== a.value : 0 !== a;
            }).length;
        a.showLabel && (b = this.svg.elem("g", null, null, !0));
        for (var p = 0; p < this.data.series.length; p++)
          if (0 !== l[p] || !a.ignoreEmptyValues) {
            var q = this.data.series[p];
            (j[p] = this.svg.elem("g", null, null, !0)),
              j[p].attr({ "ct:series-name": q.name }),
              j[p].addClass(
                [
                  a.classNames.series,
                  q.className || a.classNames.series + "-" + c.alphaNumerate(p),
                ].join(" ")
              );
            var r = k + (l[p] / i) * 360,
              s = Math.max(0, k - (0 === p || o ? 0 : 0.2));
            r - s >= 359.99 && (r = s + 359.99);
            var t = c.polarToCartesian(n.x, n.y, f, s),
              u = c.polarToCartesian(n.x, n.y, f, r),
              v = new c.Svg.Path(!a.donut)
                .move(u.x, u.y)
                .arc(f, f, 0, r - k > 180, 0, t.x, t.y);
            a.donut || v.line(n.x, n.y);
            var w = j[p].elem(
              "path",
              { d: v.stringify() },
              a.donut ? a.classNames.sliceDonut : a.classNames.slicePie
            );
            if (
              (w.attr({ "ct:value": l[p], "ct:meta": c.serialize(q.meta) }),
              a.donut && w.attr({ style: "stroke-width: " + m.value + "px" }),
              this.eventEmitter.emit("draw", {
                type: "slice",
                value: l[p],
                totalDataSum: i,
                index: p,
                meta: q.meta,
                series: q,
                group: j[p],
                element: w,
                path: v.clone(),
                center: n,
                radius: f,
                startAngle: k,
                endAngle: r,
              }),
              a.showLabel)
            ) {
              var x = c.polarToCartesian(n.x, n.y, h, k + (r - k) / 2),
                y = a.labelInterpolationFnc(
                  this.data.labels && !c.isFalseyButZero(this.data.labels[p])
                    ? this.data.labels[p]
                    : l[p],
                  p
                );
              if (y || 0 === y) {
                var z = b
                  .elem(
                    "text",
                    {
                      dx: x.x,
                      dy: x.y,
                      "text-anchor": d(n, x, a.labelDirection),
                    },
                    a.classNames.label
                  )
                  .text("" + y);
                this.eventEmitter.emit("draw", {
                  type: "label",
                  index: p,
                  group: b,
                  element: z,
                  text: "" + y,
                  x: x.x,
                  y: x.y,
                });
              }
            }
            k = r;
          }
        this.eventEmitter.emit("created", {
          chartRect: e,
          svg: this.svg,
          options: a,
        });
      }
      function f(a, b, d, e) {
        c.Pie["super"].constructor.call(this, a, b, g, c.extend({}, g, d), e);
      }
      var g = {
        width: void 0,
        height: void 0,
        chartPadding: 5,
        classNames: {
          chartPie: "ct-chart-pie",
          chartDonut: "ct-chart-donut",
          series: "ct-series",
          slicePie: "ct-slice-pie",
          sliceDonut: "ct-slice-donut",
          label: "ct-label",
        },
        startAngle: 0,
        total: void 0,
        donut: !1,
        donutWidth: 60,
        showLabel: !0,
        labelOffset: 0,
        labelPosition: "inside",
        labelInterpolationFnc: c.noop,
        labelDirection: "neutral",
        reverseData: !1,
        ignoreEmptyValues: !1,
      };
      c.Pie = c.Base.extend({
        constructor: f,
        createChart: e,
        determineAnchorPosition: d,
      });
    })(window, document, a),
    a
  );
});
//# sourceMappingURL=chartist.min.js.map

/*-------------------------------------------------------------
  08. Chartist Point Labels
---------------------------------------------------------------*/
/* chartist-plugin-pointlabels 0.0.12
 * Copyright Â© 2016 Gion Kunz
 * Free to use under the WTFPL license.
 * http://www.wtfpl.net/
 */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["chartist"], function (c) {
        return (a.returnExportsGlobal = b(c));
      })
    : "object" == typeof exports
    ? (module.exports = b(require("chartist")))
    : (a["Chartist.plugins.tooltips"] = b(Chartist));
})(this, function (a) {
  return (
    (function (a, b, c) {
      "use strict";
      function d(a) {
        f(a, "tooltip-show") || (a.className = a.className + " tooltip-show");
      }
      function e(a) {
        var b = new RegExp("tooltip-show\\s*", "gi");
        a.className = a.className.replace(b, "").trim();
      }
      function f(a, b) {
        return (
          (" " + a.getAttribute("class") + " ").indexOf(" " + b + " ") > -1
        );
      }
      function g(a, b) {
        do a = a.nextSibling;
        while (a && !f(a, b));
        return a;
      }
      function h(a) {
        return a.innerText || a.textContent;
      }
      var i = {
        currency: void 0,
        tooltipOffset: { x: 0, y: -20 },
        appendToBody: !1,
        class: void 0,
      };
      (c.plugins = c.plugins || {}),
        (c.plugins.tooltip = function (a) {
          return (
            (a = c.extend({}, i, a)),
            function (i) {
              function j(a, b, c) {
                m.addEventListener(a, function (a) {
                  (!b || f(a.target, b)) && c(a);
                });
              }
              function k(b) {
                (o = o || n.offsetHeight),
                  (p = p || n.offsetWidth),
                  a.appendToBody
                    ? ((n.style.top = b.pageY - o + a.tooltipOffset.y + "px"),
                      (n.style.left =
                        b.pageX - p / 2 + a.tooltipOffset.x + "px"))
                    : ((n.style.top =
                        (b.layerY || b.offsetY) - o + a.tooltipOffset.y + "px"),
                      (n.style.left =
                        (b.layerX || b.offsetX) -
                        p / 2 +
                        a.tooltipOffset.x +
                        "px"));
              }
              var l = "ct-point";
              i instanceof c.Bar
                ? (l = "ct-bar")
                : i instanceof c.Pie &&
                  (l = i.options.donut ? "ct-slice-donut" : "ct-slice-pie");
              var m = i.container,
                n = m.querySelector(".chartist-tooltip");
              n ||
                ((n = b.createElement("div")),
                (n.className = a["class"]
                  ? "chartist-tooltip " + a["class"]
                  : "chartist-tooltip"),
                a.appendToBody ? b.body.appendChild(n) : m.appendChild(n));
              var o = n.offsetHeight,
                p = n.offsetWidth;
              e(n),
                j("mouseover", l, function (e) {
                  var f = e.target,
                    j = "",
                    l = i instanceof c.Pie ? f : f.parentNode,
                    m = l
                      ? f.parentNode.getAttribute("ct:meta") ||
                        f.parentNode.getAttribute("ct:series-name")
                      : "",
                    q = f.getAttribute("ct:meta") || m || "",
                    r = !!q,
                    s = f.getAttribute("ct:value");
                  if (a.tooltipFnc) j = a.tooltipFnc(q, s);
                  else {
                    if (a.metaIsHTML) {
                      var t = b.createElement("textarea");
                      (t.innerHTML = q), (q = t.value);
                    }
                    if (
                      ((q =
                        '<span class="chartist-tooltip-meta">' + q + "</span>"),
                      r)
                    )
                      j += q + "<br>";
                    else if (i instanceof c.Pie) {
                      var u = g(f, "ct-label");
                      u && (j += h(u) + "<br>");
                    }
                    s &&
                      ((s =
                        '<span class="chartist-tooltip-value">' +
                        s +
                        "</span>"),
                      a.currency &&
                        (s =
                          a.currency +
                          s.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")),
                      (j += s));
                  }
                  j &&
                    ((n.innerHTML = j),
                    k(e),
                    d(n),
                    (o = n.offsetHeight),
                    (p = n.offsetWidth));
                }),
                j("mouseout", l, function () {
                  e(n);
                }),
                j("mousemove", null, function (a) {
                  k(a);
                });
            }
          );
        });
    })(window, document, a),
    a.plugins.tooltips
  );
});
//# sourceMappingURL=chartist-plugin-tooltip.min.js.map
