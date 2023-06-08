import { jsx } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var buttonVariants = cva("box-border flex flex-row justify-center items-center p-[10px] gap-[10px] absolute w-[180px] h-[50px] left-[1035px] top-[47px] bg-[#E9FF4F] mix-blend-normal border-[2px] border-solid border-[#18191F] [box-shadow:2px_2px_0px_#FFFFFF] rounded-[4px] w-[130px] h-[31px] font-['IBM_Plex_Mono'] not-italic font-bold text-[24px] leading-[31px] text-[#18191F] flex-none order-none flex-grow-0\n  ", {
    variants: {
        type: {
            filled: "bg-pastel-blue",
            outlined: "border-2 border-black bg-transparent",
        },
        state: {
            enabled: "cursor-pointer",
            disabled: "cursor-not-allowed opacity-50",
        },
        size: {
            small: "w-16 h-5 text-sm leading-snug",
            medium: "w-20 h-10 text-base leading-normal",
            large: "w-24 h-14 text-lg leading-relaxed",
        },
    },
    defaultVariants: {
        type: "filled",
        state: "enabled",
        size: "small",
    },
});
var Button = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var classes = twMerge(buttonVariants(props));
    return (jsx("button", { className: classes, onClick: props.onClick, children: children }));
};
var buttonStyles2 = cva("flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80", {
    variants: {
        intent: {
            primary: "bg-brand-500 text-white",
            secondary: "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500",
            danger: "bg-red-500 text-white focus:ring-red-500",
        },
        fullWidth: {
            true: "w-full",
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});
function Button2(_a) {
    var intent = _a.intent, fullWidth = _a.fullWidth, props = __rest(_a, ["intent", "fullWidth"]);
    return jsx("button", __assign({ className: buttonStyles2({ intent: intent, fullWidth: fullWidth }) }, props));
}

export { Button, Button2 };
