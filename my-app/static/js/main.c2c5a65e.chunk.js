(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(7),i=n.n(a),u=n(5),b=n(2),o=n(8),j=function(e,t){var n,c=e.split(""),r=t.split(""),s=0,a=0,i=Object(o.a)(r);try{for(i.s();!(n=i.n()).done;){var u=n.value;c.includes(u)&&(c.indexOf(u)===r.indexOf(u)?s++:a++)}}catch(b){i.e(b)}finally{i.f()}return d(s,a)},l=function(){for(var e=new Set;e.size<3;)e.add(m(1,9).toString());return Object(u.a)(e).join("")},m=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},d=function(e,t){var n="";return e||t?(1===e?n+="1 number is correct ":e>1&&(n+="".concat(e," numbers are correct ")),1===t?n+="1 number is misplaced":t>1&&(n+="".concat(t," numbers are misplaced")),n):"no numbers are correct"},O=function(e){var t=e.numberToGuess,n=e.number,r=n.split(""),s=Object(b.a)(r,3),a=s[0],i=s[1],u=s[2];return Object(c.jsxs)("div",{className:"number-hint",children:[Object(c.jsxs)("div",{className:"numbers",children:[Object(c.jsx)("div",{children:a}),Object(c.jsx)("div",{children:i}),Object(c.jsx)("div",{children:u})]}),Object(c.jsx)("div",{className:"number-info",children:j(t,n)})]})},h=function(){var e=Object(r.useState)(l()),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)([l()]),i=Object(b.a)(a,2),o=i[0],j=i[1],m=Object(r.useState)(""),d=Object(b.a)(m,2),h=d[0],f=d[1],x=Object(r.useState)(!1),v=Object(b.a)(x,2),p=v[0],g=v[1];return Object(c.jsxs)("div",{className:"game-container",children:[Object(c.jsx)("div",{className:"hints-container",children:o.map((function(e,t){return Object(c.jsx)(O,{numberToGuess:n,number:o[t]},o[t])}))}),Object(c.jsx)("button",{className:"game-buttons",onClick:function(){for(var e=l();o.includes(e);)e=l();var t=Object(u.a)(o);t.push(e),j(t)},children:"+"}),Object(c.jsxs)("div",{className:"game-options",children:[Object(c.jsx)("input",{className:"game-buttons",type:"text",placeholder:"The number is",onChange:function(e){f(e.target.value)}}),Object(c.jsxs)("button",{className:"game-buttons",onClick:function(){h===n?(alert("correct"),g(!0)):alert("incorrect")},children:["-",">"]}),Object(c.jsx)("button",{className:"game-buttons",onClick:function(){s(l()),j([l()])},children:"New Game"}),Object(c.jsx)("button",{className:"game-buttons",onClick:function(){return g(!p)},children:"Reveal number"}),p?Object(c.jsxs)("div",{className:"number-reveal",children:["the number is ",n]}):"",Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"https://github.com/titong0/guess-the-number-game",target:"_blank",children:"Github"})]})]})},f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(h,{})})};n(14),n(15);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c2c5a65e.chunk.js.map