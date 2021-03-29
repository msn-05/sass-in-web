# Compile SASS in web</h1>
Add this code in the ```head``` element of your html code:
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.11.1/sass.sync.min.js"></script>
```
Also add this:
```
<style type="text/scss">

</style>
```
Add your SASS code there.
Then add this code:
```
<script>
window.onload = () => {
  var sass_code = document.querySelector("style[type='text/scss']").innerHTML;
  var result = Sass.compile(sass_code ,res=>{
    let style = document.createElement("style");
    style.innerHTML = res.text;
    document.head.appendChild(style);
  });
};
</script>
```
Then open the HTML file in a browser and et voila!