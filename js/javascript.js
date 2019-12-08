	var guitarras = [
		{
			modelo: 'Kramer',
			año: 1989,
			precio: '?',
			notas: 'Customizada con una pegatina naranja de una calavera. No se sabe el modelo especifico, por lo cula no se puede sacar un precio exacto.',
			tipo:'Electrica'

		},
		{
			modelo: 'Heartfield Talon II',
			año: 1991,
			precio: 610,
			notas: 'Originalmente le costo 929,99$. Cambio las pastillas de la guitarra por unas DiMazio rosas.',
			tipo:'Electrica'

		},
		{
			modelo: 'Steinberger GS',
			año: 1991,
			precio: 3500,
			notas: 'Fue un regalo de Henry Kaiser, por esto la guitarra es mas conocida como "Kaisers gift"',
			tipo:'Electrica'

		},
		{
			modelo: 'ESP strat (LTD MW-SKULL)',
			año: 1993,
			precio: 810,
			notas: 'La guitarra tiene varias calaveras pintadas, por eso se le conoce mas como "Skull ESP"',
			tipo:'Electrica'

		},
		{
			modelo: 'Guitarra verde esmeralda sin identificar',
			año: 1993,
			precio: '?',
			notas: 'No se sabe nada sobre esta guitarra, al parecer solo la ha tocado en directo una vez, la forma parece una Ibanez, y la cabeza parece una de Gibson. A dia de hoy no se sabe nada mas.',
			tipo:'Electrica'

		},
		{
			modelo: 'Ibanez Rocket Roll (X-series)',
			año: 1995,
			precio: 1500,
			notas: 'La comenzo a utilizar hacia finales de 1995.',
			tipo:'Electrica'

		},
		{
			modelo: 'ESP MV morada',
			año: 1996,
			precio: 1600,
			notas: 'Rompio la guitarra en un concierto 4 meses despues, se arrepintio poco despues.',
			tipo:'Electrica'

		},
		{
			modelo: 'ESP M II',
			año: 1996,
			precio: 1600,
			notas: 'Una guitarra iconica, añadio varias modificaciones/pegatinas transformandola en la mundialmente conocida "ESP "Air Jordan". Actualmente se expone en el Hard Rock coffe en florida.',
			tipo:'Electrica'

		},
		{
			modelo: 'Jackson Y2KV',
			año: 1999,
			precio: 2345,
			notas: 'Utilizada en el tour con Primus del 99. Tambien parece que es al primera guitarra con killswitch incorporado.',
			tipo:'Electrica'

		},
		{
			modelo: 'Jackson KFC KV2',
			año: 2000,
			precio: 1500,
			notas: 'Famosa guitarra, utilizada del 2000 al 2002. Esta guitarra tambien se convirtio en un icono por los colores utilizados.',
			tipo:'Electrica'

		},
		{
			modelo: 'Gibson Les Paul',
			año: 2003,
			precio: 3000,
			notas: 'Utilizo 3 variantes de esta guitarra: Una completamente blanca, otra con la cabeza de color negro y la ultima con el color de los botones de killswitch rojos.',
			tipo:'Electrica'

		}

		]

		function informacion(x){
			var num=x;
			document.getElementById("info").innerHTML = "<p>Modelo: "+guitarras[x].modelo+".</p> <br><p>año: "+guitarras[x].año+".</p><br><p>Precio: "+guitarras[x].precio+"€</p><br><p>Tipo: "+guitarras[x].tipo+"</p><br><b>Notas:</b><p> "+guitarras[x].notas+"</p>";
		}

		let popular = [guitarras[10].modelo , guitarras[9].modelo , guitarras[7].modelo ];

		let [primera, segunda, tercera] = popular;