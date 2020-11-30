import GlobalStyles from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyles />
    </>
  ),
];
