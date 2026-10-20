import React from 'react';
import { Truck, CheckCircle, Camera, MapPin } from 'lucide-react';

export default function OrderTrackingCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 max-w-md mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-4">
        <div>
          <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">ออเดอร์ #SQ240003</span>
          <h3 className="text-lg font-bold text-slate-800 mt-1">เรือเพชรทะเล ➔ ภัตตาคารชาวประมง</h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400">หมึกสดคัดเกรด</p>
          <p className="text-sm font-extrabold text-slate-700">35 กก.</p>
        </div>
      </div>

      {/* Status Timeline */}
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-[19px] before:w-0.5 before:bg-sky-100">
        
        {/* Step 1: Complete */}
        <div className="flex items-start gap-4 relative">
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm z-10">
            <CheckCircle className="w-5 h-5"/>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">คัดเกรด & บรรจุกล่องคุมอุณหภูมิเรียบร้อย</h4>
            <p className="text-xs text-slate-400 mt-0.5">HUB สะพานปลาชลบุรี • 14:30 น.</p>
            {/* Photo Proof */}
            <div className="mt-2 flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                <Camera className="w-5 h-5"/>
              </div>
              <span className="text-xs text-slate-500 font-medium">รูปยืนยันการแพ็กสินค้า (อัดออกซิเจน/น้ำแข็ง)</span>
            </div>
          </div>
        </div>

        {/* Step 2: Active / In Progress */}
        <div className="flex items-start gap-4 relative">
          <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md ring-4 ring-sky-100 z-10 animate-pulse">
            <Truck className="w-5 h-5"/>
          </div>
          <div>
            <h4 className="text-sm font-bold text-sky-600">กำลังจัดส่ง (รถตู้เย็นคุมอุณหภูมิ)</h4>
            <p className="text-xs text-slate-500 mt-0.5">คาดว่าจะถึงภายใน 30 นาที (16:15 น.)</p>
            <div className="mt-2 p-2.5 bg-sky-50/70 border border-sky-100 rounded-xl text-xs text-sky-800 flex justify-between items-center">
              <span>คนขับ: พี่สมศักดิ์ (รถทะเบียน 2กข-889)</span>
              <button className="bg-sky-600 text-white px-2.5 py-1 rounded-lg font-bold">โทรหาคนส่ง</button>
            </div>
          </div>
        </div>

        {/* Step 3: Pending */}
        <div className="flex items-start gap-4 relative">
          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 border border-slate-200 z-10">
            <MapPin className="w-5 h-5"/>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-400">จัดส่งสำเร็จ & ถ่ายรูปยืนยันหน้าร้าน</h4>
            <p className="text-xs text-slate-400 mt-0.5">รอคนขับอัปโหลดรูปเมื่อถึงหน้าร้าน</p>
          </div>
        </div>

      </div>
    </div>
  );
}
