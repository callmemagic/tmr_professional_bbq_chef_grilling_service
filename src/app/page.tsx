"use client";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MenuAccordion } from "@/components/ui/menu-accordion";
import Image from "next/image";

const menuAA = [
  "8位起",
  "厚肉元貝",
  "游水大海虾",
  "10頭大連鲍魚",
  "本地大蜆",
  "蜜汁雞中亦",
  "蒜蓉有骨豬扒",
  "孜然雞肉串8串装",
  "黑椒西冷薄牛扒",
  "咖哩尤魚翼",
  "泰式豬頸肉",
  "廚C腸仔",
  "墨魚丸",
  "貢丸",
  "芝士丸",
  "和牛牛丸",
  "玉米",
  "金菇",
  "鮮冬菇",
  "生菜(包食物用)",
  "蒜蓉醬",
  "蜜糖",
  "錫紙",
  "抹手紙",
  "碟",
  "筷子",
  "BBQ夾"
];

const menuBB = [
  "8位起",
  "游水大海虾",
  "聖子皇",
  "10頭大連鲍魚",
  "本地大蜆",
  "土匪雞中亦",
  "蒜香雞扒",
  "馬來沙嗲豬肉串8串装",
  "韓式燒汁牛柳條",
  "咖哩尤魚翼",
  "香草蜜糖金沙骨",
  "廚C腸仔",
  "墨魚丸",
  "龍虾丸",
  "芝士丸",
  "和牛牛丸",
  "玉米",
  "金菇",
  "蕃薯",
  "生菜(包食物用)",
  "蒜蓉醬",
  "蜜糖",
  "錫紙",
  "抹手紙",
  "碟",
  "筷子",
  "BBQ夾"
];

const menuA = [
  "8位起",
  "厚肉元貝",
  "北寄貝",
  "游水大海虾",
  "10頭大連鲍魚",
  "本地大蜆",
  "蒜蓉雞中亦",
  "土匪雞中亦",
  "黑椒有骨豬扒",
  "蜜汁雞扒",
  "孜然雞肉串8串装",
  "馬來沙嗲豬肉串8串装",
  "黑椒牛仔骨",
  "咖哩尤魚翼",
  "香草蜜糖金沙骨",
  "粗红腸",
  "廚C腸仔",
  "墨魚丸",
  "炸魚旦",
  "芝士丸",
  "和牛牛丸",
  "玉米",
  "金菇",
  "茄子",
  "鮮冬菇",
  "生菜(包食物用)",
  "蒜蓉醬",
  "蜜糖",
  "錫紙",
  "抹手紙",
  "碟",
  "筷子",
  "BBQ夾"
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="BBQ背景"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            香港頂級海鮮BBQ到會
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-yellow-400 md:text-3xl">
            米芝蓮級燒烤體驗直送到府
          </h2>
          <p className="mb-8 text-xl text-white md:text-2xl">
            免運費｜8位起｜專業BBQ師傅上門服務（另洽）
          </p>
          <div className="flex gap-4">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想查詢BBQ到會服務詳情"
              className="text-lg font-semibold"
            >
              立即查詢
            </WhatsAppButton>
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解BBQ師傅到會服務"
              className="text-lg font-semibold"
            >
              查詢師傅到會
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            為何選擇我們？
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="新鮮海鮮"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  頂級海鮮食材
                </h3>
                <p className="text-gray-700">
                  嚴選優質元貝、鮑魚、大蝦，品質保證！
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="BBQ工具"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  懶人至尊享受
                </h3>
                <p className="text-gray-700">
                  由食材、醬料到餐具，我們一手包辦，連蜜糖都幫你準備好！
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="專業廚師"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  師傅到會服務
                </h3>
                <p className="text-gray-700">
                  米芝蓮酒店級燒烤達人上門，您只需坐定等食！
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="客戶評價"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-orange-600">
                  專業信譽
                </h3>
                <p className="text-gray-700">
                  香港知名企業及商務宴會指定之選，深受各界信賴！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            入門精選套餐
          </h2>
          <p className="mb-12 text-center text-xl text-orange-600">
            限時免運費
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="海鮮BBQ餐AA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  人氣No.1
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 AA</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$288/位</p>
                <ul className="mb-6 space-y-2">
                  <li>✨ 厚肉元貝</li>
                  <li>✨ 游水大蝦</li>
                  <li>✨ 10頭鮑魚</li>
                  <li>✨ 黑椒西冷牛扒</li>
                  <li>✨ 共27款食材及用具</li>
                </ul>
                <MenuAccordion items={menuAA} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$2,304｜豐富海鮮配料，超值享受！
                </p>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐AA（$288/位）"
                  className="w-full"
                >
                  立即預訂
                </WhatsAppButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="海鮮BBQ餐BB"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  東南亞風味
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 BB</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$288/位</p>
                <ul className="mb-6 space-y-2">
                  <li>💥 聖子皇</li>
                  <li>💥 韓式牛柳條</li>
                  <li>💥 金沙骨</li>
                  <li>💥 馬來沙嗲串</li>
                  <li>💥 共27款食材及用具</li>
                </ul>
                <MenuAccordion items={menuBB} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$2,304｜歡迎查詢專業師傅到會服務！
                </p>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐BB（$288/位），同時了解師傅到會服務"
                  className="w-full"
                >
                  立即預訂
                </WhatsAppButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="海鮮BBQ餐A"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  頂配之選
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 A</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$315/位</p>
                <ul className="mb-6 space-y-2">
                  <li>🌟 北寄貝</li>
                  <li>🌟 雙味雞翼</li>
                  <li>🌟 牛仔骨</li>
                  <li>🌟 32款食材及用具</li>
                  <li>🌟 贈送秘製蒜蓉醬</li>
                </ul>
                <MenuAccordion items={menuA} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$2,520｜宴客體面之選！
                </p>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐A（$315/位）"
                  className="w-full"
                >
                  立即預訂
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Order Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            立即下單3大理由
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="優惠"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  限時優惠
                </h3>
                <p>全港免運費！8位起即可享受！</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="專業服務"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  專業服務
                </h3>
                <p>提前兩天預訂，確保最佳服務質素！</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="信譽保證"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  信譽保證
                </h3>
                <p>專業商務宴會首選，大型企業指定合作夥伴！</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            客戶真實評價
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="餐廳評價"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mb-4 text-lg italic">
                  「一班朋友開Party叫左個海鮮BBQ餐，啲海鮮新鮮到爆！全部工具齊晒，完全唔使操心！」
                </p>
                <p className="text-right font-semibold">——跑馬地住宅Party</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="企業活動"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="mb-4 text-lg italic">
                  「公司Team Building訂咗50人份，連HR都話要encore！」
                </p>
                <p className="text-right font-semibold">——中環IT公司</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-red-600 py-16 text-white md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="BBQ背景"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            立即行動！3步極速下單
          </h2>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold">1. 選擇套餐</h3>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">2. 告訴我們您的需求</h3>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">3. 坐等美食送上門！</h3>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xl">
              💬 WhatsApp落單：點擊下方按鈕，專人即時回覆！
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想訂購BBQ到會"
              className="text-lg font-semibold"
            >
              立即落單
            </WhatsAppButton>
          </div>
          <p className="mt-8 text-sm">
            ⚠️ 注意：請提前至少兩天預訂，以確保食材新鮮度及服務質素
          </p>
        </div>
      </section>
    </main>
  );
}
