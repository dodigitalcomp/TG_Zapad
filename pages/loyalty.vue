<template>
  <div>
    <Header/>
     <div class="friend-page">
       <div class="friend-page-header">
         <div id="about" class="friend-page-header-content">
           <div class="friend-page-header-content-block">
             <div class="friend-page-header-content-block-title">
               <p>{{head.h1}}</p>
             </div>
           </div>
           <div class="friend-page-header-content-right">
             <div class="friend-page-header-content-right-line">
               <div class="friend-page-header-content-right-line-block"></div>
             </div>
             <div class="friend-page-header-content-right-img">
               <img class="image" :src="loyalty.photoCard" alt="">
               <div v-html="loyalty.contacts"></div>
<!--               <div class="phone-text">-->
<!--                 <p>По вопросам участия в программе обращайтесь по адресу </p>-->
<!--               </div>-->
<!--               <div class="flex items-center email-text">-->
<!--                 <img class="mr-1" src="../assets/image/(.svg" alt="">-->
<!--                 <span>membership@tretyakov.ru</span>-->
<!--                 <img class="ml-1" src="../assets/image/).svg" alt="">-->
<!--               </div>-->
<!--               <div class="phone-text">-->
<!--                 <p>или по телефону</p>-->
<!--               </div>-->
<!--               <div class="phone-text">-->
<!--                 <p>+7 495 957-07-27</p>-->
<!--               </div>-->
             </div>
           </div>
         </div>
       </div>
       <div class="friend-page-content">
         <div class="friend-page-content-buy-ticket">
           <div class="fixed-info" id="fixed-info">
             <div class="friend-page-content-buy-ticket-date">
               <div @click="scrollTab('about')" class="flex items-center item">
                 <img v-if="activeTab === 'about'" src="../assets/image/Rectangle1108.svg" alt="">
                 <p>{{langPhrase.about}}</p>
               </div>
               <div @click="scrollTab('levelCard')" class="flex items-center item">
                 <img v-if="activeTab === 'levelCard'" src="../assets/image/Rectangle1108.svg" alt="">
                 <p>{{langPhrase.levelCard}}</p>
               </div>
               <div @click="scrollTab('whereBuy')" class="flex items-center item">
                 <img v-if="activeTab === 'whereBuy'" src="../assets/image/Rectangle1108.svg" alt="">
                 <p>{{langPhrase.whereBuy}}</p>
               </div>
               <div @click="scrollTab('corpProgram')" class="flex items-center item">
                 <img v-if="activeTab === 'corpProgram'" src="../assets/image/Rectangle1108.svg" alt="">
                 <p>{{langPhrase.corpProgram}}</p>
               </div>
               <div @click="scrollTab('faq')" class="flex items-center item">
                 <img v-if="activeTab === 'faq'" src="../assets/image/Rectangle1108.svg" alt="">
                 <p>{{langPhrase.faq}}</p>
               </div>
               <div @click="scrollTab('importantInfo')" class="flex items-center item">
                 <img src="../assets/image/infoOutline.svg" alt="">
                 <p>{{langPhrase.importantInfo}}</p>
               </div>
             </div>
           </div>

         </div>
         <div class="friend-page-content-info">
           <div class="friend-page-content-info-title">
             <p>{{loyalty.programTitle}}</p>
           </div>
           <div class="friend-page-content-info-description">
             <p class="friend-page-content-info-description-left" v-html="loyalty.programText"></p>
             <div class="friend-page-content-info-description-right">
               <p>{{loyalty.partnerName}}</p>
               <img src="../assets/image/Group.svg" alt="">
             </div>
           </div>
<!--           <div class="friend-page-content-info-description">-->
<!--             <p class="friend-page-content-info-description-left">Карта «Друг Третьяковской галереи» оформляется на один год и действует на постоянные экспозиции и временные выставки Третьяковской галереи, Новой Третьяковки, Инженерного корпуса и малых музеев.   </p>-->
<!--           </div>-->
           <div class="friend-page-content-info-title">
             <p>{{loyalty.usageTitle}}</p>
           </div>
           <div class="friend-page-content-info-table" v-html="loyalty.usageText">
<!--             <div class="friend-page-content-info-table-left">-->
<!--               <p>Общие возможности карт</p>-->
<!--             </div>-->
<!--             <div class="friend-page-content-info-table-right">-->
<!--                <div class="friend-page-content-info-table-right-item">-->
<!--                  <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                  <p>Посещение Галереи без очереди, без билета. На временные выставки и выставки по сеансам могут действовать специальные условия посещения.</p>-->
<!--                </div>-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Посещение Галереи по понедельникам и в утреннее время (даты и время сообщаются дополнительно).</p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Приоритетная покупка лекционных абонементов и билетов на фестиваль VIVARTE.</p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Новостная рассылка Галереи</p>-->
<!--               </div>-->
<!--             </div>-->
           </div>
           <div id="levelCard" class="friend-page-content-info-level">
             <p class="cursor-pointer" :class="activeIndex === i ? 'active' : ''" @click="activeIndex = i" v-for="(item, i) in levelCards">{{item.title}}</p>
           </div>
           <div v-if="levelCards && levelCards[activeIndex]" v-html="levelCards[activeIndex].text"></div>
<!--           <div class="friend-page-content-info-table">-->
<!--             <div class="friend-page-content-info-table-left">-->
<!--               <p>Уникальные возможности карты</p>-->
<!--             </div>-->
<!--             <div class="friend-page-content-info-table-right pb-0">-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Посещение Галереи без очереди, без билета. На временные выставки и выставки по сеансам могут действовать специальные условия посещения.</p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Посещение Галереи по понедельникам и в утреннее время (даты и время сообщаются дополнительно).</p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Приоритетная покупка лекционных абонементов и билетов на фестиваль VIVARTE.</p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-item">-->
<!--                 <img class="friend-page-content-info-table-right-item-img" src="../assets/image/Rectangle1108.svg" alt="">-->
<!--                 <p>Новостная рассылка Галереи</p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-text">-->
<!--                 <p>* Скидка распространяется на товары музейного магазина, отмеченные стикерами с логотипом Третьяковской галереи​ </p>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-table-right-row">-->
<!--                 <div class="friend-page-content-info-table-right-row-item">-->
<!--                   <div class="friend-page-content-info-table-right-row-item-direction">-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-title">Семейная</p>-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-description">для 2 взрослых + 3 детей до 18 лет</p>-->
<!--                   </div>-->
<!--                   <p class="friend-page-content-info-table-right-row-item-prise">12 000 ₽</p>-->
<!--                 </div>-->
<!--                 <div class="friend-page-content-info-table-right-row-item">-->
<!--                   <div class="friend-page-content-info-table-right-row-item-direction">-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-title">Семейная</p>-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-description">для 2 взрослых + 3 детей до 18 лет</p>-->
<!--                   </div>-->
<!--                   <p class="friend-page-content-info-table-right-row-item-prise">12 000 ₽</p>-->
<!--                 </div>-->
<!--                 <div class="friend-page-content-info-table-right-row-item">-->
<!--                   <div class="friend-page-content-info-table-right-row-item-direction">-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-title">Семейная</p>-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-description">для 2 взрослых + 3 детей до 18 лет</p>-->
<!--                   </div>-->
<!--                   <p class="friend-page-content-info-table-right-row-item-prise">12 000 ₽</p>-->
<!--                 </div>-->
<!--                 <div class="friend-page-content-info-table-right-row-item">-->
<!--                   <div class="friend-page-content-info-table-right-row-item-direction">-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-title">Семейная</p>-->
<!--                     <p class="friend-page-content-info-table-right-row-item-direction-description">для 2 взрослых + 3 детей до 18 лет</p>-->
<!--                   </div>-->
<!--                   <p class="friend-page-content-info-table-right-row-item-prise">12 000 ₽</p>-->
<!--                 </div>-->
<!--               </div>-->
<!--             </div>-->
<!--           </div>-->
           <div id="whereBuy" class="friend-page-content-info-title mat-80">
             <p>{{langPhrase.whereBuy}}</p>
           </div>
           <div class="friend-page-content-info-description">
             <p class="friend-page-content-info-description-left">{{loyalty.whereBuy}}</p>
           </div>
           <div class="friend-page-content-info-tableAddress">
             <div class="friend-page-content-info-tableAddress-left">
               <p>Адреса</p>
             </div>
             <div class="friend-page-content-info-tableAddress-right">
               <div v-for="(item ,i) in adressList" :key="i" v-html="item.text"></div>
<!--               <div class="friend-page-content-info-tableAddress-right-item">-->
<!--                 <div class="flex items-start">-->
<!--                   <img class="friend-page-content-info-tableAddress-right-item-img" src="../assets/image/pin1.svg" alt="">-->
<!--                   <div class="friend-page-content-info-tableAddress-right-item-address">-->
<!--                     <p class="friend-page-content-info-tableAddress-right-item-address-title">Главное здание в Лаврушинском переулке, 10</p>-->
<!--                     <p class="friend-page-content-info-tableAddress-right-item-address-description">Вход со стороны Малого Толмачевского пер., 9</p>-->
<!--                   </div>-->
<!--                 </div>-->
<!--                 <div class="friend-page-content-info-tableAddress-right-item-date">-->
<!--                   <p>Пн — выходной день</p>-->
<!--                 </div>-->
<!--               </div>-->
<!--               <div class="friend-page-content-info-tableAddress-right-item">-->
<!--                 <div class="flex items-start">-->
<!--                   <img class="friend-page-content-info-tableAddress-right-item-img" src="../assets/image/pin1.svg" alt="">-->
<!--                   <div class="friend-page-content-info-tableAddress-right-item-address">-->
<!--                     <p class="friend-page-content-info-tableAddress-right-item-address-title">Главное здание в Лаврушинском переулке, 10</p>-->
<!--                     <p class="friend-page-content-info-tableAddress-right-item-address-description">Стойка «Информация»</p>-->
<!--                   </div>-->
<!--                 </div>-->
<!--                 <div class="friend-page-content-info-tableAddress-right-item-date">-->
<!--                   <p>Пн — выходной день</p>-->
<!--                 </div>-->
<!--               </div>-->
             </div>
           </div>
           <div id="corpProgram" class="friend-page-content-info-title mat-80">
             <p>{{loyalty.partnerTitle}}</p>
           </div>
           <div class="friend-page-content-info-description">
             <p class="friend-page-content-info-description-left">{{loyalty.partnerText}}</p>
           </div>
           <div id="faq" class="friend-page-content-info-title mat-80" v-if="faqData && faqData.langPhrase">
             <p>{{faqData.langPhrase.title}}</p>
           </div>
           <div class="friend-page-content-info-block">
             <div class="friend-page-content-info-block-item" v-for="(item, i) in faqData.listItem" :key="i">
               <div class="friend-page-content-info-block-item-title" @click="openAnswer(i)">
                 <img v-if="openText" class="line" src="../assets/image/minus.svg" alt="">
                 <img v-else class="line" src="../assets/image/plus.svg" alt="">
                 <p>{{item.question}}</p>
               </div>
               <div v-if="faqActiveIndex === i" class="friend-page-content-info-block-item-description">
                 <p >{{item.answer}}</p>
               </div>
             </div>
           </div>
           <div class="flex items-center title-text cursor-pointer" @click="openModal = true">
             <img class="mr-1" src="../assets/image/(.svg" alt="">
             <span>задать вопрос</span>
             <img class="ml-1" src="../assets/image/).svg" alt="">
           </div>
           <div id="importantInfo" class="mat-80 mab-60" v-html="loyalty.description"></div>
<!--           <div class="friend-page-content-info-title mat-60">-->
<!--             <p>Важная Информация</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-subTitle">-->
<!--             <p>Временные правила посещения для Друзей Третьяковки</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-description mab-25">-->
<!--             <p class="friend-page-content-info-description-left">С 3 июля Третьяковская галерея и дома-музеи работают по временным правилам посещения. В связи с этим для Друзей музея также будут действовать временные специальные условия посещения: Чтобы гарантировать посещение Галереи в удобное для вас время, мы увеличили количество Понедельников и Утренних посещений для Друзей Третьяковки. Расписание ближайших мероприятий смотрите на сайте музея.-->
<!--               В рабочие дни Галереи вы, как и прежде, можете посещать музей по вашей карте «Друг Третьяковки», без приобретения дополнительного билета.</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-description mab-25">-->
<!--             <p class="friend-page-content-info-description-left">В рабочие дни Галереи вы, как и прежде, можете посещать музей по вашей карте «Друг Третьяковки», без приобретения дополнительного билета.-->
<!--               Для посещения популярных выставок в дни наиболее высокого посещения (пятница —воскресенье) мы открыли отдельную регистрацию, чтобы гарантировать вам посещение в запланированное время. Регистрация открывается на 2 недели вперед и доступна в рассылке для Друзей Третьяковки. Также вы можете зарегистрироваться через администратора программы, обратившись по адресу membership@tretyakov.ru или по телефону +7 (495) 957-07-27. </p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-description mab-25">-->
<!--             <p class="friend-page-content-info-description-left">Вы можете не регистрироваться, однако если в момент вашего визита окажется, что максимально разрешенное* число посетителей уже прошло на текущий сеанс, мы попросим вас подождать следующего сеанса.-->
<!--               *в соответствии с требованиями Роспотребнадзора и Министерства культуры РФ по ограничению числа посетителей, единовременно находящихся в залах Галереи.</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-description mab-60">-->
<!--             <p class="friend-page-content-info-description-left">Если вы планируете посещение с гостями, то советуем приобрести им электронные билеты заранее: это поможет избежать очереди в кассу и вы будете уверены, что сможете пройти на выставки вместе в одно время.</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-subTitle">-->
<!--             <p>Продление карт в связи с закрытием Галереи-->
<!--               на карантин</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-description mab-25">-->
<!--             <p class="friend-page-content-info-description-left">Срок действия карт, активных и действительных в период закрытия Галереи (18 марта — 2 июля 2020 г.), будет продлен с 3 июля 2020 г. на количество дней, «сгоревших» из-за закрытия музея.</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-description">-->
<!--             <p class="friend-page-content-info-description-left">тобы обновить карту, обратитесь в один из офисов программы «Друзья Третьяковской галереи» и обменяйте вашу карту на новую (наличие вашей старой карты обязательно). Обмен карты можно осуществить непосредственно перед посещением Галереи: это займет не более 15 минут.-->
<!--               Для посещения специальных мероприятий для Друзей музея (Понедельники, Утренние посещения и др.) мы просим обменять карту заранее. Это можно сделать непосредственно в день мероприятия: соответствующие месту проведения мероприятия офисы программы «Друзья Третьяковской галереи» будут открыты на все время мероприятий</p>-->
<!--           </div>-->
<!--           <div class="friend-page-content-info-titleLast mat-80">-->
<!--             <p>Продление карт в связи с закрытием Галереи на карантин</p>-->
<!--           </div>-->
         </div>
       </div>
     </div>
    <Footer/>
    <Modal v-if="openModal" />
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import { mapActions, mapState} from 'vuex'
  import Modal from "../components/Modal";
  export default {
    name: "loyalty",
    components: {Modal, Footer, Header},
    data () {
      return {
        faqActiveIndex: null,
        activeTab: 'about',
        activeIndex: 0,
        openModal: false,
        openText: false,
        about: 0,
        levelCard: 0,
        whereBuy: 0,
        corpProgram: 0,
        faq: 0,
        importantInfo: 0,
      }
    },
    computed: {
      ...mapState({
        adressList: (state) => state.loyalty.adressList,
        langPhrase: (state) => state.loyalty.langPhrase,
        levelCards: (state) => state.loyalty.levelCards,
        loyalty: (state) => state.loyalty.loyalty,
        head: (state) => state.loyalty.head,
        faqData: (state) => state.loyalty.faqData
      })
    },
    created() {
      this.getData()
    },
    methods: {
      ...mapActions({
        getData: 'loyalty/getData'
      }),
      scroll () {
        this.about = document.getElementById('about').offsetTop
        this.levelCard = document.getElementById('levelCard').offsetTop
        this.whereBuy = document.getElementById('whereBuy').offsetTop
        this.corpProgram = document.getElementById('corpProgram').offsetTop
        this.faq = document.getElementById('faq').offsetTop
        this.importantInfo = document.getElementById('importantInfo').offsetTop
      },
      scrollTab(tab) {
        let top = 0
        switch (tab) {
          case 'about':
            top = this.about
            break;
          case 'levelCard':
            top = this.levelCard
            break;
          case 'whereBuy':
            top = this.whereBuy
            break;
          case 'corpProgram':
            top = this.corpProgram
            break;
          case 'faq':
            top = this.faq
            break;
          case 'importantInfo':
            top = this.importantInfo
            break;
          default:
            top = 0;
        }

        if (top > 200) {
          top = top - 200
        }
        window.scrollTo({
          top: top,
          behavior: "smooth"
        });
      },
      openAnswer(i) {
        if (this.faqActiveIndex === i) {
          this.faqActiveIndex = null
        } else {
          this.faqActiveIndex = i
        }
      }
    },
    mounted() {
      this.$nuxt.$on('close', () => {
        this.openModal = false;
      });
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setTimeout(() => {
        this.scroll()
      }, 2000)
      const info = document.getElementById('fixed-info')
      const vm = this
      addEventListener('scroll', function () {
        let scroll = 648
        let scrollEnd = 4700
        let scrollEnd2 = 5100
        let top = '91%'
        if (window.innerWidth < 850) {
          scroll = 881
          scrollEnd = 5100
          scrollEnd2 = 5500
          top = '91%'
        }
        if (info) {
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
        }

        let y = window.scrollY
        y = y + 200
        if (vm.about <= y && vm.levelCard > y) {
          vm.activeTab = 'about'
        } else if (vm.levelCard <= y && vm.whereBuy > y) {
          vm.activeTab = 'levelCard'
        } else if (vm.whereBuy <= y && vm.corpProgram > y) {
          vm.activeTab = 'whereBuy'
        } else if (vm.corpProgram <= y && vm.faq > y) {
          vm.activeTab = 'corpProgram'
        } else if (vm.faq <= y && vm.importantInfo > y) {
          vm.activeTab = 'faq'
        } else if (vm.importantInfo <= y) {
          vm.activeTab = 'importantInfo'
        } else {
          vm.activeTab = 'about'
        }
      })
    }
  }
</script>

<style scoped lang="scss">

  .title-text {
    margin-top: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-transform: uppercase;
    color: #211F1A;
  }

  .mab-25 {
    margin-bottom: 25px !important;
  }

  .mab-60 {
    margin-bottom: 60px !important;
  }

  .mat-80 {
    margin-top: 80px;
  }
  .mat-60 {
    margin-top: 60px;
  }
  .pb-0 {
    padding-bottom: 0 !important;
  }

</style>
