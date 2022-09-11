$(document).ready(function(){
    //ejercicio 1
    $('.btn').click(function(){
        $('#one').css({color:'orange'});
    })
    //ejercicio 2
    let container2=$('#container2'),
    input1='<input id="base" type="number" placeholder="base"> ',
    input2='<input id="altura" type="number" placeholder="altura"> ',
    btn='<button id="calcular" class="btn btn-primary">Calcular área Triangulo</button> ',
    r='<label for="">Area: </label><input id="area" placeholder="00">';
    container2.append(input1,input2,btn,r);
    $('#calcular').click(function(){
        let base=$('#base').val(),
        altura=$('#altura').val();
        if(base!=undefined && altura!=undefined && base!="" && altura!=""){
            let area=(base*altura)/2;
            $('#area').val(area);
            base=$('#base').val(""),
            altura=$('#altura').val("");
        }else{
            $('#area').val("Datos invalidos!");
        }
    });
    //ejercicio 3
    let container3=$('#container3'),
    input3='<input id="num" type="number" placeholder="numero">',
    label='<label for="">Tabla de multiplicar del 1-9: <label/>',
    lista='<ul id="list"></ul>';
    container3.append(lista);
    n=[49,50,51,52,53,54,55,56,57];
    container3.append(label,input3);
    $('#num').keypress(function (e) {
        if(e.keyCode>=49 && e.keyCode<=57){
            let nn=0;
            for(let i=0; i<=n.length; i++){
                if(e.keyCode==n[i]){
                    nn=(i+1);
                    $('#list').append(`<p>Tabla de multiplicar de: ${nn}</p>`);
                    for(let m=0;m<10;m++){
                        let mul=nn*(m+1);
                        $('#list').append(`<li>${nn} * ${m+1} : ${mul}</li>`);
                        
                    }
                    break;
                }
            }

        }
    });
    //ejercicio 4
    let container4=$('#containter4child'),
    images=[
        '<div class="card" style="width: 18rem;"><img class="card-img-top" src="/imagenes/45.jpg" alt="Card image cap"><div class="card-body"><p class="card-text">Primera Imagen</p></div></div>',
        '<div class="card" style="width: 18rem;"><img class="card-img-top" src="/imagenes/46.jpg" alt="Card image cap"><div class="card-body"><p class="card-text">Segunda Imagen</p></div></div>',
        '<div class="card" style="width: 18rem;"><img class="card-img-top" src="/imagenes/47.jpg" alt="Card image cap"><div class="card-body"><p class="card-text">Tercera Imagen</p></div></div>',
        '<div class="card" style="width: 18rem;"><img class="card-img-top" src="/imagenes/48.jpg" alt="Card image cap"><div class="card-body"><p class="card-text">Cuarta Imagen</p></div></div>'
    ];
    $('#sl').click(function (){
        var selectedvalor=$(this).children("option:selected").val();
        container4.append(images[selectedvalor-1]);
    });
    //ejercicio 5
    let container5=$('#container5'),
    inputest='<input id="nombrest" type="text" placeholder="Nombre estudiante "><br><br>',
    inputnota1='<input id="nota1" type="number" value="0" placeholder="nota 1"> ',
    inputnota2='<input id="nota2" type="number" value="0" placeholder="nota 2"> ',
    lblprom='<label >Promedio Final: </label>',
    salida='<input id="prm" type="text" placeholder="Promedio"><br>',
    btnprom='<button id="prom" class="btn btn-primary">Calcular</button>';
    container5.append(inputest,inputnota1,inputnota2,lblprom,salida,btnprom);
    $('#prom').click(function () { 
        let nombrest=$('#nombrest').val(),nota1=parseInt($('#nota1').val()),
        nota2=parseInt($('#nota2').val());
        if(nombrest!="" && nota1!=NaN && nota2!=NaN){
            promediofinal=(nota1+nota2)/2;
            let salida=$('#prm').val(promediofinal);
        }else{
            let salida=$('#prm').val('Faltan Datos!');
        }
    });
    //ejercicio 6
    let container6=$('#container6');
    $('#cambiar').click(function () { 
        let container6=$('#container6');
        container6.removeClass('bg-dark');
        container6.addClass('bg-ligth');
    });
    $('#adicionar').click(function () { 
        container6.addClass('col-6');
    });
    $('#remover').click(function () { 
        container6.removeClass('bg-ligth');
        container6.addClass('bg-dark');
        container6.removeClass('col-6');
    });
    //ejercicio 7
    $('#bt').click(function (e) {
        e.preventDefault(); 
        alert(`BOOTSTRAP!`);
        
    });
    $('#js').click(function (e) {
        e.preventDefault(); 
        alert(`JS!`);
        
    });
    $('#rc').click(function (e) {
        e.preventDefault(); 
        alert(`REACT!`);
        
    });
    //ejercicio 8
    let container8=$('#container8');
    let titlist='<p>Lista</p>';
    let list='<ul id="listoc"><li>A</li><li>B</li><li>C</li></ul>',
    btocultar='<button class="btn btn-danger" id="btnocultar">Ocultar</button>';
    btnmostrar='<button class="btn btn-success" id="btnmost">Mostrar</button>';
    let btmost=$('#btnmost');
    container8.append(titlist,list,btocultar,btnmostrar);
    $('#btnocultar').click(function () {
        let lio=$('#listoc');
        lio.hide();
    });
    $('#btnmost').click(function () { 
        let lio=$('#listoc');
        lio.show();
    });
    //ejercicio 9
    $('#btndesvanecer').click(function () { 
        $("#hol").hide(300);
    });
    $('#btnmostrardesv').click(function () { 
        $("#hol").show(300);
    });
    //ejerciico 10
    $('ul li:has(ul)').hover(function(e) {
        $(this).find('ul').css({display: "block"});
    },
    function(e) {
        $(this).find('ul').css({display: "none"});
    });
    

    













    
});