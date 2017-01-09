'use babel';

import { CompositeDisposable } from 'atom'; 
import Provider from './provider';

class CssColorNameAutocomplete {
    constructor () {
        this.provider = null;
        this.subscriptions = null;
    }

    activate () {
        this.subscriptions = new CompositeDisposable();
    }

    deactivate () {
        if (this.subscriptions) {
            this.subscriptions.dispose();
        }
        this.provider = null;
        this.subscriptions = null;
    }

    provide () {
        return this.getProvider();
    }

    getProvider () {
        if (this.provider) {
            return this.provider;
        }
        this.provider = new Provider();
        this.subscriptions.add(this.provider);

        return this.provider;
    }
}

export default new CssColorNameAutocomplete();
