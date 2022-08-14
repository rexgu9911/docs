"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4338],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:1},c="Verify DID",d={unversionedId:"guide/verifyDID",id:"guide/verifyDID",title:"Verify DID",description:"1) Verify with Twitter",source:"@site/docs/guide/verifyDID.md",sourceDirName:"guide",slug:"/guide/verifyDID",permalink:"/docs/guide/verifyDID",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/verifyDID.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"View and Update CAT",permalink:"/docs/guide/viewandupdatecat"}},s={},p=[{value:"1) Verify with Twitter",id:"1-verify-with-twitter",level:2},{value:"Collection with add profile icon and banner Link to DID",id:"collection-with-add-profile-icon-and-banner-link-to-did",level:4},{value:"DID creator name shown in collection page Link to Collection",id:"did-creator-name-shown-in-collection-page-link-to-collection",level:4},{value:"2) Verify with domain name",id:"2-verify-with-domain-name",level:2}],u={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"verify-did"},"Verify DID"),(0,o.kt)("h2",{id:"1-verify-with-twitter"},"1) Verify with Twitter"),(0,o.kt)("p",null,"Chia NFT have off chain meta data and it has option to provide twitter handle for the collection.\nThis link of Minter DID and twitter handle from offchain meta data could be used to validate a collection authenticity."),(0,o.kt)("p",null,"The same link between Minter DID and twitter handle in meta data could be used to provide creator DID informations.\nYou have full control of what spacescan shows for that DID and you can update it any time by sendingout a tweet."),(0,o.kt)("p",null,"The Spacescan Tweet bot does below actions when invoked,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validate link between collection and twitter handle then add DID label next to collection"),(0,o.kt)("li",{parentName:"ul"},"Update collection creator profile image"),(0,o.kt)("li",{parentName:"ul"},"Update creator profile banner"),(0,o.kt)("li",{parentName:"ul"},"Update creator name ( This would replace DID alphanumeric identifier and provide authenticity  for the collection) ")),(0,o.kt)("p",null,"To invoke the bot, please Tweet from the handle used for collection this in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"@spacescan_io\n#verifydid\n<DID>\n<Collection Link>\n#didprofile \nname:<Creator Name>\npic:<URI Pic>\nbanner:<URI Banner>\n")),(0,o.kt)("p",null,"Sample tweet - ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/roybotNFT/status/1556833192920899584"},"https://twitter.com/roybotNFT/status/1556833192920899584")),(0,o.kt)("p",null,"Replace the items in < > with the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"<","DID",">"," : This is the DID of the creator of the NFTs"),(0,o.kt)("li",{parentName:"ul"},"Collection Link : This is the spacescan.io URL to your collection"),(0,o.kt)("li",{parentName:"ul"},"<","Creator Name",">"," : This is the name you want to use as the NFT creator"),(0,o.kt)("li",{parentName:"ul"},"<","URI Pic",">"," : URI to pic icon for your DID creator profile page"),(0,o.kt)("li",{parentName:"ul"},"<","URI Banner",">"," : URI to banner image that will appear on your DID creator profile page")),(0,o.kt)("h4",{id:"collection-with-add-profile-icon-and-banner-link-to-did"},"Collection with add profile icon and banner ",(0,o.kt)("a",{parentName:"h4",href:"https://www.spacescan.io/xch/did/fe9bdb9a8e6825580d699faa6160fbd9d5d64a525ac49d174357d68ed0ae194e"},"Link to DID")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Update",src:n(4390).Z,width:"1598",height:"632"})),(0,o.kt)("h4",{id:"did-creator-name-shown-in-collection-page-link-to-collection"},"DID creator name shown in collection page ",(0,o.kt)("a",{parentName:"h4",href:"https://www.spacescan.io/xch/nft/collection/col129ph2rgr3r3f2znqe3x2xj7edhl7we0n3qzphsdf5q3hcr2gyfase5u9qg"},"Link to Collection")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Update",src:n(3218).Z,width:"614",height:"984"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"HINT")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you tweet again with changed ","<","URI",">"," Pic and/or ","<","URI Banner",">"," URIs, it will update your DID creator profile with the new images."))),(0,o.kt)("h2",{id:"2-verify-with-domain-name"},"2) Verify with domain name"),(0,o.kt)("p",null,"We have a bot which checks for DID info in your website domain added in meta data.\nThis action happens only once when the NFT in a collection is processed.\nSo please ensure you would have DID in your domain TXT record.\nFor example, if the website provided in meta is ",(0,o.kt)("a",{parentName:"p",href:"https://www.testdomain.com"},"https://www.testdomain.com"),"\nThen the bot will check for TXT in below domains/sub domains for DID info"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.testdomain.com"},"www.testdomain.com")),(0,o.kt)("li",{parentName:"ul"},"did.testdomain.com"),(0,o.kt)("li",{parentName:"ul"},"testdomains.com")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"HINT")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have added yoru DID into domains after the collection mint process then please reach us in discord / twitter to manually trigger the verification for your NFT collection."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/roybotNFT"},"roybotNFT")," created a guide for this process in our discord and its enlarged here.\nThank you for this guide.")))}m.isMDXComponent=!0},3218:function(e,t,n){t.Z=n.p+"assets/images/Creator-Name-e085dbd7dea549556c7116622d39d992.jpg"},4390:function(e,t,n){t.Z=n.p+"assets/images/URI-Pic-and-Banner-da17e5db677e888cb891cdf4a39bb066.jpg"}}]);