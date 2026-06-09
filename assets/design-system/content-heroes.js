/* ABLEFY — shared mockup snippets + 3 hero directions (HTML strings) */
(function(){
  const bars = (arr)=> arr.map((h,i)=>`<div class="bar${i===arr.length-2?' hot':''}" style="height:${h}%"></div>`).join('');

  /* ---- analytics dashboard mockup ---- */
  const dash = (scale=1)=>`
    <div class="dash mock" style="max-width:360px">
      <div class="dash-top">
        <div>
          <div class="mini" style="font-weight:700;letter-spacing:.04em;text-transform:uppercase">Revenue · 30 days</div>
          <div class="dash-kpi" style="margin-top:6px">€322,556</div>
        </div>
        <span class="delta">▲ 18.4%</span>
      </div>
      <div class="chart">${bars([34,52,40,63,49,71,58,82,68,94,78])}</div>
      <div class="axis"><span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span></div>
    </div>`;

  /* ---- notification feed mockup ---- */
  const feed = ()=>`
    <div class="ui mock" style="padding:16px;max-width:300px">
      <div class="mock-row" style="justify-content:space-between;margin-bottom:12px">
        <span class="mock-h" style="font-size:14px">New sales</span>
        <span class="mini">Live</span>
      </div>
      <div class="feed">
        <div class="feed-item"><span class="feed-ic">€</span><div><div class="feed-t">Mindset coaching — new sale</div><div class="feed-s">Revenue +€698.00 · 2 min ago</div></div></div>
        <div class="feed-item"><span class="feed-ic">€</span><div><div class="feed-t">Speaker event ticket</div><div class="feed-s">Revenue +€350.00 · 14 min ago</div></div></div>
        <div class="feed-item"><span class="feed-ic">€</span><div><div class="feed-t">Marketing course — new sale</div><div class="feed-s">Revenue +€1,200.00 · 1 hr ago</div></div></div>
      </div>
    </div>`;

  /* ---- checkout mockup ---- */
  const checkout = ()=>`
    <div class="checkout mock" style="max-width:300px">
      <div class="mock-row" style="justify-content:space-between;margin-bottom:14px">
        <span class="mock-h" style="font-size:14px">Choose payment</span>
        <span class="mini">Secure · SSL</span>
      </div>
      <div class="pm sel"><span class="pm-left"><span class="radio"></span>Klarna</span><span class="brand-tag" style="background:#FFB3C7;color:#0B1813">Klarna</span></div>
      <div class="pm"><span class="pm-left"><span class="radio"></span>PayPal</span><span class="brand-tag" style="background:#E9F0FB;color:#003087">PayPal</span></div>
      <div class="pm"><span class="pm-left"><span class="radio"></span>Visa · Mastercard</span><span class="brand-tag" style="background:#EEF0F4;color:#1A1F71">VISA</span></div>
      <button class="btn btn-spring" style="width:100%;justify-content:center;margin-top:10px">Pay €127.00</button>
    </div>`;

  /* ================= HERO A — Editorial split ================= */
  const heroA = `
  <div class="ab ab-page" style="min-height:880px;display:flex;flex-direction:column">
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

    <div style="flex:1;display:grid;grid-template-columns:1.02fr 1fr;gap:40px;align-items:center;padding:24px 64px 70px">
      <div>
        <span class="eyebrow">Payments · Courses · Checkout</span>
        <h1 class="display" style="font-size:84px;margin:22px 0 0">Sell more.<br>Build faster.<br>Keep your <em>time</em>.</h1>
        <p class="lede" style="margin-top:26px">The all-in-one platform to launch courses, run checkout and automate payments — so founders ship revenue, not busywork.</p>
        <div style="display:flex;gap:14px;margin-top:34px;align-items:center">
          <button class="btn btn-primary btn-lg">Start free — 14 days <span class="ar">→</span></button>
          <button class="btn btn-ghost btn-lg">Watch demo</button>
        </div>
        <div class="mock-row" style="gap:14px;margin-top:34px;color:var(--muted);font-size:14px;font-weight:600">
          <span class="dot"></span>No card required<span class="dot"></span>Cancel anytime<span class="dot"></span>Set up in minutes
        </div>
      </div>

      <div style="position:relative;height:560px">
        <div class="blob" style="width:300px;height:300px;background:var(--spring);opacity:.16;top:-10px;right:10px;filter:blur(4px)"></div>
        <div class="blob" style="width:130px;height:130px;background:var(--forest);opacity:.08;bottom:30px;left:0"></div>
        <div style="position:absolute;top:18px;right:0;width:360px">${dash()}</div>
        <div style="position:absolute;bottom:10px;left:-6px">${checkout()}</div>
        <div class="float-pill" style="top:-6px;left:40px"><span class="dot"></span>+1,284 sales today</div>
      </div>
    </div>
  </div>`;

  /* ================= HERO B — Centered statement ================= */
  const heroB = `
  <div class="ab ab-page" style="min-height:880px;display:flex;flex-direction:column">
    <div class="nav" style="padding:22px 64px">
      <div class="logo"><span class="mark-ico"></span><span class="wm">ablefy</span></div>
      <div class="nav-links">
        <a href="#">Product<span class="chev"></span></a>
        <a href="#">Solutions<span class="chev"></span></a>
        <a href="#">Enterprise</a>
        <a href="#">Pricing</a>
      </div>
      <div class="nav-right"><a href="#" style="color:var(--muted)">Login</a><button class="btn btn-spring">Start free trial</button></div>
    </div>

    <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;padding:40px 64px 0">
      <span class="chip" style="margin-bottom:26px"><span class="dot"></span>Trusted by 70,000+ digital businesses</span>
      <h1 class="display" style="font-size:96px;max-width:15ch">Turn expertise into <span class="mark">recurring</span> <em>revenue</em>.</h1>
      <p class="lede" style="max-width:52ch;text-align:center;margin-top:28px;font-size:21px">One platform for courses, checkout and payments. Automate the selling — keep the growth, the margin and the time.</p>
      <div style="display:flex;gap:14px;margin-top:34px">
        <button class="btn btn-primary btn-lg">Start free trial <span class="ar">→</span></button>
        <button class="btn btn-ghost btn-lg">Book a walkthrough</button>
      </div>

      <div style="position:relative;width:100%;max-width:1080px;margin-top:54px">
        <div class="float-pill" style="top:30px;left:-4px;z-index:3"><span class="dot"></span>€322,556 received</div>
        <div class="float-pill" style="top:90px;right:-6px;z-index:3">▲ 18.4% this month</div>
        <div class="ui" style="padding:22px;display:grid;grid-template-columns:1.3fr 1fr;gap:18px;text-align:left">
          ${dash()}
          ${feed()}
        </div>
      </div>
    </div>
  </div>`;

  /* ================= HERO C — Forest premium ================= */
  const heroC = `
  <div class="ab ab-page dark" style="min-height:880px;display:flex;flex-direction:column;background:
      radial-gradient(120% 90% at 85% 0%, var(--forest-2) 0%, var(--forest) 55%)">
    <div class="nav">
      <div class="logo on-dark"><span class="mark-ico"></span><span class="wm">ablefy</span></div>
      <div class="nav-links" style="color:var(--on-forest)">
        <a href="#" style="color:var(--on-forest-mut)">Checkout &amp; Payments<span class="chev"></span></a>
        <a href="#" style="color:var(--on-forest-mut)">Business tools<span class="chev"></span></a>
        <a href="#" style="color:var(--on-forest-mut)">Enterprise</a>
        <a href="#" style="color:var(--on-forest-mut)">Pricing</a>
      </div>
      <div class="nav-right" style="color:var(--on-forest)"><a href="#" style="color:var(--on-forest-mut)">Login</a><button class="btn btn-spring">Start free trial</button></div>
    </div>

    <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:20px 64px 60px">
      <div>
        <span class="eyebrow" style="color:var(--spring)">The growth platform for founders</span>
        <h1 class="display" style="font-size:88px;margin:22px 0 0;color:var(--on-forest)">Your business,<br>fully <em>automated</em>.</h1>
        <p class="lede" style="margin-top:26px;color:var(--on-forest-mut)">From first checkout to scaled operation — sell digital products, take every payment method and let ablefy run the rest.</p>
        <div style="display:flex;gap:14px;margin-top:34px">
          <button class="btn btn-spring btn-lg">Start free — 14 days <span class="ar">→</span></button>
          <button class="btn btn-lg" style="background:rgba(255,255,255,.08);color:var(--on-forest);border:1px solid rgba(255,255,255,.18)">See pricing</button>
        </div>
        <div style="display:flex;gap:40px;margin-top:48px">
          <div><div class="serif" style="font-size:34px;color:var(--spring)">&gt;6M</div><div class="mini" style="color:var(--on-forest-mut);font-weight:600">Transactions</div></div>
          <div><div class="serif" style="font-size:34px;color:var(--spring)">&gt;2.5M</div><div class="mini" style="color:var(--on-forest-mut);font-weight:600">Buyers</div></div>
          <div><div class="serif" style="font-size:34px;color:var(--spring)">99.9%</div><div class="mini" style="color:var(--on-forest-mut);font-weight:600">Uptime</div></div>
        </div>
      </div>
      <div style="position:relative;height:540px">
        <div class="blob" style="width:340px;height:340px;background:var(--spring);opacity:.22;top:-20px;right:-10px;filter:blur(8px)"></div>
        <div style="position:absolute;top:30px;right:6px;width:360px">${dash()}</div>
        <div style="position:absolute;bottom:0;left:-4px">${checkout()}</div>
        <div class="float-pill" style="top:0;left:30px;z-index:4"><span class="dot"></span>New sale · €698</div>
      </div>
    </div>
  </div>`;

  window.ABLEFY_HEROES = { heroA, heroB, heroC };
  window.ABLEFY_MOCKS = { dash, feed, checkout, bars };
})();
