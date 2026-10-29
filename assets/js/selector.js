(()=>{'use strict';
const root=document.documentElement,body=document.body;
const paletteData=[
 ['reference','Reference Blue','#245DA7','#6A9BD1','#F6F8FC','light'],
 ['arctic','Arctic Blue','#087F9E','#00AEB8','#F7FBFC','light'],
 ['sapphire','Sapphire','#2257B8','#648FF1','#F8FAFF','light'],
 ['forest','Forest Scholar','#1E7157','#B0A064','#F9FBF8','light'],
 ['clay','Clay & Copper','#AA553A','#D7A36B','#FFFCF9','light'],
 ['rosewood','Rosewood','#A13653','#D18E9E','#FEFAFB','light'],
 ['plum','Plum & Orchid','#734A99','#BD84BD','#FCFAFE','light'],
 ['cobalt','Electric Cobalt','#144BDF','#51C2FC','#F7F9FF','light'],
 ['teal','Botanical Teal','#127D80','#7DBFAD','#F7FCFB','light'],
 ['indigo','Indigo Ink','#4F55A1','#A99EED','#FAFAFF','light'],
 ['amber','Amber & Ivory','#A56A16','#E1A749','#FFFCF5','light'],
 ['stone','Modern Stone','#536A71','#A49E91','#FAFAF8','light'],
 ['mint','Fresh Mint','#087A60','#65C9B1','#F8FDFA','light'],
 ['coral','Coastal Coral','#BD594F','#FFA58B','#FFFBFA','light'],
 ['olive','Olive Garden','#61783D','#A8B58A','#FBFCF8','light'],
 ['midnight','Midnight Lab','#6FC8E8','#3487B6','#101E2E','dark'],
 ['pine','Deep Pine','#93CBB2','#4D9E7A','#101F1A','dark'],
 ['graphite','Graphite Gold','#E7B678','#AA7D56','#181A1D','dark'],
 ['lavender','Lavender Scholar','#7552AC','#B5A1D9','#FAF9FF','light'],
 ['burgundy','Burgundy Academic','#8C324E','#C7879B','#FDF9FA','light'],
 ['ocean','Deep Ocean','#14688D','#56B0BD','#F6FAFC','light'],
 ['sand','Sandstone','#A16C42','#CEB18D','#FFFCF7','light'],
 ['sky','Bright Sky','#1375CA','#8ACDEC','#F7FCFF','light'],
 ['lavender-mist','Lilac Mist','#8256AA','#C9B7E4','#FDFBFF','light'],
 ['slate','Slate Studio','#475B73','#90A0AF','#F7F9FB','light'],
 ['deep-ocean','Deep Ocean Night','#6EC8DB','#45A0B2','#0B1D2A','dark']
];
const fontData=[
 ['modern','Modern / Confident','Manrope','Inter'],['editorial','Editorial / Elegant','Playfair Display','Inter'],['classic','Classic / Academic','Georgia','Inter'],['scientific','Scientific / Precise','IBM Plex Sans','IBM Plex Sans'],['geometric','Geometric / Future','Space Grotesk','DM Sans'],['friendly','Friendly / Contemporary','Outfit','Outfit'],['heritage','Heritage / Traditional','Libre Baskerville','Source Sans 3'],['prestige','Prestige / Refined','Cormorant Garamond','Manrope']
];
const choices={
 palette:paletteData.map(x=>x[0]),font:fontData.map(x=>x[0]),
 hero:['split','reverse','centered','magazine'],style:['showcase','editorial','minimal','technical'],
 spacing:['compact','balanced','airy'],corners:['square','soft','rounded'],
 nav:['line','pill','boxed'],cards:['elevated','outlined','flat'],
 portrait:['natural','monochrome','toned','circle'],texture:['none','glow','grid','dots'],
 motion:['subtle','off'],size:['normal','large','compact'],
 width:['narrow','standard','wide'],buttons:['classic','solid','underlined'],intro:['compact','balanced','grand'],sections:['research-first','news-first','lab-first'],header:['static','sticky'],art:['natural','monochrome','saturated']
};
const labels={hero:{split:'Classic split',reverse:'Portrait first',centered:'Centered statement',magazine:'Magazine cover'},style:{showcase:'Modern showcase',editorial:'Editorial / Journal',minimal:'Quiet minimalism',technical:'Technical / Laboratory'},spacing:{compact:'Compact',balanced:'Balanced',airy:'Spacious'},corners:{square:'Sharp geometry',soft:'Soft corners',rounded:'Rounded'},nav:{line:'Understated',pill:'Pill navigation',boxed:'High contrast'},cards:{elevated:'Elevated',outlined:'Outlined',flat:'Flat / Tinted'},portrait:{natural:'Natural color',monochrome:'Monochrome',toned:'Warm toned',circle:'Circular portrait'},texture:{none:'Clean',glow:'Soft glow',grid:'Technical grid',dots:'Micro dots'},motion:{subtle:'Subtle motion',off:'No animation'},size:{compact:'Compact text',normal:'Balanced text',large:'Large text'},width:{narrow:'Focused / narrow',standard:'Reference width',wide:'Expansive / wide'},buttons:{classic:'Classic buttons',solid:'Bold solid buttons',underlined:'Minimal links'},intro:{compact:'Compact introduction',balanced:'Balanced reference',grand:'Grand statement'},sections:{'research-first':'Research first','news-first':'News first','lab-first':'Laboratory first'},header:{static:'Classic header',sticky:'Sticky navigation'},art:{natural:'Natural scientific art',monochrome:'Monochrome art',saturated:'Vivid scientific art'}};
const presets=[
 {id:'reference',name:'Original Reference',desc:'Version 06 · polished · academic',color:'reference',items:{palette:'reference',font:'modern',hero:'split',style:'showcase',spacing:'balanced',corners:'soft',nav:'line',cards:'elevated',portrait:'natural',texture:'glow',motion:'subtle',size:'normal',width:'standard',buttons:'classic',intro:'balanced',sections:'research-first',header:'static',art:'natural'}},
 {id:'blueprint',name:'Science Blueprint',desc:'Light blue · structured · bold',color:'sapphire',items:{palette:'sapphire',font:'scientific',hero:'reverse',style:'technical',spacing:'compact',corners:'square',nav:'boxed',cards:'outlined',portrait:'monochrome',texture:'grid',motion:'subtle',size:'normal',width:'wide',buttons:'solid',intro:'balanced',sections:'research-first',header:'sticky',art:'monochrome'}},
 {id:'formal',name:'Formal Academic',desc:'Light neutral · editorial · timeless',color:'stone',items:{palette:'stone',font:'prestige',hero:'centered',style:'minimal',spacing:'airy',corners:'square',nav:'line',cards:'flat',portrait:'natural',texture:'none',motion:'off',size:'large',width:'narrow',buttons:'underlined',intro:'grand',sections:'research-first',header:'static',art:'monochrome'}},
 {id:'coastal',name:'Coastal Laboratory',desc:'White · marine · approachable',color:'ocean',items:{palette:'ocean',font:'friendly',hero:'split',style:'showcase',spacing:'airy',corners:'rounded',nav:'pill',cards:'elevated',portrait:'natural',texture:'glow',motion:'subtle',size:'normal',width:'standard',buttons:'solid',intro:'balanced',sections:'lab-first',header:'sticky',art:'natural'}},
 {id:'newsdesk',name:'Research Newsroom',desc:'Editorial · informative · structured',color:'burgundy',items:{palette:'burgundy',font:'heritage',hero:'magazine',style:'editorial',spacing:'balanced',corners:'square',nav:'line',cards:'outlined',portrait:'toned',texture:'none',motion:'subtle',size:'normal',width:'wide',buttons:'underlined',intro:'grand',sections:'news-first',header:'sticky',art:'monochrome'}},
 {id:'deepsea',name:'Deep Sea Institute',desc:'Dark marine · distinctive · refined',color:'deep-ocean',items:{palette:'deep-ocean',font:'geometric',hero:'reverse',style:'technical',spacing:'airy',corners:'soft',nav:'pill',cards:'outlined',portrait:'natural',texture:'grid',motion:'subtle',size:'large',width:'wide',buttons:'solid',intro:'grand',sections:'lab-first',header:'sticky',art:'saturated'}},
 {id:'signature',name:'Academic Signature',desc:'Minimal · classic · elegant',color:'stone',items:{palette:'stone',font:'classic',hero:'reverse',style:'minimal',spacing:'airy',corners:'square',nav:'line',cards:'outlined',portrait:'monochrome',texture:'none',motion:'subtle',size:'normal'}},
 {id:'ocean',name:'Ocean Research',desc:'Fresh · light · contemporary',color:'arctic',items:{palette:'arctic',font:'modern',hero:'split',style:'showcase',spacing:'balanced',corners:'soft',nav:'line',cards:'elevated',portrait:'natural',texture:'glow',motion:'subtle',size:'normal'}},
 {id:'institute',name:'The Institute',desc:'Serious · editorial · credible',color:'forest',items:{palette:'forest',font:'heritage',hero:'magazine',style:'editorial',spacing:'balanced',corners:'square',nav:'boxed',cards:'outlined',portrait:'natural',texture:'none',motion:'subtle',size:'normal'}},
 {id:'futurist',name:'Future Laboratory',desc:'Technical · bold · precise',color:'cobalt',items:{palette:'cobalt',font:'scientific',hero:'split',style:'technical',spacing:'compact',corners:'soft',nav:'pill',cards:'flat',portrait:'natural',texture:'grid',motion:'subtle',size:'normal'}},
 {id:'warm',name:'Warm Editorial',desc:'Inviting · cultured · refined',color:'clay',items:{palette:'clay',font:'editorial',hero:'reverse',style:'editorial',spacing:'airy',corners:'square',nav:'line',cards:'flat',portrait:'toned',texture:'none',motion:'off',size:'large'}},
 {id:'graphite',name:'Midnight Professor',desc:'Cinematic · premium · dark',color:'graphite',items:{palette:'graphite',font:'prestige',hero:'magazine',style:'showcase',spacing:'airy',corners:'soft',nav:'pill',cards:'elevated',portrait:'monochrome',texture:'glow',motion:'subtle',size:'large'}},
 {id:'juniper',name:'Green Contemporary',desc:'Natural · calm · scientific',color:'mint',items:{palette:'mint',font:'friendly',hero:'centered',style:'showcase',spacing:'balanced',corners:'rounded',nav:'pill',cards:'elevated',portrait:'natural',texture:'dots',motion:'subtle',size:'normal'}},
 {id:'indigo',name:'Art of Research',desc:'Graphic · expressive · distinct',color:'indigo',items:{palette:'indigo',font:'geometric',hero:'magazine',style:'showcase',spacing:'balanced',corners:'soft',nav:'boxed',cards:'outlined',portrait:'natural',texture:'grid',motion:'subtle',size:'large'}}
];
const defaults={};Object.keys(choices).forEach(k=>{defaults[k]=choices[k].includes(root.dataset[k])?root.dataset[k]:choices[k][0]});
const STORAGE='alireza-jalali-site-v8-design'; const SLOT_PREFIX='alireza-jalali-v8-slot-';
function readStore(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(_){return null}}
function saveStore(k,value){try{localStorage.setItem(k,JSON.stringify(value));return true}catch(_){return false}}
function clean(obj,base=defaults){const out={...base};if(!obj||typeof obj!=='object')return out;Object.keys(choices).forEach(k=>{if(typeof obj[k]==='string'&&choices[k].includes(obj[k]))out[k]=obj[k]});return out}
function parseLink(){try{const q=new URLSearchParams(location.search).get('look');if(!q||q.length>3000)return null;const json=atob(q.replace(/-/g,'+').replace(/_/g,'/'));return JSON.parse(json)}catch(_){return null}}
let current=clean(parseLink()||readStore(STORAGE));let activeTab='presets';let panelOpened=false;

function hexMix(a,b,t){const u=x=>[1,3,5].map(i=>parseInt(x.slice(i,i+2),16)),A=u(a),B=u(b);return '#'+A.map((v,i)=>Math.round(v*(1-t)+B[i]*t).toString(16).padStart(2,'0')).join('')}
function updateTheme(){
 const p=paletteData.find(x=>x[0]===current.palette)||paletteData[0],dark=p[5]==='dark';
 const primary=p[2],accent=p[3],back=p[4],white='#FFFFFF',black='#121E2F';
 const tokens={
 '--v-primary':primary,'--v-accent':accent,'--v-bg':dark?back:hexMix(back,white,.66),
 '--v-hero':dark?hexMix(back,primary,.09):back,
 '--v-surface':dark?hexMix(back,white,.075):white,
 '--v-surface-alt':dark?hexMix(back,white,.12):hexMix(back,primary,.035),
 '--v-faint':dark?hexMix(back,white,.13):hexMix(back,primary,.075),
 '--v-line':dark?hexMix(back,white,.23):hexMix(back,primary,.15),
 '--v-text':dark?'#E4EFF6':black,
 '--v-heading':dark?'#F5FAFE':hexMix(black,primary,.16),
 '--v-muted':dark?'#A7BAC7':'#5E6F82',
 '--v-subtle':dark?'#C1D1DC':'#4E6580',
 '--v-primary-ink':dark?'#0C2331':'#FFFFFF',
 '--v-panel-ink':dark?'#DDF0FA':'#FFFFFF',
 '--v-surface-shadow':dark?'0 16px 38px #0003':'0 14px 35px #13293a10',
 '--v-hero-glow':dark?hexMix(back,accent,.24):hexMix(back,accent,.11),
 '--v-collab-start':dark?hexMix(back,primary,.35):primary,
 '--v-collab-end':dark?hexMix(back,accent,.35):hexMix(primary,accent,.40),
 '--v-link':dark?accent:primary,
 '--v-accent-soft':dark?hexMix(back,primary,.23):hexMix(back,primary,.12)
 };
 Object.entries(tokens).forEach(([key,value])=>root.style.setProperty(key,value));
 root.dataset.theme=dark?'dark':'light';
 const colorMeta=document.querySelector('meta[name="theme-color"]');if(colorMeta)colorMeta.content=back;
}
const originalSections={};document.querySelectorAll('#home-main [data-home-section]').forEach(el=>originalSections[el.dataset.homeSection]=el);
function reorderSections(){const parent=document.getElementById('home-main');if(!parent)return;
 let order=current.sections==='news-first'?['updates','selected','collab']:current.sections==='lab-first'?['collab','selected','updates']:['selected','collab','updates'];
 order.forEach(key=>{if(originalSections[key])parent.appendChild(originalSections[key])});
}

function apply(next,save=true){current=clean(next);Object.entries(current).forEach(([k,v])=>root.dataset[k]=v);updateTheme();reorderSections();if(save)saveStore(STORAGE,current);refreshDock();if(panelOpened)renderPanel()}
function refreshDock(){document.querySelectorAll('.dock-button').forEach(b=>b.classList.toggle('is-current',b.dataset.openTab===activeTab && panelOpened))}
apply(current,true);
const dock=document.getElementById('studio-dock'),panel=document.getElementById('studio-panel'),backdrop=document.getElementById('studio-backdrop'),panelBody=document.getElementById('studio-body'),status=document.getElementById('studio-status'),tabs=document.querySelectorAll('[data-tab]');
const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function heading(title,desc){return `<h3>${title}</h3><p class="studio-help">${desc}</p>`}
function sectionTitle(text){return `<div class="studio-section-title">${text}</div>`}
function optionButtons(key,description){return sectionTitle(description||key.toUpperCase())+`<div class="option-grid">${choices[key].map(v=>`<button class="option-btn ${current[key]===v?'is-selected':''}" type="button" data-set="${key}" data-value="${v}" aria-pressed="${current[key]===v}"><strong>${labels[key][v]}</strong><small>${v==='split'?'Name left, portrait right':v==='reverse'?'Portrait leads the story':v==='centered'?'A balanced central message':v==='magazine'?'Bold asymmetrical cover':''}</small></button>`).join('')}</div>`}
function renderPresets(){return heading('Choose a complete direction','Presets change colors, fonts, layout, card treatment and details together. Fine-tune everything afterward.')+`<div class="preset-grid">${presets.map(p=>{const pal=paletteData.find(x=>x[0]===p.color);const sel=Object.keys(p.items).every(k=>current[k]===p.items[k]);return `<button class="preset-option ${sel?'is-selected':''}" type="button" data-preset="${p.id}" aria-pressed="${sel}"><div class="preset-scene" style="background:${pal[3]}"><div class="lines"><i style="background:${pal[1]}"></i><i style="background:${pal[1]};opacity:.4"></i><i style="background:${pal[2]}"></i></div><div class="shape" style="background:linear-gradient(140deg,${pal[1]},${pal[2]})"></div></div><strong>${p.name}</strong><small>${p.desc}</small></button>`}).join('')}</div><div class="studio-note">Tip: Color, type, page composition and details remain independently adjustable after choosing a preset.</div><button type="button" class="studio-action-btn" data-action="randomize">Surprise me with a curated combination ↗</button>`}
function renderColors(){return heading('Color laboratory','Explore 22 light palettes and four dark palettes. Backgrounds, buttons, borders, highlights and cards change together.')+sectionTitle('LIGHT PALETTES · 22')+renderPalette('light')+sectionTitle('DARK PALETTES · 4')+renderPalette('dark')}
function renderPalette(group){return `<div class="palette-grid">${paletteData.filter(p=>p[5]===group).map(p=>`<button type="button" class="palette-option ${current.palette===p[0]?'is-selected':''}" data-set="palette" data-value="${p[0]}" aria-pressed="${current.palette===p[0]}"><span class="palette-swatch" aria-hidden="true"><i style="background:${p[3]}"></i><i style="background:${p[1]}"></i></span><span><strong>${p[1]}</strong><small>${p[5]==='light'?'Light / airy':'Dark / immersive'}</small></span></button>`).join('')}</div>`}
function renderFonts(){return heading('The typography library','Eight real font pairings. Headings, body copy, page titles, buttons and navigation update across the entire site.')+`<div>${fontData.map(f=>`<button type="button" class="font-option ${current.font===f[0]?'is-selected':''}" data-set="font" data-value="${f[0]}" aria-pressed="${current.font===f[0]}"><span class="font-sample" style="font-family:'${f[2]}',Georgia,serif">Ag</span><span><strong>${f[1]}</strong><small>${f[2]} + ${f[3]}</small></span></button>`).join('')}</div>`}
function renderLayout(){return heading('Page composition','Change the actual placement and hierarchy of the professor profile, research modules and navigation.')+optionButtons('hero','HERO COMPOSITION')+optionButtons('style','WHOLE-SITE DESIGN LANGUAGE')+optionButtons('nav','NAVIGATION TREATMENT')}
function renderDetails(){return heading('Fine-tune the details','Control the presentation of content, photography and motion, rather than just changing a single accent color.')+optionButtons('spacing','PAGE SPACING')+optionButtons('corners','SHAPE LANGUAGE')+optionButtons('cards','RESEARCH CARD TREATMENT')+optionButtons('portrait','PROFESSOR PORTRAIT')+optionButtons('texture','BACKGROUND TEXTURE')+optionButtons('size','TYPOGRAPHIC SCALE')+optionButtons('motion','MOTION & ACCESSIBILITY')}
function renderAdvanced(){return heading('Beyond colors and type','Additional controls reshape the overall scale, page rhythm and image treatment. Try combinations to discover a signature design.')+optionButtons('width','CONTENT WIDTH')+optionButtons('intro','HERO SCALE')+optionButtons('buttons','BUTTON DESIGN')+optionButtons('sections','HOMEPAGE SECTION ORDER')+optionButtons('header','HEADER BEHAVIOR')+optionButtons('art','RESEARCH IMAGERY')+'<div class="studio-note">Reordering sections changes the homepage itself; other choices apply across internal pages too. These changes are included in saved links and JSON exports.</div>'}
function getSummary(){return ['Professor website — Design Version 08','Palette: '+current.palette,'Font pairing: '+current.font,'Hero layout: '+current.hero,'Site style: '+current.style,'Spacing: '+current.spacing,'Corners: '+current.corners,'Navigation: '+current.nav,'Cards: '+current.cards,'Portrait: '+current.portrait,'Texture: '+current.texture,'Motion: '+current.motion,'Text scale: '+current.size,'Content width: '+current.width,'Buttons: '+current.buttons,'Hero scale: '+current.intro,'Section order: '+current.sections,'Header: '+current.header,'Artwork: '+current.art].join('\n')}
function renderSave(){return heading('Save your favorite look','Your choices are saved automatically in this browser. Keep four alternatives, share a link or export a configuration file for the final site.')+sectionTitle('SAVE FOUR FAVORITES')+`<div class="slot-buttons">${['A','B','C','D'].map(x=>{const slot=readStore(SLOT_PREFIX+x);return `<button type="button" class="slot-btn" data-action="save-slot" data-slot="${x}">Save look ${x}<small>${slot?slot.palette+' · '+slot.font:'Empty slot'}</small></button>`}).join('')}${['A','B','C','D'].map(x=>{const slot=readStore(SLOT_PREFIX+x);return `<button type="button" class="slot-btn" data-action="load-slot" data-slot="${x}" ${slot?'':'disabled'}>Load look ${x}<small>${slot?'Apply saved look':'No look saved'}</small></button>`}).join('')}</div>`+sectionTitle('SHARE OR EXPORT')+`<div class="studio-actions"><button type="button" class="studio-action-btn primary" data-action="copy-link">Copy shareable design link <span>↗</span></button><button type="button" class="studio-action-btn" data-action="download-json">Download design settings (.json) <span>↓</span></button><button type="button" class="studio-action-btn" data-action="copy-summary">Copy design summary <span>⧉</span></button><button type="button" class="studio-action-btn" data-action="mobile-preview">Preview this look at 390px <span>▣</span></button><button type="button" class="studio-action-btn" data-action="focus">Presentation mode — hide tools <span>↗</span></button></div>`+sectionTitle('YOUR CURRENT SELECTION')+`<pre class="studio-summary">${escapeHtml(getSummary())}</pre><div class="studio-note"><strong>How the final design is chosen:</strong> share the generated link or downloaded JSON with the website editor. A saved browser preference changes your preview only; the published default can also be set in Pages CMS under “Design Defaults”.</div>`}
function renderPanel(){if(!panelBody)return;tabs.forEach(t=>{const selected=t.dataset.tab===activeTab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1});let content={presets:renderPresets,colors:renderColors,fonts:renderFonts,layout:renderLayout,details:renderDetails,advanced:renderAdvanced,save:renderSave}[activeTab]();panelBody.innerHTML=content;refreshDock()}
function open(tab='presets'){activeTab=tab;panelOpened=true;panel.classList.add('is-open');panel.setAttribute('aria-hidden','false');backdrop.hidden=false;body.style.overflow='hidden';renderPanel();panel.focus();}
function close(){panelOpened=false;panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');backdrop.hidden=true;body.style.overflow='';refreshDock()}
function setStatus(message){if(status)status.textContent=message}
function encodedLink(){const u=new URL(location.href);u.searchParams.delete('design_preview');u.searchParams.set('look',btoa(JSON.stringify(current)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''));return u.toString()}
function copy(text){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text);const area=document.createElement('textarea');area.value=text;area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();let ok=false;try{ok=document.execCommand('copy')}catch(_){ok=false}area.remove();return ok?Promise.resolve():Promise.reject(new Error('Copy not supported'))}
function download(){const json=JSON.stringify({version:8,project:'Dr. Alireza Jalali — Academic Design Selector',design:current},null,2);const blob=new Blob([json],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='alireza-jalali-selected-design-v8.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
const previewModal=document.getElementById('device-modal'),previewIframe=document.getElementById('device-iframe');
function openPreview(){close();const u=new URL(location.href);u.searchParams.set('look',encodedLink().split('look=')[1].split('&')[0]);u.searchParams.set('design_preview','1');previewIframe.src=u.toString();previewModal.hidden=false;body.style.overflow='hidden'}
function closePreview(){previewModal.hidden=true;previewIframe.removeAttribute('src');body.style.overflow=''}
const actions={
 reset:()=>{apply(defaults);setStatus('Factory defaults restored')},
 randomize:()=>{const p=presets[Math.floor(Math.random()*presets.length)];apply({...defaults,...p.items});setStatus('Applied '+p.name)},
 'copy-link':()=>copy(encodedLink()).then(()=>setStatus('Shareable URL copied')).catch(()=>setStatus('Copy unavailable: use Download JSON')),
 'copy-summary':()=>copy(getSummary()).then(()=>setStatus('Design summary copied')).catch(()=>setStatus('Copy not supported here')),
 'download-json':()=>{download();setStatus('Design settings downloaded')},
 'save-slot':el=>{if(saveStore(SLOT_PREFIX+el.dataset.slot,current)){setStatus('Look '+el.dataset.slot+' saved');renderPanel()}else setStatus('Browser storage is unavailable')},
 'load-slot':el=>{const v=readStore(SLOT_PREFIX+el.dataset.slot);if(v){apply(v);setStatus('Look '+el.dataset.slot+' loaded')}},
 'mobile-preview':openPreview,
 'close-preview':closePreview,
 focus:()=>{close();body.classList.add('focus-mode');document.getElementById('studio-reveal').hidden=false},
 'exit-focus':()=>{body.classList.remove('focus-mode');document.getElementById('studio-reveal').hidden=true;open('presets')}
};
// All controls are functional and can be operated with pointer, keyboard or touch.
document.addEventListener('click',event=>{
 const target=event.target.closest('button');if(!target)return;
 if(target.dataset.openTab){open(target.dataset.openTab);return}
 if(target.dataset.tab){activeTab=target.dataset.tab;renderPanel();panelBody.scrollTop=0;return}
 if(target.dataset.set){apply({...current,[target.dataset.set]:target.dataset.value});setStatus(labels[target.dataset.set]?.[target.dataset.value]||'Selection applied');return}
 if(target.dataset.preset){const p=presets.find(x=>x.id===target.dataset.preset);if(p){apply({...defaults,...p.items});setStatus(p.name+' applied')}return}
 if(target.dataset.action&&actions[target.dataset.action])actions[target.dataset.action](target);
});
document.getElementById('studio-close').addEventListener('click',close);backdrop.addEventListener('click',close);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!previewModal.hidden)closePreview();else if(panelOpened)close();else document.querySelectorAll('details[open]').forEach(x=>x.open=false)}if(e.key.toLowerCase()==='d'&&e.shiftKey&&!e.altKey&&!e.ctrlKey&&!e.metaKey){e.preventDefault();open('presets')}});
const menu=document.getElementById('menu-toggle'),nav=document.getElementById('nav-items');if(menu&&nav){function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(o))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));window.addEventListener('resize',()=>{if(innerWidth>800)closeMenu()})}
const input=document.querySelector('#publication-search'),buttons=[...document.querySelectorAll('.year-btn')],papers=[...document.querySelectorAll('[data-paper]')],paperStatus=document.querySelector('#publication-status'),none=document.querySelector('#paper-no-results');if(input&&papers.length){let year='all';const filter=()=>{let count=0;const q=input.value.trim().toLowerCase();papers.forEach(p=>{const show=(year==='all'||p.dataset.year===year)&&(!q||(p.dataset.search||'').toLowerCase().includes(q));p.hidden=!show;if(show)count++});if(paperStatus)paperStatus.textContent=count+' publications displayed';if(none)none.hidden=count>0};input.addEventListener('input',filter);buttons.forEach(b=>b.addEventListener('click',()=>{year=b.dataset.year;buttons.forEach(x=>{const active=x===b;x.classList.toggle('is-active',active);x.setAttribute('aria-pressed',String(active))});filter()}));filter()}
if(new URLSearchParams(location.search).has('design_preview'))body.classList.add('embedded-preview');
})();
