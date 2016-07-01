import Ember from "ember";
import regions from "../data/regions";
import golf from "../data/cars/golf";
import a3 from "../data/cars/a3";
import beetle from "../data/cars/beetle";
import passat from "../data/cars/passat";
import jetta from "../data/cars/jetta";


var list = [golf, a3, beetle, passat, jetta]

window.data = list


function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}


export default Ember.Controller.extend({
  list,

  regions,
  region: null,

  car: null,
  year: null,
  trim: null,
  selectedOptions: [],

  months: monthDiff(new Date("2015-9"), new Date()) + 1,

  options: function () {
    let year = this.get('year'),
      region = this.get('region.region')

    if (year && region) {
      return year.options.filter(item => {
        return item.locations === undefined ||
          item.locations.contains(region)
      })
    }

    return null

  }.property('year', 'region'),

  optionsValue: function () {
    let value = {
      buyback: 0,
      modification: 0
    }

    this.get('selectedOptions')
      .forEach(option => {
        let item = option.value
        value.buyback += item.buyback
        value.modification += item.modification
      })

    return value
  }.property('selectedOptions.@each'),

  trimValue: function () {
    let trim = this.get('trim'),
      region = this.get('region.region')

    if (region && trim) {
      return trim
        .data
        .find(item => item.locations.contains(region))
        .value
    }

    return {
      buyback: 0,
      modification: 0
    }
  }.property('trim', 'region'),

  total: function () {
    let trimValue = this.get('trimValue'),
      mileageAdjustment = this.get('mileageAdjustment'),
      optionsValue = this.get('optionsValue')

    return {
      buyback: trimValue.buyback + optionsValue.buyback + mileageAdjustment.buyback,
      modification: trimValue.modification + optionsValue.modification + mileageAdjustment.modification
    }

  }.property("trimValue", "optionsValue", "mileageAdjustment"),

  adjustment: function () {
    let obj = this.get('total')

    if (obj.modification < 5100) {
      return 5100 - obj.modification
    }
    return 0
  }.property("total"),

  adjustedTotal: function () {
    let obj = this.get('total'),
      adj = this.get('adjustment')

    if (adj) {
      obj.buyback += adj
      obj.modification += adj
    }
    return obj
  }.property('total', 'adjustment'),

  mileageAdjustment: function () {
    let car = this.get('car'),
      year = this.get('year'),
      mileage = this.get('mileage'),
      months = parseInt(this.get('months'))

    if (year && car && months && mileage) {
      let adjustedMileage = mileage - months * 1042

      let obj = car.mileage.find(item => {
        return adjustedMileage > item.from && adjustedMileage < item.to
      })
      if (obj) {
        return obj[year.year]
      }
    }
    return {buyback: 0, modification: 0}

  }.property('year', 'car', 'months', "mileage"),

  actions: {
    setRegion(region){
      this.setProperties({
        region: region,
        selectedOptions: []
      })
    },

    setCar(car){
      this.setProperties({
        car: car,
        year: undefined,
        trim: undefined,
        selectedOptions: []
      })
    },

    setYear(year){
      this.setProperties({
        year: year,
        trim: undefined,
        selectedOptions: []
      })
    },

    setTrim(trim){
      this.setProperties({
        trim: trim,
        selectedOptions: []
      })
    }

  }
});
