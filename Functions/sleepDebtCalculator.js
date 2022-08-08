const getSleepHours = day => {
  if(day === 'monday'){
    return 8
  } else if(day === 'tuesday') {
    return 7
  } else if(day === 'wednesday') {
    return 6
  } else if(day === 'thursday') {
    return 5
  } else if(day === 'friday') {
    return 4
  } else if(day === 'saturday') {
    return 4
  } else if(day === 'sunday') {
    return 3
  }

 
}

const getActualSleepHours = () => 8 + 7 + 6 + 5 + 4 + 3;

const getIdealSleepHours = idealHours => idealHours * 7


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(6)
  const debtHours = idealSleepHours - actualSleepHours

  if(actualSleepHours === idealSleepHours) {
    console.log(`Perfect amount of sleep. Sleep debt is ${debtHours} `)
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`More sleep than needed. Sleep debt is ${debtHours}`)
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest. Sleep debt is ${debtHours}`)
  }
}

calculateSleepDebt()
