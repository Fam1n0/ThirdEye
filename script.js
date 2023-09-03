
function openThirdEye() {
    const thirdEye = document.getElementById('third-eye');
    const modal = document.getElementById('awakening-modal');

    thirdEye.style.width = '100px';
    thirdEye.style.height = '100px';

    // Simulate the "opening" of the third eye and then show the modal
    setTimeout(() => {
        document.body.style.backgroundColor = '#eee';
        document.getElementById('game-container').style.backgroundImage = 'url("https://fam1n0.github.io/ThirdEye/path-to-universe-image.jpg")';
        
        modal.style.display = 'block';  // Show the modal
    }, 1000);
}

function closeModal() {
    document.getElementById('awakening-modal').style.display = 'none';  // Hide the modal
}
