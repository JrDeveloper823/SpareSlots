"use client";

import { useState } from "react";

const slots = [
  { time: "Today · 11:30", name: "The Modern Barber", type: "Haircut", area: "Coventry City Centre", price: "£18", tag: "Just added" },
  { time: "Today · 13:15", name: "Studio & Co.", type: "Blow dry", area: "Earlsdon, Coventry", price: "£25", tag: "2 hours left" },
  { time: "Tomorrow · 09:45", name: "The Brow Room", type: "Brow shape", area: "Leamington Spa", price: "£15", tag: "New opening" },
];

export default function Home() {
  const [mode, setMode] = useState<"customer" | "business">("customer");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function submitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) setSent(true);
  }

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#" aria-label="SpareSlot home"><span className="brand-mark">S</span> spare<span>slot</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#how">How it works</a>
          <a href="#discover">Find a slot</a>
          <a href="#business">For businesses</a>
          <a className="nav-cta" href="#join">Get early access <span>↗</span></a>
        </div>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> A smarter way to book local</div>
          <h1>Good plans.<br /><em>Better timing.</em></h1>
          <p className="hero-lede">The last-minute appointment marketplace that turns unexpected gaps into opportunities.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#discover">Find an appointment <span>↗</span></a>
            <a className="text-link" href="#business">I run a business <span>→</span></a>
          </div>
          <div className="trust-line"><div className="avatar-stack"><i>J</i><i>A</i><i>M</i></div><span>More time for what matters.<b> Less time waiting.</b></span></div>
        </div>
        <div className="hero-art" aria-label="Illustration of an available appointment card">
          <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
          <div className="floating-note note-top"><span className="note-dot"></span> A spot just opened up</div>
          <div className="booking-card">
            <div className="booking-top"><span className="mini-brand">S.</span><span className="available">AVAILABLE NOW</span></div>
            <div className="booking-icon">✳</div>
            <div className="booking-label">YOUR NEXT SLOT</div>
            <div className="booking-time">11:30<span>am</span></div>
            <div className="booking-rule"></div>
            <div className="booking-bottom"><div><b>Fresh opening</b><small>Today · Nearby</small></div><span className="round-arrow">↗</span></div>
          </div>
          <div className="floating-note note-bottom"><span className="check">✓</span> Your day, back on track.</div>
          <div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✦</div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-inner"><span>LESS WAITING</span><b>✳</b><span>MORE DOING</span><b>✳</b><span>LOCAL FINDS</span><b>✳</b><span>LAST-MINUTE WINS</span><b>✳</b><span>LESS WAITING</span><b>✳</b><span>MORE DOING</span></div></section>

      <section className="intro wrap" id="how">
        <div className="section-kicker">THE SPARE SLOT IDEA <span>01 / 03</span></div>
        <div className="intro-grid"><h2>Plans change.<br /><em>Your time shouldn’t</em><br />go to waste.</h2><div className="intro-text"><p>When someone cancels, a great appointment can suddenly go unused. SpareSlot helps local businesses share that opening with people ready to take it.</p><p>Less empty time for businesses. More convenient bookings for everyone.</p><a className="text-link" href="#business">See how it works <span>→</span></a></div></div>
      </section>

      <section className="discover-section" id="discover">
        <div className="wrap">
          <div className="section-kicker">THE GOOD STUFF <span>02 / 03</span></div>
          <div className="discover-head"><div><h2>A little free time<br /><em>goes a long way.</em></h2><p>Example openings to show how SpareSlot could work in your area.</p></div><div className="location-pill">⌖ &nbsp; Coventry & nearby <span>⌄</span></div></div>
          <div className="slot-grid">{slots.map((slot, i) => <article className="slot-card" key={slot.name}><div className={`slot-visual visual-${i}`}><span className="slot-tag">{slot.tag}</span><span className="visual-symbol">{i === 0 ? "✳" : i === 1 ? "◒" : "✦"}</span><span className="visual-index">0{i + 1}</span></div><div className="slot-info"><div className="slot-time">{slot.time}</div><h3>{slot.name}</h3><p>{slot.type} <span>·</span> {slot.area}</p><div className="slot-footer"><b>{slot.price}</b><button onClick={() => alert("This is a demo listing. Live booking will be available when SpareSlot launches.")}>View slot <span>↗</span></button></div></div></article>)}</div>
          <p className="demo-note">Illustrative sample listings — not live or bookable appointments.</p>
        </div>
      </section>

      <section className="business-section wrap" id="business">
        <div className="business-panel">
          <div className="business-copy"><div className="section-kicker light">MADE FOR LOCAL BUSINESS <span>03 / 03</span></div><h2>Make every<br />opening <em>count.</em></h2><p>A cancellation doesn't have to mean lost time. Give nearby customers a chance to snap up your newly available appointments.</p><a href="#join" className="button button-lime">Get business updates <span>↗</span></a></div>
          <div className="business-side"><div className="side-card"><div className="side-card-top"><span>YOUR DAY, AT A GLANCE</span><span className="live-dot">● DEMO</span></div><div className="side-stat"><strong>2</strong><span>openings to fill</span></div><div className="side-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="side-card-bottom"><span>Turn spare time into booked time.</span><b>↗</b></div></div><div className="side-sticker">YOUR<br />NEXT<br /><em>BOOKING</em><span>✳</span></div></div>
        </div>
      </section>

      <section className="join-section wrap" id="join">
        <div className="join-heading"><div className="section-kicker">BE FIRST IN LINE</div><h2>Ready when<br /><em>you are.</em></h2><p>SpareSlot is in the making. Join the early list and hear when we launch.</p></div>
        <div className="join-form-wrap"><div className="mode-tabs"><button className={mode === "customer" ? "active" : ""} onClick={() => setMode("customer")}>I'm looking to book</button><button className={mode === "business" ? "active" : ""} onClick={() => setMode("business")}>I run a business</button></div><form className="join-form" onSubmit={submitEmail}><label htmlFor="email">Your email address</label><div className="input-row"><input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => {setEmail(e.target.value); setSent(false);}} required /><button type="submit" aria-label="Join early access">↗</button></div><small>{sent ? "Thanks — this demo form isn't connected yet, but your interest is noted on this page." : mode === "customer" ? "Get notified when new appointments go live." : "Get updates on bringing SpareSlot to your business."}</small></form><div className="privacy-note">No spam. Just the occasional good thing.</div></div>
      </section>

      <footer className="footer"><div className="wrap footer-inner"><a className="brand footer-brand" href="#"><span className="brand-mark">S</span> spare<span>slot</span></a><span>Never waste an empty appointment.</span><span>© 2026 SpareSlot</span></div></footer>
    </main>
  );
}
