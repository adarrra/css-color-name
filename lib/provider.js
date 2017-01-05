'use babel'

import { Disposable } from 'atom'
// import { filter } from 'fuzzaldrin'
// import API from './modules/api'
// import COMPONENT from './modules/component'

// import props from '../properties'
// import colors from '../colors'
console.log('i am loading!');

export default class Provider extends Disposable {
  constructor () {debugger;
    super()
    this.selector = '.source.css, .source.stylus, .source.sass, .source.css.less, .source.css.scss'
    this.completions = {}
  }

  getSuggestions (request) {debugger;
    const { prefix, bufferPosition, editor } = request
    const scopes = request.scopeDescriptor.getScopesArray()
    console.log(request);
    console.log('!!!!!!!', request);
    const line = editor.getTextInRange([ [bufferPosition.row, 0], bufferPosition ])

    return new Promise((resolve) => {
      let suggestions = []
      
    //   if(smth.includes(smth from props)) {
    //       suggestions.push...
    //       // also first letter?
    //   }

      // console.log(scopes)
      if (COMPONENT.isAttributeValue(scopes)) {
        // console.log('COMPONENT.isAttributeValue')
        // suggestions = COMPONENT.getAttributeValueCompletions(line)
      } else if (COMPONENT.isTag(scopes, line)) {
        suggestions = COMPONENT.getTagNameCompletions()
      } else if (COMPONENT.isAttribute(prefix, scopes)) {
        suggestions = COMPONENT.getAttributeNameCompletions(editor, bufferPosition)
      } else {
        // suggestions = API.getCompletions(line)
        // console.log('other')
      }

      resolve(this.cenas(prefix, suggestions))
    })
  }

  cenas (prefix, suggestions) {
    return filter(suggestions, prefix, {
      key: 'displayText'
    })
  }

  onDidInsertSuggestion ({ editor, suggestion }) {debugger;
    // console.log(suggestion)
    if (/^Vue 2\..*\+$/.test(suggestion.rightLabelHTML)) {
      setTimeout(function () {
        atom.commands.dispatch(atom.views.getView(editor), 'autocomplete-plus:activate', { activatedManually: false })
      }, 1)
    }
  }

  // loadCompletions () {
  //   this.completions = {}
  //   fs.readFile(path.resolve(__dirname, '..', 'completion.json'), (error, content) => {
  //     if (error) {
  //       this.completions = JSON.parse(content)
  //     }
  //   })
  // }
}
