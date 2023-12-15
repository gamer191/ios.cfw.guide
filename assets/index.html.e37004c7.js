import{_ as r,r as o,o as n,c as s,a as i,b as e,d as a,w as c,e as d}from"./app.a3f68530.js";const p={},h=i("p",null,"h3lix \xE8 in grado di eseguire il jailbreak di tutti dispositivi iOS a 32 bit con una versione del firmware 10.0-10.3.4.",-1),u=i("p",null,"Tieni a mente che il jailbreak di h3lix non \xE8 \u201Cpersistente\u201D (non rimarr\xE0 installato dopo un riavvio). Sar\xE0 necessario ri-eseguire l\u2019exploit dopo ogni riavvio. Ti verr\xE0 spiegato come fare.",-1),m=i("p",null,"A causa di come le app di terze parti vengono installate sul dispositivo, nella maggior parte dei casi dovrai reinstallare l\u2019app di h3lix sul tuo dispositivo ogni 7 giorni tramite un computer.",-1),v=i("p",null,"Utilizzeremo Sideloadly per installare l\u2019applicazione sul dispositivo e uno script per patchare h3lix.",-1),x=i("h2",{id:"download",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),e(" Download")],-1),_={href:"https://h3lix.tihmstar.net/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/kawaiizenbo/winh3lixpatcher/releases",target:"_blank",rel:"noopener noreferrer"},b=d('<h2 id="patchare-l-applicazione" tabindex="-1"><a class="header-anchor" href="#patchare-l-applicazione" aria-hidden="true">#</a> Patchare l\u2019applicazione</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="macos-e-linux" tabindex="-1"><a class="header-anchor" href="#macos-e-linux" aria-hidden="true">#</a> macOS e Linux</h3><ol><li>Apri il Terminale</li><li>Cambia la directory nella cartella in cui hai salvato lo script e h3lix.ipa <ul><li>Se li hai salvati in download, dovresti digitare <code>cd ~/Downloads</code></li></ul></li><li>Digita <code>./patch.sh</code> nel terminale</li><li>Trascina il file <code>.ipa</code> di h3lix sul terminale</li><li>Digita &quot;h3lix.ipa&quot;</li><li>Premi Invio</li></ol></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><ol><li>Trascina il file ipa di h3lix nel file winh3lixpatcher.exe</li></ol></div><p>Ora hai un ipa di h3lix patchata che puoi firmare</p><h2 id="installazione" tabindex="-1"><a class="header-anchor" href="#installazione" aria-hidden="true">#</a> Installazione</h2><ol><li>Apri Sideloadly</li><li>Connetti il tuo dispositivo iOS al computer <ul><li>Assicurati che il tuo computer sia autorizzato a vedere i contenuti del dispositivo</li></ul></li><li>Trascina il file <code>.ipa</code> di h3lix su Sideloadly</li><li>Inserisci il tuo Apple ID</li><li>Inserisci la tua password <ul><li>Sideloadly deve fare una richiesta al server per funzionare con gli account Apple ID gratuiti. Se non sei d\u2019accordo con ci\xF2, puoi sempre usare un Apple ID alternativo.</li></ul></li></ol><p>L\u2019app verr\xE0 adesso installata sul tuo dispositivo iOS.</p><h2 id="autorizzare-l-applicazione" tabindex="-1"><a class="header-anchor" href="#autorizzare-l-applicazione" aria-hidden="true">#</a> Autorizzare l\u2019applicazione</h2><ol><li>Vai su <code>Impostazioni</code> -&gt; <code>Generali</code> -&gt; <code>Gestione Dispositivo</code> -&gt; <code>&lt;Il tuo Apple ID&gt;</code><ul><li>A seconda del tuo utilizzo, <code>Gestione dispositivo</code> potrebbe apparire come <code>Gestione Profili e Dispositivo</code></li></ul></li><li>Clicca su <code>Autorizza &quot;&lt;Il tuo Apple ID&gt;&quot;</code></li></ol><p>L\u2019applicazione di h3lix adesso pu\xF2 essere aperta dalla home screen.</p><h2 id="eseguire-h3lix" tabindex="-1"><a class="header-anchor" href="#eseguire-h3lix" aria-hidden="true">#</a> Eseguire h3lix</h2><ol><li>Apri l&#39;applicazione di h3lix dalla home screen</li><li>Clicca su \u201CJailbreak\u201D</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se l&#39;applicazione mostra <code>Uicache Failed!</code> significa che il processo di patching non \xE8 stato applicato correttamente e dovresti controllare di aver eseguito correttamente i passaggi sopra</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se il dispositivo crasha o si riavvia inaspettatamente ed il jailbreak non viene installato, prova a far partire l\u2019exploit di nuovo finch\xE9 non funziona.</p></div>',14);function w(k,I){const l=o("ExternalLinkIcon"),t=o("router-link");return n(),s("div",null,[h,u,m,v,x,i("ul",null,[i("li",null,[e("L\u2019ultima versione di "),i("a",_,[e("h3lix"),a(l)])]),i("li",null,[e("L\u2019ultima versione di "),i("a",f,[e("Sideloadly"),a(l)])]),i("li",null,[e("Per macOS e Linux: il "),i("a",g,[e("patcher script"),a(l)]),e(" di Jakeajames")]),i("li",null,[e("Per Windows: "),i("a",z,[e("winh3lixpatcher"),a(l)])])]),b,i("p",null,[e("Adesso dovresti essere jailbroken con Cydia installato nella home screen. Puoi utilizzare Cydia per installare "),a(t,{to:"/it_IT/faq/#what-are-tweaks"},{default:c(()=>[e("tweak")]),_:1}),e(", temi e altro.")])])}var A=r(p,[["render",w],["__file","index.html.vue"]]);export{A as default};
