let isEyeOpened = false;

function toggleThirdEye() {
    const thirdEye = document.getElementById('third-eye');
    const modal = document.getElementById('awakening-modal');

    if (isEyeOpened) {
        thirdEye.style.width = '50px';
        thirdEye.style.height = '50px';
        document.body.style.backgroundColor = '#111';
        document.getElementById('game-container').style.backgroundImage = 'url("https://fam1n0.github.io/ThirdEye/background3rdeye.jpg")';
        modal.style.display = 'none';
        isEyeOpened = false;
    } else {
        thirdEye.style.width = '100px';
        thirdEye.style.height = '100px';
        setTimeout(() => {
            document.body.style.backgroundColor = '#eee';
            document.getElementById('game-container').style.backgroundImage = 'url("https://fam1n0.github.io/ThirdEye/path-to-universe-image.jpg")';
            modal.style.display = 'block';
        }, 1000);
        isEyeOpened = true;
    }
}

function closeModal() {
    document.getElementById('awakening-modal').style.display = 'none';  // Hide the modal
}
