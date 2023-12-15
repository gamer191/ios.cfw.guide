import{_ as s,r as t,o as l,c as n,a as e,b as i,d as o,w as c,e as d}from"./app.a3f68530.js";const u={},p=e("h2",{id:"osservazioni",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#osservazioni","aria-hidden":"true"},"#"),i(" Osservazioni")],-1),h={href:"https://gist.github.com/aac55c97f7925cddcf5ec3167f85dfe8",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"requisiti",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),i(" Requisiti")],-1),g=e("ul",null,[e("li",null,"I blobs salvati per la versione alla quale si desidera ripristinare"),e("li",null,"Un dispositivo jailbroken")],-1),b=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),i(" Download")],-1),v={href:"https://github.com/CoocooFroggy/FutureRestore-GUI/releases",target:"_blank",rel:"noopener noreferrer"},_={href:"https://ipsw.me",target:"_blank",rel:"noopener noreferrer"},f=e("ul",null,[e("li",null,"Scarica la stessa versione di iOS del tuo blob")],-1),S={href:"https://www.apple.com/itunes/",target:"_blank",rel:"noopener noreferrer"},w=e("ul",null,[e("li",null,"Scorri verso il basso e seleziona l'altra build di Windows siccome la versione di Microsoft Store non funzioner\xE0")],-1),x=e("h2",{id:"cominciamo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cominciamo","aria-hidden":"true"},"#"),i(" Cominciamo!")],-1),k=e("li",null,"Apri il gestore di pacchetti sul tuo dispositivo jailbroken",-1),F={href:"https://repo.1conan.com",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,"Scarica e installa dimentio",-1),C=e("li",null,"Scarica e installa NewTerm2",-1),N=d('<h2 id="impostare-il-nonce" tabindex="-1"><a class="header-anchor" href="#impostare-il-nonce" aria-hidden="true">#</a> Impostare il nonce</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se stai usando unc0ver su iOS 14.6-14.8, non puoi usare dimentio siccome libkrw non funziona. Dovresti invece impostare il tuo generatore dalle impostazioni di unc0ver.</p></div><ol><li><p>Apri il tuo blob in un editor di testo e cerca <code>generator</code> <img src="https://user-images.githubusercontent.com/48022799/117004373-aa0b6700-acee-11eb-8a70-c488163e349b.jpeg" alt="Esempio di Generator"></p></li><li><p>Annota il valore all&#39;interno del campo <code>&lt;string&gt;</code></p><ul><li>Dovrebbe essere <code>0x</code> seguito da 16 caratteri che saranno una combinazione di lettere e numeri. Questo \xE8 il tuo generator.</li></ul></li></ol><p><strong>N.B:</strong> Se non \xE8 presente alcun valore, prova a ricordare quale jailbreak stavi usando al momento del salvataggio dei blobs. Se stavi usando unc0ver, il tuo generator molto probabilmente \xE8 <code>0x1111111111111111</code>, se stavi usando Chimera/Odyssey/Taurine, il tuo generator molto probabilmente \xE8 <code>0xbd34a880be0b53f3</code></p><ol start="3"><li><p>Apri NewTerm 2 sul tuo dispositivo e digita il seguente comando, dove <code>[generator]</code> \xE8 il valore che hai appena ottenuto: <code>su root -c &#39;dimentio [generator]&#39;</code></p></li><li><p>Quando viene richiesta una password, inserisci la password di root</p><ul><li>Quella predefinita \xE8 impostata su <code>alpine</code>, non \xE8 la password del tuo telefono.</li></ul></li><li><p>Una volta eseguito il comando, dovrebbe comparire del testo</p></li><li><p>Vicino alla fine del testo, dovresti vedere la riga <code>Set nonce to [generator]</code></p></li></ol><h3 id="su-computer" tabindex="-1"><a class="header-anchor" href="#su-computer" aria-hidden="true">#</a> Su Computer</h3><ol><li><p>Connetti il dispositivo al tuo computer</p></li><li><p>Assicurati che il tuo computer sia autorizzato dal tuo dispositivo</p><ul><li>Opzionalmente, \xE8 possibile creare un backup completo del dispositivo tramite iTunes o Finder</li></ul></li><li><p>Apri FutureRestoreGUI sul tuo computer</p><ul><li>Se richiesto da Windows Defender o un altro software anti-virus, consenti al programma di essere eseguito - \xE8 sicuro</li></ul></li><li><p>Quando apri FutureRestoreGUI, ti dovrebbe essere presentato questo menu: <img src="https://user-images.githubusercontent.com/48022799/147845013-73dbda5b-500d-4f5a-ae51-3751d9268fe6.png" alt="immagine"></p></li><li><p>Clicca sul pulsante <code>Download FutureRestore</code> per ottenere l&#39;ultima versione di FutureRestore ** N.B:** Se il tuo dispositivo supporta iOS 15 o \xE8 un iPad WiFi-only, dovrai cliccare sul pulsante <code>Settings</code> e abilitare <code>Futurerestore Beta</code>, poi clicca sul pulsante <code>Download FutureRestore</code>. Questa versione di futurerestore <strong>richiede</strong> macOS o Linux.</p></li><li><p>Fai clic sul pulsante <code>Select Blob File...</code> e seleziona il file blob .shsh2</p></li><li><p>Fai clic su <code>Select Target iPSW File...</code> e seleziona il tuo file .ipsw</p></li><li><p>Dopo fai clic sul pulsante Next per passare al menu Options, assicurati che <code>Extra Logs</code> sia abilitato</p></li><li><p>Se non sei in fase di downgrading, \xE8 sicuro abilitare <code>Preserve Data</code> nel menu delle opzioni per conservare i dati. Tuttavia usarlo durante il downgrade pu\xF2 essere rischioso</p></li><li><p>Non abilitare <code>AP Nonce Collision</code> su qualsiasi dispositivo moderno</p></li><li><p>Fai clic su Next per passare al menu Controls</p></li><li><p>Clicca <code>Start Futurerestore</code></p></li></ol>',7),A={href:"https://discord.gg/9apvC4C3CC",target:"_blank",rel:"noopener noreferrer"};function O(D,I){const a=t("ExternalLinkIcon"),r=t("router-link");return l(),n("div",null,[p,e("p",null,[i("Se sei su iOS 15, dovrai invece seguire "),e("a",h,[i("questa"),o(a)]),i(" guida. Nota che se sei su iOS 15 e sei su un dispositivo A12+, non sarai in grado di eseguire un downgrade, siccome attualmente non c'\xE8 un jailbreak o un exploit che pu\xF2 essere utilizzato per impostare il nonce sui dispositivi A12+ che eseguono iOS 15.")]),m,g,b,e("ul",null,[e("li",null,[i("L'ultima versione di "),e("a",v,[i("FutureRestore-GUI"),o(a)])]),e("li",null,[i("Il file iPSW per il tuo dispositivo da "),e("a",_,[i("ipsw.me"),o(a)]),f]),e("li",null,[i("Su Windows, assicurati di avere installato "),e("a",S,[i("iTunes"),o(a)]),w])]),x,e("ol",null,[k,e("li",null,[i("Aggiungi "),e("a",F,[i("repo.1conan.com"),o(a)]),i(" alle sorgenti")]),z,C]),N,e("p",null,[i("Se si verificano problemi durante il processo, controlla la "),o(r,{to:"/it_IT/futurerestore-help"},{default:c(()=>[i("pagina di aiuto di Futurerestore")]),_:1}),i(", se ancora non riesci a trovare una soluzione, chiedi aiuto nel canale #futurerestore-help sul "),e("a",A,[i("Server Discord"),o(a)]),i(" di r/jailbreak.")])])}var T=s(u,[["render",O],["__file","index.html.vue"]]);export{T as default};
