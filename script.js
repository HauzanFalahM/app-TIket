alert("Aplikasi Tiket");

const nama = prompt("Masukkan Nama Anda:");
const nilai = prompt("Masukkan Umur Anda:");

if (nilai > 13) {
    const studio = prompt("Pilih Studio \n A : Studio A \n B : Studio B \n C : Studio C");
    if (studio === 'A') {
        alert(`Tiket ${nama}, Studio A, Umur ${nilai}`);
    } else if (studio === 'B') {
        alert(`Tiket ${nama}, Studio B, Umur ${nilai}`);
    } else if (studio === 'C') {
        alert(`Tiket ${nama}, Studio C, Umur ${nilai}`);
    }
} else {
    alert("Maaf Studio Ini Khusus nilai 13 Tahun Keatas");
}