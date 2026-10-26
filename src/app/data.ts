export const STATS = [
  { v: 5, s: '+', l: 'Years in enterprise Angular' }, { v: 2, s: '', l: 'Zero-downtime migrations' },
  { v: 90, s: '%', l: 'Load-time reduction (20s → 2s)' }, { v: 150, s: '+', l: 'Daily users across 8+ countries' }];
export const CASES = [
  { k: '01 · Migration', t: 'Angular 8 → 20 on a live bank system', p: 'Fraud ops cannot go offline; a failed upgrade is a business incident.', a: 'Incremental upgrade path, 15+ breaking-change fixes, standalone refactor, feature-by-feature verification.', r: '24/7 uptime · 99.9%+ SLA · zero regression defects' },
  { k: '02 · Performance', t: 'Dashboard 20s → 2s', p: 'A core dashboard for 150+ users across 8+ countries loaded in ~20 seconds.', a: 'Route-level lazy loading, OnPush change detection, bundle analysis.', r: '90% faster initial load' },
  { k: '03 · Architecture', t: 'Enterprise RBAC and API layer', p: 'Multi-role, multi-tenant access and 100+ API integrations with inconsistent handling.', a: 'Route guards plus directive-level toggles; centralized HttpClient and interceptor layers.', r: '~35% faster integration · adopted platform-wide' }];
export const SKILLS: Record<string, string[]> = {
  'Angular': ['Angular 8–20', 'Signals', 'Standalone', 'RxJS', 'NgRx', 'Reactive Forms', 'Material & CDK', 'Directives & Pipes', 'DI'],
  'Language & UI': ['TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'SCSS', 'Tailwind', 'Figma-to-Code'],
  'Architecture': ['RBAC', 'Route Guards', 'HTTP Interceptors', 'JWT Auth', 'REST & Microservices', 'Microfrontends', 'Component Libraries'],
  'Performance & Quality': ['OnPush', 'Lazy Loading', 'Core Web Vitals', 'Code Splitting', 'Jasmine/Karma/Jest', 'SonarQube', 'Azure DevOps CI/CD'],
  'AI-Assisted Eng.': ['GitHub Copilot', 'Claude', 'ChatGPT', 'Code Review', 'Test Writing', 'Migration Tooling']};
export const ROLES = [
 { co:'Citi Bank', sys:'Fraud Management System', role:'Senior Frontend Engineer', when:'Mar 2025 – Sep 2026', tags:['Angular 20','Signals','JWT','Standalone','Interceptors','AI workflows'],
  ctx:'A live fraud-management platform that analysts rely on around the clock, still on Angular 8. It could not go offline for an upgrade, and it could not stay on an ageing framework either.',
  dec:[{t:'Migrate in-flight, keep it releasable',w:'The upgrade ran alongside normal delivery, so operators never saw a maintenance window and the 99.9%+ SLA held.'},
   {t:'Standalone components over NgModules',w:'Removing module indirection made features easier to reason about and lazy load, and cut ~40% of boilerplate.'},
   {t:'Signals for case-queue and alert state',w:'State became explicit instead of being threaded through services, which is where the ~60% drop in subscription bugs came from.'},
   {t:'One interceptor layer for 100+ microservice calls',w:'Token injection and error handling live in one place, saving ~8 hours of setup per module.'},
   {t:'JWT with refresh and expiry handling',w:'Operators on long shifts stopped being logged out, while sessions still expire safely.'},
   {t:'AI as a team multiplier, with review guardrails',w:'Copilot, Claude and ChatGPT across codegen, tests and docs made reviews 40% faster and cut bugs by 50%+.'}],
  out:['99.9%+ SLA held','15+ breaking changes cleared','~8 hrs saved per module','Reviews 40% faster']},
 { co:'Hitachi Energy', sys:'Relcare Platform', role:'Senior Frontend Engineer', when:'Jan 2022 – Feb 2025', tags:['Angular 18','RxJS','RBAC','Reactive Forms','rrule','SonarQube'],
  ctx:'An internal platform used daily by 150+ people across 8+ countries, with a slow core dashboard, 70+ deprecated dependencies and a different set of screens for every role.',
  dec:[{t:'Treat the v12 → v18 migration as a plan, then document it',w:'35 production modules moved in 4 weeks with zero regressions, and the written strategy became the team playbook.'},
   {t:'Fix load time at the route, not the component',w:'Lazy loading plus OnPush took the dashboard from ~20s to ~2s.'},
   {t:'RBAC in two layers',w:'Route guards enforce access, and directives toggle UI, so rules are both secure and invisible to users who should not see them.'},
   {t:'One scheduling component for everyone',w:'An rrule-driven recurring-events component serves 5+ modules and external integrations instead of five variants.'},
   {t:'A standard HttpClient layer',w:'Consistent request and response handling across 100+ APIs cut integration time by ~35%.'},
   {t:'Security and people as sprint habits',w:'10+ critical/major SonarQube findings fixed per sprint, and 5 mentored engineers all shipped modules within 4 weeks.'}],
  out:['Zero regression defects','~90% faster load','~35% faster integrations','20+ role-based workflows']},
 { co:'Hitachi Energy', sys:'Tender Configurator', role:'Frontend Engineer', when:'Apr 2021 – Dec 2021', tags:['Angular','Figma-to-Code','i18n','Excel I/O'],
  ctx:'My first account at Hitachi Energy: a tender-configuration tool where heavy data entry and international users made consistency and speed matter.',
  dec:[{t:'Components built from the design, not around it',w:'15+ reusable components from Figma shipped with zero rework and became the platform pattern, cutting screen build time ~50%.'},
   {t:'Excel import/export as a first-class workflow',w:'Batch operations replaced manual entry and cut data-entry time ~70%.'},
   {t:'A pipe-based i18n service',w:'Translation became a pattern rather than a rewrite, opening 6 new locales.'}],
  out:['~50% faster screen builds','~70% less data entry','6 new locales']}];
export const MIGS = [{ l:'Citi · Fraud Management', f:8, t:20 }, { l:'Hitachi · Relcare', f:12, t:18 }];
export const CRAFT = [
 { i:'◐', t:'Design systems and tokens', d:'I turn Figma into reusable, token-driven components. 15+ shipped with zero rework and became the platform standard.' },
 { i:'✦', t:'Motion with purpose', d:'Scroll reveals, count-ups and a cursor spotlight on this site are CSS and IntersectionObserver only, with reduced-motion respected.' },
 { i:'☾', t:'Theming engines', d:'ReadSphere ships Day, Sepia and Night modes from one set of CSS custom properties. This site does dark and light the same way.' },
 { i:'⌘', t:'Responsive and accessible', d:'Mobile-first layouts, semantic markup, keyboard-friendly controls and Core Web Vitals work (NgOptimizedImage, preconnect, priority hints).' }];
export const PRINCIPLES = ['Measure before optimizing','Migrate incrementally, ship continuously','Make the right thing the easy thing','Teach while you ship'];
export const PROJECTS = [
 { n:'RxJS Field Guide', type:'Interactive learning app', viz:'rx', live:'https://rxjs-field-guide.vercel.app', repo:'https://github.com/shamal-alshi/rxjs-field-guide',
  d:'RxJS is hard to picture from definitions alone. Each lesson starts from a familiar problem, explains the idea in plain language, then lets you run an experiment while animated marble lanes show values moving through the stream.',
  f:['Subjects: Subject, BehaviorSubject, ReplaySubject and AsyncSubject, including what late subscribers receive','Cold vs hot streams with share() and shareReplay() on a simulated request','switchMap, mergeMap, concatMap and exhaustMap side by side on overlapping work','catchError placement, retry of a flaky request, loading/success/error states','Subscription lifetimes, event-rate operators and shareReplay ref-counting'],
  e:'Lazy-loaded lesson routes, a reusable marble-lane visualization, and prerendered routes.', tags:['Angular','Signals','RxJS 7','Router','SCSS'] },
 { n:'ReadSphere', type:'Product-style web app', viz:'rs', repo:'https://github.com/shamal-alshi/readsphere',
  d:'A free digital library and reader powered by Open Library and Internet Archive, with real-time discovery, a full-text page-turning reader, and no CSS framework: just modular SCSS and design tokens.',
  f:['Curated feeds: trending in India and genre spotlights','In-app BookReader with page turns, two-page spread, zoom and read-aloud','3-way theme engine: Day, Warm Sepia (Kindle-style) and Night','Responsive 3D book art with spine lighting, crease shadows and hover lift','Debounced search with debounceTime and distinctUntilChanged'],
  e:'NgOptimizedImage, preconnect and priority hints to remove CLS and improve LCP.', tags:['Angular','Signals','Control flow','SCSS tokens','Open Library API'] },
 { n:'JSON Form Studio', type:'Developer tool', viz:'jf', live:'https://json-form-studio.vercel.app', repo:'https://github.com/shamal-alshi/json-form-studio',
  d:'Paste any JSON and get a working Angular form instantly. The engine infers types at runtime, builds a nested FormGroup hierarchy, and keeps form and JSON preview in sync both ways.',
  f:['Recursive schema inference: string, number, boolean, ISO date, objects and arrays','Recursive standalone components for deeply nested objects','Dynamic FormArrays for primitive and object lists, add and remove at runtime','Runtime validators (required, email) attached dynamically','Presets (user profile, e-commerce product, cloud infra) and one-click copy of edited JSON'],
  e:'Signals and computed values with takeUntilDestroyed, so two-way sync has no memory leaks.', tags:['Angular 19','Signals','Reactive Forms','Tailwind v4'] }];
