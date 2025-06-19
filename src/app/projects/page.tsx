import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { BiCoin } from 'react-icons/bi'

const projects = [
  {
    name: 'لعبة إنسان حيوان جماد',
    description:
      'لعبة عربية تعليمية ممتعة تساعد على تطوير الذاكرة والمفردات. اللعبة تتضمن خمس خانات: إنسان، حيوان، جماد، نبات، وبلاد. يمكن اللعب مع الأصدقاء في الوقت الحقيقي مع نظام نقاط وتحديات زمنية.',
    link: {
      href: '/projects/insan-jamad',
      label: 'عرض التفاصيل',
    },
    logo: '🎮',
  },
  {
    name: 'تطبيق متابعة النفقات الشخصية',
    description:
      'كنت أستخدم إكسل لمتابعة مصاريفي اليومية، لكن مع الوقت حسيت إنه متعب، فقررت أسوي تطبيق بسيط يساعدني أتابع نفقاتي بشكل أفضل. الحين، صار التطبيق يقدر يساعد أي شخص يبغى يرتب مصاريفه بسهولة.',
    link: {
      href: 'https://spending-tracker-tau.vercel.app/',
      label: 'spending-tracker-tau.vercel.app',
    },
    logo: '💰',
  },
  {
    name: 'وصفات منزلية',
    description:
      'أحب الطبخ وأحب أشارك الوصفات اللي أجربها في البيت. فقررت أسوي موقع بسيط أكتب فيه وصفاتي المفضلة وأخليها متاحة للكل. الموقع صار طريقة سهلة لتوثيق الوصفات اللي أحبها وأشاركها مع اللي حولي.',
    link: {
      href: 'https://h-recipes.vercel.app/',
      label: 'h-recipes.vercel.app',
    },
    logo: '🍳',
  },
  {
    name: 'تطبيق سحب بيانات الغياب',
    description:
      'فكرة التطبيق جتني من معاناتي في استخراج بيانات الغياب من النظام الجامعي. سويت هالتطبيق عشان يسهل على الطلاب يطلعون بياناتهم بسرعة وبدون تعقيد. مفيد جدًا لأي طالب في كلية ينبع الجامعية، مع اني ماعتقد ان النظام باقي مثل ماهو بس ممكن تستفيد من الكود',
    link: {
      href: 'https://github.com/sombek/lms/tree/master/Server',
      label: 'github.com/sombek/lms',
    },
    logo: '📚',
  },
  {
    name: 'مرجع العيادات النفسية',
    description:
      'مع زيادة الاهتمام بالصحة النفسية، لاحظت إن في ناس كثير يدورون على عيادات نفسية. فقررت أسوي صفحة ويب تجمع معلومات عن العيادات النفسية ويساعد الناس يلقون المكان المناسب بسهولة.',
    link: {
      href: 'https://clinics-refs.vercel.app/',
      label: 'clinics-refs.vercel.app',
    },
    logo: '🧠',
  },
  {
    name: 'إعداد البرامج على الماك',
    description:
      'بعد ما شريت ماك جديد، لقيت إني أحتاج وقت طويل لتثبيت البرامج اللي أستخدمها. سويت هذا الموقع عشان أسهل العملية لي ولأي شخص عنده نفس التحدي مع الماك الجديد.',
    link: {
      href: 'https://new-mac-setup.vercel.app/',
      label: 'new-mac-setup.vercel.app',
    },
    logo: '🖥️',
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'مشاريعي',
  description: 'بعض المشاريع التقنية الي احاول من خلالها ترك بصمتي في المجال',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="مشاريع جانبية تقنية"
      intro="غالبا اذا فيه افكار جديدة في بالي بحاول اضيفها هنا بحيث ممكن اشاركها مع الناس ونتعلم من بعض، غالبا راح تكون المشاريع مفتوحة المصدر وممكن تشارك فيها او تستفيد منها"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <div className="flex h-8 w-8 items-center justify-center text-2xl font-bold text-teal-500 dark:text-teal-400">
                {project.logo}
              </div>
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
