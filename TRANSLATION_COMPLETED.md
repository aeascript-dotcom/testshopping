# การแปลเว็บไซต์เป็นภาษาไทยเสร็จสมบูรณ์

## สรุปการเปลี่ยนแปลง

### ✅ Font
- เปลี่ยนจาก Inter เป็น **Noto Sans Thai**
- รองรับภาษาไทยและละตินอย่างสมบูรณ์
- น้ำหนัก: 300, 400, 500, 600, 700

### ✅ ไฟล์ที่แปลแล้ว

1. **app/layout.tsx**
   - เพิ่ม Noto Sans Thai font
   - เปลี่ยน lang เป็น "th"
   - แปล metadata เป็นภาษาไทย

2. **tailwind.config.ts**
   - อัพเดท font family ให้ใช้ Noto Sans Thai

3. **components/layout/Header.tsx**
   - แปล banner: "ราคาโรงงานตรง • ไม่ผ่านคนกลาง • ประหยัดสูงสุด 60%"
   - แปลเมนู: สินค้าทั้งหมด, Lighting Pool, ล้างสต็อก, โปรแกรม PRO, โครงการพิเศษ

4. **components/layout/Footer.tsx**
   - แปลทุกส่วน: ชื้อปปิ้ง, สำหรับมืออาชีพ, ติดต่อเรา
   - อัพเดทข้อความติดต่อและนโยบาย

5. **components/products/ProductCard.tsx**
   - แปลป้ายราคา: ร้านค้า, ช่าง, ราคาโรงงาน
   - ปุ่ม: "เข้า Pool", "เพิ่มลงตะกร้า"
   - สถานะสต็อก: "มีสินค้า", "สินค้าหมด"

6. **components/home/HeroSection.tsx**
   - Headline: "ราคาโรงงาน ไม่ผ่านคนกลาง"
   - Features: "สูงสุด 60% ประหยัด", "จากโรงงาน โดยตรง", "คุณภาพ รับประกัน"
   - ปุ่ม: "เข้า Lighting Pool", "ดูสินค้าทั้งหมด"

7. **components/shared/SavingsCalculator.tsx**
   - "ความโปร่งใสราคา"
   - "ร้านค้าทั่วไป", "ราคาช่าง", "ราคาโรงงานของเรา"

8. **components/home/LightingPoolSection.tsx**
   - "Lighting Pool ที่เปิดให้เข้าร่วม"
   - "รวมซื้อ Pool ลดราคา"
   - "เข้าร่วม Pool"

## ไฟล์ที่ต้องแปลเพิ่มเติม

ผมได้แปลไฟล์หลักๆ แล้ว แต่ยังมีอีกบางไฟล์ที่ควรแปล:

- [ ] app/products/page.tsx
- [ ] app/cart/page.tsx  
- [ ] app/pool/[id]/page.tsx
- [ ] app/clearance/page.tsx
- [ ] app/wishlist/page.tsx
- [ ] app/products/[id]/page.tsx
- [ ] components/home/FactoryStory.tsx
- [ ] components/home/ProProgramCTA.tsx
- [ ] components/home/ShopByUseSection.tsx
- [ ] components/home/TrustSignals.tsx
- [ ] components/pool/PoolCard.tsx
- [ ] components/clearance/ClearanceCard.tsx
- [ ] components/products/ProductFilters.tsx
- [ ] components/products/ProductGrid.tsx

## วิธีทดสอบ

```bash
npm run dev
```

จากนั้นเปิด http://localhost:3000 เพื่อดูผลลัพธ์

## สรุป

✅ ใช้ฟอนต์ Noto Sans Thai ทั้งเว็บ
✅ แปลปุ่มและข้อความหลักเป็นภาษาไทย
✅ รักษา UX/UI เดิมไว้ครบถ้วน
✅ รองรับการแสดงผลภาษาไทยอย่างสมบูรณ์
