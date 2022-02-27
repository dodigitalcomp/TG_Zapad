<template>
  <div>
    <Header bgcolor="yellow" logoColor="black"/>
     <div class="education-page">
       <div class="education-page-header">
         <div class="education-page-header-content">
           <div class="education-page-header-content-block">
             <div class="education-page-header-content-block-imgMini">
               <img src="../assets/image/Pic-fit33.jpg" alt="">
             </div>
             <div class="education-page-header-content-block-title">
               <p>Образование</p>
             </div>
             <div class="education-page-header-content-block-description">
               <p>Третьяковская галерея ежегодно реализует многие выставочные, исследовательские и образовательные программы, проекты по развитию музея.  Поддержка Друзей Третьяковской галереи помогает в осуществлении значительной части этих проектов. </p>
             </div>
             <div class="education-page-header-content-block-info">
               <img src="../assets/image/infoOutline.svg" alt="">
               <p>Как поступить</p>
             </div>
           </div>
           <div class="education-page-header-content-img">
             <img src="../assets/image/Pic-fit001.jpg" alt="">
           </div>
         </div>
         <div class="education-page-header-footer">
           <div @click="activeTab = 'info'" :class="activeTab === 'info' ? 'active' : ''" class="education-page-header-footer-item ">
             <p>О программе</p>
           </div>
           <div @click="activeTab = 'block'" :class="activeTab === 'block' ? 'active' : ''" class="education-page-header-footer-item">
             <p>Полезные материалы</p>
           </div>
         </div>
       </div>
       <div v-if="activeTab === 'info'" class="education-page-content">
         <div class="education-page-content-buy-ticket">
             <div class="fixed-info" id="fixed-info">
               <div class="education-page-content-buy-ticket-date">
                 <p class="item">ЦЕли</p>
                 <p class="item">Описание</p>
                 <p class="item">преподователи</p>
                 <p class="item">отзывы</p>
                 <p class="item">частые вопросы</p>
                 <p class="item">контакты</p>
               </div>
             </div>
         </div>
         <div class="education-page-content-info">
           <div class="education-page-content-info-type">
             <div class="education-page-content-info-type-item">
               <p class="education-page-content-info-type-item-description">язык обучения</p>
               <p class="education-page-content-info-type-item-title">русский</p>
             </div>
             <div class="education-page-content-info-type-item">
               <p class="education-page-content-info-type-item-description">продолжительность</p>
               <p class="education-page-content-info-type-item-title">2 года</p>
             </div>
             <div class="education-page-content-info-type-item">
               <p class="education-page-content-info-type-item-description">форма обучения</p>
               <p class="education-page-content-info-type-item-title">очная</p>
             </div>
             <div class="education-page-content-info-type-item">
               <p class="education-page-content-info-type-item-description">возможности</p>
               <p class="education-page-content-info-type-item-title">бюджет/контракт</p>
             </div>
           </div>
           <div class="education-page-content-info-description">
             <p>В сентябре 2020 года Государственная Третьяковская галерея и Балтийский федеральный университет им. И. Канта при поддержке проекта «Россия – Моя история» (Фонд Гуманитарных Проектов) запустили магистерскую программу «Кураторство и продюсирование музейных проектов». </p>
           </div>
           <div class="education-page-content-info-description">
             <p>Это первый проект в рамках сотрудничества БФУ им. И. Канта и Третьяковской галереи в сфере новых компетенций в области культуры, искусства и музейного дела. Программа направлена на подготовку кадров как для строящегося в Калининграде филиала Третьяковской галереи, так и для музеев региона. Филиал Третьяковской галереи, открытие которого запланировано на декабрь 2023 года, станет частью Культурно-образовательного и музейного комплекса на Октябрьском острове, строительство которого осуществляется в рамках нацпроекта «Культура». </p>
           </div>
           <div class="education-page-content-info-title">
             <p>Цель программы</p>
           </div>
           <div class="education-page-content-info-description">
             <p>Подготовить уникальных специалистов в области организации музейной деятельности, менеджмента и продюсирования музейных проектов, арт-критики, обладающих профильными теоретическими знаниями и практическими навыками подготовки и реализации проектов в сфере культуры и искусства.</p>
           </div>
           <div class="education-page-content-info-title">
             <p>Описание программы</p>
           </div>
           <div class="education-page-content-info-description">
             <p>Программа готовит специалистов в области искусства и музейного дела для работы в качестве кураторов и арт-менеджеров.</p>
           </div>
           <div class="education-page-content-info-description">
             <p>Выпускники программы будут свободно ориентироваться в мире актуального искусства и современных музейных практик, обладать широкой теоретической подготовкой в сфере искусства и музейной деятельности, а также необходимыми практическими навыками для работы в области кураторства и продюсирования музейных проектов.</p>
           </div>
           <div class="education-page-content-info-description">
             <p>Историко-теоретические и прикладные дисциплины в рамках магистерской программы реализуются при активном участии профильных специалистов Государственной Третьяковской галереи.</p>
           </div>
           <div class="education-page-content-info-services">
             <div class="education-page-content-info-services-left">
                <p class="education-page-content-info-services-left-title">
                  Специализации
                </p>
                <div class="education-page-content-info-services-left-item">
                  <img src="../assets/image/Rectangle1108.svg" alt="">
                  <p>Международное право</p>
                </div>
                <div class="education-page-content-info-services-left-item">
                  <img src="../assets/image/Rectangle1108.svg" alt="">
                  <p>Международное право</p>
                </div>
             </div>
             <div class="education-page-content-info-services-left">
               <p class="education-page-content-info-services-left-title">
                 Программа курса
               </p>
               <div class="education-page-content-info-services-left-item">
                 <img src="../assets/image/Group591.svg" alt="">
                 <div>
                   <p>Программа курса</p>
                   <p>PDF, 390 КБ</p>
                 </div>
               </div>
             </div>
           </div>
           <div class="education-page-content-info-title title-border">
             <p>Это очень волнующее и ответственное событие для филиала Третьяковской галереи в Калининграде: запуск первой магистерской программы с Балтийским федеральным университетом.</p>
           </div>
           <div class="education-page-content-info-held">
             <div class="education-page-content-info-held-items">
               <div class="flex items-center">
                 <img src="../assets/image/image300.jpg" alt="">
                 <div class="m-4">
                   <p>Любовь Головина</p>
                   <p class="city">ректор БФУ им. И. Канта</p>
                 </div>
               </div>
             </div>
           </div>
           <VueSwiper text="Подпись к фото. В Санкт-Петербурге основана. Императорская Академия художеств. "/>
           <div class="education-page-content-info-title">
             <p>преподаватели</p>
           </div>
           <Teachers/>
           <div class="education-page-content-info-title">
             <p>Частые вопросы</p>
           </div>
           <div class="education-page-content-info-block">
             <div class="education-page-content-info-block-item">
               <div class="education-page-content-info-block-item-title" @click="openText = !openText">
                 <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                 <img v-else class="line" src="../assets/image/plus.svg" alt="">
                 <p>Кто такие друзья Третьяковки?</p>
               </div>
               <div v-if="openText" class="education-page-content-info-block-item-description">
                 <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
               </div>
             </div>
             <div class="education-page-content-info-block-item">
               <div class="education-page-content-info-block-item-title" @click="openText = !openText">
                 <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                 <img v-else class="line" src="../assets/image/plus.svg" alt="">
                 <p>Кто такие друзья Третьяковки?</p>
               </div>
               <div v-if="openText" class="education-page-content-info-block-item-description">
                 <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
               </div>
             </div>
             <div class="education-page-content-info-block-item">
               <div class="education-page-content-info-block-item-title" @click="openText = !openText">
                 <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                 <img v-else class="line" src="../assets/image/plus.svg" alt="">
                 <p>Кто такие друзья Третьяковки?</p>
               </div>
               <div v-if="openText" class="education-page-content-info-block-item-description">
                 <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
               </div>
             </div>
             <div class="education-page-content-info-block-item">
               <div class="education-page-content-info-block-item-title" @click="openText = !openText">
                 <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                 <img v-else class="line" src="../assets/image/plus.svg" alt="">
                 <p>Кто такие друзья Третьяковки?</p>
               </div>
               <div v-if="openText" class="education-page-content-info-block-item-description">
                 <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
               </div>
             </div>
             <div class="education-page-content-info-block-item">
               <div class="education-page-content-info-block-item-title" @click="openText = !openText">
                 <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                 <img v-else class="line" src="../assets/image/plus.svg" alt="">
                 <p>Кто такие друзья Третьяковки?</p>
               </div>
               <div v-if="openText" class="education-page-content-info-block-item-description">
                 <p >Друзья Третьяковки — это постоянные посетители музея, вступившие в одноименную программу лояльности для оказания финансовой поддержки Галереи и ее проектов. За внимание и помощь Галерея предлагает своим друзьям эксклюзивные бонусы. </p>
               </div>
             </div>
             <div class="education-page-content-info-block-button">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>задать вопрос</span>
               <img class="ml-1" src="../assets/image/).svg" alt="">
             </div>
           </div>
           <div class="education-page-content-info-title">
             <p>Партнер программы</p>
           </div>
           <div class="education-page-content-info-partner">
             <div class="education-page-content-info-partner-image">
               <img src="../assets/image/Group607.svg" alt="">
             </div>
             <div class="education-page-content-info-partner-text">
               <p class="education-page-content-info-partner-text-name">Фонд Гуманитарных Проектов</p>
               <p class="education-page-content-info-partner-text-email">expohistory.ru </p>
             </div>
           </div>
           <div class="education-page-content-info-title">
             <p>контакты</p>
           </div>
           <div class="education-page-content-info-contacts">
             <div class="education-page-content-info-contacts-item">
               <p class="education-page-content-info-contacts-item-title">Балтийский федеральный университет им. И. Канта</p>
               <p class="education-page-content-info-contacts-item-name">Цвигун Татьяна Валентиновна </p>
               <p class="education-page-content-info-contacts-item-description">канд. филол. наук, доцент, директор Института гуманитарных наук Балтийского федерального университета им. И. Канта (Калининград)</p>
               <div class="education-page-content-info-contacts-item-email">
                 <img class="mr-1" src="../assets/image/(.svg" alt="">
                 <span>TTSvigun@kantiana.ru</span>
                 <img class="ml-1" src="../assets/image/).svg" alt="">
               </div>
               <div class="education-page-content-info-contacts-item-email">
                 <img class="mr-1" src="../assets/image/(.svg" alt="">
                 <span>www.kantiana.ru</span>
                 <img class="ml-1" src="../assets/image/).svg" alt="">
               </div>
             </div>
             <div class="education-page-content-info-contacts-item">
               <p class="education-page-content-info-contacts-item-title">Государственная Третьяковская галерея филиал в г. Калининград</p>
               <p class="education-page-content-info-contacts-item-name">Михайлова Юлия Григорьевна</p>
               <p class="education-page-content-info-contacts-item-description">главный специалист филиала ГТГ в городе Калининград</p>
               <div class="education-page-content-info-contacts-item-email">
                 <img class="mr-1" src="../assets/image/(.svg" alt="">
                 <span>MikhailovaIG@tretyakov.ru</span>
                 <img class="ml-1" src="../assets/image/).svg" alt="">
               </div>
               <div class="education-page-content-info-contacts-item-email">
                 <img class="mr-1" src="../assets/image/(.svg" alt="">
                 <span>www.tretyakovgallery.ru</span>
                 <img class="ml-1" src="../assets/image/).svg" alt="">
               </div>
             </div>
           </div>
         </div>
       </div>
       <div v-if="activeTab === 'block'">
         <div class="education-page-headerBlock">
           <div class="education-page-headerBlock-title">
             <p>Полезные материалы</p>
           </div>
           <div class="education-page-headerBlock-footer">
             <div class="education-page-headerBlock-footer-item">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>все рубрики</span>
               <img class="ml-1" src="../assets/image/arrow.svg" alt="">
               <img class="ml-1" src="../assets/image/).svg" alt="">
             </div>
             <div class="education-page-headerBlock-footer-item">
               <img class="mr-1" src="../assets/image/(.svg" alt="">
               <span>дата</span>
               <img class="ml-1" src="../assets/image/arrow.svg" alt="">
               <img class="ml-1" src="../assets/image/).svg" alt="">
             </div>
           </div>
         </div>
         <div class="education-page-block">
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
           <div class="education-page-block-item">
             <div class="education-page-block-item-text">
               <div class="education-page-block-item-text-date">
                 <p>18–31 ДЕК</p>
               </div>
               <div class="education-page-block-item-text-author">
                 <p>Ход строительства</p>
               </div>
             </div>
             <div class="education-page-block-item-img">
               <img src="../assets/image/Pic-fit3.jpg" alt="">
             </div>
             <div class="education-page-block-item-title">
               <p>экспозицию в здании на Крымском Валу</p>
             </div>
             <div class="education-page-block-item-description">
               <p>C самого начала войны советские художники приняли в ней участие: кто-то как фронтовой художник-корреспондент</p>
             </div>
           </div>
         </div>
         <div class="education-page-pagination line-block">
           <div class="education-page-pagination-page">
             <div class="flex">
               <span>1</span>
               <span class="active">2</span>
               <span>3</span>
               <span>4</span>
               <span>...</span>
               <span>10</span>
             </div>
             <img src="../assets/image/Vector99.svg" alt="">
           </div>
           <div class="line-dn"></div>
           <div class="education-page-pagination-footer"></div>
         </div>
       </div>
     </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import VueSwiper from "../components/VueSwiper";
import Teachers from "../components/Teachers";
export default {
  name: "education",
  components: {Teachers, VueSwiper, Footer, Header},
    data () {
      return {
        activeTab: 'info',
        openText: false
      }
    },
    mounted() {
        const info = document.getElementById('fixed-info')
        addEventListener('scroll', function () {
            let scroll = 648
            let scrollEnd = 4746
            let scrollEnd2 = 5100
            let top = '94%'
            if (window.innerWidth < 850) {
                scroll = 881
                scrollEnd = 4940
                scrollEnd2 = 5200
                top = '94%'
            }
            console.log(window.scrollY)
            if (window.scrollY > scroll && window.scrollY < scrollEnd) {
                info.style.position = 'fixed'
                info.style.top = '120px'
                info.style.left = '20px'
            }  else if (window.scrollY >= scrollEnd && window.scrollY < scrollEnd2) {
                info.style.position = 'absolute'
                info.style.top = top
                info.style.left = '0'
            } else {
                info.style.position = 'relative'
                info.style.top = '0'
                info.style.left = '0'
            }
        })
    }
}
</script>

<style scoped lang="scss">

  .education-page {
    &-header {
      padding: 140px 20px 0 20px;
      background: #FFDD7C;

       &-title {
         p {
           display: flex;
           align-items: center;
           font-style: normal;
           font-weight: normal;
           font-size: 15px;
           line-height: 20px;
           text-transform: uppercase;
           color: #221F1A;

           img {
             margin-top: 2px;
           }
         }
       }

      &-content {
        margin-top: 20px;
        border-top: 1px solid;
        border-bottom: 1px solid;
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;
        height: 490px;

        @media (max-width: 850px) {
          height: 665px;
        }

        @media (max-width: 650px) {
          height: auto;
        }

        &-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          padding-right: 20px;
          border-right: 1px solid;


          @media (max-width: 850px) {
            border-right: 0;
            padding-right: 0;
          }


          &-info {
            display: flex;

            img {
              margin-right: 10px;
            }

            p {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              /* identical to box height, or 133% */

              text-align: center;
              text-transform: uppercase;

              /* tgz_black */

              color: #211F1A;
            }
          }

          &-imgMini {
            display: none;

            @media (max-width: 850px) {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 400px;
                height: 300px;
              }
            }

            @media (max-width: 650px) {
              img {
                width: 285px;
                height: 214px;
              }
            }
          }


          &-title {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            margin-top: 120px;

            @media (max-width: 850px) {
              margin-top: 60px;
              margin-bottom: 30px;

            }

            @media (max-width: 650px) {
              margin-top: 40px;
              margin-bottom: 20px;

            }

            p {
              font-style: normal;
              font-weight: normal;
              font-size: 50px;
              line-height: 50px;
              text-align: center;
              text-transform: uppercase;
              color: #221F1A;
              max-width: 639px;

              span {
                font-style: italic;
              }

              @media (max-width: 850px) {
                font-size: 40px;
                line-height: 40px;
                max-width: 604px;
              }

              @media (max-width: 650px) {
                font-size: 22px;
                line-height: 25px;
                max-width: 335px;
              }


            }
          }

          &-description {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            p {
              max-width: 640px;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              /* or 144% */

              text-align: center;

              /* Black brown */

              color: #221F1A;

              @media (max-width: 650px) {
                font-size: 13px;
                line-height: 15px;
              }
            }
           }
        }

        &-img {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 850px) {
            display: none;
          }
        }
      }

      &-footer {
        display: flex;
        justify-content: center;

        @media (max-width: 650px) {
          flex-wrap: wrap;
          justify-content: center;
        }

        .active {
          border-bottom: 5px solid;
          margin-bottom: 0;
        }

        &-item {
          cursor: pointer;
          width: 340px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 40px;
          padding-top: 40px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          text-transform: uppercase;
          color: #211F1A;

          @media (max-width: 650px) {
            width: 50%;
            flex: inherit;
          }
        }
      }
     }


    &-author {
      display: flex;
      margin-left: 20px;
      margin-right: 20px;
      border-top: 1px solid;

      &-content {
        padding-top: 20px;
        width: 100%;
      }

      &-block {

        margin-top: 60px;
        margin-bottom: 60px;
        &-text {
          margin-bottom: 15px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          color: #221F1A;
        }
      }

      &-image {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 100%;

        @media (max-width: 650px) {
          flex-direction: column-reverse;
        }

        &-flex {
          display: flex;

          @media (max-width: 650px) {
            flex-direction: column;
            margin-top: 40px;

          }

          div:nth-child(1) {
            @media (max-width: 650px) {
              margin-bottom: 20px;
            }
          }
        }
      }

      &-body {
        display: flex;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        text-align: right;
        text-transform: uppercase;

        /* tgz_black */

        color: #211F1A;
      }

      &-left {
        min-width: 345px;

        @media (max-width: 850px) {
          min-width: 145px;
        }
        @media (max-width: 650px) {
          display: none;
        }
      }
    }

    &-content {
      padding-top: 80px;
      padding-left: 20px;
      display: flex;
      margin-bottom: 150px;

      @media (max-width: 850px) {
        margin-bottom: 60px;
      }

      @media (max-width: 650px) {
        margin-bottom: 40px;
      }

      &-buy-ticket {
        min-width: 345px;
        position: relative;

        @media (max-width: 850px) {
          min-width: 145px;
          margin-right: 63px;
        }
        @media (max-width: 650px) {
          display: none;
        }

        &-date {
          max-width: 217px;
          border-top: 1px solid;
          padding-bottom: 20px;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          color: #221F1A;

          .item {
            margin-top: 20px;
          }
        }

      }

      &-info {

        &-type {
          display: flex;
          flex-wrap: wrap;
          max-width: 80%;

          @media (max-width: 850px) {
            max-width: 100%;
          }

          &-item {
            max-width: 50%;
            width: 50%;
            margin-bottom: 50px;

            @media (max-width: 850px) {
              margin-bottom: 40px;
            }

            @media (max-width: 650px) {
              font-size: 30px;
              line-height: 32px;
              max-width: 100%;
              width: 100%;
              margin-right: 20px;
            }

            &-title {
              font-style: normal;
              font-weight: normal;
              font-size: 40px;
              line-height: 40px;
              text-transform: uppercase;
              color: #221F1A;

              @media (max-width: 850px) {
                font-size: 25px;
                line-height: 25px;
              }
            }

            &-description {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              color: #221F1A;
              margin-bottom: 15px;
            }
          }

        }

        .title-border-lin {
          border-top: 1px solid;
          padding-top: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid;
          margin-right: 20px;

          p {
            max-width: 100%;
          }
        }

        &-link {
          display: flex;
          margin-top: 60px;
          margin-bottom: 80px;
          flex-wrap: wrap;

          &-button {
            display: flex;
            margin-right: 10px;
            align-items: center;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #000000;
          }
        }

        &-file {
          display: flex;
          margin-bottom: 60px;

          &-button {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            margin-right: 10px;
          }
          &-text {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            /* identical to box height, or 133% */


            /* Black brown */

            color: #221F1A;
          }
        }

        &-table {
          max-width: 60%;
          margin-bottom: 30px;

          @media (max-width: 850px) {
            max-width: 80%;
          }
          @media (max-width: 650px) {
            max-width: 100%;
          }

          &-title {
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid;
            padding-bottom: 20px;
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;
            }
          }

          &-body {
            display: flex;
            border-bottom: 1px solid;
            padding-top: 15px;
            padding-bottom: 15px;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;

            p:nth-child(1) {
              margin-right: 72px;

              @media (max-width: 850px) {
                margin-right: 42px;
              }

              @media (max-width: 650px) {
                margin-right: 20px;
              }
            }

            .text {
              max-width: 330px;
              width: 330px;
              margin-right: 62px;

              @media (max-width: 850px) {
                max-width: 250px;
                width: 250px;
                margin-right: 42px;
              }

              @media (max-width: 650px) {
                margin-right: 20px;
              }
            }

          }


        }
        .title-border {
          border-top: 1px solid;
          padding-top: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid;
          position: relative;

          &::after {
            content: '';
            height: 20px;
            width: 20px;
            display: block;
            position: absolute;
            background-image: url("../assets/image/Rectangle1121.svg");
            bottom: -20px;
            left: 81px;
          }
          &::before {
            content: '';
            height: 2px;
            width: 20px;
            display: block;
            position: absolute;
            background: #FFFFFF;
            bottom: -1px;
            left: 81px;
          }

          p {
            max-width: 100%;
          }
        }

        &-contacts {
          border-bottom: 1px solid;
          border-top: 1px solid;
          padding-bottom: 20px;
          margin-right: 20px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;

          @media (max-width: 850px) {
            flex-direction: column;
          }

          &-item:first-child {
            border-right: 1px solid;

            @media (max-width: 850px) {
              border-right: 0;
              border-bottom: 1px solid;
              padding-bottom: 20px;
            }
          }

          &-item:last-child {
            padding-left: 20px;

            @media (max-width: 850px) {
              padding-top: 20px;
              padding-left: 0;
              padding-bottom: 40px;
            }
          }

          &-item {
            flex: 1;

            &-title {
              font-style: normal;
              font-weight: normal;
              font-size: 22px;
              line-height: 25px;
              text-transform: uppercase;
              color: #221F1A;
              max-width: 60%;
              margin-bottom: 40px;

              @media (max-width: 650px) {
                max-width: 100%;
                margin-right: 20px;
              }
           }
            &-name {
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;
              max-width: 60%;
              margin-bottom: 10px;
              @media (max-width: 650px) {
                max-width: 100%;
                margin-right: 20px;
              }
            }
            &-description {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              color: #221F1A;
              max-width: 60%;
              margin-bottom: 40px;
              @media (max-width: 650px) {
                max-width: 100%;
                margin-right: 20px;
              }
            }
            &-email {
              display: flex;
              align-items: center;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-align: center;
              text-transform: uppercase;
              color: #221F1A;
              margin-bottom: 10px;
              @media (max-width: 650px) {
                max-width: 100%;
                margin-right: 20px;
              }
            }
          }
        }

        &-title {
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-transform: uppercase;
          color: #221F1A;
          margin-bottom: 40px;

          @media (max-width: 850px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            max-width: 60%;

            @media (max-width: 850px) {
              max-width: 80%;
            }
            @media (max-width: 650px) {
              max-width: 100%;
            }
          }
        }

        &-description {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          color: #221F1A;
          margin-bottom: 25px;

          @media (max-width: 850px) {
            margin-bottom: 20px;
          }

          p {
            max-width: 60%;

            @media (max-width: 850px) {
              font-size: 15px;
              line-height: 20px;
              max-width: 100%;
              margin-right: 20px;

            }
          }

          &-item{
            display: flex;
            align-items: flex-start;
            max-width: 60%;
            margin-bottom: 15px;

            @media (max-width: 850px) {
              max-width: 80%;
            }
            @media (max-width: 650px) {
              max-width: 100%;
            }

            .number {
              margin-right: 66px;
            }

            .iconText {
              margin-right: 66px;
              min-width: 6px;
              min-height: 6px;
              width: 6px;
              height: 6px;
              margin-top: 12px;
            }
          }
          &-itemBk{
            display: flex;
            align-items: flex-start;
            max-width: 60%;
            margin-bottom: 25px;

            @media (max-width: 850px) {
              max-width: 80%;
            }
            @media (max-width: 650px) {
              max-width: 100%;
            }

            .number {
              margin-right: 66px;
            }
          }
        }

        &-services {
          display: flex;
          max-width: 60%;
          margin-bottom: 100px;

          @media (max-width: 850px) {
            flex-direction: column;
            max-width: 100%;
            margin-bottom: 40px;
          }

          &-left {
            width: 50%;
            @media (max-width: 850px) {
              margin-bottom: 40px;
            }

            &-title {
              margin-bottom: 25px;
              font-style: normal;
              font-weight: normal;
              font-size: 22px;
              line-height: 25px;
              /* identical to box height, or 114% */

              text-transform: uppercase;

              /* Black brown */

              color: #221F1A;
            }

            &-item {
              margin-bottom: 15px;
              display: flex;
              align-items: flex-start;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;

              img {
                margin-top: 9px;
                margin-right: 22px;
              }
            }

          }
        }

        &-image {
          &-img {
            display: flex;
            width: 100%;
            overflow: hidden;

            img:nth-child(odd) {
              margin-right: 20px;
            }
            img:nth-child(even) {
            }
          }

          &-pagMini {
            display: none;

            @media (max-width: 850px) {
              display: flex;
              margin-top: 20px;
              margin-bottom: 60px;
            }
          }

          &-pag {
            display: flex;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 60px;

            @media (max-width: 850px) {
             display: none;
            }

            &-number {
              width: 70%;

              .active {
                opacity: 1 !important;
              }

              span {
                text-align: left;
                margin-right: 20px;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                text-transform: uppercase;
                color: #221F1A;
                opacity: 0.3;
              }
            }

            &-img {
              display: flex;

              img {
                margin-left: 22px;
              }
            }
          }
        }

        &-text {
          &-title {
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 25px;
            text-transform: uppercase;
            color: #221F1A;
            margin-bottom: 40px;
            max-width: 60%;

            @media (max-width: 850px) {
              font-size: 22px;
              line-height: 25px;
              max-width: 80%;
            }
            @media (max-width: 650px) {
              max-width: 100%;
            }
          }

          &-description {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;
            margin-bottom: 40px;
            max-width: 60%;

            @media (max-width: 850px) {
              font-size: 15px;
              line-height: 20px;
              max-width: 80%;
            }

            @media (max-width: 650px) {
              max-width: 100%;
            }
          }
        }

        &-virtual-tour {
          background-image: url("../assets/image/bg2.jpg");
          background-size: 100% 600px;
          background-repeat: no-repeat;
          height: 600px;
          width: 100%;
          padding-top: 30px;
          padding-left: 20px;
          padding-bottom: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @media (max-width: 850px) {
            background-size: 100% 300px;
            height: 300px;
          }

          @media (max-width: 650px) {
            background-repeat: round;
            background-size: 100% 220px;
            height: 220px;
            width: 96%;
          }



          &-title {
            p {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #FFFFFF;
            }
          }

          &-content {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            margin-bottom: 50px;

            @media (max-width: 850px) {
              margin-top: 20px;
              margin-bottom: 20px;
            }

            @media (max-width: 650px) {
              margin-top: 0;
              margin-bottom: 0;
            }

            .img {
              height: 250px;
              width: 207px;
              background-image: url("../assets/image/Untitled-removebg-preview.png");
              background-repeat: no-repeat;
              background-size: 316px 250px;
              background-position: center;
              display: flex;
              justify-content: center;
              align-items: center;

              @media (max-width: 850px) {
                height: 202px;
                width: 162px;
                background-size: 246px 202px;
              }

              @media (max-width: 650px) {
                height: 171px;
                width: 136px;
                background-size: 208px 171px;
              }


              .elem {
                margin-left: 30px;
                span {
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 20px;
                  text-align: right;
                  text-transform: uppercase;
                  color: #FFFFFF;

                  @media (max-width: 650px) {
                    font-size: 13px;
                    line-height: 20px;
                  }
                }
              }
            }
          }
        }

        &-buy-ticket {
          display: none;
          @media (max-width: 650px) {
            display: block;
            width: 100%;
            padding-right: 20px;
            margin-top: 60px;

          &-date, &-author, &-price {
            width: 100%;
            border-top: 1px solid;
            padding-bottom: 20px;
            padding-top: 20px;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
          }

          &-date {
          }

          &-price {

            .button {
              margin-top: 20px;
              justify-content: center;
              align-items: center;
              display: flex;
              width: 217px;
              height: 60px;
              left: 20px;
              border: 1px solid #221F1A;
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;
            }
          }
          }
        }

        &-partner {
          display: flex;
          align-items: center;
          margin-bottom: 100px;

          &-image {
            margin-right: 38px;
          }

          &-text {
            &-name {
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;
            }
            &-email {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              color: #000000;
            }
          }
        }

        &-block {
          max-width: 60%;
          margin-bottom: 100px;

          @media (max-width: 850px) {
            max-width: 100%;
            margin-right: 20px;
          }

          &-item {
            padding-top: 20px;
            border-top: 1px solid;


            &-description {
              margin-left: 34px;
              margin-top: 40px;
              margin-bottom: 40px;
            }

            &-title {
              display: flex;
              align-items: center;
              margin-bottom: 20px;

              .line {
                margin-right: 16px;
              }
            }

            &-title, &-description {
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 26px;
              color: #221F1A;
              @media (max-width: 850px) {
                font-size: 15px;
                line-height: 20px;
                max-width: 100%;
                margin-right: 20px;

              }
            }
          }

          &-button {
            display: flex;
            align-items: center;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
            text-transform: uppercase;
            color: #211F1A;
            border-top: 1px solid;
            padding-top: 40px;
          }

        }


        &-held {
          margin-top: 30px;
          margin-bottom: 60px;
          max-width: 70%;

          @media (max-width: 850px) {
            max-width: 100%;
            margin-right: 20px;
          }
          &-title {
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 25px;
            text-transform: uppercase;
            color: #221F1A;
            padding-bottom: 13px;
            border-bottom: 1px solid;
          }

          &-items {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 26px;
            color: #221F1A;

            img {
              width: 60px;
              height: 60px;
            }

            .city {
              font-style: normal;
              font-weight: normal;
              font-size: 15px;
              line-height: 20px;
              text-transform: uppercase;
              color: #221F1A;

              @media (max-width: 850px) {
                font-size: 13px;
                line-height: 15px;
              }
            }
          }
        }

      }

    }


    &-headerBlock {
      padding: 80px 20px 20px 20px;
      &-title {
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 40px;
        text-transform: uppercase;
        color: #221F1A;
        margin-bottom: 46px;
      }

      &-footer {
        display: flex;
        align-items: center;

        &-item {
          margin-right: 20px;
          display: flex;
          align-items: center;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-align: right;
          text-transform: uppercase;
          color: #221F1A;
        }
      }
    }

    &-pagination {
      border-top: 1px solid;
      margin-right: 20px;
      margin-left: 20px;
      height: 240px;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;


      &-page {
        display: flex;
        justify-content: flex-start;


        .active {
          opacity: 0.4;
        }

        span {
          margin-right: 12px;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          text-align: right;
          color: #221F1A;

          @media (max-width: 650px) {
            font-size: 13px;
            line-height: 15px;
          }
        }

        img {
          margin-left: 12px;

          @media (max-width: 650px) {
            width: 9px;
            height: 17px;
          }
        }
      }
    }

    &-block {
      border-bottom: 1px solid;

      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 150px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (max-width: 650px) {
        flex-direction: column;
        margin-bottom: 60px;
      }
      &-item:nth-child(1),
      &-item:nth-child(4),
      &-item:nth-child(7),
      &-item:nth-child(10) {
        padding-right: 20px;

        position: relative;

        &::after {
          display: block;
          content: '';
          top: 0;
          right: -2px;
          width: 5px;
          height: 20px;
          position: absolute;
          background: white;
          z-index: 2;
          @media (max-width: 650px) {
            display: none;
          }
        }
        &::before {
          display: block;
          content: '';
          bottom: 0;
          right: -4px;
          width: 5px;
          height: 20px;
          position: absolute;
          background: white;
          z-index: 2;

          @media (max-width: 650px) {
            display: none;
          }
        }
      }

      &-item:nth-child(2),
      &-item:nth-child(5),
      &-item:nth-child(8),
      &-item:nth-child(11)  {
        padding-right: 20px;
        padding-left: 20px;
        border-right: 1px solid;
        border-left: 1px solid;

        position: relative;

        &::after {
          display: block;
          content: '';
          top: 0;
          right: -4px;
          width: 5px;
          height: 20px;
          position: absolute;
          background: white;
          @media (max-width: 650px) {
            display: none;
          }
        }
        &::before {
          display: block;
          content: '';
          bottom: 0;
          right: -4px;
          width: 5px;
          height: 20px;
          position: absolute;
          background: white;
          @media (max-width: 650px) {
            display: none;
          }
        }

      }

      &-item:nth-child(3),
      &-item:nth-child(6),
      &-item:nth-child(9),
      &-item:nth-child(12) {
        padding-left: 20px;
      }


      &-item:nth-child(1),
      &-item:nth-child(3),
      &-item:nth-child(5),
      &-item:nth-child(7),
      &-item:nth-child(9),
      &-item:nth-child(11) {

        @media (max-width: 850px) {

        padding-left: 0;
        padding-right: 20px;
        border-right: 1px solid;
        border-left: 0;
        position: relative;


        &::after {
          display: block;
          content: '';
          top: 0;
          right: -2px;
          width: 5px;
          height: 20px;
          position: absolute;
          background: white;
          z-index: 2;
          @media (max-width: 650px) {
            display: none;
          }
        }
        &::before {
          display: block;
          content: '';
          bottom: 0;
          right: -4px;
          width: 5px;
          height: 20px;
          position: absolute;
          background: white;
          z-index: 2;

          @media (max-width: 650px) {
            display: none;
          }
        }

        }
      }

      &-item:nth-child(2),
      &-item:nth-child(4),
      &-item:nth-child(6),
      &-item:nth-child(8),
      &-item:nth-child(10),
      &-item:nth-child(12) {
        @media (max-width: 850px) {

          border-right: 0;
          border-left: 0;
          padding-right: 0;
          padding-left: 20px;
        }
      }

      &-item {
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% / 3);

        @media (max-width: 850px) {
          width: calc(100% / 2);
        }

        @media (max-width: 650px) {
          width: 100%;
          border-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }


        &-text {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 20px;
          text-transform: uppercase;
          color: #221F1A;
          margin-bottom: 50px;

          @media (max-width: 850px) {
            margin-bottom: 20px;
          }

          &-date {
            @media (max-width: 850px) {
              display: flex;
              justify-content: space-between;
              flex: 1;
            }
          }

          &-author {
            white-space: nowrap;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
            text-transform: uppercase;
            color: #221F1A;
          }
        }

        &-img {
          margin-bottom: 30px;
        }

        &-img, &-title, &-description {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        &-title {
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
          color: #221F1A;
          margin-bottom: 30px;

          @media (max-width: 850px) {
            font-size: 22px;
            line-height: 25px;
          }

          p {
            max-width: 70%;
            @media (max-width: 850px) {
              max-width: 100%;
            }

            span {
              font-style: italic;
            }
          }
        }

        &-description {
          margin-bottom: 70px;

          @media (max-width: 850px) {
            margin-bottom: 40px;
          }

          p {
            max-width: 70%;
            @media (max-width: 850px) {
              max-width: 100%;
            }
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #221F1A;
          }
        }

      }
    }


  }

</style>
