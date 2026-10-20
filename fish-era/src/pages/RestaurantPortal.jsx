import { Fish, Store, ClipboardList, Truck, PackageCheck } from 'lucide-react'
import OrderTrackingCard from '../components/OrderTrackingCard.jsx'

const stats = [
  { label: 'ออเดอร์วันนี้', value: '3', icon: ClipboardList },
  { label: 'กำลังจัดส่ง', value: '1', icon: Truck },
  { label: 'รับสินค้าแล้ว', value: '2', icon: PackageCheck },
]

export default function RestaurantPortal() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center">
              <Fish className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-extrabold text-slate-800 leading-tight">Fish Era</p>
              <p className="text-xs text-slate-400">Restaurant Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Store className="w-4 h-4 text-sky-600" />
            <span className="font-medium">ภัตตาคารชาวประมง</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <section>
          <h1 className="text-2xl font-bold text-slate-800">ติดตามออเดอร์</h1>
          <p className="text-sm text-slate-500 mt-1">สถานะการจัดส่งอาหารทะเลสดจากเรือถึงร้านของคุณแบบเรียลไทม์</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">{label}</p>
                <p className="text-xl font-extrabold text-slate-800">{value}</p>
              </div>
            </div>
          ))}
        </section>

        <section aria-label="ออเดอร์ที่กำลังติดตาม">
          <OrderTrackingCard />
        </section>
      </main>
    </div>
  )
}
