'use babel';

import CssColorNameView from './css-color-name-view';
import { CompositeDisposable } from 'atom';

export default {

  cssColorNameView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.cssColorNameView = new CssColorNameView(state.cssColorNameViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.cssColorNameView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'css-color-name:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.cssColorNameView.destroy();
  },

  serialize() {
    return {
      cssColorNameViewState: this.cssColorNameView.serialize()
    };
  },

  toggle() {
    console.log('CssColorName was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
