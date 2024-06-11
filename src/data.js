/**
 * Data from the model.
 * Created by Graeme Morgan - January 2024
 */

import {
  BLACK_COLOR,
  BLUE_COLOR,
  GREEN_COLOR,
  LIFT_COLOR,
  MOUNTAIN_LOCAL_POSITION,
  SCALE_VALUE,
  TRAVERSE_COLOR,
  WHITE_COLOR,
} from "./constants.js"


export const MORRISEY_DATA = [

  {
    name: 'theSticks_1',
    path: {
      name: '01_G_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '01_G_box_1',
      color: GREEN_COLOR
    },
    label: {
      name: '01_W_label_1',
      color: WHITE_COLOR
    },
    icon: {
      name: '01_W_icon_1',
      color: WHITE_COLOR
    }
  },
  {
    name: 'theSticks_2',
    path: {
      name: '',
      color: ''
    },
    box: {
      name: '01_G_box_2',
      color: GREEN_COLOR
    },
    label: {
      name: '01_W_label_2',
      color: WHITE_COLOR
    },
    icon: {
      name: '01_W_icon_2',
      color: WHITE_COLOR
    }
  },
  {
    name: 'secondGrowth',
    path: {
      name: '02_B_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '02_B_box',
      color: BLUE_COLOR
    },
    label: {
      name: '02_W_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '02_W_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'iDunnoBottom',
    path: {
      name: '03_B_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '03_B_box',
      color: BLUE_COLOR
    },
    label: {
      name: '03_W_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '03_W_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'iDunnoTop',
    path: {
      name: '04_B_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '04_B_box',
      color: BLUE_COLOR
    },
    label: {
      name: '04_W_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '04_W_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'outOfTheWoods',
    path: {
      name: '05_B_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '05_B_box',
      color: BLUE_COLOR
    },
    label: {
      name: '05_W_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '05_W_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'shiner',
    path: {
      name: '06_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '06_box',
      color: BLUE_COLOR
    },
    label: {
      name: '06_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '06_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'stillSmokin',
    type: 'blue',
    path: {
      name: '07_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '07_box',
      color: BLUE_COLOR
    },
    label: {
      name: '07_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '07_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'ccRiders',
    type: 'blue',
    path: {
      name: '08_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '08_box',
      color: BLUE_COLOR
    },
    label: {
      name: '08_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '08_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'tellyGram',
    type: 'blue',
    path: {
      name: '09_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '09_box',
      color: BLUE_COLOR
    },
    label: {
      name: '09_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '09_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'homeRun_top',
    type: 'green',
    path: {
      name: '10_geoTop',
      color: GREEN_COLOR
    },
    box: {
      name: '10_1_box',
      color: GREEN_COLOR
    },
    label: {
      name: '10_1_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '10_1_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'homeRun_mid',
    type: 'green',
    path: {
      name: '10_geoBottom1',
      color: GREEN_COLOR
    },
    box: {
      name: '10_2_box',
      color: GREEN_COLOR
    },
    label: {
      name: '10_2_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '10_2_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'homeRun_bottom',
    type: 'green',
    path: {
      name: '10_geoBottom2',
      color: GREEN_COLOR
    },
    box: {
      name: '10_3_box',
      color: GREEN_COLOR
    },
    label: {
      name: '10_3_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '10_3_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'morriesyExpress',
    type: 'lift',
    path: {
      name: '11_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '11_box',
      color: LIFT_COLOR
    },
    label: {
      name: '11_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '11_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'midLifeCrisis',
    type: 'blue',
    path: {
      name: '12_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '12_box',
      color: BLUE_COLOR
    },
    label: {
      name: '12_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '12_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'anticipation',
    type: 'green',
    path: {
      name: '13_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '13_box',
      color: GREEN_COLOR
    },
    label: {
      name: '13_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '13_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'grandReturn',
    type: 'blue',
    path: {
      name: '14_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '14_box',
      color: BLUE_COLOR
    },
    label: {
      name: '14_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '14_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'coverShot',
    type: 'black',
    path: {
      name: '15_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '15_box',
      color: BLACK_COLOR
    },
    label: {
      name: '15_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '15_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'spinCycle',
    type: 'black',
    path: {
      name: '16_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '16_box',
      color: BLACK_COLOR
    },
    label: {
      name: '16_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '16_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'agitator',
    type: 'black',
    path: {
      name: '17_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '17_box',
      color: BLACK_COLOR
    },
    label: {
      name: '17_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '17_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'staticCling',
    type: 'black',
    path: {
      name: '18_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '18_box',
      color: BLACK_COLOR
    },
    label: {
      name: '18_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '18_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'itTatters',
    type: 'black',
    path: {
      name: '19_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '19_box',
      color: BLACK_COLOR
    },
    label: {
      name: '19_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '19_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'wringer',
    type: 'black',
    path: {
      name: '20_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '20_box',
      color: BLACK_COLOR
    },
    label: {
      name: '20_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '20_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'tumbleDry_1',
    type: 'black',
    path: {
      name: '21_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '21_1_box',
      color: BLACK_COLOR
    },
    label: {
      name: '21_1_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '21_1_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'tumbleDry_2',
    type: 'black',
    path: {
      name: '',
      color: ''
    },
    box: {
      name: '21_2_box',
      color: BLACK_COLOR
    },
    label: {
      name: '21_2_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '21_2_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'lintTrap',
    type: 'black',
    path: {
      name: '22_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '22_box',
      color: BLACK_COLOR
    },
    label: {
      name: '22_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '22_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'backInTime_1',
    type: 'blue',
    path: {
      name: '23_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '23_1_box',
      color: BLUE_COLOR
    },
    label: {
      name: '23_1_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '23_1_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'backInTime_2',
    type: 'blue',
    path: {
      name: '23_geo2',
      color: BLUE_COLOR
    },
    box: {
      name: '23_2_box',
      color: BLUE_COLOR
    },
    label: {
      name: '23_2_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '23_2_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'staticClingReturn',
    type: 'traverse',
    path: {
      name: '24_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '24_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '24_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'fairways',
    type: 'green',
    path: {
      name: '25_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '25_box',
      color: GREEN_COLOR
    },
    label: {
      name: '25_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '25_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'burfieldReturn',
    type: 'traverse',
    path: {
      name: '26_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '26_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '26_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'morriseyPlatter',
    type: 'green',
    path: {
      name: '27_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '27_box',
      color: LIFT_COLOR
    },
    label: {
      name: '27_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '27_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'burfieldLift',
    type: 'lift',
    path: {
      name: '28_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '28_box',
      color: LIFT_COLOR
    },
    label: {
      name: '28_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '28_icon',
      color: WHITE_COLOR
    }
  },

  {
    name: 'crystalLift',
    type: 'lift',
    path: {
      name: '29_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '29_box',
      color: LIFT_COLOR
    },
    label: {
      name: '29_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '29_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'westBowlTBar',
    type: 'lift',
    path: {
      name: '30_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '30_box',
      color: LIFT_COLOR
    },
    label: {
      name: '30_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '30_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'harrysRun',
    type: 'blue',
    path: {
      name: '31_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '31_box',
      color: BLUE_COLOR
    },
    label: {
      name: '31_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '31_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'longDraw',
    type: 'blue',
    path: {
      name: '32_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '32_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '32_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'westSyde',
    type: 'blue',
    path: {
      name: '33_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '33_box',
      color: BLUE_COLOR
    },
    label: {
      name: '33_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '33_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'shortDraw',
    type: 'blue',
    path: {
      name: '36_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '36_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '36_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'kookamunga',
    type: 'double_black',
    path: {
      name: '37_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '37_box',
      color: BLACK_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '37_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'toiletBowl',
    type: 'black',
    path: {
      name: '38_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '38_box',
      color: BLACK_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '38_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'chief',
    type: 'black',
    path: {
      name: '39_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '39_box',
      color: BLACK_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '39_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'chiefNose',
    type: 'black',
    path: {
      name: '40_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '40_box',
      color: BLACK_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '40_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'midMountain',
    type: 'black',
    path: {
      name: '41_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '41_box',
      color: BLACK_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '41_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'juniperRidge',
    type: 'black',
    path: {
      name: '43_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '43_box',
      color: BLACK_COLOR
    },
    label: {
      name: '43_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '43_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'blueLine',
    type: 'blue',
    path: {
      name: '44_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '44_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '44_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'crystalRun',
    type: 'blue',
    path: {
      name: '50_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '50_box',
      color: BLUE_COLOR
    },
    label: {
      name: '50_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '50_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'roundabout',
    type: 'blue',
    path: {
      name: '52_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '52_box',
      color: BLUE_COLOR
    },
    label: {
      name: '52_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '52_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: '7MileRoad',
    type: 'traverse',
    path: {
      name: '53_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '53_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '53_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '53_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'expo',
    type: 'doubleBlack',
    path: {
      name: '54_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '54_box',
      color: BLACK_COLOR
    },
    label: {
      name: '54_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '54_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'munroRidge',
    type: 'blue',
    path: {
      name: '55_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '55_box',
      color: BLUE_COLOR
    },
    label: {
      name: '55_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '55_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'challenger',
    type: 'doubleBlack',
    path: {
      name: '56_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '56_box',
      color: BLACK_COLOR
    },
    label: {
      name: '56_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '56_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'tightenYerBoots',
    type: 'black',
    path: {
      name: '57_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '57_box',
      color: BLACK_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '57_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'runawayLane',
    type: 'blue',
    path: {
      name: '58_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '58_box',
      color: BLUE_COLOR
    },
    label: {
      name: '58_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '58_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'blazer',
    type: 'blue',
    path: {
      name: '59_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '59_box',
      color: BLUE_COLOR
    },
    label: {
      name: '59_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '59_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'cruiser',
    type: 'blue',
    path: {
      name: '60_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '60_box',
      color: BLUE_COLOR
    },
    label: {
      name: '60_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '60_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'broadway',
    type: 'black',
    path: {
      name: '61_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '61_box',
      color: BLACK_COLOR
    },
    label: {
      name: '61_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '61_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'exhibition',
    type: 'blue',
    path: {
      name: '62_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '62_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: WHITE_COLOR
    },
    icon: {
      name: '62_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: '5Ave',
    type: 'black',
    path: {
      name: '63_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '63_box',
      color: BLACK_COLOR
    },
    label: {
      name: '63_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '63_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'intimidator',
    type: 'black',
    path: {
      name: '64_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '64_box',
      color: BLACK_COLOR
    },
    label: {
      name: '64_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '64_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sting',
    type: 'black',
    path: {
      name: '65_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '65_box',
      color: BLACK_COLOR
    },
    label: {
      name: '65_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '65_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'bluff',
    type: 'black',
    path: {
      name: '66_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '66_box',
      color: BLACK_COLOR
    },
    label: {
      name: '66_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '66_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'cariboo',
    type: 'black',
    path: {
      name: '67_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '67_box',
      color: BLACK_COLOR
    },
    label: {
      name: '67_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '67_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sunburstExpress',
    type: 'lift',
    path: {
      name: '68_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '68_box',
      color: LIFT_COLOR
    },
    label: {
      name: '68_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '68_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'elevation',
    type: 'lift',
    path: {
      name: '69_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '69_box',
      color: LIFT_COLOR
    },
    label: {
      name: '69_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '69_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'osv',
    type: 'blue',
    path: {
      name: '70_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '70_box',
      color: BLUE_COLOR
    },
    label: {
      name: '70_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '70_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'cahilty',
    type: 'green',
    path: {
      name: '71_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '71_box',
      color: GREEN_COLOR
    },
    label: {
      name: '71_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '71_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'chute',
    type: 'doubleBlack',
    path: {
      name: '72_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '72_box',
      color: BLACK_COLOR
    },
    label: {
      name: '72_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '72_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'hatTrick',
    type: 'black',
    path: {
      name: '73_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '73_box',
      color: BLACK_COLOR
    },
    label: {
      name: '73_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '73_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'crystalLane',
    type: 'black',
    path: {
      name: '74_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '74_box',
      color: GREEN_COLOR
    },
    label: {
      name: '74_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '74_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'spillWay',
    type: 'black',
    path: {
      name: '75_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '75_box',
      color: BLACK_COLOR
    },
    label: {
      name: '75_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '75_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: '5Mile',
    type: 'green',
    path: {
      name: '76_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '76_box',
      color: GREEN_COLOR
    },
    label: {
      name: '76_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '76_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'lastChance',
    type: 'blue',
    path: {
      name: '77_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '77_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '77_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'alley',
    type: 'blue',
    path: {
      name: '78_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '',
      color: ''
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'burfieldOutrun',
    type: 'green',
    path: {
      name: '79_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '',
      color: ''
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'gilsTraverse',
    type: 'traverse',
    path: {
      name: '80_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '80_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '80_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '80_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'skunkHike',
    type: 'traverse',
    path: {
      name: '81_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '81_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '81_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '81_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'skunk',
    type: 'black',
    path: {
      name: '',
      color: ''
    },
    box: {
      name: '82_box',
      color: BLACK_COLOR
    },
    label: {
      name: '82_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '82_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'gils',
    type: 'black',
    path: {
      name: '',
      color: ''
    },
    box: {
      name: '83_box',
      color: BLACK_COLOR
    },
    label: {
      name: '83_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '83_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'offset',
    type: 'doubleBlack',
    path: {
      name: '84_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '84_box',
      color: BLACK_COLOR
    },
    label: {
      name: '84_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '84_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'gilsCatTrack',
    type: 'traverse',
    path: {
      name: '85_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '85_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '85_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '85_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'boundaryRoad',
    type: 'traverse',
    path: {
      name: '86_geo',
      color: TRAVERSE_COLOR
    },
    box: {
      name: '86_box',
      color: TRAVERSE_COLOR
    },
    label: {
      name: '86_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '86_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'homesteader',
    type: 'green',
    path: {
      name: '90_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '90_box',
      color: GREEN_COLOR
    },
    label: {
      name: '90_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '90_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'loneFirWest',
    type: 'blue',
    path: {
      name: '91_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '91_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '91_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'loneFirCentre',
    type: 'blue',
    path: {
      name: '92_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '92_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '92_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'grannieGreenes',
    type: 'blue',
    path: {
      name: '93_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '93_box',
      color: BLUE_COLOR
    },
    label: {
      name: '93_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '93_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sunDowner',
    type: 'blue',
    path: {
      name: '94_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '94_box',
      color: BLUE_COLOR
    },
    label: {
      name: '94_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '94_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sunCatcher',
    type: 'blue',
    path: {
      name: '95_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '95_box',
      color: BLUE_COLOR
    },
    label: {
      name: '95_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '95_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sunDance',
    type: 'blue',
    path: {
      name: '96_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '96_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '96_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sunRise',
    type: 'blue',
    path: {
      name: '97_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '97_box',
      color: BLUE_COLOR
    },
    label: {
      name: '97_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '97_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'threeBears',
    type: 'blue',
    path: {
      name: '98_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '98_box',
      color: BLUE_COLOR
    },
    label: {
      name: '98_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '98_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'peakABoo',
    type: 'black',
    path: {
      name: '99_geo',
      color: BLACK_COLOR
    },
    box: {
      name: '99_box',
      color: BLACK_COLOR
    },
    label: {
      name: '99_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '99_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'rambler',
    type: 'green',
    path: {
      name: '100_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '100_box',
      color: GREEN_COLOR
    },
    label: {
      name: '100_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '100_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'sundanceExpress',
    type: 'lift',
    path: {
      name: '101_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '101_box',
      color: LIFT_COLOR
    },
    label: {
      name: '101_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '101_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'villagePlatter',
    type: 'lift',
    path: {
      name: '102_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '',
      color: ''
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'orientLift',
    type: 'lift',
    path: {
      name: '110_geo',
      color: LIFT_COLOR
    },
    box: {
      name: '110_box',
      color: LIFT_COLOR
    },
    label: {
      name: '110_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '110_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'eastVillageSkiWay',
    type: 'green',
    path: {
      name: '111_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '111_box',
      color: GREEN_COLOR
    },
    label: {
      name: '111_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '111_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'mtMorriseyConnector',
    type: 'green',
    path: {
      name: '112_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '',
      color: ''
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'carpeDiem',
    type: 'blue',
    path: {
      name: '113_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '113_box',
      color: BLUE_COLOR
    },
    label: {
      name: '113_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '113_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'eastVillageConnectorBottom',
    type: 'green',
    path: {
      name: '114_geo',
      color: GREEN_COLOR
    },
    box: {
      name: '',
      color: ''
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '',
      color: ''
    }
  },
  {
    name: 'plaisir',
    type: 'blue',
    path: {
      name: '115_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '115_box',
      color: BLUE_COLOR
    },
    label: {
      name: '',
      color: ''
    },
    icon: {
      name: '115_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'czesc',
    type: 'blue',
    path: {
      name: '116_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '116_box',
      color: BLUE_COLOR
    },
    label: {
      name: '116_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '116_icon',
      color: WHITE_COLOR
    }
  },
  {
    name: 'ausfahrt',
    type: 'blue',
    path: {
      name: '117_geo',
      color: BLUE_COLOR
    },
    box: {
      name: '117_box',
      color: BLUE_COLOR
    },
    label: {
      name: '117_label',
      color: WHITE_COLOR
    },
    icon: {
      name: '117_icon',
      color: WHITE_COLOR
    }
  },










];

