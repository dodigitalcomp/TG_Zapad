<template>
  <div>
    <Header />
     <div class="news-page">
       <div class="news-page-header">
         <div class="news-page-header-title">
           <NuxtLink tag="p" :to="localePath('/news')">
             <img class="mr-1" src="../../assets/image/(.svg" alt="">
             <img class="mr-1 arow" src="../../assets/image/Vector135.svg" alt="">
             <span>все новости</span>
             <img class="ml-1" src="../../assets/image/).svg" alt="">
           </NuxtLink>
         </div>
         <div class="news-page-header-content" v-if="newData">
           <div class="news-page-header-content-block">
             <div class="news-page-header-content-block-text">
               <div class="news-page-header-content-block-text-date">
                 <p>{{newData.date}}</p>
                 <p>{{newData.rubric}}</p>
               </div>
             </div>
             <div class="news-page-header-content-block-imgMini">
               <img :src="newData.picture" alt="">
             </div>
             <div class="news-page-header-content-block-title">
               <p>{{head.h1}}</p>
             </div>
             <div class="news-page-header-content-block-description">
               <p>{{head.description}}</p>
             </div>
           </div>
           <div class="news-page-header-content-img">
             <img :src="newData.picture" alt="">
           </div>
         </div>
         <div class="news-page-header-footer">
           <div class="news-page-header-footer-item">
             <div @click="share" class="news-page-header-footer-item-block cursor-pointer">
               <img class="mr-1" src="../../assets/image/(.svg" alt="">
               <span>поделиться</span>
               <img class="ml-2" src="../../assets/image/shareArrowIcon.svg" alt="">
               <img class="ml-2" src="../../assets/image/).svg" alt="">
             </div>
           </div>
         </div>
       </div>
       <div class="news-page-content">
         <div class="news-page-content-buy-ticket"></div>
         <div class="news-page-content-info" v-html="newData.text"></div>
         <div class="news-page-content-info">
<!--           <div class="news-page-content-info-title">-->
<!--             <p>Заголовок 1 уровня. состоится встреча-->
<!--               с губернатором Калининградской области Антоном Алихановым по вопросам формирования повестки</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>В Санкт-Петербурге основана Императорская Академия художеств.-->
<!--               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским.  </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-text">-->
<!--             <p class="news-page-content-info-text-title">Заголовок 2 уровня</p>-->
<!--             <p class="news-page-content-info-text-description">По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать.</p>-->
<!--           </div>-->
           <VueSwiper v-if="newData" :images="newData.photos" simvol="/" text="Подпись к фото. В Санкт-Петербурге основана. Императорская Академия художеств. "/>
<!--           <div class="news-page-content-info-description">-->
<!--             <p>В Санкт-Петербурге основана Императорская Академия художеств.-->
<!--               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским.  </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>Мы прославляем самобытный гений отечественных художников и осознаем большую ответственность за продолжение традиций Галереи, связанных с сохранением коллекции для будущих поколений. </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <div class="news-page-content-info-description-item"><p class="number">1.</p>исследовать, сохранять, представлять и популяризировать искус- ство России;</div>-->
<!--             <div class="news-page-content-info-description-item"><p class="number">2.</p>формировать российскую культурную идентичность, привлекая внимание общества к той важной роли, которую играют в ней искусство. Продолжать дело П.М.Третьякова, знакомя жителей страны с отечественным художественным наследием;</div>-->
<!--             <div class="news-page-content-info-description-item"><p class="number">3.</p>делать жизнь людей лучше, открывая широкий доступ к шедеврам русского и мирового искусства.</div>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>Мы прославляем самобытный гений отечественных художников и осознаем большую ответственность за продолжение традиций Галереи, связанных с сохранением коллекции для будущих поколений. </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>исследовать, сохранять, представлять и популяризировать искус- ство России;</div>-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>формировать российскую культурную идентичность, привлекая внимание общества к той важной роли, которую играют в ней искусство. Продолжать дело П.М.Третьякова, знакомя жителей страны с отечественным художественным наследием;</div>-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>делать жизнь людей лучше, открывая широкий доступ к шедеврам русского и мирового искусства.</div>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать.</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>В Санкт-Петербурге основана Императорская Академия художеств.-->
<!--               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским. </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-title title-border">-->
<!--             <p>Разработка магистерской программы продюсирование музейных проекто велась в-->
<!--               сотрудничестве с коллегами из Государственной Третьяковской галереи в режиме интенсивного-->
<!--               взаимно заинтересованного диалога результаты которого мы увидим в ближайшем будущем</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-held">-->
<!--             <div class="news-page-content-info-held-items">-->
<!--               <div class="flex items-center">-->
<!--                 <img src="../../assets/image/image300.jpg" alt="">-->
<!--                 <div class="m-4">-->
<!--                   <p>Любовь Головина</p>-->
<!--                   <p class="city">ректор БФУ им. И. Канта</p>-->
<!--                 </div>-->
<!--               </div>-->
<!--             </div>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>В Санкт-Петербурге основана Императорская Академия художеств.-->
<!--               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским. </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать.</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-title title-border-lin">-->
<!--             <p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать.</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать.</p>-->
<!--           </div>-->
           <div class="news-page-content-info-virtual-tour iframe-height-100" v-if="newData.video" v-html="newData.video">
<!--             <div></div>-->
<!--             <div class="news-page-content-info-virtual-tour-content">-->
<!--               <div class="img">-->
<!--                 <p class="flex elem">-->
<!--                   <img class="mr-1" src="../../assets/image/(w.svg" alt="">-->
<!--                   <span>смотреть</span>-->
<!--                   <img class="ml-1" src="../../assets/image/)w.svg" alt="">-->
<!--                 </p>-->
<!--               </div>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-virtual-tour-title">-->
<!--               <p>04:33</p>-->
<!--             </div>-->
           </div>
<!--           <div class="news-page-content-info-description mt-60">-->
<!--             <p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать.</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <div class="news-page-content-info-description-itemBk"><p class="number">БК:</p>С чего начинается создание шрифта?</div>-->
<!--             <div class="news-page-content-info-description-itemBk"><p class="number">ВГ:</p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать. С корпоративными шрифтами довольно просто. Приходит заказчик, у которого есть свои потребности. Ему нужен инструмент с определённым образом и дизайном. В 90 процентах случаев мы имеем дело с арт-директорами компаний. Это визуалы, разговаривающие и мыслящие картинками. Они могут транслировать образы, которые хотят получить, — иногда словами, иногда мудбордом, иногда показывая похожие шрифты.</div>-->
<!--             <div class="news-page-content-info-description-itemBk"><p class="number">БК:</p>Считается, что за сайт, который сделан на конструкторе, нельзя платить большие деньги в сравнении с сайтом, который сделан в «ручной» веб-верстке. Ты согласен?</div>-->
<!--             <div class="news-page-content-info-description-itemBk"><p class="number">ВГ:</p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать. С корпоративными шрифтами довольно просто. Приходит заказчик, у которого есть свои потребности. Ему нужен инструмент с определённым образом и дизайном. В 90 процентах случаев мы имеем дело с арт-директорами компаний. Это визуалы, разговаривающие и мыслящие картинками. Они могут транслировать образы, которые хотят получить, — иногда словами, иногда мудбордом, иногда показывая похожие шрифты.</div>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-table">-->
<!--             <div class="news-page-content-info-table-title">-->
<!--               <p>Тема</p>-->
<!--               <p>Кол-во часов</p>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-table-body">-->
<!--               <p>1</p>-->
<!--               <p class="text">История русского искусства X-XIX вв.</p>-->
<!--               <p>40 </p>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-table-body">-->
<!--               <p>2</p>-->
<!--               <p class="text">Музееведение: История выставок и кураторства</p>-->
<!--               <p>12,5</p>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-table-body">-->
<!--               <p>3</p>-->
<!--               <p class="text">Музееведение: Современная музейная инфраструктура, история русского искусства X-XIX вв. </p>-->
<!--               <p>12,5</p>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-table-body">-->
<!--               <p>1</p>-->
<!--               <p class="text">История русского искусства X-XIX вв.</p>-->
<!--               <p>40 </p>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-table-body">-->
<!--               <p>1</p>-->
<!--               <p class="text">Искусство ХХ века (Западная Европа, русское искусство)</p>-->
<!--               <p>40 </p>-->
<!--             </div>-->
<!--             <div class="news-page-content-info-table-body">-->
<!--               <p>1</p>-->
<!--               <p class="text">Фандрайзинг. Экономика и финансы в сфере культуры</p>-->
<!--               <p>40 </p>-->
<!--             </div>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-file">-->
<!--             <div class="news-page-content-info-file-button">-->
<!--               <img class="mr-1" src="../../assets/image/(.svg" alt="">-->
<!--               <img class="mr-1" src="../../assets/image/file.svg" alt="">-->
<!--               <span >Программа курса</span>-->
<!--               <img class="ml-1" src="../../assets/image/).svg" alt="">-->
<!--             </div>-->
<!--             <p class="news-page-content-info-file-text">pdf, 390 КБ</p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>В Санкт-Петербурге основана Императорская Академия художеств.-->
<!--               На русской почве неповторимое своеобразие приобретают барокко, рококо, классицизм, сентиментализм. Искусство классицизма воплотило идеалы эпохи Просвещения, стремившейся к познанию мира силами просвещенного разума и чувства. В иерархии академических жанров главная роль принадлежала исторической картине. Неоспоримы художественные достоинства портретов, созданных Фёдором Рокотовым, Дмитрием Левицким, Владимиром Боровиковским. </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-description">-->
<!--             <p>По-разному бывает: иногда приходит в голову идея одной буквы, иногда желание передать ощущение от текста, которое ты подсмотрел, например, в каких-то исторических источниках. Но ключевое при создании шрифта — это ответы на вопросы, зачем нужен ещё один шрифт, почему именно такой, какие задачи этот шрифт будет решать. </p>-->
<!--           </div>-->
<!--           <div class="news-page-content-info-link">-->
<!--             <div class="news-page-content-info-link-button">-->
<!--               <img class="mr-1" src="../../assets/image/[.svg" alt="">-->
<!--               <span>#искусство</span>-->
<!--               <img class="ml-1" src="../../assets/image/].svg" alt="">-->
<!--             </div>-->
<!--             <div class="news-page-content-info-link-button">-->
<!--               <img class="mr-1" src="../../assets/image/[.svg" alt="">-->
<!--               <span>#русскоеискусство</span>-->
<!--               <img class="ml-1" src="../../assets/image/].svg" alt="">-->
<!--             </div>-->
<!--             <div class="news-page-content-info-link-button">-->
<!--               <img class="mr-1" src="../../assets/image/[.svg" alt="">-->
<!--               <span>#биография</span>-->
<!--               <img class="ml-1" src="../../assets/image/].svg" alt="">-->
<!--             </div>-->
<!--             <div class="news-page-content-info-link-button">-->
<!--               <img class="mr-1" src="../../assets/image/[.svg" alt="">-->
<!--               <span>#живопись</span>-->
<!--               <img class="ml-1" src="../../assets/image/].svg" alt="">-->
<!--             </div>-->
<!--           </div>-->
         </div>
       </div>
<!--       <div class="news-page-author">-->
<!--         <div class="news-page-author-left"></div>-->
<!--         <div class="news-page-author-content">-->
<!--           <div class="news-page-author-image">-->
<!--             <div class="news-page-content-info-held-items news-page-author-image-flex">-->
<!--               <div class="flex items-center mr-20">-->
<!--                 <img src="../../assets/image/image300.jpg" alt="">-->
<!--                 <div class="ml-3">-->
<!--                   <p>Любовь Головина</p>-->
<!--                   <p class="city">ректор БФУ им. И. Канта</p>-->
<!--                 </div>-->
<!--               </div>-->
<!--               <div class="flex items-center">-->
<!--                 <img src="../../assets/image/image300.jpg" alt="">-->
<!--                 <div class="ml-3">-->
<!--                   <p>Любовь Головина</p>-->
<!--                   <p class="city">ректор БФУ им. И. Канта</p>-->
<!--                 </div>-->
<!--               </div>-->
<!--             </div>-->
<!--             <div class="news-page-author-body">-->
<!--               <img class="mr-1" src="../../assets/image/(.svg" alt="">-->
<!--               <span>сообщить об ошибке</span>-->
<!--               <img class="ml-1" src="../../assets/image/).svg" alt="">-->
<!--             </div>-->
<!--           </div>-->
<!--           <div class="news-page-author-block">-->
<!--             <p class="news-page-author-block-text">Используемые источники: </p>-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>VeniceBiennale.com</div>-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>Толстой С. Л. Об отражении жизни в «Анне Карениной»: Из воспоминаний. Л. Н. Толстой. АН СССР. Иститут русской литературы (Пушкинский Дом). М., 1939. </div>-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>Толстой Л. Н. Полное собрание сочинений в 90 т. Т. 18–19. М., 1934–1935. </div>-->
<!--             <div class="news-page-content-info-description-item"><p class="iconText"><img src="../../assets/image/Rectangle1108.svg" alt=""></p>Востриков А. В. Книга о русской дуэли.</div>-->
<!--           </div>-->
<!--         </div>-->
<!--       </div>-->
       <div class="news-page-pagination line-block">
         <div class="news-page-pagination-title">
           <p>похожие события</p>
         </div>
         <div class="line-dn"></div>
         <div class="news-page-pagination-footer">
           <div class="flex">
             <img class="mr-1" src="../../assets/image/(.svg" alt="">
             <span>все события</span>
             <img class="ml-2" src="../../assets/image/).svg" alt="">
           </div>
         </div>
       </div>
       <div class="news-page-block">
         <div class="news-page-block-item">
           <div class="news-page-block-item-text">
             <div class="news-page-block-item-text-date">
               <p>18–31 ДЕК</p>
               <p>выставка</p>
             </div>
           </div>
           <div class="news-page-block-item-img">
             <img src="../../assets/image/Pic-fit3.jpg" alt="">
           </div>
           <div class="news-page-block-item-title">
             <p>Вильямс П.В. <span class="william">история одной работы</span></p>
           </div>
           <div class="news-page-block-item-description">
             <p>Это многообразие связано и с особенностями каждой отдельной исторической эпохи,
               и с процессами.</p>
           </div>
         </div>
         <div class="news-page-block-item">
           <div class="news-page-block-item-text">
             <div class="news-page-block-item-text-date">
               <p>18–31 ДЕК</p>
               <p>выставка</p>
             </div>
           </div>
           <div class="news-page-block-item-img">
             <img src="../../assets/image/Pic-fit3.jpg" alt="">
           </div>
           <div class="news-page-block-item-title">
             <p>«Маленький человек» Кабакова <span class="william">и русская живопись XIX века</span></p>
           </div>
           <div class="news-page-block-item-description">
             <p>20 ноября состоится встреча с губернатором Калининградской области Антоном Алихановым по вопросам …</p>
           </div>
         </div>
         <div class="news-page-block-item">
           <div class="news-page-block-item-text">
             <div class="news-page-block-item-text-date">
               <p>18–31 ДЕК</p>
               <p>выставка</p>
             </div>
           </div>
           <div class="news-page-block-item-img">
             <img src="../../assets/image/Pic-fit3.jpg" alt="">
           </div>
           <div class="news-page-block-item-title">
             <p>фотография во времена <span class="william">самоизоляции</span></p>
           </div>
           <div class="news-page-block-item-description">
             <p>20 ноября состоится встреча с губернатором Калининградской области Антоном Алихановым по вопросам …</p>
           </div>
         </div>
       </div>
     </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import VueSwiper from "../../components/VueSwiper";
  import { mapActions, mapState} from 'vuex'
  export default {
    name: "newsPage",
    components: {VueSwiper, Footer, Header},
    computed: {
      ...mapState({
        newData: (state) => state.news.newData,
        head: (state) => state.news.head
      })
    },
    mounted() {
      if (this.$route.params.id) {
        this.getNew(this.$route.params.id + '/')
      }
    },
    methods: {
      ...mapActions({
        getNew: 'news/getNew'
      }),
      async share () {
        const shareData = {
          title: this.head.h1,
          text: this.head.text,
          url: window.location.href
        }
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.mt-60 {
  margin-top: 60px;
}

</style>
