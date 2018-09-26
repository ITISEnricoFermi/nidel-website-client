<template>
<div class="live">
  <div class="content">
    <div class="plotter-box">
      <app-plotter :data="'temperature_internal'" :color="italy.green" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Temperatura Interna</p>
        <p class="value">{{ data.temperature_internal + '°C' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'humidity_internal'" :color="italy.white" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Umidità Interna</p>
        <p class="value">{{ data.humidity_internal + '%' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'gas'" :color="italy.red" :max="'1023'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Metano e CO2</p>
        <p class="value">{{ data.gas + 'ppm' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'temperature_external'" :color="italy.green" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Temperatura Esterna</p>
        <p class="value">{{ data.temperature_external + '°C' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'humidity_external'" :color="italy.white" :max="'100'" :min="'0'"></app-plotter>
      <div class="values">
        <p class="tag">Umidità Esterna</p>
        <p class="value">{{ data.humidity_external + '%' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'lum_internal'" :color="italy.red" :max="'40000'" :min="'-500'"></app-plotter>
      <div class="values">
        <p class="tag">Luminosità Interna</p>
        <p class="value">{{ data.lum_internal + 'lux' }}</p>
      </div>
    </div>
    <div class="plotter-box">
      <app-plotter :data="'lum_external'" :color="italy.red" :max="'80000'" :min="'-500'"></app-plotter>
      <div class="values">
        <p class="tag">Luminosità Esterna</p>
        <p class="value">{{ data.lum_external + 'lux' }}</p>
      </div>
    </div>
    <div class="counter-box">
      <app-single-counter :value="birds" :crop="'Uccelli'">
        <i class="fas fa-crow"></i>
      </app-single-counter>
    </div>
    <div class="counter-box">
      <app-single-counter :value="out" :crop="'Uscite'">
        <i class="fas fa-sign-out-alt"></i>
      </app-single-counter>
    </div>
    <div class="counter-box">
      <app-single-counter :value="entrance" :crop="'Ingressi'">
        <i class="fas fa-sign-in-alt"></i>
      </app-single-counter>
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
import SingleCounter from '../counter/single'

export default {
  data: () => {
    return {
      red: '255, 68, 71',
      green: '0, 255, 0',
      blue: '56, 151, 240',
      yellow: '243, 163, 42',
      italy: {
        green: '0, 146, 70',
        white: '241, 242, 241',
        red: '206, 43, 55'
      },
      data: {
        temperature_internal: 0,
        humidity_internal: 0,
        temperature_external: 0,
        humidity_external: 0,
        lum_internal: 0,
        lum_external: 0,
        gas: 0
      },
      birds: 0,
      entrance: 0,
      out: 0
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
    gas (gas) {
      eventBus.gas(gas)
      this.data.gas = Number(gas)
    },
    lum_internal (lum) {
      eventBus.lum_internal(lum)
      this.data.lum_internal = Number(lum)
    },
    lum_external (lum) {
      eventBus.lum_external(lum)
      this.data.lum_external = Number(lum)
    }
  },
  components: {
    appValues: Values,
    appPlotter: Plotter,
    appSingleCounter: SingleCounter
  }
}
</script>

<style scoped lang="scss">
.live {
    width: 100%;
    padding: 3vh;

    .content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-gap: 3vh;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(3, 25rem);
        grid-template-areas: 'temperature_internal temperature_internal humidity_internal humidity_internal gas gas' 'temperature_external temperature_external humidity_external humidity_external lum_internal lum_internal' 'lum_external lum_external birds birds entrance out';

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
                grid-area: gas;
            }

            &:nth-child(4) {
                grid-area: temperature_external;
            }

            &:nth-child(5) {
                grid-area: humidity_external;
            }

            &:nth-child(6) {
                grid-area: lum_internal;
            }

            &:nth-child(7) {
                grid-area: lum_external;
            }

            &:nth-child(8) {
                grid-area: birds;

                .counter {
                    background-image: linear-gradient($color-tertiary-light, $color-tertiary-dark);
                }
            }

            &:nth-child(9) {
                grid-area: entrance;

                .counter {
                    background-image: linear-gradient($color-green-light, $color-green-dark);
                }
            }

            &:nth-child(10) {
                grid-area: out;

                .counter {
                    background-image: linear-gradient($color-button-red, $color-red-1);
                }
            }

        }

        .model-box,
        .plotter-box {
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
