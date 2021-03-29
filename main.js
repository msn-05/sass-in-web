window.onload = () => {
  var sass_code = document.querySelector("style[type='text/scss']").innerHTML;
  var result = Sass.compile(sass_code ,res=>{
    let style = document.createElement("style");
    style.innerHTML = res.text;
    document.head.appendChild(style);
  });
};