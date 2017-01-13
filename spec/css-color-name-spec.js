'use babel';

import Provider from '../lib/provider';

describe('when we open a stylefile', () => {
    // beforeEach(() => {

    it('should be activated', () => {
        waitsForPromise(() => {
            alert(11111111111111);
            atom.workspace.open('test.css')
            .then((editor) => {
                alert('inside');
                expect(atom.packages.isPackageActive('css-color-name')).toBe(true);
            })
        });
    });
});

// describe('Provider', () => {
//     beforeEach(() => {
//       activationPromise = atom.packages.activatePackage('css-color-name');
//       openCssPromise = atom.workspace.open('test.css');
// 
//       waitsForPromise(() => {
//         return activationPromise;
//       });
//       waitsForPromise(() => {
//         return openCssPromise;
//       });
//     });
// 
//     it('activate css file', () => {
//         expect(atom.packages.isPackageActive('css-color-name')).toBe(true);
//     });
// });
