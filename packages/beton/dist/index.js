'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var tailwindMerge = require('tailwind-merge');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.bottom-0{bottom:0}.left-0{left:0}.left-5{left:1.25rem}.top-0{top:0}.top-5{top:1.25rem}.z-10{z-index:10}.m-0{margin:0}.mb-3{margin-bottom:.75rem}.mb-32{margin-bottom:8rem}.box-border{box-sizing:border-box}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-48{height:12rem}.h-5{height:1.25rem}.min-h-screen{min-height:100vh}.w-16{width:4rem}.w-20{width:5rem}.w-24{width:6rem}.w-full{width:100%}.max-w-5xl{max-width:64rem}.max-w-\\[30ch\\]{max-width:30ch}.flex-none{flex:none}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.place-items-center{place-items:center}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.bg-transparent{background-color:transparent}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.bg-gradient-to-t{background-image:linear-gradient(to top,var(--tw-gradient-stops))}.from-white{--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-zinc-200{--tw-gradient-from:#e4e4e7 var(--tw-gradient-from-position);--tw-gradient-to:hsla(240,6%,90%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-white{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#fff var(--tw-gradient-via-position),var(--tw-gradient-to)}.p-2{padding:.5rem}.p-24{padding:6rem}.p-8{padding:2rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-6{padding-bottom:1.5rem}.pt-8{padding-top:2rem}.text-center{text-align:center}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-2xl{font-size:1.5rem;line-height:2rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.leading-normal{line-height:1.5}.leading-relaxed{line-height:1.625}.leading-snug{line-height:1.375}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.opacity-50{opacity:.5}.backdrop-blur-2xl{--tw-backdrop-blur:blur(40px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:h-\\[300px\\]:before{content:var(--tw-content);height:300px}.before\\:w-\\[480px\\]:before{content:var(--tw-content);width:480px}.before\\:-translate-x-1\\/2:before{--tw-translate-x:-50%;content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.before\\:rounded-full:before{border-radius:9999px;content:var(--tw-content)}.before\\:bg-gradient-radial:before{background-image:radial-gradient(var(--tw-gradient-stops));content:var(--tw-content)}.before\\:from-white:before{--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);content:var(--tw-content)}.before\\:to-transparent:before{--tw-gradient-to:transparent var(--tw-gradient-to-position);content:var(--tw-content)}.before\\:blur-2xl:before{--tw-blur:blur(40px);content:var(--tw-content);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.before\\:content-\\[\\'\\'\\]:before{--tw-content:\"\";content:var(--tw-content)}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:-z-20:after{content:var(--tw-content);z-index:-20}.after\\:h-\\[180px\\]:after{content:var(--tw-content);height:180px}.after\\:w-\\[240px\\]:after{content:var(--tw-content);width:240px}.after\\:translate-x-1\\/3:after{--tw-translate-x:33.333333%;content:var(--tw-content);transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\\:bg-gradient-conic:after{background-image:conic-gradient(from 180deg at 50% 50%,var(--tw-gradient-stops));content:var(--tw-content)}.after\\:from-sky-200:after{--tw-gradient-from:#bae6fd var(--tw-gradient-from-position);--tw-gradient-to:rgba(186,230,253,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);content:var(--tw-content)}.after\\:via-blue-200:after{--tw-gradient-to:rgba(191,219,254,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#bfdbfe var(--tw-gradient-via-position),var(--tw-gradient-to);content:var(--tw-content)}.after\\:blur-2xl:after{--tw-blur:blur(40px);content:var(--tw-content);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.after\\:content-\\[\\'\\'\\]:after{--tw-content:\"\";content:var(--tw-content)}.hover\\:border-gray-300:hover{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.group:hover .group-hover\\:translate-x-1{--tw-translate-x:0.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (prefers-reduced-motion:reduce){.motion-reduce\\:transform-none{transform:none}}@media (prefers-color-scheme:dark){.dark\\:border-neutral-800{--tw-border-opacity:1;border-color:rgb(38 38 38/var(--tw-border-opacity))}.dark\\:bg-zinc-800\\/30{background-color:rgba(39,39,42,.3)}.dark\\:from-black{--tw-gradient-from:#000 var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.dark\\:from-inherit{--tw-gradient-from:inherit var(--tw-gradient-from-position);--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.dark\\:via-black{--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#000 var(--tw-gradient-via-position),var(--tw-gradient-to)}.dark\\:drop-shadow-\\[0_0_0\\.3rem_\\#ffffff70\\]{--tw-drop-shadow:drop-shadow(0 0 0.3rem #ffffff70)}.dark\\:drop-shadow-\\[0_0_0\\.3rem_\\#ffffff70\\],.dark\\:invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.dark\\:invert{--tw-invert:invert(100%)}.before\\:dark\\:bg-gradient-to-br:before{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops));content:var(--tw-content)}.before\\:dark\\:from-transparent:before{--tw-gradient-from:transparent var(--tw-gradient-from-position);--tw-gradient-to:transparent var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);content:var(--tw-content)}.before\\:dark\\:to-blue-700:before{--tw-gradient-to:#1d4ed8 var(--tw-gradient-to-position);content:var(--tw-content)}.before\\:dark\\:opacity-10:before{content:var(--tw-content);opacity:.1}.after\\:dark\\:from-sky-900:after{--tw-gradient-from:#0c4a6e var(--tw-gradient-from-position);--tw-gradient-to:rgba(12,74,110,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);content:var(--tw-content)}.after\\:dark\\:via-\\[\\#0141ff\\]:after{--tw-gradient-to:rgba(1,65,255,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),#0141ff var(--tw-gradient-via-position),var(--tw-gradient-to);content:var(--tw-content)}.after\\:dark\\:opacity-40:after{content:var(--tw-content);opacity:.4}.hover\\:dark\\:border-neutral-700:hover{--tw-border-opacity:1;border-color:rgb(64 64 64/var(--tw-border-opacity))}.hover\\:dark\\:bg-neutral-800:hover{--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity))}.hover\\:dark\\:bg-neutral-800\\/30:hover{background-color:rgba(38,38,38,.3)}.hover\\:dark\\:bg-opacity-30:hover{--tw-bg-opacity:0.3}}@media (min-width:1024px){.lg\\:pointer-events-auto{pointer-events:auto}.lg\\:static{position:static}.lg\\:mb-0{margin-bottom:0}.lg\\:flex{display:flex}.lg\\:h-auto{height:auto}.lg\\:w-auto{width:auto}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:rounded-xl{border-radius:.75rem}.lg\\:border{border-width:1px}.lg\\:bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.lg\\:bg-none{background-image:none}.lg\\:p-0{padding:0}.lg\\:p-4{padding:1rem}.lg\\:text-left{text-align:left}.before\\:lg\\:h-\\[360px\\]:before{content:var(--tw-content);height:360px}@media (prefers-color-scheme:dark){.lg\\:dark\\:bg-zinc-800\\/30{background-color:rgba(39,39,42,.3)}}}";
styleInject(css_248z,{"insertAt":"top"});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var buttonVariants = classVarianceAuthority.cva('box-border flex flex-row justify-center items-center p-2 gap-2 absolute w-16 h-5 left-5 top-5 bg-pastel-blue border-2 border-black font-inter text-sm leading-snug text-black flex-none order-0 hover:bg-hover-blue hover:shadow-2xl', {
    variants: {
        type: {
            filled: 'bg-pastel-blue',
            outlined: 'border-2 border-black bg-transparent',
        },
        state: {
            enabled: 'cursor-pointer',
            disabled: 'cursor-not-allowed opacity-50',
        },
        size: {
            small: 'w-16 h-5 text-sm leading-snug',
            medium: 'w-20 h-10 text-base leading-normal',
            large: 'w-24 h-14 text-lg leading-relaxed',
        },
    },
    defaultVariants: {
        type: 'filled',
        state: 'enabled',
        size: 'small',
    },
});
var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var classes = tailwindMerge.twMerge(buttonVariants(props));
    return jsxRuntime.jsx("button", { className: classes, onClick: props.onClick, children: children });
};

exports.Button = Button;
