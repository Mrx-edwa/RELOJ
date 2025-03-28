document.getElementById("pedidoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const direccion = document.getElementById("direccion").value;
    const pago = document.getElementById("pago").value;

    const templateParams = {
        nombre: nombre,
        dni: dni,
        direccion: direccion,
        pago: pago
    };

    emailjs.send("service_q8gmvdk", "template_71xq1w8", templateParams)
    .then(function(response) {
        alert("Pedido enviado exitosamente.");
        document.getElementById("pedidoForm").reset();
    }, function(error) {
        alert("Hubo un problema al enviar el pedido, inténtalo nuevamente.");
        console.error('Error:', error);
    });
});

function filtrarProductos() {
    const filtro = document.getElementById('searchInput').value.toLowerCase();
    const marcaSeleccionada = document.getElementById('brandSelect').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.getAttribute('data-nombre').toLowerCase();
        const marca = producto.getAttribute('data-marca').toLowerCase();
        
        if ((nombre.includes(filtro) || filtro === '') && (marca.includes(marcaSeleccionada) || marcaSeleccionada === '')) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}