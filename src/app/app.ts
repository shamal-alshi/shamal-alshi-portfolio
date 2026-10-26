import { Component, Directive, ElementRef, HostListener, OnInit, signal, inject, afterNextRender } from '@angular/core';
import { STATS, ROLES, CASES, SKILLS, PROJECTS, MIGS, CRAFT, PRINCIPLES } from './data';

@Directive({ selector: '[reveal]', standalone: true })
export class Reveal {
  constructor() {
    const el = inject(ElementRef).nativeElement as HTMLElement;
    el.classList.add('rv');
    afterNextRender(() => {
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); this.count(el); } }, { threshold: .15 });
      io.observe(el);
    });
  }
  private count(el: HTMLElement) {
    el.querySelectorAll<HTMLElement>('[data-n]').forEach(n => {
      const to = +n.dataset['n']!; const t0 = performance.now();
      const step = (t: number) => { const p = Math.min((t - t0) / 1400, 1); n.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }
}

@Component({
  selector: 'app-root', standalone: true, imports: [Reveal],
  template: `
<div class="aurora"><i></i><i></i><i></i></div><div class="spot"></div>
<header class="nav"><a href="#top" class="logo">SA</a>
  <nav>@for (l of links; track l) {<a [href]="'#'+l.toLowerCase()">{{l}}</a>}</nav>
  <div class="actions">
    <button class="icon" (click)="toggle()" [attr.aria-label]="'Switch to ' + (theme()==='dark'?'light':'dark') + ' theme'">{{ theme()==='dark' ? '☀' : '☾' }}</button>
    <!-- <a class="btn sm" href="Shamal_Alshi_Resume.pdf" download>Resume ↓</a> --></div></header>

<main id="top">
<section class="hero">
  <div class="hero-text">
    <span class="pill"><b class="dot"></b> Open to Senior Angular Developer roles</span>
    <h1>Shamal <span class="grad">Alshi</span></h1>
    <p class="type">Senior Frontend Engineer · <span>Angular Specialist</span></p>
    <p class="lead">With 5+ years of Angular behind me, I help enterprises move from legacy codebases to modern Angular, making their apps faster, more secure and easier for teams to maintain.</p>
    <div class="cta"><a class="btn" href="Shamal_Alshi_Resume.pdf" download>Download Resume</a><a class="btn ghost" href="#contact">Let's talk →</a></div>
    <div class="social"><a href="https://github.com/shamal-alshi" target="_blank" rel="noopener">GitHub</a><a href="https://www.linkedin.com/in/shamal-alshi" target="_blank" rel="noopener">LinkedIn</a><a href="mailto:shamal.alshi@gmail.com">Email</a></div>
  </div>
  <div class="hero-art"><div class="ring"></div>
    <div class="avatar">
      <img [src]="photo()" (error)="photo.set('')" alt="Shamal Alshi" width="320" height="320">
      @if (!photo()) {<span>SA</span>}</div>
    <div class="chip c1">Angular</div><div class="chip c2">Ex Wiproite</div><div class="chip c3">RxJS · Signals</div>
    <div class="chip c4">JS · TS</div></div>
</section>

<section class="stats" reveal>@for (s of stats; track s.l) {<div class="glass"><strong><span [attr.data-n]="s.v">0</span>{{s.s}}</strong><small>{{s.l}}</small></div>}</section>

<section id="experience"><h2 reveal><small>01</small> Experience</h2>
  <div class="exp glass" reveal>
    <div class="tabs" role="tablist">@for (r of roles; track r.sys; let i = $index) {
      <button role="tab" [class.on]="tab()===i" (click)="tab.set(i)"><b>{{r.co}}</b><span>{{r.sys}}</span></button>}</div>
    <div class="panel">@let r = roles[tab()];
      <h3>{{r.role}} <em>&#64; {{r.co}}</em></h3><p class="meta">{{r.sys}} · Wipro · Bengaluru · {{r.when}}</p>
      <p class="ctx"><b>The situation</b>{{r.ctx}}</p>
      <h5>Decisions I made, and why</h5>
      <ul class="dec">@for (d of r.dec; track d.t) {<li><strong>{{d.t}}</strong><span>{{d.w}}</span></li>}</ul>
      <div class="out">@for (o of r.out; track o) {<span>✓ {{o}}</span>}</div>
      <div class="tags">@for (t of r.tags; track t) {<span>{{t}}</span>}</div></div></div></section>

<section id="impact"><h2 reveal><small>02</small> Impact <em>Case studies</em></h2>
  <div class="grid3">@for (c of cases; track c.t) {<article class="glass card" reveal>
    <span class="k">{{c.k}}</span><h3>{{c.t}}</h3>
    <p><b>Problem</b> {{c.p}}</p><p><b>Approach</b> {{c.a}}</p><p class="res">{{c.r}}</p></article>}</div>
  <div class="glass mig" reveal><h4>Zero-downtime migration paths</h4>@for (m of migs; track m.l) {<div class="row"><span>{{m.l}}</span>
    <div class="track">@for (v of vers; track v) {<i [class.on]="v>=m.f && v<=m.t" [class.end]="v===m.f || v===m.t">{{v}}</i>}</div></div>}</div></section>

<section id="projects"><h2 reveal><small>03</small> Open-source <em>projects</em></h2><p class="sub" reveal>Built on my own time to go deeper than client work allows. Each one is deployed and public.</p>
  @for (p of projects; track p.n) {<article class="glass proj" reveal>
    <div class="viz {{p.viz}}"><div class="vz">@switch (p.viz) {@case ('rx') {<b></b><b></b><b></b>}@case ('rs') {
      <b><img src="https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg" alt="The Great Gatsby book cover"></b>
      <b><img src="https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg" alt="To Kill a Mockingbird book cover"></b>
      <b><img src="https://covers.openlibrary.org/b/isbn/9780140328721-M.jpg" alt="Matilda book cover"></b>
    }@default {<code>{{ '{' }} "name": "…" {{ '}' }}</code><u>name</u><u>role ▾</u>}}</div></div>
    <div class="pbody"><span class="k">{{p.type}}</span><h3>{{p.n}}</h3><p class="pd">{{p.d}}</p>
      <ul>@for (x of p.f; track x) {<li>{{x}}</li>}</ul><p class="eng"><b>Engineering:</b> {{p.e}}</p>
      <div class="tags">@for (t of p.tags; track t) {<span>{{t}}</span>}</div>
      <div class="cta">@if (p.live) {<a class="btn sm" [href]="p.live" target="_blank" rel="noopener">Live demo ↗</a>}<a class="btn sm ghost" [href]="p.repo" target="_blank" rel="noopener">Source on GitHub ↗</a></div></div></article>}</section>

<section id="skills"><h2 reveal><small>04</small> Skills</h2>
  <div class="skills">@for (g of groups; track g) {<div class="glass" reveal><h4>{{g}}</h4><div class="tags">@for (s of skills[g]; track s) {<span>{{s}}</span>}</div></div>}</div></section>

<section id="craft"><h2 reveal><small>05</small> UI <em>craft</em></h2>
  <div class="grid4">@for (c of craft; track c.t) {<div class="glass card" reveal><span class="ic">{{c.i}}</span><h3>{{c.t}}</h3><p>{{c.d}}</p></div>}</div>
  <div class="glass play" reveal><div><h4>Try it: live theme tokens</h4><p>This whole site runs on CSS custom properties. Pick an accent and watch every gradient, glow and border re-theme instantly.</p></div>
    <div class="sw">@for (c of accents; track c) {<button [style.background]="c" (click)="accent(c)" [attr.aria-label]="'Accent ' + c"></button>}</div></div></section>

<section id="about"><h2 reveal><small>06</small> About</h2>
  <div class="glass about" reveal><p>Systems thinker who designs scalable API layers, RBAC architectures and component standards adopted across product teams, and mentors engineers through structured technical guidance. Eliminated 60+ critical security vulnerabilities in regulated, compliance-heavy environments.</p><div class="tags pr">@for (p of principles; track p) {<span>{{p}}</span>}</div>
  <p class="edu"><b>B.E., Information Technology</b> · Priyadarshini Institute of Engineering &amp; Technology, Nagpur · 2016–2020 · CGPA 8.3/10</p></div></section>

<section id="contact" class="contact glass" reveal><h2>Let's build something <span class="grad">reliable</span>.</h2>
  <p>Hiring for a Senior Angular Developer role? I'd love to hear about it.</p>
  <div class="cta"><a class="btn" href="mailto:shamal.alshi@gmail.com">shamal.alshi&#64;gmail.com</a><a class="btn ghost" href="tel:+918806380424">+91 88063 80424</a><a class="btn ghost" href="Shamal_Alshi_Resume.pdf" download>Resume ↓</a></div></section>
</main>
<footer>© {{year}} Shamal Alshi · Bengaluru, India · Built with Angular</footer>`
})
export class App implements OnInit {
  migs = MIGS; craft = CRAFT; principles = PRINCIPLES; vers = Array.from({ length: 13 }, (_, i) => i + 8); accents = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#ef4444'];
  stats = STATS; roles = ROLES; cases = CASES; skills = SKILLS; projects = PROJECTS;
  groups = Object.keys(SKILLS); links = ['Experience', 'Impact', 'Projects', 'Skills', 'Craft', 'Contact'];
  tab = signal(0); theme = signal('dark'); year = new Date().getFullYear();
  // Replace by placing public/profile.jpg and using 'profile.jpg'
  photo = signal('https://avatars.githubusercontent.com/u/285251126?v=4');
  ngOnInit() { this.theme.set(document.documentElement.dataset['theme'] ?? 'dark'); }
  toggle() {
    const t = this.theme() === 'dark' ? 'light' : 'dark'; this.theme.set(t);
    document.documentElement.dataset['theme'] = t; try { localStorage.setItem('theme', t); } catch { }
  }
  accent(c: string) { document.documentElement.style.setProperty('--a', c); }
  @HostListener('window:mousemove', ['$event']) move(e: MouseEvent) {
    const s = document.documentElement.style; s.setProperty('--mx', e.clientX + 'px'); s.setProperty('--my', e.clientY + 'px');
  }
}
