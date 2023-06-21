const legacyFontSizes = {
  extraLarge: {
    replacementName: 'extraLarge',
    replacementValue: 'gigantic',
  },
  extraSmall: {
    replacementName: 'extraSmall',
    replacementValue: 'tiny',
  },
}

const fontSizes = {
  gigantic: 'gigantic',
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny'
}

const proxyOptions = {
  get: (target, propName, receiver) => {
    if (propName in legacyFontSizes) {
      console.warn(`${propName} is deprecated. Use ${legacyFontSizes[propName].replacementName} instead.`)

      return legacyFontSizes[propName].replacementValue
    }

    return Reflect.get(target, propName)
  }
}

const proxiedFontSizes = new Proxy(fontSizes, proxyOptions)
Object.keys(proxiedFontSizes)
