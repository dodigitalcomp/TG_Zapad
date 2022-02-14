<template>
    <div>
        <Header bgcolor="yellow" logoColor="black" ref="header"/>
        <div id="errors" class="errors">
            <div class="home">
                <a href="">(< на главную)</a>
            </div>
            <div class="code">
                <p>404</p>
            </div>
            <div class="text">
                <p>Страница не существует или была удалена. Попробуйте вернуться на главную.</p>
            </div>
            <div id="line"></div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Main from "../components/Main";
    import Footer from "../components/Footer";
    export default {
        name: 'IndexPage',
        components: {Footer},
        destroyed () {
           window.removeEventListener('resize', this.lineChange)
        },
        mounted() {
           window.addEventListener('resize', this.lineChange);
           this.lineChange()
        },
        methods: {
            lineChange () {
                const line = document.getElementById('line')
                const errors = document.getElementById('errors')
                line.style.width = (errors.offsetWidth + 50 ) + 'px'
                line.style.left = ((errors.offsetWidth / 2) - (line.offsetWidth / 2)) + 'px'
                line.style.top = (errors.offsetHeight / 2) + 'px'
                let a = 0
                if(errors.offsetWidth < 800) {
                    a = 1000 / (errors.offsetWidth * 18)
                } else {
                    a = 1000 / (errors.offsetWidth * 11)
                }
                console.log(a)
                line.style.transform = "rotate(" + -a + "turn)";
            }
        }
    }
</script>

<style scoped lang="scss">

    #line {
        content: '';
        width: 100%;
        border-bottom: solid 1px #000000;
        position: absolute;
        z-index: 1;

        transform: rotate(-22deg);
    }

    .errors {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 700px;
        background: #FFDD7C;

        @media (max-width: 1000px) {
            flex-direction: column;
            text-align: center;
            justify-content: center;

            div:nth-child(1) {
                order: 2;
            }
            div:nth-child(2) {
                order: 1;
            }
            div:nth-child(3) {
                order: 3;
            }
        }


        .home {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-transform: uppercase;
            color: #221F1A;
            min-width: 333px;

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    margin-right: 2px;
                }
            }

            @media (max-width: 1000px) {
                margin-top: 100px;
                margin-bottom: 30px;
            }
        }

        .text {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
            color: #221F1A;

            max-width: 333px;
        }

        .code {
            font-style: normal;
            font-weight: normal;
            font-size: 200px;
            line-height: 200px;
            text-align: center;
            text-transform: uppercase;
            color: #221F1A;
            @media (max-width: 1000px) {
                margin-top: 100px;
            }
        }
    }
</style>