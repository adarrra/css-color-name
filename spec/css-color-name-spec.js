'use babel';

import Provider from '../lib/provider';

describe('Provider', () => {
    beforeEach(() => {
      activationPromise = atom.packages.activatePackage('css-color-name');
      openCssPromise = atom.workspace.open('test.css');

      waitsForPromise(() => {
        return activationPromise;
      });
      waitsForPromise(() => {
        return openCssPromise;
      });
    });

    it('activate css file', () => {
        expect(atom.packages.isPackageActive('css-color-name')).toBe(true);
    });
});
