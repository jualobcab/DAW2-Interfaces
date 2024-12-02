document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.getElementById('logo-link');
    const currentUrl = window.location.pathname;

    if (currentUrl.endsWith('index.html') || currentUrl === '/') {
        logoLink.removeAttribute('href');
        logoLink.style.cursor = 'default';
    }
});

// FORMULARIO
document.addEventListener('DOMContentLoaded', () => {
    const parentCheckboxes = [
        { parent: 'productosNuevos', subcategories: ['platosNuevos', 'dietasNuevas', 'menusNuevos'] },
        { parent: 'ofertas', subcategories: ['ofertaPlatos', 'ofertaDietas', 'ofertaMenus'] },
        { parent: '', subcategories: ['nuevosLocales', 'horarios'] }
    ];

    parentCheckboxes.forEach(group => {
        const parent = document.getElementById(group.parent);
        const subcategories = group.subcategories.map(id => document.querySelector(`input[name="${id}"]`));

        if (parent) {
            parent.addEventListener('change', () => {
                subcategories.forEach(sub => sub.checked = parent.checked);
            });

            subcategories.forEach(sub => {
                sub.addEventListener('change', () => {
                    parent.checked = subcategories.every(sub => sub.checked);
                });
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('cancelarInformacion');
    const form = document.getElementById('solicitudInfoFormulario');

    resetButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del reset

        // Vaciar todos los campos de texto, email y selects
        form.querySelectorAll('input[type=text],input[type=checkbox],input[type=email]').forEach(field => {
            if (field.type === 'checkbox') {
                field.checked = false; // Desmarcar todos los checkboxes y radios
            } else {
                field.value = ''; // Vaciar campos de texto, email, etc.
            }
        });

        // Asegura que selects se reinicien a la primera opción
        form.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
    });
});



