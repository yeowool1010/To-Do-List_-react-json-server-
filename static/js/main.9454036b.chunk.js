(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(n,t,e){n.exports=e(51)},44:function(n,t,e){},45:function(n,t,e){},51:function(n,t,e){"use strict";e.r(t);var o,a,l,r,c,i,d=e(1),u=e.n(d),s=e(27),h=e.n(s),p=(e(44),e(4)),m=e(34),f=e(25),b=e(7),g=e(8),x=e(36),v=e(35),E=e(22),w=e(5),y=(e(45),w.a.div(o||(o=Object(p.a)(["\n\n"])))),T=function(){return u.a.createElement(y,null,u.a.createElement("h1",null,"Wool's To Do Do Do \ud83d\udd2b"))},k=w.a.div(a||(a=Object(p.a)(["\n    width: 80%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    /* background-color: aqua; */\n\n    .to-do-from {\n        cursor: pointer;\n        display: flex;\n        width : 100%;\n        height: 100%;\n    }\n\n\n    .input {\n        width: 90%;\n    }\n\n    .button {\n        /* display: block; */\n        /* position: relative; */\n        /* float: left; */\n        border: 0ch;\n        cursor: pointer;\n        width: 120px;\n        padding: 0;\n        margin: 10px 20px 10px 0;\n        font-weight: 600;\n        text-align: center;\n        line-height: 50px;\n        color: #FFF;\n        border-radius: 5px;\n        transition: all 0.2s ;\n    }\n    .btnLightBlue {\n      background: #5DC8CD;\n    }\n    .btnLightBlue.btnPush {\n         box-shadow: 0px 5px 0px 0px #1E8185;\n    }\n    .btnPush:hover {\n        margin-top: 15px;\n        margin-bottom: 5px;\n    }\n    .btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n"]))),O=function(n){return u.a.createElement(k,null,u.a.createElement("from",{className:"to-do-from"},u.a.createElement("div",null,u.a.createElement("label",{htmlFor:""},"\uc624\ub298\uc758 \ucd1d\uc54c"),u.a.createElement("input",{className:"input",type:"text",name:"todo",id:"todo",value:n.newTodoValue,onChange:function(t){return n.handleOnChange(t)}})),u.a.createElement("button",{className:"button btnPush btnLightBlue",type:"submit",onClick:function(t){return n.handleSubmit(t)}},"ToDo \uc7a5\uc804")))},j=w.a.div(l||(l=Object(p.a)(["\n    .done {\n        color: gray;\n    }\n    .not-done {\n        color: black;\n        font-weight: 600;\n    }\n\n    .delete-btn {\n        background-color: beige;\n        transition: all ease 0.3s 0s;\n        border: 0ch;\n        border-radius: 50%;\n    }\n    .delete-btn:hover {\n        background-color: pink;\n    }\n"]))),D=function(n){return u.a.createElement(j,null,u.a.createElement("li",{key:n.todo.id},u.a.createElement("input",{type:"checkbox",onChange:function(){return n.toggleTodoDone()},checked:n.todo.done,value:n.todo.id}),u.a.createElement("span",{className:n.todo.done?"done":"not-done"},n.todo.title),u.a.createElement("span",{className:"delete-todo"},u.a.createElement("button",{className:"delete-btn",onClick:function(t){return n.removeTodo()}},"\u274e"))))},C=w.a.div(r||(r=Object(p.a)(["\n    \n    .todo-ul {\n        list-style: none;\n        display: flex;\n        flex-flow: column;\n        align-items: baseline;\n    }\n"]))),B=function(n){return u.a.createElement(C,null,u.a.createElement("ul",{className:"todo-ul"},n.todos.map(function(t){return u.a.createElement(D,{key:t.id,todo:t,toggleTodoDone:function(){return n.toggleTodoDone(t.id,t.done)},removeTodo:function(){return n.removeTodo(t.id)}})})))},N=w.a.div(c||(c=Object(p.a)(["\n    width: 100%;\n    height: 20%;\n    position: absolute;  \n    bottom: 0;\n    left: 0;\n    background-color: beige;\n\n    .textBox {\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        justify-content: center;\n    }\n    .text {\n        margin: 10px;\n        color: blueviolet;\n        font-weight: 700;\n    }\n"]))),P=function(){return u.a.createElement(N,null,u.a.createElement("div",{className:"textBox"},u.a.createElement("div",{className:"text"},"\uc548\ub155\ud558\uc138\uc694 \uc5ec\uc6b8\uc758 \ud22c\ub450\ub450\ub450 \ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4 \uc6b8\uba74\uc11c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \ud83d\ude02"),u.a.createElement("div",{className:"text"},"create 2022.10.18")))},S=e(12);function F(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}();return function(){var e,o=Object(E.a)(n);if(t){var a=Object(E.a)(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return Object(v.a)(this,e)}}var L=function(n){Object(x.a)(e,n);var t=F(e);function e(){var n;Object(b.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=t.call.apply(t,[this].concat(a))).state={newTodo:"",todos:[{id:"",title:"",done:!1}]},n.fetchTodos=function(){S.a.get("http://localhost:3001/todos").then(function(t){var e=t.data;n.setState(Object(f.a)({},e,{todos:e}))})},n.handleOnChange=function(t){n.setState({newTodo:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),S.a.post("http://localhost:3001/todos",{title:n.state.newTodo,done:!1},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data),n.setState({newTodo:"",todos:[].concat(Object(m.a)(n.state.todos),[{title:t.data.title,done:t.data.done,id:t.data.id}])})}).catch(function(n){console.log(n)})},n.toggleTodoDone=function(t,e){S.a.patch("http://localhost:3001/todos/".concat(t),{done:!e}).then(function(t){n.fetchTodos()})},n.removeTodo=function(t){var e=n.state.todos.filter(function(n){return n.id!==t});n.setState({todos:e}),S.a.delete("http://localhost:3001/todos/".concat(t)).then(function(n){})},n.allDone=function(t){var e=n.state.todos.map(function(n){return Object(f.a)({},n,{done:!0})});n.setState({todos:e})},n}return Object(g.a)(e,[{key:"componentDidMount",value:function(){this.fetchTodos()}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"App"},u.a.createElement("header",null,u.a.createElement(T,null)),u.a.createElement("div",null,u.a.createElement(O,{handleSubmit:this.handleSubmit,handleOnChange:this.handleOnChange,newTodoValue:this.state.newTodo}),u.a.createElement(B,{todos:this.state.todos,removeTodo:this.removeTodo,toggleTodoDone:this.toggleTodoDone}),u.a.createElement(R,null,u.a.createElement("button",{className:"button btnPush btnLightBlue",onClick:this.allDone},"\uc0ac\uaca9 \uc644\ub8cc!"))),u.a.createElement("footer",null,u.a.createElement(P,null))))}}]),e}(d.Component),R=w.a.div(i||(i=Object(p.a)(["\n    .button {\n        /* display: block; */\n        /* position: relative; */\n        /* float: left; */\n        border: 0ch;\n        cursor: pointer;\n        width: 120px;\n        padding: 0;\n        margin: 10px 20px 10px 0;\n        font-weight: 600;\n        text-align: center;\n        /* line-height: 50px; */\n        color: #FFF;\n        border-radius: 5px;\n        transition: all 0.2s ;\n    }\n    .btnLightBlue {\n      background: #5DC8CD;\n    }\n    .btnLightBlue.btnPush {\n         box-shadow: 0px 5px 0px 0px #1E8185;\n    }\n    .btnPush:hover {\n        margin-top: 15px;\n        margin-bottom: 5px;\n    }\n    .btnLightBlue.btnPush:hover {\n  box-shadow: 0px 0px 0px 0px #1E8185;\n}\n"])));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(u.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.9454036b.chunk.js.map