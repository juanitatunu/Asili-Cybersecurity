document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = {
            age: form.age.value,
            gender: form.gender.value,
            location: form.location.value,
            rating: form.rating.value,
            name: form.name.value,
            email: form.email.value,
            comments: form.comments.value,
        };

        console.log('Form Data Submitted:', formData);

        alert('Thank you for signing up!');

        form.reset();
    });
});
