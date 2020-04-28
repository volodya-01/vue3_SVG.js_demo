# vue3_svgjs_demo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### SVG.js V3.1 使用方法
> https://svgjs.com/docs/3.1/getting-started/
> https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589525(v=vs.85)?redirectedfrom=MSDN
> https://developer.mozilla.org/en-US/docs/Web/SVG
> 
> 1.安装

Npm

npm install @svgdotjs/svg.js

Yarn

yarn add @svgdotjs/svg.js

CDN.js / jsDelivr

Grab the latest version from cdnjs.com or directly from jsdelivr
Download

You can find all releases on the release Page.

The latest release can be found here

For the best developing experience make sure the source map is in the same folder as the library.

> 2.引入 SVG.js

    <1>全局引入
      **在main.js中引入SVG.js，并把SVG绑定在原型上**
      import { SVG } from "@svgdotjs/svg.js";
      Vue.prototype.$SVG =SVG;
      **组件中使用**
        <template>
            <div class="SVG1">
            <div id="test1"></div>
            </div>
        </template>

            <script>
            export default {
            name: "SVG1",
            mounted() {
                this.drawsvg1();
            },
            methods: {
                drawsvg1() {
                // 在main.js中引入SVG.js，并把SVG绑定在原型上
                // import { SVG } from "@svgdotjs/svg.js";
                // Vue.prototype.$SVG =SVG;
                var draw = this.$SVG()
                    .addTo("#test1")
                    .size(600, 600);
                var rect = draw.rect(300, 300).attr({
                    fill: "red",
                });
                },
            },
            };
            </script>

            <!-- Add "scoped" attribute to limit CSS to this component only -->
            <style scoped lang="scss">
            a {
            color: #42b983;
            }
            </style>

            <2>局部引入
            **在组件中引入**
            import { SVG } from "@svgdotjs/svg.js";
            **使用**
               <template>
                <div class="SVG2">
                    <div id="test2"></div>
                </div>
                </template>

                <script>
                import { SVG } from "@svgdotjs/svg.js";
                export default {
                name: 'SVG2',
                mounted() {
                    this.drawsvg2();
                },
                methods: {
                    drawsvg2() {
                    //局部引入SVG.js  import { SVG } from "@svgdotjs/svg.js";
                    var draw = SVG()
                        .addTo("#test2")
                        .size(600, 600);
                    var rect = draw.rect(300, 300).attr({
                        fill: "#f06",
                    });
                    }
                },
                }
                </script>

                <!-- Add "scoped" attribute to limit CSS to this component only -->
                <style scoped lang="scss">

                a {
                color: #42b983;
                }
                </style>

            
