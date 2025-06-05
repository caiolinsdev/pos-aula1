document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const names = [
        document.getElementById('name1').value,
        document.getElementById('name2').value,
        document.getElementById('name3').value,
        document.getElementById('name4').value,
        document.getElementById('name5').value
    ];

    const message = document.getElementById('message').value;

    const data = {
        names: names,
        message: message
    };

    try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Dados enviados com sucesso!');
            this.reset();
        } else {
            alert('Erro ao enviar os dados. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar os dados. Por favor, tente novamente.');
    }
}); 