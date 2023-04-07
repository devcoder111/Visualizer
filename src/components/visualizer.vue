<template>
  <div class="main">
    <div class="page_container">
      <div id="Image" class="">
        <div class="pr-0 img-container" :class="{ expeand: sidebarClose }">
          <div class="Image">
            <transition name="slide-fade" mode="out-in">
              <img
                ref="imageContainer"
                :style="imageStyle"
                v-bind:src="imageSrc"
                class="image"
              />
            </transition>
            <div class="zoom position-absolute">
              <button @click="zoomIn">+</button>
              <span>{{ zoomLevel }}</span>
              <button @click="zoomOut">-</button>
            </div>
            <div class="toggle-btn" @click="toggleSidebar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24">
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M9.2025,20.3773H6.4188V17.5937a.9091.9091,0,1,0-1.8182,0v3.6927a.9091.9091,0,0,0,.9091.9091H9.2025a.9091.9091,0,0,0,0-1.8182Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M5.51,7.7064a.9091.9091,0,0,0,.9091-.9091V4.0137H9.2025a.9091.9091,0,0,0,0-1.8182H5.51a.9091.9091,0,0,0-.9091.9091V6.7973A.9091.9091,0,0,0,5.51,7.7064Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M5.51,14.9507a.9091.9091,0,0,0,.9091-.9091V10.3489a.9091.9091,0,0,0-1.8182,0v3.6927A.9091.9091,0,0,0,5.51,14.9507Z"
                    ></path>
                  </g>
                  <path
                    fill="#fff"
                    d="M15.5614,9.4445V6.36a.6883.6883,0,0,0-.7325-.7.7075.7075,0,0,0-.47.23q-.8128.818-1.6291,1.6325L8.6013,11.6518a.7714.7714,0,0,0-.2529.4368.6525.6525,0,0,0,.1544.542.7687.7687,0,0,0,.0722.0755q2.8922,2.8971,5.7875,5.7908a.6856.6856,0,0,0,1.1825-.312,1.1026,1.1026,0,0,0,.0164-.2069V14.9463h4.75a.7014.7014,0,0,0,.7554-.7588V10.19a.6978.6978,0,0,0-.7489-.7522H15.6928l-.1314.0066Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <div
            id="sidebar"
            :class="{ active: sidebarActive }"
            class="pr-4 side"
          >
            <div>
              <div class="list">
                <div class="sidebar_header">Visualizer</div>

                <div class="pt-3">
                  <v-expansion-panels v-model="panel" multiple>
                    <v-expansion-panel>
                      <v-expansion-panel-title>Home</v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div
                          class=""
                          v-for="(model, id) in models"
                          :key="id"
                          v-on:click="selectModel(model)"
                        >
                          <div
                            v-if="model.colourboard_options.length != 0"
                            class="text category selected mb-0 justify-space-between d-flex align-center"
                            :class="{
                              active: model.title === selectedModel.title,
                            }"
                          >
                            <div>{{ model.title }}</div>
                            <div class="swi">
                              <v-switch
                                color="primary"
                                v-model="showActiveModelToggle"
                                :value="model.title"
                                inset
                              ></v-switch>
                            </div>
                          </div>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel>
                      <v-expansion-panel-title
                        >Colourboard</v-expansion-panel-title
                      >
                      <v-expansion-panel-text>
                        <div
                          class=""
                          v-for="(
                            colourboard, id
                          ) in selectedModel.colourboard_options"
                          :key="id"
                          v-on:click="selectColourboard(colourboard)"
                        >
                          <div
                            class="text category selected mb-0 justify-space-between d-flex align-center"
                            :class="{
                              active:
                                colourboard.option_name ===
                                selectedColourboard.option_name,
                            }"
                          >
                            <div>{{ colourboard.option_name }}</div>
                            <div class="swi">
                              <v-switch
                                color="primary"
                                v-model="showActiveCBToggle"
                                :value="colourboard.option_name"
                                inset
                              ></v-switch>
                            </div>
                          </div>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_view">
          <div class="mobile_view_header">
            <button class="home_btn">
              <icon name="home_menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="13.609"
                  viewBox="0 0 15 13.609"
                >
                  <path
                    id="Icon:_home-2"
                    data-name="Icon: home"
                    d="M17.571,11.057l-7.5-5.822-7.5,5.822V8.683l7.5-5.822,7.5,5.822ZM15.7,10.845V16.47h-3.75V12.72H8.2v3.75H4.446V10.845l5.625-4.219Z"
                    transform="translate(-2.571 -2.861)"
                  ></path>
                </svg>
              </icon>
            </button>
            <div class="headerText">Kitchen</div>
            <button class="back_btn">
              <icon class="back-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28">
                  <path
                    d="M18.56,4.7H6.73V.52A.64.64,0,0,0,6.27,0a.62.62,0,0,0-.65.19L.22,5.74l-.07.07A.66.66,0,0,0,0,6.33a.76.76,0,0,0,.23.42L4.1,10.68l1.52,1.56a.67.67,0,0,0,.44.22.65.65,0,0,0,.68-.67v-4H18.56a8.57,8.57,0,0,1,0,17.14h-8a1.54,1.54,0,0,0,0,3.08h8A11.56,11.56,0,0,0,30,16.35,11.55,11.55,0,0,0,18.56,4.7Z"
                  ></path>
                </svg>
              </icon>
            </button>
            <button class="inserted">
              <icon class="circle_i">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        id="Icon_metro-info"
                        data-name="Icon metro-info"
                        d="M8.75,5.94A.94.94,0,0,1,9.69,5h.62a.94.94,0,0,1,.94.94v.62a.94.94,0,0,1-.94.94H9.69a.94.94,0,0,1-.94-.94ZM12.5,15h-5V13.75H8.75V10H7.5V8.75h3.75v5H12.5ZM10,0A10,10,0,1,0,20,10h0A10,10,0,0,0,10,0Zm0,18.12A8.12,8.12,0,1,1,18.13,10,8.12,8.12,0,0,1,10,18.12Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </icon>
            </button>
          </div>
          <div class="mobile_view_body">
            <div class="menu_content">
              <div class="d-flex align-items-center bubble_button category_1">
                Home
              </div>
              <div class="d-flex align-items-center bubble_button category_1">
                Colorboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from "hammerjs";
import axios from "axios";

export default {
  name: "VisualizerApp",

  data: () => ({
    models: [],
    panel: [0, 1],
    selectedModel: {},
    isShowimg: false,
    showActiveModelToggle: ["Accolade"],
    showActiveCBToggle: ["Accolade"],
    zoomLevel: 100,
    toggleClick: false,
    showActiveMenu: false,
    selectedColourboard: {},
    activeModel: "Accolade",
    sidebarActive: true,
    sidebarClose: false,
    translateX: 0,
    translateY: 0,
  }),
  computed: {
    imageSrc() {
      return this.selectedColourboard.plumbing_option_image;
    },
    imageStyle() {
      if (this.zoomLevel == 100) {
        return {};
      }
      if (this.zoomLevel == 150) {
        if (this.translateX >= -342 && this.translateY >= 57) {
          return {
            transform: `translate(-342px,57px) scale(${this.zoomLevel / 100})`,
          };
        }
      }
      return {
        transform: `translate(${this.translateX}px, ${
          this.translateY
        }px) scale(${this.zoomLevel / 100})`,
      };
    },
  },
  watch: {
    selectedColourboard: {
      handler() {
        console.log(
          "selectedColourboard",
          this.selectedColourboard,
          this.selectedModel
        );
        this.$router.push({
          query: Object.assign({}, this.$route.query, {
            model: this.selectedModel.title,
            colourboard: this.selectedColourboard.option_name,
          }),
        });
      },
      deep: true,
    },
  },
  async mounted() {
    await axios.get("/wp-json/templatev2/v1/models").then((response) => {
      this.models = response.data;
      this.selectedModel = this.models[0];
      this.selectModel(this.selectedModel);
      console.log("models-", this.models);
    });
    let query = this.$route.query;
    // eslint-disable-next-line no-prototype-builtins
    if (query.hasOwnProperty("model") && query.hasOwnProperty("colourboard")) {
      var filterModels = this.models.filter((e) => e.title == query.model);
      if (filterModels.length > 0) {
        this.selectedModel = filterModels[0];
        var filterColourboards = this.selectedModel.colourboard_options.filter(
          (e) => e.option_name == query.colourboard
        );
        if (filterColourboards.length > 0)
          this.selectedColourboard = filterColourboards[0];
        console.log("dd11", this.selectedColourboard);
        this.selectColourboard(this.selectedColourboard);
      }
    }
    const mc = new Hammer(this.$refs.imageContainer);
    console.log(mc);
    let lastPosX = 0;
    let lastPosY = 0;
    let isDragging = false;

    mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
    mc.on("panstart", () => {
      isDragging = true;
    });
    mc.on("panmove", (e) => {
      if (!isDragging) return;
      this.translateX = lastPosX + e.deltaX;
      this.translateY = lastPosY + e.deltaY;
    });
    mc.on("panend", () => {
      isDragging = false;
      lastPosX = this.translateX;
      lastPosY = this.translateY;
    });
    mc.get("pinch").set({ enable: true });
    mc.on("pinchstart", () => {
      this.scale = Math.max(1, this.scale);
    });
    mc.on("pinchmove", (e) => {
      this.scale = Math.max(1, Math.min(3, e.scale));
    });
  },
  methods: {
    selectModel(model) {
      this.selectedModel = model;

      this.selectColourboard(this.selectedModel.colourboard_options[0]);
    },
    selectColourboard(colourboard) {
      this.showActiveModelToggle = [this.selectedModel.title];
      this.showActiveCBToggle = [colourboard.option_name];
      // if (id == this.activeModel) {
      //   this.activeModel = null;
      // } else {
      //   this.activeModel = id;
      // }
      this.toggleClick = !this.toggleClick;
      this.selectedColourboard = colourboard;
    },
    zoomIn() {
      if (this.zoomLevel != 250) {
        this.zoomLevel += 50;
      }
    },
    zoomOut() {
      if (this.zoomLevel != 100) {
        this.zoomLevel -= 50;
      }
    },
    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;
      this.sidebarClose = !this.sidebarClose;
    },
  },
};
</script>

<style scoped>
/* .slide-fade-enter-active {
  opacity: 1;
  z-index: 10;
}

.slide-fade-leave-active {
  opacity: 1;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
} */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.active {
  border-left-color: #29abe2 !important;
  background: linear-gradient(
    90deg,
    rgba(41, 171, 226, 0.2) 0%,
    30%,
    (#ffffff) 69%
  );
}

.page_container .expeand .Image {
  width: 100%;
}

.img-main {
  max-height: 100vh;
  object-fit: cover;
}
.img-mai::nth-child(2) {
  object-fit: cover !important;
}
.v-input__details {
  display: none !important;
}
.page_container .img-container {
  transition: width 0.3s ease;

  height: 100vh;
}
.page_container .img-container.expeand {
  width: 100% !important;
}
.side {
  width: 29vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  height: 100%;
  overflow-y: auto;
  padding: 18px;
  transition: transform 0.3s ease;
  transform: translate(100%);
  display: flex;
  flex-direction: column;
  box-shadow: -1px 0 12px 3px #6665654d;
}

.category .selected {
  border-left-color: #29abe2;
  background: linear-gradient(
    90deg,
    rgba(41, 171, 226, 0.2) 0%,
    30%,
    (#ffffff) 69%
  );
}
.category {
  padding: 5px 0 5px 10px;
  margin-bottom: 14px;
  background: linear-gradient(90deg, #f2f2f2 0%, 30%, #ffffff) 69%;
  border-left: 13px solid #2f323a;
}
.zoom {
  right: 15px;
  bottom: 15px;
  display: inline-grid;
  transform: translate3d(0px, 0px);
}
.zoom button {
  font-size: 30px;
  background: #ffffff;
  width: 70px;
}
.zoom span {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  background: #f2f2f2;
  text-align: center;
}
.Image {
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
}
.image {
  width: 100%;
  object-fit: contain;
}
.swi .v-input__details {
  display: none !important;
}
.swi {
  height: 54px;
}
.bg {
  padding-top: 18px;
}
.text {
  margin-bottom: 10px !important;
  font-size: 18px;
}
.close_tab img {
  height: 30px;
  width: 30px;
}
#sidebar.active {
  transform: translate(0) !important;
  right: 0px;
  transition: width 0.3s ease;
}
.toggle-btn {
  position: absolute;
  right: 0px;
  top: 10px;
  background: #000;
  width: 30px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  cursor: pointer;
}
.toggle-btn svg {
  width: 30px;
}
.expeand .toggle-btn {
  transform: rotate(0deg);
}
.Image.move img {
  cursor: move;
}
#sidebar div.list div.item {
  padding: 15px 10px;
  color: #fcfcfc;
  text-transform: uppercase;
  font-size: 12px;
}
#sidebar div.list .sidebar_header {
  padding: 15px 10px;
  color: white;
  font-size: 22px;
  background: #000;
}

#sidebar div.list div.item a {
  color: #fcfcfc;
  text-decoration: none;
}
.page_container {
  width: 100%;
  height: 100%;
}
.page_container .Image {
  transition: width 0.3s ease;
  height: 100%;
  width: calc(100% - 29vw);
  position: relative;
}
.main .img-container {
  position: relative;
  height: 100vh;
}
img {
  max-width: 100%;
  display: block;
}
.main .img-container img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  cursor: pointer;
}
@media (max-width: 980px) {
  .img-container {
    height: calc(100vh - 16vw) !important;
  }
  .zoom {
    bottom: 120px !important;
  }
  .mobile_view {
    display: flex !important;
  }
}

@media (max-width: 1024px) {
  .side {
    display: none;
  }
  .Image {
    width: 100% !important;
  }
  .toggle-btn {
    display: none;
  }
}

.main .mobile_view {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 125px;
  max-height: 40vh;
}
.mobile_view {
  display: none;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  transition: all 0.2s ease;
}

.mobile_view .mobile_view_header {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: #2f323a;
  box-shadow: 0 4px 7px #95989a;
  height: 35px;
  flex: 0 0 auto;
  z-index: 1;
}
.button {
  background: none;
  margin: 0;
  padding: 0;
  border: none;
}
.mobile_view .mobile_view_header button {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  height: 100%;
}
.mobile_view .mobile_view_header .home_btn {
  background-color: #999999;
}
.mobile_view .mobile_view_header button icon {
  width: 20px;
  height: 20px;
}
.mobile_view .mobile_view_header .home_btn icon {
  fill: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.mobile_view .mobile_view_header .home_btn icon svg {
  width: 15px;
  height: 15px;
}
.mobile_view .mobile_view_header .headerText {
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  border-right: 1px solid #ccc;
  border-right: 2px solid #ece6e6;
  padding: 0 10px;
  line-height: 1em;
}
.mobile_view .mobile_view_header .back_btn {
  background-color: #999999;
}
.mobile_view .mobile_view_header .back_btn icon {
  fill: #ffffff;
  display: inline-flex;
  width: 15px;
  height: 15px;
}
.mobile_view .mobile_view_header .back_btn icon svg {
  flex-shrink: 0;
}
.main .mobile_view_body {
  flex: 1 1 0;
  background-color: #ffffff;
  color: #000000;
}
.main .mobile_view .menu_content {
  display: flex;
  align-items: flex-start;
  height: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.main .mobile_view .bubble_button {
  padding: 10px 25px;
  box-shadow: 0 1px 5px #44444499;
  border-radius: 5px;
  margin-left: 15px;
  flex-shrink: 0;
  overflow-x: auto;
  border: 3px solid transparent;
  margin-top: 15px;
}
.main .mobile_view .bubble_button,
.category_1 {
  background-color: #2f323a;
  border-color: #2f323a;
  color: #fff;
}
</style>
