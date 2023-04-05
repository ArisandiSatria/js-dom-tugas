# JAVASCRIPT DOM

Repositori ini berisi tentang tugas Javascript DOM.

---

**Soal**

Berdasarkan link website https://www.javascripttutorial.net/javascript-dom/, terdapat 8 section. Buatlah kode yang mencakup:

1. Section 2-4: Masing-masing 3 contoh dengan 1 usecase
2. Section 4-6: Masing-masing 2 contoh dengan 1 usecase
3. Section 7-8: Masing-masing 2 contoh dengan 2 usecase

_Jawaban:_

1. Pada nomer ini, saya membuat div dengan id "iniId" yang memiliki child p dengan class "iniClass" pada file index.html. Kemudian pada file js-dom.js saya mengambil id dari div dengan metode _getElementById_ lalu saya tampilkan ke console browser dan class dari p dengan metode _querySelector_ yang saya ambil parentnya lalu saya tampilkan ke console browser. Lalu saya coba menambahkan teks "Halooo" pada tag p dengan mengambil class dari p yang bernama ".iniClass" lewat _textContent_. Setelah itu, saya menambahkan sebuah div ke dalam document dengan _createElement_ lalu saya tambahkan sebuah tag span dan tulisan "Ini span" lewat _innerHTML_ kemudian saya pasang ke document dengan _appendChild_.

2. Sebagai awalan saya membuat sebuah tag img dengan atribut src yang kosong, alt yang berisi "ini-image", dan id "image" pada file index.html. Di file js-dom.js saya mengambil id dari tag img dengan _getElementById_ untuk saya tampilkan isi atribut alt dengan _getAttribute_ ke dalam console. Lalu saya tambahkan atribut class bernama "new-class" dengan _classList.add_. Setelah itu saya coba cek apakah tag img memiliki atribut src kedalam console dengan _hasAttribute_

3. Disini saya menambahkan tag button dengan id "btn" dan atribut onclick berisi "alert('Alert clicked!')" dan tag button ini berisi teks "click to show alert". Saya juga membuat button lain dengan id "btn" dan type "submit" dan berisi teks "Submit". Pada file js-dom.js, saya mengambil id "btn" dengan _querySelector_ yang saya gunakan untuk memberi sebuah event dengan _addEventListener_ bermetode "mouseover" yang akan menampilkan kalimat "Button Hovered!" di console. Untuk button satunya lagi saya ambil idnya dengan _getElementById_ lalu saya beri event dengan metode "click" yang akan menjalankan fungsi berisi _event.preventDefault()_ agar halaman tidak reload saat button di klik. Fungsi ini juga akan menampilkan kalimat "Page not reloaded!" ke dalam console.
