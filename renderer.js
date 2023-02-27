function start(){
    var client_id = document.getElementById('client_id').value;
    var details = document.getElementById("details").value;
    var large_image = document.getElementById("large_image").value;
    var large_text = document.getElementById("large_text").value;

    client.set_client_id(client_id);
    client.set_details(details);
    client.set_large_image(large_image);
    client.set_large_text(large_text);
    save_data(client_id, details, large_image, large_text);
    client.login();
}

function save_data(client_id, details, large_image, large_text){
    var data = {'client_id': client_id, 'details': details, 'large_image': large_image, 'large_text': large_text}

    localStorage.setItem('clientData', JSON.stringify(data));
}

function load_data(){
    var data = JSON.parse(localStorage.getItem('clientData'));

    document.getElementById('client_id').value = data.client_id;
    document.getElementById('details').value = data.details;
    document.getElementById('large_image').value = data.large_image;
    document.getElementById('large_text').value = data.large_text;
}