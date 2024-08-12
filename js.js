document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('event-form').addEventListener('submit', (event) => {
        event.preventDefault();
        addEvent();
    });
});

function addEvent() {
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;
    const description = document.getElementById('event-description').value;

    if (title && date && time && location && description) {
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <strong>${title}</strong> on ${date} at ${time}<br>
            Location: ${location}<br>
            Description: ${description}<br>
            <button class="done-btn">&#10006;</button>
        `;

        document.querySelector('#event-list ul').appendChild(eventItem);

        eventItem.querySelector('.done-btn').addEventListener('click', () => {
            eventItem.remove();
        });

        document.getElementById('event-form').reset();
    }
}
