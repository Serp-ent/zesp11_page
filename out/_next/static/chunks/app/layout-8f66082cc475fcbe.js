(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{7636:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,4839,23)),Promise.resolve().then(t.t.bind(t,2807,23)),Promise.resolve().then(t.t.bind(t,9574,23)),Promise.resolve().then(t.bind(t,9127)),Promise.resolve().then(t.bind(t,6216)),Promise.resolve().then(t.t.bind(t,347,23))},9127:(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var a=t(5155),n=t(7396),s=t(2115),o=t(1169),l=t(6046),i=t(2104),d=t(7725),c=t(7113),u=t(7535),m=t(652),f=t(3463),b=t(9795);let g=(0,m.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3 min-w-10",sm:"h-9 px-2.5 min-w-9",lg:"h-11 px-5 min-w-11"}},defaultVariants:{variant:"default",size:"default"}}),h=s.forwardRef((e,r)=>{let{className:t,variant:n,size:s,...o}=e;return(0,a.jsx)(u.b,{ref:r,className:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,b.QP)((0,f.$)(r))}(g({variant:n,size:s,className:t})),...o})});function x(){let{theme:e,setTheme:r}=(0,c.D)();return(0,a.jsx)(h,{pressed:"dark"===e,onClick:()=>{r("dark"===e?"light":"dark")},"aria-label":"Toggle theme",className:"border dark:border-primary dark:bg-background",children:"dark"===e?(0,a.jsx)(i.A,{}):(0,a.jsx)(d.A,{})})}h.displayName=u.b.displayName;let v=[{url:"/posty",label:"Posty"},{url:"/harmonogram",label:"Harmonogram"},{url:"/czlonkowie",label:"Czlonkowie"},{url:"/opis",label:"Opis Projektu"}];function p(){let[e,r]=(0,s.useState)(!1),[t,i]=(0,s.useState)(!0),[d,c]=(0,s.useState)(0),u=(0,s.useRef)(null),m=(0,s.useRef)(null),f=(0,l.usePathname)();return(0,s.useEffect)(()=>{let e=()=>{let e=window.scrollY;e>d&&e>50?i(!1):i(!0),c(e)},t=e=>{u.current&&!u.current.contains(e.target)&&m.current&&!m.current.contains(e.target)&&r(!1)};return window.addEventListener("scroll",e),document.addEventListener("mousedown",t),()=>{window.removeEventListener("scroll",e),document.removeEventListener("mousedown",t)}},[d]),(0,a.jsxs)("header",{className:"bg-background shadow dark:shadow-gray-800 flex justify-between items-center p-1 sm:p-4 w-screen transform transition-transform duration-200 fixed ".concat(t?"translate-y-0":"-translate-y-full"),children:[(0,a.jsxs)(n.default,{className:"p-1 flex gap-1",href:"/",children:[(0,a.jsx)("div",{className:"aspect-square h-6 bg-foreground rotate-[15deg]"}),(0,a.jsx)("div",{className:"text-xl font-bold ml-2 hidden sm:block",children:"Project Name"})]}),(0,a.jsxs)("div",{className:"md:hidden",children:[(0,a.jsx)("section",{className:"relative flex items-center",children:(0,a.jsx)("button",{className:"pr-2",onClick:()=>r(e=>!e),"aria-label":"Toggle menu",ref:m,children:(0,a.jsx)(o.mu4,{size:24})})}),(0,a.jsxs)("section",{className:"\n          ".concat(e?"translate-x-0":"translate-x-full","\n           transition-transform absolute top-full w-52 sm:w-72 right-0 h-screen text-sm p-2 bg-background border dark:border-gray-900 dark:shadow-gray-800 border-gray-200 shadow-lg\n           "),ref:u,children:[(0,a.jsx)("nav",{className:"flex flex-col gap-2",children:v.map((e,t)=>(0,a.jsx)(n.default,{href:e.url,className:"\n              font-semibold text-center dark:border-gray-600 border-gray-100 border-b px-3 py-1 my-1 rounded  hover:text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-primary transition-colors duration-150\n              ".concat(f===e.url?"bg-primary text-background":"dark:text-gray-200 text-gray-800","\n              "),onClick:()=>r(!1),children:e.label},t))}),(0,a.jsx)("div",{className:"flex justify-end mt-2 pr-2",children:(0,a.jsx)(x,{})})]})]}),(0,a.jsxs)("section",{className:"hidden md:flex items-center",children:[(0,a.jsx)("nav",{className:"flex mr-4 gap-6",children:v.map((e,r)=>(0,a.jsx)(n.default,{href:e.url,className:"font-medium text-sm transition-colors duration-150 ".concat(f===e.url?"border-b-2 border-primary":""),children:e.label},r))}),(0,a.jsx)(x,{})]})]})}},6216:(e,r,t)=>{"use strict";t.d(r,{ThemeProvider:()=>s});var a=t(5155);t(2115);var n=t(7113);function s(e){let{children:r,...t}=e;return(0,a.jsx)(n.N,{...t,children:r})}},347:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[659,380,839,700,441,517,358],()=>r(7636)),_N_E=e.O()}]);