<template>
  <div>
    <Header ref="header"/>
    <div class="news">
      <div class="news-header">
        <div class="news-header-title">
          <p v-if="head">{{head.h1}}</p>
        </div>
        <div class="news-header-filter">
          <div class="news-header-filter-left ">
            <div class="item" @click="openFilter = !openFilter" v-if="filter">
              <img class="mr-1" src="../../assets/image/(.svg" alt="">
              <p>{{filter.name}}</p>
              <img src="../../assets/image/arrow.svg" alt="">
              <img class="ml-1" src="../../assets/image/).svg" alt="">
              <div class="item-nav" v-if="openFilter">
                <p class="item-nav-text" @click="getData(item.link)" v-for="(item, i) in filter.variants" :key="i">{{item.name}}</p>
              </div>
            </div>
            <div class="item" @click="openSort = !openSort" v-if="sort">
              <img class="mr-1" src="../../assets/image/(.svg" alt="">
              <p>{{sort.name}}</p>
              <img src="../../assets/image/arrow.svg" alt="">
              <img class="ml-1" src="../../assets/image/).svg" alt="">
              <div class="item-nav" v-if="openSort">
                <p class="item-nav-text" @click="getData(item.link)" v-for="(item, i) in sort.variants" :key="i">{{item.name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-content" id="news-content" v-if="newsList && newsList.length">
        <NuxtLink tag="div" :to="item.url" class="news-content-item" :id="'news-item-' + index" v-for="(item, index) in newsList" :key="index">
          {{currentI(index)}}
          <div class="news-content-item-text">
            <div class="news-content-item-text-date">{{item.date}}</div>
            <div class="news-content-item-text-author">{{item.rubric}}</div>
          </div>
          <div class="news-content-item-img">
            <img :src="item.picture" alt="">
          </div>
          <div class="news-content-item-title">
            <p>{{item.name}}</p>
          </div>
          <div class="news-content-item-description text-mini" v-html="item.text">
<!--            <p>{{item.text}}</p>-->
          </div>
        </NuxtLink>
      </div>
      <div class="news-pagination line-block">
        <div class="news-pagination-page" v-if="pagination && pagination.current_page && pagination.max_page > 1">
          <vs-pagination
                  :total-pages="pagination.max_page"
                  :current-page="+pagination.current_page ? +pagination.current_page : 1"
                  @change="changePage"
          ></vs-pagination>
        </div>
        <div class="line-dn"></div>
        <div></div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import { mapActions, mapState} from 'vuex'
  import VsPagination from '@vuesimple/vs-pagination';
  export default {
    name: "news",
    data() {
      return {
        currentIndex: false,
        openFilter: false,
        openSort: false,
      }
    },
    components: {
      VsPagination,
    },
    computed: {
      ...mapState({
        newsList: (state) => state.news.newsList,
        head: (state) => state.news.head,
        filter: (state) => state.news.filter,
        sort: (state) => state.news.sort,
        pagination: (state) => state.news.pagination
      })
    },
    created() {
      this.getNews(1).then(() => {
        console.log(this.newsList)
        console.log(this.pagination)
      })
    },
    methods: {
      ...mapActions({
        getNews: 'news/getNews',
        getNewsByLink: 'news/getNewsByLink',
      }),
      getData(link) {
        this.getNewsByLink(link)
      },
      currentI (i) {
        if (i === 10) {
          setTimeout(() => {
            let item = document.getElementById('news-item-5');
            const newsItem = document.getElementById('news-item-input')
            if(!newsItem) {
              let li = document.createElement('div');
              li.classList.add('news-content-item')
              li.setAttribute('id','news-item-input');
              li.innerHTML = '   <div class="bg-yellow item-block">\n' +
                      '            <div class="news-content-item-title">\n' +
                      '              <p>Будь в курсе</p>\n' +
                      '            </div>\n' +
                      '            <div class="news-content-item-input">\n' +
                      '              <div class="news-content-item-input-block">\n' +
                      '                <input type="text" value="ваш email" placeholder="ваш email">\n' +
                      '                <button class="text">\n' +
                      '                  <img class="mr-1" src="../../assets/image/(.svg" alt="">\n' +
                      '                  <span>подписаться</span>\n' +
                      '                  <img class="ml-1" src="../../assets/image/).svg" alt="">\n' +
                      '                </button>\n' +
                      '              </div>\n' +
                      '            </div>\n' +
                      '            <div class="news-content-item-description">\n' +
                      '              <p class="input">Подпишись на рассылку новостей Третьяковской галереи Запад и будь в курсе новых публикаций</p>\n' +
                      '            </div>\n' +
                      '          </div>';
              if(item) {
                item.parentNode.insertBefore( li, item.nextSibling  );
              }
            }
          }, 1000)
        }
      },
      changePage(page) {
        this.getNews(page)
        const item = document.getElementById('news-item-input')
        if (item) {
          item.remove()
        }
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
