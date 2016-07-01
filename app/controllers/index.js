import Ember from "ember";


var regions = [
  {state: "Alabama", region: "SE"},
  {state: "Alaska", region: "Pacific NW"},
  {state: "Arizona", region: "Desert SW"},
  {state: "Arkansas", region: "SW"},
  {state: "California", region: "California"},
  {state: "Colorado", region: "Mountain"},
  {state: "Connecticut", region: "Eastern"},
  {state: "Delaware", region: "Eastern"},
  {state: "District of Columbia", region: "Eastern"},
  {state: "Florida", region: "SE"},
  {state: "Georgia", region: "SE"},
  {state: "Hawaii", region: "California"},
  {state: "Idaho", region: "Pacific NW"},
  {state: "Illinois", region: "Central"},
  {state: "Indiana", region: "Central"},
  {state: "Iowa", region: "Midwest"},
  {state: "Kansas", region: "Midwest"},
  {state: "Kentucky", region: "Central"},
  {state: "Louisiana", region: "SW"},
  {state: "Maine", region: "New England"},
  {state: "Maryland", region: "Eastern"},
  {state: "Massachusetts", region: "New England"},
  {state: "Michigan", region: "Central"},
  {state: "Minnesota", region: "Midwest"},
  {state: "Mississippi", region: "SE"},
  {state: "Missouri", region: "Central"},
  {state: "Montana", region: "Mountain"},
  {state: "Nebraska", region: "Midwest"},
  {state: "Nevada", region: "Desert SW"},
  {state: "New Hampshire", region: "New England"},
  {state: "New Jersey", region: "Eastern"},
  {state: "New Mexico", region: "Mountain"},
  {state: "New York", region: "Eastern"},
  {state: "North Carolina", region: "SE"},
  {state: "North Dakota", region: "Midwest"},
  {state: "Ohio", region: "Central"},
  {state: "Oklahoma", region: "SW"},
  {state: "Oregon", region: "Pacific NW"},
  {state: "Pennsylvania", region: "Eastern"},
  {state: "Rhode Island", region: "New England"},
  {state: "South Carolina", region: "SE"},
  {state: "South Dakota", region: "Midwest"},
  {state: "Tennessee", region: "SE"},
  {state: "Texas", region: "SW"},
  {state: "Utah", region: "Pacific NW"},
  {state: "Vermont", region: "New England"},
  {state: "Virginia", region: "Eastern"},
  {state: "Washington", region: "Pacific NW"},
  {state: "West Virginia", region: "Eastern"},
  {state: "Wisconsin", region: "Central"},
  {state: "Wyoming", region: "Mountain"},
  {state: "Puerto Rico", region: "Eastern"}
]


var list = [{
  "model": "A3",
  "mileage": [{
    "2010": {"buyback": 8040, "modification": 1340},
    "2011": {"buyback": 7080, "modification": 1180},
    "2012": {"buyback": 5850, "modification": 975},
    "2013": {"buyback": 4470, "modification": 745},
    "2014": {"buyback": 3030, "modification": 505},
    "2015": {"buyback": 1410, "modification": 235},
    "from": -1000000,
    "to": 5000
  }, {
    "2010": {"buyback": 7290, "modification": 1215},
    "2011": {"buyback": 6330, "modification": 1055},
    "2012": {"buyback": 5130, "modification": 855},
    "2013": {"buyback": 3780, "modification": 630},
    "2014": {"buyback": 2370, "modification": 395},
    "2015": {"buyback": 810, "modification": 135},
    "from": 5001,
    "to": 10000
  }, {
    "2010": {"buyback": 6570, "modification": 1095},
    "2011": {"buyback": 5610, "modification": 935},
    "2012": {"buyback": 4440, "modification": 740},
    "2013": {"buyback": 3120, "modification": 520},
    "2014": {"buyback": 1770, "modification": 295},
    "2015": {"buyback": 0, "modification": 0},
    "from": 10001,
    "to": 15000
  }, {
    "2010": {"buyback": 5880, "modification": 980},
    "2011": {"buyback": 4920, "modification": 820},
    "2012": {"buyback": 3780, "modification": 630},
    "2013": {"buyback": 2490, "modification": 415},
    "2014": {"buyback": 1170, "modification": 195},
    "2015": {"buyback": -270, "modification": -45},
    "from": 15001,
    "to": 20000
  }, {
    "2010": {"buyback": 5220, "modification": 870},
    "2011": {"buyback": 4290, "modification": 715},
    "2012": {"buyback": 3150, "modification": 525},
    "2013": {"buyback": 1890, "modification": 315},
    "2014": {"buyback": 600, "modification": 100},
    "2015": {"buyback": -810, "modification": -135},
    "from": 20001,
    "to": 25000
  }, {
    "2010": {"buyback": 4620, "modification": 770},
    "2011": {"buyback": 3660, "modification": 610},
    "2012": {"buyback": 2550, "modification": 425},
    "2013": {"buyback": 1320, "modification": 220},
    "2014": {"buyback": 0, "modification": 0},
    "2015": {"buyback": -1320, "modification": -220},
    "from": 25001,
    "to": 30000
  }, {
    "2010": {"buyback": 4020, "modification": 670},
    "2011": {"buyback": 3090, "modification": 515},
    "2012": {"buyback": 1980, "modification": 330},
    "2013": {"buyback": 780, "modification": 130},
    "2014": {"buyback": -450, "modification": -75},
    "2015": {"buyback": -1860, "modification": -310},
    "from": 30001,
    "to": 35000
  }, {
    "2010": {"buyback": 3450, "modification": 575},
    "2011": {"buyback": 2520, "modification": 420},
    "2012": {"buyback": 1440, "modification": 240},
    "2013": {"buyback": 270, "modification": 45},
    "2014": {"buyback": -960, "modification": -160},
    "2015": {"buyback": -2340, "modification": -390},
    "from": 35001,
    "to": 40000
  }, {
    "2010": {"buyback": 2940, "modification": 490},
    "2011": {"buyback": 1980, "modification": 330},
    "2012": {"buyback": 930, "modification": 155},
    "2013": {"buyback": 0, "modification": 0},
    "2014": {"buyback": -1440, "modification": -240},
    "2015": {"buyback": -2850, "modification": -475},
    "from": 40001,
    "to": 45000
  }, {
    "2010": {"buyback": 2430, "modification": 405},
    "2011": {"buyback": 1500, "modification": 250},
    "2012": {"buyback": 450, "modification": 75},
    "2013": {"buyback": -690, "modification": -115},
    "2014": {"buyback": -1950, "modification": -325},
    "2015": {"buyback": -3330, "modification": -555},
    "from": 45001,
    "to": 50000
  }, {
    "2010": {"buyback": 1950, "modification": 325},
    "2011": {"buyback": 1020, "modification": 170},
    "2012": {"buyback": 0, "modification": 0},
    "2013": {"buyback": -1170, "modification": -195},
    "2014": {"buyback": -2430, "modification": -405},
    "2015": {"buyback": -3840, "modification": -640},
    "from": 50001,
    "to": 55000
  }, {
    "2010": {"buyback": 1500, "modification": 250},
    "2011": {"buyback": 570, "modification": 95},
    "2012": {"buyback": -480, "modification": -80},
    "2013": {"buyback": -1650, "modification": -275},
    "2014": {"buyback": -2880, "modification": -480},
    "2015": {"buyback": -4290, "modification": -715},
    "from": 55001,
    "to": 60000
  }, {
    "2010": {"buyback": 1080, "modification": 180},
    "2011": {"buyback": 0, "modification": 0},
    "2012": {"buyback": -900, "modification": -150},
    "2013": {"buyback": -2100, "modification": -350},
    "2014": {"buyback": -3360, "modification": -560},
    "2015": {"buyback": -4770, "modification": -795},
    "from": 60001,
    "to": 65000
  }, {
    "2010": {"buyback": 660, "modification": 110},
    "2011": {"buyback": -270, "modification": -45},
    "2012": {"buyback": -1350, "modification": -225},
    "2013": {"buyback": -2520, "modification": -420},
    "2014": {"buyback": -3810, "modification": -635},
    "2015": {"buyback": -5220, "modification": -870},
    "from": 65001,
    "to": 70000
  }, {
    "2010": {"buyback": 270, "modification": 45},
    "2011": {"buyback": -660, "modification": -110},
    "2012": {"buyback": -1740, "modification": -290},
    "2013": {"buyback": -2970, "modification": -495},
    "2014": {"buyback": -4260, "modification": -710},
    "2015": {"buyback": -5700, "modification": -950},
    "from": 70001,
    "to": 75000
  }, {
    "2010": {"buyback": 0, "modification": 0},
    "2011": {"buyback": -1050, "modification": -175},
    "2012": {"buyback": -2160, "modification": -360},
    "2013": {"buyback": -3390, "modification": -565},
    "2014": {"buyback": -4710, "modification": -785},
    "2015": {"buyback": -6150, "modification": -1025},
    "from": 75001,
    "to": 80000
  }, {
    "2010": {"buyback": -450, "modification": -75},
    "2011": {"buyback": -1440, "modification": -240},
    "2012": {"buyback": -2550, "modification": -425},
    "2013": {"buyback": -3810, "modification": -635},
    "2014": {"buyback": -5130, "modification": -855},
    "2015": {"buyback": -6570, "modification": -1095},
    "from": 80001,
    "to": 85000
  }, {
    "2010": {"buyback": -780, "modification": -130},
    "2011": {"buyback": -1800, "modification": -300},
    "2012": {"buyback": -2940, "modification": -490},
    "2013": {"buyback": -4230, "modification": -705},
    "2014": {"buyback": -5550, "modification": -925},
    "2015": {"buyback": -7020, "modification": -1170},
    "from": 85001,
    "to": 90000
  }, {
    "2010": {"buyback": -1110, "modification": -185},
    "2011": {"buyback": -2160, "modification": -360},
    "2012": {"buyback": -3330, "modification": -555},
    "2013": {"buyback": -4620, "modification": -770},
    "2014": {"buyback": -5970, "modification": -995},
    "2015": {"buyback": -7440, "modification": -1240},
    "from": 90001,
    "to": 95000
  }, {
    "2010": {"buyback": -1440, "modification": -240},
    "2011": {"buyback": -2520, "modification": -420},
    "2012": {"buyback": -3720, "modification": -620},
    "2013": {"buyback": -5010, "modification": -835},
    "2014": {"buyback": -6390, "modification": -1065},
    "2015": {"buyback": -7860, "modification": -1310},
    "from": 95001,
    "to": 100000
  }, {
    "2010": {"buyback": -1770, "modification": -295},
    "2011": {"buyback": -2850, "modification": -475},
    "2012": {"buyback": -4080, "modification": -680},
    "2013": {"buyback": -5400, "modification": -900},
    "2014": {"buyback": -6780, "modification": -1130},
    "2015": {"buyback": -8280, "modification": -1380},
    "from": 100001,
    "to": 105000
  }, {
    "2010": {"buyback": -2070, "modification": -345},
    "2011": {"buyback": -3180, "modification": -530},
    "2012": {"buyback": -4440, "modification": -740},
    "2013": {"buyback": -5790, "modification": -965},
    "2014": {"buyback": -7200, "modification": -1200},
    "2015": {"buyback": -8670, "modification": -1445},
    "from": 105001,
    "to": 110000
  }, {
    "2010": {"buyback": -2370, "modification": -395},
    "2011": {"buyback": -3510, "modification": -585},
    "2012": {"buyback": -4800, "modification": -800},
    "2013": {"buyback": -6150, "modification": -1025},
    "2014": {"buyback": -7590, "modification": -1265},
    "2015": {"buyback": -9090, "modification": -1515},
    "from": 110001,
    "to": 115000
  }, {
    "2010": {"buyback": -2670, "modification": -445},
    "2011": {"buyback": -3840, "modification": -640},
    "2012": {"buyback": -5130, "modification": -855},
    "2013": {"buyback": -6510, "modification": -1085},
    "2014": {"buyback": -7950, "modification": -1325},
    "2015": {"buyback": -9480, "modification": -1580},
    "from": 115001,
    "to": 120000
  }, {
    "2010": {"buyback": -2970, "modification": -495},
    "2011": {"buyback": -4140, "modification": -690},
    "2012": {"buyback": -5460, "modification": -910},
    "2013": {"buyback": -6870, "modification": -1145},
    "2014": {"buyback": -8340, "modification": -1390},
    "2015": {"buyback": -9870, "modification": -1645},
    "from": 120001,
    "to": 125000
  }, {
    "2010": {"buyback": -3240, "modification": -540},
    "2011": {"buyback": -4470, "modification": -745},
    "2012": {"buyback": -5790, "modification": -965},
    "2013": {"buyback": -7230, "modification": -1205},
    "2014": {"buyback": -8700, "modification": -1450},
    "2015": {"buyback": -10260, "modification": -1710},
    "from": 125001,
    "to": 130000
  }, {
    "2010": {"buyback": -3540, "modification": -590},
    "2011": {"buyback": -4740, "modification": -790},
    "2012": {"buyback": -6120, "modification": -1020},
    "2013": {"buyback": -7560, "modification": -1260},
    "2014": {"buyback": -9060, "modification": -1510},
    "2015": {"buyback": -10620, "modification": -1770},
    "from": 130001,
    "to": 135000
  }, {
    "2010": {"buyback": -3780, "modification": -630},
    "2011": {"buyback": -5040, "modification": -840},
    "2012": {"buyback": -6420, "modification": -1070},
    "2013": {"buyback": -7920, "modification": -1320},
    "2014": {"buyback": -9420, "modification": -1570},
    "2015": {"buyback": -11010, "modification": -1835},
    "from": 135001,
    "to": 140000
  }, {
    "2010": {"buyback": -4050, "modification": -675},
    "2011": {"buyback": -5340, "modification": -890},
    "2012": {"buyback": -6750, "modification": -1125},
    "2013": {"buyback": -8250, "modification": -1375},
    "2014": {"buyback": -9780, "modification": -1630},
    "2015": {"buyback": -11370, "modification": -1895},
    "from": 140001,
    "to": 145000
  }, {
    "2010": {"buyback": -4320, "modification": -720},
    "2011": {"buyback": -5610, "modification": -935},
    "2012": {"buyback": -7050, "modification": -1175},
    "2013": {"buyback": -8550, "modification": -1425},
    "2014": {"buyback": -10110, "modification": -1685},
    "2015": {"buyback": -11730, "modification": -1955},
    "from": 145001,
    "to": 150000
  }, {
    "2010": {"buyback": -4560, "modification": -760},
    "2011": {"buyback": -5880, "modification": -980},
    "2012": {"buyback": -7320, "modification": -1220},
    "2013": {"buyback": -8880, "modification": -1480},
    "2014": {"buyback": -10470, "modification": -1745},
    "2015": {"buyback": -12090, "modification": -2015},
    "from": 150001,
    "to": 155000
  }, {
    "2010": {"buyback": -4800, "modification": -800},
    "2011": {"buyback": -6150, "modification": -1025},
    "2012": {"buyback": -7620, "modification": -1270},
    "2013": {"buyback": -9180, "modification": -1530},
    "2014": {"buyback": -10800, "modification": -1800},
    "2015": {"buyback": -12450, "modification": -2075},
    "from": 155001,
    "to": 160000
  }, {
    "2010": {"buyback": -5040, "modification": -840},
    "2011": {"buyback": -6390, "modification": -1065},
    "2012": {"buyback": -7890, "modification": -1315},
    "2013": {"buyback": -9480, "modification": -1580},
    "2014": {"buyback": -11100, "modification": -1850},
    "2015": {"buyback": -12780, "modification": -2130},
    "from": 160001,
    "to": 165000
  }, {
    "2010": {"buyback": -5280, "modification": -880},
    "2011": {"buyback": -6660, "modification": -1110},
    "2012": {"buyback": -8160, "modification": -1360},
    "2013": {"buyback": -9780, "modification": -1630},
    "2014": {"buyback": -11430, "modification": -1905},
    "2015": {"buyback": -13140, "modification": -2190},
    "from": 165001,
    "to": 170000
  }, {
    "2010": {"buyback": -5490, "modification": -915},
    "2011": {"buyback": -6900, "modification": -1150},
    "2012": {"buyback": -8430, "modification": -1405},
    "2013": {"buyback": -10080, "modification": -1680},
    "2014": {"buyback": -11760, "modification": -1960},
    "2015": {"buyback": -13470, "modification": -2245},
    "from": 170001,
    "to": 175000
  }, {
    "2010": {"buyback": -5700, "modification": -950},
    "2011": {"buyback": -7140, "modification": -1190},
    "2012": {"buyback": -8700, "modification": -1450},
    "2013": {"buyback": -10350, "modification": -1725},
    "2014": {"buyback": -12060, "modification": -2010},
    "2015": {"buyback": -13800, "modification": -2300},
    "from": 175001,
    "to": 180000
  }, {
    "2010": {"buyback": -5910, "modification": -985},
    "2011": {"buyback": -7380, "modification": -1230},
    "2012": {"buyback": -8970, "modification": -1495},
    "2013": {"buyback": -10650, "modification": -1775},
    "2014": {"buyback": -12360, "modification": -2060},
    "2015": {"buyback": -14100, "modification": -2350},
    "from": 180001,
    "to": 185000
  }, {
    "2010": {"buyback": -6120, "modification": -1020},
    "2011": {"buyback": -7590, "modification": -1265},
    "2012": {"buyback": -9210, "modification": -1535},
    "2013": {"buyback": -10920, "modification": -1820},
    "2014": {"buyback": -12660, "modification": -2110},
    "2015": {"buyback": -14430, "modification": -2405},
    "from": 185001,
    "to": 190000
  }, {
    "2010": {"buyback": -6330, "modification": -1055},
    "2011": {"buyback": -7830, "modification": -1305},
    "2012": {"buyback": -9450, "modification": -1575},
    "2013": {"buyback": -11190, "modification": -1865},
    "2014": {"buyback": -12960, "modification": -2160},
    "2015": {"buyback": -14760, "modification": -2460},
    "from": 190001,
    "to": 195000
  }, {
    "2010": {"buyback": -6540, "modification": -1090},
    "2011": {"buyback": -8040, "modification": -1340},
    "2012": {"buyback": -9690, "modification": -1615},
    "2013": {"buyback": -11460, "modification": -1910},
    "2014": {"buyback": -13230, "modification": -2205},
    "2015": {"buyback": -15060, "modification": -2510},
    "from": 195001,
    "to": 200000
  }, {
    "2010": {"buyback": -6720, "modification": -1120},
    "2011": {"buyback": -8250, "modification": -1375},
    "2012": {"buyback": -9930, "modification": -1655},
    "2013": {"buyback": -11700, "modification": -1950},
    "2014": {"buyback": -13530, "modification": -2255},
    "2015": {"buyback": -15360, "modification": -2560},
    "from": 200001,
    "to": 205000
  }, {
    "2010": {"buyback": -6900, "modification": -1150},
    "2011": {"buyback": -8460, "modification": -1410},
    "2012": {"buyback": -10170, "modification": -1695},
    "2013": {"buyback": -11970, "modification": -1995},
    "2014": {"buyback": -13800, "modification": -2300},
    "2015": {"buyback": -15660, "modification": -2610},
    "from": 205001,
    "to": 210000
  }, {
    "2010": {"buyback": -7080, "modification": -1180},
    "2011": {"buyback": -8670, "modification": -1445},
    "2012": {"buyback": -10380, "modification": -1730},
    "2013": {"buyback": -12210, "modification": -2035},
    "2014": {"buyback": -14070, "modification": -2345},
    "2015": {"buyback": -15960, "modification": -2660},
    "from": 210001,
    "to": 215000
  }, {
    "2010": {"buyback": -7260, "modification": -1210},
    "2011": {"buyback": -8880, "modification": -1480},
    "2012": {"buyback": -10620, "modification": -1770},
    "2013": {"buyback": -12450, "modification": -2075},
    "2014": {"buyback": -14340, "modification": -2390},
    "2015": {"buyback": -16260, "modification": -2710},
    "from": 215001,
    "to": 220000
  }, {
    "2010": {"buyback": -7440, "modification": -1240},
    "2011": {"buyback": -9060, "modification": -1510},
    "2012": {"buyback": -10830, "modification": -1805},
    "2013": {"buyback": -12690, "modification": -2115},
    "2014": {"buyback": -14610, "modification": -2435},
    "2015": {"buyback": -16530, "modification": -2755},
    "from": 220001,
    "to": 225000
  }, {
    "2010": {"buyback": -7620, "modification": -1270},
    "2011": {"buyback": -9240, "modification": -1540},
    "2012": {"buyback": -11040, "modification": -1840},
    "2013": {"buyback": -12930, "modification": -2155},
    "2014": {"buyback": -14880, "modification": -2480},
    "2015": {"buyback": -16830, "modification": -2805},
    "from": 225001,
    "to": 230000
  }, {
    "2010": {"buyback": -7770, "modification": -1295},
    "2011": {"buyback": -9450, "modification": -1575},
    "2012": {"buyback": -11250, "modification": -1875},
    "2013": {"buyback": -13170, "modification": -2195},
    "2014": {"buyback": -15120, "modification": -2520},
    "2015": {"buyback": -17100, "modification": -2850},
    "from": 230001,
    "to": 235000
  }, {
    "2010": {"buyback": -7950, "modification": -1325},
    "2011": {"buyback": -9630, "modification": -1605},
    "2012": {"buyback": -11430, "modification": -1905},
    "2013": {"buyback": -13380, "modification": -2230},
    "2014": {"buyback": -15360, "modification": -2560},
    "2015": {"buyback": -17370, "modification": -2895},
    "from": 235001,
    "to": 240000
  }, {
    "2010": {"buyback": -8100, "modification": -1350},
    "2011": {"buyback": -9780, "modification": -1630},
    "2012": {"buyback": -11640, "modification": -1940},
    "2013": {"buyback": -13590, "modification": -2265},
    "2014": {"buyback": -15600, "modification": -2600},
    "2015": {"buyback": -17640, "modification": -2940},
    "from": 240001,
    "to": 245000
  }, {
    "2010": {"buyback": -8250, "modification": -1375},
    "2011": {"buyback": -9960, "modification": -1660},
    "2012": {"buyback": -11820, "modification": -1970},
    "2013": {"buyback": -13830, "modification": -2305},
    "2014": {"buyback": -15870, "modification": -2645},
    "2015": {"buyback": -17910, "modification": -2985},
    "from": 245001,
    "to": 1245000
  }],
  "years": [{
    "year": 2010,
    "trims": [{
      "name": "Hatchback 4D TDI Premium",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 19277, "modification": 5702}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 19307, "modification": 5707}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 19367, "modification": 5717}}]
    }, {
      "name": "Hatchback 4D TDI Premium Plus",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 20627, "modification": 5927}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 20657, "modification": 5932}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 20717, "modification": 5942}}]
    }],
    "options": [{"name": "No Power Seat ", "value": {"buyback": -330, "modification": -55}}, {
      "name": "Bose Premium Stereo ",
      "value": {"buyback": 360, "modification": 60}
    }, {
      "name": "Power Sunroof ",
      "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
      "value": {"buyback": 600, "modification": 100}
    }, {"name": "Navigation System ", "value": {"buyback": 630, "modification": 105}}, {
      "name": "Power Sunroof ",
      "locations": ["California", "Desert SW", "SE", "SW"],
      "value": {"buyback": 660, "modification": 110}
    }, {"name": "Sport Package ", "value": {"buyback": 960, "modification": 160}}]
  }, {
    "year": 2011,
    "trims": [{
      "name": "Hatchback 4D TDI Premium",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 21617, "modification": 6092}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 21647, "modification": 6097}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 21737, "modification": 6112}}]
    }, {
      "name": "Hatchback 4D TDI Premium Plus",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 23297, "modification": 6372}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 23327, "modification": 6377}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 23387, "modification": 6387}}]
    }],
    "options": [{"name": "No Power Seat ", "value": {"buyback": -330, "modification": -55}}, {
      "name": "Bose Premium Stereo ",
      "value": {"buyback": 390, "modification": 65}
    }, {
      "name": "Power Sunroof ",
      "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
      "value": {"buyback": 600, "modification": 100}
    }, {
      "name": "Power Sunroof ",
      "locations": ["California", "Desert SW", "SE", "SW"],
      "value": {"buyback": 660, "modification": 110}
    }, {"name": "Navigation System ", "value": {"buyback": 720, "modification": 120}}, {
      "name": "Sport Package ",
      "value": {"buyback": 960, "modification": 160}
    }, {"name": "Titanium Sport Pkg. ", "value": {"buyback": 1770, "modification": 295}}]
  }, {
    "year": 2012,
    "trims": [{
      "name": "Hatchback 4D TDI Premium",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 24047, "modification": 6497}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 24077, "modification": 6502}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 24137, "modification": 6512}}]
    }, {
      "name": "Hatchback 4D TDI Premium Plus",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 26357, "modification": 6882}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 26417, "modification": 6892}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 26477, "modification": 6902}}]
    }],
    "options": [{"name": "No Power Seat ", "value": {"buyback": -330, "modification": -55}}, {
      "name": "Bose Premium Stereo ",
      "value": {"buyback": 420, "modification": 70}
    }, {
      "name": "Power Sunroof ",
      "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
      "value": {"buyback": 630, "modification": 105}
    }, {
      "name": "Power Sunroof ",
      "locations": ["California", "Desert SW", "SE", "SW"],
      "value": {"buyback": 690, "modification": 115}
    }, {"name": "Navigation System ", "value": {"buyback": 750, "modification": 125}}, {
      "name": "Sport Package ",
      "value": {"buyback": 960, "modification": 160}
    }, {"name": "Titanium Sport Pkg. ", "value": {"buyback": 1800, "modification": 300}}]
  }, {
    "year": 2013,
    "trims": [{
      "name": "Hatchback 4D TDI Premium",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 25877, "modification": 6802}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 25907, "modification": 6807}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 25967, "modification": 6817}}]
    }, {
      "name": "Hatchback 4D TDI Premium Plus",
      "data": [{
        "locations": ["California"],
        "value": {"buyback": 29357, "modification": 7382}
      }, {
        "locations": ["Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 29387, "modification": 7387}
      }, {"locations": ["Mountain", "Pacific NW"], "value": {"buyback": 29447, "modification": 7397}}]
    }],
    "options": [{"name": "No Power Seat ", "value": {"buyback": -360, "modification": -60}}, {
      "name": "Bose Premium Stereo ",
      "value": {"buyback": 480, "modification": 80}
    }, {
      "name": "Power Sunroof ",
      "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
      "value": {"buyback": 720, "modification": 120}
    }, {
      "name": "Power Sunroof ",
      "locations": ["California", "Desert SW", "SE", "SW"],
      "value": {"buyback": 780, "modification": 130}
    }, {"name": "Navigation System ", "value": {"buyback": 840, "modification": 140}}, {
      "name": "Sport Package ",
      "value": {"buyback": 960, "modification": 160}
    }, {"name": "Titanium Sport Pkg. ", "value": {"buyback": 1800, "modification": 300}}]
  }, {
    "year": 2015,
    "trims": [{
      "name": "Sedan 4D TDI Premium 2WD I4 Turbo",
      "data": [{
        "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
        "value": {"buyback": 34045, "modification": 8163}
      }, {
        "name": "Sedan 4D TDI Premium Plus 2WD I4 Turbo",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 37778, "modification": 8785}
        }]
      }, {
        "name": "Sedan 4D TDI Prestige 2WD I4 Turbo",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 40543, "modification": 9246}
        }]
      }]}],
      "options": [{
        "name": "Bang & Olufsen Stereo  (Premium Plus Only)",
        "value": {"buyback": 510, "modification": 85}
      }, {
        "name": "Sport Package  (Premium Plus, Prestige Only)",
        "value": {"buyback": 780, "modification": 130}
      }, {
        "name": "Navigation System  (Premium, Premium Plus Only)",
        "value": {"buyback": 870, "modification": 145}
      }, {
        "name": "Driver Assist Pkg.  (Premium, Premium Plus Only)",
        "value": {"buyback": 1080, "modification": 180}
      }, {"name": "Advanced Technology Pkg.  (Prestige Only)", "value": {"buyback": 1080, "modification": 180}}]
}]},
  {
    "model": "Beetle",
    "mileage": [{
      "2009": {"buyback": 7260, "modification": 1210},
      "2010": {"buyback": 6690, "modification": 1115},
      "2011": {"buyback": 5850, "modification": 975},
      "2012": {"buyback": 4800, "modification": 800},
      "2013": {"buyback": 3660, "modification": 610},
      "2014": {"buyback": 2460, "modification": 410},
      "2015": {"buyback": 1140, "modification": 190},
      "from": -1000000,
      "to": 5000
    }, {
      "2009": {"buyback": 6630, "modification": 1105},
      "2010": {"buyback": 6030, "modification": 1005},
      "2011": {"buyback": 5220, "modification": 870},
      "2012": {"buyback": 4200, "modification": 700},
      "2013": {"buyback": 3090, "modification": 515},
      "2014": {"buyback": 1950, "modification": 325},
      "2015": {"buyback": 660, "modification": 110},
      "from": 5001,
      "to": 10000
    }, {
      "2009": {"buyback": 6030, "modification": 1005},
      "2010": {"buyback": 5430, "modification": 905},
      "2011": {"buyback": 4620, "modification": 770},
      "2012": {"buyback": 3630, "modification": 605},
      "2013": {"buyback": 2550, "modification": 425},
      "2014": {"buyback": 1440, "modification": 240},
      "2015": {"buyback": 0, "modification": 0},
      "from": 10001,
      "to": 15000
    }, {
      "2009": {"buyback": 5460, "modification": 910},
      "2010": {"buyback": 4860, "modification": 810},
      "2011": {"buyback": 4050, "modification": 675},
      "2012": {"buyback": 3090, "modification": 515},
      "2013": {"buyback": 2040, "modification": 340},
      "2014": {"buyback": 960, "modification": 160},
      "2015": {"buyback": -240, "modification": -40},
      "from": 15001,
      "to": 20000
    }, {
      "2009": {"buyback": 4920, "modification": 820},
      "2010": {"buyback": 4320, "modification": 720},
      "2011": {"buyback": 3510, "modification": 585},
      "2012": {"buyback": 2550, "modification": 425},
      "2013": {"buyback": 1530, "modification": 255},
      "2014": {"buyback": 510, "modification": 85},
      "2015": {"buyback": -660, "modification": -110},
      "from": 20001,
      "to": 25000
    }, {
      "2009": {"buyback": 4410, "modification": 735},
      "2010": {"buyback": 3780, "modification": 630},
      "2011": {"buyback": 3000, "modification": 500},
      "2012": {"buyback": 2070, "modification": 345},
      "2013": {"buyback": 1080, "modification": 180},
      "2014": {"buyback": 0, "modification": 0},
      "2015": {"buyback": -1080, "modification": -180},
      "from": 25001,
      "to": 30000
    }, {
      "2009": {"buyback": 3930, "modification": 655},
      "2010": {"buyback": 3300, "modification": 550},
      "2011": {"buyback": 2520, "modification": 420},
      "2012": {"buyback": 1620, "modification": 270},
      "2013": {"buyback": 630, "modification": 105},
      "2014": {"buyback": -360, "modification": -60},
      "2015": {"buyback": -1500, "modification": -250},
      "from": 30001,
      "to": 35000
    }, {
      "2009": {"buyback": 3450, "modification": 575},
      "2010": {"buyback": 2850, "modification": 475},
      "2011": {"buyback": 2070, "modification": 345},
      "2012": {"buyback": 1170, "modification": 195},
      "2013": {"buyback": 210, "modification": 35},
      "2014": {"buyback": -750, "modification": -125},
      "2015": {"buyback": -1890, "modification": -315},
      "from": 35001,
      "to": 40000
    }, {
      "2009": {"buyback": 3030, "modification": 505},
      "2010": {"buyback": 2400, "modification": 400},
      "2011": {"buyback": 1620, "modification": 270},
      "2012": {"buyback": 750, "modification": 125},
      "2013": {"buyback": 0, "modification": 0},
      "2014": {"buyback": -1170, "modification": -195},
      "2015": {"buyback": -2310, "modification": -385},
      "from": 40001,
      "to": 45000
    }, {
      "2009": {"buyback": 2610, "modification": 435},
      "2010": {"buyback": 1980, "modification": 330},
      "2011": {"buyback": 1200, "modification": 200},
      "2012": {"buyback": 360, "modification": 60},
      "2013": {"buyback": -570, "modification": -95},
      "2014": {"buyback": -1560, "modification": -260},
      "2015": {"buyback": -2700, "modification": -450},
      "from": 45001,
      "to": 50000
    }, {
      "2009": {"buyback": 2220, "modification": 370},
      "2010": {"buyback": 1590, "modification": 265},
      "2011": {"buyback": 840, "modification": 140},
      "2012": {"buyback": 0, "modification": 0},
      "2013": {"buyback": -960, "modification": -160},
      "2014": {"buyback": -1950, "modification": -325},
      "2015": {"buyback": -3060, "modification": -510},
      "from": 50001,
      "to": 55000
    }, {
      "2009": {"buyback": 1860, "modification": 310},
      "2010": {"buyback": 1230, "modification": 205},
      "2011": {"buyback": 450, "modification": 75},
      "2012": {"buyback": -390, "modification": -65},
      "2013": {"buyback": -1320, "modification": -220},
      "2014": {"buyback": -2310, "modification": -385},
      "2015": {"buyback": -3450, "modification": -575},
      "from": 55001,
      "to": 60000
    }, {
      "2009": {"buyback": 1500, "modification": 250},
      "2010": {"buyback": 870, "modification": 145},
      "2011": {"buyback": 0, "modification": 0},
      "2012": {"buyback": -720, "modification": -120},
      "2013": {"buyback": -1680, "modification": -280},
      "2014": {"buyback": -2700, "modification": -450},
      "2015": {"buyback": -3810, "modification": -635},
      "from": 60001,
      "to": 65000
    }, {
      "2009": {"buyback": 1170, "modification": 195},
      "2010": {"buyback": 540, "modification": 90},
      "2011": {"buyback": -210, "modification": -35},
      "2012": {"buyback": -1080, "modification": -180},
      "2013": {"buyback": -2040, "modification": -340},
      "2014": {"buyback": -3060, "modification": -510},
      "2015": {"buyback": -4200, "modification": -700},
      "from": 65001,
      "to": 70000
    }, {
      "2009": {"buyback": 870, "modification": 145},
      "2010": {"buyback": 210, "modification": 35},
      "2011": {"buyback": -540, "modification": -90},
      "2012": {"buyback": -1410, "modification": -235},
      "2013": {"buyback": -2370, "modification": -395},
      "2014": {"buyback": -3420, "modification": -570},
      "2015": {"buyback": -4560, "modification": -760},
      "from": 70001,
      "to": 75000
    }, {
      "2009": {"buyback": 570, "modification": 95},
      "2010": {"buyback": 0, "modification": 0},
      "2011": {"buyback": -840, "modification": -140},
      "2012": {"buyback": -1740, "modification": -290},
      "2013": {"buyback": -2730, "modification": -455},
      "2014": {"buyback": -3750, "modification": -625},
      "2015": {"buyback": -4890, "modification": -815},
      "from": 75001,
      "to": 80000
    }, {
      "2009": {"buyback": 300, "modification": 50},
      "2010": {"buyback": -360, "modification": -60},
      "2011": {"buyback": -1140, "modification": -190},
      "2012": {"buyback": -2070, "modification": -345},
      "2013": {"buyback": -3060, "modification": -510},
      "2014": {"buyback": -4110, "modification": -685},
      "2015": {"buyback": -5250, "modification": -875},
      "from": 80001,
      "to": 85000
    }, {
      "2009": {"buyback": 0, "modification": 0},
      "2010": {"buyback": -630, "modification": -105},
      "2011": {"buyback": -1440, "modification": -240},
      "2012": {"buyback": -2370, "modification": -395},
      "2013": {"buyback": -3390, "modification": -565},
      "2014": {"buyback": -4440, "modification": -740},
      "2015": {"buyback": -5580, "modification": -930},
      "from": 85001,
      "to": 90000
    }, {
      "2009": {"buyback": -210, "modification": -35},
      "2010": {"buyback": -900, "modification": -150},
      "2011": {"buyback": -1740, "modification": -290},
      "2012": {"buyback": -2670, "modification": -445},
      "2013": {"buyback": -3690, "modification": -615},
      "2014": {"buyback": -4770, "modification": -795},
      "2015": {"buyback": -5940, "modification": -990},
      "from": 90001,
      "to": 95000
    }, {
      "2009": {"buyback": -450, "modification": -75},
      "2010": {"buyback": -1170, "modification": -195},
      "2011": {"buyback": -2010, "modification": -335},
      "2012": {"buyback": -2970, "modification": -495},
      "2013": {"buyback": -3990, "modification": -665},
      "2014": {"buyback": -5100, "modification": -850},
      "2015": {"buyback": -6270, "modification": -1045},
      "from": 95001,
      "to": 100000
    }, {
      "2009": {"buyback": -690, "modification": -115},
      "2010": {"buyback": -1410, "modification": -235},
      "2011": {"buyback": -2280, "modification": -380},
      "2012": {"buyback": -3240, "modification": -540},
      "2013": {"buyback": -4320, "modification": -720},
      "2014": {"buyback": -5400, "modification": -900},
      "2015": {"buyback": -6570, "modification": -1095},
      "from": 100001,
      "to": 105000
    }, {
      "2009": {"buyback": -900, "modification": -150},
      "2010": {"buyback": -1680, "modification": -280},
      "2011": {"buyback": -2550, "modification": -425},
      "2012": {"buyback": -3540, "modification": -590},
      "2013": {"buyback": -4590, "modification": -765},
      "2014": {"buyback": -5700, "modification": -950},
      "2015": {"buyback": -6900, "modification": -1150},
      "from": 105001,
      "to": 110000
    }, {
      "2009": {"buyback": -1140, "modification": -190},
      "2010": {"buyback": -1920, "modification": -320},
      "2011": {"buyback": -2790, "modification": -465},
      "2012": {"buyback": -3810, "modification": -635},
      "2013": {"buyback": -4890, "modification": -815},
      "2014": {"buyback": -6030, "modification": -1005},
      "2015": {"buyback": -7200, "modification": -1200},
      "from": 110001,
      "to": 115000
    }, {
      "2009": {"buyback": -1350, "modification": -225},
      "2010": {"buyback": -2130, "modification": -355},
      "2011": {"buyback": -3060, "modification": -510},
      "2012": {"buyback": -4080, "modification": -680},
      "2013": {"buyback": -5190, "modification": -865},
      "2014": {"buyback": -6300, "modification": -1050},
      "2015": {"buyback": -7530, "modification": -1255},
      "from": 115001,
      "to": 120000
    }, {
      "2009": {"buyback": -1560, "modification": -260},
      "2010": {"buyback": -2370, "modification": -395},
      "2011": {"buyback": -3300, "modification": -550},
      "2012": {"buyback": -4350, "modification": -725},
      "2013": {"buyback": -5460, "modification": -910},
      "2014": {"buyback": -6600, "modification": -1100},
      "2015": {"buyback": -7830, "modification": -1305},
      "from": 120001,
      "to": 125000
    }, {
      "2009": {"buyback": -1770, "modification": -295},
      "2010": {"buyback": -2580, "modification": -430},
      "2011": {"buyback": -3540, "modification": -590},
      "2012": {"buyback": -4590, "modification": -765},
      "2013": {"buyback": -5730, "modification": -955},
      "2014": {"buyback": -6900, "modification": -1150},
      "2015": {"buyback": -8130, "modification": -1355},
      "from": 125001,
      "to": 130000
    }, {
      "2009": {"buyback": -1950, "modification": -325},
      "2010": {"buyback": -2790, "modification": -465},
      "2011": {"buyback": -3780, "modification": -630},
      "2012": {"buyback": -4830, "modification": -805},
      "2013": {"buyback": -6000, "modification": -1000},
      "2014": {"buyback": -7170, "modification": -1195},
      "2015": {"buyback": -8400, "modification": -1400},
      "from": 130001,
      "to": 135000
    }, {
      "2009": {"buyback": -2160, "modification": -360},
      "2010": {"buyback": -3000, "modification": -500},
      "2011": {"buyback": -3990, "modification": -665},
      "2012": {"buyback": -5070, "modification": -845},
      "2013": {"buyback": -6240, "modification": -1040},
      "2014": {"buyback": -7440, "modification": -1240},
      "2015": {"buyback": -8700, "modification": -1450},
      "from": 135001,
      "to": 140000
    }, {
      "2009": {"buyback": -2340, "modification": -390},
      "2010": {"buyback": -3210, "modification": -535},
      "2011": {"buyback": -4200, "modification": -700},
      "2012": {"buyback": -5310, "modification": -885},
      "2013": {"buyback": -6510, "modification": -1085},
      "2014": {"buyback": -7710, "modification": -1285},
      "2015": {"buyback": -8970, "modification": -1495},
      "from": 140001,
      "to": 145000
    }, {
      "2009": {"buyback": -2520, "modification": -420},
      "2010": {"buyback": -3420, "modification": -570},
      "2011": {"buyback": -4440, "modification": -740},
      "2012": {"buyback": -5550, "modification": -925},
      "2013": {"buyback": -6750, "modification": -1125},
      "2014": {"buyback": -7980, "modification": -1330},
      "2015": {"buyback": -9270, "modification": -1545},
      "from": 145001,
      "to": 150000
    }, {
      "2009": {"buyback": -2670, "modification": -445},
      "2010": {"buyback": -3600, "modification": -600},
      "2011": {"buyback": -4620, "modification": -770},
      "2012": {"buyback": -5760, "modification": -960},
      "2013": {"buyback": -6990, "modification": -1165},
      "2014": {"buyback": -8220, "modification": -1370},
      "2015": {"buyback": -9540, "modification": -1590},
      "from": 150001,
      "to": 155000
    }, {
      "2009": {"buyback": -3180, "modification": -475},
      "2010": {"buyback": -3780, "modification": -630},
      "2011": {"buyback": -4830, "modification": -805},
      "2012": {"buyback": -6000, "modification": -1000},
      "2013": {"buyback": -7230, "modification": -1205},
      "2014": {"buyback": -8490, "modification": -1415},
      "2015": {"buyback": -9810, "modification": -1635},
      "from": 155001,
      "to": 160000
    }, {
      "2009": {"buyback": -3330, "modification": -505},
      "2010": {"buyback": -3960, "modification": -660},
      "2011": {"buyback": -5040, "modification": -840},
      "2012": {"buyback": -6210, "modification": -1035},
      "2013": {"buyback": -7440, "modification": -1240},
      "2014": {"buyback": -8730, "modification": -1455},
      "2015": {"buyback": -10050, "modification": -1675},
      "from": 160001,
      "to": 165000
    }, {
      "2009": {"buyback": -3480, "modification": -530},
      "2010": {"buyback": -4140, "modification": -690},
      "2011": {"buyback": -5220, "modification": -870},
      "2012": {"buyback": -6420, "modification": -1070},
      "2013": {"buyback": -7680, "modification": -1280},
      "2014": {"buyback": -8970, "modification": -1495},
      "2015": {"buyback": -10320, "modification": -1720},
      "from": 165001,
      "to": 170000
    }, {
      "2009": {"buyback": -3630, "modification": -555},
      "2010": {"buyback": -4320, "modification": -720},
      "2011": {"buyback": -5400, "modification": -900},
      "2012": {"buyback": -6600, "modification": -1100},
      "2013": {"buyback": -7890, "modification": -1315},
      "2014": {"buyback": -9210, "modification": -1535},
      "2015": {"buyback": -10560, "modification": -1760},
      "from": 170001,
      "to": 175000
    }, {
      "2009": {"buyback": -3780, "modification": -580},
      "2010": {"buyback": -4470, "modification": -745},
      "2011": {"buyback": -5580, "modification": -930},
      "2012": {"buyback": -6810, "modification": -1135},
      "2013": {"buyback": -8100, "modification": -1350},
      "2014": {"buyback": -9450, "modification": -1575},
      "2015": {"buyback": -10830, "modification": -1805},
      "from": 175001,
      "to": 180000
    }, {
      "2009": {"buyback": -3900, "modification": -605},
      "2010": {"buyback": -4650, "modification": -775},
      "2011": {"buyback": -5760, "modification": -960},
      "2012": {"buyback": -6990, "modification": -1165},
      "2013": {"buyback": -8310, "modification": -1385},
      "2014": {"buyback": -9690, "modification": -1615},
      "2015": {"buyback": -11070, "modification": -1845},
      "from": 180001,
      "to": 185000
    }, {
      "2009": {"buyback": -4050, "modification": -630},
      "2010": {"buyback": -4800, "modification": -800},
      "2011": {"buyback": -5940, "modification": -990},
      "2012": {"buyback": -7200, "modification": -1200},
      "2013": {"buyback": -8520, "modification": -1420},
      "2014": {"buyback": -9900, "modification": -1650},
      "2015": {"buyback": -11310, "modification": -1885},
      "from": 185001,
      "to": 190000
    }, {
      "2009": {"buyback": -4170, "modification": -650},
      "2010": {"buyback": -4950, "modification": -825},
      "2011": {"buyback": -6120, "modification": -1020},
      "2012": {"buyback": -7380, "modification": -1230},
      "2013": {"buyback": -8730, "modification": -1455},
      "2014": {"buyback": -10110, "modification": -1685},
      "2015": {"buyback": -11550, "modification": -1925},
      "from": 190001,
      "to": 195000
    }, {
      "2009": {"buyback": -4290, "modification": -675},
      "2010": {"buyback": -5100, "modification": -850},
      "2011": {"buyback": -6270, "modification": -1045},
      "2012": {"buyback": -7560, "modification": -1260},
      "2013": {"buyback": -8940, "modification": -1490},
      "2014": {"buyback": -10350, "modification": -1725},
      "2015": {"buyback": -11790, "modification": -1965},
      "from": 195001,
      "to": 200000
    }, {
      "2009": {"buyback": -4410, "modification": -695},
      "2010": {"buyback": -5250, "modification": -875},
      "2011": {"buyback": -6420, "modification": -1070},
      "2012": {"buyback": -7740, "modification": -1290},
      "2013": {"buyback": -9120, "modification": -1520},
      "2014": {"buyback": -10560, "modification": -1760},
      "2015": {"buyback": -12000, "modification": -2000},
      "from": 200001,
      "to": 205000
    }, {
      "2009": {"buyback": -4530, "modification": -715},
      "2010": {"buyback": -5370, "modification": -895},
      "2011": {"buyback": -6570, "modification": -1095},
      "2012": {"buyback": -7890, "modification": -1315},
      "2013": {"buyback": -9300, "modification": -1550},
      "2014": {"buyback": -10770, "modification": -1795},
      "2015": {"buyback": -12240, "modification": -2040},
      "from": 205001,
      "to": 210000
    }, {
      "2009": {"buyback": -4650, "modification": -735},
      "2010": {"buyback": -5520, "modification": -920},
      "2011": {"buyback": -6720, "modification": -1120},
      "2012": {"buyback": -8070, "modification": -1345},
      "2013": {"buyback": -9480, "modification": -1580},
      "2014": {"buyback": -10950, "modification": -1825},
      "2015": {"buyback": -12450, "modification": -2075},
      "from": 210001,
      "to": 215000
    }, {
      "2009": {"buyback": -4770, "modification": -755},
      "2010": {"buyback": -5640, "modification": -940},
      "2011": {"buyback": -6870, "modification": -1145},
      "2012": {"buyback": -8220, "modification": -1370},
      "2013": {"buyback": -9660, "modification": -1610},
      "2014": {"buyback": -11160, "modification": -1860},
      "2015": {"buyback": -12660, "modification": -2110},
      "from": 215001,
      "to": 220000
    }, {
      "2009": {"buyback": -4890, "modification": -775},
      "2010": {"buyback": -5760, "modification": -960},
      "2011": {"buyback": -7020, "modification": -1170},
      "2012": {"buyback": -8400, "modification": -1400},
      "2013": {"buyback": -9840, "modification": -1640},
      "2014": {"buyback": -11340, "modification": -1890},
      "2015": {"buyback": -12900, "modification": -2150},
      "from": 220001,
      "to": 225000
    }, {
      "2009": {"buyback": -2850, "modification": -795},
      "2010": {"buyback": -5910, "modification": -985},
      "2011": {"buyback": -7170, "modification": -1195},
      "2012": {"buyback": -8550, "modification": -1425},
      "2013": {"buyback": -10020, "modification": -1670},
      "2014": {"buyback": -11550, "modification": -1925},
      "2015": {"buyback": -13110, "modification": -2185},
      "from": 225001,
      "to": 230000
    }, {
      "2009": {"buyback": -3030, "modification": -815},
      "2010": {"buyback": -6030, "modification": -1005},
      "2011": {"buyback": -7290, "modification": -1215},
      "2012": {"buyback": -8700, "modification": -1450},
      "2013": {"buyback": -10170, "modification": -1695},
      "2014": {"buyback": -11730, "modification": -1955},
      "2015": {"buyback": -13290, "modification": -2215},
      "from": 230001,
      "to": 235000
    }, {
      "2009": {"buyback": -4980, "modification": -830},
      "2010": {"buyback": -6150, "modification": -1025},
      "2011": {"buyback": -7410, "modification": -1235},
      "2012": {"buyback": -8850, "modification": -1475},
      "2013": {"buyback": -10350, "modification": -1725},
      "2014": {"buyback": -11910, "modification": -1985},
      "2015": {"buyback": -13500, "modification": -2250},
      "from": 235001,
      "to": 240000
    }, {
      "2009": {"buyback": -5070, "modification": -845},
      "2010": {"buyback": -6240, "modification": -1040},
      "2011": {"buyback": -7560, "modification": -1260},
      "2012": {"buyback": -8970, "modification": -1495},
      "2013": {"buyback": -10500, "modification": -1750},
      "2014": {"buyback": -12090, "modification": -2015},
      "2015": {"buyback": -13710, "modification": -2285},
      "from": 240001,
      "to": 245000
    }, {
      "2009": {"buyback": -5190, "modification": -865},
      "2010": {"buyback": -6360, "modification": -1060},
      "2011": {"buyback": -7680, "modification": -1280},
      "2012": {"buyback": -9120, "modification": -1520},
      "2013": {"buyback": -10650, "modification": -1775},
      "2014": {"buyback": -12270, "modification": -2045},
      "2015": {"buyback": -13890, "modification": -2315},
      "from": 245001,
      "to": 1245001
    }],
    "years": [{
      "year": 2013,
      "trims": [{
        "name": "Convertible 2D TDI I4",
        "data": [{
          "locations": ["Central", "Midwest"],
          "value": {"buyback": 24917, "modification": 6642}
        }, {
          "locations": ["Desert SW", "Eastern", "Mountain", "SE", "SW"],
          "value": {"buyback": 24947, "modification": 6647}
        }, {
          "locations": ["California", "New England", "Pacific NW"],
          "value": {"buyback": 25007, "modification": 6657}
        }]
      }, {
        "name": "Coupe 2D TDI I4",
        "data": [{
          "locations": ["Central", "Midwest"],
          "value": {"buyback": 21497, "modification": 6072}
        }, {
          "locations": ["Desert SW", "Eastern", "Mountain", "SE", "SW"],
          "value": {"buyback": 21527, "modification": 6077}
        }, {
          "locations": ["California", "New England", "Pacific NW"],
          "value": {"buyback": 21587, "modification": 6087}
        }]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -870, "modification": -145}}, {
        "name": "Fender Stereo System ",
        "value": {"buyback": 420, "modification": 70}
      }, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 660, "modification": 110}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 720, "modification": 120}
      }, {"name": "Navigation System ", "value": {"buyback": 720, "modification": 120}}]
    }, {
      "year": 2014,
      "trims": [{
        "name": "Convertible 2D TDI I4",
        "data": [{
          "locations": ["Central", "Midwest"],
          "value": {"buyback": 27947, "modification": 7147}
        }, {
          "locations": ["Desert SW", "Eastern", "Mountain", "SE", "SW"],
          "value": {"buyback": 27977, "modification": 7152}
        }, {
          "locations": ["California", "New England", "Pacific NW"],
          "value": {"buyback": 28037, "modification": 7162}
        }]
      }, {
        "name": "Coupe 2D TDI I4",
        "data": [{
          "locations": ["Central", "Midwest"],
          "value": {"buyback": 23807, "modification": 6457}
        }, {
          "locations": ["Desert SW", "Eastern", "Mountain", "SE", "SW"],
          "value": {"buyback": 23837, "modification": 6462}
        }, {
          "locations": ["California", "New England", "Pacific NW"],
          "value": {"buyback": 23897, "modification": 6472}
        }]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -900, "modification": -150}}, {
        "name": "Fender Stereo System ",
        "value": {"buyback": 450, "modification": 75}
      }, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 690, "modification": 115}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 750, "modification": 125}
      }, {"name": "Navigation System ", "value": {"buyback": 750, "modification": 125}}]
    }, {
      "year": 2015,
      "trims": [{
        "name": "Convertible 2D TDI I4",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 31130, "modification": 7677}
        }]
      }, {
        "name": "Coupe 2D TDI I4",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 28136, "modification": 7178}
        }]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -900, "modification": -150}}, {
        "name": "Fender Stereo System ",
        "value": {"buyback": 450, "modification": 75}
      }, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 690, "modification": 115}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 750, "modification": 125}
      }, {"name": "Navigation System ", "value": {"buyback": 750, "modification": 125}}]
    }]
  },
  {
    "model": "Golf",
    "mileage": [{
      "2010": {"buyback": 5040, "modification": 840},
      "2011": {"buyback": 4410, "modification": 735},
      "2012": {"buyback": 3630, "modification": 605},
      "2013": {"buyback": 2790, "modification": 465},
      "2014": {"buyback": 1860, "modification": 310},
      "2015": {"buyback": 870, "modification": 145},
      "from": -1000000,
      "to": 5000
    }, {
      "2010": {"buyback": 4560, "modification": 760},
      "2011": {"buyback": 3930, "modification": 655},
      "2012": {"buyback": 3180, "modification": 530},
      "2013": {"buyback": 2340, "modification": 390},
      "2014": {"buyback": 1470, "modification": 245},
      "2015": {"buyback": 510, "modification": 85},
      "from": 5001,
      "to": 10000
    }, {
      "2010": {"buyback": 4110, "modification": 685},
      "2011": {"buyback": 3480, "modification": 580},
      "2012": {"buyback": 2760, "modification": 460},
      "2013": {"buyback": 1950, "modification": 325},
      "2014": {"buyback": 1080, "modification": 180},
      "2015": {"buyback": 0, "modification": 0},
      "from": 10001,
      "to": 15000
    }, {
      "2010": {"buyback": 3660, "modification": 610},
      "2011": {"buyback": 3060, "modification": 510},
      "2012": {"buyback": 2340, "modification": 390},
      "2013": {"buyback": 1560, "modification": 260},
      "2014": {"buyback": 720, "modification": 120},
      "2015": {"buyback": -180, "modification": -30},
      "from": 15001,
      "to": 20000
    }, {
      "2010": {"buyback": 3270, "modification": 545},
      "2011": {"buyback": 2640, "modification": 440},
      "2012": {"buyback": 1950, "modification": 325},
      "2013": {"buyback": 1170, "modification": 195},
      "2014": {"buyback": 390, "modification": 65},
      "2015": {"buyback": -510, "modification": -85},
      "from": 20001,
      "to": 25000
    }, {
      "2010": {"buyback": 2880, "modification": 480},
      "2011": {"buyback": 2280, "modification": 380},
      "2012": {"buyback": 1560, "modification": 260},
      "2013": {"buyback": 810, "modification": 135},
      "2014": {"buyback": 0, "modification": 0},
      "2015": {"buyback": -810, "modification": -135},
      "from": 25001,
      "to": 30000
    }, {
      "2010": {"buyback": 2490, "modification": 415},
      "2011": {"buyback": 1920, "modification": 320},
      "2012": {"buyback": 1230, "modification": 205},
      "2013": {"buyback": 480, "modification": 80},
      "2014": {"buyback": -270, "modification": -45},
      "2015": {"buyback": -1140, "modification": -190},
      "from": 30001,
      "to": 35000
    }, {
      "2010": {"buyback": 2160, "modification": 360},
      "2011": {"buyback": 1560, "modification": 260},
      "2012": {"buyback": 900, "modification": 150},
      "2013": {"buyback": 180, "modification": 30},
      "2014": {"buyback": -570, "modification": -95},
      "2015": {"buyback": -1440, "modification": -240},
      "from": 35001,
      "to": 40000
    }, {
      "2010": {"buyback": 1830, "modification": 305},
      "2011": {"buyback": 1230, "modification": 205},
      "2012": {"buyback": 570, "modification": 95},
      "2013": {"buyback": 0, "modification": 0},
      "2014": {"buyback": -900, "modification": -150},
      "2015": {"buyback": -1740, "modification": -290},
      "from": 40001,
      "to": 45000
    }, {
      "2010": {"buyback": 1500, "modification": 250},
      "2011": {"buyback": 930, "modification": 155},
      "2012": {"buyback": 270, "modification": 45},
      "2013": {"buyback": -420, "modification": -70},
      "2014": {"buyback": -1200, "modification": -200},
      "2015": {"buyback": -2040, "modification": -340},
      "from": 45001,
      "to": 50000
    }, {
      "2010": {"buyback": 1200, "modification": 200},
      "2011": {"buyback": 630, "modification": 105},
      "2012": {"buyback": 0, "modification": 0},
      "2013": {"buyback": -720, "modification": -120},
      "2014": {"buyback": -1470, "modification": -245},
      "2015": {"buyback": -2340, "modification": -390},
      "from": 50001,
      "to": 55000
    }, {
      "2010": {"buyback": 930, "modification": 155},
      "2011": {"buyback": 360, "modification": 60},
      "2012": {"buyback": -300, "modification": -50},
      "2013": {"buyback": -1020, "modification": -170},
      "2014": {"buyback": -1770, "modification": -295},
      "2015": {"buyback": -2640, "modification": -440},
      "from": 55001,
      "to": 60000
    }, {
      "2010": {"buyback": 660, "modification": 110},
      "2011": {"buyback": 0, "modification": 0},
      "2012": {"buyback": -570, "modification": -95},
      "2013": {"buyback": -1290, "modification": -215},
      "2014": {"buyback": -2070, "modification": -345},
      "2015": {"buyback": -2910, "modification": -485},
      "from": 60001,
      "to": 65000
    }, {
      "2010": {"buyback": 420, "modification": 70},
      "2011": {"buyback": -150, "modification": -25},
      "2012": {"buyback": -810, "modification": -135},
      "2013": {"buyback": -1560, "modification": -260},
      "2014": {"buyback": -2340, "modification": -390},
      "2015": {"buyback": -3210, "modification": -535},
      "from": 65001,
      "to": 70000
    }, {
      "2010": {"buyback": 180, "modification": 30},
      "2011": {"buyback": -420, "modification": -70},
      "2012": {"buyback": -1080, "modification": -180},
      "2013": {"buyback": -1830, "modification": -305},
      "2014": {"buyback": -2610, "modification": -435},
      "2015": {"buyback": -3480, "modification": -580},
      "from": 70001,
      "to": 75000
    }, {
      "2010": {"buyback": 0, "modification": 0},
      "2011": {"buyback": -630, "modification": -105},
      "2012": {"buyback": -1320, "modification": -220},
      "2013": {"buyback": -2070, "modification": -345},
      "2014": {"buyback": -2880, "modification": -480},
      "2015": {"buyback": -3750, "modification": -625},
      "from": 75001,
      "to": 80000
    }, {
      "2010": {"buyback": -270, "modification": -45},
      "2011": {"buyback": -870, "modification": -145},
      "2012": {"buyback": -1560, "modification": -260},
      "2013": {"buyback": -2340, "modification": -390},
      "2014": {"buyback": -3150, "modification": -525},
      "2015": {"buyback": -4020, "modification": -670},
      "from": 80001,
      "to": 85000
    }, {
      "2010": {"buyback": -480, "modification": -80},
      "2011": {"buyback": -1110, "modification": -185},
      "2012": {"buyback": -1800, "modification": -300},
      "2013": {"buyback": -2580, "modification": -430},
      "2014": {"buyback": -3390, "modification": -565},
      "2015": {"buyback": -4290, "modification": -715},
      "from": 85001,
      "to": 90000
    }, {
      "2010": {"buyback": -690, "modification": -115},
      "2011": {"buyback": -1320, "modification": -220},
      "2012": {"buyback": -2040, "modification": -340},
      "2013": {"buyback": -2820, "modification": -470},
      "2014": {"buyback": -3660, "modification": -610},
      "2015": {"buyback": -4530, "modification": -755},
      "from": 90001,
      "to": 95000
    }, {
      "2010": {"buyback": -900, "modification": -150},
      "2011": {"buyback": -1530, "modification": -255},
      "2012": {"buyback": -2280, "modification": -380},
      "2013": {"buyback": -3060, "modification": -510},
      "2014": {"buyback": -3900, "modification": -650},
      "2015": {"buyback": -4800, "modification": -800},
      "from": 95001,
      "to": 100000
    }, {
      "2010": {"buyback": -1080, "modification": -180},
      "2011": {"buyback": -1740, "modification": -290},
      "2012": {"buyback": -2490, "modification": -415},
      "2013": {"buyback": -3300, "modification": -550},
      "2014": {"buyback": -4140, "modification": -690},
      "2015": {"buyback": -5040, "modification": -840},
      "from": 100001,
      "to": 105000
    }, {
      "2010": {"buyback": -1260, "modification": -210},
      "2011": {"buyback": -1950, "modification": -325},
      "2012": {"buyback": -2700, "modification": -450},
      "2013": {"buyback": -3540, "modification": -590},
      "2014": {"buyback": -4380, "modification": -730},
      "2015": {"buyback": -5280, "modification": -880},
      "from": 105001,
      "to": 110000
    }, {
      "2010": {"buyback": -1470, "modification": -245},
      "2011": {"buyback": -2160, "modification": -360},
      "2012": {"buyback": -2910, "modification": -485},
      "2013": {"buyback": -3750, "modification": -625},
      "2014": {"buyback": -4620, "modification": -770},
      "2015": {"buyback": -5520, "modification": -920},
      "from": 110001,
      "to": 115000
    }, {
      "2010": {"buyback": -1650, "modification": -275},
      "2011": {"buyback": -2340, "modification": -390},
      "2012": {"buyback": -3120, "modification": -520},
      "2013": {"buyback": -3960, "modification": -660},
      "2014": {"buyback": -4860, "modification": -810},
      "2015": {"buyback": -5760, "modification": -960},
      "from": 115001,
      "to": 120000
    }, {
      "2010": {"buyback": -1800, "modification": -300},
      "2011": {"buyback": -2520, "modification": -420},
      "2012": {"buyback": -3330, "modification": -555},
      "2013": {"buyback": -4200, "modification": -700},
      "2014": {"buyback": -5070, "modification": -845},
      "2015": {"buyback": -6000, "modification": -1000},
      "from": 120001,
      "to": 125000
    }, {
      "2010": {"buyback": -1980, "modification": -330},
      "2011": {"buyback": -2700, "modification": -450},
      "2012": {"buyback": -3540, "modification": -590},
      "2013": {"buyback": -4410, "modification": -735},
      "2014": {"buyback": -5280, "modification": -880},
      "2015": {"buyback": -6240, "modification": -1040},
      "from": 125001,
      "to": 130000
    }, {
      "2010": {"buyback": -2160, "modification": -360},
      "2011": {"buyback": -2880, "modification": -480},
      "2012": {"buyback": -3720, "modification": -620},
      "2013": {"buyback": -4590, "modification": -765},
      "2014": {"buyback": -5520, "modification": -920},
      "2015": {"buyback": -6450, "modification": -1075},
      "from": 130001,
      "to": 135000
    }, {
      "2010": {"buyback": -2310, "modification": -385},
      "2011": {"buyback": -3060, "modification": -510},
      "2012": {"buyback": -3900, "modification": -650},
      "2013": {"buyback": -4800, "modification": -800},
      "2014": {"buyback": -5730, "modification": -955},
      "2015": {"buyback": -6690, "modification": -1115},
      "from": 135001,
      "to": 140000
    }, {
      "2010": {"buyback": -2460, "modification": -410},
      "2011": {"buyback": -3240, "modification": -540},
      "2012": {"buyback": -4080, "modification": -680},
      "2013": {"buyback": -5010, "modification": -835},
      "2014": {"buyback": -5940, "modification": -990},
      "2015": {"buyback": -6900, "modification": -1150},
      "from": 140001,
      "to": 145000
    }, {
      "2010": {"buyback": -2610, "modification": -435},
      "2011": {"buyback": -3390, "modification": -565},
      "2012": {"buyback": -4260, "modification": -710},
      "2013": {"buyback": -5190, "modification": -865},
      "2014": {"buyback": -6150, "modification": -1025},
      "2015": {"buyback": -7110, "modification": -1185},
      "from": 145001,
      "to": 150000
    }, {
      "2010": {"buyback": -2760, "modification": -460},
      "2011": {"buyback": -3570, "modification": -595},
      "2012": {"buyback": -4440, "modification": -740},
      "2013": {"buyback": -5370, "modification": -895},
      "2014": {"buyback": -6330, "modification": -1055},
      "2015": {"buyback": -7320, "modification": -1220},
      "from": 150001,
      "to": 155000
    }, {
      "2010": {"buyback": -2910, "modification": -485},
      "2011": {"buyback": -3720, "modification": -620},
      "2012": {"buyback": -4620, "modification": -770},
      "2013": {"buyback": -5550, "modification": -925},
      "2014": {"buyback": -6540, "modification": -1090},
      "2015": {"buyback": -7530, "modification": -1255},
      "from": 155001,
      "to": 160000
    }, {
      "2010": {"buyback": -3060, "modification": -510},
      "2011": {"buyback": -3870, "modification": -645},
      "2012": {"buyback": -4770, "modification": -795},
      "2013": {"buyback": -5730, "modification": -955},
      "2014": {"buyback": -6720, "modification": -1120},
      "2015": {"buyback": -7740, "modification": -1290},
      "from": 160001,
      "to": 165000
    }, {
      "2010": {"buyback": -3180, "modification": -530},
      "2011": {"buyback": -4020, "modification": -670},
      "2012": {"buyback": -4950, "modification": -825},
      "2013": {"buyback": -5910, "modification": -985},
      "2014": {"buyback": -6930, "modification": -1155},
      "2015": {"buyback": -7950, "modification": -1325},
      "from": 165001,
      "to": 170000
    }, {
      "2010": {"buyback": -3330, "modification": -555},
      "2011": {"buyback": -4170, "modification": -695},
      "2012": {"buyback": -5100, "modification": -850},
      "2013": {"buyback": -6090, "modification": -1015},
      "2014": {"buyback": -7110, "modification": -1185},
      "2015": {"buyback": -8160, "modification": -1360},
      "from": 170001,
      "to": 175000
    }, {
      "2010": {"buyback": -3450, "modification": -575},
      "2011": {"buyback": -4320, "modification": -720},
      "2012": {"buyback": -5250, "modification": -875},
      "2013": {"buyback": -6270, "modification": -1045},
      "2014": {"buyback": -7290, "modification": -1215},
      "2015": {"buyback": -8340, "modification": -1390},
      "from": 175001,
      "to": 180000
    }, {
      "2010": {"buyback": -3570, "modification": -595},
      "2011": {"buyback": -4440, "modification": -740},
      "2012": {"buyback": -5400, "modification": -900},
      "2013": {"buyback": -6420, "modification": -1070},
      "2014": {"buyback": -7470, "modification": -1245},
      "2015": {"buyback": -8550, "modification": -1425},
      "from": 180001,
      "to": 185000
    }, {
      "2010": {"buyback": -3690, "modification": -615},
      "2011": {"buyback": -4590, "modification": -765},
      "2012": {"buyback": -5550, "modification": -925},
      "2013": {"buyback": -6600, "modification": -1100},
      "2014": {"buyback": -7650, "modification": -1275},
      "2015": {"buyback": -8730, "modification": -1455},
      "from": 185001,
      "to": 190000
    }, {
      "2010": {"buyback": -3810, "modification": -635},
      "2011": {"buyback": -4710, "modification": -785},
      "2012": {"buyback": -5700, "modification": -950},
      "2013": {"buyback": -6750, "modification": -1125},
      "2014": {"buyback": -7830, "modification": -1305},
      "2015": {"buyback": -8910, "modification": -1485},
      "from": 190001,
      "to": 195000
    }, {
      "2010": {"buyback": -3930, "modification": -655},
      "2011": {"buyback": -4860, "modification": -810},
      "2012": {"buyback": -5850, "modification": -975},
      "2013": {"buyback": -6900, "modification": -1150},
      "2014": {"buyback": -7980, "modification": -1330},
      "2015": {"buyback": -9090, "modification": -1515},
      "from": 195001,
      "to": 200000
    }, {
      "2010": {"buyback": -4050, "modification": -675},
      "2011": {"buyback": -4980, "modification": -830},
      "2012": {"buyback": -5970, "modification": -995},
      "2013": {"buyback": -7050, "modification": -1175},
      "2014": {"buyback": -8160, "modification": -1360},
      "2015": {"buyback": -9270, "modification": -1545},
      "from": 200001,
      "to": 205000
    }, {
      "2010": {"buyback": -4170, "modification": -695},
      "2011": {"buyback": -5100, "modification": -850},
      "2012": {"buyback": -6120, "modification": -1020},
      "2013": {"buyback": -7200, "modification": -1200},
      "2014": {"buyback": -8310, "modification": -1385},
      "2015": {"buyback": -9450, "modification": -1575},
      "from": 205001,
      "to": 210000
    }, {
      "2010": {"buyback": -4260, "modification": -710},
      "2011": {"buyback": -5220, "modification": -870},
      "2012": {"buyback": -6240, "modification": -1040},
      "2013": {"buyback": -7350, "modification": -1225},
      "2014": {"buyback": -8460, "modification": -1410},
      "2015": {"buyback": -9630, "modification": -1605},
      "from": 210001,
      "to": 215000
    }, {
      "2010": {"buyback": -4380, "modification": -730},
      "2011": {"buyback": -5340, "modification": -890},
      "2012": {"buyback": -6360, "modification": -1060},
      "2013": {"buyback": -7500, "modification": -1250},
      "2014": {"buyback": -8640, "modification": -1440},
      "2015": {"buyback": -9780, "modification": -1630},
      "from": 215001,
      "to": 220000
    }, {
      "2010": {"buyback": -4470, "modification": -745},
      "2011": {"buyback": -5430, "modification": -905},
      "2012": {"buyback": -6510, "modification": -1085},
      "2013": {"buyback": -7620, "modification": -1270},
      "2014": {"buyback": -8790, "modification": -1465},
      "2015": {"buyback": -9960, "modification": -1660},
      "from": 220001,
      "to": 225000
    }, {
      "2010": {"buyback": -4560, "modification": -760},
      "2011": {"buyback": -5550, "modification": -925},
      "2012": {"buyback": -6630, "modification": -1105},
      "2013": {"buyback": -7770, "modification": -1295},
      "2014": {"buyback": -8940, "modification": -1490},
      "2015": {"buyback": -10140, "modification": -1690},
      "from": 225001,
      "to": 230000
    }, {
      "2010": {"buyback": -4680, "modification": -780},
      "2011": {"buyback": -5670, "modification": -945},
      "2012": {"buyback": -6750, "modification": -1125},
      "2013": {"buyback": -7890, "modification": -1315},
      "2014": {"buyback": -9090, "modification": -1515},
      "2015": {"buyback": -10290, "modification": -1715},
      "from": 230001,
      "to": 235000
    }, {
      "2010": {"buyback": -4770, "modification": -795},
      "2011": {"buyback": -5760, "modification": -960},
      "2012": {"buyback": -6870, "modification": -1145},
      "2013": {"buyback": -8040, "modification": -1340},
      "2014": {"buyback": -9240, "modification": -1540},
      "2015": {"buyback": -10440, "modification": -1740},
      "from": 235001,
      "to": 240000
    }, {
      "2010": {"buyback": -4860, "modification": -810},
      "2011": {"buyback": -5850, "modification": -975},
      "2012": {"buyback": -6960, "modification": -1160},
      "2013": {"buyback": -8160, "modification": -1360},
      "2014": {"buyback": -9360, "modification": -1560},
      "2015": {"buyback": -10620, "modification": -1770},
      "from": 240001,
      "to": 245000
    }, {
      "2010": {"buyback": -4950, "modification": -825},
      "2011": {"buyback": -5970, "modification": -995},
      "2012": {"buyback": -7080, "modification": -1180},
      "2013": {"buyback": -8280, "modification": -1380},
      "2014": {"buyback": -9510, "modification": -1585},
      "2015": {"buyback": -10770, "modification": -1795},
      "from": 245001,
      "to": 1245000
    }],
    "years": [{
      "year": 2010,
      "trims": [{
        "name": "Hatchback 2D TDI",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 14897, "modification": 4972}
        }, {
          "locations": ["California", "Desert SW", "New England"],
          "value": {"buyback": 14927, "modification": 4977}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 14987, "modification": 4987}}]
      }, {
        "name": "Hatchback 4D TDI",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 15467, "modification": 5067}
        }, {
          "locations": ["California", "Desert SW", "New England"],
          "value": {"buyback": 15497, "modification": 5072}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 15557, "modification": 5082}}]
      }],
      "options": [{"name": "Dynaudio Stereo System ", "value": {"buyback": 240, "modification": 40}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 480, "modification": 80}
      }, {"name": "Navigation System ", "value": {"buyback": 510, "modification": 85}}, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 540, "modification": 90}
      }, {"name": "Automatic Trans. ", "value": {"buyback": 660, "modification": 110}}]
    }, {
      "year": 2011,
      "trims": [{
        "name": "Hatchback 2D TDI",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 17657, "modification": 5432}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 17687, "modification": 5437}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 17747, "modification": 5447}}]
      }, {
        "name": "Hatchback 4D TDI",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 18497, "modification": 5572}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 18527, "modification": 5577}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 18557, "modification": 5582}}]
      }],
      "options": [{"name": "Dynaudio Stereo System ", "value": {"buyback": 270, "modification": 45}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 480, "modification": 80}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 540, "modification": 90}
      }, {"name": "Navigation System ", "value": {"buyback": 570, "modification": 95}}, {
        "name": "Automatic Trans. ",
        "value": {"buyback": 750, "modification": 125}
      }]
    }, {
      "year": 2012,
      "trims": [{
        "name": "Hatchback 2D TDI",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 19457, "modification": 5732}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 19487, "modification": 5737}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 19517, "modification": 5742}}]
      }, {
        "name": "Hatchback 4D TDI",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 20267, "modification": 5867}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 20297, "modification": 5872}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 20327, "modification": 5877}}]
      }],
      "options": [{"name": "Dynaudio Stereo System ", "value": {"buyback": 300, "modification": 50}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 510, "modification": 85}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 570, "modification": 95}
      }, {"name": "Navigation System ", "value": {"buyback": 600, "modification": 100}}, {
        "name": "Automatic Trans. ",
        "value": {"buyback": 750, "modification": 125}
      }]
    }, {
      "year": 2013,
      "trims": [{
        "name": "Hatchback 2D TDI I4",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 20657, "modification": 5932}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 20687, "modification": 5937}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 20717, "modification": 5942}}]
      }, {
        "name": "Hatchback 4D TDI I4",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 21377, "modification": 6052}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 21407, "modification": 6057}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 21437, "modification": 6062}}]
      }],
      "options": [{"name": "Dynaudio Stereo System ", "value": {"buyback": 330, "modification": 55}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 600, "modification": 100}
      }, {"name": "Navigation System ", "value": {"buyback": 660, "modification": 110}}, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 660, "modification": 110}
      }, {"name": "Automatic Trans. ", "value": {"buyback": 780, "modification": 130}}]
    }, {
      "year": 2014,
      "trims": [{
        "name": "Hatchback 4D TDI I4",
        "data": [{
          "locations": ["Central", "Desert SW", "Eastern", "Midwest", "Mountain", "SE", "SW"],
          "value": {"buyback": 23957, "modification": 6482}
        }, {
          "locations": ["California", "New England"],
          "value": {"buyback": 23987, "modification": 6487}
        }, {"locations": ["Pacific NW"], "value": {"buyback": 24017, "modification": 6492}}]
      }],
      "options": [{
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 630, "modification": 105}
      }, {"name": "Navigation System ", "value": {"buyback": 690, "modification": 115}}, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 690, "modification": 115}
      }, {"name": "Automatic Trans. ", "value": {"buyback": 810, "modification": 135}}]
    }, {
      "year": 2015,
      "trims": [{
        "name": "Hatchback 4D TDI S I4 Turbo",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 23586, "modification": 6420}
        }]

      }, {
        "name": "Hatchback 4D TDI SE I4 Turbo",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 27202, "modification": 7023}
        }]
      }, {
        "name": "Hatchback 4D TDI SEL I4 Turbo",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 29546, "modification": 7413}
        }]
      }, {
        "name": "SportWagen 4D TDI S I4 T-Diesel",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 25771, "modification": 6784}
        }]
      }, {
        "name": "SportWagen 4D TDI SE I4 T-Diesel",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 29037, "modification": 7328}
        }]
      }, {
        "name": "SportWagen 4D TDI SEL I4 T-Diesel",
        "data": [{
          "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
          "value": {"buyback": 31421, "modification": 7726}
        }]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -810, "modification": -135}}]
    }]
  },
  {
    "model": "Jetta",
    "mileage": [{
      "2009": {"buyback": 7260, "modification": 1210},
      "2010": {"buyback": 6690, "modification": 1115},
      "2011": {"buyback": 5850, "modification": 975},
      "2012": {"buyback": 4800, "modification": 800},
      "2013": {"buyback": 3660, "modification": 610},
      "2014": {"buyback": 2460, "modification": 410},
      "2015": {"buyback": 1140, "modification": 190},
      "from": -1000000,
      "to": 5000
    }, {
      "2009": {"buyback": 6630, "modification": 1105},
      "2010": {"buyback": 6030, "modification": 1005},
      "2011": {"buyback": 5220, "modification": 870},
      "2012": {"buyback": 4200, "modification": 700},
      "2013": {"buyback": 3090, "modification": 515},
      "2014": {"buyback": 1950, "modification": 325},
      "2015": {"buyback": 660, "modification": 110},
      "from": 5001,
      "to": 10000
    }, {
      "2009": {"buyback": 6030, "modification": 1005},
      "2010": {"buyback": 5430, "modification": 905},
      "2011": {"buyback": 4620, "modification": 770},
      "2012": {"buyback": 3630, "modification": 605},
      "2013": {"buyback": 2550, "modification": 425},
      "2014": {"buyback": 1440, "modification": 240},
      "2015": {"buyback": 0, "modification": 0},
      "from": 10001,
      "to": 15000
    }, {
      "2009": {"buyback": 5460, "modification": 910},
      "2010": {"buyback": 4860, "modification": 810},
      "2011": {"buyback": 4050, "modification": 675},
      "2012": {"buyback": 3090, "modification": 515},
      "2013": {"buyback": 2040, "modification": 340},
      "2014": {"buyback": 960, "modification": 160},
      "2015": {"buyback": -240, "modification": -40},
      "from": 15001,
      "to": 20000
    }, {
      "2009": {"buyback": 4920, "modification": 820},
      "2010": {"buyback": 4320, "modification": 720},
      "2011": {"buyback": 3510, "modification": 585},
      "2012": {"buyback": 2550, "modification": 425},
      "2013": {"buyback": 1530, "modification": 255},
      "2014": {"buyback": 510, "modification": 85},
      "2015": {"buyback": -660, "modification": -110},
      "from": 20001,
      "to": 25000
    }, {
      "2009": {"buyback": 4410, "modification": 735},
      "2010": {"buyback": 3780, "modification": 630},
      "2011": {"buyback": 3000, "modification": 500},
      "2012": {"buyback": 2070, "modification": 345},
      "2013": {"buyback": 1080, "modification": 180},
      "2014": {"buyback": 0, "modification": 0},
      "2015": {"buyback": -1080, "modification": -180},
      "from": 25001,
      "to": 30000
    }, {
      "2009": {"buyback": 3930, "modification": 655},
      "2010": {"buyback": 3300, "modification": 550},
      "2011": {"buyback": 2520, "modification": 420},
      "2012": {"buyback": 1620, "modification": 270},
      "2013": {"buyback": 630, "modification": 105},
      "2014": {"buyback": -360, "modification": -60},
      "2015": {"buyback": -1500, "modification": -250},
      "from": 30001,
      "to": 35000
    }, {
      "2009": {"buyback": 3450, "modification": 575},
      "2010": {"buyback": 2850, "modification": 475},
      "2011": {"buyback": 2070, "modification": 345},
      "2012": {"buyback": 1170, "modification": 195},
      "2013": {"buyback": 210, "modification": 35},
      "2014": {"buyback": -750, "modification": -125},
      "2015": {"buyback": -1890, "modification": -315},
      "from": 35001,
      "to": 40000
    }, {
      "2009": {"buyback": 3030, "modification": 505},
      "2010": {"buyback": 2400, "modification": 400},
      "2011": {"buyback": 1620, "modification": 270},
      "2012": {"buyback": 750, "modification": 125},
      "2013": {"buyback": 0, "modification": 0},
      "2014": {"buyback": -1170, "modification": -195},
      "2015": {"buyback": -2310, "modification": -385},
      "from": 40001,
      "to": 45000
    }, {
      "2009": {"buyback": 2610, "modification": 435},
      "2010": {"buyback": 1980, "modification": 330},
      "2011": {"buyback": 1200, "modification": 200},
      "2012": {"buyback": 360, "modification": 60},
      "2013": {"buyback": -570, "modification": -95},
      "2014": {"buyback": -1560, "modification": -260},
      "2015": {"buyback": -2700, "modification": -450},
      "from": 45001,
      "to": 50000
    }, {
      "2009": {"buyback": 2220, "modification": 370},
      "2010": {"buyback": 1590, "modification": 265},
      "2011": {"buyback": 840, "modification": 140},
      "2012": {"buyback": 0, "modification": 0},
      "2013": {"buyback": -960, "modification": -160},
      "2014": {"buyback": -1950, "modification": -325},
      "2015": {"buyback": -3060, "modification": -510},
      "from": 50001,
      "to": 55000
    }, {
      "2009": {"buyback": 1860, "modification": 310},
      "2010": {"buyback": 1230, "modification": 205},
      "2011": {"buyback": 450, "modification": 75},
      "2012": {"buyback": -390, "modification": -65},
      "2013": {"buyback": -1320, "modification": -220},
      "2014": {"buyback": -2310, "modification": -385},
      "2015": {"buyback": -3450, "modification": -575},
      "from": 55001,
      "to": 60000
    }, {
      "2009": {"buyback": 1500, "modification": 250},
      "2010": {"buyback": 870, "modification": 145},
      "2011": {"buyback": 0, "modification": 0},
      "2012": {"buyback": -720, "modification": -120},
      "2013": {"buyback": -1680, "modification": -280},
      "2014": {"buyback": -2700, "modification": -450},
      "2015": {"buyback": -3810, "modification": -635},
      "from": 60001,
      "to": 65000
    }, {
      "2009": {"buyback": 1170, "modification": 195},
      "2010": {"buyback": 540, "modification": 90},
      "2011": {"buyback": -210, "modification": -35},
      "2012": {"buyback": -1080, "modification": -180},
      "2013": {"buyback": -2040, "modification": -340},
      "2014": {"buyback": -3060, "modification": -510},
      "2015": {"buyback": -4200, "modification": -700},
      "from": 65001,
      "to": 70000
    }, {
      "2009": {"buyback": 870, "modification": 145},
      "2010": {"buyback": 210, "modification": 35},
      "2011": {"buyback": -540, "modification": -90},
      "2012": {"buyback": -1410, "modification": -235},
      "2013": {"buyback": -2370, "modification": -395},
      "2014": {"buyback": -3420, "modification": -570},
      "2015": {"buyback": -4560, "modification": -760},
      "from": 70001,
      "to": 75000
    }, {
      "2009": {"buyback": 570, "modification": 95},
      "2010": {"buyback": 0, "modification": 0},
      "2011": {"buyback": -840, "modification": -140},
      "2012": {"buyback": -1740, "modification": -290},
      "2013": {"buyback": -2730, "modification": -455},
      "2014": {"buyback": -3750, "modification": -625},
      "2015": {"buyback": -4890, "modification": -815},
      "from": 75001,
      "to": 80000
    }, {
      "2009": {"buyback": 300, "modification": 50},
      "2010": {"buyback": -360, "modification": -60},
      "2011": {"buyback": -1140, "modification": -190},
      "2012": {"buyback": -2070, "modification": -345},
      "2013": {"buyback": -3060, "modification": -510},
      "2014": {"buyback": -4110, "modification": -685},
      "2015": {"buyback": -5250, "modification": -875},
      "from": 80001,
      "to": 85000
    }, {
      "2009": {"buyback": 0, "modification": 0},
      "2010": {"buyback": -630, "modification": -105},
      "2011": {"buyback": -1440, "modification": -240},
      "2012": {"buyback": -2370, "modification": -395},
      "2013": {"buyback": -3390, "modification": -565},
      "2014": {"buyback": -4440, "modification": -740},
      "2015": {"buyback": -5580, "modification": -930},
      "from": 85001,
      "to": 90000
    }, {
      "2009": {"buyback": -210, "modification": -35},
      "2010": {"buyback": -900, "modification": -150},
      "2011": {"buyback": -1740, "modification": -290},
      "2012": {"buyback": -2670, "modification": -445},
      "2013": {"buyback": -3690, "modification": -615},
      "2014": {"buyback": -4770, "modification": -795},
      "2015": {"buyback": -5940, "modification": -990},
      "from": 90001,
      "to": 95000
    }, {
      "2009": {"buyback": -450, "modification": -75},
      "2010": {"buyback": -1170, "modification": -195},
      "2011": {"buyback": -2010, "modification": -335},
      "2012": {"buyback": -2970, "modification": -495},
      "2013": {"buyback": -3990, "modification": -665},
      "2014": {"buyback": -5100, "modification": -850},
      "2015": {"buyback": -6270, "modification": -1045},
      "from": 95001,
      "to": 100000
    }, {
      "2009": {"buyback": -690, "modification": -115},
      "2010": {"buyback": -1410, "modification": -235},
      "2011": {"buyback": -2280, "modification": -380},
      "2012": {"buyback": -3240, "modification": -540},
      "2013": {"buyback": -4320, "modification": -720},
      "2014": {"buyback": -5400, "modification": -900},
      "2015": {"buyback": -6570, "modification": -1095},
      "from": 100001,
      "to": 105000
    }, {
      "2009": {"buyback": -900, "modification": -150},
      "2010": {"buyback": -1680, "modification": -280},
      "2011": {"buyback": -2550, "modification": -425},
      "2012": {"buyback": -3540, "modification": -590},
      "2013": {"buyback": -4590, "modification": -765},
      "2014": {"buyback": -5700, "modification": -950},
      "2015": {"buyback": -6900, "modification": -1150},
      "from": 105001,
      "to": 110000
    }, {
      "2009": {"buyback": -1140, "modification": -190},
      "2010": {"buyback": -1920, "modification": -320},
      "2011": {"buyback": -2790, "modification": -465},
      "2012": {"buyback": -3810, "modification": -635},
      "2013": {"buyback": -4890, "modification": -815},
      "2014": {"buyback": -6030, "modification": -1005},
      "2015": {"buyback": -7200, "modification": -1200},
      "from": 110001,
      "to": 115000
    }, {
      "2009": {"buyback": -1350, "modification": -225},
      "2010": {"buyback": -2130, "modification": -355},
      "2011": {"buyback": -3060, "modification": -510},
      "2012": {"buyback": -4080, "modification": -680},
      "2013": {"buyback": -5190, "modification": -865},
      "2014": {"buyback": -6300, "modification": -1050},
      "2015": {"buyback": -7530, "modification": -1255},
      "from": 115001,
      "to": 120000
    }, {
      "2009": {"buyback": -1560, "modification": -260},
      "2010": {"buyback": -2370, "modification": -395},
      "2011": {"buyback": -3300, "modification": -550},
      "2012": {"buyback": -4350, "modification": -725},
      "2013": {"buyback": -5460, "modification": -910},
      "2014": {"buyback": -6600, "modification": -1100},
      "2015": {"buyback": -7830, "modification": -1305},
      "from": 120001,
      "to": 125000
    }, {
      "2009": {"buyback": -1770, "modification": -295},
      "2010": {"buyback": -2580, "modification": -430},
      "2011": {"buyback": -3540, "modification": -590},
      "2012": {"buyback": -4590, "modification": -765},
      "2013": {"buyback": -5730, "modification": -955},
      "2014": {"buyback": -6900, "modification": -1150},
      "2015": {"buyback": -8130, "modification": -1355},
      "from": 125001,
      "to": 130000
    }, {
      "2009": {"buyback": -1950, "modification": -325},
      "2010": {"buyback": -2790, "modification": -465},
      "2011": {"buyback": -3780, "modification": -630},
      "2012": {"buyback": -4830, "modification": -805},
      "2013": {"buyback": -6000, "modification": -1000},
      "2014": {"buyback": -7170, "modification": -1195},
      "2015": {"buyback": -8400, "modification": -1400},
      "from": 130001,
      "to": 135000
    }, {
      "2009": {"buyback": -2160, "modification": -360},
      "2010": {"buyback": -3000, "modification": -500},
      "2011": {"buyback": -3990, "modification": -665},
      "2012": {"buyback": -5070, "modification": -845},
      "2013": {"buyback": -6240, "modification": -1040},
      "2014": {"buyback": -7440, "modification": -1240},
      "2015": {"buyback": -8700, "modification": -1450},
      "from": 135001,
      "to": 140000
    }, {
      "2009": {"buyback": -2340, "modification": -390},
      "2010": {"buyback": -3210, "modification": -535},
      "2011": {"buyback": -4200, "modification": -700},
      "2012": {"buyback": -5310, "modification": -885},
      "2013": {"buyback": -6510, "modification": -1085},
      "2014": {"buyback": -7710, "modification": -1285},
      "2015": {"buyback": -8970, "modification": -1495},
      "from": 140001,
      "to": 145000
    }, {
      "2009": {"buyback": -2520, "modification": -420},
      "2010": {"buyback": -3420, "modification": -570},
      "2011": {"buyback": -4440, "modification": -740},
      "2012": {"buyback": -5550, "modification": -925},
      "2013": {"buyback": -6750, "modification": -1125},
      "2014": {"buyback": -7980, "modification": -1330},
      "2015": {"buyback": -9270, "modification": -1545},
      "from": 145001,
      "to": 150000
    }, {
      "2009": {"buyback": -2670, "modification": -445},
      "2010": {"buyback": -3600, "modification": -600},
      "2011": {"buyback": -4620, "modification": -770},
      "2012": {"buyback": -5760, "modification": -960},
      "2013": {"buyback": -6990, "modification": -1165},
      "2014": {"buyback": -8220, "modification": -1370},
      "2015": {"buyback": -9540, "modification": -1590},
      "from": 150001,
      "to": 155000
    }, {
      "2009": {"buyback": -3180, "modification": -475},
      "2010": {"buyback": -3780, "modification": -630},
      "2011": {"buyback": -4830, "modification": -805},
      "2012": {"buyback": -6000, "modification": -1000},
      "2013": {"buyback": -7230, "modification": -1205},
      "2014": {"buyback": -8490, "modification": -1415},
      "2015": {"buyback": -9810, "modification": -1635},
      "from": 155001,
      "to": 160000
    }, {
      "2009": {"buyback": -3330, "modification": -505},
      "2010": {"buyback": -3960, "modification": -660},
      "2011": {"buyback": -5040, "modification": -840},
      "2012": {"buyback": -6210, "modification": -1035},
      "2013": {"buyback": -7440, "modification": -1240},
      "2014": {"buyback": -8730, "modification": -1455},
      "2015": {"buyback": -10050, "modification": -1675},
      "from": 160001,
      "to": 165000
    }, {
      "2009": {"buyback": -3480, "modification": -530},
      "2010": {"buyback": -4140, "modification": -690},
      "2011": {"buyback": -5220, "modification": -870},
      "2012": {"buyback": -6420, "modification": -1070},
      "2013": {"buyback": -7680, "modification": -1280},
      "2014": {"buyback": -8970, "modification": -1495},
      "2015": {"buyback": -10320, "modification": -1720},
      "from": 165001,
      "to": 170000
    }, {
      "2009": {"buyback": -3630, "modification": -555},
      "2010": {"buyback": -4320, "modification": -720},
      "2011": {"buyback": -5400, "modification": -900},
      "2012": {"buyback": -6600, "modification": -1100},
      "2013": {"buyback": -7890, "modification": -1315},
      "2014": {"buyback": -9210, "modification": -1535},
      "2015": {"buyback": -10560, "modification": -1760},
      "from": 170001,
      "to": 175000
    }, {
      "2009": {"buyback": -3780, "modification": -580},
      "2010": {"buyback": -4470, "modification": -745},
      "2011": {"buyback": -5580, "modification": -930},
      "2012": {"buyback": -6810, "modification": -1135},
      "2013": {"buyback": -8100, "modification": -1350},
      "2014": {"buyback": -9450, "modification": -1575},
      "2015": {"buyback": -10830, "modification": -1805},
      "from": 175001,
      "to": 180000
    }, {
      "2009": {"buyback": -3900, "modification": -605},
      "2010": {"buyback": -4650, "modification": -775},
      "2011": {"buyback": -5760, "modification": -960},
      "2012": {"buyback": -6990, "modification": -1165},
      "2013": {"buyback": -8310, "modification": -1385},
      "2014": {"buyback": -9690, "modification": -1615},
      "2015": {"buyback": -11070, "modification": -1845},
      "from": 180001,
      "to": 185000
    }, {
      "2009": {"buyback": -4050, "modification": -630},
      "2010": {"buyback": -4800, "modification": -800},
      "2011": {"buyback": -5940, "modification": -990},
      "2012": {"buyback": -7200, "modification": -1200},
      "2013": {"buyback": -8520, "modification": -1420},
      "2014": {"buyback": -9900, "modification": -1650},
      "2015": {"buyback": -11310, "modification": -1885},
      "from": 185001,
      "to": 190000
    }, {
      "2009": {"buyback": -4170, "modification": -650},
      "2010": {"buyback": -4950, "modification": -825},
      "2011": {"buyback": -6120, "modification": -1020},
      "2012": {"buyback": -7380, "modification": -1230},
      "2013": {"buyback": -8730, "modification": -1455},
      "2014": {"buyback": -10110, "modification": -1685},
      "2015": {"buyback": -11550, "modification": -1925},
      "from": 190001,
      "to": 195000
    }, {
      "2009": {"buyback": -4290, "modification": -675},
      "2010": {"buyback": -5100, "modification": -850},
      "2011": {"buyback": -6270, "modification": -1045},
      "2012": {"buyback": -7560, "modification": -1260},
      "2013": {"buyback": -8940, "modification": -1490},
      "2014": {"buyback": -10350, "modification": -1725},
      "2015": {"buyback": -11790, "modification": -1965},
      "from": 195001,
      "to": 200000
    }, {
      "2009": {"buyback": -4410, "modification": -695},
      "2010": {"buyback": -5250, "modification": -875},
      "2011": {"buyback": -6420, "modification": -1070},
      "2012": {"buyback": -7740, "modification": -1290},
      "2013": {"buyback": -9120, "modification": -1520},
      "2014": {"buyback": -10560, "modification": -1760},
      "2015": {"buyback": -12000, "modification": -2000},
      "from": 200001,
      "to": 205000
    }, {
      "2009": {"buyback": -4530, "modification": -715},
      "2010": {"buyback": -5370, "modification": -895},
      "2011": {"buyback": -6570, "modification": -1095},
      "2012": {"buyback": -7890, "modification": -1315},
      "2013": {"buyback": -9300, "modification": -1550},
      "2014": {"buyback": -10770, "modification": -1795},
      "2015": {"buyback": -12240, "modification": -2040},
      "from": 205001,
      "to": 210000
    }, {
      "2009": {"buyback": -4650, "modification": -735},
      "2010": {"buyback": -5520, "modification": -920},
      "2011": {"buyback": -6720, "modification": -1120},
      "2012": {"buyback": -8070, "modification": -1345},
      "2013": {"buyback": -9480, "modification": -1580},
      "2014": {"buyback": -10950, "modification": -1825},
      "2015": {"buyback": -12450, "modification": -2075},
      "from": 210001,
      "to": 215000
    }, {
      "2009": {"buyback": -4770, "modification": -755},
      "2010": {"buyback": -5640, "modification": -940},
      "2011": {"buyback": -6870, "modification": -1145},
      "2012": {"buyback": -8220, "modification": -1370},
      "2013": {"buyback": -9660, "modification": -1610},
      "2014": {"buyback": -11160, "modification": -1860},
      "2015": {"buyback": -12660, "modification": -2110},
      "from": 215001,
      "to": 220000
    }, {
      "2009": {"buyback": -4890, "modification": -775},
      "2010": {"buyback": -5760, "modification": -960},
      "2011": {"buyback": -7020, "modification": -1170},
      "2012": {"buyback": -8400, "modification": -1400},
      "2013": {"buyback": -9840, "modification": -1640},
      "2014": {"buyback": -11340, "modification": -1890},
      "2015": {"buyback": -12900, "modification": -2150},
      "from": 220001,
      "to": 225000
    }, {
      "2009": {"buyback": -2850, "modification": -795},
      "2010": {"buyback": -5910, "modification": -985},
      "2011": {"buyback": -7170, "modification": -1195},
      "2012": {"buyback": -8550, "modification": -1425},
      "2013": {"buyback": -10020, "modification": -1670},
      "2014": {"buyback": -11550, "modification": -1925},
      "2015": {"buyback": -13110, "modification": -2185},
      "from": 225001,
      "to": 230000
    }, {
      "2009": {"buyback": -3030, "modification": -815},
      "2010": {"buyback": -6030, "modification": -1005},
      "2011": {"buyback": -7290, "modification": -1215},
      "2012": {"buyback": -8700, "modification": -1450},
      "2013": {"buyback": -10170, "modification": -1695},
      "2014": {"buyback": -11730, "modification": -1955},
      "2015": {"buyback": -13290, "modification": -2215},
      "from": 230001,
      "to": 235000
    }, {
      "2009": {"buyback": -4980, "modification": -830},
      "2010": {"buyback": -6150, "modification": -1025},
      "2011": {"buyback": -7410, "modification": -1235},
      "2012": {"buyback": -8850, "modification": -1475},
      "2013": {"buyback": -10350, "modification": -1725},
      "2014": {"buyback": -11910, "modification": -1985},
      "2015": {"buyback": -13500, "modification": -2250},
      "from": 235001,
      "to": 240000
    }, {
      "2009": {"buyback": -5070, "modification": -845},
      "2010": {"buyback": -6240, "modification": -1040},
      "2011": {"buyback": -7560, "modification": -1260},
      "2012": {"buyback": -8970, "modification": -1495},
      "2013": {"buyback": -10500, "modification": -1750},
      "2014": {"buyback": -12090, "modification": -2015},
      "2015": {"buyback": -13710, "modification": -2285},
      "from": 240001,
      "to": 245000
    }, {
      "2009": {"buyback": -5190, "modification": -865},
      "2010": {"buyback": -6360, "modification": -1060},
      "2011": {"buyback": -7680, "modification": -1280},
      "2012": {"buyback": -9120, "modification": -1520},
      "2013": {"buyback": -10650, "modification": -1775},
      "2014": {"buyback": -12270, "modification": -2045},
      "2015": {"buyback": -13890, "modification": -2315},
      "from": 245001,
      "to": 1245001
    }],
    "years": [{
      "year": 2009,
      "trims": [{
        "name": "Sedan 4D TDI",
        "data": [{"locations": ["Midwest"], "value": {"buyback": 12437, "modification": 4562}}, {
          "locations": ["Mountain"],
          "value": {"buyback": 12467, "modification": 4567}
        }, {
          "locations": ["California", "Central", "Desert SW", "Eastern", "SE", "SW"],
          "value": {"buyback": 12527, "modification": 4577}
        }, {"locations": ["New England"], "value": {"buyback": 12677, "modification": 4602}}, {
          "locations": ["Pacific NW"],
          "value": {"buyback": 12737, "modification": 4612}
        }]
      }, {
        "name": "SportWagen 4D TDI",
        "data": [{"locations": ["Midwest"], "value": {"buyback": 13787, "modification": 4787}}, {
          "locations": ["Mountain"],
          "value": {"buyback": 13817, "modification": 4792}
        }, {
          "locations": ["California", "Central", "Desert SW", "Eastern", "SE", "SW"],
          "value": {"buyback": 13877, "modification": 4802}
        }, {"locations": ["New England"], "value": {"buyback": 13997, "modification": 4822}}, {
          "locations": ["Pacific NW"],
          "value": {"buyback": 14057, "modification": 4832}
        }]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -600, "modification": -100}}, {
        "name": "Navigation System ",
        "value": {"buyback": 420, "modification": 70}
      }, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 540, "modification": 90}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 600, "modification": 100}
      }]
    }, {
      "year": 2010,
      "trims": [{
        "name": "Sedan 4D TDI",
        "data": [{
          "locations": ["Mountain"],
          "value": {"buyback": 14027, "modification": 4827}
        }, {
          "locations": ["Desert SW", "Midwest"],
          "value": {"buyback": 14057, "modification": 4832}
        }, {
          "locations": ["California", "Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 14087, "modification": 4837}
        }, {"locations": ["New England"], "value": {"buyback": 14147, "modification": 4847}}, {
          "locations": ["Pacific NW"],
          "value": {"buyback": 14177, "modification": 4852}
        }]
      }, {
        "name": "Sedan 4D TDI Cup Street Edition",
        "data": [{
          "locations": ["Mountain"],
          "value": {"buyback": 15827, "modification": 5127}
        }, {
          "locations": ["Desert SW", "Midwest"],
          "value": {"buyback": 15857, "modification": 5132}
        }, {
          "locations": ["California", "Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 15887, "modification": 5137}
        }, {"locations": ["New England"], "value": {"buyback": 15947, "modification": 5147}}, {
          "locations": ["Pacific NW"],
          "value": {"buyback": 15977, "modification": 5152}
        }]
      }, {
        "name": "SportWagen 4D TDI",
        "data": [{
          "locations": ["Mountain"],
          "value": {"buyback": 15347, "modification": 5047}
        }, {
          "locations": ["Desert SW", "Midwest"],
          "value": {"buyback": 15377, "modification": 5052}
        }, {
          "locations": ["California", "Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 15407, "modification": 5057}
        }, {"locations": ["New England"], "value": {"buyback": 15467, "modification": 5067}}, {
          "locations": ["Pacific NW"],
          "value": {"buyback": 15497, "modification": 5072}
        }]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -750, "modification": -125}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 540, "modification": 90}
      }, {"name": "Navigation System ", "value": {"buyback": 570, "modification": 95}}, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 600, "modification": 100}
      }]
    }, {
      "year": 2011,
      "trims": [{
        "name": "Sedan 4D TDI",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 17057, "modification": 5332}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 17087, "modification": 5337}
        }, {
          "locations": ["California"],
          "value": {"buyback": 17117, "modification": 5342}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 17147, "modification": 5347}}]
      }, {
        "name": "SportWagen 4D TDI",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 19067, "modification": 5667}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 19097, "modification": 5672}
        }, {
          "locations": ["California"],
          "value": {"buyback": 19127, "modification": 5677}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 19157, "modification": 5682}}]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -840, "modification": -140}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 540, "modification": 90}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 600, "modification": 100}
      }, {"name": "Navigation System ", "value": {"buyback": 630, "modification": 105}}]
    }, {
      "year": 2012,
      "trims": [{
        "name": "Sedan 4D TDI",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 19157, "modification": 5682}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 19187, "modification": 5687}
        }, {
          "locations": ["California"],
          "value": {"buyback": 19217, "modification": 5692}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 19247, "modification": 5697}}]
      }, {
        "name": "SportWagen 4D TDI",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 20747, "modification": 5947}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 20777, "modification": 5952}
        }, {
          "locations": ["California"],
          "value": {"buyback": 20807, "modification": 5957}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 20837, "modification": 5962}}]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -840, "modification": -140}}, {
        "name": "Fender Stereo System ",
        "value": {"buyback": 360, "modification": 60}
      }, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 570, "modification": 95}
      }, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 630, "modification": 105}
      }, {"name": "Navigation System ", "value": {"buyback": 660, "modification": 110}}]
    }, {
      "year": 2013,
      "trims": [{
        "name": "Sedan 4D TDI I4",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 21647, "modification": 6097}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 21677, "modification": 6102}
        }, {
          "locations": ["California"],
          "value": {"buyback": 21707, "modification": 6107}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 21737, "modification": 6112}}]
      }, {
        "name": "SportWagen 4D TDI I4",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 24227, "modification": 6527}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 24257, "modification": 6532}
        }, {
          "locations": ["California"],
          "value": {"buyback": 24287, "modification": 6537}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 24317, "modification": 6542}}]
      }],
      "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -870, "modification": -145}}, {
        "name": "Power Seat ",
        "value": {"buyback": 330, "modification": 55}
      }, {"name": "Fender Stereo System ", "value": {"buyback": 420, "modification": 70}}, {
        "name": "Power Sunroof ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 660, "modification": 110}
      }, {"name": "Navigation System ", "value": {"buyback": 720, "modification": 120}}, {
        "name": "Power Sunroof ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 720, "modification": 120}
      }]
    }, {
      "year": 2014,
      "trims": [{
        "name": "Sedan 4D TDI I4",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 23747, "modification": 6447}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 23777, "modification": 6452}
        }, {
          "locations": ["California"],
          "value": {"buyback": 23807, "modification": 6457}
        }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 23837, "modification": 6462}}]
      }, {
        "name": "Sedan 4D TDI Value I4 Turbo",
        "data": [{
          "locations": ["Desert SW", "Midwest", "Mountain"],
          "value": {"buyback": 22037, "modification": 6162}
        }, {
          "locations": ["Central", "Eastern", "SE", "SW"],
          "value": {"buyback": 22067, "modification": 6167}
        }, {
          "locations": ["California"],
          "value": {"buyback": 22097, "modification": 6172}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 22127, "modification": 6177}
        }]}, {
          "name": "SportWagen 4D TDI I4",
          "data": [{
            "locations": ["Desert SW", "Midwest", "Mountain"],
            "value": {"buyback": 27557, "modification": 7082}
          }, {
            "locations": ["Central", "Eastern", "SE", "SW"],
            "value": {"buyback": 27587, "modification": 7087}
          }, {
            "locations": ["California"],
            "value": {"buyback": 27617, "modification": 7092}
          }, {"locations": ["New England", "Pacific NW"], "value": {"buyback": 27647, "modification": 7097}}]
        }],
        "options": [{"name": "No Auto. Trans. ", "value": {"buyback": -900, "modification": -150}}, {
          "name": "Power Seat ",
          "value": {"buyback": 360, "modification": 60}
        }, {
          "name": "Fender Stereo System ",
          "value": {"buyback": 450, "modification": 75}
        }, {
          "name": "Aluminum/Alloy Wheels  (Value Only)",
          "value": {"buyback": 480, "modification": 80}
        }, {
          "name": "Power Sunroof ",
          "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
          "value": {"buyback": 690, "modification": 115}
        }, {
          "name": "Power Sunroof ",
          "locations": ["California", "Desert SW", "SE", "SW"],
          "value": {"buyback": 750, "modification": 125}
        }, {"name": "Navigation System ", "value": {"buyback": 750, "modification": 125}}]
      }, {
        "year": 2015,
        "trims": [{
          "name": "Sedan 4D S TDI I4",
          "data": [{
            "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
            "value": {"buyback": 23329, "modification": 6377}
          }]
        }, {
          "name": "Sedan 4D SE TDI I4",
          "data": [{
            "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
            "value": {"buyback": 25515, "modification": 6741}
          }]
        }, {
          "name": "Sedan 4D SEL TDI I4",
          "data": [{
            "locations": ["California", "Mountain", "Pacific NW", "Central", "Desert SW", "Eastern", "Midwest", "New England", "SE", "SW"],
            "value": {"buyback": 28006, "modification": 7157}
          }]
        }],
        "options": [{
          "name": "No Auto. Trans. ",
          "value": {"buyback": -900, "modification": -150}
        }, {"name": "Aluminum / Alloy Wheels (S only)", "value": {"buyback": 480, "modification": 80}}]
      }]
  },
  {
    "model": "Passat",
    "mileage": [{
      "2010": {"buyback": 8040, "modification": 1340},
      "2011": {"buyback": 7080, "modification": 1180},
      "2012": {"buyback": 5850, "modification": 975},
      "2013": {"buyback": 4470, "modification": 745},
      "2014": {"buyback": 3030, "modification": 505},
      "2015": {"buyback": 1410, "modification": 235},
      "from": -1000000,
      "to": 5000
    }, {
      "2010": {"buyback": 7290, "modification": 1215},
      "2011": {"buyback": 6330, "modification": 1055},
      "2012": {"buyback": 5130, "modification": 855},
      "2013": {"buyback": 3780, "modification": 630},
      "2014": {"buyback": 2370, "modification": 395},
      "2015": {"buyback": 810, "modification": 135},
      "from": 5001,
      "to": 10000
    }, {
      "2010": {"buyback": 6570, "modification": 1095},
      "2011": {"buyback": 5610, "modification": 935},
      "2012": {"buyback": 4440, "modification": 740},
      "2013": {"buyback": 3120, "modification": 520},
      "2014": {"buyback": 1770, "modification": 295},
      "2015": {"buyback": 0, "modification": 0},
      "from": 10001,
      "to": 15000
    }, {
      "2010": {"buyback": 5880, "modification": 980},
      "2011": {"buyback": 4920, "modification": 820},
      "2012": {"buyback": 3780, "modification": 630},
      "2013": {"buyback": 2490, "modification": 415},
      "2014": {"buyback": 1170, "modification": 195},
      "2015": {"buyback": -270, "modification": -45},
      "from": 15001,
      "to": 20000
    }, {
      "2010": {"buyback": 5220, "modification": 870},
      "2011": {"buyback": 4290, "modification": 715},
      "2012": {"buyback": 3150, "modification": 525},
      "2013": {"buyback": 1890, "modification": 315},
      "2014": {"buyback": 600, "modification": 100},
      "2015": {"buyback": -810, "modification": -135},
      "from": 20001,
      "to": 25000
    }, {
      "2010": {"buyback": 4620, "modification": 770},
      "2011": {"buyback": 3660, "modification": 610},
      "2012": {"buyback": 2550, "modification": 425},
      "2013": {"buyback": 1320, "modification": 220},
      "2014": {"buyback": 0, "modification": 0},
      "2015": {"buyback": -1320, "modification": -220},
      "from": 25001,
      "to": 30000
    }, {
      "2010": {"buyback": 4020, "modification": 670},
      "2011": {"buyback": 3090, "modification": 515},
      "2012": {"buyback": 1980, "modification": 330},
      "2013": {"buyback": 780, "modification": 130},
      "2014": {"buyback": -450, "modification": -75},
      "2015": {"buyback": -1860, "modification": -310},
      "from": 30001,
      "to": 35000
    }, {
      "2010": {"buyback": 3450, "modification": 575},
      "2011": {"buyback": 2520, "modification": 420},
      "2012": {"buyback": 1440, "modification": 240},
      "2013": {"buyback": 270, "modification": 45},
      "2014": {"buyback": -960, "modification": -160},
      "2015": {"buyback": -2340, "modification": -390},
      "from": 35001,
      "to": 40000
    }, {
      "2010": {"buyback": 2940, "modification": 490},
      "2011": {"buyback": 1980, "modification": 330},
      "2012": {"buyback": 930, "modification": 155},
      "2013": {"buyback": 0, "modification": 0},
      "2014": {"buyback": -1440, "modification": -240},
      "2015": {"buyback": -2850, "modification": -475},
      "from": 40001,
      "to": 45000
    }, {
      "2010": {"buyback": 2430, "modification": 405},
      "2011": {"buyback": 1500, "modification": 250},
      "2012": {"buyback": 450, "modification": 75},
      "2013": {"buyback": -690, "modification": -115},
      "2014": {"buyback": -1950, "modification": -325},
      "2015": {"buyback": -3330, "modification": -555},
      "from": 45001,
      "to": 50000
    }, {
      "2010": {"buyback": 1950, "modification": 325},
      "2011": {"buyback": 1020, "modification": 170},
      "2012": {"buyback": 0, "modification": 0},
      "2013": {"buyback": -1170, "modification": -195},
      "2014": {"buyback": -2430, "modification": -405},
      "2015": {"buyback": -3840, "modification": -640},
      "from": 50001,
      "to": 55000
    }, {
      "2010": {"buyback": 1500, "modification": 250},
      "2011": {"buyback": 570, "modification": 95},
      "2012": {"buyback": -480, "modification": -80},
      "2013": {"buyback": -1650, "modification": -275},
      "2014": {"buyback": -2880, "modification": -480},
      "2015": {"buyback": -4290, "modification": -715},
      "from": 55001,
      "to": 60000
    }, {
      "2010": {"buyback": 1080, "modification": 180},
      "2011": {"buyback": 0, "modification": 0},
      "2012": {"buyback": -900, "modification": -150},
      "2013": {"buyback": -2100, "modification": -350},
      "2014": {"buyback": -3360, "modification": -560},
      "2015": {"buyback": -4770, "modification": -795},
      "from": 60001,
      "to": 65000
    }, {
      "2010": {"buyback": 660, "modification": 110},
      "2011": {"buyback": -270, "modification": -45},
      "2012": {"buyback": -1350, "modification": -225},
      "2013": {"buyback": -2520, "modification": -420},
      "2014": {"buyback": -3810, "modification": -635},
      "2015": {"buyback": -5220, "modification": -870},
      "from": 65001,
      "to": 70000
    }, {
      "2010": {"buyback": 270, "modification": 45},
      "2011": {"buyback": -660, "modification": -110},
      "2012": {"buyback": -1740, "modification": -290},
      "2013": {"buyback": -2970, "modification": -495},
      "2014": {"buyback": -4260, "modification": -710},
      "2015": {"buyback": -5700, "modification": -950},
      "from": 70001,
      "to": 75000
    }, {
      "2010": {"buyback": 0, "modification": 0},
      "2011": {"buyback": -1050, "modification": -175},
      "2012": {"buyback": -2160, "modification": -360},
      "2013": {"buyback": -3390, "modification": -565},
      "2014": {"buyback": -4710, "modification": -785},
      "2015": {"buyback": -6150, "modification": -1025},
      "from": 75001,
      "to": 80000
    }, {
      "2010": {"buyback": -450, "modification": -75},
      "2011": {"buyback": -1440, "modification": -240},
      "2012": {"buyback": -2550, "modification": -425},
      "2013": {"buyback": -3810, "modification": -635},
      "2014": {"buyback": -5130, "modification": -855},
      "2015": {"buyback": -6570, "modification": -1095},
      "from": 80001,
      "to": 85000
    }, {
      "2010": {"buyback": -780, "modification": -130},
      "2011": {"buyback": -1800, "modification": -300},
      "2012": {"buyback": -2940, "modification": -490},
      "2013": {"buyback": -4230, "modification": -705},
      "2014": {"buyback": -5550, "modification": -925},
      "2015": {"buyback": -7020, "modification": -1170},
      "from": 85001,
      "to": 90000
    }, {
      "2010": {"buyback": -1110, "modification": -185},
      "2011": {"buyback": -2160, "modification": -360},
      "2012": {"buyback": -3330, "modification": -555},
      "2013": {"buyback": -4620, "modification": -770},
      "2014": {"buyback": -5970, "modification": -995},
      "2015": {"buyback": -7440, "modification": -1240},
      "from": 90001,
      "to": 95000
    }, {
      "2010": {"buyback": -1440, "modification": -240},
      "2011": {"buyback": -2520, "modification": -420},
      "2012": {"buyback": -3720, "modification": -620},
      "2013": {"buyback": -5010, "modification": -835},
      "2014": {"buyback": -6390, "modification": -1065},
      "2015": {"buyback": -7860, "modification": -1310},
      "from": 95001,
      "to": 100000
    }, {
      "2010": {"buyback": -1770, "modification": -295},
      "2011": {"buyback": -2850, "modification": -475},
      "2012": {"buyback": -4080, "modification": -680},
      "2013": {"buyback": -5400, "modification": -900},
      "2014": {"buyback": -6780, "modification": -1130},
      "2015": {"buyback": -8280, "modification": -1380},
      "from": 100001,
      "to": 105000
    }, {
      "2010": {"buyback": -2070, "modification": -345},
      "2011": {"buyback": -3180, "modification": -530},
      "2012": {"buyback": -4440, "modification": -740},
      "2013": {"buyback": -5790, "modification": -965},
      "2014": {"buyback": -7200, "modification": -1200},
      "2015": {"buyback": -8670, "modification": -1445},
      "from": 105001,
      "to": 110000
    }, {
      "2010": {"buyback": -2370, "modification": -395},
      "2011": {"buyback": -3510, "modification": -585},
      "2012": {"buyback": -4800, "modification": -800},
      "2013": {"buyback": -6150, "modification": -1025},
      "2014": {"buyback": -7590, "modification": -1265},
      "2015": {"buyback": -9090, "modification": -1515},
      "from": 110001,
      "to": 115000
    }, {
      "2010": {"buyback": -2670, "modification": -445},
      "2011": {"buyback": -3840, "modification": -640},
      "2012": {"buyback": -5130, "modification": -855},
      "2013": {"buyback": -6510, "modification": -1085},
      "2014": {"buyback": -7950, "modification": -1325},
      "2015": {"buyback": -9480, "modification": -1580},
      "from": 115001,
      "to": 120000
    }, {
      "2010": {"buyback": -2970, "modification": -495},
      "2011": {"buyback": -4140, "modification": -690},
      "2012": {"buyback": -5460, "modification": -910},
      "2013": {"buyback": -6870, "modification": -1145},
      "2014": {"buyback": -8340, "modification": -1390},
      "2015": {"buyback": -9870, "modification": -1645},
      "from": 120001,
      "to": 125000
    }, {
      "2010": {"buyback": -3240, "modification": -540},
      "2011": {"buyback": -4470, "modification": -745},
      "2012": {"buyback": -5790, "modification": -965},
      "2013": {"buyback": -7230, "modification": -1205},
      "2014": {"buyback": -8700, "modification": -1450},
      "2015": {"buyback": -10260, "modification": -1710},
      "from": 125001,
      "to": 130000
    }, {
      "2010": {"buyback": -3540, "modification": -590},
      "2011": {"buyback": -4740, "modification": -790},
      "2012": {"buyback": -6120, "modification": -1020},
      "2013": {"buyback": -7560, "modification": -1260},
      "2014": {"buyback": -9060, "modification": -1510},
      "2015": {"buyback": -10620, "modification": -1770},
      "from": 130001,
      "to": 135000
    }, {
      "2010": {"buyback": -3780, "modification": -630},
      "2011": {"buyback": -5040, "modification": -840},
      "2012": {"buyback": -6420, "modification": -1070},
      "2013": {"buyback": -7920, "modification": -1320},
      "2014": {"buyback": -9420, "modification": -1570},
      "2015": {"buyback": -11010, "modification": -1835},
      "from": 135001,
      "to": 140000
    }, {
      "2010": {"buyback": -4050, "modification": -675},
      "2011": {"buyback": -5340, "modification": -890},
      "2012": {"buyback": -6750, "modification": -1125},
      "2013": {"buyback": -8250, "modification": -1375},
      "2014": {"buyback": -9780, "modification": -1630},
      "2015": {"buyback": -11370, "modification": -1895},
      "from": 140001,
      "to": 145000
    }, {
      "2010": {"buyback": -4320, "modification": -720},
      "2011": {"buyback": -5610, "modification": -935},
      "2012": {"buyback": -7050, "modification": -1175},
      "2013": {"buyback": -8550, "modification": -1425},
      "2014": {"buyback": -10110, "modification": -1685},
      "2015": {"buyback": -11730, "modification": -1955},
      "from": 145001,
      "to": 150000
    }, {
      "2010": {"buyback": -4560, "modification": -760},
      "2011": {"buyback": -5880, "modification": -980},
      "2012": {"buyback": -7320, "modification": -1220},
      "2013": {"buyback": -8880, "modification": -1480},
      "2014": {"buyback": -10470, "modification": -1745},
      "2015": {"buyback": -12090, "modification": -2015},
      "from": 150001,
      "to": 155000
    }, {
      "2010": {"buyback": -4800, "modification": -800},
      "2011": {"buyback": -6150, "modification": -1025},
      "2012": {"buyback": -7620, "modification": -1270},
      "2013": {"buyback": -9180, "modification": -1530},
      "2014": {"buyback": -10800, "modification": -1800},
      "2015": {"buyback": -12450, "modification": -2075},
      "from": 155001,
      "to": 160000
    }, {
      "2010": {"buyback": -5040, "modification": -840},
      "2011": {"buyback": -6390, "modification": -1065},
      "2012": {"buyback": -7890, "modification": -1315},
      "2013": {"buyback": -9480, "modification": -1580},
      "2014": {"buyback": -11100, "modification": -1850},
      "2015": {"buyback": -12780, "modification": -2130},
      "from": 160001,
      "to": 165000
    }, {
      "2010": {"buyback": -5280, "modification": -880},
      "2011": {"buyback": -6660, "modification": -1110},
      "2012": {"buyback": -8160, "modification": -1360},
      "2013": {"buyback": -9780, "modification": -1630},
      "2014": {"buyback": -11430, "modification": -1905},
      "2015": {"buyback": -13140, "modification": -2190},
      "from": 165001,
      "to": 170000
    }, {
      "2010": {"buyback": -5490, "modification": -915},
      "2011": {"buyback": -6900, "modification": -1150},
      "2012": {"buyback": -8430, "modification": -1405},
      "2013": {"buyback": -10080, "modification": -1680},
      "2014": {"buyback": -11760, "modification": -1960},
      "2015": {"buyback": -13470, "modification": -2245},
      "from": 170001,
      "to": 175000
    }, {
      "2010": {"buyback": -5700, "modification": -950},
      "2011": {"buyback": -7140, "modification": -1190},
      "2012": {"buyback": -8700, "modification": -1450},
      "2013": {"buyback": -10350, "modification": -1725},
      "2014": {"buyback": -12060, "modification": -2010},
      "2015": {"buyback": -13800, "modification": -2300},
      "from": 175001,
      "to": 180000
    }, {
      "2010": {"buyback": -5910, "modification": -985},
      "2011": {"buyback": -7380, "modification": -1230},
      "2012": {"buyback": -8970, "modification": -1495},
      "2013": {"buyback": -10650, "modification": -1775},
      "2014": {"buyback": -12360, "modification": -2060},
      "2015": {"buyback": -14100, "modification": -2350},
      "from": 180001,
      "to": 185000
    }, {
      "2010": {"buyback": -6120, "modification": -1020},
      "2011": {"buyback": -7590, "modification": -1265},
      "2012": {"buyback": -9210, "modification": -1535},
      "2013": {"buyback": -10920, "modification": -1820},
      "2014": {"buyback": -12660, "modification": -2110},
      "2015": {"buyback": -14430, "modification": -2405},
      "from": 185001,
      "to": 190000
    }, {
      "2010": {"buyback": -6330, "modification": -1055},
      "2011": {"buyback": -7830, "modification": -1305},
      "2012": {"buyback": -9450, "modification": -1575},
      "2013": {"buyback": -11190, "modification": -1865},
      "2014": {"buyback": -12960, "modification": -2160},
      "2015": {"buyback": -14760, "modification": -2460},
      "from": 190001,
      "to": 195000
    }, {
      "2010": {"buyback": -6540, "modification": -1090},
      "2011": {"buyback": -8040, "modification": -1340},
      "2012": {"buyback": -9690, "modification": -1615},
      "2013": {"buyback": -11460, "modification": -1910},
      "2014": {"buyback": -13230, "modification": -2205},
      "2015": {"buyback": -15060, "modification": -2510},
      "from": 195001,
      "to": 200000
    }, {
      "2010": {"buyback": -6720, "modification": -1120},
      "2011": {"buyback": -8250, "modification": -1375},
      "2012": {"buyback": -9930, "modification": -1655},
      "2013": {"buyback": -11700, "modification": -1950},
      "2014": {"buyback": -13530, "modification": -2255},
      "2015": {"buyback": -15360, "modification": -2560},
      "from": 200001,
      "to": 205000
    }, {
      "2010": {"buyback": -6900, "modification": -1150},
      "2011": {"buyback": -8460, "modification": -1410},
      "2012": {"buyback": -10170, "modification": -1695},
      "2013": {"buyback": -11970, "modification": -1995},
      "2014": {"buyback": -13800, "modification": -2300},
      "2015": {"buyback": -15660, "modification": -2610},
      "from": 205001,
      "to": 210000
    }, {
      "2010": {"buyback": -7080, "modification": -1180},
      "2011": {"buyback": -8670, "modification": -1445},
      "2012": {"buyback": -10380, "modification": -1730},
      "2013": {"buyback": -12210, "modification": -2035},
      "2014": {"buyback": -14070, "modification": -2345},
      "2015": {"buyback": -15960, "modification": -2660},
      "from": 210001,
      "to": 215000
    }, {
      "2010": {"buyback": -7260, "modification": -1210},
      "2011": {"buyback": -8880, "modification": -1480},
      "2012": {"buyback": -10620, "modification": -1770},
      "2013": {"buyback": -12450, "modification": -2075},
      "2014": {"buyback": -14340, "modification": -2390},
      "2015": {"buyback": -16260, "modification": -2710},
      "from": 215001,
      "to": 220000
    }, {
      "2010": {"buyback": -7440, "modification": -1240},
      "2011": {"buyback": -9060, "modification": -1510},
      "2012": {"buyback": -10830, "modification": -1805},
      "2013": {"buyback": -12690, "modification": -2115},
      "2014": {"buyback": -14610, "modification": -2435},
      "2015": {"buyback": -16530, "modification": -2755},
      "from": 220001,
      "to": 225000
    }, {
      "2010": {"buyback": -7620, "modification": -1270},
      "2011": {"buyback": -9240, "modification": -1540},
      "2012": {"buyback": -11040, "modification": -1840},
      "2013": {"buyback": -12930, "modification": -2155},
      "2014": {"buyback": -14880, "modification": -2480},
      "2015": {"buyback": -16830, "modification": -2805},
      "from": 225001,
      "to": 230000
    }, {
      "2010": {"buyback": -7770, "modification": -1295},
      "2011": {"buyback": -9450, "modification": -1575},
      "2012": {"buyback": -11250, "modification": -1875},
      "2013": {"buyback": -13170, "modification": -2195},
      "2014": {"buyback": -15120, "modification": -2520},
      "2015": {"buyback": -17100, "modification": -2850},
      "from": 230001,
      "to": 235000
    }, {
      "2010": {"buyback": -7950, "modification": -1325},
      "2011": {"buyback": -9630, "modification": -1605},
      "2012": {"buyback": -11430, "modification": -1905},
      "2013": {"buyback": -13380, "modification": -2230},
      "2014": {"buyback": -15360, "modification": -2560},
      "2015": {"buyback": -17370, "modification": -2895},
      "from": 235001,
      "to": 240000
    }, {
      "2010": {"buyback": -8100, "modification": -1350},
      "2011": {"buyback": -9780, "modification": -1630},
      "2012": {"buyback": -11640, "modification": -1940},
      "2013": {"buyback": -13590, "modification": -2265},
      "2014": {"buyback": -15600, "modification": -2600},
      "2015": {"buyback": -17640, "modification": -2940},
      "from": 240001,
      "to": 245000
    }, {
      "2010": {"buyback": -8250, "modification": -1375},
      "2011": {"buyback": -9960, "modification": -1660},
      "2012": {"buyback": -11820, "modification": -1970},
      "2013": {"buyback": -13830, "modification": -2305},
      "2014": {"buyback": -15870, "modification": -2645},
      "2015": {"buyback": -17910, "modification": -2985},
      "from": 245001,
      "to": 1245000
    }],
    "years": [{
      "year": 2012,
      "trims": [{
        "name": "Sedan 4D SE TDI",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 19907, "modification": 5807}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 19937, "modification": 5812}}, {
          "locations": ["SE"],
          "value": {"buyback": 19967, "modification": 5817}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 19997, "modification": 5822}
        }, {"locations": ["California"], "value": {"buyback": 20027, "modification": 5827}}]
      }, {
        "name": "Sedan 4D SEL TDI",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 23267, "modification": 6367}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 23297, "modification": 6372}}, {
          "locations": ["SE"],
          "value": {"buyback": 23327, "modification": 6377}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 23357, "modification": 6382}
        }, {"locations": ["California"], "value": {"buyback": 23387, "modification": 6387}}]
      }],
      "options": [{
        "name": "No Auto. Trans. ",
        "value": {"buyback": -900, "modification": -150}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 630, "modification": 105}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 690, "modification": 115}
      }, {"name": "Navigation System  (SE Only)", "value": {"buyback": 750, "modification": 125}}]
    }, {
      "year": 2013,
      "trims": [{
        "name": "Sedan 4D SE TDI I4",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 22517, "modification": 6242}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 22547, "modification": 6247}}, {
          "locations": ["SE"],
          "value": {"buyback": 22577, "modification": 6252}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 22607, "modification": 6257}
        }, {"locations": ["California"], "value": {"buyback": 22637, "modification": 6262}}]
      }, {
        "name": "Sedan 4D SEL TDI I4",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 26807, "modification": 6957}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 26837, "modification": 6962}}, {
          "locations": ["SE"],
          "value": {"buyback": 26867, "modification": 6967}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 26897, "modification": 6972}
        }, {"locations": ["California"], "value": {"buyback": 26927, "modification": 6977}}]
      }],
      "options": [{
        "name": "No Auto. Trans. ",
        "value": {"buyback": -930, "modification": -155}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 720, "modification": 120}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 780, "modification": 130}
      }, {"name": "Navigation System  (SE Only)", "value": {"buyback": 840, "modification": 140}}]
    }, {
      "year": 2014,
      "trims": [{
        "name": "Sedan 4D SE TDI I4",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 27077, "modification": 7002}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 27107, "modification": 7007}}, {
          "locations": ["SE"],
          "value": {"buyback": 27137, "modification": 7012}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 27167, "modification": 7017}
        }, {"locations": ["California"], "value": {"buyback": 27197, "modification": 7022}}]
      }, {
        "name": "Sedan 4D SEL TDI I4",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 28847, "modification": 7297}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 28877, "modification": 7302}}, {
          "locations": ["SE"],
          "value": {"buyback": 28907, "modification": 7307}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 28937, "modification": 7312}
        }, {"locations": ["California"], "value": {"buyback": 28967, "modification": 7317}}]
      }],
      "options": [{
        "name": "No Auto. Trans. ",
        "value": {"buyback": -960, "modification": -160}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 750, "modification": 125}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 810, "modification": 135}
      }, {"name": "Navigation System  (SE Only)", "value": {"buyback": 870, "modification": 145}}]
    }, {
      "year": 2015,
      "trims": [{
        "name": "Sedan 4D SE TDI I4",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 29327, "modification": 7377}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 29357, "modification": 7382}}, {
          "locations": ["SE"],
          "value": {"buyback": 29387, "modification": 7387}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 29417, "modification": 7392}
        }, {"locations": ["California"], "value": {"buyback": 29447, "modification": 7397}}]
      }, {
        "name": "Sedan 4D SEL TDI I4",
        "data": [{
          "locations": ["Central", "Eastern", "Midwest", "SW"],
          "value": {"buyback": 32747, "modification": 7947}
        }, {"locations": ["Desert SW", "Mountain"], "value": {"buyback": 32777, "modification": 7952}}, {
          "locations": ["SE"],
          "value": {"buyback": 32807, "modification": 7957}
        }, {
          "locations": ["New England", "Pacific NW"],
          "value": {"buyback": 32837, "modification": 7962}
        }, {"locations": ["California"], "value": {"buyback": 32867, "modification": 7967}}]
      }],
      "options": [{
        "name": "No Auto. Trans. ",
        "value": {"buyback": -960, "modification": -160}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["Central", "Eastern", "Midwest", "Mountain", "Pacific NW", "New England"],
        "value": {"buyback": 750, "modification": 125}
      }, {
        "name": "Power Sunroof (SE Only) ",
        "locations": ["California", "Desert SW", "SE", "SW"],
        "value": {"buyback": 810, "modification": 135}
      }, {"name": "Navigation System  (SE Only)", "value": {"buyback": 870, "modification": 145}}]
    }]
  }]

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
      modification: trimValue.modification + optionsValue.modification + mileageAdjustment.modification,
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
