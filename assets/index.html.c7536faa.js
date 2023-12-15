import{_ as u,r as l,o as c,c as d,a as e,b as n,d as t,w as o,e as h}from"./app.a3f68530.js";const p={},_=h('<p>palera1n is a work-in-progress jailbreak that is compatible with A11 (iPhone X) and earlier devices on iOS 15.0 or later, with some caveats for A11 devices.</p><p>On A11 devices, you <strong>must disable your passcode</strong> and will not be able to use your passcode, or other SEP functionality, until you boot into a stock iOS state. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.</p><p>Additionally, if your device is an A11 device on iOS 16 and you&#39;ve set a passcode before, you will need to <strong>erase all content and settings</strong> in order to be able to jailbreak.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>While palera1n currently supports iPadOS 17.2, App Store apps <strong>will crash on launch</strong> while in a jailbroken state.</p><p>You are highly encouraged to remain on iPadOS 17.1.2 and earlier or restore to iPadOS 17.1.2 if you have already updated until a palera1n update is released.</p></div>',4),g={class:"custom-container warning"},m=e("p",{class:"custom-container-title"},"WARNING",-1),y={class:"custom-container warning"},f=e("p",{class:"custom-container-title"},"WARNING",-1),w=e("h2",{id:"installing-the-jailbreak",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-the-jailbreak","aria-hidden":"true"},"#"),n(" Installing the jailbreak")],-1),b=e("p",null,"Please select your operating system:",-1),v=e("h3",{id:"installing-palera1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-palera1n","aria-hidden":"true"},"#"),n(" Installing palera1n")],-1),k=e("ol",null,[e("li",null,"Open a terminal window"),e("li",null,[n("Run "),e("code",null,'sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"')])],-1),I=e("h3",{id:"running-palera1n",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-palera1n","aria-hidden":"true"},"#"),n(" Running palera1n")],-1),S=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),e("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1),A=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,[n("If you're using an Apple Silicon Mac and using a USB-C port to plug your cable/adapter into, you'll need to unplug and replug the device after "),e("code",null,"Checkmate!"),n(" appears in the logs.")])],-1),x=e("li",null,[n("Run "),e("code",null,"palera1n"),e("ul",null,[e("li",null,"Make sure your device is plugged in when entering this command")])],-1),R=e("code",null,"Enter",-1),N=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),e("ol",null,[e("li",null,[n("In the terminal window, press "),e("code",null,"Control"),n(" + "),e("code",null,"C"),n(" on your keyboard")]),e("li",null,"Rerun the command that you just ran")]),e("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1),U={class:"custom-container danger"},O=e("p",{class:"custom-container-title"},"DANGER",-1),j=e("p",null,"Depending on the Linux distribution you are using, you may run into issues with the latest version (2.0.0b8) of palera1n.",-1),C=e("p",null,"If you do run into issues, you have three options:",-1),P=e("li",null,"Obtain a Mac and follow the macOS tab instead.",-1),T=e("strong",null,"If you are trying to jailbreak a 15.0 to 16.7.2 device",-1),B={href:"https://github.com/palera1n/palera1n/releases/tag/v2.0.0-beta.7",target:"_blank",rel:"noopener noreferrer"},W=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"DANGER"),e("p",null,"If you are trying to use a Virtual Machine software of some sort from Windows (e.g. Virtualbox, VMWare, Windows Subsystem for Linux, etc) you will not succeed with following this guide.")],-1),D=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),L=e("h3",{id:"installing-palera1n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-palera1n-1","aria-hidden":"true"},"#"),n(" Installing palera1n")],-1),E=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a USB-C to Lightning cable to do this process, you may run into issues entering into DFU mode"),e("p",null,"If you do have issues, get a USB-A to Lightning cable and, if necessary, also get a USB-C to USB-A adapter.")],-1),G=e("ol",null,[e("li",null,"Open up a terminal window"),e("li",null,[n("Run "),e("code",null,"sudo systemctl stop usbmuxd")]),e("li",null,[n("Run "),e("code",null,"sudo usbmuxd -f -p")]),e("li",null,"Open up another terminal window"),e("li",null,[n("Run "),e("code",null,'sudo /bin/sh -c "$(curl -fsSL https://static.palera.in/scripts/install.sh)"')])],-1),M=e("h3",{id:"running-palera1n-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-palera1n-1","aria-hidden":"true"},"#"),n(" Running palera1n")],-1),V=e("li",null,[n("Run "),e("code",null,"sudo palera1n"),e("ul",null,[e("li",null,"Make sure your device is plugged in when entering this command")])],-1),F=e("code",null,"Enter",-1),X=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"A9(X) and earlier devices have an issue where they will get stuck midway through this process in pongoOS. To work around this issue, you'll need to do the following:"),e("ol",null,[e("li",null,[n("In the terminal window, press "),e("code",null,"Control"),n(" + "),e("code",null,"C"),n(" on your keyboard")]),e("li",null,"Rerun the command that you just ran")]),e("p",null,"You'll need to do this every time you rejailbreak your device as well.")],-1),Y=e("p",null,[n("Once the device boots up, open the palera1n loader app and tap "),e("code",null,"Sileo"),n(". After a bit of time, you'll be prompted to set a passcode for using command line stuff, and then afterwards,"),e("code",null,"Sileo"),n(" should be on your home screen.")],-1),q={class:"custom-container tip"},$=e("p",{class:"custom-container-title"},"TIP",-1),z=e("p",null,"To rejailbreak your device, simply rerun the command you just ran and then repeat any other applicable steps.",-1);function H(J,K){const a=l("router-link"),s=l("Tab"),i=l("ExternalLinkIcon"),r=l("Tabs");return c(),d("div",null,[_,e("div",g,[m,e("p",null,[n("If you are using an old version of palera1n that was tethered, you'll need to "),t(a,{to:"/removing-palera1n-legacy"},{default:o(()=>[n("remove palera1n")]),_:1}),n(" before continuing.")])]),e("div",y,[f,e("p",null,[n("If you are using Windows, you should follow "),t(a,{to:"/using-palen1x"},{default:o(()=>[n("Using palen1x")]),_:1}),n(" instead.")])]),w,b,t(r,{tabs:""},{default:o(()=>[t(s,{tab:"",name:"macOS",default:!0},{default:o(()=>[v,k,I,S,A,e("ol",null,[x,e("li",null,[n("When ready, press "),R,n(" and follow the on screen instructions to enter "),t(a,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[n("DFU mode")]),_:1}),n(".")])]),N]),_:1}),t(s,{tab:"",name:"Linux"},{default:o(()=>[e("div",U,[O,j,C,e("ul",null,[P,e("li",null,[t(a,{to:"/using-palen1x"},{default:o(()=>[n("Use palen1x")]),_:1}),n(" instead, which does not have this issue. ")]),e("li",null,[T,n(", you can manually install "),e("a",B,[n("palera1n 2.0.0b7"),t(i)]),n(" instead.")])])]),W,D,L,E,G,M,e("ol",null,[V,e("li",null,[n("When ready, press "),F,n(" and follow the on screen instructions to enter "),t(a,{to:"/faq/#what-is-dfu-mode"},{default:o(()=>[n("DFU mode")]),_:1}),n(".")])]),X]),_:1})]),_:1}),Y,e("div",q,[$,z,e("p",null,[n("Alternatively, if you are using an A9(X) to A11 device on 15.0 to 15.7.6, you can use "),t(a,{to:"/installing-meowbrek2"},{default:o(()=>[n("meowbrek2")]),_:1}),n(" to rejailbreak as well.")])])])}var Z=u(p,[["render",H],["__file","index.html.vue"]]);export{Z as default};
