 
 $("#add_product").submit(function(event){
    alert("Produto Cadastrado com Sucesso!")
 })

 $("#update_product").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serialieArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['nomeProduto']] = n['value']
    })

    var request = {
        "url" : `http://localhost:30000/api/products/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Produto Atualizado com sucesso!")
    })

 })

 if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:30000/api/products/${data.id}`,
            "method": "DELETE"
        }

        if(confirm("Quer mesmo excluir esse produto?")){
            $.ajax(request).done(function(response){
                alert("Produto Deletado com sucesso!");
                location.reload
            })
        }

    })
 }