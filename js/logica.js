function cad() {


    var titulo = document.getElementById("titulo").value
    var desc = document.getElementById("desc").value
    var preco = document.getElementById("preco").value
    console.log(titulo + desc + preco)
    var produto = document.getElementById("produtos")
    produto.innerHTML += `
    <div id="produtos">
    <div class="card" style="width: 18rem;">
    <img src="images/camisa.jpg" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${titulo}</h5>
    <p class="card-text">${desc}
    </p>
    <a href="#" class="btn btn-primary">${preco}</a>
  </div>
</div>
</div>
    `
}