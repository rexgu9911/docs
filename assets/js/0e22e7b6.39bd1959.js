"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5412],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3801:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return h}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={sidebar_position:3},l="Update CAT details",p={unversionedId:"guide/updatecatinfo",id:"guide/updatecatinfo",title:"Update CAT details",description:"CAT information can be updated by clicking the Add Token dropdown present inside the Tokens navigation bar.",source:"@site/docs/guide/updatecatinfo.md",sourceDirName:"guide",slug:"/guide/updatecatinfo",permalink:"/docs/guide/updatecatinfo",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/updatecatinfo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"View and Update CAT",permalink:"/docs/guide/viewandupdatecat"},next:{title:"Padawan Onboarding",permalink:"/docs/Interns/padawan_onboarding"}},d={},c=[{value:"Log in to spacescan.io",id:"log-in-to-spacescanio",level:2},{value:"Udpate your CAT.",id:"udpate-your-cat",level:2},{value:"Mandatory fields",id:"mandatory-fields",level:2},{value:"After Update Success",id:"after-update-success",level:2}],u={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-cat-details"},"Update CAT details"),(0,r.kt)("p",null,"CAT information can be updated by clicking the ",(0,r.kt)("a",{parentName:"p",href:"https://www.spacescan.io/xch/catInfo"},"Add Token")," dropdown present inside the Tokens navigation bar."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Add token nav bar",src:a(4931).Z,width:"627",height:"267"})),(0,r.kt)("p",null,"This page will redirect to the update cat page, if the user is logged in to the spacescan explorer else\nit will redirect the user to the login page. "),(0,r.kt)("h2",{id:"log-in-to-spacescanio"},"Log in to spacescan.io"),(0,r.kt)("p",null,"For logging into spacescan.io website, user needs a valid e-mail id and password.\nwe will send a verfication code to the provided email-id.\nOnce the user is signed up to the spacescan.io website, ",(0,r.kt)("a",{parentName:"p",href:"https://www.spacescan.io/xch/catInfo"},"Add Token")," page will be enabled for the user to edit their CAT details. "),(0,r.kt)("h2",{id:"udpate-your-cat"},"Udpate your CAT."),(0,r.kt)("p",null,"Every CAT has a unique asset id. This asset id is used for updating the CAT information. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide your Asset ID. ")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Asset ID bar",src:a(3169).Z,width:"756",height:"562"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All the other details of the CAT can be updated only after providing a valid asset id. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the asset id is provided, it will undergo a check to verify this CAT is owned by anyone else.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If no user is tagged to this particular CAT asset id, the user can update the CAT with valid details.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If any owner is present for the CAT asset id, the user can only view the details of the CAT with a warning. "))),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Not a owner error",src:a(7506).Z,width:"730",height:"190"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User can edit/update the CAT information only for 5 times. If the user exceeds this limit, the CAT information cannot be\nedited by the user untill it is revoked by the spacescan.io team. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For updating the CAT details beyond the limit, Contact the spacescan.io team at ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/Bb4sj3Bg9P"},"discord"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/spacescan_io"},"twitter")," or at ",(0,r.kt)("inlineCode",{parentName:"p"},"spacescan.io@gmail.com"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Every CAT details require a CAT logo. Without providing a CAT logo, CAT details cannot be updated. "))),(0,r.kt)("h2",{id:"mandatory-fields"},"Mandatory fields"),(0,r.kt)("p",null,"Few of the fields in the CAT update page are made as required to have a increased user experience. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Asset ID (Without this no other details are editable)"),(0,r.kt)("li",{parentName:"ul"},"Asset Name"),(0,r.kt)("li",{parentName:"ul"},"Asset Logo or Image"),(0,r.kt)("li",{parentName:"ul"},"Asset Tag")),(0,r.kt)("p",null,"Without these fields, the user cannot update the CAT details. "),(0,r.kt)("h2",{id:"after-update-success"},"After Update Success"),(0,r.kt)("p",null,"Once the CAT details are updayed successfully."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The user can see a success warning popping in the screen for reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CAT details that are updated will be visible under the ",(0,r.kt)("a",{parentName:"p",href:"https://www.spacescan.io/xch/cat1/topTokens"},"Top Tokens page")," page after 10 minuntes. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User can search their CAT details by providing their asset ID in the search box present in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.spacescan.io/xch/cat1/topTokens"},"Top Tokens page")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TIP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For better performance and results, There is a caching mechanism spacescan follow.",(0,r.kt)("br",{parentName:"p"}),"\n","Each cat update will take 1 hour to see the changes in cat summary page.\nPlease wait for 1 hour before checking the cat info and don't update the same information again during this time period. This will reduce your total CAT update limit (",(0,r.kt)("strong",{parentName:"p"},"Max-limit:")," 5 times/cat owner)"))))}h.isMDXComponent=!0},4931:function(e,t,a){t.Z=a.p+"assets/images/Addtokennavbar-a5b32fca00542396005db9c1aaad3450.png"},3169:function(e,t,a){t.Z=a.p+"assets/images/asset_id_bar-744cf5f31bb0cd4918ff96d853fb80fe.png"},7506:function(e,t,a){t.Z=a.p+"assets/images/notownererror-b008cda03bd28c7bd0337a0e2e98e86a.png"}}]);