export function checkShopNow(shopNow) {
    return (
    JSON.stringify(shopNow).includes('.co.uk')?
    'Shop Now'
    :JSON.stringify(shopNow).includes('.pl')?
    'Kup teraz'
    :JSON.stringify(shopNow).includes('.de')?
    'Jetzt shoppen'
    :JSON.stringify(shopNow).includes('.at')?
    'Jetzt shoppen'
    :JSON.stringify(shopNow).includes('.ch')?
    'Jetzt shoppen'
    :JSON.stringify(shopNow).includes('.fr')?
    'Acheter maintenant'
    :JSON.stringify(shopNow).includes('.es')?
    'Compra ahora'
    :JSON.stringify(shopNow).includes('.pt')?
    'Compre já'
    :JSON.stringify(shopNow).includes('.it')?
    'Acquista ora'
    :JSON.stringify(shopNow).includes('.nl')?
    'Koop nu'
    :JSON.stringify(shopNow).includes('.no')?
    'Kjøp nå'
    :JSON.stringify(shopNow).includes('.fi')?
    'Osta nyt'
    :JSON.stringify(shopNow).includes('.dk')?
    'Køb nu'
    :JSON.stringify(shopNow).includes('.se')?
    'Handla nu'
    :JSON.stringify(shopNow).includes('.hu')?
    'Rendelj most'
    :JSON.stringify(shopNow).includes('.sk')?
    'Do obchodu'
    :JSON.stringify(shopNow).includes('.cz')?
    'Do obchodu'
    :'Check your link'
    )
}

export function checkImage(img) {
    return JSON.stringify(img).includes('.co.uk')?'uk':JSON.stringify(img).includes('.ch')? 'chde' :JSON.stringify(img).slice(21,23)
}

export function checkLink(link) {
    return JSON.stringify(link).includes('.co.uk')?'co.uk':JSON.stringify(link).slice(21,23)
}

export function checkId(id) {
    return JSON.stringify(id).substring(JSON.stringify(id).length-6)
}

export function checkSoonEnding(soonEnding) {
    return (
        JSON.stringify(soonEnding).includes('.co.uk')?
        'Uk'
        :JSON.stringify(soonEnding).includes('.pl')?
        'Pl'
        :JSON.stringify(soonEnding).includes('.de')?
        'De'
        :JSON.stringify(soonEnding).includes('.at')?
        'De'
        :JSON.stringify(soonEnding).includes('.ch')?
        'De'
        :JSON.stringify(soonEnding).includes('.fr')?
        'Fr'
        :JSON.stringify(soonEnding).includes('.es')?
        'Es'
        :JSON.stringify(soonEnding).includes('.pt')?
        'Pt'
        :JSON.stringify(soonEnding).includes('.it')?
        'It'
        :JSON.stringify(soonEnding).includes('.nl')?
        'Nl'
        :JSON.stringify(soonEnding).includes('.no')?
        'No'
        :JSON.stringify(soonEnding).includes('.fi')?
        'Fi'
        :JSON.stringify(soonEnding).includes('.dk')?
        'Dk'
        :JSON.stringify(soonEnding).includes('.se')?
        'Se'
        :JSON.stringify(soonEnding).includes('.hu')?
        'Hu'
        :JSON.stringify(soonEnding).includes('.sk')?
        'Sk'
        :JSON.stringify(soonEnding).includes('.cz')?
        'Cz'
        :'Check your link'
    )
}
