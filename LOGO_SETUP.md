# 🎨 Panduan Penggantian Logo PT Arista Multi Sanjaya

## 📁 File Logo yang Diperlukan

Simpan file logo Anda di folder `images/` dengan nama berikut:

### **Logo Utama:**
- `logo.png` - Logo utama untuk header dan footer
- `logo-white.png` - Logo putih untuk navbar

### **Favicon & Icons:**
- `favicon-32x32.png` - Favicon kecil (32x32 pixel)
- `favicon-192x192.png` - Favicon besar (192x192 pixel)
- `favicon-180x180.png` - Apple touch icon (180x180 pixel)
- `favicon-270x270.png` - Windows tile image (270x270 pixel)

## 🔄 File yang Sudah Diupdate

Semua file HTML berikut sudah diupdate untuk menggunakan logo baru:

### **File Utama:**
- ✅ `index.html` - Halaman beranda
- ✅ `epc.html` - Halaman EPC
- ✅ `contruction.html` - Halaman konstruksi

### **File Baru (Tidak Perlu Update):**
- ✅ `about.html` - Halaman tentang kami
- ✅ `services.html` - Halaman layanan
- ✅ `projects.html` - Halaman proyek
- ✅ `career.html` - Halaman karir
- ✅ `blog.html` - Halaman blog
- ✅ `contact.html` - Halaman kontak
- ✅ `operation-maintenance.html` - Halaman O&M
- ✅ `investment.html` - Halaman investasi

## 📍 Lokasi Logo di Website

### **1. Header Logo:**
```html
<img src="images/logo.png" alt="Logo PT Arista Multi Sanjaya" width="60">
```

### **2. Navbar Logo (Putih):**
```html
<img src="images/logo-white.png" width="30">
```

### **3. Footer Logo:**
```html
<img loading="lazy" width="100" class="footer-logo" src="images/logo.png" alt="Logo PT Arista Multi Sanjaya">
```

### **4. Favicon:**
```html
<link rel="icon" href="images/favicon-32x32.png" sizes="32x32"/>
<link rel="icon" href="images/favicon-192x192.png" sizes="192x192"/>
<link rel="apple-touch-icon" href="images/favicon-180x180.png"/>
<meta name="msapplication-TileImage" content="images/favicon-270x270.png"/>
```

### **5. Schema Markup:**
```json
{
  "url": "images/logo.png",
  "contentUrl": "images/logo.png"
}
```

## 🎯 Langkah-langkah Penggantian Logo

### **Langkah 1: Siapkan File Logo**
1. Buat folder `images/` jika belum ada
2. Simpan file `logo pt.PNG` Anda sebagai `images/logo.png`
3. Buat versi putih untuk navbar sebagai `images/logo-white.png`
4. Buat favicon dalam berbagai ukuran

### **Langkah 2: Optimasi Logo**
- **Logo utama**: Resolusi tinggi (minimal 200x200 pixel)
- **Logo navbar**: Versi putih dengan background transparan
- **Favicon**: Ukuran tepat sesuai spesifikasi

### **Langkah 3: Test Website**
1. Buka website di browser
2. Periksa logo di header, navbar, dan footer
3. Periksa favicon di tab browser
4. Test di berbagai ukuran layar

## 🔧 Tips Desain Logo

### **Spesifikasi Teknis:**
- **Format**: PNG dengan background transparan
- **Resolusi**: Minimal 200x200 pixel untuk logo utama
- **Warna**: Sesuaikan dengan brand guidelines
- **Kontras**: Pastikan logo terlihat jelas di background putih dan gelap

### **Versi yang Diperlukan:**
1. **Logo Utama**: Warna asli untuk header dan footer
2. **Logo Putih**: Versi putih untuk navbar gelap
3. **Favicon**: Versi kecil yang tetap jelas

## ✅ Checklist Penggantian Logo

- [ ] File `logo.png` tersimpan di folder `images/`
- [ ] File `logo-white.png` tersimpan di folder `images/`
- [ ] File favicon tersimpan di folder `images/`
- [ ] Logo terlihat jelas di header website
- [ ] Logo putih terlihat jelas di navbar
- [ ] Logo terlihat jelas di footer
- [ ] Favicon muncul di tab browser
- [ ] Logo responsif di berbagai ukuran layar
- [ ] Logo sesuai dengan brand guidelines

## 🆘 Troubleshooting

### **Logo Tidak Muncul:**
1. Periksa path file di folder `images/`
2. Pastikan nama file sesuai dengan referensi di HTML
3. Periksa permission file

### **Logo Terlalu Besar/Kecil:**
1. Sesuaikan atribut `width` di tag `<img>`
2. Optimasi ukuran file logo

### **Favicon Tidak Muncul:**
1. Clear cache browser
2. Periksa ukuran file favicon
3. Pastikan format file sesuai

## 📞 Bantuan

Jika mengalami kesulitan dalam penggantian logo, pastikan:
1. File logo tersimpan dengan nama yang benar
2. Path file sesuai dengan referensi di HTML
3. Format file didukung oleh browser

---

**Catatan**: Semua file HTML sudah diupdate untuk menggunakan logo baru dari folder `images/`. Pastikan file logo Anda tersimpan dengan nama yang sesuai. 