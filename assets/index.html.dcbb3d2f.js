import{_ as r}from"./sideloadly_win.6263388d.js";import{_ as s,r as i,o as d,c as p,a as e,b as o,d as t,w as l,e as c}from"./app.a3f68530.js";const u={},h=e("p",null,"openpwnage is capable of jailbreaking all 32bit devices on firmware versions 8.4b4 to 9.3.6.",-1),g=e("p",null,"Note that the openpwnage jailbreak is not \u201Cpersistent\u201D (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.",-1),w=e("p",null,"Due to how custom applications are installed to the device, in most cases you will need to reinstall the openpwnage jailbreak application to your device every 7 days from your computer.",-1),_=e("p",null,"We will use the Sideloadly tool to install the openpwnage jailbreak application to your iOS device for use in the next step.",-1),m=e("h2",{id:"downloads",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),o(" Downloads")],-1),f=e("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[e("p",null,[o(" openpwnage is currently signed at "),e("a",{href:"https://jailbreaks.app/legacy.html",target:"_blank"},"jailbreaks.app"),o(" for easy installation without a computer. ")])],-1),y={href:"https://github.com/0xilis/openpwnage",target:"_blank",rel:"noopener noreferrer"},b={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},k=c('<p><img src="'+r+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the openpwnage <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your iOS version, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The openpwnage application can now be opened from home screen.</p><h2 id="running-openpwnage" tabindex="-1"><a class="header-anchor" href="#running-openpwnage" aria-hidden="true">#</a> Running openpwnage</h2><ol><li>Open the openpwnage application from your home screen</li><li>Tap <code>Jailbreak</code></li></ol><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If your device crashes or restarts unexpectedly and the jailbreak isn&#39;t installed, simply try running the exploit again until it does work.</p></div>',10),x={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"TIP",-1);function I(T,D){const n=i("ExternalLinkIcon"),a=i("router-link");return d(),p("div",null,[h,g,w,_,m,f,e("ul",null,[e("li",null,[o("The latest version of "),e("a",y,[o("openpwnage"),t(n)])]),e("li",null,[o("The latest version of "),e("a",b,[o("Sideloadly"),t(n)])]),e("li",null,[o("The latest version of "),e("a",v,[o("iTunes"),t(n)]),o(" if on Windows")])]),k,e("p",null,[o("You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install "),t(a,{to:"/faq/#what-are-tweaks"},{default:l(()=>[o("tweaks")]),_:1}),o(", themes and more.")]),e("div",x,[S,e("p",null,[o("If you wish to use a more modern package manager, and are on iOS 9, continue to "),t(a,{to:"/installing-zebra"},{default:l(()=>[o("Installing Zebra")]),_:1})])])])}var A=s(u,[["render",I],["__file","index.html.vue"]]);export{A as default};
