import github from '@astrojs/github';

export default {
  output: 'static',
  integrations: [github()],
  base: '/ushauri-bora-site/',
};
