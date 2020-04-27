import { createFixtures } from '../..';

export const barBazQuux = createFixtures(['id'], [['BAR'], ['BAZ'], ['QUUX']]);

export const barBaz = createFixtures(['id'], [['BAR'], ['BAZ']]);

export const quux = createFixtures(['id'], [['QUUX']]);
