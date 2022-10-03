var textNama = document.getElementById('ini-saya')
        var textRole =  document.getElementById('text-role')
        var textAvailablity = document.getElementById('text-availability')
        var textUsia = document.getElementById('text-usia')
        var textLokasi = document.getElementById('text-lokasi')
        var textPengalaman = document.getElementById('text-pengalaman')
        var textEmail = document.getElementById('text-email')
        document.getElementById('input-nama').value = textNama.innerText
        document.getElementById('input-role').value = textRole.innerText
        document.getElementById('input-availability').value = textAvailablity.innerText
        document.getElementById('input-usia').value = textUsia.innerText
        document.getElementById('input-lokasi').value = textLokasi.innerText
        document.getElementById('input-pengalaman').value = textPengalaman.innerText
        document.getElementById('input-email').value = textEmail.innerText
        function handleSubmit(event) {
            var inputNama = document.getElementById('input-nama')
            var inputRole = document.getElementById('input-role')
            var inputAvailability = document.getElementById('input-availability')
            var inputUsia = document.getElementById('input-usia')
            var inputLokasi = document.getElementById('input-lokasi')
            var inputPengalaman = document.getElementById('input-pengalaman')
            var inputEmail = document.getElementById('input-email')

            localStorage.setItem('nama', inputNama.value)
            localStorage.setItem('role', inputRole.value)
            localStorage.setItem('availability', inputAvailability.value)
            localStorage.setItem('usia', inputUsia.value)
            localStorage.setItem('lokas', inputLokasi.value)
            localStorage.setItem('pengalaman', inputPengalaman.value)
            localStorage.setItem('email', inputEmail.value)

            document.getElementById('ini-saya').innerText = inputNama.value
            document.getElementById('text-role').innerText = inputRole.value
            document.getElementById('text-availability').innerText = inputAvailability.value
            document.getElementById('text-usia').innerText = inputUsia.value
            document.getElementById('text-lokasi').innerText = inputLokasi.value
            document.getElementById('text-pengalaman').innerText = inputPengalaman.value
            document.getElementById('text-email').innerText = inputEmail.value
            
            const text1 = document.getElementById('nyk')
            const display = text1.style.display
            if (display == 'block') {
                console.log(display)
                text1.style.display = 'none'
            } else {
                console.log(display)
                text1.style.display = 'block'
            }
                event.preventDefault()
        }   

        const buttonEdit = document.getElementById('edit')
        buttonEdit.addEventListener('click',function() {
            const shift = document.getElementById('nyk')
            const display = shift.style.display
            if (display == 'block') {
                console.log(display)
                shift.style.display = 'none'
            } else {
                console.log(display)
                shift.style.display = 'block'
            }
                console.log(display, 'display')
            })