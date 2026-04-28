# 📇 Dijital Kartvizit — Kullanım Kılavuzu

> Modern, mobil uyumlu bir dijital kartvizit sitesi.  
> React + TypeScript + Vite ile geliştirilmiştir. Vercel'e tek tıkla yayınlanabilir.

---

## 📁 Klasör Yapısı

```
kartvizit/
├── public/
│   ├── favicon.svg          ← Sekme ikonu (isteğe bağlı değiştirin)
│   └── logo.png             ← LOGONUZU BURAYA KOYUN
├── src/
│   ├── components/
│   │   ├── BusinessCard.tsx        ← Ana kartvizit bileşeni
│   │   └── BusinessCard.module.css ← Stil dosyası
│   ├── App.tsx
│   ├── config.ts            ← ⭐ TÜM BİLGİLERİ BURADAN DÜZENLEYİN
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---




## ✏️ Bilgileri Güncelleme

`src/config.ts` dosyasını bir metin editörü (VS Code, Cursor vb.) ile açın ve alanları doldurun:

```ts
export const config = {
  name: 'Adınız Soyadınız',
  title: 'Yazılımcı / Tasarımcı / vb.',
  company: 'Şirket Adı',          // boş bırakabilirsiniz: ''
  website: 'https://www.siteniz.com',
  phone: '+90 555 123 45 67',
  phoneRaw: '905551234567',        // başında + olmadan sadece rakam
  whatsappMessage: 'Merhaba, bilgi almak istiyorum.',
  instagram: 'kullanici_adiniz',   // @ işareti YOK
  email: 'email@siteniz.com',      // boş bırakabilirsiniz: ''
  address: 'Mahalle, İlçe, Şehir',
  mapsUrl: '',                     // Google Maps linki — boşsa adres pasif görünür
  logoSrc: '/logo.png',
  showLogo: true,
}
```

### Google Maps Linki Nasıl Alınır?
1. [maps.google.com](https://maps.google.com) adresinde yerinizi bulun
2. Sağ tık → **"Buraya yol tarifi al"** veya **"Paylaş"** → linki kopyalayın
3. `mapsUrl` alanına yapıştırın

---

## 🖼️ Logo Ekleme

### Dosya Adı ve Konumu
`public/logo.png` olarak kaydedin. Başka bir ad kullanıyorsanız `config.ts` içindeki `logoSrc` alanını güncelleyin.





---

### Yöntem 2 — GitHub üzerinden (Önerilen)

1. [github.com](https://github.com) adresinde yeni bir **private** repo oluşturun (örn. `kartvizit`)
2. Terminal'de:

   git add .
   git commit -m "ilk yükleme"
   git push -u origin main
   ```
3.

✅ Bundan sonra her `git push` yaptığınızda Vercel otomatik olarak günceller.

---
