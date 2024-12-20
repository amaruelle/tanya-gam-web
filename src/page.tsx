import { Button } from "./components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"

let faqItems = [
  {
    id: "formulate",
    title: "Как сформулировать запрос?",
    content: "Запрос можно формировать на каждую сессию или можно выделить несколько сессий, направленных на решение одного запроса. Вы можете выбрать основную тему до встречи или на сессии.\n\nЯ помогаю решить, с чего хотелось бы начать: с отношений, с общего состояния, улучшения самочувствия или чего-то ещё. Даже если приступим с конца или с середины, по очереди захватим и все остальные вопрос. Как правило, один запрос — одна сессия.",
  },
  {
    id: "expectations",
    title: "Ожидания от нашей работы",
    content: "Во время разговора у вас могут подниматься (или нет) разные эмоции и проявляться разные реакции: облегчение, замешательство, восторг, раздражение, слезы, ступор, многословность, спутанность в речи. Это нормальный процесс. Мы будем обсуждать и проблему, с которой вы пришли, и это ваши чувства., они важны.  Не стесняйтесь задавать вопросы о процессе, о том, что вы считаете результатом и что предлагается для его достижения, о выбранном мною методах, о плане терапии и примерной длительности процесса, о моем профессиональном видении вашей ситуации.  При этом наша задача – не проваливаться в частности, а идти к желаемому результату. Поэтому я Вас буду возвращать (уважительно останавливать) к теме запроса, задавать вопросы, а так же делиться информацией по работе психики и мозга, которая может оказаться вам полезной. Как правило, встреча проходит намного эффективнее, если есть конкретный запрос или пожелание к нашей работе.  Будет здорово и полезно, если вы будете давать мне обратную связь в ходе или в конце нашего общения – комфортно ли было общаться, нашли ли что-то интересное для себя.Продолжительность встречи составляет 50 минут (+/- 5 минут), включая обсуждение нашей беседы в конце.  Периодичность встреч определяем вместе с вами (обычно — 1 раз в 1−2 недели).",
  },
  {
    id: "payment",
    title: "Оплата и отмена сессий",
    content: "Запись на консультации проходит по 100% предоплате минимум за 24 часа. К номеру телефона +7(931)987-81-77 привязаны карты Сбера и Тинькофф (Гамуйло Татьяна Павловна). Напишите мне, что оплата прошла, я отмечу у себя.  Если вам необходимо отменить или перенести сессию, постарайтесь предупредить меня за 24 часа до встречи. Я сделаю все возможное, чтобы перенести сессию на удобное для вас время.  Я предупреждаю заранее о планируемом отпуске, чтобы вы могли принять решение о возможном обращении к другому терапевту.Я работаю и в формате экспресс-помощи, которая имеет долгосрочный эффект, и в режиме длительной терапии.  Мне самой больше близка идея длительной работы — она глубже и поэтому интереснее, а результаты чаще бывают стабильнее. Но это зависит от целей и возможностей клиентов, поэтому есть варианты.",
  },
  {
    id: "booking",
    title: "Запись на сессии",
    content: "По ссылке выше можно выбрать время для встречи. Если видите, что в ближайшее время нет удобных окон, напишите мне. Иногда у меня есть возможность выделить дополнительное время.  Важно! Обязательно напишите мне в WhatsApp или Telegram, на какое время записались. Это информация должна быть продублирована в нашей переписке.",
  },
  {
    id: "communication",
    title: "Общение вне консультаций",
    content: "Можете писать мне, если становится критично плохо или необходимо срочно поделиться чем-то важным, это своеобразная кнопка SOS. Остальные вопросы – на консультациях.",
  },
  {
    id: "confidentiality",
    title: "Конфиденциальность",
    content: "Все обсуждаемое на сессиях, а также записи, которые веду, не выносятся без вашего письменного разрешения никогда и никуда за исключением случаев, когда речь идет об угрозе здоровью и жизни для вас или других лиц. Психолог не имеет права записывать аудио- или видео с вашим участием без вашего письменного согласия и без объяснения, где они могут быть использованы.",
  },
  {
    id: "ethics",
    title: "Этические принципы",
    content: "Я обязуюсь действовать в пределах своих знаний профессиональной компетентности, навыков и опыта и, при необходимости, предложить вам обратиться к другому специалисту.  Я должна буду ограничить работу, либо прекратить работать, если состояние моего здоровья влияет на работоспособность и способность принимать решения.  В ходе работы не допускаются двойные отношений между терапевтом и клиентом. Это забота о безопасности и защита от умышленной или непроизвольной эксплуатации, манипуляции, эмоциональных реакций, которые могут быть вызваны смешением ролей и ожиданий.  С этой же целью ограничиваются контакт и наше общение вне терапевтического процесса (за исключением экстренных случаев).Другими словами, мы или дружим, или работаем — и если вы у меня в терапии, отдельно для беседы за кофе мы не будем встречаться.  Важно: если мы с вам встретились не в кабинете, а случайно — в городе, спортзале или в гостях, для соблюдения конфиденциальности я не буду здороваться первой. Понятно, что мы не будем обсуждать нашу работу, но и то, будем ли мы приветствовать друг друга — решаете вы.",
  },
  {
    id: "long-term",
    title: "Длительная работа",
    content: "Если у вас есть возможности и ресурсы, я рекомендую брать сессии пакетами. Это дешевле и, как правило, всегда эффективнее, чем разовые встречи. Как правило, я предлагаю пакет из 5 встреч.  В этом случае мы с вами заключаем контракт, определяем цель и фиксируем ваш прогресс в ходе нашей работы. После каждой встречи есть задания. Срок использования этих встреч — нелимитированный, можно использовать хоть в течение жизни.  Со мной можно работать в формате гибкого времени. Вы покупаете 5 часов нашей работы и можете использовать его так, как вам удобно.  Между сессиями со мной можно связываться. О следующей встрече мы договариваемся в конце текущей сессии. Оптимальная периодичность — 7 дней, 10 дней.  Я отвечаю за то, чтобы быть внимательной, вести встречу и соблюдать тайминг, предлагать различные техники и упражнения, наблюдать, что происходит с вами и говорить о своих наблюдениях. За все остальное (выводы, решения и изменения в своей жизни) ответственность несете вы.",
  },
  {
    id: "termination",
    title: "Завершение или прерывание терапии",
    content: "Важно и правильно как начинать терапевтические отношения, так и завершать их. Некоторым клиентам достаточно одной или нескольких сессий, другим нужно больше времени.  Если вы захотите остановить наши встречи или сделать паузу, сообщите мне об этом. Вы в любой момент сможете возобновить их, если это будет необходимо.  Также вы вправе изменить периодичность сессий: например, не раз в неделю, а один раз в две недели или по необходимости. И да, я тоже имею право прекратить сотрудничество, если буду чувствовать, что не могу помочь вам. В этом случае я предупрежу вас заранее и порекомендую других специалистов.  Не стесняйтесь и обязательно давайте мне обратную связь о процессе терапии. В ходе встречи вы всегда можете попросить поменять тему беседы или, наоборот, задержаться на каком-то вопросе подольше.  Как правило, в конце сессии я прошу дать мне знать, что было полезным для вас сегодня..",
  },
];

let conditions = [
  {
    marker: "1",
    title: "Регулярно накатывает тревожность"
  },
  {
    marker: "2",
    title: "Часто критикуете и недовольны собой"
  },
  {
    marker: "3",
    title: "Устаете быстро и сильно"
  },
  {
    marker: "4",
    title: "Не уверены, что хотите работать на этой работе"
  },
  {
    marker: "5",
    title: "Сложно строить отношения"
  },
  {
    marker: "6",
    title: "Проблемы с принятием решений"
  },
  {
    marker: "7",
    title: "Чувствуете себя потерянным и одиноким"
  },
  {
    marker: "8",
    title: "Страдаете от депрессивных симптомов"
  },
  {
    marker: "9",
    title: "Ищете пути решения сложных ситуаций"
  },
  {
    marker: "10",
    title: "Хотите разобраться в себе и своих потребностях"
  },
]

export default function PsychologistLanding() {
  return (
    <div className="min-h-screen bg-[#FDF6E9]">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <img
          src="https://utfs.io/f/qY9ynrCul7FXPrmnxaYMZDXEkQHtKBbYjzwGNWfvq9dpuO8L?height=300&width=1200"
          alt="Peaceful landscape illustration"
          width={1200}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="flex flex-col items-center">
          <img
            src="https://utfs.io/f/qY9ynrCul7FXadmIRLj2Sv1pbHYW0fUuEhxXIa3oAQMsPV95?height=128&width=128"
            alt="Profile photo"
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="mt-4 text-4xl font-bold text-[#B47A4C]">Татьяна Гамуйло</h1>
          <p className="mt-2 text-gray-600">Психолог, член ОППЛ и АОРПП</p>
        </div>

        {/* Brief Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Кратко</h2>
          <div className="grid items-start md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700">
                Простыми словами я объясняю процессы происходящие внутри вас и уже после
                первой сессии вы почувствуете облегчение и ясность. Использую инструменты,
                позволяющие реально разрешить ситуацию, а не ходить вокруг и около.
              </p>
              <div className="mt-6 space-x-4 space-y-2">
                <Button asChild className="bg-[#B47A4C] hover:bg-[#96663E]">
                  <a href="https://dikidi.net/1086402?p=0.pi" target="_blank">Онлайн-запись на консультацию</a>
                </Button>
              </div>
              <div className="mt-2 space-x-4 space-y-2">
                <Button asChild variant="outline" className="border-[#B47A4C] text-[#B47A4C]">
                  <a href="#contract" target="_blank">Контракт</a>
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">Работаю по предварительной записи</h3>
              <p className="text-gray-700">
                Понедельник — Суббота,
                <br />
                10:00 — 20:00
              </p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-12">
          <Accordion type="single" collapsible>
            <AccordionItem value="about">
              <AccordionTrigger className="text-2xl font-bold text-gray-900">
                Обо мне
              </AccordionTrigger>
              <AccordionContent className="space-y-6">
                <p>«Ответы, которые Вы ищете, они уже внутри Вас»</p>
                <p>Надо их просто научиться замечать.</p>

                <p>Меня зовут, Татьяна, я психолог. Являюсь членом Российской Лиги Психологов и психотерапевтов, и Ассоциации психологов ориентированных на решение.</p>

                <p>Я умею задавать вопросы, и помогу научиться находить на них ответы.</p>

                <p>Убеждена в том, что даже крошечный, но ежедневный шаг приближает нас к цели ближе, чем крутой огромный шаг сделанный когда-нибудь.</p>

                <p>Приглашаю вас на консультации и в терапию. Моя работа — это не только разговоры о ваших тревогах, волнениях, поисках, неудачах и потрясениях, но и решения. Решения, которые мы будем искать вместе. Будем искать разными путями, используя все научно-доказанные и эффективные методики и техники.</p>

                <p>Верю, что изменения возможны на любом этапе пути и в любой ситуации.</p>

                <p>По ходу консультирования я рассказываю, что происходит и почему. Считаю это важным этапом, потому что понимание себя, своих поступков и их последствий помогает в терапии и сильно улучшает качество жизни в последствии. Даю полезную литературу, в виде электронных книг, техник и упражнений.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Conditions Section */}
        <div className="mt-12 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Вы можете ко мне обратиться, если вам знакомы такие ощущения
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conditions.map((condition) => (
              <div key={condition.marker} className="flex gap-4 align-middle items-center">
                <span className="flex-none bg-[#B47A4C] text-white w-8 h-8 rounded-full flex items-center justify-center">{condition.marker}</span>
                <p className="text-gray-700">{condition.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Format Section */}
        <div className="mt-20 bg-[#D4B296] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Формат работы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Онлайн и очное консультирование</h3>
                <p className="text-gray-700">
                  В формате 75 и 50 минут по предварительной договорённости
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Долгосрочная терапия</h3>
                <p className="text-gray-700">
                  Выстраивание совершенно иного уровня жизни, выявление и смена негативного сценария.
                  Временной формат по договорённости
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Price List Section */}
        <div className="bg-white p-12">
          <h2 className="text-3xl font-bold mb-2">Прайс-лист</h2>
          <p className="text-gray-600 mb-8">Общаемся через приложение Google Meet</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-medium mb-4">Консультация онлайн</h3>
              <p className="text-2xl font-bold">4000₽ за 75 минут</p>
            </div>

            <div className="bg-[#E6B8A2] p-6 rounded-lg text-white">
              <h3 className="font-medium mb-4">Консультация очно</h3>
              <p className="text-2xl font-bold">4000₽ за 50 минут</p>
            </div>

            <div className="bg-[#FDF6E9] p-6 rounded-lg">
              <h3 className="font-medium mb-4">Консультация аудио (голосовые сообщения)</h3>
              <p className="text-2xl font-bold">4000₽ за 2 часа 30 минут</p>
            </div>

            <div className="bg-[#E6B8A2] p-6 rounded-lg text-white md:col-span-1">
              <h3 className="font-medium mb-4">Консультация текстовая</h3>
              <p className="text-2xl font-bold">4000₽ за 2 часа 30 минут</p>
            </div>

            <div className="bg-[#FDF6E9] p-6 rounded-lg md:col-span-2">
              <h3 className="font-medium mb-4">Семейная консультация</h3>
              <p className="text-2xl font-bold">5000₽ за 1 час 30 минут</p>
            </div>
          </div>
        </div>
        {/* Approach Section */}
        <div className="bg-gray-100 mb-20 p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gray-600">О подходе</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">У меня свой подход к работе</h2>

              <div className="space-y-6">
                <p className="text-gray-700">
                  Я — психолог, который использует подходы, нацеленные на изменения:
                </p>

                <div>
                  <p className="font-bold mb-2">ОРКТ — краткосрочная терапия ориентированная на решение.</p>
                  <p className="text-gray-700">
                    Именно этот метод позволяет решить любую задачу достаточно быстро, но подходит и для длительной работы.
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-2">КПТ — когнитивно-поведенческая терапия.</p>
                  <p className="text-gray-700">
                    Ее идея в том, что ваши мысли управляют вашими действиями и эмоциями. А значит, если научиться мыслить по-другому, то можно и начать жить по-другому.
                  </p>
                </div>

                <div>
                  <p className="font-bold mb-2">Моя цель —</p>
                  <p className="text-gray-700">
                    исследовать Ваш запрос вместе с Вами и найти то, что сделает вашу жизнь проще, понятнее и радостнее уже сейчас или в ближайшее время.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://utfs.io/f/qY9ynrCul7FXjtEHsz8rGd4RCI1sVyl7hvAp8NbiJ0OtmYBc?height=600"
                alt="Психолог"
              />
            </div>
          </div>
        </div>
      <div className="mt-20 p-12">
        <h2 className="text-3xl font-bold text-[#B47A4C] mb-8" id="contract">Как мы будем работать?</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="border rounded-lg px-4"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Footer */}
      <footer className="mt-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#B47A4C] text-xl font-bold mb-4">Татьяна Гамуйло</h3>
              <p className="text-gray-400">
                © 2024 самозанятая Гамуйло Т. П.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="font-bold">8 (931) 987-81-77</p>
                <p className="text-gray-400">С 10:00 до 20:00,</p>
                <p className="text-gray-400">Воскресенье - выходной</p>
              </div>

              <div>
                <p className="font-bold">Электронная почта</p>
                <a 
                  href="mailto:tanya_gam@mail.ru" 
                  className="text-gray-400 hover:text-[#B47A4C] transition-colors"
                >
                  tanya_gam@mail.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

