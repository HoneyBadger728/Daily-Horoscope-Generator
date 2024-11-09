const dayOutlook = () => {
    const outlooks = [`like a punch to the face`, `a breath of fresh air`, `full of learning opportunities`]
    return outlooks[Math.floor(Math.random() * 3)]
}

const getMyHoroscope = () => {
    console.log(`Your day will be ${dayOutlook()}.`)
}

getMyHoroscope()