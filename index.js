const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const units = document.getElementById("units");
    let unidades = units.value;
    let vr_Unitario = 1750000;
    let vr_Bruto = unidades * vr_Unitario;
    let vr_Descuento = 0;
    let vr_Iva = vr_Bruto * 19 / 100;
    let mensaje = "";
    
    if(unidades >= 2){
        vr_Descuento = vr_Bruto * 10 / 100;
        vr_Neto = vr_Bruto + vr_Iva - vr_Descuento;
    }else{
        vr_Neto = vr_Bruto + vr_Iva;  
        mensaje = "No hay descuentos para esta compra";
    }    

    ordenCompra = document.createElement("div")
        form.innerHTML = `
            
            <div id="orden">

            <h3>Orden de compra</h3>
                <p>Unidades: </p>
                <input id="input-orden" disabled placeholder="${unidades}">(U)
                <p>Valor unitario: </p>
                <input id="input-orden" disabled placeholder="$${vr_Unitario}">(+)
                <p>Valor bruto: </p>
                <input id="input-orden" disabled placeholder="$${vr_Bruto}">(+)
                <p>Valor Iva: </p>
                <input id="input-orden" disabled placeholder="$${vr_Iva}">(+)
                <p>Valor descuento 10%: </p>
                <input id="input-orden" disabled placeholder="$${vr_Descuento}">(-)
                <p>Valor neto: </p>
                <input id="input-orden" disabled placeholder="$${vr_Neto}">(=)
                <p id="mensaje">${mensaje}</p>
            </div>
            
        `
})