var Test = document.getElementById("Test");
for (let t of Test.getElementsByTagName("textarea")) {
    var ns = t.nextElementSibling;
    // console.log(t, ns)
    replay(t.value)
    console.log(ns.innerText)
    if(eval(ns.innerText)){
        ns.style.backgroundColor ='green'
    }else{
        ns.style.backgroundColor ='red'
    }
    // break;
}
boardClear();