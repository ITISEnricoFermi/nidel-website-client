<template>
<div class="live">
  <div class="content">
    <div class="plotter-box">
      <app-plotter :data="temperature_internal" :color="green" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Temperatura Interna</p>
        <p class="value">{{ data.temperature_internal + '°' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="humidity_internal" :color="yellow" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Umidità Interna</p>
        <p class="value">{{ data.humidity_internal + '%' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="pressure" :color="blue" :max="'1500'" :min="'500'"></app-plotter>
      <div class="values">
        <p class="tag">Pressione</p>
        <p class="value">{{ data.pressure + 'hPa' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="temperature_external" :color="green" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Temperatura Esterna</p>
        <p class="value">{{ data.temperature_external + '°' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="humidity_external" :color="yellow" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Umidità Esterna</p>
        <p class="value">{{ data.humidity_external + '%' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'altitude'" :color="red" :max="'2000'" :min="'-500'"></app-plotter>
      <div class="values">
        <p class="tag">Altitudine</p>
        <p class="value">{{ data.altitude + 'm' }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  eventBus
} from '@/main'

import Values from './values.vue'
import Plotter from './plotter.vue'

export default {
  data: () => {
    return {
      red: '255, 68, 71',
      green: '0, 255, 0',
      blue: '56, 151, 240',
      yellow: '243, 163, 42',
      data: {
        temperature_internal: 0,
        humidity_internal: 0,
        temperature_external: 0,
        humidity_external: 0,
        pressure: 0,
        altitude: 0
      }
    }
  },
  sockets: {
    temperature_internal (temp) {
      eventBus.temperature_internal(temp)
      this.data.temperature_internal = Number(temp)
    },
    humidity_internal (humi) {
      eventBus.humidity_internal(humi)
      this.data.humidity_internal = Number(humi)
    },
    temperature_external (temp) {
      eventBus.temperature_external(temp)
      this.data.temperature_external = Number(temp)
    },
    humidity_external (humi) {
      eventBus.humidity_external(humi)
      this.data.humidity_external = Number(humi)
    },
    pressure (press) {
      eventBus.pressure(press)
      this.data.pressure = Number(press)
    },
    altitude (alt) {
      eventBus.altitude(alt)
      this.data.altitude = Number(alt)
    },
    orientation (ori) {
      eventBus.orientation(ori)
      this.data.orientation = ori
    },
    position (pos) {
      eventBus.position(pos)
      this.data.position = pos
      this.data.altitude = pos.altitude
    }
  },
  components: {
    appValues: Values,
    appPlotter: Plotter
  }
}
</script>

<style scoped lang="scss">
.live {
    width: 100%;

    .content {
        width: 100%;
        height: 100%;
        padding: 3vh;
        display: grid;
        grid-gap: 3vh;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 'temperature_internal temperature_internal humidity_internal humidity_internal pressure pressure' 'temperature_external temperature_external humidity_external humidity_external altitude altitude';

        @include respond(tab-lan) {
            display: block;

        }

        & > * {

          @include respond(tab-lan) {
              min-height: 20rem;
          }

          &:nth-child(1) {
            grid-area: temperature_internal;
          }

          &:nth-child(2) {
            grid-area: humidity_internal;
          }

          &:nth-child(3) {
            grid-area: pressure;
          }

          &:nth-child(4) {
            grid-area: temperature_external;
          }

          &:nth-child(5) {
            grid-area: humidity_external;
          }

          &:nth-child(6) {
            grid-area: altitude;
          }

        }

        .plotter-box, .model-box {
          box-shadow: 0 0 2rem rgba($color-black,0.5);
          border-radius: 0.25rem;
          overflow: hidden;

          @include respond(tab-lan) {

            &:not(:last-child) {
              margin-bottom: 3vh;
            }
          }

        }

        .plotter-box {

            .plotter {
              height: calc(100% - 4rem);

              @include respond(tab-lan) {
                  min-height: 20rem;
              }
            }

            .values {
                height: 4rem;
                width: 100%;
                background-color: $color-white-light-1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;

                .tag {
                    font-size: 2rem;
                    color: $color-grey-1;
                }

                .value {
                    color: $color-grey-1;
                }
            }
        }
    }
}
</style>
