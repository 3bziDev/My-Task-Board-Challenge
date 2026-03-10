function selectIcon(icon) {
    document.getElementById("iconInput").value = icon;
}

function selectStatus(status) {
    document.getElementById("statusInput").value = status;
}


let selectBtn = document.querySelectorAll('#select-btn');
selectBtn.forEach(btn => {
    btn.addEventListener('click', function() { 
        selectBtn.forEach(b => b.style.backgroundColor = '');
        if (btn.classList.contains('in-progress')) {
            btn.style.backgroundColor = 'var( --main-color)';
            btn.style.color = 'white';
        } else if (btn.classList.contains('completed')) {
            btn.style.backgroundColor = 'var(--complet-task)';
            btn.style.color = 'white';
        } else if (btn.classList.contains('wont-do')) {
            btn.style.backgroundColor = 'var(--tasks-not-do)';
            btn.style.color = 'white';
        }
        else if (btn.classList.contains('to-do')) {
            btn.style.backgroundColor = 'var(--tasks-to-do)';
            btn.style.color = 'white';
        }
    })
});

let sIcon = document.querySelectorAll('.select-icon');
sIcon.forEach(icon => {
    icon.addEventListener('click', function() { 
        sIcon.forEach(i => i.style.backgroundColor = '');
        icon.style.backgroundColor = 'var(--main-color)';
    })
});