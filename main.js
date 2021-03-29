window.onload = () => {
  var sass_file = document.querySelector("style[type='text/scss']").innerHTML;
  var result = Sass.compile(sass_file,res=>{
    let style = document.createElement("style");
    style.innerHTML = res.text;
    document.head.appendChild(style);
  });
};