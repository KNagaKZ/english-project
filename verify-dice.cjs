const {chromium}=require('C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');const assert=require('node:assert/strict');const path=require('node:path');
(async()=>{const browser=await chromium.launch({headless:true,channel:'msedge'});const page=await browser.newPage({viewport:{width:1920,height:1080}});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('file:///'+path.resolve('index.html').replaceAll('\\','/'));await page.locator('#beginBtn').click();
for(let value=1;value<=6;value++){
 await page.evaluate(v=>{state=fresh(state.teams.map(t=>({...t,position:0,laps:0,achievements:[]})),state.config);$('challengeDialog').close();render();Math.random=()=> (v-.5)/6},value);
 await page.locator('#dieBtn').click();await page.waitForTimeout(250);assert.equal(await page.locator('#mapDice').isVisible(),true);assert.equal(await page.locator('#dieBtn').isDisabled(),true);
 if(value===1)await page.screenshot({path:'dice-rolling-preview.png'});
 await page.waitForFunction(v=>$('mapDiceLabel').textContent.includes('You rolled '+v),value);
 assert.equal(await page.evaluate(v=>{const cube=new DOMMatrix(getComputedStyle($('diceCube')).transform);const face=new DOMMatrix(getComputedStyle(document.querySelector(`.dice-face[data-value="${v}"]`)).transform);return cube.multiply(face).m33>.999},value),true);
 assert.equal(await page.locator(`.dice-face[data-value="${value}"] .die-pip`).count(),value);
 if(value===5)await page.screenshot({path:'dice-result-preview.png'});
 await page.waitForFunction(()=>!busy&&!!state.quiz);assert.equal(await page.evaluate(()=>state.roll),value);assert.equal(await page.evaluate(()=>state.teams[0].position),value);assert.equal(await page.locator('#mapDice').isVisible(),false);
 await page.evaluate(()=>{$('undoBtn').onclick();$('challengeDialog').close()});assert.equal(await page.evaluate(()=>state.stage==='ready'&&state.teams[0].position===0),true);
}
await page.emulateMedia({reducedMotion:'reduce'});await page.setViewportSize({width:390,height:844});await page.locator('#dieBtn').click();await page.waitForFunction(()=>$('mapDiceLabel').textContent.includes('You rolled'));assert.equal(await page.locator('#mapDice').isVisible(),true);assert.equal(await page.locator('#mapDice').evaluate(el=>{let r=el.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight}),true);await page.screenshot({path:'mobile-dice-preview.png'});await page.waitForFunction(()=>!busy&&!!state.quiz);assert.deepEqual(errors,[]);console.log('PASS: six 3D face orientations, pip counts, exact matching movements, centre roll visibility, duplicate-roll lock, cleanup, undo and mobile reduced-motion roll.');await browser.close()})().catch(e=>{console.error(e);process.exit(1)});
