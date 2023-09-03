
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

let isEyeOpened = false;

function toggleThirdEye() {
    const thirdEye = document.getElementById('third-eye');
    const modal = document.getElementById('awakening-modal');

    if (isEyeOpened) {
        // If the third eye is opened, revert everything to its initial state:
        thirdEye.style.width = '50px';
        thirdEye.style.height = '50px';
        document.body.style.backgroundColor = '#111';
        document.getElementById('game-container').style.backgroundImage = 'url("https://fam1n0.github.io/ThirdEye/background3rdeye.jpg")';
        modal.style.display = 'none';
        isEyeOpened = false;
    } else {
        // If the third eye is not opened, proceed with opening it:
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
