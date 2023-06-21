var ans=0;
var s="";

add=()=>{
    var a=parseInt(document.getElementById("n").value);
    ans=ans+a;
    if(s.length==0)
    {
        s=s+a;
    }
    else
    {
      s=s+("+"+a)
    }
    document.getElementById("result").textContent=ans;
    eq=()=>{
        document.getElementById("wait").textContent=s;
    }
}
sub=()=>{
    var a=parseInt(document.getElementById("n").value);
    ans=ans-a;
    if(s.length==0)
    {
        s=s-a;
    }
    else
    {
      s=s+("-"+a)
    }
    document.getElementById("result").textContent=ans;
    eq=()=>{
        
        document.getElementById("wait").textContent=s;
    }
}
mul=()=>{
    var a=parseInt(document.getElementById("n").value);
    ans=ans*a;
    if(s.length==0)
    {
        s=s*a;
    }
    else
    {
      s=s+("*"+a)
    }
    document.getElementById("result").textContent=ans;
    eq=()=>{
        document.getElementById("wait").textContent=s;
    }

}
div=()=>{
    var a=parseInt(document.getElementById("n").value);
    ans=ans/a;
    if(s.length==0)
    {
        s=s/a;
    }
    else
    {
      s=s+("/"+a)
    }
    document.getElementById("result").textContent=ans;
    eq=()=>{
        document.getElementById("wait").textContent=s;
    }

}