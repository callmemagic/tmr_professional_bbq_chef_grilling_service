"use client";

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MenuAccordion } from "@/components/ui/menu-accordion";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { EventGallery } from "@/components/ui/event-gallery";
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

const menuC = [
  "8位起",
  "厚肉元貝 8只",
  "北寄貝 8只",
  "游水大海虾 8只",
  "聖子皇 8只",
  "10頭大連鲍魚 8只",
  "本地大蜆 1斤",
  "土匪雞中亦 1磅",
  "蜜汁雞中亦 1磅",
  "香茅有骨豬扒 1磅",
  "蒜香雞扒 1磅",
  "馬來沙嗲豬肉串8串装 1磅",
  "韓式燒汁牛柳條 1磅",
  "咖哩尤魚翼 1磅",
  "泰式豬頸肉 1磅",
  "粗红腸 1條",
  "廚C腸仔 2包",
  "墨魚丸 0.5磅",
  "炸魚旦 0.5磅",
  "芝士丸 0.5磅",
  "和牛牛丸 0.5磅",
  "玉米 3支",
  "金菇 2包",
  "茄子 2條",
  "鮮冬菇 2份",
  "生菜(包食物用) 1斤",
  "蒜蓉醬 1",
  "蜜糖 1",
  "錫紙 1",
  "抹手紙 1",
  "碟 16只",
  "筷子 16對",
  "BBQ夾 2支"
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

const testimonialImages = [
  "/images/Testimonials/1.jpg",
  "/images/Testimonials/2.jpg",
  "/images/Testimonials/3.jpg",
  "/images/Testimonials/4.jpg",
  "/images/Testimonials/5.jpg",
  "/images/Testimonials/6.jpg",
  "/images/Testimonials/7.jpg",
  "/images/Testimonials/8.jpg",
  "/images/Testimonials/9.jpg",
  "/images/Testimonials/10.jpg",
];

const allEventImages = Array.from({ length: 33 }, (_, i) => `/images/Event/${i + 1}.jpg`);

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
            香港優質海鮮BBQ到會
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-yellow-400 md:text-3xl">
            與摯愛共聚，在家享受五星級烤海鮮盛宴
          </h2>
          <p className="mb-4 text-xl text-white md:text-2xl">
            服務全港大型企業及私人派對，放下煩惱，活在當下
          </p>
          <p className="mb-8 text-xl text-white md:text-2xl">
            8位起｜專業BBQ師傅上門服務（另洽）
          </p>
          <div className="flex gap-4">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想查詢BBQ到會服務詳情"
              className="text-lg font-semibold"
            >
              立即WhatsApp查詢
            </WhatsAppButton>
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解BBQ師傅到會服務"
              className="text-lg font-semibold"
            >
              師傅到會
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Pain Points Section - 現在放在前面 */}
      <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-orange-700 md:text-4xl">
            告別燒烤煩惱，享受無憂 BBQ 時光
          </h2>
          <p className="mb-12 text-center text-lg text-orange-600 md:text-xl">
            香港人搞 BBQ 必遇到嘅煩惱，我們全部幫你解決！
          </p>
          
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {/* 痛點1 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">搵齊材料好費時，四圍撲街採購累死人</h3>
                <p className="text-gray-600">喺香港想搞 BBQ，要去街市買海鮮，超市買肉類，再去雜貨舖買工具，仲要自己準備醬料同餐具，又重又麻煩！我們一站式送齊晒所有食材餐具，完全唔使你四圍奔波！</p>
              </div>
            </div>
            
            {/* 痛點2 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">食材品質參差，浪費金錢又影響心情</h3>
                <p className="text-gray-600">平時自己買嘅海鮮新唔新鮮、肉質好唔好完全睇運氣，試過花大錢但食材質素麻麻。我們嚴選頂級食材，保證新鮮直送，絕不會再讓你失望！</p>
              </div>
            </div>
            
            {/* 痛點3 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">自己燒自己食，無法真正享受派對樂趣</h3>
                <p className="text-gray-600">搞 BBQ 本來想輕鬆享受，點知自己要負責燒嘢，全程無法放鬆參與聚會。我們專業師傅上門服務，代勞燒烤工作，讓你真正做個 VIP 賓客，完全投入派對氣氛！</p>
              </div>
            </div>
            
            {/* 痛點4 */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">成本計算難，預算經常超支</h3>
                <p className="text-gray-600">自己搞 BBQ 好難計算實際花費，材料買太多會浪費，買太少又唔夠食，最後往往超支。我們套餐價格清晰透明，按人頭收費，無隱藏收費，讓你精準控制預算！</p>
              </div>
            </div>
            
            {/* 行動呼籲 */}
            <div className="md:col-span-2 mt-8 text-center">
              <p className="mb-6 text-lg font-semibold text-orange-700">唔使再煩惱！立即預訂我們的 BBQ 到會，一站式解決所有問題！</p>
              <p className="mb-6 text-lg font-semibold text-orange-700">重新找回與親友相聚的歡樂時光，做真正的主人，不再做燒烤的「奴隸」！</p>
              <WhatsAppButton
                phoneNumber="85259727945"
                message="你好，我想了解BBQ到會服務，如何解決我搞BBQ嘅煩惱"
                className="inline-block text-lg font-semibold shadow-xl"
              >
                即刻解決我嘅 BBQ 煩惱
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 現在放在第二位 */}
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
                  優質海鮮食材
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
                  師傅上門代烤服務(跟公司套餐)
                </h3>
                <p className="text-gray-700">
                  星级BBQ烤肉達人上門，您只需坐定定等食
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
                  全港多間知名企業，團體及私人派對指定之選，深受他們的支持及信任
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="bg-orange-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-orange-700 md:text-4xl">
            一站式 BBQ 到會體驗，全程無憂
          </h2>
          <p className="mb-16 text-center text-lg text-orange-600 md:text-xl">
            從落單到善後，我們全方位服務，讓您只需享受美食和歡樂時光
          </p>

          <div className="relative">
            {/* 時間軸 */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-orange-200 md:block"></div>

            {/* 步驟1 */}
            <div className="mb-16 md:mb-24">
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="order-2 md:order-1 md:text-right">
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">輕鬆預訂 - 30秒快速下單</h3>
                    <p className="text-lg text-gray-600">只需透過 WhatsApp 聯絡我們，專人即刻回覆，根據人數及預算提供建議。無需繁複表格，無需長時間等待。最遲提前兩天預訂，特殊日子建議提早一週確保位置。</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/輕鬆預訂-30秒快速下單.jpg"
                        alt="在手機上預訂BBQ到會"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 步驟2 */}
            <div className="mb-16 md:mb-24">
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  2
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="md:text-left">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/準時送達-一次性送齊全部所需.jpg"
                        alt="新鮮食材配送"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">準時送達 - 一次性送齊全部所需</h3>
                    <p className="text-lg text-gray-600">我們會於活動當日指定時間前30-60分鐘將所有食材及用具送抵指定地點，只要有馬路的地方都能送達，無論離島、郊區都覆蓋。所有海鮮食材均經過嚴格保鮮處理，確保新鮮度。一次性送齊所有物資，避免您東奔西跑。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 步驟3 */}
            <div className="mb-16 md:mb-24">
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  3
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="order-2 md:order-1 md:text-right">
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">專業師傅服務 - 全程代勞燒烤工作（另洽）</h3>
                    <p className="text-lg text-gray-600">可額外選擇專業師傅上門服務（需另洽收費），負責處理所有燒烤工作，讓您和客人無需動手，完全專注於享受美食與派對樂趣。師傅會根據食材特性調整火候及烹調時間，確保每款食物都能完美呈現。</p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/專業師傅服務-全程代勞燒烤工作-另洽.jpg"
                        alt="專業師傅燒烤服務"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 步驟4 */}
            <div>
              <div className="relative flex flex-col items-center">
                <div className="absolute left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  4
                </div>
                <div className="mt-8 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
                  <div className="md:text-left">
                    <div className="overflow-hidden rounded-lg shadow-lg h-48">
                      <Image
                        src="/images/step-by-step/售後服務-貼心回訪.jpg"
                        alt="售後服務及優惠"
                        width={400}
                        height={240}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-orange-600">售後服務 - 貼心回訪</h3>
                    <p className="text-lg text-gray-600">活動後我們會主動聯繫您，了解活動體驗及意見反饋。針對任何問題提供即時跟進及解決方案。長期客戶更可享有特別優惠及提前預訂權益，確保節日期間仍能安排到優質服務。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 行動呼籲 */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-xl font-semibold text-orange-700">香港最無憂嘅BBQ到會體驗，全程專人跟進！</p>
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想了解貴公司的BBQ到會完整服務流程"
              className="inline-block text-lg font-semibold shadow-xl"
            >
              立即了解完整服務詳情
            </WhatsAppButton>
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
            限時優惠送贈品
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 第一個套餐 - 最便宜 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="/images/emerson-vieira-Mq1LDuswX2o-unsplash.jpg"
                  alt="海鮮BBQ餐AA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  人氣No.1
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 AA (8位起)</h3>
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
                <div className="mb-3 rounded-md bg-red-50 p-2 text-center">
                  <p className="text-sm font-semibold text-red-600">🔥 月底前訂購享9折優惠！尚餘少量名額 🔥</p>
                </div>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐AA（$288/位）"
                  className="w-full"
                >
                  立即WhatsApp查詢
                </WhatsAppButton>
              </div>
            </div>

            {/* 第二個套餐 - 中等價格 */}
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
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 A (8位起)</h3>
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
                <div className="mb-3 rounded-md bg-red-50 p-2 text-center">
                  <p className="text-sm font-semibold text-red-600">⚡ 平日下單額外再送手工甜品！最後3天 ⚡</p>
                </div>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐A（$315/位）"
                  className="w-full"
                >
                  立即WhatsApp查詢
                </WhatsAppButton>
              </div>
            </div>

            {/* 第三個套餐 - 最貴 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="海鮮BBQ餐C"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 rounded-lg bg-orange-100 px-4 py-2 text-orange-600">
                  豪華盛宴
                </div>
                <h3 className="mb-2 text-2xl font-bold">海鮮BBQ餐 C (8位起)</h3>
                <p className="mb-4 text-3xl font-bold text-orange-600">$395/位</p>
                <ul className="mb-6 space-y-2">
                  <li>💎 多款頂級海鮮</li>
                  <li>💎 32款豐富食材</li>
                  <li>💎 4種肉類選擇</li>
                  <li>💎 精選燒烤小食</li>
                  <li>💎 全套餐具齊全</li>
                </ul>
                <MenuAccordion items={menuC} className="mb-4" />
                <p className="mb-4 text-sm text-gray-600">
                  8位價＝$3,160｜豪華盛宴，滿足饕客！
                </p>
                <div className="mb-3 rounded-md bg-red-50 p-2 text-center">
                  <p className="text-sm font-semibold text-red-600">💎 頂級套餐限量供應，周末檔期即將售罄！💎</p>
                </div>
                <WhatsAppButton
                  phoneNumber="85259727945"
                  message="你好，我想訂購海鮮BBQ餐C（$395/位）"
                  className="w-full"
                >
                  立即WhatsApp查詢
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
                  src="/images/3reasons/emerson-vieira-3wzps8KbdCQ-unsplash.jpg"
                  alt="限時優惠 - 豐富烤海鮮"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  限時優惠
                </h3>
                <p>
                  贈品5選2：長法包/菠蘿/泰式海鮮汁/香茅雞翼(試)/棉花糖
                </p>
                <p className="mt-3 font-semibold text-red-600">
                  ⏰ 優惠至本月底！年度盛事日期已90%爆滿，即刻預訂鎖定心水日子
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="/images/3reasons/james-kern-bnLqotJKxn4-unsplash.jpg"
                  alt="專業服務 - 廚師專注代烤"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  專業服務
                </h3>
                <p>一般私人派對必須最遲提前兩天預訂，確保為客人提供最佳服務質素</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg">
              <div className="relative h-40 w-full">
                <Image
                  src="/images/3reasons/z-grills-australia-n0zK35d967w-unsplash.jpg"
                  alt="信譽保證 - 品質食材與服務"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-2xl font-bold text-yellow-600">
                  信譽保證
                </h3>
                <p>商務或員工聚餐首選，我們公司更成為大型企業或團體的長期指定合作夥伴</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 改用輪播 */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            客戶真實評價
          </h2>
          <TestimonialCarousel imagePaths={testimonialImages} options={{ loop: true }} />
        </div>
      </section>

      {/* Event Photos Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-orange-600 md:text-4xl">
            🔥 精彩活動瞬間回顧 🔥
          </h2>
          <EventGallery imagePaths={allEventImages} />
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
          <p className="mb-6 text-xl font-semibold">
            與家人朋友共享美好時光，創造難忘回憶，無需親自勞累
          </p>
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
            <p className="text-lg font-semibold text-yellow-300">
              ⚠️ 旺季期間（聖誕、新年、復活節）預約從速，立即鎖定日期！
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppButton
              phoneNumber="85259727945"
              message="你好，我想訂購BBQ到會"
              className="text-lg font-semibold shadow-xl"
            >
              立即WhatsApp查詢
            </WhatsAppButton>
          </div>
          <p className="mt-8 text-sm">
            ⚠️ 注意：請提前至少兩天預訂，以確保食材新鮮度及服務質素。週末檔期準備提早一週截單，以免向隅！
          </p>
        </div>
      </section>

      {/* More Options Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            需要更多選擇或大型宴會方案？
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            瀏覽我們的官方網站，探索更多套餐選項、自選食材以及為大型企業和團體量身定制的專業到會服務。
          </p>
          <a
            href="https://tmrseafoodbbq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            瀏覽官方網站
          </a>
        </div>
      </section>

      </main>
  );
}
