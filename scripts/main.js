Hooks.once("init", () => {
	console.log("Comparador de Números | Cargado");
});

Hooks.on("ready", () => {
	// Función para comparar números
	const compareNumbers = (num1, num2) => {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		if (isNaN(num1) || isNaN(num2)) return "¡Ingresa números válidos!";
		if (num1 === num2) return "Los números son iguales.";
		return num1 > num2
			? `El número ${num1} es mayor.`
			: `El número ${num2} es mayor.`;
	};

	// Crear el diálogo
	new Dialog({
		title: "Comparador de Números",
		content: `
      <form>
        <div class="form-group">
          <label>Número 1:</label>
          <input type="text" id="num1" placeholder="Ej: 10">
        </div>
        <div class="form-group">
          <label>Número 2:</label>
          <input type="text" id="num2" placeholder="Ej: 20">
        </div>
      </form>
    `,
		buttons: {
			compare: {
				label: "Comparar",
				callback: (html) => {
					const num1 = html.find("#num1").val();
					const num2 = html.find("#num2").val();
					const result = compareNumbers(num1, num2);
					ui.notifications.info(result); // Muestra el resultado como notificación
				},
			},
		},
		default: "compare",
	}).render(true);
});
