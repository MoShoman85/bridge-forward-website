#!/usr/bin/env python3
"""
Local dev tool — regenerates every page of the Bridge Forward static site
from the shared HEAD/HEADER/FOOTER templates below plus each page's own
content block. Run this after changing the header, footer, or nav so all
pages stay in sync, instead of hand-editing every file.

Usage: python3 build.py
"""

PAGES_NAV = ["about", "programs", "projects", "involved", "news", "contact"]
NAV_LABELS_KEY = {
    "about": "nav.about", "programs": "nav.programs", "projects": "nav.projects",
    "involved": "nav.involved", "news": "nav.news", "contact": "nav.contact",
}
NAV_LABELS_FALLBACK = {
    "about": "About", "programs": "Programs", "projects": "Projects",
    "involved": "Get Involved", "news": "News", "contact": "Contact",
}

HEAD_COMMON = '''<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">
<link rel="icon" type="image/png" sizes="512x512" href="assets/favicon-512.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="styles.css">'''


def header_html(active):
    links = []
    for p in PAGES_NAV:
        style = "color:var(--brand);font-weight:700" if p == active else "color:var(--ink-soft)"
        links.append(f'      <a href="{p}.html" style="{style}" data-i18n="{NAV_LABELS_KEY[p]}">{NAV_LABELS_FALLBACK[p]}</a>')
    nav = "\n".join(links)
    return f'''<header style="background:var(--surface);border-bottom:1px solid var(--border)">
  <div style="max-width:1120px;margin-inline:auto;padding:14px clamp(20px,4vw,32px);display:flex;align-items:center;gap:18px;flex-wrap:wrap;row-gap:10px">
    <a href="index.html" style="display:flex;align-items:center;gap:10px;flex:none">
      <img src="assets/logo.jpg" alt="Asociación Bridge Forward" style="height:104px;width:auto;border-radius:12px">
    </a>
    <nav aria-label="Primary" style="display:flex;gap:20px;flex-wrap:wrap;font-size:.9rem;font-weight:500">
{nav}
    </nav>
    <div style="display:flex;align-items:center;gap:10px;margin-left:auto">
      <div role="group" aria-label="Language" style="display:flex;gap:3px;background:var(--surface-alt);border:1px solid var(--border);border-radius:99px;padding:3px">
        <button type="button" class="lang-btn" id="langEs" onclick="setLanguage('es')">ES</button>
        <button type="button" class="lang-btn" id="langEn" onclick="setLanguage('en')">EN</button>
        <button type="button" class="lang-btn" id="langFr" onclick="setLanguage('fr')">FR</button>
      </div>
      <a href="donate.html" style="display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.85rem;padding:8px 14px;background:var(--orange);color:#221204" data-i18n="nav.donate">Donate</a>
    </div>
  </div>
</header>'''


FOOTER_HTML = '''<footer style="background:var(--brand-deep);color:#CBD8E1">
  <div style="max-width:1120px;margin-inline:auto;padding:56px clamp(20px,4vw,32px) 30px">
    <div style="display:grid;gap:36px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
      <div>
        <span style="color:#F2F6F8;font-family:'Lora',serif;font-weight:600;font-size:1.15rem">Asociación Bridge Forward</span>
        <p style="margin-top:10px;font-size:.9rem;color:#9FB4C4;max-width:280px" data-i18n="footer.tagline">United for a better future.</p>
      </div>
      <div>
        <h5 style="font-size:.78rem;text-transform:uppercase;letter-spacing:.07em;color:#7FA0B6;margin:0 0 14px" data-i18n="footer.explore">Explore</h5>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px">
          <li><a href="about.html" style="color:#CBD8E1;font-size:.92rem" data-i18n="nav.about">About</a></li>
          <li><a href="programs.html" style="color:#CBD8E1;font-size:.92rem" data-i18n="nav.programs">Programs</a></li>
          <li><a href="projects.html" style="color:#CBD8E1;font-size:.92rem" data-i18n="nav.projects">Projects</a></li>
          <li><a href="involved.html" style="color:#CBD8E1;font-size:.92rem" data-i18n="nav.involved">Get Involved</a></li>
          <li><a href="news.html" style="color:#CBD8E1;font-size:.92rem" data-i18n="nav.news">News</a></li>
          <li><a href="contact.html" style="color:#CBD8E1;font-size:.92rem" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h5 style="font-size:.78rem;text-transform:uppercase;letter-spacing:.07em;color:#7FA0B6;margin:0 0 14px" data-i18n="footer.connect">Connect</h5>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px">
          <li><a href="mailto:info@bridgeforwardspain.org" style="color:#CBD8E1;font-size:.92rem">info@bridgeforwardspain.org</a></li>
          <li style="color:#CBD8E1;font-size:.92rem" data-i18n="contact.address">Calle Manuela Estellés, núm. 38, planta 1, puerta 3 · 46022 Valencia, España</li>
          <li><a href="tel:+34604819161" style="color:#CBD8E1;font-size:.92rem">+34 604 819 161</a></li>
          <li style="color:#7FA0B6;font-size:.8rem" data-i18n="contact.registration">Registro Nacional de Asociaciones, Sección 1ª, Nº 633.568</li>
          <li style="color:#7FA0B6;font-size:.92rem" data-i18n="footer.spain">Spain</li>
          <li style="color:#7FA0B6;font-size:.85rem" data-i18n="footer.followsoon">Follow us soon.</li>
        </ul>
      </div>
    </div>
    <div style="margin-top:44px;padding-top:22px;border-top:1px solid rgba(255,255,255,.09);font-size:.8rem;color:#7FA0B6;display:flex;flex-wrap:wrap;gap:6px 18px;align-items:center">
      <span data-i18n="footer.legal">© 2026 Asociación Bridge Forward · NIF G93862399 · Spain</span>
      <a href="privacy.html" style="color:#7FA0B6" data-i18n="footer.privacy">Privacy Policy</a>
      <a href="legal.html" style="color:#7FA0B6" data-i18n="footer.legalnotice">Legal Notice</a>
    </div>
  </div>
</footer>'''


def page(path, page_id, title, description, body, nav_active=None):
    head = HEAD_COMMON
    active = nav_active if nav_active is not None else (page_id if page_id in PAGES_NAV else "")
    return f'''<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" id="metaDescription" content="{description}">
{head}
</head>
<body>

<div style="width:100%;min-height:100vh;display:flex;flex-direction:column;background:var(--bg);color:var(--ink)">

{header_html(active)}

<main>

{body}

</main>

{FOOTER_HTML}

</div>

<script>var PAGE_ID = "{page_id}";</script>
<script src="translations.js"></script>
</body>
</html>
'''


# ---- Page content blocks (verbatim from the original single-page site, links fixed to real pages) ----

HOME_BODY = '''  <section id="home" style="padding-block:56px 76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px);display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:44px;align-items:center">
      <div>
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="hero.eyebrow">A new non-profit in Spain</span>
        <h1 style="font-size:clamp(2.1rem,1.5rem+3vw,3.6rem);line-height:1.06;font-weight:600" data-i18n-html="hero.h1">United for a <em style="font-style:normal;color:var(--brand)">Better Future</em></h1>
        <p style="margin-top:18px;margin-bottom:30px;font-size:1.14rem;color:var(--ink-soft);max-width:560px" data-i18n="hero.p">Asociación Bridge Forward is a non-profit organization committed to human dignity, protection, education, and creating opportunities for people and communities.</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px">
          <a href="about.html" style="display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.92rem;padding:10px 18px;background:var(--orange);color:#221204" data-i18n="hero.cta1">Learn Our Mission</a>
          <a href="donate.html" style="display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.92rem;padding:10px 18px;border:1px solid var(--brand);color:var(--brand)" data-i18n="hero.cta2">Support Our Mission</a>
        </div>
      </div>
      <img src="assets/hero.jpg" id="heroImg" alt="" style="width:100%;max-width:420px;margin-inline:auto;display:block;border-radius:20px;box-shadow:var(--shadow)">
    </div>
  </section>'''

ABOUT_BODY = '''  <section id="about" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px);display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:56px">
      <div>
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="about.eyebrow">Who We Are</span>
        <h2 style="font-size:clamp(1.7rem,1.3rem+1.6vw,2.5rem);font-weight:600;margin-bottom:18px" data-i18n="about.h2">Building Bridges to New Opportunities</h2>
        <p style="color:var(--ink-soft);font-size:1.02rem" data-i18n="about.p1">Asociación Bridge Forward was founded to help build a more inclusive society.</p>
        <p style="margin-top:14px;color:var(--ink-soft);font-size:1.02rem" data-i18n="about.p2">Our vision brings together local commitment in Spain with an international outlook.</p>
        <div style="margin-top:26px"><a href="programs.html" style="display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.85rem;padding:8px 14px;border:1px solid var(--brand);color:var(--brand)" data-i18n="about.cta">See Our Programs</a></div>
      </div>
      <div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:18px;padding:28px">
        <p style="font-family:'Lora',serif;font-weight:500;font-style:italic;font-size:1.28rem;line-height:1.4;color:var(--brand);border-left:3px solid var(--orange);padding-left:18px;margin-bottom:26px" data-i18n="mission.quote">"To promote human dignity..."</p>
        <div style="display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
          <div style="display:flex;gap:12px">
            <span style="flex:none;width:38px;height:38px;border-radius:10px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--brand)"><svg width="19" height="19" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.8"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="8.6" r="2.3"></circle><path d="M7,17 a5,4 0 0 1 10,0"></path></svg></span>
            <div><h4 style="font-family:'Inter',sans-serif;font-weight:700;font-size:.95rem;margin:0 0 3px" data-i18n="values.dignity.title">Dignity</h4><p style="margin:0;font-size:.87rem;color:var(--ink-soft)" data-i18n="values.dignity.desc">We respect the worth and rights of every person.</p></div>
          </div>
          <div style="display:flex;gap:12px">
            <span style="flex:none;width:38px;height:38px;border-radius:10px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--brand)"><svg width="19" height="19" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.8"><circle cx="9" cy="12" r="5"></circle><circle cx="15" cy="12" r="5"></circle></svg></span>
            <div><h4 style="font-family:'Inter',sans-serif;font-weight:700;font-size:.95rem;margin:0 0 3px" data-i18n="values.inclusion.title">Inclusion</h4><p style="margin:0;font-size:.87rem;color:var(--ink-soft)" data-i18n="values.inclusion.desc">We promote participation and equal opportunity.</p></div>
          </div>
          <div style="display:flex;gap:12px">
            <span style="flex:none;width:38px;height:38px;border-radius:10px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--brand)"><svg width="19" height="19" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.8"><path d="M2,12 C5,6 19,6 22,12 C19,18 5,18 2,12 Z"></path><circle cx="12" cy="12" r="2.6"></circle></svg></span>
            <div><h4 style="font-family:'Inter',sans-serif;font-weight:700;font-size:.95rem;margin:0 0 3px" data-i18n="values.transparency.title">Transparency</h4><p style="margin:0;font-size:.87rem;color:var(--ink-soft)" data-i18n="values.transparency.desc">We act with responsibility, openness, and accountability.</p></div>
          </div>
          <div style="display:flex;gap:12px">
            <span style="flex:none;width:38px;height:38px;border-radius:10px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--brand)"><svg width="19" height="19" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.8"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="12" r="3"></circle><line x1="9" y1="12" x2="15" y2="12"></line><circle cx="12" cy="12" r="1.5" style="fill:currentColor;stroke:none"></circle></svg></span>
            <div><h4 style="font-family:'Inter',sans-serif;font-weight:700;font-size:.95rem;margin:0 0 3px" data-i18n="values.solidarity.title">Solidarity</h4><p style="margin:0;font-size:.87rem;color:var(--ink-soft)" data-i18n="values.solidarity.desc">We stand with the communities and people who need support.</p></div>
          </div>
          <div style="display:flex;gap:12px">
            <span style="flex:none;width:38px;height:38px;border-radius:10px;background:var(--surface);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--brand)"><svg width="19" height="19" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.8"><line x1="6" y1="3" x2="6" y2="21"></line><path d="M6,4 L18,7 L6,11 Z" style="fill:currentColor;stroke:none"></path></svg></span>
            <div><h4 style="font-family:'Inter',sans-serif;font-weight:700;font-size:.95rem;margin:0 0 3px" data-i18n="values.commitment.title">Commitment</h4><p style="margin:0;font-size:.87rem;color:var(--ink-soft)" data-i18n="values.commitment.desc">We pursue sustainable solutions built around real needs.</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>'''

PROGRAMS_BODY = '''  <section id="programs" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px)">
      <div style="max-width:680px;margin-bottom:38px">
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="programs.eyebrow">Our Programs</span>
        <h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.2rem);font-weight:600;margin:10px 0 14px" data-i18n="programs.h2">Where We Focus</h2>
        <p style="font-size:1.08rem;color:var(--ink-soft)" data-i18n="programs.p">These four programs guide everything we do — we'll announce the specific projects and initiatives under each here as they launch.</p>
      </div>
      <div style="display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="display:flex;flex-shrink:0;width:34px;height:34px;border-radius:9px;background:var(--surface-alt);border:1px solid var(--border);align-items:center;justify-content:center;color:var(--teal);font-weight:700;font-size:.92rem">1</span>
            <h4 style="font-size:1.02rem;font-weight:700;margin:0" data-i18n="programs.p1.title">Women and Child Protection and Resilience Program</h4>
          </div>
          <p style="margin:0;font-size:.9rem;color:var(--ink-soft)" data-i18n="programs.p1.objective">Strengthening the protection of women and children and supporting their resilience and ability to live with dignity, especially in communities affected by crises, poverty, displacement, and disasters.</p>
          <ul data-i18n-html="programs.p1.areas" style="margin:0;padding-left:18px;font-size:.86rem;color:var(--ink-soft);display:flex;flex-direction:column;gap:4px">
            <li>Food security and livelihood support</li>
            <li>Water and sanitation projects sensitive to the needs of women and girls</li>
            <li>Economic empowerment of women</li>
            <li>Psychosocial support for children and women</li>
            <li>Protection and prevention activities against violence and exploitation</li>
            <li>Support for the most vulnerable families</li>
          </ul>
        </div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="display:flex;flex-shrink:0;width:34px;height:34px;border-radius:9px;background:var(--surface-alt);border:1px solid var(--border);align-items:center;justify-content:center;color:var(--teal);font-weight:700;font-size:.92rem">2</span>
            <h4 style="font-size:1.02rem;font-weight:700;margin:0" data-i18n="programs.p2.title">Education and Culture Program</h4>
          </div>
          <p style="margin:0;font-size:.9rem;color:var(--ink-soft)" data-i18n="programs.p2.objective">Providing educational, learning, and cultural opportunities, especially for children, women, and youth in crisis-affected areas.</p>
          <ul data-i18n-html="programs.p2.areas" style="margin:0;padding-left:18px;font-size:.86rem;color:var(--ink-soft);display:flex;flex-direction:column;gap:4px">
            <li>Supporting return to school</li>
            <li>Establishing and supporting safe learning spaces</li>
            <li>Literacy programs for women</li>
            <li>Non-formal training and learning</li>
            <li>Cultural and educational activities</li>
            <li>Community awareness-raising</li>
            <li>Supporting children and youth in continuing their education</li>
          </ul>
        </div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="display:flex;flex-shrink:0;width:34px;height:34px;border-radius:9px;background:var(--surface-alt);border:1px solid var(--border);align-items:center;justify-content:center;color:var(--teal);font-weight:700;font-size:.92rem">3</span>
            <h4 style="font-size:1.02rem;font-weight:700;margin:0" data-i18n="programs.p3.title">Reconstruction and Inclusive Development Program</h4>
          </div>
          <p style="margin:0;font-size:.9rem;color:var(--ink-soft)" data-i18n="programs.p3.objective">Contributing to the reconstruction of affected communities and creating sustainable economic, educational, and professional opportunities.</p>
          <ul data-i18n-html="programs.p3.areas" style="margin:0;padding-left:18px;font-size:.86rem;color:var(--ink-soft);display:flex;flex-direction:column;gap:4px">
            <li>Housing rehabilitation</li>
            <li>Rehabilitation of educational and community facilities</li>
            <li>Support for micro and small enterprises</li>
            <li>Economic empowerment</li>
            <li>Vocational training for youth and women</li>
            <li>Skills development and employment opportunities</li>
            <li>Psychosocial and community recovery</li>
            <li>Support for local initiatives and sustainable development</li>
          </ul>
        </div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:24px;display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="display:flex;flex-shrink:0;width:34px;height:34px;border-radius:9px;background:var(--surface-alt);border:1px solid var(--border);align-items:center;justify-content:center;color:var(--teal);font-weight:700;font-size:.92rem">4</span>
            <h4 style="font-size:1.02rem;font-weight:700;margin:0" data-i18n="programs.p4.title">Humanitarian Emergency Response Program</h4>
          </div>
          <p style="margin:0;font-size:.9rem;color:var(--ink-soft)" data-i18n="programs.p4.objective">Providing a rapid response to humanitarian needs resulting from crises, disasters, and emergencies.</p>
          <ul data-i18n-html="programs.p4.areas" style="margin:0;padding-left:18px;font-size:.86rem;color:var(--ink-soft);display:flex;flex-direction:column;gap:4px">
            <li>Emergency response plans</li>
            <li>Rapid response to urgent needs</li>
            <li>Training of community response teams</li>
            <li>Water, sanitation, and hygiene (WASH)</li>
            <li>Food</li>
            <li>Shelter</li>
            <li>Basic and non-food items</li>
            <li>Support for families, children, and women affected by emergencies</li>
          </ul>
        </div>
      </div>
    </div>
  </section>'''

PROJECTS_BODY = '''  <section id="projects" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px)">
      <div style="max-width:640px;margin-bottom:38px">
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="projects.eyebrow">Our Projects</span>
        <h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.2rem);font-weight:600;margin:10px 0 14px" data-i18n="projects.h2">Our Projects</h2>
        <p style="font-size:1.08rem;color:var(--ink-soft)" data-i18n="projects.p">This is where we'll present our projects.</p>
      </div>
      <div style="display:grid;gap:18px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
        <div style="border:1px solid var(--border);border-radius:14px;padding:26px;display:flex;flex-direction:column;gap:12px;background:var(--surface);box-shadow:var(--shadow)">
          <span style="display:flex;width:38px;height:38px;border-radius:10px;background:var(--surface-alt);border:1px solid var(--border);align-items:center;justify-content:center;color:var(--brand)"><svg width="18" height="18" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.7"><circle cx="9" cy="8" r="3"></circle><circle cx="17" cy="8" r="3"></circle><path d="M3,20 C3,16 6,14 9,14 C12,14 15,16 15,20"></path><path d="M13,20 C13,16.5 15,14.5 17,14.5 C19.5,14.5 21,16.5 21,20"></path></svg></span>
          <h4 style="font-size:1.05rem;font-weight:700;margin:0" data-i18n="convivencia.h2">Convivencia</h4>
          <p style="margin:0;font-size:.92rem;color:var(--ink-soft)" data-i18n="projects.convivencia.teaser">A program of meeting, intercultural exchange, Spanish-language learning, and community participation, first rolled out in Valencia.</p>
          <a href="convivencia.html" style="font-size:.88rem;font-weight:600;color:var(--brand)" data-i18n="projects.convivencia.cta">See the project</a>
        </div>
        <div style="border:1.5px dashed var(--border);border-radius:14px;padding:26px 20px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:10px;color:var(--ink-soft);background:var(--surface)">
          <span style="display:flex;width:38px;height:38px;border-radius:10px;background:var(--bg);border:1px solid var(--border);align-items:center;justify-content:center;color:var(--brand)"><svg width="18" height="18" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.7"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="8.5" cy="9.5" r="1.6"></circle><path d="M3,17 L9,12 L13,15 L17,10 L21,14"></path></svg></span>
          <span style="font-size:.85rem;font-weight:600" data-i18n="projects.morecoming">More projects coming soon</span>
        </div>
      </div>
    </div>
  </section>'''

CONVIVENCIA_BODY = '''  <section style="padding-block:56px 20px">
    <div style="max-width:760px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px)">
      <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="convivencia.eyebrow">Our First Project</span>
      <h2 style="font-size:clamp(1.8rem,1.3rem+1.8vw,2.6rem);font-weight:600;margin:10px 0 8px" data-i18n="convivencia.h2">Convivencia</h2>
      <p style="font-family:'Lora',serif;font-style:italic;color:var(--brand);font-size:1.1rem;margin:0 0 10px" data-i18n="convivencia.tagline">Meeting · Languages · Culture · Participation · Community</p>
      <p style="font-size:.95rem;color:var(--ink-soft);margin-bottom:30px" data-i18n="convivencia.location">First rolled out in Valencia, Spain — designed to grow into other places over time.</p>
      <div data-i18n-html="convivencia.intro" style="color:var(--ink-soft);font-size:1.02rem;display:flex;flex-direction:column;gap:14px;margin-bottom:10px">
        <p>Convivencia is a community program — social, educational, and cultural — that creates accessible spaces where people of different ages, cultures, and backgrounds can meet, learn, and build real trust: local residents, migrants, refugees, newcomers to Spain, students, young people, families, and children, all together, not in separate spaces.</p>
        <p>Valencia is a diverse city, but diversity alone doesn't guarantee people actually live well together. Many newcomers struggle to learn Spanish, build new relationships, and take part in local life; many long-time residents, in turn, have few chances to connect with other cultures. Convivencia exists to create simple, regular, accessible opportunities for that to change.</p>
      </div>
    </div>
  </section>

  <section style="padding-block:20px 76px">
    <div style="max-width:760px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px);display:flex;flex-direction:column;gap:38px">
      <div>
        <h3 style="font-size:1.3rem;font-weight:600;margin:0 0 10px" data-i18n="convivencia.objective.h3">Objective</h3>
        <p style="margin:0;color:var(--ink-soft);font-size:1rem" data-i18n="convivencia.objective.p">To foster intercultural coexistence, social inclusion, language learning, and community participation, through spaces where local residents and people from different backgrounds can connect, learn, and collaborate as equals.</p>
      </div>
      <div>
        <h3 style="font-size:1.3rem;font-weight:600;margin:0 0 10px" data-i18n="convivencia.who.h3">Who it's for</h3>
        <ul data-i18n-html="convivencia.who.list" style="margin:0 0 10px;padding-left:20px;color:var(--ink-soft);font-size:1rem;display:flex;flex-direction:column;gap:5px">
          <li>Newcomers to Spain, migrants, and refugees</li>
          <li>Local residents</li>
          <li>National and international students</li>
          <li>Young people, families, and children</li>
          <li>Older adults</li>
          <li>Volunteers, associations, and community groups</li>
        </ul>
        <p style="margin:0;color:var(--ink-soft);font-size:.92rem;font-style:italic" data-i18n="convivencia.who.note">Convivencia isn't a project aimed only at migrants — its value lies in bringing people with different experiences into the same space.</p>
      </div>
      <div>
        <h3 style="font-size:1.3rem;font-weight:600;margin:0 0 14px" data-i18n="convivencia.what.h3">What we do</h3>
        <ul data-i18n-html="convivencia.what.list" style="margin:0;padding-left:20px;color:var(--ink-soft);font-size:1rem;display:flex;flex-direction:column;gap:9px">
          <li><strong>Language Café</strong> — an informal space to practice Spanish, English, Arabic, and other languages.</li>
          <li><strong>Spanish in Community</strong> — conversation sessions for newcomers to practice Spanish alongside volunteers.</li>
          <li><strong>Flavors of the World</strong> — cooking and sharing recipes and food stories.</li>
          <li><strong>Stories of the World</strong> — personal, family, and cultural stories.</li>
          <li><strong>Film and Dialogue</strong> — screenings with participatory discussion.</li>
          <li><strong>Art and Crafts</strong> — hands-on workshops led by participants and collaborators.</li>
          <li><strong>Music of the World</strong> — sharing music, instruments, and songs.</li>
          <li><strong>Teach Me a Word</strong> — each participant shares words and expressions from their own language.</li>
          <li><strong>Human Map of the World</strong> — a participatory picture of the community's diversity.</li>
          <li><strong>Intercultural Games</strong> — cooperative activities to help people get to know each other.</li>
          <li><strong>Family activities</strong> — designed for children and families, for coexistence across generations.</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:1.3rem;font-weight:600;margin:0 0 10px" data-i18n="convivencia.languages.h3">Languages</h3>
        <p style="margin:0;color:var(--ink-soft);font-size:1rem" data-i18n="convivencia.languages.p">The three main languages are Spanish, English, and Arabic. The project is also open to French, Italian, Portuguese, Romanian, Ukrainian, Russian, German, Valencian, and any other language participants bring with them — linguistic diversity is a resource for the project, not a closed list.</p>
      </div>
      <div>
        <h3 style="font-size:1.3rem;font-weight:600;margin:0 0 14px" data-i18n="convivencia.timeline.h3">How it unfolds</h3>
        <ul data-i18n-html="convivencia.timeline.list" style="margin:0;padding-left:20px;color:var(--ink-soft);font-size:1rem;display:flex;flex-direction:column;gap:9px">
          <li><strong>Preparation</strong> — planning, outreach, finding collaborators and volunteers, and setting up the Spanish-learning community.</li>
          <li><strong>Month 1 — Getting to know each other</strong> — first gatherings: Language Café, Spanish in Community, Human Map, intercultural games.</li>
          <li><strong>Month 2 — Sharing</strong> — Flavors of the World, Stories of the World, art, music, and language exchange.</li>
          <li><strong>Month 3 — Building together</strong> — Film and Dialogue, family activities, evaluation, and gathering ideas for what comes next.</li>
        </ul>
      </div>
      <div>
        <h3 style="font-size:1.3rem;font-weight:600;margin:0 0 14px" data-i18n="convivencia.impact.h3">Expected impact</h3>
        <ul data-i18n-html="convivencia.impact.list" style="margin:0;padding-left:20px;color:var(--ink-soft);font-size:1rem;display:flex;flex-direction:column;gap:6px">
          <li>More confidence using Spanish and greater everyday communication skills</li>
          <li>New relationships and social networks, and less isolation for people who've just arrived</li>
          <li>More contact between local residents and newcomers, and new volunteer networks</li>
          <li>Greater mutual understanding across cultures, and fewer prejudices</li>
          <li>Spaces where different generations share activities and experiences</li>
        </ul>
      </div>
      <div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center">
        <p style="margin:0 0 16px;font-size:1.08rem;font-weight:600" data-i18n="convivencia.cta.p">Want to volunteer with Convivencia?</p>
        <a href="involved.html" style="display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.92rem;padding:10px 18px;background:var(--orange);color:#221204" data-i18n="convivencia.cta.btn">Become a volunteer</a>
      </div>
    </div>
  </section>'''

INVOLVED_BODY = '''  <section id="involved" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px);display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:52px">
      <div>
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="involved.eyebrow">Get Involved</span>
        <h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.2rem);font-weight:600;margin-bottom:14px" data-i18n="involved.h2">Be Part of Bridge Forward</h2>
        <p style="font-size:1.08rem;color:var(--ink-soft);max-width:420px" data-i18n="involved.p">There are many ways to support our mission.</p>
      </div>
      <form id="involveForm" style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:26px;box-shadow:var(--shadow)">
        <div style="margin-bottom:16px">
          <label for="i-name" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form.fullname">Full name</label>
          <input id="i-name" type="text" data-i18n-placeholder="form.fullname.placeholder">
        </div>
        <div style="display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));margin-bottom:16px">
          <div>
            <label for="i-email" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form.email">Email</label>
            <input id="i-email" type="email" data-i18n-placeholder="form.email.placeholder">
          </div>
          <div>
            <label for="i-phone" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form.phone">Phone (optional)</label>
            <input id="i-phone" type="tel" data-i18n-placeholder="form.phone.placeholder">
          </div>
        </div>
        <div style="margin-bottom:16px">
          <label for="i-way" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form.howhelp">How would you like to help?</label>
          <select id="i-way">
            <option data-i18n="form.opt1">Volunteering</option>
            <option data-i18n="form.opt2">Professional collaboration</option>
            <option data-i18n="form.opt3">Activities &amp; events</option>
            <option data-i18n="form.opt4">Spreading the word</option>
            <option data-i18n="form.opt5">Other</option>
          </select>
        </div>
        <div style="margin-bottom:16px">
          <label for="i-msg" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form.message">Message</label>
          <textarea id="i-msg" data-i18n-placeholder="form.involve.placeholder"></textarea>
        </div>
        <button type="button" id="involveSendBtn" style="width:100%;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.92rem;padding:10px 18px;background:var(--orange);color:#221204;border:0;cursor:pointer" data-i18n="form.send">Send</button>
        <p id="involveNote" style="display:none;font-size:.82rem;color:var(--ink-soft);margin:10px 0 0" data-i18n="form.note">This form isn't connected yet.</p>
      </form>
    </div>
  </section>'''

NEWS_BODY = '''  <section id="news" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px)">
      <div style="max-width:640px;margin-bottom:38px">
        <span style="display:inline-block;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;background:var(--surface-alt);color:var(--teal);border:1px solid var(--border);padding:5px 11px;border-radius:99px;margin-bottom:16px" data-i18n="news.badge">Stories Coming Soon</span><br>
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="news.eyebrow">News</span>
        <h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.2rem);font-weight:600;margin:10px 0 14px" data-i18n="news.h2">News &amp; Updates</h2>
        <p style="font-size:1.08rem;color:var(--ink-soft)" data-i18n="news.p">Follow our activities.</p>
      </div>
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 18px;font-size:.92rem;color:var(--ink-soft)">
        <svg width="18" height="18" viewBox="0 0 24 24" style="fill:none;stroke:var(--teal);stroke-width:1.8"><path d="M3,7 L12,13 L21,7"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect></svg>
        <span data-i18n-html="news.emailNote">Want to be the first to know?</span>
      </div>
    </div>
  </section>'''

DONATE_BODY = '''  <section id="donate" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px)">
      <div style="background:var(--brand);color:#F5F7F6;border-radius:20px;padding:40px 28px;text-align:center">
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--orange)" data-i18n="donate.eyebrow">Support Us</span>
        <h2 style="color:#F5F7F6;font-size:clamp(1.7rem,1.3rem+1.6vw,2.4rem);margin-top:14px" data-i18n="donate.h2">Support Our Mission</h2>
        <p style="color:#D7E2E9;max-width:520px;margin:16px auto 26px;font-size:1.02rem" data-i18n="donate.p">We're setting up a simple, secure way to give online.</p>
        <a href="contact.html" style="display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.92rem;padding:10px 18px;background:var(--orange);color:#221204" data-i18n="donate.cta">Contact Us About Giving</a>
        <small style="display:block;margin-top:14px;opacity:.75;font-size:.8rem" data-i18n="donate.small">Online giving launches soon.</small>
      </div>
    </div>
  </section>'''

CONTACT_BODY = '''  <section id="contact" style="padding-block:76px">
    <div style="max-width:1120px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px);display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:52px">
      <div>
        <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="contact.eyebrow">Contact</span>
        <h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.2rem);font-weight:600;margin-bottom:14px" data-i18n="contact.h2">We're Here to Listen</h2>
        <p style="font-size:1.08rem;color:var(--ink-soft);max-width:420px" data-i18n="contact.p">Want to learn more about our association?</p>
        <p style="margin-top:20px;font-weight:600"><a href="mailto:info@bridgeforwardspain.org" style="color:var(--brand)">info@bridgeforwardspain.org</a></p>
        <p style="margin-top:8px;font-size:.98rem;color:var(--ink-soft)" data-i18n="contact.address">Calle Manuela Estellés, núm. 38, planta 1, puerta 3 · 46022 Valencia, España</p>
        <p style="margin-top:4px;font-size:.98rem"><a href="tel:+34604819161" style="color:var(--brand);font-weight:600">+34 604 819 161</a></p>
        <p style="margin-top:8px;font-size:.85rem;color:var(--ink-soft)" data-i18n="contact.registration">Registro Nacional de Asociaciones, Sección 1ª, Nº 633.568</p>
      </div>
      <form id="contactForm" style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:26px;box-shadow:var(--shadow)">
        <div style="margin-bottom:16px">
          <label for="c-name" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form2.name">Name</label>
          <input id="c-name" type="text" data-i18n-placeholder="form2.name.placeholder">
        </div>
        <div style="margin-bottom:16px">
          <label for="c-email" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form2.email">Email</label>
          <input id="c-email" type="email" data-i18n-placeholder="form2.email.placeholder">
        </div>
        <div style="margin-bottom:16px">
          <label for="c-subject" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form2.subject">Subject</label>
          <input id="c-subject" type="text" data-i18n-placeholder="form2.subject.placeholder">
        </div>
        <div style="margin-bottom:16px">
          <label for="c-msg" style="display:block;font-size:.82rem;font-weight:600;margin-bottom:6px" data-i18n="form.message">Message</label>
          <textarea id="c-msg" data-i18n-placeholder="form2.message.placeholder"></textarea>
        </div>
        <button type="button" id="contactSendBtn" style="width:100%;display:inline-flex;align-items:center;justify-content:center;border-radius:9px;font-weight:600;font-size:.92rem;padding:10px 18px;background:var(--orange);color:#221204;border:0;cursor:pointer" data-i18n="form2.send">Send Message</button>
        <p id="contactNote" style="display:none;font-size:.82rem;color:var(--ink-soft);margin:10px 0 0" data-i18n="form.note">This form isn't connected yet.</p>
      </form>
    </div>
  </section>'''

def legal_style_body(eyebrow_key, h2_key, updated_key, content_key):
    return f'''  <section style="padding-block:76px">
    <div style="max-width:760px;margin-inline:auto;padding-inline:clamp(20px,4vw,32px)">
      <span style="display:inline-flex;align-items:center;gap:7px;font-size:.76rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal);margin-bottom:14px" data-i18n="{eyebrow_key}">Legal</span>
      <h2 style="font-size:clamp(1.6rem,1.2rem+1.4vw,2.2rem);font-weight:600;margin:10px 0 8px" data-i18n="{h2_key}">Legal</h2>
      <p style="font-size:.85rem;color:var(--ink-soft);margin-bottom:30px" data-i18n="{updated_key}">Last updated</p>
      <div data-i18n-html="{content_key}" style="color:var(--ink-soft);font-size:1rem;display:flex;flex-direction:column;gap:14px">
      </div>
    </div>
  </section>'''

PRIVACY_BODY = legal_style_body("privacy.eyebrow", "privacy.h2", "privacy.updated", "privacy.content")
LEGAL_BODY = legal_style_body("legal.eyebrow", "legal.h2", "legal.updated", "legal.content")


DESC = "Asociación Bridge Forward es una organización sin ánimo de lucro comprometida con la dignidad humana, la protección, la educación y la creación de oportunidades para las personas y las comunidades."

FILES = [
    ("index.html", "home", "Asociación Bridge Forward", DESC, HOME_BODY),
    ("about.html", "about", "Quiénes somos · Asociación Bridge Forward", DESC, ABOUT_BODY),
    ("programs.html", "programs", "Programas · Asociación Bridge Forward", DESC, PROGRAMS_BODY),
    ("projects.html", "projects", "Proyectos · Asociación Bridge Forward", DESC, PROJECTS_BODY),
    ("involved.html", "involved", "Participa · Asociación Bridge Forward", DESC, INVOLVED_BODY),
    ("news.html", "news", "Noticias · Asociación Bridge Forward", DESC, NEWS_BODY),
    ("donate.html", "donate", "Donar · Asociación Bridge Forward", DESC, DONATE_BODY),
    ("contact.html", "contact", "Contacto · Asociación Bridge Forward", DESC, CONTACT_BODY),
    ("privacy.html", "privacy", "Política de Privacidad · Asociación Bridge Forward", DESC, PRIVACY_BODY),
    ("legal.html", "legal", "Aviso Legal · Asociación Bridge Forward", DESC, LEGAL_BODY),
]

# (filename, page_id, title, desc, body, nav_active)
FILES_WITH_NAV_OVERRIDE = [
    ("convivencia.html", "convivencia", "Convivencia · Asociación Bridge Forward", DESC, CONVIVENCIA_BODY, "projects"),
]

if __name__ == "__main__":
    for filename, page_id, title, desc, body in FILES:
        html = page(filename, page_id, title, desc, body)
        with open(filename, "w", encoding="utf-8") as f:
            f.write(html)
        print("wrote", filename)
    for filename, page_id, title, desc, body, nav_active in FILES_WITH_NAV_OVERRIDE:
        html = page(filename, page_id, title, desc, body, nav_active=nav_active)
        with open(filename, "w", encoding="utf-8") as f:
            f.write(html)
        print("wrote", filename)
