# JAVASCRIPT DOM

Repositori ini berisi tentang tugas Javascript DOM.

---

**Soal**

Berdasarkan link website https://www.javascripttutorial.net/javascript-dom/, terdapat 8 section. Buatlah kode yang mencakup:

1. Section 2-4: Masing-masing 3 contoh dengan 1 usecase
2. Section 4-6: Masing-masing 2 contoh dengan 1 usecase
3. Section 7-8: Masing-masing 2 contoh dengan 2 usecase

_Jawaban:_

### Nomor 1

index.html

```html
<div id="iniId">
  <p class="iniClass"></p>
</div>
```

js-dom.js

```javascript
const iniId = document.getElementById("iniId");
console.log(iniId);

const iniClass = document.querySelector(".iniClass");
console.log(iniClass.parentNode);

iniClass.textContent = "Halooo";

const div = document.createElement("div");
div.innerHTML = "<span>Ini span</span>";
document.body.appendChild(div);
```

Pada nomer ini, saya membuat div dengan id "iniId" yang memiliki child p dengan class "iniClass" pada file index.html. Kemudian pada file js-dom.js saya mengambil id dari div dengan metode _getElementById_ lalu saya tampilkan ke console browser dan class dari p dengan metode _querySelector_ yang saya ambil parentnya lalu saya tampilkan ke console browser. Lalu saya coba menambahkan teks "Halooo" pada tag p dengan mengambil class dari p yang bernama ".iniClass" lewat _textContent_. Setelah itu, saya menambahkan sebuah div ke dalam document dengan _createElement_ lalu saya tambahkan sebuah tag span dan tulisan "Ini span" lewat _innerHTML_ kemudian saya pasang ke document dengan _appendChild_.

### Nomor 2

index.html

```html
<img src="" alt="ini-image" id="image" />
```

js-dom.js

```javascript
const image = document.getElementById("image");
console.log(image.getAttribute("alt"));

image.classList.add("new-class");

console.log(image.hasAttribute("src"));
```

Sebagai awalan saya membuat sebuah tag img dengan atribut src yang kosong, alt yang berisi "ini-image", dan id "image" pada file index.html. Di file js-dom.js saya mengambil id dari tag img dengan _getElementById_ untuk saya tampilkan isi atribut alt dengan _getAttribute_ ke dalam console. Lalu saya tambahkan atribut class bernama "new-class" dengan _classList.add_. Setelah itu saya coba cek apakah tag img memiliki atribut src kedalam console dengan _hasAttribute_

### Nomor 3

index.html

```html
<button id="btn" onclick="alert('Alert clicked!')">click to show alert</button>

<button type="submit" id="submit">Submit</button>
```

js-dom.js

```javascript
const btn = document.querySelector("#btn");
btn.addEventListener("mouseover", () => {
  console.log("Button hovered!");
});

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Page not reloaded!");
});
```

Disini saya menambahkan tag button dengan id "btn" dan atribut onclick berisi "alert('Alert clicked!')" dan tag button ini berisi teks "click to show alert". Saya juga membuat button lain dengan id "btn" dan type "submit" dan berisi teks "Submit". Pada file js-dom.js, saya mengambil id "btn" dengan _querySelector_ yang saya gunakan untuk memberi sebuah event dengan _addEventListener_ bermetode "mouseover" yang akan menampilkan kalimat "Button Hovered!" di console. Untuk button satunya lagi saya ambil idnya dengan _getElementById_ lalu saya beri event dengan metode "click" yang akan menjalankan fungsi berisi _event.preventDefault()_ agar halaman tidak reload saat button di klik. Fungsi ini juga akan menampilkan kalimat "Page not reloaded!" ke dalam console.
