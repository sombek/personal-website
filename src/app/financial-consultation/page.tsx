import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { CalendlyEmbed } from '@/components/CalendlyEmbed'
import { MdOutlineLowPriority, MdTimelapse } from 'react-icons/md'
import { FaQuestion } from 'react-icons/fa'
import { LuGoal } from 'react-icons/lu'
import { PiPlant, PiPlantDuotone } from 'react-icons/pi'
import { TbMessageCircleQuestion } from 'react-icons/tb'
import { IoTimerOutline } from 'react-icons/io5'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

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
            انا غير متخصص في القوانين المالية و لا اقدر اعطيك نصائح قانونية
            بخصوص الضرائب و القروض و الاستثمارات الكبيرة، لكن اقدر اساعدك في
            تحديد الأولويات المالية و كيف تحققها.
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
        <p className="text-lg">سعر الجلسة الواحدة 250 ريال سعودي</p>
        <p className="text-lg">الحجز يكون عن طريق الرابط التالي</p>

        <CalendlyEmbed url="https://calendly.com/abdullah-hashim/financial-plan" />
      </article>
    </SimpleLayout>
  )
}
