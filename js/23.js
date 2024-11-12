
const metodoPago = 'cheque';


switch (metodoPago) {
    case 'efectivo':
        console.log('El usuario pago con efectivo');
        break;
    case 'cheque':
        console.log('El usuario pago con cheke, se van a revisar los fondos primero');
        break;
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    default:
        console.log('Aun no has pagado');
        break;
};