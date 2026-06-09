/* ABLEFY — full refreshed homepage (HTML string) */
(function(){
  const M = window.ABLEFY_MOCKS;

  const home = `
  <div class="ab ab-page">

    <!-- ============ HERO ============ -->
    <div style="display:flex;flex-direction:column">
      <div class="nav">
        <div class="logo"><span class="mark-ico"></span><span class="wm">ablefy</span></div>
        <div class="nav-links">
          <a href="#">Checkout &amp; Payments<span class="chev"></span></a>
          <a href="#">Business tools<span class="chev"></span></a>
          <a href="#">Enterprise</a>
          <a href="#">Pricing</a>
          <a href="#">Learn<span class="chev"></span></a>
        </div>
        <div class="nav-right"><a href="#" style="color:var(--muted)">Login</a><button class="btn btn-spring">Start free trial</button></div>
      </div>

      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:46px 64px 86px">
        <span class="chip" style="margin-bottom:26px"><span class="dot"></span>Trusted by 70,000+ digital businesses</span>
        <h1 class="display" style="font-size:94px;max-width:15ch">Turn expertise into <span class="mark">recurring</span> <em>revenue</em>.</h1>
        <p class="lede" style="max-width:54ch;text-align:center;margin-top:28px;font-size:21px">One platform for courses, checkout and payments. Automate the selling — keep the growth, the margin and the time.</p>
        <div style="display:flex;gap:14px;margin-top:34px">
          <button class="btn btn-primary btn-lg">Start free — 14 days <span class="ar">→</span></button>
          <button class="btn btn-ghost btn-lg">Book a walkthrough</button>
        </div>
        <div class="mock-row" style="gap:14px;margin-top:26px;color:var(--muted);font-size:14px;font-weight:600;white-space:nowrap">
          <span class="dot"></span>No card required<span class="dot"></span>Cancel anytime<span class="dot"></span>Set up in minutes
        </div>

        <div style="position:relative;width:100%;max-width:1080px;margin-top:58px">
          <div class="blob" style="width:300px;height:300px;background:var(--spring);opacity:.14;top:-30px;left:50%;transform:translateX(-50%);filter:blur(8px)"></div>
          <div class="float-pill" style="top:28px;left:-6px;z-index:3"><span class="dot"></span>€322,556 received</div>
          <div class="float-pill" style="top:94px;right:-8px;z-index:3">▲ 18.4% this month</div>
          <div class="ui" style="padding:22px;display:grid;grid-template-columns:1.3fr 1fr;gap:18px;text-align:left;position:relative">
            ${M.dash()}
            ${M.feed()}
          </div>
        </div>
      </div>
    </div>

    <!-- ============ LOGO STRIP ============ -->
    <div style="padding:0 64px 56px">
      <p style="text-align:center;color:var(--muted-2);font-size:13px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;margin-bottom:26px">Powering 70,000+ businesses across Europe</p>
      <div class="logos wrap">
        <span class="logo-word">Lumen&amp;Co</span><span class="logo-word">Northwind</span><span class="logo-word">Studio Verde</span><span class="logo-word">Kapitel</span><span class="logo-word">Foundry</span><span class="logo-word">Margo</span>
      </div>
    </div>

    <!-- ============ STAT BAND ============ -->
    <div style="background:var(--sand);padding:64px">
      <div class="wrap stats">
        <div class="stat"><div class="num">&gt;70<em>K</em></div><div class="lab">Active users</div></div>
        <div class="stat"><div class="num">&gt;2.5<em>M</em></div><div class="lab">Buyers reached</div></div>
        <div class="stat"><div class="num">&gt;6<em>M</em></div><div class="lab">Transactions</div></div>
        <div class="stat"><div class="num">€1.4<em>B</em></div><div class="lab">Processed</div></div>
      </div>
    </div>

    <!-- ============ SECTION: Technology / split ============ -->
    <div class="section">
      <div class="wrap">
        <div class="sec-head">
          <span class="eyebrow center" style="justify-content:center">Your platform for payments &amp; sales</span>
          <h2 class="display" style="margin-top:14px">Technology the way <em>you</em> need it</h2>
          <p>Three building blocks that turn a one-person idea into an automated, scalable business.</p>
        </div>

        <div class="split">
          <div style="position:relative">
            <image-slot id="ab-founder" style="width:100%;height:480px;display:block" shape="rounded" radius="26" placeholder="Drop a founder / lifestyle photo"></image-slot>
            <div class="float-pill" style="top:24px;left:-14px;z-index:3"><span class="dot"></span>€322,556.45 received</div>
            <div class="float-pill" style="bottom:30px;right:-16px;z-index:3">Digital product · live</div>
          </div>
          <div>
            <div style="display:flex;flex-direction:column;gap:14px">
              <div class="card" style="padding:24px;display:flex;gap:18px;align-items:flex-start">
                <div class="feat-ico spring" style="margin:0">◆</div>
                <div><h3 class="serif" style="font-size:23px;margin-bottom:6px">Digitize</h3><p style="color:var(--muted);font-size:15.5px;line-height:1.55">Courses, downloads, e-tickets and membership areas — packaged and ready to sell in minutes.</p></div>
              </div>
              <div class="card" style="padding:24px;display:flex;gap:18px;align-items:flex-start">
                <div class="feat-ico" style="margin:0">€</div>
                <div><h3 class="serif" style="font-size:23px;margin-bottom:6px">Sell</h3><p style="color:var(--muted);font-size:15.5px;line-height:1.55">A conversion-built checkout with every major payment method, order bumps and one-click upsells.</p></div>
              </div>
              <div class="card" style="padding:24px;display:flex;gap:18px;align-items:flex-start">
                <div class="feat-ico spring" style="margin:0">↗</div>
                <div><h3 class="serif" style="font-size:23px;margin-bottom:6px">Grow</h3><p style="color:var(--muted);font-size:15.5px;line-height:1.55">Automations, analytics and subscriptions that compound revenue while you sleep.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ SECTION: Feature grid ============ -->
    <div class="section" style="padding-top:0">
      <div class="wrap">
        <div class="feat-grid">
          <div class="feat"><div class="feat-ico">⚡</div><h3>Automated payouts</h3><p>Recurring billing, subscriptions and instant payouts handled end-to-end — no spreadsheets, no chasing.</p></div>
          <div class="feat"><div class="feat-ico spring">◎</div><h3>Conversion checkout</h3><p>Localized, mobile-first and A/B-ready. Built to lift completion on every device and currency.</p></div>
          <div class="feat"><div class="feat-ico">⛨</div><h3>Compliance built in</h3><p>Tax, invoicing and VAT handled for you as the seller of record. Stay compliant across borders.</p></div>
        </div>
      </div>
    </div>

    <!-- ============ SECTION: Payments (dark) ============ -->
    <div class="section dark">
      <div class="wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center">
        <div>
          <span class="eyebrow" style="color:var(--spring)">Checkout &amp; payments</span>
          <h2 class="display" style="font-size:58px;line-height:1.06;margin-top:16px;color:var(--on-forest)">Every payment method your buyers <em>expect</em>.</h2>
          <p class="lede" style="color:var(--on-forest-mut);margin-top:20px">Klarna, PayPal, cards, SEPA, Apple &amp; Google Pay — accept them all out of the box, in the buyer's language and currency.</p>
          <div style="display:flex;flex-direction:column;gap:14px;margin-top:30px">
            <div style="display:flex;gap:12px;align-items:center"><span class="tick" style="background:rgba(25,227,124,.18)"><span style="color:var(--spring)">✓</span></span><span style="color:var(--on-forest)">Higher completion with localized, one-tap pay</span></div>
            <div style="display:flex;gap:12px;align-items:center"><span class="tick" style="background:rgba(25,227,124,.18)"><span style="color:var(--spring)">✓</span></span><span style="color:var(--on-forest)">Order bumps &amp; upsells that lift average order value</span></div>
            <div style="display:flex;gap:12px;align-items:center"><span class="tick" style="background:rgba(25,227,124,.18)"><span style="color:var(--spring)">✓</span></span><span style="color:var(--on-forest)">Recover lost sales with automatic dunning</span></div>
          </div>
          <button class="btn btn-spring btn-lg" style="margin-top:34px">Explore checkout <span class="ar">→</span></button>
        </div>
        <div style="display:flex;justify-content:center">
          <div style="width:340px">${M.checkout()}</div>
        </div>
      </div>
    </div>

    <!-- ============ SECTION: Testimonial ============ -->
    <div class="section">
      <div class="wrap" style="max-width:980px;text-align:center">
        <div style="font-family:var(--display);font-size:40px;color:var(--spring-deep);line-height:0">“</div>
        <p class="quote">We replaced four tools with ablefy and <em>doubled</em> our launch revenue in a quarter — without hiring a single ops person.</p>
        <div style="display:flex;gap:14px;align-items:center;justify-content:center;margin-top:34px">
          <image-slot id="ab-avatar" style="width:54px;height:54px" shape="circle" placeholder="photo"></image-slot>
          <div style="text-align:left"><div style="font-weight:700">Lena Hoffmann</div><div class="mini" style="font-weight:600">Founder, Studio Verde</div></div>
        </div>
      </div>
    </div>

    <!-- ============ SECTION: Pricing teaser ============ -->
    <div class="section" style="padding-top:0">
      <div class="wrap">
        <div class="sec-head"><h2 class="display">Pricing that scales with <em>you</em></h2><p>Start free. Upgrade when the revenue's already rolling in.</p></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:start">
          <div class="price-card"><div class="mock-h" style="font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:var(--muted)">Starter</div><div class="price-amt" style="margin:12px 0 4px">€0</div><div class="mini" style="font-weight:600">+ small per-sale fee</div><button class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:22px">Start free</button></div>
          <div class="price-card feature"><div class="chip" style="background:var(--spring);border:none;color:var(--forest)">Most popular</div><div class="price-amt" style="margin:14px 0 4px;color:#fff">€39<span style="font-size:18px;font-family:var(--sans);color:var(--on-forest-mut)">/mo</span></div><div class="mini" style="color:var(--on-forest-mut);font-weight:600">Lower fees · all tools</div><button class="btn btn-spring" style="width:100%;justify-content:center;margin-top:22px">Start free trial</button></div>
          <div class="price-card"><div class="mock-h" style="font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:var(--muted)">Enterprise</div><div class="price-amt" style="margin:12px 0 4px">Custom</div><div class="mini" style="font-weight:600">Dedicated support &amp; SLA</div><button class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:22px">Talk to sales</button></div>
        </div>
      </div>
    </div>

    <!-- ============ BIG CTA ============ -->
    <div style="padding:0 64px 100px">
      <div class="wrap" style="background:
          radial-gradient(120% 140% at 0% 0%, var(--forest-2), var(--forest));
          border-radius:var(--r-xl);padding:84px 72px;text-align:center;position:relative;overflow:hidden">
        <div class="blob" style="width:380px;height:380px;background:var(--spring);opacity:.18;top:-120px;right:-80px;filter:blur(10px)"></div>
        <h2 class="display" style="font-size:64px;color:var(--on-forest);position:relative">Start selling <em>today</em>.</h2>
        <p class="lede" style="color:var(--on-forest-mut);margin:18px auto 0;max-width:46ch;text-align:center;position:relative">Join 70,000+ founders running their business on ablefy. Free for 14 days — no card required.</p>
        <div style="display:flex;gap:14px;justify-content:center;margin-top:34px;position:relative">
          <button class="btn btn-spring btn-lg">Start free trial <span class="ar">→</span></button>
          <button class="btn btn-lg" style="background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)">Book a demo</button>
        </div>
      </div>
    </div>

    <!-- ============ FOOTER ============ -->
    <div class="footer">
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-col">
            <div class="logo on-dark" style="margin-bottom:16px"><span class="mark-ico"></span><span class="wm">ablefy</span></div>
            <p style="color:var(--on-forest-mut);font-size:15px;max-width:30ch">The growth platform for founders. Sell digital products, take every payment, automate the rest.</p>
          </div>
          <div class="foot-col"><h5>Product</h5><a href="#">Checkout</a><a href="#">Payments</a><a href="#">Courses</a><a href="#">Automations</a></div>
          <div class="foot-col"><h5>Company</h5><a href="#">About</a><a href="#">Careers</a><a href="#">Enterprise</a><a href="#">Contact</a></div>
          <div class="foot-col"><h5>Resources</h5><a href="#">Blog</a><a href="#">Help center</a><a href="#">API docs</a><a href="#">Status</a></div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,.12);margin-top:48px;padding-top:24px;display:flex;justify-content:space-between;color:var(--on-forest-mut);font-size:13.5px">
          <span>© 2025 ablefy. All rights reserved.</span><span>Privacy · Terms · Imprint</span>
        </div>
      </div>
    </div>

  </div>`;

  window.ABLEFY_HOME = home;
})();
