//'use babel'

import { CompositeDisposable } from 'atom' // FIXME: WHAT DOES THIS MEAN?
import Provider from './provider'

class CssColorNameAutocomplete {
  constructor () {
    this.provider = null
    this.subscriptions = null
  }

  activate () {
    this.subscriptions = new CompositeDisposable()
  }

  deactivate () {
    if (this.subscriptions) {
      this.subscriptions.dispose()
    }
    this.provider = null
    this.subscriptions = null
  }

  provide () {
    return this.getProvider()
  }

  getProvider () {
    if (this.provider) {
      return this.provider
    }
    this.provider = new Provider()
    // this.provider.loadCompletions()
    this.subscriptions.add(this.provider)

    return this.provider
  }
}

export default new CssColorNameAutocomplete()
