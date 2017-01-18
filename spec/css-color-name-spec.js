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
// https://discuss.atom.io/t/activationhooks-break-unit-tests/36028/9
// Pasha


describe('activated when we open a stylefile', () => {
    beforeEach(() => {


      waitsForPromise(() => {
        return atom.packages.activatePackage('language-css').then(()=>{
            console.log('activated css');
        });
      });

      waitsForPromise(() => {
          return atom.workspace.open('test.css').then(()=>{
              console.log('opened file');
              atom.packages.triggerDeferredActivationHooks();  
          });
      });
        

      waitsForPromise(() => {
          return atom.packages.activatePackage('css-color-name').then(()=>{
              console.log('activated my p');
          });
      });
      
    });


    it('activate css file', () => {
    //    expect(atom.workspace.getActiveTextEditor().getPath()).toContain('test.css');
        expect(atom.packages.isPackageActive('css-color-name')).toBe(true);

    });
});
