google.maps.__gjsload__('overlay', function(_) {
    var rs = function(a) {
            this.g = a
        },
        Gka = function() {},
        ss = function(a) {
            a.Zm = a.Zm || new Gka;
            return a.Zm
        },
        Hka = function(a) {
            this.Fa = new _.Wh(function() {
                var b = a.Zm;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.dm && a.onAdd) a.onAdd();
                        b.dm = !0;
                        a.draw()
                    }
                } else {
                    if (b.dm)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.dm = !1
                }
            }, 0)
        },
        Ika = function(a, b) {
            function c() {
                return _.Xh(e.Fa)
            }
            var d = ss(a),
                e = d.jl;
            e || (e = d.jl = new Hka(a));
            _.$a(d.xa || [], _.L.removeListener);
            var f = d.Pa = d.Pa || new _.Tq,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.tq = d.tq || new rs(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.xa = [_.L.addListener(a, "panes_changed", c), _.L.addListener(g, "zoom_changed", c), _.L.addListener(g, "offset_changed", c), _.L.addListener(b, "projection_changed", c), _.L.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.Ef && (_.tg(b, "Ox"), _.ml("Ox", "-p", a))
        },
        Mka = function(a) {
            if (a) {
                var b = a.getMap();
                if (Jka(a) !== b && b && b instanceof _.Ef) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Kka(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ac;
                        var e = new ts(b, d);
                        d.Ya(e);
                        c.overlayLayer = e;
                        Lka(a);
                        Mka(a)
                    })
                }
            }
        },
        Lka = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, _.nl("Ox", "-p", b.g), b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.i.xf(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Jka = function(a) {
            return (a =
                a.__gmop) ? a.map : null
        },
        Kka = function(a, b, c) {
            this.map = a;
            this.g = b;
            this.i = c;
            this.h = !1;
            _.tg(this.map, "Ox");
            _.ml("Ox", "-p", this.g);
            c.Le(this)
        },
        Nka = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        ts = function(a, b) {
            this.j = a;
            this.i = b;
            this.g = null;
            this.h = []
        };
    _.D(rs, _.M);
    rs.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Fe(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var us = {};
    _.D(Hka, _.M);
    us.Le = function(a) {
        if (a) {
            var b = a.getMap();
            (ss(a).$p || null) !== b && (b && Ika(a, b), ss(a).$p = b)
        }
    };
    us.xf = function(a) {
        var b = ss(a),
            c = b.Pa;
        c && c.unbindAll();
        (c = b.tq) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.xa && _.$a(b.xa, _.L.removeListener);
        b.xa = null;
        b.jl && (b.jl.Fa.td(), b.jl = null);
        _.nl("Ox", "-p", a);
        delete ss(a).$p
    };
    var vs = {};
    Kka.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    ts.prototype.dispose = function() {};
    ts.prototype.Ac = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.Xm(this.j, this.i, function() {});
        k.Ac(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Nka(b, k), b.draw()
    };
    ts.prototype.Le = function(a) {
        this.h.push(a);
        this.g && Nka(a, this.g);
        this.i.refresh()
    };
    ts.prototype.xf = function(a) {
        _.kb(this.h, a)
    };
    vs.Le = Mka;
    vs.xf = Lka;
    _.qf("overlay", {
        po: function(a) {
            if (a) {
                (0, us.xf)(a);
                (0, vs.xf)(a);
                var b = a.getMap();
                b && (b instanceof _.Ef ? (0, vs.Le)(a) : (0, us.Le)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Bn(a, {
                onClick: function(b) {
                    return _.fn(b.event)
                },
                Vc: function(b) {
                    return _.cn(b)
                },
                Vg: function(b) {
                    return _.dn(b)
                },
                Jd: function(b) {
                    return _.dn(b)
                },
                fd: function(b) {
                    return _.en(b)
                }
            }).Qh(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.uf);
            a.addEventListener("contextmenu", _.uf);
            a.addEventListener("dblclick", _.uf);
            a.addEventListener("mousedown",
                _.uf);
            a.addEventListener("mousemove", _.uf);
            a.addEventListener("MSPointerDown", _.uf);
            a.addEventListener("pointerdown", _.uf);
            a.addEventListener("touchstart", _.uf);
            a.addEventListener("wheel", _.uf)
        }
    });
});