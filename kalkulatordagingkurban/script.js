document.addEventListener('DOMContentLoaded', () => {
    const jenisHewanSelect = document.getElementById('jenisHewan');
    const beratHidupInput = document.getElementById('beratHidup');
    const jumlahPesertaInput = document.getElementById('jumlahPeserta');
    const beratPerBagianInput = document.getElementById('beratPerBagian');
    const hitungButton = document.getElementById('hitungButton');

    const hasilDetailDiv = document.getElementById('hasilDetail');
    const beratKarkasSpan = document.getElementById('beratKarkas');
    const beratDagingMurniSpan = document.getElementById('beratDagingMurni');
    const beratJeroanSpan = document.getElementById('beratJeroan');
    const totalDagingSiapBagikanSpan = document.getElementById('totalDagingSiapBagikan');

    const hasilPembagianDiv = document.getElementById('hasilPembagian');
    const bagianPekurbanSpan = document.getElementById('bagianPekurban');
    const jumlahPekurbanTerimaSpan = document.getElementById('jumlahPekurbanTerima');
    const perPekurbanSpan = document.getElementById('perPekurban');
    const bagianFakirMiskinSpan = document.getElementById('bagianFakirMiskin');
    const jumlahFakirMiskinTerimaSpan = document.getElementById('jumlahFakirMiskinTerima');
    const bagianMasyarakatUmumSpan = document.getElementById('bagianMasyarakatUmum');
    const jumlahMasyarakatUmumTerimaSpan = document.getElementById('jumlahMasyarakatUmumTerima');

    jenisHewanSelect.addEventListener('change', () => {
        const jenisHewan = jenisHewanSelect.value;
        let maxPeserta = 1;
        let defaultBeratHidup = 1;

        switch (jenisHewan) {
            case 'sapi':
            case 'kerbau':
                maxPeserta = 7;
                defaultBeratHidup = 350;
                break;
            case 'unta':
                maxPeserta = 10;
                defaultBeratHidup = 500;
                break;
            case 'kambing':
            case 'domba':
            default:
                maxPeserta = 1;
                defaultBeratHidup = 30;
                break;
        }

        jumlahPesertaInput.value = Math.min(parseInt(jumlahPesertaInput.value), maxPeserta);
        jumlahPesertaInput.min = 1;
        jumlahPesertaInput.max = maxPeserta;
        beratHidupInput.value = defaultBeratHidup;

        hasilDetailDiv.style.display = 'none';
        hasilPembagianDiv.style.display = 'none';
    });

    beratHidupInput.addEventListener('input', () => {
        hasilDetailDiv.style.display = 'none';
        hasilPembagianDiv.style.display = 'none';
    });
    jumlahPesertaInput.addEventListener('input', () => {
        hasilDetailDiv.style.display = 'none';
        hasilPembagianDiv.style.display = 'none';
    });
    beratPerBagianInput.addEventListener('input', () => {
        hasilDetailDiv.style.display = 'none';
        hasilPembagianDiv.style.display = 'none';
    });

    hitungButton.addEventListener('click', () => {
        const jenisHewan = jenisHewanSelect.value;
        const beratHidup = parseFloat(beratHidupInput.value);
        const jumlahPeserta = parseInt(jumlahPesertaInput.value);
        const beratPerBagian = parseFloat(beratPerBagianInput.value);

        if (isNaN(beratHidup) || beratHidup <= 0 || isNaN(jumlahPeserta) || jumlahPeserta < 1 || isNaN(beratPerBagian) || beratPerBagian <= 0) {
            alert('Mohon masukkan angka yang valid untuk semua input.');
            return;
        }

        let maxPesertaAllowed = 1;
        let persentaseKarkas = 0.50;
        let persentaseDagingMurniDariKarkas = 0.70;
        let persentaseJeroanDariKarkas = 0.10;

        switch (jenisHewan) {
            case 'sapi':
            case 'kerbau':
                maxPesertaAllowed = 7;
                persentaseKarkas = 0.50;
                persentaseDagingMurniDariKarkas = 0.70;
                persentaseJeroanDariKarkas = 0.10;
                break;
            case 'unta':
                maxPesertaAllowed = 10;
                persentaseKarkas = 0.55;
                persentaseDagingMurniDariKarkas = 0.70;
                persentaseJeroanDariKarkas = 0.10;
                break;
            case 'kambing':
            case 'domba':
            default:
                maxPesertaAllowed = 1;
                persentaseKarkas = 0.48;
                persentaseDagingMurniDariKarkas = 0.70;
                persentaseJeroanDariKarkas = 0.10;
                break;
        }

        if (jumlahPeserta > maxPesertaAllowed) {
            alert(`Jumlah peserta untuk ${jenisHewan} tidak boleh lebih dari ${maxPesertaAllowed}.`);
            return;
        }

        const beratKarkas = beratHidup * persentaseKarkas;
        const beratDagingMurni = beratKarkas * persentaseDagingMurniDariKarkas;
        const beratJeroan = beratKarkas * persentaseJeroanDariKarkas;
        
        const totalDagingSiapBagikan = beratDagingMurni + beratJeroan;

        beratKarkasSpan.textContent = beratKarkas.toFixed(2);
        beratDagingMurniSpan.textContent = beratDagingMurni.toFixed(2);
        beratJeroanSpan.textContent = beratJeroan.toFixed(2);
        totalDagingSiapBagikanSpan.textContent = totalDagingSiapBagikan.toFixed(2);
        hasilDetailDiv.style.display = 'block';

        let bagianPekurban = 0;
        let bagianFakirMiskin = 0;
        let bagianMasyarakatUmum = 0;

        const satuPerTigaTotal = totalDagingSiapBagikan / 3;

        bagianPekurban = satuPerTigaTotal;
        bagianFakirMiskin = satuPerTigaTotal;
        bagianMasyarakatUmum = satuPerTigaTotal;

        const jumlahPekurbanTerima = jumlahPeserta;
        const perPekurban = (jumlahPeserta > 0) ? (bagianPekurban / jumlahPeserta) : 0;
        
        const jumlahFakirMiskinTerima = Math.floor(bagianFakirMiskin / beratPerBagian);
        const jumlahMasyarakatUmumTerima = Math.floor(bagianMasyarakatUmum / beratPerBagian);

        bagianPekurbanSpan.textContent = bagianPekurban.toFixed(2);
        jumlahPekurbanTerimaSpan.textContent = jumlahPekurbanTerima;
        perPekurbanSpan.textContent = perPekurban.toFixed(2);

        bagianFakirMiskinSpan.textContent = bagianFakirMiskin.toFixed(2);
        jumlahFakirMiskinTerimaSpan.textContent = jumlahFakirMiskinTerima;

        bagianMasyarakatUmumSpan.textContent = bagianMasyarakatUmum.toFixed(2);
        jumlahMasyarakatUmumTerimaSpan.textContent = jumlahMasyarakatUmumTerima;
        
        hasilPembagianDiv.style.display = 'block';
    });

    jenisHewanSelect.dispatchEvent(new Event('change'));
});