self.addEventListener('push', function(event) {
    console.log("Push event received")
    console.log("Updated")
    const data = event.data.json();
    console.log("-----Register push notification event:", data)
    console.log("--", data.body)
    console.log("Registrating event");
    self.registration.showNotification(data.title, {
        body: data.body,
        // body: "Testing",
        icon: '/icon.png'
    });
});