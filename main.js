$(document).ready(function(){
    $("#cpf").blur(function(){
    	var inputCPF = document.getElementById('cpf').value;
    	if (validarCPF(inputCPF) == true){
    		document.getElementById('cpf').style.backgroundColor="#fff";
    		var selectEstado = document.getElementsByTagName('select');
    		$(selectEstado).remove();
    		var estado = inputCPF.substring(8,9);
			if(estado==1){$('#estado').append('<select class="form-control"><option>Distrito Federal</option><option>Goias</option><option>Mato Grosso do Sul</option><option>Tocantins</option></select>');}
			if(estado==2){$('#estado').append('<select class="form-control"><option>Para</option><option>Amazonas</option><option>Acre</option><option>Amapa</option><option>Rondonia</option><option>Roraima</option></select>');}
			if(estado==3){$('#estado').append('<select class="form-control"><option>Ceara</option><option>Maranhao</option><option>Piaui</option></select>');}
			if(estado==4){$('#estado').append('<select class="form-control"><option>Pernambuco</option><option>Rio Grande do Norte</option><option>Paraiba</option><option>Alagoas</option></select>');}
			if(estado==5){$('#estado').append('<select class="form-control"><option>Bahia</option><option>Sergipe</option></select>');}
			if(estado==6){$('#estado').append('<select class="form-control"><option>Minas Gerais</option></select>');}
			if(estado==7){$('#estado').append('<select class="form-control"><option>Rio de Janeiro</option><option>Espírito Santo</option></select>');}
			if(estado==8){$('#estado').append('<select class="form-control"><option>Sao Paulo</option></select>');}
			if(estado==9){$('#estado').append('<select class="form-control"><option>Parana</option><option>Santa Catarina</option></select>');}
			if(estado==0){$('#estado').append('<select class="form-control"><option>Rio Grande do Sul</option></select>');}
			document.getElementById('divEstado').style.display="block";
    	}else{
    		document.getElementById('cpf').style.backgroundColor="red";
    		var selectEstado = document.getElementsByTagName('select');
    		$(selectEstado).remove();
    		document.getElementById('divEstado').style.display="none";
    	}
    });


    function validarCPF(inputCPF){
    	var soma = 0;
    	var resto;
        var inputCPF = document.getElementById('cpf').value;

        if(inputCPF == '00000000000') return false;
        for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

    	if((resto == 10) || (resto == 11)) resto = 0;
    	if(resto != parseInt(inputCPF.substring(9, 10))) return false;

    	soma = 0;
    	for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
    	resto = (soma * 10) % 11;

    	if((resto == 10) || (resto == 11)) resto = 0;
    	if(resto != parseInt(inputCPF.substring(10, 11))) return false;
    	return true;
    }
});