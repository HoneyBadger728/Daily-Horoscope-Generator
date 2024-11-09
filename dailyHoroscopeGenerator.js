const dayOutlook = () => {
    const dayOutlooks = [`like a punch to the face`, `a breath of fresh air`, `full of learning opportunities`];
    return dayOutlooks[Math.floor(Math.random() * 3)]
}

const financialOutlook = () => {
    const financialOutlooks = [' expect to experience a not-so-great depression', `soon be enjoying champagne wishes and caviar dreams`, 
        `look for a great investment opportunity`, `be able to afford that avocado toast you've always wanted to try`];
    return financialOutlooks[Math.floor(Math.random() * 4)]
}



const getMyHoroscope = () => {
    console.log(`Your day will be ${dayOutlook()}. When it comes to money, you should ${financialOutlook()}.`)
}

getMyHoroscope()