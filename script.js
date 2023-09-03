function openThirdEye() {
    const thirdEye = document.getElementById('third-eye');

    thirdEye.style.width = '100px';
    thirdEye.style.height = '100px';

    // Simulate the "opening" of the third eye
    setTimeout(() => {
        document.body.style.backgroundColor = '#eee';
        document.getElementById('game-container').style.backgroundImage = 'url("path-to-universe-image.jpg")';

        alert('You have awakened the inner universe!');
    }, 1000);
}
