import { SimpleLayout } from '@/components/SimpleLayout'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'
import { MdOutlineLowPriority } from 'react-icons/md'
import { PiPlant } from 'react-icons/pi'
import { TbMessageCircleQuestion } from 'react-icons/tb'
import { IoTimerOutline } from 'react-icons/io5'
import coinsIcon from '@/images/wired-outline-298-coins.gif'

export const metadata = {
  title: 'الإستشارات المالية للأفراد',
  description:
    'أقدم استشارات مالية للأفراد، أساعدك في تحقيق أهدافك المالية و المساعدة في تحقيق الاستقرار المالي.',
}

const incentives = [
  {
    name: 'الجلسة',
    icon: <IoTimerOutline className="size-16 text-teal-500" />,
    description: 'الجلسة بتكون أونلاين، و تقريبا تاخد حدود ساعة إلى ساعة و نصف',
  },
  {
    name: 'أسئلة مالية',
    icon: <TbMessageCircleQuestion className="size-16 text-teal-500" />,
    description:
      'نحتاج نعرف معلومات عن الوضع المالي الحالي مثل الدخل، النفقات، القروض وغيرها',
  },
  {
    name: 'الأولويات المالية',
    icon: <MdOutlineLowPriority className="size-16 text-teal-500" />,
    description: 'بنسولف عن الأولويات للفترة الجاية، مثل زواج، سيارة، بيت...',
  },
  {
    name: 'الخطة المالية',
    icon: <PiPlant className="size-16 text-teal-500" />,
    description: 'بناء خطة مالية شهرية وسنوية حتى تحقق الأهداف',
  },
]

export default function Uses() {
  return (
    <SimpleLayout
      title="الإستشارات المالية للأفراد"
      intro={
        <>
          <p>
            أقدم استشارات مالية للأفراد، أساعدك في تحقيق أهدافك المالية و
            المساعدة في تحقيق الاستقرار المالي. التعامل مع المال بشكل عام صعب،
            خصوصا لما تكون تتوفر خطط كثير في بالك خصوصا في بداية المسار المهني و
            اكيد تجي اسئلة كثير مثل، متى اقدر اسافر، اشتري سيارة؟ الزواج؟ طيب و
            الاستثمار؟ هل اشتري ارض؟
          </p>
          <p>
            نفس المشاكل هذه مرت علي و انا بداية مسيرتي المهنية، و بعد تجربة
            طويلة و الإحتكاك بأشخاص متخصصين في المجال المالي، قررت اني اقدم
            خدمات استشارات مالية للأفراد.
          </p>
        </>
      }
      icon={coinsIcon}
    >
      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        {incentives.map((incentive) => (
          <div key={incentive.name} className="sm:flex lg:block">
            <div className="align-center sm:flex-shrink-0">
              {incentive.icon}
            </div>
            <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-xl font-bold text-teal-900 dark:text-gray-100">
                {incentive.name}
              </h3>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                {incentive.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <article>
        <h3 className="mt-16 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          ملاحظة هامة
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li className="text-lg">
            الاستشارات محدودة فقط على الأمور المالية الشخصية ولا تشمل الأمور
            المتعلّقة بالمشاريع أو الأعمال.
          </li>
          <li className="text-lg">
            أنا شخص غير متخصص ماليًا، لكن جميع الاستشارات من خبرتي الشخصية
            ورؤيتي مع أشخاص سابقين.
          </li>
        </ol>
      </article>

      <article>
        <h3
          id="tools"
          className="mt-16 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
        >
          الحجز و الأسعار
        </h3>
        <p className="text-lg">
          سعر الجلسة الواحدة
          <span
            className={
              'border-1 dark:text-teal-10 mx-2 rounded-md border-teal-500 p-1 text-teal-500 dark:border-teal-500 dark:text-teal-100'
            }
          >
            250
          </span>
          ريال سعودي
        </p>
        <p className="text-lg">الحجز يكون عن طريق الرابط التالي</p>

        <CalendlyEmbed url="https://calendly.com/abdullah-hashim/financial-plan" />
      </article>
    </SimpleLayout>
  )
}
