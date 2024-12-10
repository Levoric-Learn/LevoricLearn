/*!
 * Levoric Learn JS v2.1.0 (https://levoriclearn.com/)
 * Copyright 2023-2024 The Levoric Learn Authors
 * Licensed under MIT (https://github.com/Levoric-Learn/LevoricLearn?tab=MIT-1-ov-file)
 */
document.getElementById('menu-button').addEventListener('click', toggleMenu);

function toggleMenu() {
    const mainNav = document.getElementById('main-nav');
    mainNav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

function copyToClipboard(targetId, popupId) {
    const text = document.getElementById(targetId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const popup = document.getElementById(popupId);
        popup.innerText = 'Copied!';
        setTimeout(() => {
            popup.innerText = 'Copy to clipboard';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.getElementById('ll-copy-button').addEventListener('click', function () {
    copyToClipboard('ll-copy-target', 'll-popup');
});

document.getElementById('ll-copy-button-x-xz-n').addEventListener('click', function () {
    copyToClipboard('ll-copy-target-x', 'll-popup-x-k');
});

function searchLevoricLearn() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const items = document.getElementsByClassName('ll-code-list');
    for (let item of items) {
        const content = item.innerHTML.toLowerCase();
        if (content.includes(searchTerm)) {
            item.style.display = 'list-item';
        } else {
            item.style.display = 'none';
        }
    }
}

document.getElementById('search').addEventListener('input', searchLevoricLearn);

function showAlert(message, status) {
    const alertElement = document.getElementById('network-error-ll');
    let icon = '';
    if (status === 'offline') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-slash" viewBox="0 0 16 16">...</svg>';
    } else if (status === 'online') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 16 16">...</svg>';
    }
    alertElement.innerHTML = icon + ' ' + message;
    alertElement.classList.add('alert', 'show');
    alertElement.classList.remove('hidden');
}

function hideAlert() {
    const alertElement = document.getElementById('network-error-ll');
    alertElement.classList.add('hidden');
}

function checkInternetConnection() {
    if (navigator.onLine) {
        hideAlert();
    } else {
        showAlert('You are disconnected from the internet. Please check your connection.', 'offline');
    }
}

window.addEventListener('online', () => {
    showAlert('Back online', 'online');
    setTimeout(hideAlert, 5000);
});

window.addEventListener('offline', () => {
    showAlert('You are disconnected from the internet. Please check your connection.', 'offline');
});

checkInternetConnection();

function copyCodeToClipboard(selector, successMessageId, copyButtonId) {
    const code = document.querySelector(selector).innerText;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    const successMessage = document.getElementById(successMessageId);
    successMessage.classList.remove('ll-hidden');
    const copyButton = document.getElementById(copyButtonId);
    copyButton.classList.add('ll-hidden');

    setTimeout(() => {
        successMessage.classList.add('ll-hidden');
        copyButton.classList.remove('ll-hidden');
    }, 2000);
}

document.getElementById('levoric-learn-copy-btn').addEventListener('click', function () {
    copyCodeToClipboard('#levoric-learn-code-block', 'levoric-learn-copy-status', 'levoric-learn-copy-btn');
});

function addLink(url, title, imgSrc, imgAlt) {
    const li = document.createElement('li');
    li.className = 'hide-ll';

    const a = document.createElement('a');
    a.className = 'hide-ll';
    a.href = url;
    a.title = title;

    const img = document.createElement('img');
    img.className = 'x-ll-logo up-ll margin-x';
    img.src = imgSrc;
    img.alt = imgAlt;

    a.appendChild(img);
    li.appendChild(a);

    document.getElementById('linkList').appendChild(li);
}

addLink('/docs/v2.1.0/v21.0.html', 'Levoric Learn', '/docs/Image/Levoric Learn Logo.png', 'Levoric Learn home');

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.ll-video').forEach(video => {
        video.play().catch(error => {
        });
    });
});
