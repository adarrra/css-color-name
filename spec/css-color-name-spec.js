'use babel';

import Provider from '../lib/provider';
import CssColorNameAutocomplete from '../lib/main'

// describe('when we open a stylefile', () => {
//     // beforeEach(() => {
// 
//     it('should be activated', () => {
//         waitsForPromise(() => {
//             atom.workspace.open('test.css')
//             .then((editor) => {
//                 console.log('editor');
//                 alert('pause');
//                 expect(atom.packages.isPackageActive('css-color-name')).toBe(true);
//             })
//         });
//     });
// });

// atom --test --timeout 60 ./spec/css-color-name-spec.js
// https://github.com/XuXuDev/ceekey-atom/blob/8b5ad74a2743927c8429a7add1fb16ea1ab704f4/packages/atom-ternjs/spec/atom-ternjs-spec.js
// https://github.com/atom/autocomplete-plus/tree/master/spec
// https://discuss.atom.io/t/debugging-tests-specs/21222
// https://discuss.atom.io/t/texteditor-buffer-async-problem-in-specs/36222

// we should activate package with triggerDeferredActivationHooks and activation grammar (see link above)... activatePackage doesn't return anything not work because I use hooks
// sooo ... maybe I shoudn't test it at all!! Only autocomplete...

describe('activated when we open a stylefile', () => {
    beforeEach(() => {

    //   waitsForPromise(() => {
    //     return atom.workspace.open('test.css');
    //   });

      waitsForPromise(() => {
        return  atom.packages.triggerActivationHook("language-css:grammar-used")
      });
      // atom.packages.triggerActivationHook("language-changes:grammar-used")
      
      atom.packages.triggerDeferredActivationHooks();
      waitsForPromise(() => {
        return atom.packages.activatePackage('css-color-name');
      });
      
    });


    it('activate css file', () => {
    //    expect(atom.workspace.getActiveTextEditor().getPath()).toContain('test.css');
        expect(atom.packages.isPackageActive('css-color-name')).toBe(true);

    });
});
