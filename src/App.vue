<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>VW Buyback Calculator</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col md="5">
            <v-select
              v-model="region"
              autofocus
              label="State"
              :items="regions"
              item-value="region"
              item-text="state"
            />

            <v-select
              v-model="car"
              label="Model"
              :items="cars"
              return-object
              item-text="model"
            />

            <v-select
              v-model="year"
              :disabled="car === null"
              label="Year"
              :items="(car || {}).years"
              return-object
              item-text="year"
            />

            <v-select
              v-model="trim"
              :disabled="year === null"
              label="Trim"
              :items="(year || {}).trims"
              return-object
              item-text="name"
            />

            <v-select
              v-model="options"
              :disabled="year === null"
              multiple
              label="Options"
              :items="(year || {}).options"
              return-object
              item-text="name"
            />

            <v-text-field
              v-model="milage"
              label="Current Mileage"
              type="number"
            />

            <v-text-field
              v-model="returnDate"
              label="Vehical return date"
              type="date"
            />
            
            <v-simple-table>
              <thead>
                <tr>
                  <th />
                  <th>Buyback</th>
                  <th>Modification</th>
                </tr>
              </thead>
              <tbody>
                <table-row
                  title="Car"
                  :obj="carValue"
                />
                <table-row
                  title="Options"
                  :obj="optionsValue"
                />
                <table-row
                  title="Milage"
                  :obj="milageValue"
                />
                <table-row
                  title="Adjustment"
                  :obj="adjustmentValue"
                />
                <table-row
                  title="Total"
                  :obj="total"
                />
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              <strong>Buyback:</strong> Sell your car back to VW.
              The total amount includes both the September 2015 Clean Trade Vehicle Value, plus a cash payment.
            </p>

            <p>
              <strong>Modification:</strong> Keep your car, get a free modification to reduce emissions plus a cash payment.
            </p>

            <p>The Class Action Settlement Program will accept claims until September 1, 2018. </p>

            <p>
              For those cars that changed hands after September 18, 2015 and during the claims period,
              the settlement equitably divides the Owner Restitution payment approximately 50/50 between the owner as of
              September 18,
              2015 who later sold the car and the current owner.
            </p>

            <p>Note that if you sell your car after June 28, 2016, you will receive nothing.</p>

            <v-alert
              dense
              text
              type="warning"
            >
              <strong>Disclaimer:</strong> I am in no way affiliated with VW.
              This is just a fun project to simplify the pdf documents released around June 28 2016.
              For more information about what's going on checkout the discussion at
              <a href="https://www.reddit.com/r/tdi/comments/4q9sn2/everything_you_need_to_know_about_buybacks_and/">r/tdi</a>.
            </v-alert>

            <p>Data should be current as of June 30 2016.</p>

            <p>If you just want the json data it's in <code>window.data</code>.</p>

            <p>Find an issue? You can submit it <a href="https://github.com/agrahamg/VWBuybackCalculator/issues">here</a>.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {ref, computed} from '@vue/composition-api'
import TableRow from '@/components/TableRow'
import {formatISO, parseISO, differenceInCalendarMonths} from 'date-fns'

import regions from '@/data/regions'
import golf from "@/data/cars/golf";
import a3 from "@/data/cars/a3";
import beetle from "@/data/cars/beetle";
import passat from "@/data/cars/passat";
import jetta from "@/data/cars/jetta";


export default {
  name: 'App',
  components:{TableRow},

  setup(){
    const cars = [a3, beetle, golf, jetta, passat]
    window.data = cars

    const region = ref(null)
    const car = ref(null)
    const year = ref(null)
    const trim = ref(null)
    const options = ref([])
    const milage = ref(0)
    const returnDate = ref(formatISO(new Date(), { representation: 'date' }))

    const blankValue = {buyback: 0, modification: 0}

    const carValue = computed(() =>{
      if (!trim.value || !region.value){
        return blankValue
      }

      return trim.value.data.find(d => 
        d.locations.includes(region.value)
      ).value
    })


    function reduceValues(...toReduce){
      return toReduce
      .map(o => o.value)
      .reduce((acc,val) => {
        acc.buyback += val.buyback
        acc.modification += val.modification
        return acc}, {...blankValue})
    }

    const optionsValue = computed(() =>
      reduceValues(...options.value)
    )

    const totalMonths = computed(() => 
      differenceInCalendarMonths(parseISO(returnDate.value),parseISO('2015-10-01'))
    )

    const milageValue = computed(() => {
      if (car.value && year.value && !isNaN(totalMonths.value)){
        const adjustedMileage = milage.value - totalMonths.value * 1042

        let obj = car.value.mileage.find(item => {
          return adjustedMileage >= item.from && adjustedMileage <= item.to
        })
        if (obj) {
          return obj[year.value.year]
        }
      }
      return blankValue
    })


    const adjustmentValue = computed(() => {
      const preTotal = reduceValues(optionsValue, carValue, milageValue)

      if (preTotal.modification < 5100){
        const diff = 5100 - preTotal.modification
        return {buyback: diff, modification: diff}
      }
      return blankValue
    })

    const total = computed(() => 
      reduceValues(optionsValue, carValue, milageValue, adjustmentValue)
    )

    return {
      regions,
      region, 
      cars, 
      car,
      trim,
      year,
      options,
      milage,
      returnDate,

      carValue,
      optionsValue,
      milageValue,
      adjustmentValue,
      total
    }
  }

}
</script>

